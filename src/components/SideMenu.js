import React, { useEffect, useState } from "react";
import logo from "../assets/logo/webscript.png";
import user from "../assets/user.jpg"
import MenuItem from "./MenuItem";




const menuItems = [
  {name : "Dashboard" ,exact:true, to : "/", iconClassName : "bi bi-speedometer2"},
  {name : "About" ,  exact:true, to : "/About" ,
  iconClassName : "bi bi-file-person",
   subMenus : [{name : "Basic Information" , to:"/About/basic_info"},{name : "Resume" , to : "/about/resume"}]
  },
  {name : "Contact", exact:true, to : "/contact" ,
  iconClassName : "bi bi-person-rolodex"}
];



function SideMenu(props) {

  const [inactive, setInactive] = useState(false);

  useEffect(()=>{
    document.querySelectorAll('.sub-menu').forEach(el=>{
      el.classList.remove('active');
    })

    props.onCollapse(inactive);

  },[inactive])


  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="Webscript" />
        </div>
        <div
          className="toggle-menu-btn"
          onClick={() => {
            setInactive(!inactive);
          }}
        >
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      <div className="search-controler">
        <button className="search-btn">
          <i class="bi bi-search"></i>
        </button>

        <input type="text" placeholder="search" />
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>

          {menuItems.map((menuItem , index)=>(
             <MenuItem
             key={index}
             name={menuItem.name}
             exact={menuItem.exact}
             to = {menuItem.to}
             subMenus={menuItem.subMenus || []}
             iconClassName = {menuItem.iconClassName}
             onClick = {()=>setInactive(false)}
             />
          ))}

          {/* <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-speedometer2"></i>
              </div>
              <span>Dashboard</span>
            </a>
          </li>
         <MenuItem
         name = {"About"} 
         subMenus = {[
          {name : "Basic Informations"},
           {name : "Resume"} ]}
         />
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-person-rolodex"></i>
              </div>
              <span>Contact</span>
            </a>
          </li> */}
        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="avetar">
          <img src={user} alt="User"  />
        </div>
        <div className="user-info">
          <h4>Shivkumar Lilhare</h4>
          <p>shivkumarlilhare29@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
