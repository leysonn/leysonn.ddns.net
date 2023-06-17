import React from 'react';
import './styles/style.css'
import avatar from './images/avatar.webp'
import LinkPanel from './components/Link_panel';

function App() {
    return (
        <div className="profile">
            <div className="main_panel">
                <a href="https://www.donationalerts.com/r/leysonmart_">
                    <img src={avatar} alt='leyson'/>
                </a>
                <h1>LEYSON</h1>
            </div>
            <div className='links'>
                <LinkPanel links={[{s: "Telegram", url: "https://t.me/leysonmart"}, {s: "Twitch", url: "https://www.twitch.tv/leysonmart_"}, {s: "Github", url: "https://github.com/leysonn"}, {s: "Shikimori", url: "https://shikimori.me/Leyson"}]} />
                {/* <LinkPanel links={[{s: "Telegram", url: "https://t.me/leysonmart"}, {s: "Twitch", url: "https://www.twitch.tv/leysonmart_"}]} /> */}
            </div>
        </div>
    );
}

export default App;
