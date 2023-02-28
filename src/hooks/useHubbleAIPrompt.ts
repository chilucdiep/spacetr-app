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
    async function generate() {
      setLoading(true);
      const response = await axios.post<{ personalizedText: string }>(
        "https://space-be.vercel.app/api/openai/",
        {
          birthDate,
          signName,
          pictureName,
          pictureCaption,
        }
      );
      setLoading(false);
      setPersonalizedText(response.data.personalizedText);
    }

    generate();
  }, [birthDate, pictureCaption, pictureName, signName]);

  return { personalizedText, loading };
}
