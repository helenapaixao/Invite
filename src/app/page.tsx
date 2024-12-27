'use client';

import React, { useState } from 'react';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const randomX = Math.random() * 200 - 100; // Movimento no eixo X
    const randomY = Math.random() * 100 - 50; // Movimento no eixo Y
    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
  };

  return (
    <main className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
        Olá Gabi, bora fazer coisas incríveis em 2025?
      </h1>

      <div className="flex flex-col sm:flex-row gap-6">
        {/* Botão Sim */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="relative px-8 py-4 bg-gradient-to-r from-green-400 to-green-600 text-lg md:text-xl font-semibold text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
        >
          Sim
        </button>

        {/* Botão Não */}
        <button
          onMouseEnter={handleButtonMove} // Movimento no hover
          onClick={handleButtonMove} // Movimento no clique
          className="relative px-8 py-4 bg-gradient-to-r from-red-400 to-red-600 text-lg md:text-xl font-semibold text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform"
        >
          Não
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
              Simmmm! 🥰
            </h2>
            <p className="text-center">
               Mal posso esperar para fazer 2025 ser o
              nosso ano mais especial. ❤️
            </p>
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
