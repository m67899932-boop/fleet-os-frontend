import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function FrotasPage() {
  const { data: frotas } = await supabase
    .from("frotas")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Frotas</h1>

      <a
        href="/frotas/nova"
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Nova Frota
      </a>

      <div className="mt-6 flex flex-col gap-4">
        {frotas?.map((f) => (
          <a
            key={f.id}
            href={`/frotas/${f.id}`}
            className="border p-4 rounded hover:bg-gray-100"
          >
            <h2 className="text-xl font-bold">{f.nome}</h2>
            <p><strong>Placa:</strong> {f.placa}</p>
            <p><strong>Status:</strong> {f.status}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
