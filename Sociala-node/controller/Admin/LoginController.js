const routes = require("express").Router();
const Admin = require("../../models/Admin/Login");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");

routes.post("/", (req, res)=> {
    let user = req.body.userName;
    let password = sha1(req.body.password);
    Admin.find({userName : user}, (error, result)=> {
        console.log(result)
        if(result.length == 1) {
            return
            if(result[0].password == password) {
                let obj = {id : result[0]._id, userName : result[0].userName};
                let token = jwt.sign(obj , "Aliasger web");
                res.send({success : true, status : 200, token : token});
            }else {
                res.send({success : false,status: 401, errType : 2});
            }
        }else {
            res.send({success : false,status: 401, errType : 1});
        }
    })
})

routes.get("/", (req,res)=> {
    Admin.find({}, (error,result)=> {
        res.send(result);
    })
})

routes.put("/:id", (req,res)=> {
    let id = req.params.id;
    Admin.updateMany({_id : id}, req.body, (error)=> {
res.send({success : true, status : 200})
    })
})
module.exports = routes;