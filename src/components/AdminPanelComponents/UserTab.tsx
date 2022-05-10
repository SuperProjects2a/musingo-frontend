import { Tabs, Tab } from "react-bootstrap";
import BanUser from "./BanUser";
import EditUser from "./EditUser";
import { useState } from "react";

const UserTab = () => {
  return (
    <div>
      <BanUser />
      <EditUser />
    </div>
  );
};

export default UserTab;
