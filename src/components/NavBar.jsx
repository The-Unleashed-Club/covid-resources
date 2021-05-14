//import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                Home
              </MenuItem>
              <MenuItem icon={<FaList />}>Category</MenuItem>
              <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
              <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
              <MenuItem icon={<BiCog />}>Settings</MenuItem>
            </Menu>
          </SidebarContent>
          
        </ProSidebar>
      </div>
    </>
  );
};

const styles = {
  Nav: {
    position: 'sticky',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#808080',

  },
  btn: {
    backgroundColor: '#FFFF00',
    color: '#808080',
    paddingLeft: '0.5%',
    paddingRight: '0.5%',
    paddingTop: '0.2%',
    paddingBottom: '0.2%',
    margin: '1%',
    fontSize: '20px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '5px',
    textDecoration: 'none',

  },
};
export default Nav
