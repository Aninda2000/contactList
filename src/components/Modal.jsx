import React, { useState } from "react";
import { updateUserAPI } from "../apiCallHelper";
import "../userModal.css";

const Modal = ({ user, close, updateUser }) => {
  const [values, setValues] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    website: user.website,
  });
  const { name, email, phone, website } = values;

  const onChangeHandler = (name) => (e) => {
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  // updating user
  const updateUserHeper = () => {
    updateUserAPI(values, user.id)
      .then((res) => {
        updateUser(res);
        close();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="userModal">
      <div className="inofContainer">
        <div className="inputHolder">
          <span>Name</span>
          <input
            type="text"
            className="input"
            value={name}
            onChange={onChangeHandler("name")}
          />
        </div>
        <div className="inputHolder">
          <span>Email</span>
          <input
            type="text"
            className="input"
            value={email}
            onChange={onChangeHandler("email")}
          />
        </div>
        <div className="inputHolder">
          <span>Phone</span>
          <input
            type="text"
            className="input"
            value={phone}
            onChange={onChangeHandler("phone")}
          />
        </div>
        <div className="inputHolder">
          <span>Website</span>
          <input
            type="text"
            className="input"
            value={website}
            onChange={onChangeHandler("website")}
          />
        </div>
        <div className="editButtons">
          <div className="button cancel" onClick={close}>
            CANCEL
          </div>
          <div className="button save" onClick={updateUserHeper}>
            SAVE
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
