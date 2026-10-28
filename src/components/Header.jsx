import { useState } from 'react';
import './Header.css';
import logoHeader from '../../assets/logo-header.svg'
import miniCart from '../../assets/mini-cart.svg'


const Header = () => {

    const [pesquisaAberta, setPesquisaAberta] = useState(false);
    const [menuAberto, SetMenuAberto] = useState(false)

    return ( 

        <header className="header">

            {menuAberto && (
                <div
                    className="menu-overlay"
                    onClick={() => setMenuAberto(false)}
                ></div>
            )}

            
            <div className="header-main flex align-items-center" >

                <button 
                    className='header-menu' 
                    type='button' 
                    aria-label='abrir-menu'
                    onClick={()=> SetMenuAberto(!menuAberto)}
                >
                    <i className='pi pi-bars'></i>
                </button>

                <div className="header-logo">
                    <img src={logoHeader} alt="Digital Store" />
                </div>

                <div className="header-search">
                    <input type="text" className="input" placeholder="Pesquisar produto..." />
                    <i className="pi pi-search"></i>
                </div>

                <div className="header-login align-items-center gap-3">
                    <a href="" className='link-cadastro'>Cadastre-se</a>
                    <button type="button" className='btn-login'>Entrar</button> 
                </div>

                <button
                    type='button' 
                    className='header-search-mobile'
                    aria-label='Abrir pesquisa' 
                    onClick={()=> setPesquisaAberta(!pesquisaAberta)}
                >
                    <i className=' pi pi-search'></i>
                </button>

                <div className="header-cart">
                    <img src={miniCart} alt="Carrinho de Compras" />
                </div>
            </div>

            {pesquisaAberta && (

                <div className="header-search-expanded">
                    <input
                        type="text"
                        placeholder="Pesquisar produto..."
                    />
                    <i className="pi pi-search"></i>
                </div>
            )}

            <nav className={`nav ${menuAberto ? "nav-aberta" : ""}`}>
                <div className='nav-links'>
                <p className='nav-titulo'>Páginas</p>

                <a className='home' href="">Home</a>
                <a className='menunavegacao' href="">Produtos</a>
                <a className='menunavegacao' href="">Categorias</a>
                <a className='menunavegacao' href="">Meus pedidos</a>
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
}
 
export default Header;