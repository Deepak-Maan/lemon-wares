import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from 'gsap-react-plugin';

const Button = () => {
    const buttonRef = useRef(null);
    const hoverTimeline = useGSAP(() => {
        const tl = gsap.timeline();
        tl.to(buttonRef.current, { duration: 0.3, scale: 1.1, backgroundColor: '#f55' });
        return tl;
    });

    const handleMouseEnter = () => {
        hoverTimeline.play();
    };

    const handleMouseLeave = () => {
        hoverTimeline.reverse();
    };

    return (
        <button
            ref={buttonRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ backgroundColor: '#f00', color: '#fff', padding: '10px 20px', border: 'none', cursor: 'pointer' }}
        >
            Hover over me
        </button>
    );
};

export default Button;