import React from 'react';
import StarsStat from '../stars-stat';
import './styles.scss';

function ProductCard({ product }) {
    return (
        <div className="product-card">
            <figure>
                <img src={product.img} alt={product.name} width="" className="img-responsive" />
            </figure>
            <div className="content">
                <div className="title">
                    <h4>{product.name}</h4>
                </div>
                <div className="stars">
                    <StarsStat num={product.stars} />
                </div>
                <div className="price">
                    <p><b>$ {product.price}</b> Kilo</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;