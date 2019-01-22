import React, {Component} from 'react';
import './Skills.scss'

class Skills extends Component {

    constructor(){
        super();
        this.state={
            levels:{
                javascript: 80,
                html: 85,
                css: 85,
                scss : 85,
                ReactJs : 65,
                NodeJs : 60,
                Express:60,
                BashScript:55,
                CMSWP:90,
                RestApi:55,
                MongoDb :45,
                SEO:95,
                Marketing:60,
                SystemAdministrator:40,
                Photoshop:90,
                Designing:70},

        }
    }






    render() {

        let stateKeys = Object.keys(this.state.levels);
        let stateValues = Object.values(this.state.levels);
            let skills = stateKeys.map(key=>{

                let valueBar= stateValues[stateKeys.indexOf(key)];
                let skillName = stateKeys[stateKeys.indexOf(key)];
                console.log(valueBar);
                    return(
                        <div className='skill'>
                            <p>{skillName}</p>
                            <progress max="100" value={valueBar}/>
                        </div>
                    )
            })






        return (
            <div className='Skills' ref={skills=>this.skills=skills}>
                <h2>Skills</h2>
                {skills}
            </div>
        );
    }
}

export default Skills;