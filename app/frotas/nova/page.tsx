export default function NovaFrota() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Cadastrar Nova Frota</h1>

      <form className="mt-6 flex flex-col gap-4 max-w-lg">
        <input
          className="border p-2 rounded"
          placeholder="Nome da Frota"
        />
        <input
          className="border p-2 rounded"
          placeholder="Placa"
        />
        <input
          className="border p-2 rounded"
          placeholder="Ano"
        />

        <button className="bg-blue-600 text-white p-2 rounded">
          Salvar
        </button>
      </form>
    </main>
  );
}
