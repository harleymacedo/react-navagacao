import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import Navbar from './components/Navbar';

const App = () => {
    return (
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/empresa' element={<Empresa />} />
                    <Route path='/contato' element={<Contato />} />
                </Routes>            
            </BrowserRouter>
    );
}

export default App;
