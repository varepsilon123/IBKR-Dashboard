import React, { useEffect, useState } from 'react';
import AuthCheck from '../AuthCheck/AuthCheck';

const Home: React.FC = () => {
  const [headerZoomed, setHeaderZoomed] = useState(true);
  const [showParagraph, setShowParagraph] = useState(false);
  const [showCard, setShowCard] = useState(false);

  // Effect to zoom the header after 2 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setHeaderZoomed(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Effect to show the paragraph 1.2 second after the header is zoomed
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParagraph(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, [headerZoomed]);

  // Effect to show the card after the paragraph is shown
  useEffect(() => {
    if (showParagraph) {
      const cardTimer = setTimeout(() => {
        setShowCard(true);
      }, 700);

      return () => clearTimeout(cardTimer);
    }
  }, [showParagraph]);

  return (
    <>
      <h1
        className={`transition-all duration-1000 ease-in-out ${
          headerZoomed
            ? 'scale-150 translate-y-full' : 'scale-100'
        } mt-72 text-center animate-fadeIn`}
      >IBKR Dashboard</h1>
      {showParagraph && (
        <p className="mt-3 animate-fadeIn">
          Click the menu button on the top left corner to explore the application.
        </p>
      )}
      {showCard && (
        <div className="card mt-10 animate-fadeIn">
          <AuthCheck />
        </div>
      )}
    </>
  );
};

export default Home;
