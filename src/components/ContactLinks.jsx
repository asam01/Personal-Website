import React from 'react';
import * as styles from '../css/NavBarStyle';

import github from '../images/github-logo.png';
import linkedin from '../images/linkedin-logo.png';
import mail from '../images/mail-logo.png';

function ContactLinks () {
    return (
        <div sy>
            <a href='https://github.com/asam01' target='_blank'
            rel='noopener noreferrer'>
                <img src={github} alt='GitHub profile' style={styles.picture('130%')}/>  
            </a>

            <a href='https://linkedin.com/in/aneesha-sampath' target='_blank'
                rel='noopener noreferrer'>
                <img src={linkedin} alt='Linkedin profile' style={styles.picture('50%')}/>  
            </a>

            <a href='mailto:aneeshas@andrew.cmu.edu' target='_blank'
            rel='noopener noreferrer'>
                <img src={mail} alt='Email' style={styles.picture('-30%')}/>  
            </a>
        </div>
    );
}

export default ContactLinks;