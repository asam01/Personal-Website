import React from 'react';
import PropTypes from 'prop-types';
import {HashLink as Link} from 'react-router-hash-link';
import {AppBar, Toolbar, Typography, Button, useScrollTrigger} from '@material-ui/core';
import * as styles from '../css/NavBarStyle';

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

function Bar (props) {
    return (
        <ElevationScroll {...props}>
            <AppBar position="static" style={styles.navbar}>
                <Toolbar>
                    <Link to='#top' style={{textDecoration: 'none'}}>
                        <Button style={styles.buttonStyle}>Home</Button>
                    </Link>

                    <Link to='#education' style={{textDecoration: 'none'}}>
                        <Button style={styles.buttonStyle}>Education</Button>
                    </Link>

                    <Link to='#experience' style={{textDecoration: 'none'}}>
                        <Button style={styles.buttonStyle}>Experience</Button>
                    </Link>

                    <Link to='#skills' style={{textDecoration: 'none'}}>
                        <Button style={styles.buttonStyle}>Skills</Button>
                    </Link>

                    <Typography style={styles.nameStyle} align='right'>
                        Aneesha Sampath
                    </Typography>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    )
}

export default Bar;