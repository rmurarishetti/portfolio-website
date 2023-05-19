import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> in _document.js

const useAOS = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
};

export { useAOS };