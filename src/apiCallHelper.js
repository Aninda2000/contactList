const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// Getting all users
export const getAllUsersAPI = () => {
  return fetch(BASE_URL, { method: "GET" }).then((response) => response.json());
};
// creating new user
export const createUserAPI = (body) => {
  return fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};
// updating user
export const updateUserAPI = (body, id) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};

// deleting user
export const deleteUserAPI = (id) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};
