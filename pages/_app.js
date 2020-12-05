
import '../components/globalStyle/globale.css'
import App from 'next/app'

const Myapp  = ({Component , pageProps})=>{

  return(
      <Component {...pageProps} />
  )

}

Myapp.getInitialProps = async(appContext) =>{
    const appProps = await App.origGetInitialProps(appContext)

    return(
      appProps
    )
}
export default Myapp ;


 /*si tu veux pas utiliser getinitial props tu vas juste ecrire ce code au lieu du code en haut sans importer APP*/


// const Myapp  = ({Component , pageProps})=>{

//   return(
//       <Component {...pageProps} />
//   )

// }


// export default Myapp ;