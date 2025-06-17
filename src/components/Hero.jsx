import React from 'react'
import fanta1 from '../assets/fanta1.png'
import fanta2 from '../assets/fanta2.png'
import fanta3 from '../assets/fanta3.png'
import { FaWhatsapp } from 'react-icons/fa'
import Navbar from './Navbar'
import { motion, AnimatePresence, easeInOut } from 'framer-motion'
import deco1a from '../assets/bg/deco1a.svg'
import deco1b from '../assets/bg/deco1b.svg'

const SliderRight = (delay) => ({
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay, ease: easeInOut }
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: { duration: 0.2, ease: easeInOut }
  }
})

const HeroData = [
  {
    id: 1,
    image: fanta1,
    title: "Choco Boba",
    subtitle: "",
    price: "$40",
    modal: "Orange",
    bgColor: "#bab600",
    decos: [
      {
        src: deco1a,
        className: "absolute right-0 bottom-0 w-[400px] opacity-50 z-10",
        animation: { y: 30, opacity: 0.2 }
      },
      {
        src: deco1b,
        className: "absolute top-10 left-10 w-[200px] opacity-30 z-10",
        animation: { y: -20, opacity: 0.2 }
      }
    ]
  },
  {
    id: 2,
    image: fanta2,
    title: "Cola Zero",
    subtitle: "Lorem ipsum dolor sit amet...",
    price: "$10",
    modal: "Zerj",
    bgColor: "#B7CD7F",
    decos: [
        {
        src: deco1a,
        className: "absolute right-0 bottom-0 w-[400px] opacity-50 z-10",
        animation: { y: 30, opacity: 0.2 }
      },
      {
        src: deco1b,
        className: "absolute top-10 left-10 w-[200px] opacity-30 z-10",
        animation: { y: -20, opacity: 0.2 }
      }
    ]
  },
  {
    id: 3,
    image: fanta3,
    title: "Coca Cola",
    subtitle: "Lorem ipsum dolor sit amet...",
    price: "$50",
    modal: "Cola",
    bgColor: "#778c43",
    decos: [
        {
        src: deco1a,
        className: "absolute right-0 bottom-0 w-[400px] opacity-50 z-10",
        animation: { y: 30, opacity: 0.2 }
      },
      {
        src: deco1b,
        className: "absolute top-10 left-10 w-[200px] opacity-30 z-10",
        animation: { y: -20, opacity: 0.2 }
      }
    ]
  }
]

const Hero = () => {
  const [activeData, setActiveData] = React.useState(HeroData[0])

  const handleActiveData = (data) => setActiveData(data)

  return (
    <motion.div
      initial={{ backgroundColor: activeData.bgColor }}
      animate={{ backgroundColor: activeData.bgColor }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {activeData.decos?.map((deco, index) => (
          <motion.img
            key={activeData.id + '-deco-' + index}
            src={deco.src}
            initial={{ opacity: 0, y: deco.animation.y }}
            animate={{ opacity: deco.animation.opacity, y: 0 }}
            exit={{ opacity: 0, y: -deco.animation.y }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className={deco.className}
          />
        ))}
      </AnimatePresence>

      <Navbar />

      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[605px]">
        {/* Text Block */}
        <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] text-white order-2 md:order-1 relative z-40">
          <div className="space-y-5 text-center md:text-left">
            <AnimatePresence mode="wait">
              <motion.h1
                key={activeData.id}
                variants={SliderRight(0.2)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="text-3xl lg:text-6xl xl:text-7xl font-bold font-handwriting text-shadow"
              >
                {activeData.title}
              </motion.h1>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={activeData.id + 'desc'}
                variants={SliderRight(0.4)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="text-sm leading-loose text-white/80"
              >
                {activeData.subtitle}
              </motion.p>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.button
                key={activeData.id + 'btn'}
                variants={SliderRight(0.6)}
                initial="hidden"
                animate="show"
                exit="exit"
                style={{ color: activeData.bgColor }}
                className="px-4 py-2 bg-white inline-block font-normal rounded-sm"
              >
                Order Now
              </motion.button>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              className="flex items-center justify-center md:justify-start gap-4 !md:mt-24 !md-10"
            >
              <div className="w-20 h-[1px] bg-white" />
              <p>top recommendation</p>
              <div className="w-20 h-[1px] bg-white" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              className="grid grid-cols-3 gap-10"
            >
              {HeroData.map((data) => (
                <div
                  key={data.id}
                  onClick={() => handleActiveData(data)}
                  className="cursor-pointer space-y-3 hover:scale-105 transition-all duration-200"
                >
                  <div className="flex justify-center">
                    <img
                      src={data.image}
                      alt=""
                      className={`w-[80px] img-shadow ${
                        activeData.image === data.image
                          ? "opacity-100 scale-110"
                          : "opacity-50"
                      }`}
                    />
                  </div>
                  <div className="text-center !mt-6 space-y-1">
                    <p className="text-base line-through opacity-50">
                      {data.price}
                    </p>
                    <p className="text-xl font-bold">{data.price}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Image */}
        <div className="flex flex-col justify-end items-center relative order-1 md:order-2">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeData.id + 'img'}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4, ease: easeInOut }}
              src={activeData.image}
              alt=""
              className="w-[150px] md:w-[200px] xl:w-[350px] img-shadow relative z-10"
            />
            <div className="text-white/20 text-[300px] font-poppins font-extrabold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
{activeData.modal}
            </div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeData.id + 'bgtext'}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: easeInOut }}
            >
              {activeData.modal}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* WhatsApp */}
        <div className="text-3xl text-white fixed bottom-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
          <a href="#"><FaWhatsapp /></a>
        </div>
      </div>
    </motion.div>
  )
}

export default Hero
