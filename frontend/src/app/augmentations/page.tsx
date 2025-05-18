'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function AugmentationsPage() {
  const [augmentations, setAugmentations] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/api/augmentations/pool/1').then(res => setAugmentations(res.data))
  }, [])

  return (
    <main>
      <h2>Augmentations du Pool 1</h2>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Lv1</th>
            <th>%</th>
            <th>Coût</th>
          </tr>
        </thead>
        <tbody>
          {augmentations.map((a: any) => (
            <tr key={a.augmentation_id}>
              <td>{a.description}</td>
              <td>{a.lv1}</td>
              <td>{a.lv1_percent}%</td>
              <td>{a.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
