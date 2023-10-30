import React from 'react';

interface ProductCardProps {
    image: string;
    title: string;
    price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price }) => {
    return (
        <div className="product-card">
            {/* <div style={{width: '100px', height: '100px', overflow: 'hidden', borderRadius: '50%'}}>
                <img src={image} alt={title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div> */}
            <h3>{title}</h3>
            <p>${price.toFixed(2)}</p>
        </div>
    );
};

export default ProductCard;
