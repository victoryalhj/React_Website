import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const menuList = ['여성','Divided','남성','신생아/유아','아동','Home','Sale','지속가능성'];
  const navigate = useNavigate()

  const goToLogin = ()=>{
    navigate("/login");
  }
  return (
    <div>

      <div className="login-area">
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div className="login-text">Login</div>
        </div>
      </div>

      <div className="nav-section">
        <img
          width={100}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJGdMCiCPcc_L5kYIMNM-KGVMrEJffbejQnA&s"
        />
      </div>

      <div className="menu-area">
        <ul className="menu-list">
            {menuList.map((menu)=>(<li>{menu}</li>))}
        </ul>
        <div className="search-area">
          <FontAwesomeIcon icon={faSearch}/>
          <input placeholder="Search" type="text" className="search-input"/>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
