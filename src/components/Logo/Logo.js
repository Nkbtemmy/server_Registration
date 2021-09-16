import React, { Component } from 'react'
import Dropzone from '../dropzone/Dropzone'

export default class Logo extends Component {
    render() {
        return (
            <div>
            <h2 className="pt-5 text-secondary">Upload Logo <span className="float-right"><button><i className="fa fa-repeat" aria-hidden="true"></i></button></span></h2>  
            <div>
                < Dropzone className="w-100" />
            </div>
        </div>
        )
    }
}
