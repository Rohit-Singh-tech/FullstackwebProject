import React, { use } from "react";
import "./Admin.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRef } from "react";
import update from "./update.jsx";
import { Link } from "react-router-dom";

const UserUpdateTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getusers = async () => {
        const response = await axios.get("http://localhost:8000/api/user/getAllUsers");
        setUsers(response.data);
    }
    getusers();
  }, []);

  const deleteuser = async(userid) => {
    await axios.delete(`http://localhost:8000/api/user/delete/${userid}`)
      .then((response) => {
     setUsers(users.filter((user) => user._id !== userid));
     window.location.href="/component/Admin";
      })
      .catch((error) => {
        console.error("There was an error!", error);
      })

    };


  return (
    <div className="table-container">
      <h2>User Management</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Username</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,index) =>{ 
            return(
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.pwd}</td>
              <td>
                <button className="btn update" onClick={() => window.location.href=`/component/update/${user._id}`}>Update</button>
                <button className="btn delete" onClick={() => deleteuser(user._id)}>Delete</button>
              </td>
            </tr>
          )  })}
        </tbody>
      </table>
    </div>
  );
};

export default UserUpdateTable;