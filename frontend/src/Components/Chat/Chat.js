import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Chat() {
  const [user,setUser] = useState({name:'',email:'',dp:''});
  const [isLoading,setLoading] = useState(true);

  const fetchData = async () => {
    const res = await axios.post('http://localhost:9000/userInfo', { 
      email: user.email,
    });
    console.log(res);
  };

  useEffect(() => {
    setLoading(false);
  },[])

  const getData = () => {
    let data = localStorage.getItem('myData');
    data = JSON.parse(data);
    const { name, email, dp } = data.data;
    setUser({name:name,email:email,dp:dp});
  };

  useEffect(() => {
    getData();
    fetchData();
  },[isLoading])

  return (
    <div>
      Chat {user.name} {user.email} {user.dp}
    </div>
  )
};

export default Chat;