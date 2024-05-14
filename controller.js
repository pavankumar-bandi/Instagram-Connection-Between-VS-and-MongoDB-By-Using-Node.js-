const con = require('../Model/model')

const Hello = async(req,res)=>{
    try{
        const {username,password,name,age} = req.body;
        const Hello2 = await con.create({username,password,name,age})
        res.json(Hello2);
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {Hello};