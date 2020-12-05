import React, { Fragment } from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'
import Layout from '../../components/layout/layout'


const Titre =({data}) =>{
   //
    const router = useRouter()
   //  console.log(router.query)
 
    return(

      <Fragment>
            
         {  //si la data existe alors affiche moi ( si tu mets pas ça ton depoloiment ne marchera pas)
            
            data  && (

               <Layout namePage={data.nom}>
                  {JSON.stringify(data)}
               </Layout>

            )
         }
      </Fragment>
   )
}

 export const getServerSideProps = async (context)=> {


    const { code } = context.params;
 

  
   
    const {data} = await axios.get( `${process.env.API_GEO}/regions/${code}`) 
  
     return{
  
        props: {
          data 
        }
  
      }
   } 

export default  Titre
