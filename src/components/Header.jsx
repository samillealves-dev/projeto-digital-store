const Header = () => {
    return ( 

        <header>
            <div >
                <div>
                    <h1>Digital Store</h1>
                </div>

                <div >
                    <input type="text" placeholder="pesquisar produto" />
                </div>

                <div>
                    <a href="">Cadastre-se</a>
                    <button type="button">Entrar</button> 
                </div>

                <div>
                    <span>Carrinho</span>
                </div>
            </div>

            <nav>
                <a href="">Home</a>
                <a href="">Produtos</a>
                <a href="">Categorias</a>
                <a href="">Meus pedidos</a>
            </nav>
        </header>
        
    
    
     );
}
 
export default Header;