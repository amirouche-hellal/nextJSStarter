import React from 'react'
import Axios from 'axios'
import Layout from '../../components/layout/layout'
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

const  Departements =({data})=> {

    const region = data.map( (dapartement ,index)=>{
        return (
          <h2 style={styles.regionName} key={index}>
            <Link href={`/departements/[code]` } as={`/departements/${dapartement.code}`} passHref>
              {dapartement.nom}
            </Link>
          </h2>
        )
      })
    return (
        <Layout namePage = "departements">
            <h1>Cette page utilise getInitialProps</h1>
            <div style={styles.textPage}>{region}</div>
        </Layout>
    )
}

Departements.getInitialProps = async(context) =>{

  const {data} = await Axios.get(`${process.env.API_GEO}/departements`)

  return {
 
          data
      
  }
}
export default Departements



// le code en bas est avec getServerSideProps , il est  fonctionnel sans erreur en cliquant sur la nav departement pour retourner a la liste 



// import React from 'react'
// import Axios from 'axios'
// import Layout from '../components/layout'
// import Link from 'next/link'



// const styles ={
//   textPage:{

//       display:"flex",
//       flexDirection:"column",
                
//   },
//   regionName:{
//     borderBottom:"1px solid black",
//     marginLeft:"2em",
//     cursor:"pointer",
//     color:"brown"
//   }
// }

// const  Departements =({data})=> {

//     const region = data.map( (dapartement ,index)=>{
//         return (
//           <h2 style={styles.regionName} key={index}>
//             <Link href={`/departements/[code]` } as={`/departements/${dapartement.code}`} passHref>
//               {dapartement.nom}
//             </Link>
//           </h2>
//         )
//       })
//     return (
//         <Layout namePage = "departements">
//             <h1>Cette page utilise getInitialProps</h1>
//             <div style={styles.textPage}>{region}</div>
//         </Layout>
//     )
// }

// export const getServerSideProps = async(context) =>{

//   const {data} = await Axios.get(`${process.env.API_GEO}/departements`)

//   return {
 
//           props:{
//             data
//           }
      
//   }
// }
// export default Departements