"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function NovaFrotaPage() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [status, setStatus] = useState("ativo");
  const [loading, setLoading] = useState(false);

  async function salvar(e: any) {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("frotas").insert({ nome, status });

    setLoading(false);

    if (!error) router.push("/frotas");
    else alert("Erro ao salvar: " + error.message);
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Nova Frota</h1>

      <form className="space-y-4" onSubmit={salvar}>
        <div>
          <label className="block mb-1">Nome da Frota</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="border px-3 py-2 w-full rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Status</label>
          <select
            className="border px-3 py-2 w-full rounded"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          {loading ? "Salvando..." : "Salvar"}
        </button>
      </form>
    </main>
  );
}
