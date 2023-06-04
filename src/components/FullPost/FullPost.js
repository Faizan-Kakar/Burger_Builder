import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedData : null
    }

    componentDidUpdate(){
       if(this.props.id)
       {

           if(!this.state.loadedData||(this.state.loadedData.id && this.state.loadedData.id !== this.props.id))
           {
               axios.get("/posts/"+this.props.id)
               .then((response)=>{
                   this.setState({loadedData : response.data})
                })
            }
        }
    }

    //Deleting the http request which is send
    deleteHttpRequest=()=>{
        axios.delete("/posts/"+this.props.id)
    }


    render () {
        let post = <p style={{textAlign : "center"}}>Please select a Post!</p>;
        if(this.props.id)
        {
           post = <p style={{textAlign : "center"}}>Loading....</p>;
        }
        if(this.state.loadedData && this.props.id)
        {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedData.title}</h1>
                    <p>{this.state.loadedData.body}</p>
                    <div className="Edit">
                        <button className="Delete"
                         onClick={this.props.clicked}>Delete</button>
                        <button className="Delete"
                         onClick={this.deleteHttpRequest}>Delete Http requests</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;