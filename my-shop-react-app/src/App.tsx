// App.tsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './layouts/Header';
// import MainRoutes from './routes/MainRoutes';
import ContactPage from './pages/ContactPage/ContactPage';
import AboutPage from './pages/AboutPage/AboutPage';
import HomePage from './pages/HomePage/HomePage';

import { CardProvider } from './context/CardContext';
import ProductsPage from './pages/ProductsPage/ProductsPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CardProvider>
        <Header />
        <main className='container mt-1 pt-1'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/products-page' element={<ProductsPage />} />
            <Route path="/about-page" element={<AboutPage />} />
            <Route path="/contact-page" element={<ContactPage />} />
          </Routes>
        </main>
      </CardProvider>

    </BrowserRouter >
  );
}

export default App;
