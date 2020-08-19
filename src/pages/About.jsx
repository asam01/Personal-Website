import React from 'react';
import * as styles from '../css/HomeStyle';

function About () {
    return (
        <div>
            <div style={styles.section('lightpink')} id='about'>
                <h2 style={styles.sectionHeader}>About Me</h2>
            </div>
            
            <ul style={styles.list}>
                <li>
                    I am a rising sophomore at Carnegie Mellon University. I am an
                    enthusiastic learner seeking new opportunities to learn and
                    grow, both in and out of the classroom.
                </li>
                <br/>

                <li>
                    In school, I am a part of the 
                    <a href='http://alluniversityorchestra.org/' target='_blank'
                    rel='noopener noreferrer'> All-University Orchestra</a> (AUO) and 
                    <a href='http://cmubhangra.org/' target='_blank'
                    rel='noopener noreferrer'>CMU Bhangra</a>.
                    <ul>
                        <li>In AUO, I play violin and currently serve as the 
                            orchestra's concertmaster.
                        </li>
                        <li>In CMU Bhangra, I am currently an assistant captain.</li>
                    </ul>
                </li>
                <br/>

                <li>
                    I am also a part of the Women@SCS program, as well as the Society
                    of Women Engineers.
                </li>

                <li>
                    In 2018, I was named a Maryland-state winner for the National
                    Center for Women in Information Technology (NCWIT) Aspirations
                    in Computing Award.
                </li>
            </ul>
        </div>
    );
}

export default About;