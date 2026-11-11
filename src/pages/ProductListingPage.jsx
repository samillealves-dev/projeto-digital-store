
import ProductListing from "../components/ProductListing";

const ProductListingPage = () => {

    const products = Array.from({ length: 15 }, (_, index) => ({
        id: index + 1,
        name: "K-Swiss V8 - Masculino",
        category: "Tênis",
        price: 200,
        priceDiscount: 100,
        image: "/tenis.png",
        discount: index < 2 ? "30% OFF" : null
    }));

    return (
        <main className="listing-page">
            <div className="listing-container">

                <h1>Listagem de Produtos</h1>

                <div className="listing-content">
                    <aside className="listing-sidebar">
                        {/* Aqui ficarão os filtros */}
                    </aside>

                    <section className="listing-results">
                        <ProductListing products={products} />
                    </section>
                </div>

            </div>
        </main>
    );
};

export default ProductListingPage;
