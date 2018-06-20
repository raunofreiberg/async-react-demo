import React from 'react';

export default function Spinner(props) {
    let className = 'Spinner';
    if (props.size === 'large') {
        className += ' Spinner--big';
    } else if (props.size === 'medium') {
        className += ' Spinner--medium';
    }
    return <div className={className}>{'🌀'}</div>;
}
