import { useEffect, useRef, useState } from 'react';

// const useCountdown = (time) => {
//     const countDownDate = new Date().getTime() + time * 1000;

//     const [countDown, setCountDown] = useState(
//         countDownDate - new Date().getTime()
//     );

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCountDown(countDownDate - new Date().getTime());
//         }, 1000);

//         return () => clearInterval(interval);
//     }, [countDownDate]);

//     return getReturnValues(countDown);
// };

// const getReturnValues = (countDown) => {
//     // calculate time left
//     //   const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
//     //   const hours = Math.floor(
//     //     (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     //   );
//     //   const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
//     return [seconds];
// };

// export { useCountdown };


export const useCountDown = (total, ms) => {
    const [counter, setCountDown] = useState(total);
    const [startCountDown, setStartCountDown] = useState(false);
    // Store the created interval
    const intervalId = useRef();
    const start = () => setStartCountDown(true);
    const pause = () => setStartCountDown(false);
    const reset = () => {
        clearInterval(intervalId.current);
        setStartCountDown(false);
        setCountDown(total);
    };

    useEffect(() => {
        intervalId.current = setInterval(() => {
            startCountDown && counter > 0 && setCountDown(counter => counter - 1);
        }, ms);
        // Clear interval when count to zero
        if (counter === 0) clearInterval(intervalId.current);
        // Clear interval when unmount
        return () => clearInterval(intervalId.current);
    }, [startCountDown, counter, ms]);

    return [counter, start, pause, reset];
};