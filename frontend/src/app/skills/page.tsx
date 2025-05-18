'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Container, Typography, List, ListItem, ListItemText,
  ToggleButton, ToggleButtonGroup, Box
} from '@mui/material'

export default function SkillsPage() {
  const [skills, setSkills] = useState<any[]>([])
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  useEffect(() => {
    axios.get('http://localhost:3001/api/skills').then(res => setSkills(res.data))
  }, [])

  // Trie les skills par coût
  const sortedSkills = [...skills].sort((a, b) => {
    return sortOrder === 'asc' ? a.cost - b.cost : b.cost - a.cost
  })

  const handleSortChange = (
    event: React.MouseEvent<HTMLElement>,
    newOrder: 'asc' | 'desc' | null
  ) => {
    if (newOrder !== null) setSortOrder(newOrder)
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Talents disponibles</Typography>

      <Box mb={2}>
        <ToggleButtonGroup
          value={sortOrder}
          exclusive
          onChange={handleSortChange}
          aria-label="Tri du coût"
        >
          <ToggleButton value="asc" aria-label="Croissant">
            Coût croissant
          </ToggleButton>
          <ToggleButton value="desc" aria-label="Décroissant">
            Coût décroissant
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <List>
        {sortedSkills.map((s: any) => (
          <ListItem key={s.id}>
            <ListItemText primary={s.name} secondary={`Coût : ${s.cost}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  )
}
