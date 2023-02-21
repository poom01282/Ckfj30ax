import { Component, lazy,Suspense, useState } from "react";
// import { Listaconfesiones } from "../components/Listaconfesiones";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ModalSearch from "../components/Modal/ModalSearch";
import ModalMenu from "../components/Modal/ModalMenu";
import Scrollup from "../components/Scrollup/Scrollup";
import styled from "styled-components";
import { Loading } from "../components/Loading";
import { Detalleconfesion } from "../components/Detalleconfesion";
import { Alerta } from "../components/Alerta";
const Listaconfesiones = lazy(() => import("../components/Listaconfesiones"));
export function Confesiones() {
  const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
  const [openRegistro, SetopenRegistro] = useState(false);
  const [alerta, cambiarAlerta] = useState({});
  return (
    <div className="main">
      {/*<Alerta mensaje={alerta.mensaje} tipo={alerta.tipo} estadoAlerta={estadoAlerta}/>*/}
      {/*<Header />*/}
      <Suspense fallback={<Loading />}>
      <Listaconfesiones
        funcion={() => SetopenRegistro(true)}
        open={openRegistro}
        onClose={() => SetopenRegistro(false)}
        cambiarEstadoAlerta={()=>cambiarEstadoAlerta(!estadoAlerta)} cambiarAlerta={cambiarAlerta}/>
          </Suspense>
    

      <Footer />
      <ModalSearch />
      <ModalMenu />
      <Scrollup />
    </div>
  );
}
const Container = styled.div``;
