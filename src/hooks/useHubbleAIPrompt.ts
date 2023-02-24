import { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";

export default function useHubbleAIPrompt(
  birthDate: string,
  pictureName: string,
  pictureCaption: string
) {
  const [personalizedText, setPersonalizedText] = useState<string | undefined>(
    undefined
  );
  const [loading, setLoading] = useState<boolean>(false);
  // const [error, setError] = useState<any>(null);

  useEffect(() => {
    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    async function generate() {
      setLoading(true);
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `User birth date: [${birthDate}]
        Astrological sign: [determine astrological sign based on birth date]
        Image title: [${pictureName}]
        Image caption: [${pictureCaption}]
        
        Based on this information, can you generate a personalized message for the user? The message should be witty, funny, sassy and friendly, and should incorporate elements of the user's birth date and astrological sign as well as the image title and caption. The message should also be a little bit inspiring and wholesome, but mainly witty and funny. Include words like slay queen, pur, periodt, pop off, etc.
        `,
        max_tokens: 256,
      });
      await setLoading(false);

      await setPersonalizedText(response.data.choices[0].text);
    }

    generate();
  }, [birthDate, pictureCaption, pictureName]);

  return { personalizedText, loading };
}
