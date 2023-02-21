import React, { Component } from 'react';
import { db } from '../../api/firebase';

class Activity extends Component {
    state = {
        items: []
    }
    componentDidMount(){
        db.collection('Codigos').get()
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
            <section className="wallet-connect-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            {/* Intro */}
                            <div className="intro text-center">
                                <span>La mejor forma que un proyecto crezca es aportando en comunidad.</span>
                                <h3 className="mt-3 mb-0">Codigos fuente de proyectos</h3>
                                <p>Estamos actualizando constantemente los codigos fuente gracias a los comentarios que nos dejan en los repositorios. !Gracias!...</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center items">
                        {items.map((item, key) => {
                            return (
                                <div key={key} className="col-12 col-md-6 col-lg-4 item">
                                    {/* Single Wallet */}
                                    <div className="card single-wallet">
                                        <a className="d-block text-center" href={item.data.Url} target="_blank">
                                            <img className="avatar-lg" src={item.data.Icono} alt="" 
                                            />
                                            <h4 className="mb-0">{item.data.Titulo}</h4>
                                            <p>{item.data.Descripcion}</p>
                                        </a>
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

export default Activity;