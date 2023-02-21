import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
    0% {
        transform: translateY(-1.25rem); /* 20px */
        opacity: 0;
    }
 
    10% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
    
    90% {
        transform: translateY(1.25rem);
        opacity: 0.5;
    }
 
    100% {
        transform:  translateY(1.25rem);
        
        z-index:-1;
        opacity:0;
        
    }
`;

const ContenedorAlerta = styled.div`
 
  z-index: 10000;
  width: auto;
  top: 0; /* 20px */
  position: fixed;
  display: flex;
  justify-content: end;
  align-items: center;
  animation: ${slideDown} 4s ease forwards;
  right: 10px;


  p {
    background: ${(props) => {
      if (props.tipo === "error") {
        return "#F82A2D";
      } else if (props.tipo === "exito") {
        return "#21E295";
      } else {
        return "#000";
      }
    }};
    color: #061407;
    padding: 1.25rem 2.5rem; /* 20px 40px */
    border-radius: 0.31rem; /* 5px */
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-weight: 600;
    box-shadow: 1px 0px 47px 1px rgba(249, 245, 245, 0.46);
    -webkit-box-shadow: 1px 0px 47px 1px rgba(227, 225, 225, 0.46);
    -moz-box-shadow: 1px 0px 47px 1px rgba(188, 187, 187, 0.46);
  }
`;

export function Alerta({ mensaje, tipo, estadoAlerta, cambiarEstadoAlerta }) {
  return (
    <>
      {estadoAlerta && (
        <ContenedorAlerta tipo={tipo}>
          <p>{mensaje}</p>
        </ContenedorAlerta>
      )}
    </>
  );
}
