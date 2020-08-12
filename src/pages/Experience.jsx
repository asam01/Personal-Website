import React from 'react';
import * as styles from '../css/HomeStyle';

function Experience () {
    return (
        <div style={styles.section('blue')} id='experience'>
            <br/>
            <h2 style={styles.sectionHeader}>Experience</h2>
                <ul style={styles.list}>
                    <li><strong>Google, Inc. &emsp;</strong><i>May - August, 2020</i></li>
                        <p>Software Engineering (STEP) Intern</p>
                        <ul>
                            <li>Developed <a href='https://github.com/asam01/step-2020'
                                target='_blank' rel='noopener noreferrer'>
                                personal portfolio web application</a> from scratch
                            </li>

                            <li>Designed and implemented <a href='https://github.com/googleinterns/step59-2020'
                                target='_blank' rel='noopener noreferrer'>Stock Market Simulation
                                Game web application</a> from scratch
                            </li>
                        </ul>
                    <br/><br/>

                    <li><strong>Carnegie Institution for Science &emsp;</strong><i>June - August, 2018</i></li>
                        <p>Research Intern</p>
                        <ul>
                            <li>Wrote Python scripts to animate evolution and plot aspects of Earth's magnetic field</li>
                            <li>Rendered 3D models and 3D animations of magnetic field</li>
                            <li>Visualizations used in Institution's public lecture series</li>
                        </ul>
                </ul>
                <br/>
        </div>
    );
}

export default Experience;