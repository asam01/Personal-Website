import React from 'react';
import * as styles from '../css/HomeStyle';

import github from '../images/github-logo.png';
import linkedin from '../images/linkedin-logo.png';
import mail from '../images/mail-logo.png';

function About () {
    return (
        <div style={styles.section('hotpink')} id='about'>
            <br/>
            <h2 style={styles.sectionHeader}>About Me</h2>
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

            <div>
                <a href='https://github.com/asam01' target='_blank'
                    rel='noopener noreferrer'>
                    <img src={github} alt='GitHub profile' style={styles.picture('42.5%')}/>  
                </a>

                <a href='https://linkedin.com/in/aneesha-sampath' target='_blank'
                    rel='noopener noreferrer'>
                    <img src={linkedin} alt='Linkedin profile' style={styles.picture('3%')}/>  
                </a>

                <a href='mailto:aneeshas@andrew.cmu.edu' target='_blank'
                    rel='noopener noreferrer'>
                    <img src={mail} alt='Email' style={styles.picture('3%')}/>  
                </a>
            </div>
            <br/>
        </div>
    );
}

export default About;