"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { Stack } from '@mui/material'

export default function Home() {
  return (
    <Stack direction='row' justifyContent='center' >
      <AppBar />
    </Stack>
  )
}
