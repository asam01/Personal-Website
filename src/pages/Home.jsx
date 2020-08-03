import React from 'react';
import Bar from '../components/Bar';

import * as styles from '../css/HomeStyle';

function Home () {
    return (
        <div>
            <Bar/>
            <title>Aneesha Sampath</title>
            <body style={styles.bodyStyle}>
                <div>
                   <h1 style={styles.headerStyle}>Aneesha Sampath</h1>

                    <p style={styles.textStyle}>
                        Hi there! I am Aneesha, an Artificial Intelligence and Computer Science student
                        at Carnegie Mellon University intending to graduate in May of 2023. 
                    </p> 
                </div>

                <div style={styles.experienceStyle}>
                    <h3>Experience</h3>
                    <ul>
                        <li><strong>Google, Inc. &emsp;</strong><i>May - August, 2020</i></li>
                            <p>Software Engineering (STEP) Intern</p>
                            <ul>
                                <li>Developed <a href='https://github.com/asam01/step-2020'>personal portfolio web application
                                    </a> from scratch</li>

                                <li>Designed and implemented <a href='https://github.com/googleinterns/step59-2020'>
                                    Stock Market Simulation Game web application</a> from scratch</li>
                                
                            </ul>
                        <br/><br/>

                        <li><strong>Carnegie Institution for Science &emsp;</strong><i>May - August, 2018</i></li>
                            <p>Research Intern</p>
                            <ul>
                                <li>Wrote Python scripts to animate evolution and plot aspects of Earth's magnetic field</li>
                                <li>Rendered 3D models and 3D animations of magnetic field</li>
                            </ul>
                    </ul>
                </div>
                
            </body> 
        </div>

    )
}

export default Home;