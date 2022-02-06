const duration = 0.45
export const h_v = {
  // hidden: { opacity: 0, display: "none" },
  // visible: { opacity: 1, display: "block" },
  hidden: {
    opacity: 0,
    height: "0px",
    display: "none",
    transition: {
      duration,
      ease: "easeInOut",
      display: {
        delay: duration,
      },
      height: {
        delay: duration / 1.5,
      },
    },
  },
  visible: {
    opacity: 1,
    height: "auto",
    display: "block",
    transition: {
      duration,
      ease: "easeInOut",
      opacity: {
        duration: duration / 2,
        delay: duration / 2,
      },
    },
  },
}
