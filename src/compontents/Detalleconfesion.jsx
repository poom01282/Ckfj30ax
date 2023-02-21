import styled from "styled-components";
import { Corazon } from "./Corazon";
export function Detalleconfesion({ detalle, onClose, open }) {
  if (!open) return;
  return (
    <Container onClick={onClose}>
      <div
        className="sub-contenedor"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="header">
          
            <h1>Confesión</h1>
           
          

          <span onClick={() => onClose()}>x</span>
        </div>

        <h2>{detalle}</h2>
      </div>
    </Container>
  );
}
const Container = styled.div`
  transition: 0.5s;
  
  background-color: rgba(10, 9, 9, 0.8);
  display: flex;
  width: 100%;
  min-height:100vh;
  align-items: center;
  justify-content: center;
 /* overflow-y: scroll;  */
  
  z-index:100000000000;
  position: fixed;

  .sub-contenedor {
    position:sticky;
    overflow-y: scroll;
    width: 100%;
    border-radius: 10px;
    background-color: #1b1b1b;
    padding: 10px 20px;
    margin: 20px 20px;
    z-index: 1000000000;
    max-height:100vh;
    .contenido {
      display: flex;
      gap: 10px;
      align-items: center;
      margin-bottom: 20px;
      flex: auto;
      .icon {
        margin-right: 10px;
      }
      .mensaje {
        .title {
          font-weight: bolder;
        }
      }
    }
    .actions {
      padding: 10px 0;
      display: flex;
      justify-content: end;
      gap: 10px;
      button {
        border: none;
        padding: 15px;
        min-width: 120px;
        border-radius: 5px;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
      }
      .btn-descargar {
        background-color: #029be1;
        color: white;
        &:hover {
          background-color: #0280de;
        }
      }
      .btn-volver {
        background-color: white;
        border: solid 1px #ccc;
        &:hover {
          background-color: #eee;
        }
      }
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 50px;
      cursor: pointer;

    }
  }
`;
