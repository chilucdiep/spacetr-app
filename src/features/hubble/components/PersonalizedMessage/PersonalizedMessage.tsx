import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import styles from "../../pages/HubbleDetailsPage.module.scss";
import { messageBox } from "../../utils/hubble-page-anim";
import useHubbleAIPrompt from "../../hooks/useHubbleAIPrompt";

export default function PersonalizedMessage({
  birthDate,
  signName,
  pictureName,
  pictureCaption,
}: any) {
  const { personalizedText, loading } = useHubbleAIPrompt({
    birthDate,
    signName,
    pictureName,
    pictureCaption,
  });
  return (
    <motion.section
      className={styles.PersonalizedMessage}
      variants={messageBox}
      initial="hidden"
      animate="show"
    >
      <h2>Our personalized words to you</h2>
      <div>
        <p className={styles.Caption}>
          {loading ? (
            <Typewriter
              options={{
                strings: ["", "Loading message...", "Let us cook."],
                autoStart: true,
                cursor: "",
                loop: true,
                delay: 20,
                deleteSpeed: 20,
              }}
            />
          ) : (
            <Typewriter
              options={{
                strings: personalizedText,
                autoStart: true,
                cursor: "",
                delay: 20,
              }}
            />
          )}
        </p>
      </div>
    </motion.section>
  );
}
