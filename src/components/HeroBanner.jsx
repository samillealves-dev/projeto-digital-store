import './HeroBanner.css';

const HeroBanner = () => {
    return ( 
        <section className="hero-banner">
            <div className="hero-content">
                <p className='hero-subtitle'>Melhores ofertas personalizadas</p>

                <h1 >Queima de stoque Nike <span className='hero-fire'>🔥</span> </h1>

                <p className="hero-description"> Consequat culpa exercitation mollit nisi excepteur do do tempor
                laboris eiusmod irure consectetur.
                </p>

                <button type="button" className="hero-button">
                    Ver Ofertas
                </button>
            </div>
            <div className="hero-image">
                <img 
                    className='hero-shoe'
                    src="/banner-nike.png" 
                    alt="Tênis Nike em promoção"    
                />
            </div>

            <img 
                className='hero-ornament'
                src="/Ornament.png"
                alt="" 
                aria-hidden="true"
            />

            <div className="hero-indicators">
                <span className="active"></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            


        </section>
     );
}
 
export default HeroBanner;