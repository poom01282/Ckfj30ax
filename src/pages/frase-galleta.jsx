import { Component } from "react";
import Frase from "../components/Galletasuerte/Frase";
import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
class Frasegalleta extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        {/*<Frase />*/}
        <Footer />
        <ModalSearch />
        <ModalMenu />
        <Scrollup />
      </div>
    );
  }
}

export default Frasegalleta;