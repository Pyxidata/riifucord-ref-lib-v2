import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import logo from '../../assets/logo.gif';
import defaultColor from '../colors.json';
import pfp from '../../assets/pfp.png';
import { database } from '../../firebase-config';
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import { DataSnapshot, onValue, ref } from 'firebase/database';
import { Artist } from '../objects/artist';

interface TopBarTheme {
  bg: string | undefined;
  surface: string | undefined;
  primary: string | undefined;
  secondary: string | undefined;
  highlight: string | undefined;
}

const TopBar: React.FC<TopBarTheme> = ({
  bg = defaultColor.bg,
  surface = defaultColor.surface, 
  primary = defaultColor.primary,
  secondary = defaultColor.secondary,
  highlight = defaultColor.highlight,
}) => {

  const { currentUser, login, logout } = useAuth(); 
  const navigate = useNavigate();
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [currentUserPfp, setCurrentUserPfp] = useState<string>(pfp);
  
    useEffect(() => {
      if (!database || !currentUser) {
        setCurrentUserPfp(pfp);
        return;
      }
  
      const artistRef = ref(database, `profiles/${currentUser.uid}`);
  
      const unsubscribe = onValue(artistRef, (snapshot: DataSnapshot) => {
        if (snapshot.exists()) {
          const artistData: Artist = snapshot.val() as Artist;
  
          if (artistData && artistData.pfp) {
            setCurrentUserPfp(artistData.pfp);
          } else {
            setCurrentUserPfp(pfp);
          }
        } else {
          setCurrentUserPfp(pfp);
        }
      });
  
      return () => unsubscribe();
    }, [database, currentUser, pfp]);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  const toggleLoginForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
    setId("");
    setPassword("");
  };

  const handleLoginSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); 

    try {
      await login(id.trim() + "@riifuRefLib.com", password);
      setIsLoginFormVisible(false);
    } catch (error) {
      setError("Wrong username and/or password");
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 shadow-md px-8 h-16"
        style={{ backgroundColor: surface, color: primary }}
      > 
        <div className="container mx-auto flex justify-between items-center py-2">

          {/* WEBSITE LOGO AND NAME */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('//')}>
            <img src={logo} alt="Logo" className="w-8 h-8 md:w-10 md:h-10 mr-4 rounded-full cursor-pointer" /> 
            <h1 className="text-xs sm:text-sm md:text-xl">Riifucord Reference Library v2</h1> 
          </div>

          {/* LOGGED IN USER PROFILE SECTION */}
          <div className="flex items-center ml-8">
            {currentUser ? (
              <>
                <img 
                  src={currentUserPfp}  
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover shrink-0" 
                />

                {/* LOGOUT BUTTON */}
                <button className="py-2 px-4" 
                  onClick={handleLogout}>
                  <AiOutlineLogout className="text-lg" size={32} />
                </button>
              </>
            ) : (
              <>

                {/* LOGIN BUTTON */}
                <button className="py-2 pl-4" onClick={toggleLoginForm}>
                  <div className="flex items-center gap-4">
                    <p>Login</p>
                    <AiOutlineLogin className="text-lg" size={32} />
                  </div>
                </button>

                {/* LOGIN POPUP */}
                {isLoginFormVisible && (
                  <>
                    <div className="absolute w-screen h-screen left-0 top-0 bg-black/50" onClick={toggleLoginForm}/>
                    <div className="absolute right-4 ml-4 top-20 p-4 shadow-md border" style={{ backgroundColor: surface }}> 
                      <form onSubmit={handleLoginSubmit}> 
                        {error && <p className="mb-2" style={{ color: highlight }}>{error}</p>} 
                        <input 
                          type="ID" 
                          placeholder="ID" 
                          className="border p-2 mb-2 w-full"
                          style= {{ borderColor: secondary, color: primary }} 
                          value={id} 
                          onChange={(e) => setId(e.target.value)} 
                        />
                        <input 
                          type="password" 
                          placeholder="Password" 
                          className="border p-2 mb-4 w-full" 
                          style= {{ borderColor: secondary, color: primary }} 
                          value={password} 
                          onChange={(e) => setPassword(e.target.value)} 
                        />
                        <button className="text-white font-bold py-2 px-4"
                          style={{ backgroundColor: primary, color: surface }}>
                          Log In
                        </button>
                      </form>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="h-16" />
    </>
  );
};

export default TopBar;