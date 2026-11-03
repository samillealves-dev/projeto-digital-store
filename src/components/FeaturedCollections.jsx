import './FeaturedCollections.css';

const FeaturedCollections = () => {
    return ( 
    <section className='featured-collections'>
        <h2>Coleções em destaque</h2>

        <div className='collections-list'>

            <div className='collection-card'>
                <img 
                    className='collection-img'
                    src="/collection-1.png" 
                    alt="coleção supreme" 
                />

                <span className='collection-discount'>30% OFF</span>
                <button type='button' className='collection-button'>Comprar</button>
            </div>

            <div className="collection-card">
                <img
                    className="collection-img"
                    src="/collection-2.png"
                    alt="Coleção Adidas"
                />
                <span className="collection-discount">30% OFF</span>
                <button type="button" className="collection-button">
                    Comprar
                </button>
            </div>

            <div className="collection-card">
                <img
                    className="collection-img"
                    src="/collection-3.png"
                    alt="Coleção Beats"
                />
                <span className="collection-discount">30% OFF</span>
                <button type="button" className="collection-button">
                    Comprar
                </button>
            </div>


        </div>

    </section>

     );
}
 
export default FeaturedCollections;