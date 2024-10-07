import { createContext, useContext, useState } from 'react';

export const AudioContext = createContext<{
  activeAudio: HTMLAudioElement | null;
  setActiveAudio: (audio: HTMLAudioElement | null) => void;
}>({ activeAudio: null, setActiveAudio: () => {} });

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeAudio, setActiveAudio] = useState<HTMLAudioElement | null>(null);

  return (
    <AudioContext.Provider value={{ activeAudio, setActiveAudio }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);

