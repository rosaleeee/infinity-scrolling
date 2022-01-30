import React from 'react';

type PhotoProps = {
  imageUrl: string;
  description: string;
};

const Photo: React.FC<PhotoProps> = ({ imageUrl, description }) => {
  return (
    <figure>
      <img src={imageUrl} alt="사진" />
      <figcaption>{description}</figcaption>
    </figure>
  );
};

export default Photo;
