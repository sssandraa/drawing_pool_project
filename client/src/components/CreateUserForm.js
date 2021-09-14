import { useState } from 'react'
import { useHistory } from "react-router";

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
        <>
        <h4>sign up</h4>
        <form className="newuserform" onSubmit={handleSubmit}>
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
            <input type="submit" value="create" />
        </form>
        </>
    )
}

export default CreateUserForm;