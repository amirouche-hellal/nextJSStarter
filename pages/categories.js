import React from 'react'
import Layout from '../components/layout/layout'

const Categories = () => {

    const styles ={
        textPage:{
      
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",height:"100vh"
                      
        }
      }
    return (
        <Layout namePage = "categories">
           <div style={styles.textPage} >
               Categories
           </div>
        </Layout>
    )
}

export default Categories