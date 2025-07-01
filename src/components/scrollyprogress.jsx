import {motion, useScroll} from 'framer-motion'


function ScrollyProgress(){
    const {scrollYProgress} = useScroll()
    return(
        <>
            <motion.div
                style={{ scaleX: scrollYProgress }}
                className='h-3 w-full bg-red-100 top-[3px] left-[10px] right-[10px] origin-left fixed rounded-full z-10'
            />

        </>
    )
}

export default ScrollyProgress;