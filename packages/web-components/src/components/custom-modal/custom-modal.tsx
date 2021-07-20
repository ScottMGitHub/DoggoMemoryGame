import { Component, h, Prop } from '@stencil/core';

@Component({
    shadow: true,
    tag: 'custom-modal',
    styleUrl: 'custom-modal.scss'
})
export class CustomModal {

    /** Is the modal in an open state */
    @Prop() open = false;

    render() {
        return (
            <div class={ this.open ? 'modal-wrapper--open' : 'modal-wrapper' }>
                <div class="modal-container">
                    <div class="modal-close-button" onClick={() => this.open = false}>X</div>
                    <div class="modal-content"><slot/></div>
                </div>
            </div>
        );
    }
}
