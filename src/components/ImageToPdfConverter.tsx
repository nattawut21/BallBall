import React, { useState, useRef } from "react";
import jsPDF from "jspdf";
import ImageComponent from "@/components/ImageComponent";

interface ImageToPdfConverterProps {
  initialImage?: string;
}

const ImageToPdfConverter: React.FC<ImageToPdfConverterProps> = ({
  initialImage,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    initialImage || null
  );
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
    }
  };

  const handleImageImport = () => {
    fileInputRef.current?.click();
  };

  const handleDownloadPDF = () => {
    if (selectedImage) {
      const pdf = new jsPDF();
      pdf.addImage(selectedImage, "JPEG", 10, 10, 190, 150);
      pdf.save("image.pdf");
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
        ref={fileInputRef}
      />
     <div className="button-group">
      <button className="add-button" onClick={handleImageImport}>
        Import
      </button>
      <button className="download-button" onClick={handleDownloadPDF}>
        Download PDF
      </button>
  </div>
      {selectedImage && (
        <ImageComponent
          src={selectedImage}
          alt="Imported Image"
          width="100%"
          height="595px"
        />
      )}
    </div>
  );
};

export default ImageToPdfConverter;
