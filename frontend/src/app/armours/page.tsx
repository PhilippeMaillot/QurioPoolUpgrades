'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Container, Typography, Grid, Card, CardContent,
  TextField, MenuItem, Select, InputLabel, FormControl, Box
} from '@mui/material'

export default function ArmoursPage() {
  const [armours, setArmours] = useState<any[]>([])
  const [search, setSearch] = useState('')
  const [poolFilter, setPoolFilter] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/api/armours').then(res => setArmours(res.data))
  }, [])

  const filteredArmours = armours.filter(a =>
    a.name.toLowerCase().includes(search.toLowerCase()) &&
    (poolFilter === '' || a.pool_id === parseInt(poolFilter))
  )

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Liste des Armures</Typography>

      <Box display="flex" gap={2} flexWrap="wrap" mb={3}>
        <TextField
          label="Recherche par nom"
          variant="outlined"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="pool-select-label">Pool</InputLabel>
          <Select
            labelId="pool-select-label"
            value={poolFilter}
            label="Pool"
            onChange={e => setPoolFilter(e.target.value)}
          >
            <MenuItem value="">Tous</MenuItem>
            {[...new Set(armours.map(a => a.pool_id))].sort((a, b) => a - b).map(pool => (
              <MenuItem key={pool} value={pool}>{`Pool ${pool}`}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={2}>
        {filteredArmours.map((a: any) => (
          <Grid key={a.id}>
            <Card sx={{ height: 150, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>{a.name}</Typography>
                <Typography variant="body2">Pool : {a.pool_id}</Typography>
                <Typography variant="body2">Budget : {a.budget}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
