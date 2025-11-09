import React, { useState } from "react";

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
     
      <footer className="bg-white border-t border-gray-300 py-10">
        <div className="flex flex-wrap justify-around text-blue-900 max-w-6xl mx-auto px-4">
          <div className="flex flex-col mb-6">
            <h3 className="text-lg font-bold mb-3">
              Hospital das Clínicas - FMUSP
            </h3>
            <ul className="space-y-1 text-sm">
              <li>Av. Dr. Enéas de Carvalho Aguiar, 255</li>
              <li>Cerqueira César, São Paulo - SP</li>
              <li>CEP 05403-000</li>
              <li>Tel: (11) 2661-8000</li>
            </ul>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-4 bg-cyan-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-cyan-700 transition"
            >
              Deixe sua sugestão
            </button>
          </div>
          <div className="flex flex-col mb-6">
            <h3 className="text-lg font-bold mb-3">Institucional</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Quem Somos</a></li>
              <li><a href="#" className="hover:underline">Missão, Visão e Valores</a></li>
              <li><a href="#" className="hover:underline">História</a></li>
              <li><a href="#" className="hover:underline">Transparência</a></li>
            </ul>
          </div>

          
          <div className="flex flex-col mb-6">
            <h3 className="text-lg font-bold mb-3">Transparência</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Transparência Ativa</a></li>
              <li><a href="#" className="hover:underline">Portal da Transparência</a></li>
              <li><a href="#" className="hover:underline">Editais e Licitações</a></li>
              <li><a href="#" className="hover:underline">Relatórios</a></li>
            </ul>
          </div>
        </div>

      </footer>

      {/* Modal de Sugestão */}
      <div
        //Adicionei 'onClick' para fechar ao clicar fora
        onClick={() => setIsModalOpen(false)}
        className={`
          fixed inset-0 z-50 
          flex justify-center items-center 
          backdrop-blur-sm bg-black/30
          
          /* 4. Classes de animação para o fundo */
          transition-opacity duration-300 ease-in-out
          ${isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* 5. Este é o Card (Conteúdo) */}
        <div
          // 6. 'stopPropagation' impede que clicar DENTRO feche o modal
          onClick={(e) => e.stopPropagation()}
          className={`
            bg-white rounded-lg p-8 w-96 shadow-lg relative /* <-- Suas classes de tamanho originais */
            
            /* 7. Classes de animação para o card (zoom e fade) */
            transition-all duration-300 ease-in-out
            ${isModalOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          `}
        >
         
          <h2 className="text-xl font-bold mb-4 text-cyan-700 text-center">
            Deixe sua sugestão
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Sugestão enviada com sucesso!");
              setIsModalOpen(false);
            }}
            className="space-y-3"
          >
            <input
              type="text"
              placeholder="Nome"
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
            <input
              type="tel"
              placeholder="Telefone"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
            <textarea
              placeholder="Deixe sua sugestão"
              className="w-full border border-gray-300 rounded-lg p-2 h-24 resize-none"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition"
            >
              Enviar
            </button>
          </form>

          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;