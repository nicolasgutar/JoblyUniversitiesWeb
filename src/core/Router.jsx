import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Trabajos from "../pages/Trabajos.jsx";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/trabajos" element={<Trabajos />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Router;