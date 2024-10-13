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
  setActiveAudio: (audio: HTMLAudioElement) => void;
  isPlaying: boolean;
  setIsPlaying: Dispatch<React.SetStateAction<boolean>>;
  audioInfo: Audio | null;
  setAudioInfo: React.Dispatch<React.SetStateAction<Audio | null>>;
  duration: number;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
  currentTime: number;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
}

export const PlayAudioContext = createContext<AudioContextType | null>(null);

export function PlayAudioProvider({ children }: { children: React.ReactNode }) {
  const [activeAudio, setActiveAudio] = useState<HTMLAudioElement | null>(null);
  const [audioInfo, setAudioInfo] = useState<Audio | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  return (
    <PlayAudioContext.Provider value={{ activeAudio, setActiveAudio, isPlaying, setIsPlaying, 
    audioInfo, setAudioInfo, duration, setDuration, currentTime, setCurrentTime }}>
      {children}
    </PlayAudioContext.Provider>
  );
}

