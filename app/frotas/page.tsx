"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function NovaFrotaPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    nome: "",
    placa: "",
    status: "ativo",
  });

  const salvar = async () => {
    const { error } = await supabase.from("frotas").insert({
      nome: form.nome,
      placa: form.placa,
      status: form.status,
    });

    if (!error) {
      alert("Frota cadastrada!");
      router.push("/frotas");
    } else {
      alert("Erro: " + error.message);
    }
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Nova Frota</h1>

      <div className="flex flex-col gap-4 max-w-md">
        <input
          placeholder="Nome da Frota"
          className="border p-2 rounded"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
        />

        <input
          placeholder="Placa"
          className="border p-2 rounded"
          value={form.placa}
          onChange={(e) => setForm({ ...form, placa: e.target.value })}
        />

        <select
          className="border p-2 rounded"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option value="ativo">Ativo</option>
          <option value="inativo">Inativo</option>
          <option value="manutenção">Manutenção</option>
        </select>

        <button
          onClick={salvar}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Salvar
        </button>
      </div>
    </main>
  );
}
