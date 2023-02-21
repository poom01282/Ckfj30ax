import React, { useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import logogoogle from "../../img/logoogle.png";
import styled from "styled-components";
export function LoginSection() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  }, [user]);
  return (
    <Container>
      <section className="author-area">
        <div className="container">
        <div className="col-12">
                    <button className="btniniciar" onClick={handleGoogleSignIn}>
                      <img src={logogoogle} />
                      <span> Iniciar con Gmail</span>
                    </button>
                  </div>
        </div>
      </section>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  .col-12{
    display: flex;
  justify-content: center;
   .btniniciar {
    display: flex;
    align-items: center;
    gap: 12px;
    border-style: none;

    img {
      width: 30px;
    }
    background-color: white;

    padding: 15px 30px;
    border-radius: 50px;
    font-weight: 700;
    font-size: 22px;

    transition: all 0.25s ease;
    box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.12);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 20px 40px 0px rgb(0 0 0 / 10%);
      cursor: pointer;
    }
    span {
      opacity: 0.8;
    }
  }
  }
 
`;
