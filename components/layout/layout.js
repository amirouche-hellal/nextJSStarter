import React, { Fragment } from 'react'
import Header from '../header/index'
// importer mon head.js
import MyHead  from '../head/head'



const Layout =({children , namePage })=> {
  
    
     
    return (
      
        <Fragment>

             <MyHead namePage={namePage}/>

             <Header/>

             {children}
             
        </Fragment>
    )
}

export default  Layout
