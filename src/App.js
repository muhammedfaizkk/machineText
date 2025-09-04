import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Products from './pages/Products';
import ProtectedRoute from './components/protected/ProtectedRoute';
import Profile from './pages/Profile';
import { Toaster } from "react-hot-toast";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Layout wrapper for pages with Navbar & Footer
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <Layout>
                  <Products />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Layout>
                  <Profile />
                </Layout>
              </ProtectedRoute>
            }
          />
        </Routes>


        <Toaster position="top-center" reverseOrder={false} />
      </BrowserRouter>
    </div>
  );
}

export default App;
