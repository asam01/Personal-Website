import React from 'react';
import {Link} from 'react-router-dom';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import * as styles from '../css/NavBarStyle';

function Bar () {
    return (
        <AppBar position="static" style={styles.navbar}>
            <Toolbar>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <Button style={styles.buttonStyle}>Home</Button>
                </Link>

                <Typography style={styles.nameStyle} align='right'>
                    Aneesha Sampath
                </Typography>
            </Toolbar>
      </AppBar>
    )
}

export default Bar;