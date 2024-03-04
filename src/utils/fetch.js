export const signup = async (username, email, password) => {
  const response = await fetch("http://localhost:5001/users/signup", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  });

  const data = await response.json();
  console.log("data in fetch signup", data);
  return data;
};

export const login = async (username, password) => {
  const response = await fetch("http://localhost:5001/users/login", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  const data = await response.json();
  console.log("data in fetch login", data);
  return data;
};

export const getAllUsers = async () => {
  const response = await fetch("http://localhost:5001/users/getusers", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  console.log("data in fetch users", data);
  return data;
};

export const updateUser = async (username, email) => {
  const response = await fetch("http://localhost:5001/users/updateUser", {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
    }),
  });

  const data = await response.json();

  console.log("data in update user", data);
  return data;
};
