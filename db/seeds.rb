# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

bothandthen = User.create(name: "both.and.then")
banana_leaf = User.create(name:"banana_leaf")
chasingthebell = User.create(name:"chasingthebell")
fruitcakedaily = User.create(name:"fruitcakedaily")

dream1 = Dream.create(user_id:1, image: "https://data.whicdn.com/images/348565581/original.jpg", description: "in a car the monster thing is trying to get out or in ? it doesn’t attack me and the person i’m with. 
in a hotel room  texting i text B by mistake so many * and typos of sorry.", date_time: "April 23, 2020 at 11:17am")

dream2 = Dream.create(user_id:4, image:"https://i.ytimg.com/vi/iwIOBruFXJI/maxresdefault.jpg", description: "me K and A and another roommate are outside on a suburban street the other roommates runs towards us, K is talking about being godparents. i feel like i’m about to have a fever. when the other roommates gets to us she wants to show us her eyeshadows that is cream and shiny and purple but there’s also a huge welt above her eye it’s clear she was just hit by a car in the road. i say i knew someone was going to get hit my a car i could just feel it. ", date_time: "May 12, 2020 at 10:34am")

dream3 = Dream.create(user_id:2, image:"https://i.pinimg.com/150x150/0c/1a/5e/0c1a5ebb6ce8fe1deabb4d71acb51e2a.jpg", description:"i look up at the sky and the stars are making shapes like hearts like diamonds in the sky. and then little pink firework streams. i look up at them amazed and keep stumbling in between groups of ppl bc i can’t stop looking up. i loose w. i try to ft w because i feel very strongly that they need to see this. for a moment it’s like i’m on molly, i ft who i think is w but someone else picks up a girl idk. and then i hang up, then i get put into a group ft call with many other people. so many little square boxes. the group was called lovenote. i run into w and show them the star/fireworks but when i look at the sky they’re mostly gone and i notice a man leaning on a ladder and he’s pointing a laser show machine at the sky. the sky feels like it’s very close to him. like he is leaning his hand on the sky for balance on the ladder.", date_time: "July 25, 2021 at 9:45am")

Note.create(user_id:2, dream_id:2, text:"sounds pretty intense, I wonder if it was trying to warn you about something.")

Note.create(user_id:1, dream_id:1, text:"soooo strange...texting in a dream. i don't think i've ever done that lol")

puts "seeded"
