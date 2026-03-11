import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Teams from "./pages/Teams";
import Services from "./pages/Service";
import BlogList from "./pages/BlogList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateBlog from "./pages/CreateBlog";
import BlogDetail from "./pages/BlogDetail";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/teams" element={<Teams />} />

          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/create-blog" element={<CreateBlog />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
