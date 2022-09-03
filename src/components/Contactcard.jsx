import React, { useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsGlobe2, BsTrash } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { deleteUserAPI } from "../apiCallHelper";
import Modal from "./Modal";

const Contactcard = ({ user, deleteUser, updateUser }) => {
  const colors = [
    "#E2171797",
    "#3944F797",
    "#4DD63797",
    "#F7CD2E97",
    "#8D3DAF97",
    "#E07C2497",
    "#35BDD097",
    "#0D0D0D97",
  ];
  const color = Math.floor(Math.random() * colors.length);
  const [openmodal, setOpenmodal] = useState(false);

  // setting initials to avatar
  const userName = () => {
    const name = user.name.split(" ");
    if (name.length === 2) {
      return name[0][0] + name[1][0];
    }
    return name[0][0] + name[0][1];
  };

  // deletehandler
  const handleDelete = () => {
    deleteUserAPI();
    return deleteUser(user.id);
  };

  // Updating the user
  const handleUpdateUser = (data) => {
    return updateUser(data);
  };
  return (
    <div className="contactContainer">
      <div className="contactAvatar" style={{ backgroundColor: colors[color] }}>
        <span>{userName()}</span>
      </div>
      <div className="userInfoContainer">
        <span className="userFullname" style={{ color: colors[color] }}>
          {user.name}
        </span>
        <div className="infoHolder">
          <AiOutlineMail className="infoIcon" />
          <span className="infoText">{user.email}</span>
        </div>
        <div className="infoHolder">
          <AiOutlinePhone className="infoIcon" />
          <span className="infoText">{user.phone}</span>
        </div>
        <div className="infoHolder">
          <BsGlobe2 className="infoIcon" />
          <span className="infoText">{user.website}</span>
        </div>
      </div>
      <div className="buttons">
        <BsTrash className="buttonIcon" onClick={() => handleDelete()} />
        <FiEdit2 className="buttonIcon" onClick={() => setOpenmodal(true)} />
      </div>
      {openmodal && (
        <Modal
          close={() => setOpenmodal(false)}
          user={user}
          updateUser={(data) => handleUpdateUser(data)}
        />
      )}
    </div>
  );
};

export default Contactcard;
