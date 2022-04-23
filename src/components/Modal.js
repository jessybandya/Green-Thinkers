import { useEffect } from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import ReactPlayer from 'react-player'


const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const flip = {
  hidden: {
    transform: "scale(0) rotateX(-360deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotateX(360deg)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const newspaper = {
  hidden: {
    transform: "scale(0) rotate(720deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotate(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotate(-720deg)",
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const badSuspension = {
  hidden: {
    y: "-100vh",
    opacity: 0,
    transform: "scale(0) rotateX(-360deg)",
  },
  visible: {
    y: "-25vh",
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 15,
      stiffness: 500,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
  },
};

const gifYouUp = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
};

const Modal = ({ handleClose, text, type }) => {


  return (
    <Backdrop onClick={handleClose}>
 
        <motion.div
          className="modal"
          onClick={(e) => e.stopPropagation()}
          style={{
            padding: 0,
            height: "auto",
            width: "auto",
            display: "flex",
            justifyContent: "center",
          }}
          variants={gifYouUp}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* <h3
          onClick={handleClose}
            style={{
              color: "#ffaa00",
              textTransform: "none",
              fontWeight: 400,
              margin: "auto auto auto 0",
              fontFamily: "Montserrat",
              fontSize: "150%",
            }}
          >
            Tap x2 to close
          </h3> */}
          {/* <motion.img
            alt=""
            
            drag
            // src="https://i.giphy.com/media/O5ac76MtFGPHG/giphy.gif"
            // src="https://i.giphy.com/media/jmS6YojdAaYw5z1LHi/giphy.gif"
            src="https://i.giphy.com/media/hhgAbqQpm49vW/giphy.gif"
            style={{
              maxHeight: "100vh",
              height: "50vh",
              width: "100vh",
              objectFit: "cover",
              borderRadius: "6px",
              zIndex: 1000,
            }}
          /> */}
          <ReactPlayer
                       className='react-player'       
          url='https://www.youtube.com/watch?v=HgEo7YnvJs0'

                     />
        </motion.div>
    </Backdrop>
  );
};


export default Modal;