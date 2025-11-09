const FaqPage = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white text-[#003366]">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#0088CE]">
        Perguntas Frequentes
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold">Como posso agendar uma consulta?</h2>
          <p className="mt-2 text-gray-700">
            Você pode agendar sua consulta pelo nosso site, clicando em “Solicitar um agendamento”, 
            ou entrando em contato com nossa central pelo telefone (11) 2661-8000.
          </p>
        </div>

        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold">Quais documentos preciso levar no dia do atendimento?</h2>
          <p className="mt-2 text-gray-700">
            É necessário levar documento com foto, cartão do SUS e comprovante de residência atualizado.
          </p>
        </div>

        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold">O hospital realiza exames laboratoriais?</h2>
          <p className="mt-2 text-gray-700">
            Sim! O Hospital das Clínicas possui um centro completo de exames laboratoriais, 
            disponível para pacientes agendados e casos de urgência.
          </p>
        </div>

        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold">Posso acompanhar um paciente internado?</h2>
          <p className="mt-2 text-gray-700">
            Sim, cada paciente tem direito a um acompanhante, conforme a necessidade médica e as normas do hospital.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
