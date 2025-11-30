import React, { useState } from 'react'

export default function NewFleet(){
  const [form, setForm] = useState({ code:'', plate:'', model:'' })
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    try{
      // Aqui você chamaria sua API /supabase
      // Exemplo: await fetch('/api/fleets', { method:'POST', body: JSON.stringify(form) })
      alert('Simulação: frota criada: ' + JSON.stringify(form))
      window.location.href = '/frotas'
    }catch(err){
      alert(err.message || 'Erro')
    }finally{ setLoading(false) }
  }

  return (
    <div style={{maxWidth:720}}>
      <h1>Criar Frota</h1>
      <form onSubmit={handleSubmit} style={{display:'grid',gap:12,marginTop:12}}>
        <input placeholder="Código (ex: 1010)" value={form.code} onChange={e=>setForm({...form,code:e.target.value})} className="input" />
        <input placeholder="Placa" value={form.plate} onChange={e=>setForm({...form,plate:e.target.value})} className="input" />
        <input placeholder="Modelo" value={form.model} onChange={e=>setForm({...form,model:e.target.value})} className="input" />
        <div>
          <button style={{background:'#e11a24',color:'#fff',padding:'8px 14px',borderRadius:6}} disabled={loading}>{loading?'Salvando...':'Salvar'}</button>
        </div>
      </form>
    </div>
  )
}
