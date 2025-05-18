'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function ArmoursPage() {
  const [armours, setArmours] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/api/armours').then(res => setArmours(res.data))
  }, [])

  return (
    <main>
      <h2>Liste des Armures</h2>
      <ul>
        {armours.map((a: any) => (
          <li key={a.id}>
            <strong>{a.name}</strong> — Pool {a.pool_id} — Budget {a.budget}
          </li>
        ))}
      </ul>
    </main>
  )
}
