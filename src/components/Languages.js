import React, {Component} from 'react';
import './Languages.scss'

class Languages extends Component {
    render() {
        return (
            <div className='Languages'>
                <h2>Languages</h2>
                <h4>Persian : Native</h4>
                <h4>English : C1</h4>
                <h4>German : B1</h4>
                <h4>Bulgarian :B1</h4>
            </div>
        );
    }
}

export default Languages;