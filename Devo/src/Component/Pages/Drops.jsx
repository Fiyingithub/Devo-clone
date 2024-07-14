import React, { useState, useEffect, useRef } from 'react';
import dropBg from '../../assets/screenshots-background.jpg';
import screenshot1 from '../../assets/screenshot-1.png';
import screenshot2 from '../../assets/screenshot-2.png';
import screenshot3 from '../../assets/screenshot-3.png';
import screenshot4 from '../../assets/screenshot-4.png';
import screenshot5 from '../../assets/screenshot-5.png';
import screenshot6 from '../../assets/screenshot-6.png';
import screenshot7 from '../../assets/screenshot-7.png';
import screenshot8 from '../../assets/screenshot-8.png';
import screenshot9 from '../../assets/screenshot-9.png';
import screenshot10 from '../../assets/screenshot-10.png';
import './Drops.css';

const Drops = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const imageRefs = useRef([]);

  useEffect(() => {
    // Simulate fetching images
    const fetchImages = () => {
      const screenshots = [
        screenshot1,
        screenshot2,
        screenshot3,
        screenshot4,
        screenshot5,
        screenshot6,
        screenshot7,
        screenshot8,
        screenshot9,
        screenshot10,
      ];
      setTimeout(() => {
        setImages(screenshots);
        setLoading(false);
      }, 1000); // Simulate a 1-second delay
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1, // Trigger animation when 10% of the image is visible
      }
    );

    imageRefs.current.forEach((img) => {
      if (img) {
        observer.observe(img);
      }
    });

    return () => {
      if (imageRefs.current) {
        imageRefs.current.forEach((img) => {
          if (img) {
            observer.unobserve(img);
          }
        });
      }
    };
  }, [images]);

  return (
    <div
      className='drops-container'
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${dropBg})`,
      }}
    >
      {loading ? (
        <div className='text-white m-auto'>Loading...</div>
      ) : (
        <div className='images-wrapper'>
          {images.map((src, index) => (
            <img
              key={index}
              ref={(el) => (imageRefs.current[index] = el)}
              className='md:w-[250px] w-[300px] h-[400px] md:h-[500px] animated-image'
              src={src}
              alt={`Screenshot ${index + 1}`}
              style={{ animationDelay: `${index * 0.4}s` }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Drops;
