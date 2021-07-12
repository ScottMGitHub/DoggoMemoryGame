import { Component, h } from '@stencil/core';
@Component({
    shadow: true,
    tag: 'custom-navigation',
    styleUrl: 'custom-navigation.scss'
})
export class CustomNavigation {

    render() {
        return (
            <div class="navigation-wrapper">
                <slot/>
            </div>
        );
    }
}
