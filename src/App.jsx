//React tools
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

//Styling
import "./assets/css/style.css";
import "./assets/css/animation.css";
import "./assets/js/animation.js";

//Context
import { CartProvider } from "./context/CartContext.jsx";

//Component UI
import Footer from "./components/UI/Footer.jsx";
import Header from "./components/UI/Header.jsx";
import CartDrawer from "./components/Layout/CartDrawer.jsx";

//Pages
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Tattoo from "./pages/Tattoo.jsx";
import Profile from "./pages/Profile.jsx";

//Admin
import AdminDashboard from "./pages/admin/index.jsx";
import AdminLogin from "./pages/admin/AdminLogin.jsx";

//Authorization
import Login from "./pages/auth/Login.jsx";
import Signup from "./pages/auth/Signup.jsx";

function StorefrontLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tattoo" element={<Tattoo />} />
        <Route path="/tattoo/:slug" element={<ProductDetails />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:slug" element={<ProductDetails />} />
        <Route path="/material/:slug" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<StorefrontLayout />} />
        </Routes>
        <CartDrawer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
