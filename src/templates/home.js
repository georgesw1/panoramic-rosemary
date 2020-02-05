import React from 'react';

import {Layout} from '../components/index';
import Cards from '../components/Cards';

export default class Home extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <div className="container">
              <Cards {...this.props} />
            </div>
            </Layout>
        );
    }
}
