import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const followerRef = useRef<HTMLDivElement | null>(null);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const followerX = useSpring(cursorX, { stiffness: 150, damping: 20 });
  const followerY = useSpring(cursorY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          translateX: cursorX,
          translateY: cursorY,
        }}
      />
      <motion.div
        ref={followerRef}
        className="custom-follower"
        style={{
          translateX: followerX,
          translateY: followerY,
        }}
      />
    </>
  );
};

export default CustomCursor;
