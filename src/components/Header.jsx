import './Header.css';
import logoHeader from '../../assets/logo-header.svg'
import miniCart from '../../assets/mini-cart.svg'


const Header = () => {
    return ( 

        <header className="header">
            <div className="header-main flex align-items-center" >

                <button className='header-menu' type='button' aria-label='abrir-menu'>
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

                <button type='button' className='header-search-mobile' aria-label='Abrir pesquisa'>
                    <i className=' pi pi-search'></i>
                </button>

                <div className="header-cart">
                    <img src={miniCart} alt="Carrinho de Compras" />
                </div>
            </div>

            <nav className="nav">
                <a className='home' href="">Home</a>
                <a className='menunavegacao' href="">Produtos</a>
                <a className='menunavegacao' href="">Categorias</a>
                <a className='menunavegacao' href="">Meus pedidos</a>
            </nav>
        </header>
        
    
    
     );
}
 
export default Header;