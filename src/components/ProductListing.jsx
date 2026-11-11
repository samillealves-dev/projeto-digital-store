import ProductCard from "./ProductCard";
import "./ProductListing.css";

const ProductListing = ({ products }) => {
    return (
        <div className="product-listing">
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    {...product}
                />
            ))}
        </div>
    );
};

export default ProductListing;