import Head from 'next/head'
import Image from 'next/image'
import I_Am from '../components/I_Am/I_Am'
import MyExpereince from '../components/MyExpereince/MyExpereince'
import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <div>
    <Navbar />
    <I_Am />
    <MyExpereince />
   </div>
  )
}
