import React, { Component } from 'react'
import Profile from './profile/Profile'
import Dropzone from './dropzone/Dropzone'
import Server from './server/Server'
import Theme from './theme/Theme'
import Preview from './preview/Preview'
import './style.css'

export default class Index extends Component {
    
    upload = () =>{
        document.getElementById("myfile").click();
    }
    render() {
        return (
            <div className="mx-5 px-5 ">
                    <Profile />
                    <Server />
                    <Dropzone />
                    <Theme />
                    <Preview />

{/* 
                <div>
                    <h2 className=" text-secondary">Create Profile</h2>
                    <div className="flex-container">
                        <div className="column">
                           <form>
                           <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vippng.com%2Fpng%2Fdetail%2F416-4161690_empty-profile-picture-blank-avatar-image-circle.png&f=1&nofb=1" 
                                        className="rounded-circle" alt="profile_picture" onClick={this.upload} />
                              <input type="file" id="myfile" onChange={this.handleChange} name="profile" className="d-none"  accept="image/*"/>
                           </form>
                        </div>
                        <div className="column bg-alt">
                            <input type="text" placeholder="Username" onChange={this.handleChange} name="username"  className=" mt-5 p-2 form-control"/>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="pt-5 text-secondary">Create Server <span className="float-right"><button><i className="fa fa-repeat" aria-hidden="true"></i></button></span></h2>
                    <input type="text" placeholder="Type in Server Name" onChange={this.handleChange} name="serverName"  className=" mt-2 p-2  form-control"/>
                </div>

                <div>
                    <h2 className="pt-5 text-secondary">Upload Logo <span className="float-right"><button><i className="fa fa-repeat" aria-hidden="true"></i></button></span></h2>  
                    <div>
                        < Dropzone className="w-100" />
                    </div>
                </div>

                <div>
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

                    <div>
                        <h2 className="pt-5 text-secondary">Themes <span className="float-right"><button><i className="fa fa-repeat" aria-hidden="true"></i></button></span></h2>     
                        <input type="color" onChange={this.handleChange} name="theme" className="form-control form-control-color w-100" id="ColorInput" title="Choose your color" />
                        <div className="pt-3">
                            <input type="radio" onChange={this.handleChange} name="themes" className="btn-check " name="options" id="option4" autoComplete="on" />
                            <label className="btn btn-secondary" htmlFor="option1">Radio</label>

                            <input type="radio" onChange={this.handleChange} name="themes" className="btn-check " name="options" id="option4" autoComplete="off" />
                            <label className="btn btn-secondary" htmlFor="option2">Radio</label>
                        
                            <input type="radio" onChange={this.handleChange} name="themes" className="btn-check " name="options" id="option4" autoComplete="off" />
                            <label className="btn btn-secondary" htmlFor="option3">Radio</label>

                            <input type="radio" onChange={this.handleChange} name="themes" className="btn-check " name="options" id="option4" autoComplete="off" />
                            <label className="btn btn-secondary" htmlFor="option4">Radio</label>

                            <input type="radio" onChange={this.handleChange} name="themes" className="btn-check " name="options" id="option4" autoComplete="off" />
                            <label className="btn btn-secondary" htmlFor="option5">Radio</label>

                            <input type="radio" onChange={this.handleChange} name="themes" className="btn-check " name="options" id="option4" autoComplete="off" />
                            <label className="btn btn-secondary" htmlFor="option6">Radio</label>
        
                        </div>

                        <div className="stlyeContainer">
                            <h2 className="pt-5 text-secondary"> Styles <span className="float-right"><button><i className="fa fa-repeat" aria-hidden="true"></i></button></span></h2> 
                            <div>
                                <input type="text" placeholder="style"  className=" mt-5 p-2 form-control"/>
                                <input type="text" placeholder="style"  className=" mt-5 p-2 form-control"/>
                                <input type="text" placeholder="style"  className=" mt-5 p-2 form-control"/>
                                <input type="text" placeholder="style"  className=" mt-5 p-2 form-control"/>
                                <input type="text" placeholder="style"  className=" mt-5 p-2 form-control"/>
                                <input type="text" placeholder="style"  className=" mt-5 p-2 form-control"/>
                            </div>
                        </div>
                       <div>
                            <h2 className="pt-5 text-secondary"> Preview <span className="float-right"><button><i className="fa fa-repeat" aria-hidden="true"></i></button></span></h2> 
                            <div className="preview">
                            </div>
                            <input className="btn btn-secondary float-end mt-3" type="submit" value="Submit"></input>
                       </div>
                    </div>
                </div>
             */}
            </div>
        )
    }
}
