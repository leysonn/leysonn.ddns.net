import React from 'react';
import Link from './Link.jsx'

const linkPanel = (props)=>{
    return (
        <div className='link_panel'>
            {props.links.map(prop=><Link s={prop.s} url={prop.url}/>)}
        </div>
    );
};

export default linkPanel;