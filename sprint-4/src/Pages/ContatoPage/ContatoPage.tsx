const ContatoPage = () => {
  return (
    <section className="w-full bg-[#2196f3] text-white py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10 px-5">
        {/* Formulário */}
        <form className="flex flex-col w-[350px] gap-3">
          <label htmlFor="name">Seu Nome</label>
          <input
            id="name"
            type="text"
            className="bg-transparent border-b-2 border-white outline-none p-1"
          />
          <label htmlFor="email">Seu E-mail</label>
          <input
            id="email"
            type="email"
            className="bg-transparent border-b-2 border-white outline-none p-1"
          />
          <label htmlFor="phone">Seu Telefone</label>
          <input
            id="phone"
            type="tel"
            className="bg-transparent border-b-2 border-white outline-none p-1"
          />
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            rows={5}
            className="bg-transparent border-b-2 border-white outline-none p-1 resize-none"
          ></textarea>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="robot" required />
            <label htmlFor="robot" className="text-sm">
              I'm not a robot
            </label>
          </div>

          <button
            type="submit"
            className="mt-3 bg-[#035d99] py-2 rounded hover:bg-[#007acc] transition"
          >
            ENVIAR
          </button>
        </form>

        {/* Info lateral */}
        <div className="text-left max-w-sm">
          <h2 className="text-2xl font-bold mb-3">Fale Conosco!</h2>
          <p className="mb-3">
            Preencha o formulário e nossa equipe entrará em contato o mais
            breve possível.*
          </p>
          <p>Se preferir, tire suas dúvidas através do telefone:</p>
          <p className="text-2xl font-bold mt-2">(19) 3521-2121</p>
        </div>
      </div>
    </section>
  );
};

export default ContatoPage;