import Head from 'next/head'
import Image from 'next/image'
import Education from '../components/Education/Education'
import I_Am from '../components/I_Am/I_Am'
import MyExpereince from '../components/MyExpereince/MyExpereince'
import Navbar from '../components/Navbar/Navbar'
import Portfilio from '../components/Portfilio/Portfilio'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <div>
    
    <I_Am />
    <MyExpereince />
    <Education />
    <Portfilio />
   </div>
  )
}
