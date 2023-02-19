import React, { useState } from 'react';
import styled from 'styled-components';

import { MdManageAccounts, MdScheduleSend } from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";
import { FaUsers, FaUserEdit, FaUserTag, FaUserPlus, FaBars, FaWindowClose } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

let iconStyle = { fontWeight: "600", color: "#fff", fontSize: "2rem" };

export const MenuItems = [
    {
        Role: 'member',
        Name: "Mr.Member",
        NavsArray: [
            {
                text: 'View and Update Personal Info',
                icon: <FaUserEdit style={iconStyle} />,
                path: "/member-view-updatgie",
            },
            {
                text: 'Manage Schedule',
                icon: <AiFillSchedule style={iconStyle} />,
                path: "/member-manage-schedule",
            },
            {
                text: 'Manage Registered Gym',
                icon: <MdManageAccounts style={iconStyle} />,
                path: "/member-manage-registered-gym",
            },
        ],
    },
    {
        Role: 'coach',
        Name: "Mr.Coach",
        NavsArray: [
            {
                text: 'View and Update Personal Info',
                icon: <FaUserEdit style={iconStyle} />,
                path: "/coach-view-update",
            },
            {
                text: 'Schedule Request',
                icon: <MdScheduleSend style={iconStyle} />,
                path: "/coach-schedule-request",
            },
            {
                text: 'Manage Registered Gym',
                icon: <MdManageAccounts style={iconStyle} />,
                path: "/coach-gym-home",
            },
        ],
    },
    {
        Role: 'gym',
        Name: "Mr.Gym",
        NavsArray: [
            {
                text: 'View and Update Personal Info',
                icon: <FaUserEdit style={iconStyle} />,
                path: "/gym-view-update",
            },
            {
                text: 'View All Gym Members',
                icon: <FaUsers style={iconStyle} />,
                path: "/gym-view-members",
            },
            {
                text: 'View Single Gym Member',
                icon: <FaUserTag style={iconStyle} />,
                path: "/gym-view-member",
            },
            {
                text: 'Add Gym Coach',
                icon: <FaUserPlus style={iconStyle} />,
                path: "/gym-add-coach",
            },
            {
                text: 'View All Gym Coaches',
                icon: <FaUsers style={iconStyle} />,
                path: "/gym-view-coaches",
            },
        ],
    },
    {
        Role: 'admin',
        Name: "Mr.Admin",
        NavsArray: [
            {
                text: 'View All Users',
                icon: <FaUsers style={iconStyle} />,
                path: "/admin-view-users",
            },
            {
                text: 'View All Gyms',
                icon: <MdScheduleSend style={iconStyle} />,
                path: "/admin-view-gyms",
            },
            {
                text: 'Add Gym',
                icon: <FaUserPlus style={iconStyle} />,
                path: "/admin-add-gym",
            },
        ],
    },
]

const Container = styled.div`
    display: flex;
`
const Sidebar = styled.div`
    /* background: #060b26; */
    color: #000;
    height: 100vh;
    width: 300px;
`
const TopSection = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 15px;
`
const Logo = styled.h1`
    font-size: 30px;
    letter-spacing: 0.1rem;
`
const Toggle = styled.div`
    display: flex;
    font-size: 27px;
    margin-left: 50px;
`
const StyledNavLink = styled(NavLink)`
    display: flex;
    color: #000;
    padding: 10px 15px;
    gap: 15px;
    transition: all 0.5s;
    text-decoration: none;

    &:hover{
        background: lightskyblue;
        color: #000;
        transition: all 0.5s;
    }
    &:active{
        background: lightskyblue;
        color: #000;
    }

`
const MenuIcon = styled.div`

`
const MenuText = styled.div`

`

const StyledMain = styled.main`
  background-color: pink;
  padding: 20px;
  width: 100%;
  padding: 20px;
  /* margin: 20px; */
  z-index: 600;
`;

const SideNavbar = (props,{children}) => {

    const [userType, setUserType] = useState(props.userType);
    
    return ( 
        <Container>
            <Sidebar>
                <TopSection>
                    <Logo>
                        FitFinder
                    </Logo>
                    <Toggle>
                        <FaBars />
                    </Toggle>
                </TopSection>
                {
                    userType === "member" ?
                    MenuItems[0].NavsArray.map((item, index) => {
                        return(
                        <StyledNavLink to={item.path} key={index} activeclassName="active"  className="MenuLink">
                            <MenuIcon>
                                {item.icon}
                            </MenuIcon>
                            <MenuText>
                                {item.text}
                            </MenuText>
                        </StyledNavLink>
                        )
                    }) :
                    userType === "coach" ?
                    MenuItems[1].NavsArray.map((item, index) => {
                        return(
                            <StyledNavLink to={item.path} key={index} activeclassName="active"  className="MenuLink">
                            <MenuIcon>
                                {item.icon}
                            </MenuIcon>
                            <MenuText>
                                {item.text}
                            </MenuText>
                        </StyledNavLink>
                        )
                    }) :
                    userType === "gym" ?
                    MenuItems[2].NavsArray.map((item, index) => {
                        return(
                            <StyledNavLink to={item.path} key={index} activeclassName="active"  className="MenuLink">
                            <MenuIcon>
                                {item.icon}
                            </MenuIcon>
                            <MenuText>
                                {item.text}
                            </MenuText>
                        </StyledNavLink>
                        )
                    }) :
                    userType === "admin" ?
                    MenuItems[3].NavsArray.map((item, index) => {
                        return(
                            <StyledNavLink to={item.path} key={index} activeclassName="active"  className="MenuLink">
                            <MenuIcon>
                                {item.icon}
                            </MenuIcon>
                            <MenuText>
                                {item.text}
                            </MenuText>
                        </StyledNavLink>
                        )
                    }) : null
                }
            </Sidebar> 
            <StyledMain>
                {children}
            </StyledMain> 
        </Container>
     );
}
 
export default SideNavbar;