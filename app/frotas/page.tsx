export default function FrotasPage() {
  const frotas = [
    { id: 1, codigo: "1010", status: "Ativo" },
    { id: 2, codigo: "1020", status: "Manutenção" },
    { id: 3, codigo: "1030", status: "Ativo" }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#e11a24] mb-6">Frotas</h1>

      <a
        href="/frotas/nova"
        className="inline-block bg-[#e11a24] text-white px-4 py-2 rounded mb-6 hover:opacity-90"
      >
        + Nova Frota
      </a>

      <table className="w-full bg-white shadow rounded overflow-hidden">
        <thead className="bg-gray-200 text-left">
          <tr>
            <th className="p-3">ID</th>
            <th className="p-3">Código</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {frotas.map((f) => (
            <tr key={f.id} className="border-t hover:bg-gray-50">
              <td className="p-3">{f.id}</td>
              <td className="p-3">{f.codigo}</td>
              <td className="p-3">{f.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
