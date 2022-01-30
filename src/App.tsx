import React, { useEffect, useMemo, useState } from 'react';
import Photo from './components/Photo';
import { ResponseGetImage } from './services/Unsplash/models';
import UnsplashService from './services/Unsplash/UnsplashService';

const App: React.FC = () => {
  const [photos, setPhotos] = useState<ResponseGetImage[]>([]);
  const unsplashService = useMemo(() => new UnsplashService(), []);

  useEffect(() => {
    unsplashService.getImages().then((res) => {
      setPhotos(res);
    });
  }, [unsplashService]);

  return (
    <>{photos.length && photos.map((p) => <Photo key={p.id} imageUrl={p.imageUrl} description={p.description} />)}</>
  );
};

export default App;
