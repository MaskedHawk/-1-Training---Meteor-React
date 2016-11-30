/**
 * Created by maskedhawk on 30/11/16.
 */


// Import REACT

import React , { Component } from 'react';
import ReactDOM from 'react-dom'
import ImageList from './components/image_list';
import axios from 'axios';
// Create a component
class App extends Component {
    constructor(props){
        super(props);

        this.state = { images : [] };
    }
    componentWillMount(){
        console.log('App is about to render');
        axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
            .then(response => this.setState({ images: response.data.data }));
    }
    render() {
        console.log(this.state.images);
        return (
            <div>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

// Render this component to the screen
Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
});
