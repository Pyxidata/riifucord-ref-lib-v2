import React from 'react';
import defaultColor from '../colors.json';
import kevin from '../../assets/kevin.png';

interface BottomBarTheme {
  surface: string | undefined;
  secondary: string | undefined;
}

const BottomBar: React.FC<BottomBarTheme> = ({
  surface = defaultColor.surface, 
  secondary = defaultColor.secondary,
}) => {
  return (
    <>
      <div className="p-4 flex items-center justify-center w-screen absolute bottom-0" 
        style={{ backgroundColor: surface, color: secondary }}> 
        <img src={kevin} alt="Profile" className="w-12 h-12 rounded-full my-4 mr-4 gap-1" /> 
        <div>
          <p className="text-xs">
            This website was made by kevin.
            <br/>
            Contact me if you want an account to edit your page or create your own page.
          </p>

        </div>
      </div>
    <div className="h-28" />
    </>
  );
};

export default BottomBar;