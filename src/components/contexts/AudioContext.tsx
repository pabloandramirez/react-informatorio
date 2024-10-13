import { createContext, Dispatch, useState } from 'react';

type Audio = {
  id: string;
  logo_image: string;
  title: string;
  description: string;
  high_mp3: string;
  duration: number;
}

type AudioContextType = {
  activeAudio: HTMLAudioElement | null;
  setActiveAudio: (audio: HTMLAudioElement | null) => void;
  isPlaying: boolean | null;
  setIsPlaying: Dispatch<React.SetStateAction<boolean>>;
  audioInfo: Audio | null;
  setAudioInfo: Dispatch<React.SetStateAction<Audio | null>>;
}

export const PlayAudioContext = createContext<AudioContextType | null>(null);

export function PlayAudioProvider({ children }: { children: React.ReactNode }) {
  const [activeAudio, setActiveAudio] = useState<HTMLAudioElement | null>(null);
  const [audioInfo, setAudioInfo] = useState<Audio | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <PlayAudioContext.Provider value={{ activeAudio, setActiveAudio, isPlaying, setIsPlaying, audioInfo, setAudioInfo }}>
      {children}
    </PlayAudioContext.Provider>
  );
}

