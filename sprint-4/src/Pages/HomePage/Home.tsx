const HomePage = () => {
  return (
    <div className="flex flex-col items-center text-[#003366]">
      {/* Carrossel */}
      <section
        className="w-full h-[500px] bg-cover bg-center flex flex-col justify-center items-end pr-20"
        style={{ backgroundImage: "url('/Imagens/Medico.png')" }}
      >
        {/* O conteúdo interno já tinha 'pr-20', o que está ótimo */}
        <div className="bg-white px-4 py-2 rounded-full mb-4 text-[#0077c2] font-semibold">
          ❤️ O melhor para você
        </div>
        <h1 className="text-3xl font-bold mb-4 text-[#0077c2] max-w-lg text-right">
          Contribuindo para a Saúde Pública no HC da USP
        </h1>
        <button className="bg-[#0087dc] text-white font-bold py-3 px-6 rounded-full hover:bg-[#0070b3] transition">
          AGENDAR EXAME
        </button>
      </section>

      {/* Estatísticas - agora sem wrapper, como você quer */}
      <section className="flex justify-around w-full py-10 bg-white text-center px-6 md:px-20">
        {[
          { number: "80+", text: "Anos de experiência" },
          { number: "15+", text: "Unidades pelo Brasil" },
          { number: "20.000+", text: "Funcionários prontos para te auxiliar" },
          { number: "9+", text: "Parceiros que apoiam nossa causa" },
        ].map((item, index) => (
          <div key={index}>
            <h2 className="text-3xl font-bold text-[#0087dc]">{item.number}</h2>
            <p className="mt-2">{item.text}</p>
          </div>
        ))}
      </section>

      {/* Serviços - Agora com o texto na vertical (lendo de cima para baixo) */}
      <section className="flex flex-row justify-center items-start w-full py-16 px-6 md:px-20">
        <div className="flex flex-col items-center mr-20">
          {/* 👇 A MUDANÇA ESTÁ AQUI */}
          <h1 className="text-[80px] font-bold rotate-180 [writing-mode:vertical-lr] text-[#003366]">
            SERVIÇOS
          </h1>
          <h2 className="text-xl text-[#0077c2] mt-10">HOSPITAL DAS CLÍNICAS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-2/3">
          {[
            {
              title: "Pronto Atendimento",
              text: "O Pronto-Atendimento Central funciona 24h... destinado a situações de emergência ou urgência.",
            },
            {
              title: "Internação Domiciliar",
              text: "O Programa de Cuidado Integral no Lar (PROCILAR)... rede de apoio preparada para colaborar no cuidado.",
            },
            {
              title: "Pronto Socorro Adulto",
              text: "Destinado aos casos mais críticos, que muitas vezes implicam em internação.",
            },
            {
              title: "Pronto Socorro Ortopedia",
              text: "Referência no atendimento de casos de trauma, quedas e fraturas. Funciona 24h.",
            },
            {
              title: "Unidades de Terapia Intensiva",
              text: "Assistência a pacientes que necessitam de tratamento intensivo e monitoramento permanente.",
            },
            {
              title: "Ambulatório de Especialidades",
              text: "Atende diversas especialidades médicas por meio de consultas previamente marcadas.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="shadow-lg p-6 flex flex-col justify-between rounded-lg hover:scale-105 hover:bg-[#0077c2] hover:text-white transition"
            >
              <div>
                <h1 className="text-xl font-bold mb-3">{item.title}</h1>
                <p className="text-sm leading-5">{item.text}</p>
              </div>
              <button className="mt-4 bg-white text-[#0077c2] font-semibold px-3 py-1 rounded hover:bg-[#e6e6e6] transition">
                Saiba mais
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* A SEÇÃO DO FORMULÁRIO QUE ESTAVA AQUI FOI REMOVIDA 
      */}
      
    </div>
  );
};

export default HomePage;