// app/os/page.js
import React, { useEffect, useState } from 'react'

export default function OSList(){
  const [orders, setOrders] = useState([])

  useEffect(()=>{
    fetch('/api/mock/os.json').then(r=>r.json()).then(setOrders).catch(()=>setOrders([]))
  },[])

  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h1>Ordens de Serviço</h1>
        <a href="/os/new" style={{background:'#e11a24',color:'#fff',padding:'8px 12px',borderRadius:6,textDecoration:'none'}}>Nova OS</a>
      </div>

      <div style={{marginTop:16,background:'#fff',padding:16,borderRadius:8}}>
        <table style={{width:'100%'}}>
          <thead><tr><th>Nº</th><th>Veículo</th><th>Status</th><th>Data</th></tr></thead>
          <tbody>
            {orders.length===0 && <tr><td colSpan="4" style={{padding:12}}>Nenhuma OS</td></tr>}
            {orders.map(o=>(
              <tr key={o.id} style={{borderTop:'1px solid #eee'}}>
                <td style={{padding:8}}>{o.os_number}</td>
                <td style={{padding:8}}>{o.vehicle_code}</td>
                <td style={{padding:8}}>{o.status}</td>
                <td style={{padding:8}}>{o.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
