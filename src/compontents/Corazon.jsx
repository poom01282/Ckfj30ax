import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
export function Corazon({estadocorazon}) {
  // const [estado, setEstado] = useState(false);
  return (
    <Container>
      <div className="likescontainer">
      
        <span
          className={estadocorazon ? "activado" : "icono"}
         
        >
          <FaHeart />
        </span>
         
      </div>
    </Container>
  );
}
const Container = styled.div`
  .activado {
    color: red;
    
  }
  .likescontainer{
    display:flex;
    gap:10px;
    justify-content:center;
    align-items:center;
    span{
        text-align:center;
        vertical-align:center;
    }
  }

`;
