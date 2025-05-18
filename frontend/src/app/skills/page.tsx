'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function SkillsPage() {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/api/skills').then(res => setSkills(res.data))
  }, [])

  return (
    <main>
      <h2>Liste des Talents</h2>
      <ul>
        {skills.map((s: any) => (
          <li key={s.id}>
            {s.name} — Coût: {s.cost}
          </li>
        ))}
      </ul>
    </main>
  )
}
