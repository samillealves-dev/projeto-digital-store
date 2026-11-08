import FeaturedCategories from "../components/FeaturedCategories";
import FeaturedCollections from "../components/FeaturedCollections";
import HeroBanner from "../components/HeroBanner";
import "./HomePage.css";
import TrendingProducts from "../components/TrendingProduct";
import SpecialOffer from "../components/SpecialOffer";
import Footer from "../components/Footer";


const HomePage = () => {
    return ( 
        <main>
            <HeroBanner/>

            <div className="home-content">
                <FeaturedCollections/>
                <FeaturedCategories/>
                <TrendingProducts />
            </div>

            <SpecialOffer/>
            <Footer/>
        </main>
     );
}
 
export default HomePage;