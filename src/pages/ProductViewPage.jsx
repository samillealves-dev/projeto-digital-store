
import Gallery from "../components/Gallery";
import BuyBox from "../components/BuyBox";
import ProductOptions from "../components/ProductOptions";
import ProductListing from "../components/ProductListing";
import "./ProductViewPage.css";

const ProductViewPage = () => {

    const images = [
        { src: "/banner-nike.png" }
    ];

    const recommendedProducts = [
        {
            name: "K-Swiss V8 - Masculino",
            category: "Tênis",
            price: 200,
            priceDiscount: 100,
            image: "/tenis.png",
            discount: "50% OFF"
        },
        {
            name: "K-Swiss V8 - Masculino",
            category: "Tênis",
            price: 200,
            priceDiscount: 100,
            image: "/tenis.png",
            discount: "50% OFF"
        },
        {
            name: "K-Swiss V8 - Masculino",
            category: "Tênis",
            price: 200,
            priceDiscount: 100,
            image: "/tenis.png"
        },
        {
            name: "K-Swiss V8 - Masculino",
            category: "Tênis",
            price: 200,
            priceDiscount: 100,
            image: "/tenis.png"
        }
    ];

    return (
        <div className="product-view-page">
            <nav className="product-breadcrumb" aria-label="Caminho de navegação">
                <span>Home</span>
                <span>/</span>
                <span>Produtos</span>
                <span>/</span>
                <span>Tênis</span>
                <span>/</span>
                <span>Nike</span>
                <span>/</span>
                <strong>Tênis Nike Revolution 6 Next Nature Masculino</strong>
            </nav>

            <div className="product-view-content">

                <Gallery
                    images={images}
                    showThumbs
                    width={700}
                    height={570}
                    radius={4}
                />

                <BuyBox
                    name="Tênis Nike Revolution 6 Next Nature Masculino"
                    reference="Casual"
                    stars={4.7}
                    rating={90}
                    price={219}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
                >

                    <div className="buy-box-options">
                        <h3>Tamanho</h3>

                        <ProductOptions
                            options={[39, 40, 41, 42, 43]}
                            radius={4}
                            shape="square"
                            type="text"
                        />
                    </div>

                    <div className="buy-box-options">
                        <h3>Cor</h3>

                        <ProductOptions
                            options={["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"]}
                            shape="circle"
                            type="color"
                        />
                    </div>

                </BuyBox>

            </div>

            <section className="recommended-products">

                <div className="recommended-header">
                    <h2>Produtos Recomendados</h2>
                    <a href="/produtos">Ver todos →</a>
                </div>

                <ProductListing products={recommendedProducts} />

            </section>

        </div>
    );
};

export default ProductViewPage;
