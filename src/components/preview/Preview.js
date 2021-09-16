import React, { Component } from 'react'
import Profile from '../profile/Profile'
import Dropzone from '../dropzone/Dropzone'
import Server from '../server/Server'
import Theme from '../theme/Theme'

export default class Preview extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2 className="pt-5 text-secondary"> Preview <span className="float-right"><button><i className="fa fa-repeat" aria-hidden="true"></i></button></span></h2> 
                    <div className="preview">
                        <Profile />
                        <Server />
                        <Dropzone />
                        <Theme />
                    </div>
                    <input className="btn btn-secondary float-end mt-3" type="submit" value="Submit" />
                </div> 
            </div>
        )
    }
}
