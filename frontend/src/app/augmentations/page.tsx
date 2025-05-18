'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Container, Typography, Table, TableBody, TableCell,
  TableHead, TableRow, Paper, TableContainer,
  Box, FormControl, InputLabel, Select, MenuItem
} from '@mui/material'

export default function AugmentationsPage() {
  const [augmentations, setAugmentations] = useState<any[]>([])
  const [poolId, setPoolId] = useState('1')

  useEffect(() => {
    axios.get(`http://localhost:3001/api/augmentations/pool/${poolId}`)
      .then(res => setAugmentations(res.data))
  }, [poolId])

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Augmentations – Pool {poolId}</Typography>

      <Box mb={3} width="200px">
        <FormControl fullWidth>
          <InputLabel id="pool-select-label">Pool</InputLabel>
          <Select
            labelId="pool-select-label"
            value={poolId}
            label="Pool"
            onChange={e => setPoolId(e.target.value)}
          >
            {[1, 2, 3, 4, 5, 6, 13].map(pool => (
              <MenuItem key={pool} value={pool.toString()}>
                {`Pool ${pool}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell align="center">Lv1</TableCell>
              <TableCell align="center">Lv1 %</TableCell>
              <TableCell align="center">Lv2</TableCell>
              <TableCell align="center">Lv2 %</TableCell>
              <TableCell align="center">Lv3</TableCell>
              <TableCell align="center">Lv3 %</TableCell>
              <TableCell align="center">Coût</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {augmentations.map((a: any) => (
              <TableRow key={a.augmentation_id}>
                <TableCell>{a.description}</TableCell>
                <TableCell align="center">{a.lv1}</TableCell>
                <TableCell align="center">{a.lv1_percent}%</TableCell>
                <TableCell align="center">{a.lv2}</TableCell>
                <TableCell align="center">{a.lv2_percent}%</TableCell>
                <TableCell align="center">{a.lv3}</TableCell>
                <TableCell align="center">{a.lv3_percent}%</TableCell>
                <TableCell align="center">{a.cost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
