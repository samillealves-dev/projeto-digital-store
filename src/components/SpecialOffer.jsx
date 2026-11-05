import "./SpecialOffer.css";

const SpecialOffer = () => {
    return (
        <section className="special-offer">
            <div className="special-offer-image">
                <img src="/air-jordan.png" alt="Tênis Air Jordan" />
            </div>

            <div className="special-offer-content">
                <span className="special-offer-label">Oferta especial</span>
                <h2>Air Jordan edição de colecionador</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, molestiae iure! Minus quisquam et nostrum nisi atque in natus molestiae aspernatur, dignissimos enim illo ut modi iste maiores molestias nam!</p>
                <button>Ver Oferta</button>
            </div>
        </section>
    );
};

export default SpecialOffer;
