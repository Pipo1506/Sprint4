
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CadastroPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [dob, setDob] = useState(""); // dob = Date of Birth
  const [cep, setCep] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não conferem!");
      return;
    }

    const userData = {
      name,
      email,
      cpf,
      dob,
      cep,
      password, 
    };

    //CONSOLE.LOG!
    console.log("Dados do Cadastro:", userData);

    alert("Cadastro enviado! Verifique o console.");
    // Aqui você, no futuro, enviaria os 'userData' para sua API
  };

  return (
    <div className="flex justify-center items-center py-12 px-4">
      <div className="max-w-lg w-full bg-white p-8 shadow-xl rounded-lg">
        <h2 className="text-3xl font-bold text-center text-[#003366] mb-8">
          Crie sua Conta
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nome Completo
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 w-full border border-gray-300 rounded-lg p-2"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full border border-gray-300 rounded-lg p-2"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
                CPF
              </label>
              <input
                type="text"
                id="cpf"
                placeholder="000.000.000-00"
                className="mt-1 w-full border border-gray-300 rounded-lg p-2"
                required
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
            </div>
            <div className="flex-1 mt-5 md:mt-0">
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                Data de Nascimento
              </label>
              <input
                type="date"
                id="dob"
                className="mt-1 w-full border border-gray-300 rounded-lg p-2"
                required
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="cep" className="block text-sm font-medium text-gray-700">
              CEP
            </label>
            <input
              type="text"
              id="cep"
              placeholder="00000-000"
              className="mt-1 w-full border border-gray-300 rounded-lg p-2"
              required
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 w-full border border-gray-300 rounded-lg p-2"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex-1 mt-5 md:mt-0">
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                Confirme sua Senha
              </label>
              <input
                type="password"
                id="confirm-password"
                className="mt-1 w-full border border-gray-300 rounded-lg p-2"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-cyan-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-cyan-700 transition font-semibold"
            >
              Criar Conta
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Já tem uma conta?{" "}
          <Link to="/login" className="font-medium text-cyan-600 hover:text-cyan-700">
            Entre aqui
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CadastroPage;