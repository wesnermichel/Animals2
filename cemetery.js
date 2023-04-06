// const express = require('express');

// const router = express.Router();

// router.use(express.urlencoded({extended: false}));

// // INDEX
// router.get('/', (req, res) => {
//     res.render('animals/index.ejs', {animals: animals})
// })

// // CREATE A NEW ANIMAL
// router.get('/new', (req, res) => {
//     res.render("animals/new.ejs")
// })

// //EDIT********

// router.get("/:id/edit", (req, res)=>{
//     res.render("edit.ejs", {animal: animals[req.params.indexOfanimalsArray], index: req.params.indexOfanimalsArray})

// });

// //UPDATE

// router.put("/:id", (req, res)=>{
//     const animal = await Animal.findByIdAndUpdate(req.params.id, req.body, {
//         new: true
//     })
//     res.redirect("/animals");
// })

// //DELETE
// router.delete("/:id", (req, res)=>{
//    const animals = await Animal.findByIdAndDelete(res.params.id)
//    res.send({success: true, animal});
//     // res.redirect("/animals")
//     });

// // SHOW
// router.get('/:id', async (req, res) => {
//     const animal = await Animal.findByID(req.params.id);
//     res.send(animal);
// });

// “Env”:{
//     “DB_USER”: wesnerSEI;
//     “DB_PASSWORD”: World123

//     CONST PORT= process.env.PORT || 3000;

//     module.exports= {DATABASE_URL, PORT}

//     mongodb+srv://wesnerm:World123@cluster0.n2bg73v.mongodb.net/?retryWrites=true&w=majority
//     };

//connection file(db)
//puts a;l theenvinto theprocess.envobject

// require('dotenv').config();
// const mongoose = require('mongoose');

// //variable that is used to connect to the database
// const connectionString = process.env.DATABASE_URL;

// //new connection to mongoose bro
// mongoose.connect(connectionString);
// mongoose.connection.on("Connected", ()=> {
//     console.log("Connected to the database");
// })

// mongoose.connection.on("error", (err)=> {
//     console.log("Error connecting to the database");
//     console.log(err);
// mongoose.connection.on("disconnected", ()=> {
//     console.log("Disconnected from the database");
// });

// });



-----------------_ENTRIES-----------------------------

// { species: "Tyrannosaurus Rex", 
// extinct: true, location: "North America", 
// lifeExpectancy: 28 },
// { species: "Blue Whale",
//  extinct: false,
//   location: "Global",
//    lifeExpectancy: 90 },
// { species: "Woolly Mammoth", 
// extinct: true, 
// location: "Eurasia",
//  lifeExpectancy: 60 },
// { species: "Bengal Tiger",
//  extinct: false,
//   location: "India",
//    lifeExpectancy: 10 },
// { species: "Giant Squid",
//  extinct: false,
//   location: "Global", 
//   lifeExpectancy: 5 },
// { species: "Gorilla", 
// extinct: false, 
// location: "Africa",
//  lifeExpectancy: 35 },
// { species: "Dodo",
//  extinct: true, 
//  location: "Mauritius",
//   lifeExpectancy: 20 },
// { species: "Kakapo",
//  extinct: false,
//   location: "New Zealand", 
//   lifeExpectancy: 90 },
// { species: "Red Panda", 
// extinct: false, 
// location: "Himalayas", 
// lifeExpectancy: 14 },
// { species: "Snow Leopard",
//  extinct: false, 
//  location: "Central Asia",
// lifeExpectancy: 10 }


DELETE:

OLD
<form action="/animals/delete/<%- animal._id %>" method="POST"></form>

<h1> Animal Detials</h1>
</a> <h3>Species<%= animal.species %></h3>
     <h3>Extinct:<%= animal.extinct %></h3>
    <h3>Location:<%= animal.location %></h3>
    <h3>Life Expectancy:<%= animal.lifeExpectancy %></h3>