import './FeaturedCategories.css';

const categories = [
    { id: 1, name: "Camisetas", image: "/tshirt-_1_.svg"},
    { id: 2, name: "Calças", image: "/calça.svg" },
    { id: 3, name: "Caps", image: "/calça.svg" },
    { id: 4, name: "Headphones", image: "/fone.svg" },
    { id: 5, name: "Tênis", image: "/tenis.svg"},
]; 


const FeaturedCategories = () => {
    return (
        <section className="featured-categories">
            <h2>Coleções em destaques</h2>

            <div className="categories-list">
                {categories.map((category) => (
                    <div className="category-item" key={category.id}>
                        {category.image && (
                            <div className="category-image">
                                <img src={category.image} alt={category.name} />
                            </div>
                        )}
                        <p>{category.name}</p>
                    </div>
                ))}

            </div>
        </section>
      );
}
 
export default FeaturedCategories;