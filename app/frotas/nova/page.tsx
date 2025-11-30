export default function NovaFrotaPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#e11a24] mb-6">
        Cadastrar Nova Frota
      </h1>

      <form className="bg-white shadow rounded p-6 w-full max-w-lg">
        <label className="block mb-4">
          <span className="text-gray-700">Código da Frota</span>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded mt-1"
            placeholder="Ex: 1010"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Status</span>
          <select className="w-full border px-3 py-2 rounded mt-1">
            <option>Ativo</option>
            <option>Manutenção</option>
            <option>Inativo</option>
          </select>
        </label>

        <button className="bg-[#e11a24] text-white px-4 py-2 rounded hover:opacity-90">
          Salvar Frota
        </button>
      </form>
    </div>
  );
}
