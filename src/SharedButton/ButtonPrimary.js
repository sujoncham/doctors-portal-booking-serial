import React from 'react';

const ButtonPrimary = ({children}) => {
    return (
        <div>
            <button className="btn btn-sm btn-primary">{children}</button>
        </div>
    );
};

export default ButtonPrimary;