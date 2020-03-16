import React, { Component } from 'react'
import Form from './Form'
import DisplayData from './DisplayData'

export default class ParentComponent extends Component {
    state = {
        firstName: "",
        lastName: ""
    }

    // handleFirstNameChange = (e) => {
    //     this.setState({
    //         firstName: e.target.value
    //     })
    // }

    // handleLastNameChange = (e) => {
    //     this.setState({
    //         lastName: e.target.value
    //     })
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Form 
                    formData={this.state}
                    // handleFirstNameChange={this.handleFirstNameChange}
                    // handleLastNameChange={this.handleLastNameChange}
                    handleChange={this.handleChange}
                />
                <DisplayData formData={this.state} />
            </div>
        )
    }
}