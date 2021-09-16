import React, { Component } from 'react'

export default class Theme extends Component {
    constructor(props){
        super(props);
        this.state = {
            themes: [],
            color:''
        };
            this.baseState = { themes: [], color:'' }
    }
 
    addThemes = () => {
         
            let { themes, color } = this.state;
            themes = themes.concat({color});
            this.setState({ themes });
    };

    reset = () => {
        this.setState(this.baseState)
    }
    handleChange = e => {
        this.setState({ color: e.target.value });
    }
    render() {
        return (
            <div>
                <h2 className="pt-5 text-secondary">Themes <span className="float-right"><button  onClick={this.reset}><i className="fa fa-repeat" aria-hidden="true"></i></button></span></h2>  
                <form action="javascript:" onSubmit={this.addThemes} className="d-flex">
                    <input type="color" onChange={this.handleChange} value={this.state.color} name="color" className="form-control form-control-color w-75" id="ColorInput" title="Choose your color" />
                    <button type="submit" className="w-25">Add</button>
                </form>   
                <div className="pt-3">
                    <form action ="javascripty:" className="text-center">
                        { 
                            this.state.themes.map( todo => (
                                <React.Fragment Key={todo.id}>
                                    <input type="radio" value={todo.color} onChange={this.handleChange} value={this.state.color} name="themes" className="btn-check " name="options" id="option4" /> 
                                    <label className="btn" style={{backgroundColor: `${todo.color}`,}} htmlFor="option2">Radio</label>
                                </React.Fragment>
                               
                            ))
                        } 
                        
                    </form>
                </div>
            </div>
        )
    }
}
