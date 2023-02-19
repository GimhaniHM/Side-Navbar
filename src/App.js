// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import SideNavbar from './Components/SideNavbar.js';

// import MemberHome from './Views/Member/MemberHome.js';
// import CoachHome from './Views/Coach/CoachHome.js';
// import GymHome from './Views/Gym/GymHome.js';
// import AdminHome from './Views/Admin/AdminHome.js';

// const App = () => {
//   const userType = "gym"; // replace this with your logic to determine the user type

//   // define the routes for each user type
//   const memberRoutes = (
//     <Route path="/member-home" element={<MemberHome />} />
//   );
//   const coachRoutes = (
//     <Route path="/coach-home" element={<CoachHome />} />
//   );
//   const gymRoutes = (
//     <Route path="/gym-home" element={<GymHome />} />
//   );
//   const adminRoutes = (
//     <Route path="/admin-home" element={<AdminHome />} />
//   );

//   // render the routes based on the user type
//   const routes = userType === "member" ? memberRoutes :
//     userType === "coach" ? coachRoutes :
//       userType === "gym" ? gymRoutes :
//         adminRoutes;

//   return (
//     <BrowserRouter>
//       <SideNavbar userType={userType}>
//         <Routes>
//           {routes}
//         </Routes>
//       </SideNavbar>
//     </BrowserRouter>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNavbar from './Components/SideNavbar.js';

import MemberHome from './Views/Member/MemberHome.js';
import MemberViewUpdate from './Views/Member/MemberViewUpdate.js';
import MemberManageSchedule from './Views/Member/MemberManageSchedule.js';
import MemberRegisteredGym from './Views/Member/MemberRegisteredGym.js';


import CoachHome from './Views/Coach/CoachHome.js';
import GymHome from './Views/Gym/GymHome.js';
import AdminHome from './Views/Admin/AdminHome.js';

const App = () => {
  // // const [userType, setUserType] = useState("member");
  // const isLoggedIn = true;
  // const userRole = 'admin';

  // <Router>
  //   <Routes>
  //     <Route path='member-home' element={<MemberHome />} />
  //     <Route path='gym-home' element={<GymHome />} />
  //   </Routes>
  // </Router>

  const [userRole, setUserRole] = useState("member");

  return (
    <Router>
      {/* {userRole === "member" ? (
        <SideNavbar userType = {userRole} >
        <Routes>
        <Route exact path="/member-home" element={<MemberHome />} />
        <Route exact path="/member-view-update" element={<MemberViewUpdate />} />
        </Routes>
        </SideNavbar>
      ) : userRole === "gym" ? (
        <SideNavbar userType = {userRole} />
      ) : userRole === "coach" ? (
        <SideNavbar userType = {userRole} />
      ) : userRole === "admin" ? (
        <SideNavbar userType = {userRole} />
      ) : null
      
      } */}
      <SideNavbar userType = {userRole}>
      <Routes>
        <Route exact path="/member-home" element={<MemberHome />} />
        <Route exact path="/member-view-update" element={<MemberViewUpdate />} />
        <Route exact path="/member-manage-schedule" element={<MemberManageSchedule />} />
        <Route exact path="/member-manage-registered-gym" element={<MemberRegisteredGym />} />


        {/* <Route exact path="/gym-home" element={<GymHome />} />
        <Route exact path="/coach-home" element={<CoachHome />} />
        <Route exact path="/admin-home" element={<AdminHome />} /> */}
      </Routes>
      </SideNavbar>
    </Router>
  );

}

export default App;