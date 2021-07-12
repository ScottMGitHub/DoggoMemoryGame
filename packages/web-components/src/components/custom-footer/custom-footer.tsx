import { Component, h, Prop } from '@stencil/core';

@Component({
    shadow: true,
    tag: 'custom-footer',
    styleUrl: 'custom-footer.scss'
})
export class CustomFooter {

    /** Shows or hides the back to top button */
    @Prop() showButton = true;

    private scrollToTop(): void {
        window.scrollTo(0, 0);
    }

    render() {

        return (
            <footer>
                <div class={this.showButton ? "back-to-top" : "back-to-top--hidden" }>
                    <custom-button onClick={() => this.scrollToTop()} buttonType="round">top</custom-button>
                </div>
                <div class="content">
                    <slot/>
                </div>
            </footer>
        );
    }
}
