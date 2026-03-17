import type { Transition } from "framer-motion";
import { tokens } from "@/styles/tokens";

export const revealTransition: Transition = {
  duration: tokens.motion.duration.reveal,
  ease: tokens.motion.easing
};
