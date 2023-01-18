const routes = require("express").Router();
const Msg = require("../models/Message");

routes.post("/", (req, res)=> {
    Msg.create(req.body, (error)=> {
        res.send({success : true});
    })
        })

routes.get("/", (req,res)=> {
    Msg.find({}, (error,result)=> {
        res.send(result);
    })
})

routes.get("/:id", (req,res)=> {
    let id = req.params.id;
    Msg.find({_id : id}, (error,result)=> {
        res.send(result[0]);
    })
})
module.exports = routes;