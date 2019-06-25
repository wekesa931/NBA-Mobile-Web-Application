import React, { Component } from 'react';
import axios from 'axios';
import {URL} from '../../../config';

import SliderTemplate from './sliderTemplate'

class NewsSlider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            news: []
         }
    }
    componentWillMount (){
        axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
        .then( response => {
            this.setState({
                news: response.data
            })
        })
    }
    render() {
        return ( 
            <div>
                <SliderTemplate data={this.state.news}
                                type={this.props.type}/>
            </div>
         );
    }
}
 
export default NewsSlider;