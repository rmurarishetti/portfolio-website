import { useRef, useEffect, useState } from "react";

const useScrollPercentage = () => {
    const [percentage, setPercentage] = useState(0);
    const scrollRef = useRef(null);

    useEffect(() => {
        const calculateScrollPercentage = () => {
            if (scrollRef.current) {
                const elementBottom = scrollRef.current.getBoundingClientRect().bottom + window.scrollY;
                const viewportTop = window.scrollY;
                setPercentage(Math.min(Math.max(viewportTop / elementBottom, 0), 1));
            }
        }

        window.addEventListener("scroll", calculateScrollPercentage);

        return () => {
            window.removeEventListener("scroll", calculateScrollPercentage);
        };
    }, []);

    return [scrollRef, percentage];
}

export { useScrollPercentage };