import "./hello.css"

function Hello() {
    return(
        <div>
            
            {/* <h1 style={{color:"red"}}>HELLO</h1>       inline css */}
            {/* <h1 style={styles.container}>HELLO</h1>    internal css   */}

            <h1 className="head">NAME:VENKATA YASWANTH</h1> 
            <h2>AGE-23</h2>
            <h3>GENDER-MALE</h3>
        </div>
    
)




    
}

// //internal css
//  const styles={
//     container : {
//      backgroundColor:"blue"
       
//    }
//  }




export default Hello
