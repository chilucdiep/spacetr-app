import Typewriter from "typewriter-effect";
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

  if (loading)
    return (
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
    );

  return (
    <Typewriter
      options={{
        strings: personalizedText,
        autoStart: true,
        cursor: "",
        delay: 20,
      }}
    />
  );
}
