import React, {Component} from "react"
class Form extends Component {


constructor(){


    super()

    this.state={fname:"",sname:"",fullname:""}
}


handleChange=(event)=>{

const {name,value}=event.target

this.setState({[name]:value});
// this.setState({fname:event.target.value}) //only one box lo submit means value printed

}


    handleSubmit=(event)=>{
event.preventDefault();

this.setState({fullname:this.state.fname+this.state.sname})
    }


render(){



    return(

<div>
    <form onSubmit={this.handleSubmit}>

<input type="text" name="fname" onChange={this.handleChange}/>
<input type="text" name="sname" onChange={this.handleChange}/>
<input type="submit"/>

</form>

<p>{this.state.fullname}</p>
</div>



    )
}


}

export default Form;