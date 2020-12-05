import React ,{Fragment} from 'react'
import Layout from '../components/layout/layout'
import Link from 'next/link'



const  NameLink = ({nom})=>(

  <Fragment>

    <li style={{textAlign:"center"}}>
        <Link href={`/profile?titre=${nom}` } passHref>{nom}</Link>
    </li>

    <li>
    <Link href={`/profile/${nom}` } passHref>{nom}</Link>
    </li>

  </Fragment>

   ) 

const  Profile=()=> {

    const styles ={
        textPage:{
      
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column"
                      
        }
      }
  return (
    <Layout namePage = "profile">
      <div style={styles.textPage}>Profile</div>
      <NameLink nom="moi"/>
    </Layout>
  )
}

export default Profile