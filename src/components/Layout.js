import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {safePrefix} from '../utils';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initialScale=1.0" />
                    <meta name="google" content="notranslate" />
                    <meta name="theme-color" content="#08132E" />
                    <title>{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
                    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/latest/normalize.css"/>
                    <link rel="stylesheet" href="https://rsms.me/inter/inter.css?v=3.7"/>
                    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v1.0.0/css/unicons.css"/>
                    <link rel="stylesheet" href={safePrefix('assets/css/main.css')}/>
                </Helmet>
                <Header {...this.props} />
                {this.props.children}
                <Footer {...this.props} />
            </React.Fragment>
        );
    }
}
