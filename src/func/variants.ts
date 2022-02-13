const duration = 0.45
export const h_v = {
  hidden: {
    opacity: 0,
    height: "0px",
    display: "none",
    transition: {
      display: {
        delay: duration / 1.5,
        ease: "easeInOut",
      },
    },
  },
  visible: {
    opacity: 1,
    height: "auto",
    display: "block",
    transition: {
      display: {
        delay: duration,
        ease: "easeInOut",
      },
      opacity: {
        duration: duration * 1.5,
        ease: "easeInOut",
      },
    },
  },
}

export const h_v_fast = {
  hidden: {
    opacity: 0,
    height: "0px",
    display: "none",
  },
  visible: {
    opacity: 1,
    height: "auto",
    display: "block",
  },
}

const duration_pages = 0.15

export const h_v_pages = {
  hidden: {
    opacity: 0,
    display: "none",
    transition: {
      opacity: {
        ease: "easeInOut",
      },
      display: {
        delay: duration_pages,
        ease: "easeInOut",
      },
    },
  },

  visible: {
    opacity: 1,
    display: "block",
    transition: {
      opacity: {
        delay: duration_pages,
        ease: "easeInOut",
      },
    },
  },
}
