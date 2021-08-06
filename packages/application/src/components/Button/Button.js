import React from 'react';

const Button = ({
    disabled,
    buttonType,
    className,
    displayLoadingSpinner,
    onClickEvent,
    children
}) => {

    return(
        <custom-button 
            button-type={buttonType} 
            display-loading-spinner={displayLoadingSpinner}
            disabled={disabled} 
            class={className}
            onClick={(event) => {
                if (onClickEvent) {
                    onClickEvent(event.detail);
                }
            }}
        >{children}</custom-button>
    );
}

export default Button;