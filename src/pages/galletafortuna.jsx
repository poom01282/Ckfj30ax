import { Component } from "react";
import Galletainicial from "../components/Galletasuerte/Galletainicial";
import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
class Galletafortuna extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        {/*<Galletainicial />*/}
        <Footer />
        <ModalSearch />
        <ModalMenu />
        <Scrollup />
      </div>
    );
  }
}

export default Galletafortuna;
