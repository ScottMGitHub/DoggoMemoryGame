import { Component, h, Prop } from '@stencil/core';

@Component({
    shadow: true,
    tag: 'custom-button',
    styleUrl: 'custom-button.scss'
})

export class CustomButton {

    /** The type of button */
    @Prop() buttonType: 'primary' | 'round' = 'primary';

    /** Is the button disabled */
    @Prop() disabled = false;
    
    render() {
        return (
            <button class={this.buttonType} disabled={this.disabled ? true : false}><slot/></button>
        );
    }
}
