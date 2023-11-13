import React, { useEffect, useState } from "react";
import Axios from "../API/Axios";
import { useParams, useNavigate } from "react-router-dom";
import SidebarNav from "../SidebarNav/SidebarNav";

function Sidebar() {
  //   console.log(user);
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    console.log(user);
  }, []);

  return (
    <div>
      <div>Sidebar</div>
      {/* {user.userProfile && <UserDetails userDetails={user?.userProfile} />} */}
      <SidebarNav />
    </div>
  );
}
function UserDetails({ userDetails }) {
  console.log(userDetails);
  let { first_name, last_name, dob } = userDetails;
  let date = new Date(dob).toDateString().split(" ").splice(1, 2).join(" ");
  return (
    <div>
      <div>
        <h3>
          {first_name} {last_name}
        </h3>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default Sidebar;