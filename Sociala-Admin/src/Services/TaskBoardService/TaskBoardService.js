import axios from "axios";

const apiUrl = "http://localhost:4000/api/admin/taskboard";

let addBoard = (obj) => {
    return axios.post( apiUrl, obj)
  }
let updateBoard = (id,obj) => {
    return axios.put( apiUrl + "/" + id, obj)
  }

let getBoard = () => {
  return axios.get( apiUrl )
}
let deleteBoard = (id) => {
  return axios.delete( apiUrl + "/" + id )
}

export { addBoard,getBoard,deleteBoard,updateBoard };
