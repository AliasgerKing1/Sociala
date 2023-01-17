
import axios from 'axios';

  let GetUserProfile =() => {
    return axios.get('http://localhost:3000/api/userprofile', {
      headers: generateHead(),
    });
  }
  let generateHead =() => {
    let token = localStorage.getItem('token');
    let head = new axios().set('Authorization', JSON.stringify(token));
    return head;
  }
export {GetUserProfile}