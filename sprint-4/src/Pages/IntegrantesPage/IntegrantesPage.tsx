const IntegrantesPage = () => {
  return (
    <main className="flex flex-col items-center w-full text-gray-900">
      
      <div className="w-full max-w-6xl p-6">
        
        <h1 className="text-4xl font-bold text-cyan-600 my-12 text-center">
          CONHEÇA NOSSO TIME!
        </h1>
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          {/* Card Henrique */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <section className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">HENRIQUE RODRIGUES</h2>
              <img
                src="/Imagens/Henrique.png"
                alt="Henrique"
                className="w-20 h-20 rounded-full object-cover"
              />
            </section>
            <p className="text-gray-700 mb-2">TURMA: 1TDSA, RM: 562917</p>
            <h3 className="text-gray-500 font-semibold mb-3">PROGRAMADOR</h3>
            <p className="text-sm leading-relaxed text-justify">
              Sou programador back-end no HOSPITAL DAS CLÍNICAS, atuando no
              desenvolvimento e manutenção de sistemas que apoiam os fluxos
              clínicos e administrativos. Trabalho com linguagens como Python e
              Java, focando em APIs seguras e escaláveis. Tenho experiência com
              bancos de dados e integração de sistemas de saúde.
            </p>
          </div>

          {/* Card Phillipo */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <section className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">PHILLIPO BARBOSA</h2>
              <img
                src="/Imagens/Phillipo.jpeg"
                alt="Phillipo"
                className="w-20 h-20 rounded-full object-cover"
              />
            </section>
            <p className="text-gray-700 mb-2">TURMA: 1TDSA, RM: 565399</p>
            <h3 className="text-gray-500 font-semibold mb-3">PROGRAMADOR</h3>
            <p className="text-sm leading-relaxed text-justify">
              Tenho 19 anos, atualmente curso “ADS” na FIAP e sou programador
              responsável pelo front-end no site do Hospital das Clínicas. Atuo
              no desenvolvimento de interfaces intuitivas e acessíveis,
              utilizando React. Também trabalho com chatbots
              integrados via IBM Watson Assistant, buscando sempre aplicar boas
              práticas de usabilidade, acessibilidade e performance e o IA para criação de dados.
            </p>
          </div>

        </div> 
      </div> 
    </main>
  );
};

export default IntegrantesPage;