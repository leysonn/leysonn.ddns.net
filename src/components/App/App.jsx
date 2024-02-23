import React from 'react';
import styles from './App.module.css';
import avatar from '../../images/avatar.webp';
import LinkPanel from '../LinkPanel/LinkPanel';

function App() {
    return (
        <div className={styles.profile}>
            <div className={styles.main_panel}>
                <a href="https://www.donationalerts.com/r/leysonmart_">
                    <img src={avatar} alt="leyson" />
                </a>
                <h1>LEYSON</h1>
            </div>
            <div className={styles.links}>
                <LinkPanel
                    links={[
                        { title: 'Telegram', url: 'https://t.me/lleyson' },
                        { title: 'Twitch', url: 'https://www.twitch.tv/leysonmart_' },
                        { title: 'Github', url: 'https://github.com/leysonn' },
                        { title: 'Shikimori', url: 'https://shikimori.me/Leyson' },
                    ]}
                />
            </div>
        </div>
    );
}

export default App;
