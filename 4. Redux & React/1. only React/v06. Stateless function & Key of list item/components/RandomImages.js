import React, { Component } from 'react'
import $ from 'jquery'
export default class RandomImages extends Component{
  constructor(props) {
    super(props)
    /* this.state contains the data and loading properties. Data is an array of images. Loading lets you know if it's loading or loaded. */
    this.state = {data:[],
        loading:"Please click the 'Random Images' button"}
    this.randomImages = this.randomImages.bind(this);
  }
  randomImages() {
    this.setState({loading: "loading..."});
    var imgurAPI = "https://api.imgur.com/3/gallery/random/random/1";
    /* This is an asynchronous function which gets data from the imgur API */
    $.getJSON(imgurAPI).done(data =>{
        this.setState({data:data.data, loading: "loaded"})
    })
  }

  /* when the Random Images button is clicked, randomImages() is invoked and it changes the loading property to "loading..." */
  render() {
    console.log('RandomImages.render()');

    return (
      <div>
        <button onClick={this.randomImages}>
            Random Images></button>
        <br/>CountStatus:
        <span style={{color:"blue"}}>
            {this.state.loading}</span>
        <p/>
        {/* ImageList is a component based on function */}
        <ImageList images={this.state.data}/>
      </div>
    )
  }
}
/* ImageList() is a stateless function because we cannot use the React state object in this component. We can only use React state object in class based component. You can use props for stateless functions. */
function ImageList(props) {
    return (
        <div>
        {props.images.map((image)=>
                <img key ={image.id}
                    src={image.link}
                    style={{height:"200px"}}/>)}
        </div>
    )
}
