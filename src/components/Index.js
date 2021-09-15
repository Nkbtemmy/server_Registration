import React, { Component } from 'react'
import './style.css'

export default class Index extends Component {
    render() {
        return (
            <div className="mx-5 px-5 ">

                <div>
                    <h2 className=" text-secondary">Create Profile</h2>
                    <div class="flex-container">
                        <div class="column">
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fimg_avatar.png&f=1&nofb=1" 
                                        className="rounded-circle" alt="profile_picture" />
                        </div>
                        <div class="column bg-alt">
                            <input type="text" placeholder="Username"  className=" mt-5 p-2 form-control"/>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="pt-5 text-secondary">Create Server <span className="float-right"><button><i class="fa fa-repeat" aria-hidden="true"></i></button></span></h2>
                    <input type="text" placeholder="Type in Server Name"  className=" mt-2 p-2  form-control"/>
                </div>

                <div>
                    <h2 className="pt-5 text-secondary">Upload Logo <span className="float-right"><button><i class="fa fa-repeat" aria-hidden="true"></i></button></span></h2>  
                    <div className="dropContainer position-relative" ondrop="drop(event)" ondragover="allowDrop(event)">
                        <p className="position-absolute top-50 start-50 translate-middle"> Drop file </p>
                    </div>
                </div>

                <div>
                    <h2 className="pt-5 text-secondary">Pre Sets <span className="float-right"><button><i class="fa fa-repeat" aria-hidden="true"></i></button></span></h2>     
                    <div>
 
                        <input type="radio" class="btn-check " name="options" id="option4" autocomplete="off" />
                        <label class="btn btn-secondary" for="option4">Radio</label>

                        <input type="radio" class="btn-check " name="options" id="option4" autocomplete="off" />
                        <label class="btn btn-secondary" for="option4">Radio</label>

                        <input type="radio" class="btn-check " name="options" id="option4" autocomplete="off" />
                        <label class="btn btn-secondary" for="option4">Radio</label>

                        <input type="radio" class="btn-check " name="options" id="option4" autocomplete="off" />
                        <label class="btn btn-secondary" for="option4">Radio</label>

                        <input type="radio" class="btn-check " name="options" id="option4" autocomplete="off" />
                        <label class="btn btn-secondary" for="option4">Radio</label>

                        <input type="radio" class="btn-check " name="options" id="option4" autocomplete="off" />
                        <label class="btn btn-secondary" for="option4">Radio</label>
                    </div>

                    <div>
                        <h2 className="pt-5 text-secondary">Themes <span className="float-right"><button><i class="fa fa-repeat" aria-hidden="true"></i></button></span></h2>     
                        <input type="color" class="form-control form-control-color w-100" id="ColorInput" title="Choose your color" />
                        <div className="pt-3">

                            <input type="radio" class="btn-check " name="options" id="option4" autocomplete="off" />
                            <label class="btn btn-secondary" for="option4">Radio</label>

                            <input type="radio" class="btn-check " name="options" id="option4" autocomplete="off" />
                            <label class="btn btn-secondary" for="option4">Radio</label>
                        
                            <input type="radio" class="btn-check " name="options" id="option4" autocomplete="off" />
                            <label class="btn btn-secondary" for="option4">Radio</label>

                            <input type="radio" class="btn-check " name="options" id="option4" autocomplete="off" />
                            <label class="btn btn-secondary" for="option4">Radio</label>

                            <input type="radio" class="btn-check " name="options" id="option4" autocomplete="off" />
                            <label class="btn btn-secondary" for="option4">Radio</label>

                            <input type="radio" class="btn-check " name="options" id="option4" autocomplete="off" />
                            <label class="btn btn-secondary" for="option4">Radio</label>
        
                        </div>

                        <div className="stlyeContainer">
                            <h2 className="pt-5 text-secondary"> Styles <span className="float-right"><button><i class="fa fa-repeat" aria-hidden="true"></i></button></span></h2> 
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
                            <h2 className="pt-5 text-secondary"> Preview <span className="float-right"><button><i class="fa fa-repeat" aria-hidden="true"></i></button></span></h2> 
                            <div className="preview">
                            </div>
                            <input class="btn btn-secondary float-end mt-3" type="submit" value="Submit"></input>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}
