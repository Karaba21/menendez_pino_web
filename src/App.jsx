import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ComoFuncionaPage from './pages/ComoFuncionaPage';
import CasasPage from './pages/CasasPage';
import EmpresasPage from './pages/EmpresasPage';
import FAQPage from './pages/FAQPage';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/como-funciona" element={<Layout><ComoFuncionaPage /></Layout>} />
        <Route path="/casas" element={<Layout><CasasPage /></Layout>} />
        <Route path="/empresas" element={<Layout><EmpresasPage /></Layout>} />
        <Route path="/faq" element={<Layout><FAQPage /></Layout>} />
        <Route path="/contacto" element={<Layout><ContactoPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
