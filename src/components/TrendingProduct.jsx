import "./TrendingProduct.css";
import ProductCard from "./ProductCard";


const products = [
    {
        id: 1,
        name: "K-Swiss V8 - Masculino",
        category: "Tênis",
        price: 200,
        priceDiscount: 100,
        image: "/tenis.png",
        discount: "30% OFF"
    },
    {
        id: 2,
        name: "K-Swiss V8 - Masculino",
        category: "Tênis",
        price: 200,
        priceDiscount: 100,
        image: "/tenis.png",
        discount: "30% OFF"
    },
    {
        id: 3,
        name: "K-Swiss V8 - Masculino",
        category: "Tênis",
        price: 200,
        priceDiscount: 100,
        image: "/tenis.png"
    },
    {
        id: 4,
        name: "K-Swiss V8 - Masculino",
        category: "Tênis",
        price: 200,
        priceDiscount: 100,
        image: "/tenis.png"
    },
    {
        id: 5,
        name: "K-Swiss V8 - Masculino",
        category: "Tênis",
        price: 200,
        priceDiscount: 100,
        image: "/tenis.png"
    },
    {
        id: 6,
        name: "K-Swiss V8 - Masculino",
        category: "Tênis",
        price: 200,
        priceDiscount: 100,
        image: "/tenis.png"
    },
    {
        id: 7,
        name: "K-Swiss V8 - Masculino",
        category: "Tênis",
        price: 200,
        priceDiscount: 100,
        image: "/tenis.png"
    },
    {
        id: 8,
        name: "K-Swiss V8 - Masculino",
        category: "Tênis",
        price: 200,
        priceDiscount: 100,
        image: "/tenis.png"
        
    }
];

const TrendingProducts = () => {
    return (
        <section className="trending-products">
            <div className="trending-header">
                <h2>Produtos em alta</h2>
                <a href="/products">
                    Ver todos
                    <i className="pi pi-arrow-right"></i>
                </a>
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
                        discount={product.discount}
                    />
                ))}
                
            </div>
        </section>
    );
};

export default TrendingProducts;