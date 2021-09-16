import React, { Component } from 'react'
import './style.css'

export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vippng.com%2Fpng%2Fdetail%2F416-4161690_empty-profile-picture-blank-avatar-image-circle.png&f=1&nofb=1',
            profile: '',
        };
            this.baseState = {
                imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vippng.com%2Fpng%2Fdetail%2F416-4161690_empty-profile-picture-blank-avatar-image-circle.png&f=1&nofb=1',
                profile:''
            }
        }
    componentDidMount(){
        setInterval(()=>{
            const profileLink = localStorage.getItem('profileUrl');
            this.setState({imageUrl:profileLink})
        },1000)
    }
    
    reset = () => {
        this.setState(this.baseState)
    }
    handleChange = e => {
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();
      
        reader.addEventListener("load", function () {
         localStorage.setItem('profileUrl',reader.result)
        }, false);
        if (file) {
          reader.readAsDataURL(file);
        }
      }


    upload = () =>{
        document.getElementById("myfile").click();
    }
    render() {
        return (
            <div>
                <h2 className=" text-secondary">Create Profile</h2>
                <div className="flex-container">
                    <div className="column">
                    <form>
                        <img src={this.state.imageUrl} name="imageUrl" className="rounded-circle" alt="profile_picture" onClick={this.upload} />
                        <input type="file" id="myfile" onChange={this.handleChange} name="profile" className="d-none"  accept="image/*"/>
                    </form>
                    </div>
                    <div className="column bg-alt">
                        <input type="text" placeholder="Username" onChange={this.handleChange} name="username"  className=" mt-5 p-2 form-control"/>
                    </div>
                </div>
            </div>
        )
    }
}
