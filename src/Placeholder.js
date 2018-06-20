import React from 'react';

const Placeholder = ({ delayMs, fallback, children }) => (
    <React.Timeout ms={delayMs}>
        {didExpire => didExpire ? fallback : children}
    </React.Timeout>
);

export default Placeholder;
