import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePages";
import ProductListingPage from "./pages/ProductListingPage";

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/produtos" element={<ProductListingPage />} />
            </Routes>
        </Layout>
    );
};

export default App;