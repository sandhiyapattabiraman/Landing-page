import { motion } from "framer-motion";
import '../App.css'
import { useEffect, useState } from "react"

const container = {
    hidden: { opacity: 0, scale: 0 },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.5,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

function Home() {
    const initialImages = [
        "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
        "https://placedog.net/200/200?id=1",
        "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
        "https://placedog.net/201/200?id=2",
      ]
    const [order, setOrder] = useState(initialImages)

    useEffect(() => {
        const timeout = setTimeout(() => setOrder(shuffle(order)), 1500)
        return () => clearTimeout(timeout)
    }, [order])

    
      
      function shuffle([...array]) {
        return array.sort(() => Math.random() - 0.5)
      }
      
      const spring = {
        type: "spring",
        damping: 20,
        stiffness: 300,
      }

    return (
        <>
            <div className=" h-screen flex flex-row justify-center items-center gap-50">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col justify-center gap-6"
                >
                    <motion.h1 variants={item} className="text-6xl font-bold text-white text-shadow-lg">
                        Hello World!
                    </motion.h1>
                    <motion.p variants={item} className="text-gray-400">
                        Some text here.
                    </motion.p>
                    <motion.button
                        variants={item}
                        className="bg-blue-600 text-white px-4 py-2 rounded-xl w-fit cursor-pointer"
                    >
                        Get Started
                    </motion.button>
                </motion.div>

                <div>
                    <ul className="flex flex-wrap justify-center items-center gap-4 p-6 w-[430px] max-w-2xl mx-auto">
                        {order.map((imgSrc) => (
                            <motion.li
                                key={imgSrc}
                                layout
                                transition={spring}
                                className="w-30 h-30 rounded-xl overflow-hidden shadow-md"
                            >
                                <img src={imgSrc} alt="" className="object-cover w-full h-full" />
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}


export default Home;