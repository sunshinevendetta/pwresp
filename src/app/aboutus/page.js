'use client';
import React from "react";

export default function DisconnectedPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white text-center p-6">
      <h1 className="text-4xl font-bold">Este sitio esta desconectado</h1>
      <p className="mt-4 text-lg">El contenido que buscas ha dejado de existir.</p>
    </div>
  );
}
