const Instarouter = require('../Controller/controller') // We are going to insert the Controller Package in the [Instarouter]  

const exp = require('express')  //Exporting the Express Package into A Variable

const router = exp.Router() //Now That the we are going to insert in  the router

router.post('/Hello1',Instarouter.Hello)    //now insert the details of the post

module.exports = router;