import React from 'react';
import Bar from '../components/Bar';

import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

import * as styles from '../css/HomeStyle';

function Home () {
    return (
        <div style={styles.page} id='top'>
            <Bar/>
            <title>Aneesha Sampath</title>
            <body style={styles.body}>
                <div>
                   <h1 style={styles.header}>Aneesha Sampath</h1>

                    <p style={styles.text}>
                        Hi there! I am Aneesha, an Artificial Intelligence and Computer Science student
                        at Carnegie Mellon University intending to graduate in May of 2023. 
                    </p> 
                </div>

                <Education />
                <Experience />
                <Skills />
                
                
            </body> 
        </div>
    );
}

export default Home;