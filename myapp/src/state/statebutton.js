import React,{Component} from "react"


class Button extends Component{

constructor(){

super()
this.state={isON:true};



}
Hbutton=()=>{


    this.setState({isON:!this.state.isON})
}


render(){


return( 
<div>

<button onClick={this.Hbutton}>{this.state.isON?<h1>SWitchedOFF</h1>:<h1>Switched on</h1>}</button>
<h1 onClick={this.Hbutton}>{this.state.isON?<h1>TURNEDON </h1>:<h1>TURNEDOFF</h1>}</h1>






</div>


)


}





}
export default Button