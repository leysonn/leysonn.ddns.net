import React from 'react';

const link = (props)=>{
    return (
        <a title={props.s} href={props.url} className="link" rel="me">
            <span className={'icon '+props.s.toLowerCase()}></span>
        </a>
    );
};

export default link;