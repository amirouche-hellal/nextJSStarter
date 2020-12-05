import React, { Fragment } from 'react'
import axios from 'axios'
import Layout from '../../components/layout/layout'


const Titre =({data}) =>{

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





export const getStaticPaths = async () => {

  

 
    const { data } = await axios.get(`${process.env.API_GEO}/departements`
    );


  const paths = data.map(departement =>(
    
        { params : { code : departement.code.toString() }} //ajoute to string sinon tu aura une erreur 
      
  ))

  return { 
           paths , fallback : true   //fallback true pour que tout les post qui seront rajoutés seront dispo dans la root dynamique
         }

  //donc avec getstaticPaths on ajoute le paramettre de l'id dans le context : car context contient params 
  // car si tu utilises getStaticProps tu es obligé d'utiliser getStaticPaths (car context.params ne se rajoute pas automatiquement comme dans getServerProps)
}



export const getStaticProps = async (context)=> {

 
    const code = context.params.code;
  
  
  
  
   
    const {data} = await axios.get( `${process.env.API_GEO}/departements/${code}` ) 
  
     return{
  
        props: {
          data 
        }
  
      }
   } 
export default  Titre

