import React from 'react';
import _ from 'lodash';

import {Link} from '../utils';

export default class Cards extends React.Component {
    render() {
        return (
            _.get(this.props, 'pageContext.site.data.items.item') && 
            <div className="row">
                <ul className="cards" id="searchContent">
                    {_.map(_.get(this.props, 'pageContext.site.data.items.item'), (item, item_idx) => (
                    <li key={item_idx} className="col s12 m6">
                        <div className="card">
                            <div className="card__img">
                                <div className="ishadow">
                                    <img data-blur='20' data-hover='true' src={_.get(item, 'image')} alt/>
                                </div>
                            </div>
                            <div className="card__content">
                                <div className="card__title">{_.get(item, 'title')}</div>
                                <div className="card__description">{_.get(item, 'description')}</div>
                                <Link to={_.get(item, 'linkUrl')} className="card__btn" target="_blank">{_.get(item, 'link')}</Link>
                            </div>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
            
        );
    }
}
