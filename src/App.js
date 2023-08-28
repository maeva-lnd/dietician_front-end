import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Recipes from "./pages/recipes/Recipes";
import Contact from "./pages/contact/Contact";
import Login from "./pages/authentication/Login";
import LegalNotice from "./pages/legalNotice/LegalNotice";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import SingleRecipe from "./pages/recipes/SingleRecipe";
import Logout from "./pages/authentication/Logout";
import Page404 from "./pages/404/Page404";


function App() {
  return (
    <div className="App">
    <Header />
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<Page404 />}/>
        <Route path="/recettes" element={<Recipes />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/connexion" element={<Login />}/>
        <Route path="/deconnexion" element={<Logout />}/>
        <Route path="mentionslegales" element={<LegalNotice />}/>
        <Route path="politiquedeconfidentialite" element={<PrivacyPolicy />}/>
        <Route path="/recette/:id" element={<SingleRecipe />}/>
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
