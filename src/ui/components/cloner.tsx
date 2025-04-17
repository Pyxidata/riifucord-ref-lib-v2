import React, { useState, useEffect } from 'react';
import { database } from '../../firebase-config';
import cloneArtistData from '../util/cloneArtistData';

interface ClonerProps {
  destinationUid?: string | null;
}

export default function Cloner({ destinationUid }: ClonerProps) {
  const [inputUid, setInputUid] = useState('');
  const [devMode, setDevMode] = useState(false);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    // setDevMode(false);
    const handleKeyDown = (event: KeyboardEvent) => {
      setTypedText((prevText) => {
        const newText = prevText + event.key;
        if (newText.toLowerCase().includes('/revealcloner')) {
          setDevMode(true);
          return ''; // Reset typedText
        }
        return newText.slice(-13); // Keep last 13 characters
      });
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleClone = async () => {
    if (destinationUid) {
      try {
        await cloneArtistData(database, inputUid, destinationUid);
        alert('Artist data cloned successfully!');
      } catch (error) {
        console.error('Clone failed:', error);
        alert('Failed to clone artist data.');
      }
    }
  };

  if (!devMode) {
    return null; // Don't render anything if not in dev mode
  }

  return (
    <div className="flex items-center pt-3 w-full gap-4">
      <input
        type="text"
        value={inputUid}
        onChange={(e) => setInputUid(e.target.value)}
        placeholder="Artist UID"
        className="pl-1 focus:outline-none border border-teal-500 w-full"
      />
      <button
        onClick={handleClone}
        className="text-black bg-teal-500 font-bold px-2"
      >
        Clone
      </button>
    </div>
  );
}