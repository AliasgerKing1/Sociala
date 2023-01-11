import React, {useState} from 'react'
import Child from './Child'
import axios from "axios";

const Parents = () => {


    let getData = async ()=> {
        let result = await axios.get("https://fakestoreapi.com/products");
        console.log(result.data)
        return result;
    }




let [name, setName] = useState("name");
let [email, setEmail] = useState("email");
let [password, setPassword] = useState("password");
let [newName, setNewName] = useState("");
let [newEmail, setNewEmail] = useState("");
let [newPasword, setNewPassword] = useState("");



let userForm = {
    name : name,
    email : email,
    password : password
}

console.log(userForm.name)
console.log(userForm.email)
console.log(userForm.password)




    let [b, setB] = useState(100);
    // let [name, setName] = useState("Rohit");
    // let [newName, setNewName] = useState("");


    let data = [
        {
            name : "Ali",
            fee : 1000,
            description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus adipisci dignissimos quaerat quidem impedit cum quasi sequi atque dolor. Laudantium reprehenderit nam voluptatem incidunt quibusdam error consequatur fugiat ullam iure!"
        },
        {
            name : "NO",
            fee : 9000,
            description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus adipisci dignissimos quaerat quidem impedit cum quasi sequi atque dolor. Laudantium reprehenderit nam voluptatem incidunt quibusdam error consequatur fugiat ullam iure!"
        },
        {
            name : "Dost",
            fee : 345600,
            description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus adipisci dignissimos quaerat quidem impedit cum quasi sequi atque dolor. Laudantium reprehenderit nam voluptatem incidunt quibusdam error consequatur fugiat ullam iure!"
        },
    ]
    let a = 100;

    let demo = (x)=> {
        setB(x);
    }

    let changeName = ()=> {
// setName(newName)
    }

    let submit = ()=> {
setName(newName)
setEmail(newEmail)
setPassword(newPasword)
    }

  return (
    <div>
    {/* {
    data.map((x, n)=> {
        return (
        <Child key={n} thing = {x}/>
        )
    })
    }

    <h3>Total : {b}</h3>
    <button onClick={()=>demo(200)}>ok</button>
<br />
<h3>YOur Name {name}</h3> 
 <br />
 <br />
Name : <input onChange={(e)=> {
    setNewName(e.target.value)
}} type="text" /> <button onClick={changeName}>Change</button>
 */}

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />


<h2>{name}</h2>
<h2>{email}</h2>
<h2>{password}</h2>
<div className="row">
    <div className="col-md-6 offset-md-3">
    <form>
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" onChange={(e)=> {
            setNewName(e.target.value);
        }} className='form-control' />
    </div>
    <div className="form-group">
        <label htmlFor="name">Email</label>
        <input type="email" onChange={(e)=> {
            setNewEmail(e.target.value);
        }} className='form-control' />
    </div>
    <div className="form-group">
        <label htmlFor="name">password</label>
        <input type="text" onChange={(e)=> {
            setNewPassword(e.target.value);
        }} className='form-control' />
    </div>
<br />
    <input type="button" value="Submit" onClick={submit} className='btn btn-primary' />
</form>
    </div>
</div>

<button onClick={getData}>get Data</button>

{/* {
    result.data.map((x, n)=> {
        return(
            <h3>{x.name}</h3>
<h5>{}</h5>
<p>{}</p>

        )
    })
} */}


    </div>
  )
}



export default Parents