import React from 'react';
import * as styles from '../css/HomeStyle';

function Skills () {
    return (
        <div>
            <div style={styles.section('darkviolet')} id='skills'>
                <h2 style={styles.sectionHeader}>Technical Skills</h2>
            </div>
            
            <ul style={styles.list}>
                <li>Proficient:</li>
                <ul>
                    <li>Java</li>
                    <li>Javascript</li>
                    <li>SML/NJ (Standard Machine Language)</li>                    
                </ul>
                <br/>

                <li>Experience:</li>
                <ul>
                    <li>Python</li>
                    <li>C</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React JS</li>                    
                </ul>

            </ul>
        </div>
    );
}

export default Skills;