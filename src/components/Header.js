import React, {Component} from 'react';
import MyImage from '../NimaMalayeri.jpg'
import './Header.scss'
class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <div className="nameAndTitle">
                    <h1>Nima Malayeri</h1>
                    <hr/>
                    <h2>Full Stack Junior Web Developer</h2>
                </div>
                <div className="imageDiv">
                  <img src={MyImage}/>
                </div>
            </div>
        );
    }
}

export default Header;