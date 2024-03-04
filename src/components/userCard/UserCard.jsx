import React, { useState } from "react";
import { updateUser } from "../../utils/fetch";

import "./UserCard.css";

//extract user in function

const UserCard = ({ user, setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const changeHandler = (e, setter, state) => {
    setter(e.target.value);
    console.log(state);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await updateUser(username, email);
    await setUser(data.user);
  };

  return (
    <div className="user-card-wrapper">
      <h3 className="smll">{user.username}</h3>
      <h3 className="smll">{user.email}</h3>
      <div className="change-wrapper">
        <h3 className="lrg">Update Details</h3>
        <form onSubmit={handleSubmit}>
          <input
            className="notFullWidth"
            placeholder={user.username}
            onChange={(e) => changeHandler(e, setUsername, username)}
          />
          <input
            className="notFullWidth"
            placeholder={user.email}
            onChange={(e) => changeHandler(e, setEmail, email)}
          />
          <div className="button-wrapper">
            <button type="submit">Update</button>
            <button type="submit">Delete</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserCard;
