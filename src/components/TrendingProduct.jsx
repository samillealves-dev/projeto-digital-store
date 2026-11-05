import "./TrendingProduct.css";
import ProductCard from "./ProductCard";


const products = [
    {
        id: 1,
        name: "K-Swiss V8 - Masculino",
        category: "Tênis",
        price: 200,
        priceDiscount: 100,
        image: "/tenis.png"
    },
    {
        id: 2,
        name: "K-Swiss V8 - Masculino",
        category: "Tênis",
        price: 200,
        priceDiscount: 100
    },
    {
        id: 3,
        name: "K-Swiss V8 - Masculino",
        category: "Tênis",
        price: 200,
        priceDiscount: 100
    },
    {
        id: 4,
        name: "K-Swiss V8 - Masculino",
        category: "Tênis",
        price: 200,
        priceDiscount: 100
    },
    {
        id: 5,
        name: "K-Swiss V8 - Masculino",
        category: "Tênis",
        price: 200,
        priceDiscount: 100
    },
    {
        id: 6,
        name: "K-Swiss V8 - Masculino",
        category: "Tênis",
        price: 200,
        priceDiscount: 100
    },
    {
        id: 7,
        name: "K-Swiss V8 - Masculino",
        category: "Tênis",
        price: 200,
        priceDiscount: 100
    },
    {
        id: 8,
        name: "K-Swiss V8 - Masculino",
        category: "Tênis",
        price: 200,
        priceDiscount: 100
    }
];

const TrendingProducts = () => {
    return (
        <section className="trending-products">
            <div className="trending-header">
                <h2>Produtos em alta</h2>
                <a href="/products">Ver todos</a>
            </div>

            <div className="products-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                        priceDiscount={product.priceDiscount}
                        image={product.image}
                    />
                ))}
                
            </div>
        </section>
    );
};

export default TrendingProducts;