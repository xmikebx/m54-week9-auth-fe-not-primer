import { useState } from "react";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LogOrSign from "./components/logOrSign/LogOrSign";
import UserContainer from "./components/userContainer/UserContainer";
import "./App.css";

function App() {
  const [user, setUser] = useState({});
  return (
    <div className="wrapper">
      <Header />
      {!user.username ? (
        <LogOrSign setUser={setUser} />
      ) : (
        <h2> You are logged in, {user.username}</h2>
      )}
      <UserContainer />
      <Footer />
    </div>
  );
}

export default App;
