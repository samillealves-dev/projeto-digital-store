import './Header.css';
import logoHeader from '../../assets/logo-header.svg'
import miniCart from '../../assets/mini-cart.svg'


const Header = () => {
    return ( 

        <header className="header">
            <div className="header-main flex align-items-center" >

                <div className="header-logo">
                    <img src={logoHeader} alt="Digital Store" />
                </div>

                <div className="header-search">
                    <input type="text" className="input" placeholder="pesquisar produto" />
                    <i className="pi pi-search"></i>
                </div>

                <div className="header-login flex align-items-center gap-3">
                    <a href="" className='link-cadastro'>Cadastre-se</a>
                    <button type="button" className='btn-login'>Entrar</button> 
                </div>

                <div className="header-cart">
                    <img src={miniCart} alt="Carrinho de Compras" />
                </div>
            </div>

            <nav className="nav">
                <a href="">Home</a>
                <a href="">Produtos</a>
                <a href="">Categorias</a>
                <a href="">Meus pedidos</a>
            </nav>
        </header>
        
    
    
     );
}
 
export default Header;