
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">

                {/* Logo, descrição e redes sociais */}
                <div className="footer-brand">
                    <img src="/logo-footer.svg" alt="Digital Store" />

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>

                    <div className="footer-social">
                        <a href="#">
                            <img src="/facebook.svg" alt="Facebook" />
                        </a>

                        <a href="#">
                            <img src="/instagram.svg" alt="Instagram" />
                        </a>

                        <a href="#">
                            <img src="/twitter.svg" alt="Twitter" />
                        </a>
                    </div>
                </div>

                {/* Informações */}
                <div className="footer-info">
                    <h3>Informação</h3>

                    <ul>
                        <li><a href="#">Sobre Drip Store</a></li>
                        <li><a href="#">Segurança</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Trabalhe conosco</a></li>
                        <li><a href="#">Meus pedidos</a></li>
                    </ul>
                </div>

                {/* Categorias */}
                <div className="footer-categories">
                    <h3>Categorias</h3>

                    <ul>
                        <li><a href="#">Camisetas</a></li>
                        <li><a href="#">Calças</a></li>
                        <li><a href="#">Bonés</a></li>
                        <li><a href="#">Headphones</a></li>
                        <li><a href="#">Tênis</a></li>
                    </ul>
                </div>

                {/* Contato */}
                <div className="footer-contact">
                    <h3>Contato</h3>

                    <p>
                        Av. Santos Dumont, 1510 - 1º andar -
                        Aldeota, Fortaleza - CE, 60150-161
                    </p>

                    <p>(85) 3051-3411</p>
                </div>

            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <hr />
                <p>© 2022 Digital College</p>
            </div>
        </footer>
    );
};

export default Footer;
