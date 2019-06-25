import React, { Component } from 'react';
import axios from 'axios';
import {URL} from '../../../../config';
import '../../articles.css';
import Header from './header';

class NewsArticles extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            article:[],
            team:[]
        }
    }
    componentWillMount(){
        axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
        .then( response => {
            let article = response.data[0]

            axios.get(`${URL}/teams?id=${article.team}`)
            .then( response => {
                this.setState({
                    article,
                    team:response.data
                })
            })
        })
    }
    render() { 
        const article = this.state.article;
        const team = this.state.team;
        return ( 
            <div className="article_wrapper">
               <Header
                teamData={team[0]}
                date={article.date}
                author={article.author}
               />
               <div className="articlebody">
                <h1>{article.title}</h1>
                <div className="articleimage"
                    style={{
                        background:`url('/images/articles/${article.image}')`
                    }}
                ></div>
                <div className="articleText">
                    {article.body}
                </div>
               </div>
            </div>
         );
    }
}
 
export default NewsArticles;