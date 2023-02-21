import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json-2/footer";

class Footer extends Component {
    state = {
        data: {},
        socialData: [],
        widgetData_1: [],
        widgetData_2: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    socialData: res.data.socialData,
                    widgetData_1: res.data.widgetData_1,
                    widgetData_2: res.data.widgetData_2
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <footer className="footer-area">
                {/* Footer Top */}
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-3 res-margin">
                                {/* Footer Items */}
                                <div className="footer-items">
                                    {/* Logo */}
                                  
                                    <p>!Cualquiera puede programar!</p>
                                    {/* Social Icons */}
                                   
                                </div>
                            </div>
                           
                           
                           
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* Copyright Area */}
                                <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                                    {/* Copyright Left */}
                                    <div className="copyright-left">©2023 Todos los derechos reservados.</div>
                                    {/* Copyright Right */}
                                    <div className="copyright-right">Empresa peruana <i className="fas fa-heart" /> Codigo369 <a href="#">S.A.C</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;