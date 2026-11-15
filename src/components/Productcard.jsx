
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({
    name,
    category,
    price,
    priceDiscount,
    image,
    discount
}) => {

    console.log("ProductCard atualizado está sendo executado!");

    return (
        <Link
            to="/product/1"
            className="product-card-link"
        >
            <div className="product-card">

                <div className="product-image">
                    {discount && (
                        <span className="product-discount">
                            {discount}
                        </span>
                    )}

                    {image && (
                        <img src={image} alt={name} />
                    )}
                </div>

                <div className="product-info">
                    <p className="product-category">{category}</p>

                    <h3 className="product-name">{name}</h3>

                    <div className="product-prices">
                        <span className="original-price">${price}</span>
                        <span className="discount-price">
                            ${priceDiscount}
                        </span>
                    </div>
                </div>

            </div>
        </Link>
    );
};

export default ProductCard;
