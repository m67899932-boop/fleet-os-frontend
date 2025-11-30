// app/fleets/page.js
import React, { useEffect, useState } from 'react'

export default function FleetsPage(){
  const [fleets, setFleets] = useState([])

  useEffect(() => {
    // Fetch via Supabase will be wired later; for now try to render static or call your API
    fetch('/api/mock/fleets.json').then(r=>r.json()).then(setFleets).catch(()=>setFleets([]))
  }, [])

  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h1>Frotas</h1>
        <a href="/frotas/new" style={{background:'#e11a24',color:'#fff',padding:'8px 12px',borderRadius:6,textDecoration:'none'}}>Nova Frota</a>
      </div>

      <div style={{marginTop:16,background:'#fff',padding:16,borderRadius:8}}>
        <table style={{width:'100%',borderCollapse:'collapse'}}>
          <thead>
            <tr>
              <th style={{textAlign:'left',padding:8}}>Código</th>
              <th style={{textAlign:'left',padding:8}}>Placa</th>
              <th style={{textAlign:'left',padding:8}}>Modelo</th>
              <th style={{textAlign:'left',padding:8}}>Status</th>
            </tr>
          </thead>
          <tbody>
            {fleets.length === 0 && (
              <tr><td colSpan="4" style={{padding:12}}>Nenhuma frota encontrada.</td></tr>
            )}
            {fleets.map(f => (
              <tr key={f.id} style={{borderTop:'1px solid #eee'}}>
                <td style={{padding:8}}>{f.code}</td>
                <td style={{padding:8}}>{f.plate}</td>
                <td style={{padding:8}}>{f.model}</td>
                <td style={{padding:8}}>{f.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
