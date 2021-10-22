import { useState } from 'react'
import { useHistory } from "react-router";
import { Link } from 'react-router-dom'

function CreateUserForm({ setUser }){

    const [name, setName] = useState('');
    const history = useHistory();
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        // console.log('name', name);
        // console.log('password', password);

        fetch('http://localhost:3000/users', {
            credentials: "include",
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, password })
        }).then((response) => {
            if (response.ok) {
            response.json().then((newUser) => setUser(newUser)) 
            history.push("/dreams");
            } else {
                response.json().then((err) => setErrors([...errors, err.error]));
                history.push("/new-user")
            }
        })
    }

    return(
        <div className="signup">
        <h4>Join </h4>
        <img className="glow" src="https://d2w9rnfcy7mm78.cloudfront.net/2749880/original_e4c48f1c535d4623a18e77d55df259e2.gif?1537578415?bc=1" alt="clear deep sea glow creature"/>
        <form className="signupform" onSubmit={handleSubmit}>
            <label htmlFor="name">name </label>
            <input 
            type="text" 
            name="name" 
            value={name}
            onChange={event => setName(event.target.value)}
            />

            <label htmlFor="password">password </label>
            <input 
            type="password"
            name="password" 
            value={password}
            onChange={event => setPassword(event.target.value)}
            />
            <input className="submitbutton" type="submit" value="create" />
        </form>
        <Link to="/">already have an account ➺</Link>
        </div>
    )
}

export default CreateUserForm;