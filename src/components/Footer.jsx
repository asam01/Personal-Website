import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import {MailOutline, LinkedIn, GitHub} from '@material-ui/icons';

import * as styles from '../css/NavBarStyle';

function Footer () {
    return (
        <AppBar position="static" style={styles.footer}>
            <Toolbar>
                <a href='https://github.com/asam01' target='_blank'
                rel='noopener noreferrer'>
                    <GitHub style={styles.picture('100%')}/>  
                </a>

                <a href='https://linkedin.com/in/aneesha-sampath' target='_blank'
                    rel='noopener noreferrer'>
                    <LinkedIn style={styles.picture('50%')}/>  
                </a>

                <a href='mailto:aneeshas@andrew.cmu.edu' target='_blank'
                rel='noopener noreferrer'>
                    <MailOutline style={styles.picture('0%')}/>  
                </a>
            </Toolbar>
        </AppBar>
    )
}

export default Footer;