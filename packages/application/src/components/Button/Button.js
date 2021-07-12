import React from 'react';

const Button = ({
    disabled,
    buttonType,
    className,
    onClickEvent,
    children
}) => {

    return(
        <custom-button button-type={buttonType} disabled={disabled} class={className}
            onClick={(event) => {
                if (onClickEvent) {
                    onClickEvent(event.detail);
                }
            }}
        >{children}</custom-button>
    );
}

export default Button;