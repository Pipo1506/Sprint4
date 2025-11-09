import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    
    <nav className={`" bg-cyan-600 text-white shadow-md ${className || ""}`}>
      
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="flex justify-center items-center h-14">
          <div className="flex items-center space-x-6">
          
            <Link
              to="/agendamento"
              className="
                px-3 py-2 rounded-md font-medium 
                text-base  /* 👈 1. Aumentei o texto */
                [text-shadow:1px_1px_1px_rgba(0,0,0,0.6)] /* 👈 2. Adicionei sombra no texto */
                hover:bg-white hover:text-[#003366] hover:text-shadow-none /* 👈 3. Removi a sombra no hover */
                transition
              "
            >
              Agendar Exame
            </Link>

            <Link
              to="/resultados"
              className="
                px-3 py-2 rounded-md font-medium 
                text-base 
                [text-shadow:1px_1px_1px_rgba(0,0,0,0.6)]
                hover:bg-white hover:text-[#02788a] hover:text-shadow-none
                transition
              "
            >
              Resultados de Exames
            </Link>

            <Link
              to="/especialidades"
              className="
                px-3 py-2 rounded-md font-medium 
                text-base 
                [text-shadow:1px_1px_1px_rgba(0,0,0,0.6)]
                hover:bg-white hover:text-[#003366] hover:text-shadow-none
                transition
              "
            >
              Especialidades
            </Link>

            <Link
              to="/portal-paciente"
              className="
                px-3 py-2 rounded-md font-medium 
                text-base 
                [text-shadow:1px_1px_1px_rgba(0,0,0,0.6)]
                hover:bg-white hover:text-[#003366] hover:text-shadow-none
                transition
              "
            >
              Portal do Paciente
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;