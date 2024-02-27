import React, { useState } from "react";
import { signup } from "../../utils/fetch";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (e, setter, state) => {
    setter(e.target.value);
    console.log(state);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let form = document.getElementById("signupForm");

    console.log("hello from handle submit");
    await signup(username, email, password);
    form.reset();
  };

  return (
    <div>
      <h3>Signup</h3>
      <form id="signupForm" onSubmit={handleSubmit}>
        <input
          placeholder="username"
          onChange={(e) => changeHandler(e, setUsername, username)}
        />
        <input
          placeholder="email"
          onChange={(e) => changeHandler(e, setEmail, email)}
        />
        <input
          placeholder="password"
          onChange={(e) => changeHandler(e, setPassword, password)}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};
export default Signup;
