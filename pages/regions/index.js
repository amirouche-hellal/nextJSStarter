

import React, { Fragment } from 'react'
import Layout from '../../components/layout/layout'
import {useRouter} from 'next/router'
import axios from "axios"
import Link from 'next/link'


const styles ={
  textPage:{

      display:"flex",
      flexDirection:"column",
                
  },
  regionName:{
    borderBottom:"1px solid black",
    marginLeft:"2em",
    cursor:"pointer",
    color:"brown"
  }
}



const  Home =({data})=> {

  const router = useRouter()

  const region = data.map( (el ,index)=>{
    return (
      <h2 style={styles.regionName} key={index}>
        <Link href={`/regions/[code]` } as={`/regions/${el.code}`} passHref>
          {el.nom}
        </Link>
      </h2>
    )
  })
  
  return (
    
      <Layout  namePage = "regions">
        <h1>Cette page utilise getServerSideProps</h1>

        <div style={styles.textPage}>{region}</div>
      </Layout>

  )
}

 export async function getServerSideProps(context){

 

  const options ={
    method : "GET",
    url: process.env.API_GEO +"/regions",
  }

  const {data} = await axios.request(options)
  // const {data} = await axios.get(options.url)

   return{

      props: {
        data :data
      }

    }
 } 
export default Home