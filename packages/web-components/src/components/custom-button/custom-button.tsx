import { Component, h, Listen, Method, Prop, State } from '@stencil/core';

@Component({
    shadow: true,
    tag: 'custom-button',
    styleUrl: 'custom-button.scss'
})

export class CustomButton {

    /** The type of button */
    @Prop() buttonType: 'primary' | 'round' = 'primary';
    
    /** Displays the loading spinner on click */
    @Prop() displayLoadingSpinner = false;

    /** Is the button disabled */
    @Prop() disabled = false;

    /** button state */
    @State() buttonState: 'idle' | 'loading' = 'idle';

    /**
     * Button state method, this is required for changing the state in the implementation layer
     */
    @Method()
    async setButtonState(value: 'idle' | 'loading') {
        this.buttonState = value;
    }

    @Listen('click', { capture: true })
    clicked() {
        if(this.displayLoadingSpinner) {
            this.buttonState = 'loading';
            this.disabled = true;
        }
    }

    render() {
        return (
            <button class={`${this.buttonType} ${this.buttonState}`} disabled={this.disabled ? true : false}>
                <div class='button-content'><slot/></div>
            </button>
        );
    }
}
