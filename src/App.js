import React, { useEffect, useState } from "react";
import { getAllUsersAPI } from "./apiCallHelper";
import "./App.css";
import AddUserModal from "./components/AddUserModal";
import Contactcard from "./components/Contactcard";

const App = () => {
  useEffect(() => {
    // getting all users
    getAllUsersAPI().then((res) => setUsers(res));
  }, []);
  const [users, setUsers] = useState([]);
  const [addUserModal, setAddUserModal] = useState(false);
  const deleteUser = (id) => {
    const filterUsers = users.filter((user) => user.id !== id);
    setUsers(filterUsers);
  };
  // updating user
  const updateUser = (data) => {
    const copy = [...users];
    copy[data.id - 1] = data;
    setUsers(copy);
  };
  // saving new user
  const saveUserHelper = (data) => {
    console.log(data);
    setUsers([...users, data]);
    setAddUserModal(false);
  };
  return (
    <div className="container">
      <div className="contactsListContainer">
        {users.length > 0 &&
          users.map((user) => (
            <Contactcard
              key={user.id}
              user={user}
              deleteUser={(id) => deleteUser(id)}
              updateUser={(data) => updateUser(data)}
            />
          ))}
      </div>
      {addUserModal && (
        <AddUserModal
          close={() => setAddUserModal(false)}
          saveUser={(data) => saveUserHelper(data)}
        />
      )}
      {/* ADD BUTTON */}
      {!addUserModal && (
        <div className="addButton" onClick={() => setAddUserModal(true)}>
          <span>+</span>
        </div>
      )}
    </div>
  );
};

export default App;
