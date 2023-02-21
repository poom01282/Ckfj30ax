import React, { Component } from 'react';
import { db } from '../../api/firebase';
class TopSeller extends Component {
    state = {
        items: []
    }
    componentDidMount(){
        db.collection('grupos').get()
        .then(snapShots => {
            this.setState({
                items: snapShots.docs.map(doc => {
                    return { data: doc.data() }
                })
            })

        })
        .catch(err => console.log(err))
    }
    render() {
        const { items } = this.state;
        return (
            <section className="top-seller-area pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    <span>Comunidad</span>
                                    <h3 className="mt-3 mb-0">Grupos de ayuda</h3>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                    {items.map((item, key) => {
                            return (
                                <div key={key} className="col-12 col-sm-6 col-lg-4 item">
                                    {/* Single Seller */}
                                    <div className="card no-hover">
                                        <div className="single-seller d-flex align-items-center">
                                            <a href={item.data.url} target="_blank">
                                                <img className="avatar-md rounded-circle" src={item.data.img} alt="" />
                                            </a>
                                            {/* Seller Info */}
                                            <div className="seller-info ml-3">
                                                <a className="seller mb-2" href={item.data.url} target="_blank">{item.data.title}</a>
                                                <span>{item.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default TopSeller;