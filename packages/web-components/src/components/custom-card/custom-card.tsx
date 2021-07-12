import { Component, h, Prop } from '@stencil/core';


@Component({
    shadow: true,
    tag: 'custom-card',
    styleUrl: 'custom-card.scss'
})
export class CustomCard {

    /** Text for card */
    @Prop() text;

    /** Image for card */
    @Prop() image;

    /** Card open or closed */
    @Prop() open = false;

    /** Card disabled - this is used for matched cards */
    @Prop() disabled = false;

    render() {

        const background = { backgroundImage: `url('${this.image}')` };
        let wrapperClasses = this.open ? "custom-card--open" : "custom-card--closed";
        if(this.disabled) wrapperClasses += ' disabled';

        return (
            <div class={wrapperClasses}>
                {   
                    this.open ? 
                        [
                            <div class="card-image" style={background}/>,
                            <div class="card-label">{this.text}</div>
                        ]
                    : ''
                }
            </div>
        );
    }
}
