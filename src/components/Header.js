import React from 'react';
import _ from 'lodash';

export default class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav>
                    <div className="container">
                        <div className="row">
                            <div className="col s12">
                                <div className="logo">{_.get(this.props, 'pageContext.site.siteMetadata.logo')}</div>
                                <div className="right-nav">
                                    <div className="search">
                                        <input type="search" id="search" placeholder="Search..."/>
                                        <i id="icon" className="uil uil-search" />
                                    </div>
                                    <div id="switch-theme">
                                        <i id="icon" className="uil uil-sun" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="container header">
                    <div className="row">
                        <div className="col l8 s12">
                            <div className="intro">
                                <h1>{_.get(this.props, 'pageContext.frontmatter.description')}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
