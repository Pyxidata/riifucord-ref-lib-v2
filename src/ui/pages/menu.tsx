import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { database } from '../../firebase-config';
import { ref, onValue } from 'firebase/database'; 
import { useAuth } from '../../context/authContext.tsx';
import pfp from '../../assets/pfp.png';
import TopBar from '../components/topbar';
import BottomBar from '../components/bottombar';
import defaultColor from '../colors.json';
import spin from '../../assets/spin.gif';
import ded from '../../assets/ded.png';
import ohufgh from '../../assets/ohufgh.mp3';

interface Profile {
  id: string;
  name: string;
  pfp: string;
}

export const Menu: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProfiles, setFilteredProfiles] = useState<Profile[]>(profiles);
  const [isDed, setIsDed] = useState(false);
  const audioRef = useRef(new Audio(ohufgh));
  const { currentUser } = useAuth(); 

  useEffect(() => {
    const profilesRef = ref(database, 'profiles');

    const unsubscribe = onValue(profilesRef, (snapshot) => {
      const data = snapshot.val(); 
      if (data) {
        const profileArray: Profile[] = Object.entries<Profile>(data).map(([key, value]) => ({
          id: key,
          name: value.name, 
          pfp: value.pfp || pfp
        }));
        setProfiles(profileArray);
      } else {
        setProfiles([]);
      }
    });

    audioRef.current.preload = 'auto'; // Or 'metadata'

    return () => unsubscribe(); 
  }, []);

  useEffect(() => {
    const filterProfiles = () => {
      if (!searchTerm) {
        setFilteredProfiles(profiles); // Reset to original profiles if search is empty
        return;
      }

      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const filtered = profiles.filter((profile) => {
        const searchableText = `${profile.name} `.toLowerCase(); // Include other fields if needed
        return searchableText.includes(lowerCaseSearchTerm);
      });
      setFilteredProfiles(filtered);
    };

    filterProfiles(); // Call filter function whenever searchTerm or profiles changes
  }, [searchTerm, profiles]);

  return (
    <div className="relative min-h-screen" style={{
      backgroundImage: "url('https://raw.githubusercontent.com/Pyxidata/riifucord-ref-lib-v2/refs/heads/main/src/assets/menuBg.jpg')", // background image
      backgroundColor: defaultColor.bbg,  // default background color
      backgroundSize: 'cover', 
      backgroundPosition: 'center' ,
      backgroundAttachment: 'fixed',
      color: defaultColor.primary,
    }}
     >
      <TopBar 
        bg={undefined}
        surface={undefined}
        primary={undefined}
        secondary={undefined}
        highlight={undefined}
        userPfp={profiles.find(artist => artist.id === currentUser?.uid)?.pfp}
      />

      <div className="container mx-auto flex justify-center items-center w-full h-full">
        <div className="py-16">
          <div className={"shadow-md p-4 max-w-screen-md"} style={{ backgroundColor: defaultColor.bg }}>

            {/* TITLE */}
            <div className="px-4 py-4 gap-4 text-center" style={{ backgroundColor: defaultColor.surface }}>
              <div className="mb-8 space-y-4 mx-8 my-8 flex flex-col items-center">
                <img src={isDed ? ded : spin} className="w-48 h-48" onClick={() => { setIsDed(true); if(!isDed)audioRef.current.play(); }}/>
                <h1 className="text-4xl">Riifucord Reference Library v2</h1>
                <p style={{ color: defaultColor.secondary }}>Editable OC reference sheets, descriptions, and galleries for cafe art sheeps!</p>
              </div>
            </div>

            {/* PROFILES */}
            <div className="mt-4 px-4 py-4" style={{ backgroundColor: defaultColor.surface }}>
              <div className="overflow-y-auto">

                <h2 className="text-2xl font-semibold mb-4">Art Sheep List</h2>

                {/* Search Bar */}
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Filter by name..."
                    className="w-full border pl-3 py-2 focus:outline-none bg-transparent"
                    style={{ borderColor: defaultColor.primary }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <hr style={{ borderColor: defaultColor.secondary}}/>

                {/* PROFILE LIST */}
                <ul className="space-y-4 mt-4 mx-4">
                  {filteredProfiles.sort((a, b) => a.name.localeCompare(b.name)).map((profile) => ( // Use filteredProfiles here
                    <li key={profile.id}>
                      <Link to={{ pathname: "/ref/", search: `?uid=${profile.id}`, }}>
                      
                        <div className="flex items-center space-x-4">
                          <img src={profile.pfp} className="w-12 h-12 rounded-full" alt={profile.name} />
                          <span>{profile.name}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomBar 
        secondary={undefined}
        surface={undefined}/>
    </div>
  );
};

export default Menu;