import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// importing all the pages
import ThemeOne from "../pages/theme-one";
import ExploreOne from "../pages/explore-one";
import ExploreTwo from "../pages/explore-two";
import ExploreThree from "../pages/explore-three";
import ExploreFour from "../pages/explore-four";
import Auctions from "../pages/auctions";
import ItemDetails from "../pages/item-details";
import Activity from "../pages/activity";
import Blog from "../pages/blog";
import BlogSingle from "../pages/blog-single";
import HelpCenter from "../pages/help-center";
import Authors from "../pages/authors";
import Author from "../pages/author";
import WalletConnect from "../pages/wallet-connect";
import Create from "../pages/create";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Contact from "../pages/contact";
// import Transmisiones from "../pages/transmisiones";
import Galletafortuna from "../pages/galletafortuna";
import Frase from "../pages/frase-galleta";
import { Confesiones } from "../pages/Confesiones";
// import {Registrocupones} from "../components/Formularios/Registrocupones"
import { UserAuth } from "../context/AuthContext";
// import { Alerta } from "../components/Alerta";

export function MyRouts()  {

  
 
    const { googleSignIn, user } = UserAuth();
    const RequireAuth =({children})=>{
      return user?children: iniciarSesion();
    }
    const iniciarSesion = async () => {
      try {
        await googleSignIn();
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<ThemeOne/>} />
            <Route exact path="/explore-1" element={<ExploreOne/>} />
            <Route exact path="/explore-2" element={<ExploreTwo/>} />
            <Route exact path="/explore-3" element={<ExploreThree/>} />
            <Route exact path="/explore-4" element={<ExploreFour/>} />
            <Route exact path="/auctions" element={<Auctions/>} />
            <Route exact path="/item-details" element={<ItemDetails/>} />
            <Route exact path="/activity" element={<Activity/>} />
            <Route exact path="/blog" element={<Blog/>} />
            <Route exact path="/blog-single" element={<BlogSingle/>} />
            <Route exact path="/help-center" element={<HelpCenter/>} />
            <Route exact path="/authors" component={<Authors/>} />
            <Route exact path="/author" element={<Author/>} />
            <Route exact path="/wallet-connect" element={<WalletConnect/>} />
            <Route exact path="/create" element={<Create/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/signup" element={<Signup/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/transmisiones" element={<Transmisiones/>} />
            <Route exact path="/galletafortuna" element={<Galletafortuna/>} />
            <Route exact path="/frase-galleta" element={<Frase/>} />
           
                <Route exact path="/confesiones" element={ <RequireAuth>
                  <Confesiones/>
                  </RequireAuth>} />
           
          
          
          </Routes>
        </Router>
      </div>
    );
  
}
