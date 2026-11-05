import "./ProductCard.css";

const ProductCard = ({name, category, price, priceDiscount, image}) => {
    return (
        <div className="product-card">
            <div className="product-image">
                {image && <img src={image} alt={name} />}
            </div>

            <div className="product-info">
                <p className="product-category">{category}</p>

                <h3 className="product-name">{name}</h3>

                <div className="product-prices">
                    <span className="original-price">R$ {price}</span>
                    <span className="discount-price">R$ {priceDiscount}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;