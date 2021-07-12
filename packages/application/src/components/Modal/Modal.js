import React from 'react';

const Modal = ({
    open,
    className,
    children
}) => {
    return(
        <custom-modal open={open} class={className}>{children}</custom-modal>
    );
}

export default Modal;