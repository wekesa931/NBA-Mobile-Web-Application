import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './HOC/Layout/Layout';
import Home from './components/Home/home';
import NewsArticles from './components/Articles/News/Post/index';

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Layout>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path="/articles/:id" exact component={NewsArticles}/>
                </Switch>
            </Layout> 
            
         );
    }
}
 
export default Routes;