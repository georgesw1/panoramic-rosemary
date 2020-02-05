import React from 'react';
import _ from 'lodash';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <p>© 2019 - {_.get(this.props, 'pageContext.site.siteMetadata.title')}</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
