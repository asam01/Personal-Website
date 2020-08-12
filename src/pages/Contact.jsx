import React from 'react';
import Bar from '../components/Bar';
import Footer from '../components/Footer';
import {MailOutline, LinkedIn, GitHub} from '@material-ui/icons';

import * as stylesHome from '../css/HomeStyle';
import * as stylesBar from '../css/NavBarStyle';

function Home () {
    return (
        <div style={stylesHome.page} id='top'>
            <Bar/>
            <title>Aneesha Sampath</title>
            <div style={stylesHome.body} className='body'>
                <div>
                   <h1 style={stylesHome.header}>Contact Me</h1>

                    <a href='https://github.com/asam01' target='_blank'
                    rel='noopener noreferrer'>
                        <GitHub style={stylesBar.picture('46%')}/>  
                    </a>
                    <br/>

                    <a href='https://linkedin.com/in/aneesha-sampath' target='_blank'
                        rel='noopener noreferrer'>
                        <LinkedIn style={stylesBar.picture('46%')}/>  
                    </a>
                    <br/>

                    <a href='mailto:aneeshas@andrew.cmu.edu' target='_blank'
                    rel='noopener noreferrer'>
                        <MailOutline style={stylesBar.picture('46%')}/>  
                    </a>
                    </div>
                <br/>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;