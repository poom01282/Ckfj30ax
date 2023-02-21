import React, { Component } from 'react';
import { db } from '../../api/firebase';


class Blog extends Component {
    state = {
        items: []
    }
    componentDidMount(){
        db.collection('blog').get()
            .then(snapShots => {
                this.setState({
                    items: snapShots.docs.map(doc=>{
                        return {data:doc.data()}
                    })
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        const{ items } = this.state;
        return (
            <section className="blog-area">
                <div className="container">
                    <div className="row items">
                        {items.map((item, key) => {
                            return (
                                <div key={key} className="col-12 col-md-4 item">
                                    {/* Single Blog */}
                                    <div className="card blog-card">
                                        {/* Blog Thumb */}
                                        <div className="blog-thumb">
                                            <a href={item.data.url}target="_blank"><img src={item.data.imagen} alt="" /></a>
                                        </div>
                                        {/* Blog Content */}
                                        <div className="blog-content">
                                            {/* Meta Info */}
                                            <ul className="meta-info d-flex justify-content-between list-unstyled mt-4">
                                                <li>By <a href="#">{item.data.autor}</a></li>
                                                <li><a href="#">{item.data.fecha}</a></li>
                                            </ul>
                                            {/* Blog Title */}
                                            <a href={item.data.url}target="_blank">
                                                <h4>{item.data.titulo}</h4>
                                            </a>
                                            <p>{item.data.resumen}</p>
                                            {/* Blog Button */}
                                            <a className="btn content-btn" href={item.data.url} target="_blank">Ver</a>
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

export default Blog;