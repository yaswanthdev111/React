import React from "react";
class Car extends React.Component {

  constructor(){
    super()
     this.state={counter:0,isIncrement:true}
  }

  Increment =()=>{
    if(this.state.isIncrement){
      this.setState({counter:this.state.counter+2})
      this.setState({isIncrement:false})
    }else{
      this.setState({counter:this.state.counter-1})
      this.setState({isIncrement:true})
    }
 
  }
  render() {
    return <>
    <p> {this.state.counter}</p>
    <button onClick={this.Increment}>click</button>
    </>;
  }
}
export default Car




