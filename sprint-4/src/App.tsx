import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage/Home";
import IntegrantesPage from "./Pages/IntegrantesPage/IntegrantesPage";
import FaqPage from "./Pages/FaqPage/FaqPage";
import ContatoPage from "./Pages/ContatoPage/ContatoPage";
import CadastroPage from "./Pages/CadastroPage/CadastroPage";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar className="mt-30" />
      <main className="grow bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/integrantes" element={<IntegrantesPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;