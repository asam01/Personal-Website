import React from 'react';
import * as styles from '../css/HomeStyle';

function Education () {
    return (
        <div style={styles.section('aliceblue')} id='education'>
            <br/>
            <h2 style={styles.sectionHeader}>Education</h2>
            <ul style={styles.list}>
                <li><strong>Carnegie Mellon University</strong>, 2023</li>
                <br/>
                <ul>
                    <li>Bachelor of Science in Artificial Intelligence, <i>School of Computer Science</i></li>
                    <li>Minor in Drama, <i>School of Drama</i></li>
                </ul>
            </ul>
            <br/>
        </div>
    );
}

export default Education;