import { useState, useEffect } from "react";
import axios from "axios";

interface HubbleAIPromptProps {
  birthDate: string;
  signName: string | undefined;
  pictureName: string;
  pictureCaption: string;
}

export default function useHubbleAIPrompt({
  birthDate,
  signName,
  pictureName,
  pictureCaption,
}: HubbleAIPromptProps) {
  const [personalizedText, setPersonalizedText] = useState<string | undefined>(
    undefined
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    async function generate() {
      try {
        const apiUrl = process.env.REACT_APP_SPACETR_BE_API || "";
        const response = await axios.post(apiUrl, {
          birthDate,
          signName,
          pictureName,
          pictureCaption,
        });
        setPersonalizedText(response.data.personalizedText.message.content);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }

    generate();
  }, [birthDate, pictureCaption, pictureName, signName]);

  return { personalizedText, loading };
}
