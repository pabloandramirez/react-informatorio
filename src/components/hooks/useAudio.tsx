import { createContext, useContext, useState } from 'react';

const AudioContext = createContext<{
  activeAudio: HTMLAudioElement | null;
  setActiveAudio: (audio: HTMLAudioElement | null) => void;
}>({ activeAudio: null, setActiveAudio: () => {} });

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeAudio, setActiveAudio] = useState<HTMLAudioElement | null>(null);

  return (
    <AudioContext.Provider value={{ activeAudio, setActiveAudio }}>
      {children}
    </AudioContext.Provider>
  );
};