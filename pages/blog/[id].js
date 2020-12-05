import React, { Fragment } from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'
import Layout from '../../components/layout/layout'


const Titre = ({data}) => {

 const router = useRouter()
 
  return (
      <Fragment>
          {  //si la data existe alors affiche moi ( si tu mets pas ça ton depoloiment ne marchera pas)
            
            data  && (

                <Layout namePage={data.title}>

                        
                  {JSON.stringify(data)}

                </Layout>

              )

          }
        
      </Fragment>
    )
}
//getStaticPath va te donner toute la loste des id 
//avec getstaticpaths je récupere l'id du post conserné afin que je puisse faire la requete getstaticprops pour récuperer les donnéees de cet article 
export const getStaticPaths = async () => {

    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_POST }/posts`
    );


  const paths = data.map(post =>(
    
        { params : { id : post.id.toString() }} //ajoute to string sinon tu aura une erreur 
      
  ))

  return { 
           paths , fallback : true   //fallback true pour que tout les post qui seront rajoutés seront dispo dans la root dynamique
         }

  //donc avec getstaticPaths on ajoute le paramettre de l'id dans le context : car context contient params 
  // car si tu utilises getStaticProps tu es obligé d'utiliser getStaticPaths (car context.params ne se rajoute pas automatiquement comme dans getServerProps)
}

export const getStaticProps = async (context)=> {

 

  const id  = context.params.id;


 
  const {data} = await axios.get( `${ process.env.NEXT_PUBLIC_API_POST }/posts/` + id) 

   return{

      props: {
        data 
      }

    }
 } 
export default  Titre
