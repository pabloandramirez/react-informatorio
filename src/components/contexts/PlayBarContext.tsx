import { createContext, Dispatch, useState } from 'react';

type PlaybarContextType = {
  showPlayBar: boolean;
  setShowPlaybar: Dispatch<React.SetStateAction<boolean>>;
}

export const PlayBarShowContext = createContext<PlaybarContextType | null>(null);

export function PlayBarProvider({ children }: { children: React.ReactNode }) {
    const [showPlayBar, setShowPlaybar] = useState(false);

  return (
    <PlayBarShowContext.Provider value={{ showPlayBar, setShowPlaybar }}>
      {children}
    </PlayBarShowContext.Provider>
  );
}
