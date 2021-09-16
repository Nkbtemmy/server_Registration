import React, { Component } from 'react'

export default class preset extends Component {
    render() {
        return (
            <div>
                <h2 className="pt-5 text-secondary">Pre Sets <span className="float-right"><button><i className="fa fa-repeat" aria-hidden="true"></i></button></span></h2>     

                <input type="radio" onChange={this.handleChange} name="preset" className="btn-check " name="options" id="option4" autoComplete="off" />
                <label className="btn btn-secondary" htmlFor="option4">Radio</label>

                <input type="radio" onChange={this.handleChange} name="preset" className="btn-check " name="options" id="option4" autoComplete="off" />
                <label className="btn btn-secondary" htmlFor="option4">Radio</label>

                <input type="radio" onChange={this.handleChange} name="preset" className="btn-check " name="options" id="option4" autoComplete="off" />
                <label className="btn btn-secondary" htmlFor="option4">Radio</label>

                <input type="radio" onChange={this.handleChange} name="preset" className="btn-check " name="options" id="option4" autoComplete="off" />
                <label className="btn btn-secondary" htmlFor="option4">Radio</label>

                <input type="radio" onChange={this.handleChange} name="preset" className="btn-check " name="options" id="option4" autoComplete="off" />
                <label className="btn btn-secondary" htmlFor="option4">Radio</label>

                <input type="radio" onChange={this.handleChange} name="preset" className="btn-check " name="options" id="option4" autoComplete="off" />
                <label className="btn btn-secondary" htmlFor="option4">Radio</label>
                
            </div>
        )
    }
}
