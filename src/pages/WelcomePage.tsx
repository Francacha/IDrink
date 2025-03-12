import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-extrabold mb-6">¡Bienvenido!</h1>
      <p className="text-2xl mb-10">Disfruta de nuestra aplicación.</p>
      <button
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-xl"
        onClick={() => navigate("/")}
      >
        Entrar
      </button>
    </div>
  );
}
