import { Component, h, Method, State } from '@stencil/core';
@Component({
    shadow: true,
    tag: 'custom-timer',
    styleUrl: 'custom-timer.scss'
})
export class CustomTimer {

    /** Current timer time */
    @State() time: string;

    /** Interval to increment */
    @State() interval: any;

    /** Total seconds counter*/
    @State() totalSeconds: number;

    /** Called once before component loads */
    componentWillLoad() {
        this.resetTimer();
    }

    @Method()
    async stopTimer() {
        clearInterval(this.interval);
    }

    @Method()
    async resetTimer() {
        clearInterval(this.interval);
        this.time = '00:00';
        this.totalSeconds = 0;
        this.interval = setInterval(() => { this.timer(); }, 1000);
    }

    timer(){
        ++this.totalSeconds;
        const seconds = () => {
            const seconds = (Math.round(this.totalSeconds%60)).toString();
            return seconds.length < 2 ? '0' + seconds : seconds;
        };

        const minutes = () => {
            const minutes = (Math.round(this.totalSeconds/60)).toString();
            return minutes.length < 2 ? '0' + minutes : minutes;
        };
        
        this.time = `${minutes()}:${seconds()}`;
    }

    render() {
        return (
            <div class="timer-wrapper">
              {this.time}
            </div>
        );
    }
}
