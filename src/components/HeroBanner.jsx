import './HeroBanner.css';

const HeroBanner = () => {
    return ( 
        <section className="hero-banner">
            <div className="hero-content">
                <p className='hero-subtitle'>Melhores ofertadas personalizadas</p>

                <h1 >Queima de stoque Nike</h1>

                <p className="hero-description"> Consequat culpa exercitation mollit nisi excepteur do do tempor
                laboris eiusmod irure consectetur.
                </p>

                <button type="button" className="hero-button">
                    Ver Ofertas
                </button>
            </div>
            <div className="hero-img">
                <img 
                    className='hero-shoe'
                    src="/banner-nike.png" 
                    alt="Tênis Nike em promoção" 
                    
                />

            </div>
        </section>
     );
}
 
export default HeroBanner;