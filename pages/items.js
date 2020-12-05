import React from 'react'
import Layout from '../components/layout/layout'

const Items = () => {

    const styles ={
        textPage:{
      
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",height:"100vh"
                      
        }
      }
    return (
        <Layout namePage = "items">
        <button className="mdc-button foo-button">
            <div className="mdc-button__ripple" />
            <span className="mdc-button__label">Button</span>
        </button>

        </Layout>
    )
}

export default Items