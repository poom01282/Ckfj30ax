import React, { Component } from 'react';
import { db } from '../../api/firebase';
const tabla="puntosventa";
class Collections2 extends Component {
    state = {
        items: []
        
    }
    componentDidMount() {

        db.collection(tabla)
        .get()
        
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
            <section className="popular-collections-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                  
                                    <h3 className="mt-3 mb-0">Puntos de venta</h3>
                                    
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        {items.map((item, key) => {
                            return (
                                <div key={key} className="col-12 col-sm-6 col-lg-3 item">
                                    <div className="card no-hover text-center">
                                        <div className="image-over">
                                            <a href={item.data.url} target="_blank">
                                                <img className="card-img-top" src={item.data.img} alt="" />
                                            </a>
                                            {/* Seller */}
                                            <a className="seller" href={item.data.url} target="_blank">
                                                <div className="seller-thumb avatar-lg">
                                                    <img className="rounded-circle" src={item.data.avatar} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        {/* Card Caption */}
                                        <div className="card-caption col-12 p-0">
                                            {/* Card Body */}
                                            <div className="card-body mt-4">
                                                <a href={item.data.url} target="_blank">
                                                    <h5 className="mb-2">{item.data.title}</h5>
                                                   
                                                </a>
                                                <span>{item.data.price}</span>
                                                <h5 className="mb-2">{item.data.fecha}</h5>
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

export default Collections2;