import React from 'react';

interface ImageComponentProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt, width, height }) => {
  const imageStyles = {
    width: width || '100px',
    height: height || 'auto',
  };

  return (
    <div>
      <img src={src} alt={alt} style={imageStyles} />
    </div>
  );
};

export default ImageComponent;
