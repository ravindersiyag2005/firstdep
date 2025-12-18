import React , {Component} from 'react'

export default class ControlledComponent extends Component{

    constructor(){
        super();
        this.state = {
            firstname : '',
            lastname : '' ,
            review : ''
        }
    }

    // changeFirstname = (e) =>{
    //     this.setState({
    //         firstname:e.target.value
    //     })

    // }

    // changeLastname = (e) =>{
    //     this.setState({
    //         lastname:e.target.value
    //     })
    // }

    // changeReview = (e) =>{
    //     this.setState({
    //         review:e.target.value
    //     })
    // }


    changeElements = (e) =>{
        const {name,value} = e.target;
        this.setState({
            [name]:value
        })
    }



    submitForm = (e) =>{
        alert(`Welcome ${this.state.firstname} ${this.state.lastname} and 
            Review : ${this.state.review}`)

        e.preventDefault();
    }


    render(){
        return (
            <div>
                <form onSubmit={this.submitForm}>
                {/* onchange=this.firstname */}
                    First Name:<input type='teXt' value={this.state.firstname} onChange={this.changeElements} name="firstname"/><br/>
                    Lat Name:<input type='teXt' value={this.state.laststname} onChange={this.changeElements} name="lastname"/><br/>
                    Review:<textarea type='teXt' value={this.state.review} onChange={this.changeElements} name="review"></textarea><br/>
                    <button>Submit Form</button>
                    <h2>First name: {this.state.firstname}</h2>
                    <h2>Lat name: {this.state.lastname}</h2>
                    <h2>Review: {this.state.review}</h2>
                </form>
            </div>
        )
    }
}

