import Header from "./header"
import Footer from "./footer"
import Image from "./image"

function Home(){

    return(
        < div style={{display:"flex",backgroundColor:"blue",flexDirection:"column",justifyContent:"space-between"}}>
<Header/>
<Image/>
<Footer/>

</div>
    )
}


export default Home