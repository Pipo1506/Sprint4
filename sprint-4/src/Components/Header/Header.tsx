import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md flex justify-between items-center px-6 md:px-20 py-4 z-50">
      <img src="Imagens/loogo.png" alt="Logo HC FMUSP" className="w-40" /> {/* (Mantendo o tamanho novo) */}

      <nav className="flex gap-6 text-[#003366] font-semibold items-center">
        <Link to="/" className="hover:text-[#0088CE] transition">
          Home
        </Link>
        <Link to="/integrantes" className="hover:text-[#0088CE] transition">
          Integrantes
        </Link>
        <Link to="/faq" className="hover:text-[#0088CE] transition">
          Perguntas Frequentes
        </Link>
        <Link to="/contato" className="hover:text-[#0088CE] transition">
          Contato
        </Link>
        
        {/* 👇 ADICIONE O NOVO LINK AQUI 👇 */}
        <Link 
          to="/cadastro" 
          className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition"
        >
          Cadastre-se
        </Link>
      </nav>
    </header>
  );
};

export default Header;