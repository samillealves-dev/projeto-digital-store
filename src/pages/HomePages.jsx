import FeaturedCategories from "../components/FeaturedCategories";
import FeaturedCollections from "../components/FeaturedCollections";
import HeroBanner from "../components/HeroBanner";
import "./HomePage.css";


const HomePage = () => {
    return ( 
        <main>
            <HeroBanner/>

            <div className="home-content">
                <FeaturedCollections/>
                <FeaturedCategories/>
            </div>
        </main>
     );
}
 
export default HomePage;