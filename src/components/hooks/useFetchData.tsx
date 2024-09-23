import { useEffect, useState } from "react";

export default function useFetchData(url: string){
    const [audios, setAudios] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setIsLoaded(true);
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setAudios(data.body.audio_clips);
            setIsLoaded(false);
          })
          .catch(() => {
            setError('Hubo un error');
          });
      }, [url]);

    return { audios, isLoaded, error };
}