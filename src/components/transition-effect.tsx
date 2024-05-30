// use framer-motion to create a transition effect
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

// add animation variants for in and out
const variants = {
  in: { 
    opacity: 1, 
    scale: 1, 
    y: 0 ,
    transition: {
        duration: 0.25,
        delay: 0.25
      }
  },
  out: { 
    opacity: 0, 
    scale: 1, 
    y: 10,
    transition: {
        duration: 0.25,
      }
  },
}

// when components switch, use AnimatePresence to animate
const TransitionEffect = ({ children }: { children: React.ReactNode }) => {
    // get router object
    const {asPath} = useRouter();
    return (
        <div>
        <AnimatePresence
            initial={false}
            onExitComplete={()=>window.scrollTo(0,0)}>
        <motion.div
            key={asPath}
            initial='out'
            animate='in'
            exit='out'
            variants={variants}
        >
            {children}
        </motion.div>
        </AnimatePresence>
        </div>
    )
}
export default TransitionEffect;