// import { useMediaQuery } from "react-responsive";

// const isMobile = useMediaQuery({ maxWidth: 639 });

export const section_variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.1, ease: [0.17, 0.55, 0.55, 1] },
  },
  closed: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.5, delay: 0.1, ease: [0.17, 0.55, 0.55, 1] },
  },
};
export const schedule_menu_variant = {
  open: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.2, ease: [0.17, 0.55, 0.55, 1] },
  },
  closed: {
    x: "-100%",
    opacity: 0,
    transition: { duration: 0.5, delay: 0.2, ease: [0.17, 0.55, 0.55, 1] },
  },
};
export const popup_form_variants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.5, ease: [0.17, 0.55, 0.55, 1] },
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.5, ease: [0.17, 0.55, 0.55, 1] },
  },
};

export const li_variants = {
  open: (index) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: 0.5 + index * 0.1 },
  }),
  closed: {
    opacity: 0,
    transition: { duration: 0.5, delay: 0 },
  },
};

export const fade_up_variants = {
  hidden: { opacity: 0, y: 34 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.62,
      delay,
      ease: [0.17, 0.55, 0.55, 1],
    },
  }),
};

export const fade_in_variants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.55,
      delay,
      ease: [0.17, 0.55, 0.55, 1],
    },
  }),
};

export const stagger_container_variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

export const service_card_variants = {
  hidden: { opacity: 0, y: 26, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.52, ease: [0.17, 0.55, 0.55, 1] },
  },
};
