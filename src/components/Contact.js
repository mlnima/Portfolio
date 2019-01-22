import React from 'react';
import './Contact.scss'

const Contact = () => {
    return (
        <div className='Contact'>
            <h2>Contact</h2>
            <div className="infos">

                <div className="infoTitle">
                    <p>Tel :</p>
                    <p>Email :</p>
                    <p>Location :</p>
                    <p>Git :</p>
                </div>
                <div className="info">
                    <p>+49 (0) 17663888953</p>
                    <p>mmlnima@gmail.com</p>
                    <p>Prenzlauer Berg 17 , Berlin</p>
                    <a href='https://github.com/mlnima'>
                        <p>@mlnima</p>
                    </a>

                </div>

            </div>

        </div>
    );
};

export default Contact;