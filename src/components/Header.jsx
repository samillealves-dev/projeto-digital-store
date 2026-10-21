import './Header.css';


const Header = () => {
    return ( 

        <header className="header">
            <div className="header-main flex align-items-center" >

                <div className="header-logo">
                    <h1>Digital Store</h1>
                </div>

                <div className="header-search">
                    <input type="text" className="input" placeholder="pesquisar produto" />
                    <i className="pi pi-search"></i>
                </div>

                <div className="header-login flex align-items-center gap-3">
                    <a href="">Cadastre-se</a>
                    <button type="button">Entrar</button> 
                </div>

                <div className="header-cart">
                    <i className="pi pi-shopping-cart"></i>
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