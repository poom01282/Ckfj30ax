import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/gatopc.json";
import { db } from "../../api/firebase";
import { Fotointro } from "./Fotointro";
import { useState } from "react";
import styled from "styled-components";
export function Hero() {
  const initData = {
    pre_heading: "FELÍZ HALLOWEN",
    heading: "Bienvenido programador",
    content: "Puedes explorar todos nuestros proyectos aquí..",
    btn_1: "Siguenos en fb",
    btn_2: "Suscribete YouTube",
    frase: "<Sientete como en casa>",
  };
  const [state, setState] = useState(initData);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    //   rendererSettings: {
    //     preserveAspectRatio: "xMidYMid slice"
    //   }
  };
  return (
    <section className="hero-section">
      <div className="container">
       
        <div className="row">
          <div className="col-12 col-md-4 col-lg-8">
            <p className="spananimado">{state.frase}</p>
             <Fotointro ></Fotointro>
           

            <h1 className="mt-4">{state.heading}</h1>

            <p>{state.content}</p>
            {/* Buttons */}
            <div className="button-group">
              <a
                className="btn btn-bordered-white"
                href="https://www.facebook.com/codigo369oficial"
                target="_blank"
              >
                <i className="icon-rocket mr-2" />
                {state.btn_1}
              </a>
              <a
                className="btn btn-bordered-white"
                href="https://www.youtube.com/channel/UC7UirgYx9bGAnK2rYWW7Wsw"
                target="_blank"
              >
                <i className="icon-note mr-2" />
                {state.btn_2}
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Shape */}
      <div className="shape">
        <Contentlootie className="Uncontrolled">
          <Lottie options={defaultOptions} height={400} width={400} />
        </Contentlootie>
      </div>
    </section>
  );
}
const Contentlootie = styled.div`
   display:flex;
  position:relative;
  left:110px;
`
