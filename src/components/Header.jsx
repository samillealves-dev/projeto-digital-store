
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./Header.css";
import logoHeader from "../../assets/logo-header.svg";
import miniCart from "../../assets/mini-cart.svg";

const Header = () => {

    const [pesquisaAberta, setPesquisaAberta] = useState(false);
    const [menuAberto, setMenuAberto] = useState(false);
    const [termoBusca, setTermoBusca] = useState("");

    const navigate = useNavigate();

    // Função responsável pela pesquisa
    const realizarBusca = (event) => {
        event.preventDefault();

        const termo = termoBusca.trim();

        if (!termo) return;

        navigate(`/produtos?filter=${encodeURIComponent(termo)}`);

        setPesquisaAberta(false);
        setMenuAberto(false);
    };

    return (
        <header className="header">

            {menuAberto && (
                <div
                    className="menu-overlay"
                    onClick={() => setMenuAberto(false)}
                ></div>
            )}

            <div className="header-main flex align-items-center">

                {/* MENU MOBILE */}
                <button
                    className="header-menu"
                    type="button"
                    aria-label="Abrir menu"
                    onClick={() => setMenuAberto(!menuAberto)}
                >
                    <i className="pi pi-bars"></i>
                </button>

                {/* LOGO */}
                <div className="header-logo">
                    <img src={logoHeader} alt="Digital Store" />
                </div>

                {/* PESQUISA DESKTOP */}
                <form
                    className="header-search"
                    onSubmit={realizarBusca}
                >
                    <input
                        type="text"
                        className="input"
                        placeholder="Pesquisar produto..."
                        value={termoBusca}
                        onChange={(event) =>
                            setTermoBusca(event.target.value)
                        }
                    />

                    <button
                        type="submit"
                        className="search-submit"
                        aria-label="Pesquisar produto"
                    >
                        <i className="pi pi-search"></i>
                    </button>
                </form>

                {/* LOGIN E CADASTRO */}
                <div className="header-login align-items-center gap-3">
                    <a href="" className="link-cadastro">
                        Cadastre-se
                    </a>

                    <button type="button" className="btn-login">
                        Entrar
                    </button>
                </div>

                {/* BOTÃO PESQUISA MOBILE */}
                <button
                    type="button"
                    className="header-search-mobile"
                    aria-label="Abrir pesquisa"
                    onClick={() => setPesquisaAberta(!pesquisaAberta)}
                >
                    <i className="pi pi-search"></i>
                </button>

                {/* CARRINHO */}
                <div className="header-cart">
                    <img src={miniCart} alt="Carrinho de Compras" />
                </div>

            </div>

            {/* CAMPO DE PESQUISA MOBILE */}
            {pesquisaAberta && (
                <form
                    className="header-search-expanded"
                    onSubmit={realizarBusca}
                >
                    <input
                        type="text"
                        placeholder="Pesquisar produto..."
                        value={termoBusca}
                        onChange={(event) =>
                            setTermoBusca(event.target.value)
                        }
                    />

                    <button
                        type="submit"
                        className="search-submit"
                        aria-label="Pesquisar produto"
                    >
                        <i className="pi pi-search"></i>
                    </button>
                </form>
            )}

            {/* NAVEGAÇÃO */}
            <nav className={`nav ${menuAberto ? "nav-aberta" : ""}`}>

                <div className="nav-links">

                    <p className="nav-titulo">Páginas</p>

                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive
                                ? "menunavegacao active"
                                : "menunavegacao"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/produtos"
                        className={({ isActive }) =>
                            isActive
                                ? "menunavegacao active"
                                : "menunavegacao"
                        }
                    >
                        Produtos
                    </NavLink>

                    <a className="menunavegacao" href="">
                        Categorias
                    </a>

                    <a className="menunavegacao" href="">
                        Meus pedidos
                    </a>

                </div>

                <div className="nav-login">

                    <button type="button" className="btn-login">
                        Entrar
                    </button>

                    <a href="" className="link-cadastro">
                        Cadastre-se
                    </a>

                </div>

            </nav>

        </header>
    );
};

export default Header;
