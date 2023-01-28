const routes = require("express").Router();
const Photo = require("../../../models/Admin/ProfilePhoto");
const randstr = require("random-string");
const path = require("path");

routes.get("/", (req,res)=> {
    
    Photo.find({}, (error, result)=> {
        let new_result = result.map((x)=> {
            x.image = "http://localhost:4000/admin_image/" + x.image;
            return x;
        })
        res.send(new_result);
        })
})

routes.post("/", (req,res)=> {
    let body = req.body.data;
        let image = req.files.photo;
    randorm_string = randstr({length : 50 });
    let original_name = image.name;
    let arr = original_name.split(".");
    let ext = arr[arr.length-1];
    let new_name = randorm_string + "." + ext;
    body.image = new_name;
    image.mv(path.resolve() + "/assets/admin_image/" + new_name, (error)=> {
        Photo.create(body, (error)=> {
            let obj = {image : "http://localhost:4000/admin_image/" + new_name};
         res.send(obj);
     })
    })
})


module.exports = routes;