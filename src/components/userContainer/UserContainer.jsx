import React, { useState, useEffect } from "react";

import "./UserContainer.css";
import UserCard from "../userCard/UserCard";
import { getAllUsers } from "../../utils/fetch";

const UserContainer = () => {
  //make state here called users, set to empty array
  const [users, setUsers] = useState([]);

  //function using use effect. (async) call getallusers function, set state users to getallusers.
  //on line 13 do.map function on the state users. render usercard pass down {user}

  useEffect(() => {
    const getUsers = async () => {
      // setUsers({ getAllUsers });
      const tmp = await getAllUsers();
      await setUsers([...tmp.users]);

      try {
        console.log(users);
      } catch (error) {
        console.error(error);
      }
    };

    getUsers();
  }, []);

  return (
    <div className="usercontainer-wrapper">
      <div className="card-container">
        {users.map((item) => {
          return <UserCard user={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default UserContainer;
