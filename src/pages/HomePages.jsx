import FeaturedCategories from "../components/FeaturedCategories";
import FeaturedCollections from "../components/FeaturedCollections";
import HeroBanner from "../components/HeroBanner";
import "./HomePage.css";
import TrendingProducts from "../components/TrendingProduct";


const HomePage = () => {
    return ( 
        <main>
            <HeroBanner/>

            <div className="home-content">
                <FeaturedCollections/>
                <FeaturedCategories/>
                <TrendingProducts />
            </div>
        </main>
     );
}
 
export default HomePage;