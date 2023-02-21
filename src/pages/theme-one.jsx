import React, { Component } from 'react';

import Header from '../components/Header/Header';
import {Hero} from '../components/Hero/Hero';
import TopSeller from '../components/TopSeller/TopSellerOne';
import Collections from '../components/Collections/Collections';
import Collections2 from '../components/Collections/Collections2';
import Impactosocial from '../components/Collections/Impactosocial';
import Gratis from '../components/Collections/Gratis';

import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';



class ThemeOne extends Component {
    render() {
        return (
            <div className="main">
               
                <Header />
                <Hero />
                 <Gratis/>
                <Collections />
                <Collections2 />
               
               
                <TopSeller />  
             
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default ThemeOne;