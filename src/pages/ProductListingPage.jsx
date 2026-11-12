
import { useState } from "react";
import ProductListing from "../components/ProductListing";
import FilterGroup from "../components/FilterGroup";
import "./ProductListingPage.css";

const ProductListingPage = () => {

    const [filtrosAbertos, setFiltrosAbertos] = useState(false);

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

                <div className="listing-top">

                    <h1 className="listing-title">
                        Resultados para "Tênis" - {products.length} produtos
                    </h1>

                    <div className="listing-sort">
                        <label htmlFor="sort-products">
                            Ordenar por:
                        </label>

                        <select id="sort-products" defaultValue="">
                            <option value="" disabled>
                                Selecione
                            </option>
                            <option value="menor">
                                Menor preço
                            </option>
                            <option value="maior">
                                Maior preço
                            </option>
                        </select>
                    </div>

                    <button
                        type="button"
                        className="filter-mobile-button"
                        onClick={() => setFiltrosAbertos(true)}
                        aria-label="Abrir filtros"
                    >
                        <i className="pi pi-filter"></i>
                    </button>

                </div>

                <div className="listing-content">

                    <aside
                        className={`listing-sidebar ${
                            filtrosAbertos ? "filters-open" : ""
                        }`}
                    >
                        <div className="filter-heading">

                            <h2>Filtrar por</h2>

                            <button
                                type="button"
                                className="filter-close"
                                onClick={() => setFiltrosAbertos(false)}
                                aria-label="Fechar filtros"
                            >
                                <i className="pi pi-times"></i>
                            </button>

                        </div>

                        <hr />

                        <FilterGroup
                            title="Marca"
                            inputType="checkbox"
                            options={[
                                { text: "Adiddas", value: "adiddas" },
                                { text: "Calenciaga", value: "calenciaga" },
                                { text: "K-Swiss", value: "k-swiss" },
                                { text: "Nike", value: "nike" },
                                { text: "Puma", value: "puma" }
                            ]}
                        />

                        <FilterGroup
                            title="Categoria"
                            inputType="checkbox"
                            options={[
                                { text: "Esporte e lazer", value: "esporte-lazer" },
                                { text: "Casual", value: "casual" },
                                { text: "Utilitário", value: "utilitario" },
                                { text: "Corrida", value: "corrida" }
                            ]}
                        />

                        <FilterGroup
                            title="Gênero"
                            inputType="checkbox"
                            options={[
                                { text: "Masculino", value: "masculino" },
                                { text: "Feminino", value: "feminino" },
                                { text: "Unisex", value: "unisex" }
                            ]}
                        />

                        <FilterGroup
                            title="Estado"
                            inputType="radio"
                            options={[
                                { text: "Novo", value: "novo" },
                                { text: "Usado", value: "usado" }
                            ]}
                        />

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
