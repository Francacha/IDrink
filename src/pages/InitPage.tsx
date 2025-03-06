import { useNavigate } from "react-router-dom";

export default function Init() {
    const navigate = useNavigate(); // Hook para navegar entre páginas

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <img
                src="/IDrinksinfond.png"  // Ruta desde "public"
                alt="IDrinksinfond"
                className="w-105 cursor-pointer transition-transform duration-300 hover:scale-110"
                onClick={() => navigate("/home")} // Redirige a IndexPage.tsx
            />
        </div>
    );
}