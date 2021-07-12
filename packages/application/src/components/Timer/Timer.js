import React from 'react';

const Timer = ({stopTimer}) => {

    if(stopTimer){
        (async () => {
            const timer = document.querySelector('custom-timer');
            if(timer)
                await timer.stopTimer();
        })();
    }

    return(
        <custom-timer/>
    );
}

export default Timer;