import React from 'react';
import styles from './Link.module.css';

const Link = ({ title, url }) => {
    return (
        <a title={title} href={url} className={styles.link} rel="me">
            <span className={`${styles.icon} ${styles[title.toLowerCase()]}`} />
        </a>
    );
};

export default Link;
