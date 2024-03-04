import React, { useState } from "react";
import { login } from "../../utils/fetch";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (e, setter, state) => {
    setter(e.target.value);
    console.log(state);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(`hello ${username} from handle submit`);
    const data = await login(username, password);
    await setUser(data.user);
  };

  return (
    <div>
      <h3>Login</h3>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          onChange={(e) => changeHandler(e, setUsername, username)}
        />
        <input
          placeholder="password"
          onChange={(e) => changeHandler(e, setPassword, password)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
