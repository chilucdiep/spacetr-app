import { motion } from "framer-motion";

const rocketVariant = {
  hidden: { y: 10, x: -10, opacity: 0 },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: { delay: 0.4, duration: 0.4 },
  },
};

const circleVariant = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

export default function LoadingPage() {
  return (
    <div
      style={{
        display: "grid",
        height: "100vh",
        placeItems: "center",
      }}
    >
      <motion.svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ width: "120px", height: "120px" }}
        variants={circleVariant}
        initial="hidden"
        animate="show"
      >
        <motion.circle cx="13" cy="13" r="13" fill="#357CF2" />
        <motion.rect
          x="5"
          y="5"
          width="17"
          height="17"
          fill="url(#pattern0)"
          variants={rocketVariant}
          initial="hidden"
          animate="show"
        />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_1104_15" transform="scale(0.00195312)" />
          </pattern>
          <image
            id="image0_1104_15"
            width="512"
            height="512"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </motion.svg>
    </div>
  );
}
