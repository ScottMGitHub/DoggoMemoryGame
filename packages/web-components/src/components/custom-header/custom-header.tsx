import { Component, h } from '@stencil/core';

@Component({
    shadow: true,
    tag: 'custom-header',
    styleUrl: 'custom-header.scss'
})
export class CustomHeader {

    render() {
        return (
            <header>
                <div class="logo">
                    <slot name="logo"></slot>
                </div>
                <div class="navigation">
                    <slot name="navigation"></slot>
                </div>
            </header>
        );
    }
}
