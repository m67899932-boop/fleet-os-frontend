import React, { useState } from 'react'

function ProblemsInput({ problems, setProblems }){
  function add(){ setProblems([...problems, { description:'', sector:'mecanica', sim:false, nao:false }]) }
  function setField(i,key,val){
    const arr = problems.slice(); arr[i][key]=val; setProblems(arr)
  }
  return (
    <div>
      {problems.map((p, i)=>(
        <div key={i} style={{border:'1px solid #eee',padding:8,borderRadius:6,marginBottom:8}}>
          <input placeholder="Descrição" value={p.description} onChange={e=>setField(i,'description',e.target.value)} style={{width:'100%',padding:8}} />
          <div style={{marginTop:8,display:'flex',gap:8,alignItems:'center'}}>
            <select value={p.sector} onChange={e=>setField(i,'sector',e.target.value)}>
              <option value="mecanica">Mecânica</option>
              <option value="borracharia">Borracharia</option>
              <option value="eletrica">Elétrica</option>
              <option value="funilaria">Funilaria</option>
              <option value="outros">Outros</option>
            </select>
            <label><input type="checkbox" checked={p.sim} onChange={e=>setField(i,'sim',e.target.checked)} /> Sim</label>
            <label><input type="checkbox" checked={p.nao} onChange={e=>setField(i,'nao',e.target.checked)} /> Não</label>
          </div>
        </div>
      ))}
      <button type="button" onClick={add} style={{background:'#eee',padding:'6px 10px',borderRadius:6}}>Adicionar problema</button>
    </div>
  )
}

export default function NewOS(){
  const [vehicle, setVehicle] = useState('')
  const [date, setDate] = useState('')
  const [problems, setProblems] = useState([])
  const [saving, setSaving] = useState(false)

  async function handleSubmit(e){
    e.preventDefault()
    setSaving(true)
    try{
      // aqui chama sua API / supabase insert
      alert('Simulação: OS criada com ' + problems.length + ' problemas')
      window.location.href = '/os'
    }catch(err){ alert('Erro') }finally{ setSaving(false) }
  }

  return (
    <div style={{maxWidth:820}}>
      <h1>Nova Ordem de Serviço</h1>
      <form onSubmit={handleSubmit} style={{display:'grid',gap:12}}>
        <select value={vehicle} onChange={e=>setVehicle(e.target.value)} style={{padding:8}}>
          <option value="">Escolha veículo</option>
          <option value="1010">1010</option>
          <option value="1020">1020</option>
        </select>
        <input type="date" value={date} onChange={e=>setDate(e.target.value)} style={{padding:8}} />
        <ProblemsInput problems={problems} setProblems={setProblems} />
        <input placeholder="Peças trocadas" style={{padding:8}} />
        <div>
          <button style={{background:'#e11a24',color:'#fff',padding:'8px 12px',borderRadius:6}} disabled={saving}>{saving?'Salvando...':'Salvar OS'}</button>
        </div>
      </form>
    </div>
  )
}
