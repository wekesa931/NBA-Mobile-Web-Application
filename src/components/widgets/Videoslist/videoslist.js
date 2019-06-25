import React, { Component } from 'react';
import axios from 'axios';
import './videoslist.css';
import {URL} from '../../../config';
import Button from '../buttons/buttons';
import VideosTemplate from './videoslisttemplate';

class VideosList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            teams:[],
            videos: [],
            start:this.props.start,
            end:this.props.start + this.props.amount,
            amount:this.props.amount
        }
    }
    componentWillMount(){
        this.request(this.state.start,this.state.end)
    }
    renderTitle = () => (
        this.props.title ? 
            <h3><strong>NBA</strong></h3>
        : null
    )
    request = (start,end) => {
        if(this.state.teams.length < 1){
            axios.get(`${URL}/teams`)
            .then(response => {
                this.setState({
                    teams:response.data
                })
            })
        }
        axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
        .then(response => {
            this.setState({
                videos:[...this.state.videos,...response.data],
                start,
                end
            })
        })
    }
    rendervideos = () => {
        let template = null;
        switch(this.props.type){
            case('card'):
                template = <VideosTemplate
                                data={this.state.videos}
                                teams={this.state.teams}
                            />
                break;
            default:
                template = null
        }
        return template;
    }
    loadMore = () => {
        console.log('yeah');
        let end = this.state.end + this.state.amount
        this.request(this.state.end,end)
    }
    renderButton = () => (
        this.props.loadmore ?
        <Button type="loadmore"
                cta="Load More Videos"
                loadMore={()=> this.loadMore()}/>
        :
        <Button type="linkTo"
                cta="More Videos"
                linkTo="/videos"/>
    )
    render() { 
        return ( 
            <div className="videolist_wrapper">
                {this.renderTitle()}
                {this.rendervideos()}
                {this.renderButton()}
            </div>
         );
    }
}
 
export default VideosList;
