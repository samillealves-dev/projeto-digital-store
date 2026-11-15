import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePages";
import ProductListingPage from "./pages/ProductListingPage"
import ProductViewPage from "./pages/ProductViewPage";

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/produtos" element={<ProductListingPage />} />
                <Route path="/product/:id" element={<ProductViewPage />} />
            </Routes>
        </Layout>
    );
};

export default App;