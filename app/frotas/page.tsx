"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function FrotasPage() {
  const [frotas, setFrotas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase
        .from("frotas")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) console.error(error);
      else setFrotas(data || []);

      setLoading(false);
    }

    load();
  }, []);

  if (loading) return <p className="p-6">Carregando...</p>;

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Frotas</h1>

      <a
        href="/frotas/nova"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Nova Frota
      </a>

      <div className="mt-6 space-y-4">
        {frotas.length === 0 && <p>Nenhuma frota encontrada.</p>}

        {frotas.map((frota) => (
          <div key={frota.id} className="p-4 border rounded">
            <p><strong>Nome:</strong> {frota.nome}</p>
            <p><strong>Status:</strong> {frota.status}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
