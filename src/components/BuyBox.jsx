
import "./BuyBox.css";

const BuyBox = ({
    name,
    reference,
    stars,
    rating,
    price,
    priceDiscount,
    description,
    children
}) => {

    return (
        <div className="buy-box">

            <h1>{name}</h1>

            <p className="buy-box-reference">{reference}</p>

            <div className="buy-box-rating">
                <span className="buy-box-stars">
                    {stars}
                    <img src="/star-icon.svg" alt="Estrela" />
                </span>

                <span className="buy-box-reviews">
                    ({rating} avaliações)
                </span>
            </div>

            <div className="buy-box-prices">
                {priceDiscount ? (
                    <>
                        <span className="original-price">
                            R$ {price.toFixed(2).replace(".", ",")}
                        </span>

                        <span className="discount-price">
                            R$ {priceDiscount.toFixed(2).replace(".", ",")}
                        </span>
                    </>
                ) : (
                    <span className="regular-price">
                        R$ {price.toFixed(2).replace(".", ",")}
                    </span>
                )}
            </div>

            <div className="buy-box-description">
                <h3>Descrição do produto</h3>
                <p>{description}</p>
            </div>

            {children}

            <button type="button" className="buy-box-button">
                COMPRAR
            </button>

        </div>
    );
};

export default BuyBox;
