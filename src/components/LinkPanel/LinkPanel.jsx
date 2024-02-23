import React from 'react';
import Link from '../Link/Link.jsx';
import styles from './LinkPanel.module.css';

const LinkPanel = ({ links }) => {
    return (
        <div className={styles.link_panel}>
            {links.map((prop, index) => (
                <Link key={index} {...prop} />
            ))}
        </div>
    );
};

export default LinkPanel;
