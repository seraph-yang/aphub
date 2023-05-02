import Head from 'next/head'
import { Flex } from '@mantine/core'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Navbar from './navbar'
import Sidebar from './sidebar'
import Subheader from './profilepage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <Navbar />
        
      </div>
      <Flex>
        <Sidebar />
        <Subheader />
      </Flex>
      
      
    </>
  )
}
