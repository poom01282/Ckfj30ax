import React, { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
// import { Link } from "react-router-dom";
import { TbUserCircle } from "react-icons/tb";
import styled from "styled-components";

const Header = () => {
  const { googleSignIn, user, logOut } = UserAuth();
  const [openLogout, setOpenLogout] = useState(false);
  const iniciarSesion = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  const cerrarSesion = async () => {
    try {
      setOpenLogout(!openLogout);
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header id="header">
     
      {/* Navbar */}
      <nav
        data-aos="zoom-out"
        data-aos-delay={800}
        className="navbar navbar-expand"
      >
        <div className="container header">
          {/* Navbar Brand*/}
          <a className="navbar-brand" href="/">
            <img
              className="navbar-brand-sticky"
              src="img/favicon.png"
              alt="sticky brand-logo"
            />
          </a>
          <div className="ml-auto" />
          {/* Navbar */}
          <ul className="navbar-nav items mx-auto">
            <li className="nav-item dropdown">
              <a className="nav-link" href="/">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                Comunidad
              </a>
            </li>

            <li className="nav-item">
              <Newcontainer>
                <span>New</span>
              </Newcontainer>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/confesiones">
                Confesiones
              </a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link" href="/blog">
                Blog
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="/wallet-connect">
                Codigos fuente
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="/galletafortuna">
                Galleta de la fortuna
              </a>
            </li>
          </ul>
          {/* Navbar Icons */}
          <ul className="navbar-nav icons">
            <li className="nav-item"></li>
          </ul>
          {/* Navbar Toggler */}
          <ul className="navbar-nav toggle">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                data-toggle="modal"
                data-target="#menu"
              >
                <i className="fas fa-bars toggle-icon m-0" />
              </a>
            </li>
          </ul>
          {/* Navbar Action Button */}

          {user?.displayName ? (
            <UserContainer onClick={() => setOpenLogout(!openLogout)}>
              <img src={user.photoURL}></img>
              {openLogout && (
                <LogoutContainer onClick={cerrarSesion}>
                  <span>Cerrar sesión</span>
                </LogoutContainer>
              )}
            </UserContainer>
          ) : (
            <Sinusercontainer>
              <TbUserCircle onClick={iniciarSesion} />
            </Sinusercontainer>
          )}
        </div>
      </nav>
    </header>
  );
};
const Sinusercontainer = styled.div`
  font-size: 30px;
  cursor: pointer;
`;
const UserContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;
const LogoutContainer = styled.div`
  cursor: pointer;
  display: flex;
  height: 50px;
  position: absolute;
  background-color: #141414;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 150px;
  text-align: center;
  transform: translateY(40px) translateX(-100px);
  transition: all 0.2s;
  &:hover {
    background-color: #21e295;
    color: black;
    font-weight: 800;
  }
`;
const Newcontainer = styled.div`
  background-color: #21e295;
  height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  color: #0b4b31;
  position: relative;
  font-weight: 600;
  font-size: 11px;
  margin-right: -20px;
  transform:translateY(-10px);
  box-shadow: 3px -1px 56px 10px rgba(141, 235, 175, 0.75);
  -webkit-box-shadow: 3px -1px 56px 10px rgba(141, 235, 175, 0.75);
  -moz-box-shadow: 3px -1px 56px 10px rgba(141, 235, 175, 0.75);
  width: 40px;
  justify-content:center;
  @media (max-width: 620px) {
    transform:translateY(10px);
  }
`;
export default Header;
