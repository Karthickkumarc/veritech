import Navbar from "./components/Navabr/Navbar";
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import LoginSingup from "./components/LoginPage/LoginSingup";

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element= {<Home />}/>
        <Route  path="/login" element={<LoginSingup />}/>
        {/* <Route  path="/objective" element={<LoginSingup />}/>
        <Route  path="/members" element={<LoginSingup />}/>
        <Route  path="/testimonials" element={<LoginSingup />}/> */}
     
        
      </Routes>
      <Footer />
      </BrowserRouter>
     

    </div>
  );
}

export default App;
