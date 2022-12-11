import { createContext, useEffect, useState } from 'react';

const { REACT_APP_OPENAI_KEY: openaiKey, REACT_APP_OPENAI_MODEL_NAME: openaiModelName } = process.env;

interface TextGeneratorContextInterface {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  maxTokens: number;
  fetching: boolean;
  setMaxTokens: React.Dispatch<React.SetStateAction<number>>;
  generatedText: string | undefined;
  generateText: () => Promise<void>;
}

export const TextGeneratorContext = createContext<TextGeneratorContextInterface>({
  searchText: '',
  setSearchText: () => {},
  maxTokens: 500,
  fetching: false,
  setMaxTokens: () => {},
  generatedText: '',
  generateText: async () => {},
});

export const TextGeneratorContextProvider = ({ children }: any) => {
  const [searchText, setSearchText] = useState('');
  const [maxTokens, setMaxTokens] = useState(500);
  const [generatedText, setGeneratedText] = useState<string>();
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    if (searchText.length > 0) {
      generateText();
    }
  }, [searchText]);

  const generateText = async () => {
    console.log(searchText);
    if (searchText.length === 0) return;
    setFetching(true);
    setGeneratedText('');
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', `Bearer ${openaiKey}`);

    const raw = JSON.stringify({
      model: openaiModelName,
      prompt: searchText,
      temperature: 1,
      max_tokens: maxTokens,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow' as RequestRedirect,
    };

    try {
      const result = await fetch('https://api.openai.com/v1/completions', requestOptions)
        .then(response => response.json())
        .then(json => json);
      setGeneratedText(result?.choices[0]?.text);
    } catch (e: any) {
      console.log('Error: ', e);
      alert(e.message);
    } finally {
      setSearchText('');
      setFetching(false);
    }
  };

  return (
    <TextGeneratorContext.Provider
      value={{ searchText, setSearchText, maxTokens, fetching, setMaxTokens, generatedText, generateText }}
    >
      {children}
    </TextGeneratorContext.Provider>
  );
};
