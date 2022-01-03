const mongoose = require ('mongoose')
const User = require ("./User")

mongoose.connect ("mongodb://localhost/testdb")

run()
async function run (){
    
try {
const new = new User({name:"Kyle", age: 26, email: "sup@yahoo.com"})
await user.save()
},

console.log(user)
catch (e){
    console.log(e.message)
}
