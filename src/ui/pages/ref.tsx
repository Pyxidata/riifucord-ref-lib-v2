import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { database } from '../../firebase-config';
import { ref, onValue, update, push, remove, DataSnapshot } from 'firebase/database';
import { useAuth } from '../../context/authContext.tsx';
import pfp from '../../assets/pfp.png';
import imgTipA from '../../assets/imageTipA.png';
import imgTipB from '../../assets/imageTipB.png';
import imgTipC from '../../assets/iamgeTipC.png';
import { BsArrowLeft } from 'react-icons/bs';
import { Artist } from '../objects/artist.tsx';
import TopBar from '../components/topbar.tsx';
import BottomBar from '../components/bottombar.tsx';
import { RiImageEditFill, RiCheckboxLine, RiCloseLine, RiQuestionLine } from 'react-icons/ri';
import defaultColor from '../colors.json';
import { renderWithLineBreaks } from '../util/functions.tsx';
import Constants from '../constants.json';
import { RgbaStringColorPicker } from 'react-colorful';
import Dialog from '../components/dialog.tsx';
import Cloner from '../components/cloner.tsx';

enum DialogState {
  Closed,
  ImageUrlTip,
  SortingTagTip,
}

interface Label {
  text: string,
}

export const Ref: React.FC = () => {
  const uid = new URLSearchParams(location.hash.split('?')[1]).get("uid");
  const [artist, setArtist] = useState<Artist | null>(null);
  const navigate = useNavigate(); 
  const [isEditMode, setIsEditMode] = useState(false); 
  const [newArtist, setNewArtist] = useState(artist);
  const { currentUser } = useAuth(); 
  const [isColorEditorOpen, setIsColorEditorOpen] = useState(false);
  const [dialogState, setDialogState] = useState(DialogState.Closed);
  const [showOcDeleteBtn, setShowOcDeleteBtn] = useState(false);

  useEffect(() => {
    if (!uid) return;

    const artistRef = ref(database, `profiles/${uid}`);

    const unsubscribe = onValue(artistRef, (snapshot) => {
      const artistData = snapshot.val();
      if (artistData) {
        setArtist(artistData);
        setNewArtist(artistData);
        if (!artistData.theme) {
          resetColors()
        }
      } else {
        setArtist(null);
      }
    });

    return () => unsubscribe();
  }, [uid, database]);

  useEffect(() => {
    if (!currentUser) setIsEditMode(false)
  }, [currentUser])

  const updateDb = () => {
    update(ref(database, `profiles/${uid}`), { 
      name: newArtist?.name || null,
      desc: newArtist?.desc || null,
      longDesc: newArtist?.longDesc || null,
      bg: newArtist?.bg || null,
      pfp: newArtist?.pfp || null,
      theme: newArtist?.theme || null,
      oc: newArtist?.oc || null,
    })
  }

  const addOc = () => {
    if ((isEditMode && artist && artist.oc ? Object.keys(artist.oc).length : 0) < Constants.max_oc) {
      const newOcRef = push(ref(database, `profiles/${uid}/oc`));
      const newOcId = newOcRef.key;

      if (newOcId) {
        const newOc: {
          sortingTag: string;
          name: string;
          ref: string;
        } = {
          sortingTag: `-${1000000000000000 - Date.now()}`,
          name: "New OC",
          ref: "",
        };
        update(newOcRef, newOc);
      }
    }
  }

  const addLink = (ocId: string) => {
    if ((isEditMode && artist && artist.oc && artist.oc[ocId].links ? Object.keys(artist.oc[ocId].links).length : 0) < Constants.max_links) {
      const newLinkRef = push(ref(database, `profiles/${uid}/oc/${ocId}/links`));
      const newLinkId = newLinkRef.key; 

      if (newLinkId) {
        const newLink: { 
          label: string; 
          url: string; 
          sortingTag: string;
        } = { 
          label: "Link", 
          url: "https://example.com/", 
          sortingTag: `-${1000000000000000 - Date.now()}`
        }; 
        update(newLinkRef, newLink);
      }
    }
  };

  const addGalleryImage = (ocId: string) => {
    if ((isEditMode && artist && artist.oc && artist.oc[ocId].gallery ? Object.keys(artist.oc[ocId].gallery).length : 0) < Constants.max_gallery) {
      const newGalleryRef = push(ref(database, `profiles/${uid}/oc/${ocId}/gallery`));
      const newGalleryId = newGalleryRef.key; 

      if (newGalleryId) {
        const newGallery: { 
          desc: string; 
          credit: string; 
          sortingTag: string;
          img: string;
        } = { 
          desc: "", 
          credit: "", 
          img: "https://picsum.photos/200/300",
          sortingTag: `-${1000000000000000 - Date.now()}`
        }; 
        update(newGalleryRef, newGallery);
      }
    }
  };

  const resetColors = () => {
    update(ref(database, `profiles/${uid}`), { 
      theme: {
        primary: defaultColor.primary,
        secondary: defaultColor.secondary,
        bg: defaultColor.bg,
        surface: defaultColor.surface,
        highlight: defaultColor.highlight,
        width: artist?.theme.width || "max-w-screen-md",
        font: artist?.theme.font || "sans-serif",
      },
    })
  }

  const ImageUrlTipLabel: React.FC<Label> = (label) => {
    return (
      <div className="flex gap-2 items-center text-xs text-teal-500 mb-1">
        {label.text}
        <button onClick={() => setDialogState(DialogState.ImageUrlTip)}>
          <RiQuestionLine/>
        </button>
      </div>
    );
  };

  const SortingTagTipLabel: React.FC<Label> = (label) => {
    return (
      <div className="flex gap-2 items-center text-xs text-teal-500 mb-1">
        {label.text}
        <button onClick={() => setDialogState(DialogState.SortingTagTip)}>
          <RiQuestionLine/>
        </button>
      </div>
    );
  };

  return (
    <div className="relative h-min-full" style={{ 
      color: artist?.theme.primary || defaultColor.primary,
      fontFamily: artist?.theme.font || "sans-serif",
    }}> 

      <div className="fixed w-[100vw] h-[100vh] z-0" style={{
        backgroundImage: `url(${artist?.bg})`, // background image
        backgroundColor: defaultColor.bbg,  // default background color
        backgroundSize: 'cover', 
        backgroundPosition: 'top' ,
        backgroundAttachment: 'fixed',
      }}/>

      <TopBar 
        bg={defaultColor.bg}
        surface={artist?.theme.surface}
        primary={artist?.theme.primary}
        secondary={artist?.theme.secondary}
        highlight={artist?.theme.highlight}
      />

      <div className="relative container mx-auto flex justify-center items-center h-full z-10">
        <div className={`shadow-md p-4 w-full my-16 ${artist?.theme.width} flex flex-col gap-4`}
          style={{ backgroundColor: artist?.theme.bg }}> 
          <div className="flex justify-between">
            {/* BACK BUTTON */}
            <button
              onClick={() => navigate(-1)}
            >
              <BsArrowLeft size={24} /> 
            </button>

            {/* EDITOR MODE TOGGLE BUTTON */}
            {currentUser && currentUser.uid == uid &&
              <button onClick={() => { if (isEditMode) updateDb(); setShowOcDeleteBtn(false); setIsEditMode(!isEditMode)} }>
                <div className="flex gap-2 underline">
                  {isEditMode ? 'Stop Editing' : 'Start Editing'}
                  {isEditMode ? <RiCheckboxLine size={24} /> : <RiImageEditFill size={24} /> }
                </div>
              </button> 
            }
          </div>

          <Cloner destinationUid={uid}/>

          {/* PLACEHOLDER FOR NONEXISTENT ARTIST */}
          {!artist && (
            <div className="flex items-center justify-center">
              <h1><br/><br/><br/>Page not found!<br/>or could just be loading...<br/><br/><br/></h1>
          </div>
          )}

          {/* ARTIST PROFILE */}
          {artist && (artist?.pfp || artist?.name || artist?.desc || artist?.longDesc || isEditMode) && (
            <div className="mt-4 p-4" style={{ backgroundColor: artist?.theme.surface }}>
              <div className="flex items-center">
                <img
                  src={artist.pfp || pfp}
                  className="w-20 h-20 rounded-full object-cover mr-8 ml-4 my-4 shrink-0"
                />
                <div className="w-full truncate">
                  {isEditMode && <p className="text-xs text-teal-500 mb-1 w-full">Artist name</p>}
                  <h1 className="text-lg font-bold w-full">
                    {isEditMode ? <input className="bg-transparent pl-1 focus:outline-none border border-teal-500 w-full mb-4" 
                      onBlur={() => updateDb()}
                      value={newArtist?.name || ""} 
                      onChange={(e) => {setNewArtist({ ...artist, name: e.target.value})}}
                    /> : 
                    <div className="w-full flex items-end gap-1">
                      {artist.name}
                      <p className="text-xs mb-1" style={{ color: artist?.theme.highlight }}>(artist)</p>
                    </div>}
                  </h1>

                  {isEditMode && <p className="text-xs text-teal-500 mb-1 w-full">Brief description</p>}
                  <div className="text-sm w-full" style={{ color: artist?.theme.secondary }}>
                    {isEditMode ? <input className="bg-transparent pl-1 focus:outline-none border border-teal-500 w-full mb-4" 
                      onBlur={() => updateDb()}
                      value={newArtist?.desc || ""} 
                      onChange={(e) => {setNewArtist({ ...artist, desc: e.target.value})}}
                    /> : artist.desc}
                  </div>
                </div>
              </div>

              {isEditMode &&
              <div className="my-4">

                {/* PFP EDIT */}
                <ImageUrlTipLabel text="Profile picture URL" />
                <input className="bg-transparent pl-1 focus:outline-none border border-teal-500 w-full mb-4"
                    onBlur={() => updateDb()}
                    value={newArtist?.pfp || ""} 
                    onChange={(e) => {setNewArtist({ 
                      ...artist, pfp: e.target.value})}} />

                {/* BG IMAGE EDIT */}
                <ImageUrlTipLabel text="Background image URL"/>
                <input className="bg-transparent pl-1 focus:outline-none border border-teal-500 w-full"
                    onBlur={() => updateDb()}
                    value={newArtist?.bg || ""} 
                    onChange={(e) => {setNewArtist({ 
                      ...artist, bg: e.target.value})}} />
              </div>
              }
              
              {/* DETAILED ARTIST DESCRIPTION */}
              {(artist.longDesc || isEditMode) && <div className="mt-4 w-full overflow-hidden text-ellipsis">
                {isEditMode && <p className="text-xs text-teal-500 mb-1">Detailed description text</p>}
                {isEditMode ? <textarea className="bg-transparent pl-1 focus:outline-none border border-teal-500 w-full h-48" 
                  onBlur={() => updateDb()}
                  value={newArtist?.longDesc || ""} 
                  onChange={(e) => {setNewArtist({ ...artist, longDesc: e.target.value})}}
                /> : renderWithLineBreaks(artist.longDesc || "")}
              </div>}
              
              {isEditMode && <>
                <h4 className="text-lg text-teal-500 font-semibold mt-4">Theme Settings</h4>
                <p className="text-xs text-teal-500 mb-4">*Theme changes are also local - you are setting a unique theme just for your page.</p>

                <div className="w-full flex">

                  {/* WIDTH CHOOSER */}
                  <div className="w-full mr-4">
                    <p className="text-xs text-teal-500 mb-1">Width</p>
                    <select className="border border-teal-500 mb-4 w-full" value={artist?.theme.width} style={{ backgroundColor: artist?.theme.surface }}
                      onChange={(e) => {setNewArtist({ ...artist, theme: {...artist.theme, width: e.target.value}})}}
                      onClick={() => updateDb()}>
                      <option value="max-w-screen-sm">Small</option>
                      <option value="max-w-screen-md">Medium</option>
                      <option value="max-w-screen-lg">Large</option>
                      <option value="max-w-screen-xl">Extra Large</option>
                    </select>
                  </div>

                  {/* FONT CHOOSER */}
                  <div className="w-full">
                    <p className="text-xs text-teal-500 mb-1">Font</p>
                    <select className="border border-teal-500 mb-4 w-full" value={artist?.theme.font} style={{ backgroundColor: artist?.theme.surface }}
                      onChange={(e) => {setNewArtist({ ...artist, theme: {...artist.theme, font: e.target.value}})}}
                      onClick={() => updateDb()}>
                      <option value="sans-serif" style={{fontFamily:"sans-serif"}}>Sans Serif - DEFAULT</option>
                      <option value="Arial, sans-serif" style={{fontFamily:"Arial, sans-serif"}}>Arial</option>
                      <option value="Verdana, sans-serif" style={{fontFamily:"Verdana, sans-serif"}}>Verdana</option>
                      <option value="Tahoma, sans-serif" style={{fontFamily:"Tahoma, sans-serif"}}>Tahoma</option>
                      <option value="Trebuchet MS, sans-serif" style={{fontFamily:"Trebuchet MS, sans-serif"}}>Trebuchet MS</option>

                      <option value="Times New Roman, serif" style={{fontFamily:"Times New Roman, serif"}}>Times New Roman</option>
                      <option value="Georgia, serif" style={{fontFamily:"Georgia, serif"}}>Georgia</option>
                      <option value="Garamond, serif" style={{fontFamily:"Garamond, serif"}}>Garamond</option>
                      <option value="Vidaloka, serif" style={{ fontFamily: "Vidaloka, serif" }}>Vidaloka</option>

                      <option value="monospace" style={{fontFamily:"monospace"}}>Monospace</option>
                      <option value="Courier New, monospace" style={{fontFamily:"Courier New, monospace"}}>Courier New</option>
                      <option value="Lucida Console, monospace" style={{fontFamily:"Lucida Console, monospace"}}>Lucida Console</option>
                      <option value="Monaco, monospace" style={{fontFamily:"Monaco, monospace"}}>Monaco</option>
                      <option value="Consolas, monospace" style={{fontFamily:"Consolas, monospace"}}>Consolas</option>

                      <option value="Brush Script MT, cursive" style={{fontFamily:"Brush Script MT, cursive"}}>Brush Script MT</option>
                      <option value="Lucida Handwriting, cursive" style={{fontFamily:"Lucida Handwriting, cursive"}}>Lucida Handwriting</option>
                      <option value="Comic Sans MS, cursive" style={{fontFamily:"Comic Sans MS, sans-serif"}}>Comic Sans MS</option>
                      <option value="Edwardian Script ITC, cursive" style={{ fontFamily: "Edwardian Script ITC, cursive" }}>Edwardian Script ITC</option>
                      <option value="Mistral, cursive" style={{ fontFamily: "Mistral, cursive" }}>Mistral</option>
                      
                      <option value="Copperplate, fantasy" style={{fontFamily:"Copperplate, fantasy"}}>Copperplate</option>
                      <option value="Papyrus, fantasy" style={{fontFamily:"Papyrus, fantasy"}}>Papyrus</option>
                      <option value="Harrington, fantasy" style={{fontFamily:"Harrington, fantasy"}}>Harrington</option>
                      <option value="Old English Text MT, fantasy" style={{ fontFamily: "Old English Text MT, fantasy" }}>Old English Text MT</option>
                    </select>
                  </div>
                </div>

                {/* COLOR PICKERS */}
                <p className="text-xs text-teal-500 mb-1">UI colors</p>
                <div className="text-white font-bold flex pb-4">
                  <button className="px-2" onClick={() => setIsColorEditorOpen(!isColorEditorOpen)}
                    style={{ backgroundColor: defaultColor.primary, color: defaultColor.surface }}>
                    {isColorEditorOpen ? "Close ▲" : "Open Color Editor ▼"}
                  </button>

                  {isColorEditorOpen && <button className="px-2 ml-4" onClick={() => updateDb()}
                  style={{ backgroundColor: artist?.theme.primary, color: artist?.theme.surface }}>
                  Apply </button>}

                  {isColorEditorOpen && <button className="px-2 ml-4" onClick={() => resetColors()}
                  style={{ backgroundColor: defaultColor.primary, color: defaultColor.surface }}>
                  Reset </button>}
                </div>

                {isColorEditorOpen && <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center mb-8 pb-4">
                  <div>
                    <p className="text-xs text-teal-500 mb-1">Primary - texts & buttons</p>
                    <RgbaStringColorPicker color={artist?.theme.primary} onChange={(e) => {setNewArtist({ ...artist, theme: {...artist.theme, primary: e}})}}/>
                  </div>

                  <div>
                    <p className="text-xs text-teal-500 mb-1">Secondary - minor texts</p>
                    <RgbaStringColorPicker color={artist?.theme.secondary} onChange={(e) => {setNewArtist({ ...artist, theme: {...artist.theme, secondary: e}})}}/>
                  </div>

                  <div>
                    <p className="text-xs text-teal-500 mb-1">Background - borders</p>
                    <RgbaStringColorPicker color={artist?.theme.bg} onChange={(e) => {setNewArtist({ ...artist, theme: {...artist.theme, bg: e}})}}/>
                  </div>

                  <div>
                    <p className="text-xs text-teal-500 mb-1">Surface - containers & bars</p>
                    <RgbaStringColorPicker color={artist?.theme.surface} onChange={(e) => {setNewArtist({ ...artist, theme: {...artist.theme, surface: e}})}}/>
                  </div>
                  
                  <div>
                    <p className="text-xs text-teal-500 mb-1">Highlight - links & warnings</p>
                    <RgbaStringColorPicker color={artist?.theme.highlight} onChange={(e) => {setNewArtist({ ...artist, theme: {...artist.theme, highlight: e}})}}/>
                  </div>
                </div>}
              </>}

            {/* OC ADD BUTTON */}
            {isEditMode && <>
              <p className="text-xs text-teal-500 mb-1 mt-4">OC - max. {Constants.max_oc}</p>

              <button className="text-white font-bold px-2 w-full" onClick={() => addOc()}
                style={{ backgroundColor: artist?.theme.primary, color: artist?.theme.surface }}>
                Create New OC Page +
              </button>
            </>}

            </div>
          )}

          {/* OC LIST */}
          {artist && (artist.oc || isEditMode) && (
            <div className="flex flex-col gap-4"> 
              {artist.oc && Object.entries(artist.oc).sort((a, b) => a[1].sortingTag.localeCompare(b[1].sortingTag)).map(([ocId, oc]) => (

                // OC CARD
                <div key={ocId} className="shadow-md px-4" style={{ backgroundColor: artist?.theme.surface }}>
                  
                  {isEditMode && <div className="flex items-top justify-between mt-4">
                    <div className="flex flex-col w-32">
                      <SortingTagTipLabel text="Tag"/>

                      <input className="bg-transparent pl-1 focus:outline-none border border-teal-500 mb-4"
                          onBlur={() => updateDb()}
                          value={newArtist?.oc[ocId].sortingTag || ""} 
                          onChange={(e) => {setNewArtist({ 
                            ...artist, oc: { ...artist.oc, [ocId]: {
                              ...artist.oc[ocId], 
                              sortingTag: e.target.value}}})}} />
                    </div>
                              
                    <div className="flex gap-4">
                      {showOcDeleteBtn && <button className="text-white font-bold px-2 h-6 mb-4" onClick={() => {setShowOcDeleteBtn(false); remove(ref(database, `profiles/${uid}/oc/${ocId}`))}}
                        style={{ backgroundColor: artist?.theme.primary, color: artist?.theme.surface }}>
                        Delete
                      </button>}

                      <button className="text-white font-bold px-2 h-6 mb-4"  onClick={() => {setShowOcDeleteBtn(!showOcDeleteBtn)}}
                        style={{ backgroundColor: artist?.theme.primary, color: artist?.theme.surface }}>
                        {showOcDeleteBtn ? "Cancel" : "Delete"}
                      </button>
                    </div>
                  </div>}

                  {/* OC PROFILE */}
                  <div className="my-4 w-full">
                    <div className="flex items-center gap-8 mb-4 w-full"> 
                      {/* {oc.pfp && (
                        <a href={oc.pfp} target="_blank" rel="noopener noreferrer"> 
                          <img src={oc.pfp || pfp} className="w-32 aspect-square object-cover w-full h-full"/> 
                        </a>
                      )} */}

                      <div className="w-full">
                        {isEditMode && <p className="text-xs text-teal-500 mb-1 w-full">Character name</p>}
                        <h3 className="text-2xl font-bold mb-2 w-full truncate flex items-center">
                          {isEditMode ? (
                            <div className="flex flex-col w-full">
                              <input
                                className="bg-transparent pl-1 border border-teal-500 w-full mb-2 focus:outline-none"
                                onBlur={() => updateDb()}
                                value={newArtist?.oc[ocId].name || ""}
                                onChange={(e) =>
                                  setNewArtist({
                                    ...artist,
                                    oc: { ...artist.oc, [ocId]: { ...artist.oc[ocId], name: e.target.value } },
                                  })
                                }
                              />
                              <label className="flex items-center text-xs mb-2 w-16">
                                <input
                                  type="checkbox"
                                  className="h-4 w-4 text-teal-500"
                                  onBlur={() => updateDb()}
                                  checked={newArtist?.oc[ocId].isSona || false}
                                  onChange={(e) => {
                                    setNewArtist({
                                      ...artist,
                                      oc: { ...artist.oc, [ocId]: { ...artist.oc[ocId], isSona: e.target.checked } },
                                    });
                                  }}
                                />
                                <p className="text-ms ml-1 text-teal-500">Sona</p>
                              </label>
                            </div>
                          ) : (
                            <div className="flex items-end">
                              {oc.name}
                              {oc.isSona && <p className="ml-1 text-sm mb-1" style={{ color: artist?.theme.highlight }}>{"(Sona)"}</p>}
                            </div>
                          )}
                        </h3>
                        {isEditMode && <p className="text-xs text-teal-500 mb-1 w-full">Brief description</p>}
                        <div style={{ color: artist?.theme.secondary }} className="truncate">
                          {isEditMode ? (
                            <input
                              className="bg-transparent pl-1 border border-teal-500 w-full focus:outline-none"
                              onBlur={() => updateDb()}
                              value={newArtist?.oc[ocId].desc || ""}
                              onChange={(e) =>
                                setNewArtist({
                                  ...artist,
                                  oc: { ...artist.oc, [ocId]: { ...artist.oc[ocId], desc: e.target.value } },
                                })
                              }
                            />
                          ) : (
                            oc.desc
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* {isEditMode && <>
                    <ImageUrlTipLabel text="Character profile picture URL"/>

                    <input className="bg-transparent pl-1 focus:outline-none border border-teal-500 w-full mb-8"
                        onBlur={() => updateDb()}
                        value={newArtist?.oc[ocId].pfp || ""} 
                        onChange={(e) => {setNewArtist({ 
                          ...artist, oc: { ...artist.oc, [ocId]: {
                            ...artist.oc[ocId], 
                            pfp: e.target.value}}})}} />
                  </>} */}

                  {(oc.longDesc || isEditMode) && <div className="mb-4 truncate">
                    {isEditMode && <p className="text-xs text-teal-500 mb-1">Detailed description text</p>}
                    {isEditMode ? <textarea className="bg-transparent pl-1 focus:outline-none border border-teal-500 w-full h-48" 
                      onBlur={() => updateDb()}
                      value={newArtist?.oc[ocId].longDesc || ""} 
                      onChange={(e) => {setNewArtist({ 
                        ...artist, oc: { 
                          ...artist.oc, [ocId]: {
                            ...artist.oc[ocId], 
                            longDesc: e.target.value}}})}}
                    /> : <p className="mb-4">{renderWithLineBreaks(oc.longDesc || "")}</p>}
                  </div>}

                  {/* OC LINKS */}
                  {isEditMode && <div className="w-full">
                    
                    <p className="text-xs text-teal-500 mb-1">Hyperlink URLs - max. {Constants.max_links}</p>

                    <button className="text-white font-bold px-2 mb-4" onClick={() => addLink(ocId)}
                      style={{ backgroundColor: artist?.theme.primary, color: artist?.theme.surface }}>
                      Create New Link +
                    </button>

                    {oc.links && <div className="flex items-center gap-2 w-full mr-4 pr-4 text-xs text-teal-500">
                      <div className="w-2/6"><SortingTagTipLabel text="OC Tag"/></div>
                      <div className="w-2/6 mb-1"><p>Label</p></div>
                      <div className="w-2/6 mb-1"><p>URL</p></div>
                      <button className="invisible"> <RiCloseLine size={16} /> </button>
                    </div>} 
                  </div>}

                  {(oc.links) && Object.entries(oc.links).sort((a, b) => a[1].sortingTag.localeCompare(b[1].sortingTag)).map(([linkId, link]) => (
                    <div className="flex flex-col text-md" key={linkId}>
                      {isEditMode ? 
                        <div className="flex items-center gap-2 w-full mb-2">

                          <input className="bg-transparent pl-1 focus:outline-none border border-teal-500 w-2/6" 
                            onBlur={() => updateDb()}
                            value={newArtist?.oc[ocId].links[linkId].sortingTag || ""} 
                            onChange={(e) => {setNewArtist({ 
                              ...artist, oc: { 
                                ...artist.oc, [ocId]: {
                                  ...artist.oc[ocId], links: {
                                    ...artist.oc[ocId].links, [linkId]: {
                                      ...artist.oc[ocId].links[linkId], 
                                      sortingTag: e.target.value}}}}})}} />

                          <input className="bg-transparent pl-1 focus:outline-none border border-teal-500 w-2/6" 
                            onBlur={() => updateDb()}
                            value={newArtist?.oc[ocId].links[linkId].label || ""} 
                            onChange={(e) => {setNewArtist({ 
                              ...artist, oc: { 
                                ...artist.oc, [ocId]: {
                                  ...artist.oc[ocId], links: {
                                    ...artist.oc[ocId].links, [linkId]: {
                                      ...artist.oc[ocId].links[linkId], 
                                      label: e.target.value}}}}})}} /> 

                          <input className="bg-transparent pl-1 focus:outline-none border border-teal-500 w-2/6" 
                            onBlur={() => updateDb()}
                            value={newArtist?.oc[ocId].links[linkId].url || ""} 
                            onChange={(e) => {setNewArtist({ 
                              ...artist, oc: { 
                                ...artist.oc, [ocId]: {
                                  ...artist.oc[ocId], links: {
                                    ...artist.oc[ocId].links, [linkId]: {
                                      ...artist.oc[ocId].links[linkId], 
                                      url: e.target.value}}}}})}} /> 

                            <button onClick={() => remove(ref(database, `profiles/${uid}/oc/${ocId}/links/${linkId}`))}>
                              <RiCloseLine size={16} />
                            </button>
                        </div>
                        : <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: artist?.theme.highlight }} className='underline truncate'>
                      {link.label} </a>}
                    </div>
                  ))}

                  {/* OC REF SHEET (OPTIONAL) */}
                  {(oc.ref || isEditMode) && (
                    <div className="mb-4 mt-4">
                      <h4 className="text-lg font-semibold mb-2">Reference Sheet</h4>
                      {isEditMode ? 
                        <>
                          <img src={oc.ref} className="w-full object-contain"/>
                          <p className="text-xs text-teal-500 mt-2 mb-1">Reference sheet</p>
                          <input className="bg-transparent pl-1 focus:outline-none border border-teal-500 w-full mb-4"
                              onBlur={() => updateDb()}
                              value={newArtist?.oc[ocId].ref || ""} 
                              onChange={(e) => {setNewArtist({ 
                                ...artist, oc: { 
                                  ...artist.oc, [ocId]: {
                                    ...artist.oc[ocId], 
                                    ref: e.target.value}}})}} />
                        </> :
                        <a href={oc.ref} target="_blank" rel="noopener noreferrer"> 
                          <img src={oc.ref} className="w-full object-contain"/>
                        </a>
                      }
                    </div>
                  )}

                  {/* OC ART GALLERY */}
                  {isEditMode && (
                    <>
                      <h4 className="text-lg font-semibold mb-2">Character Art Gallery</h4>
                      <p className="text-xs text-teal-500 mt-2 mb-1">
                        Additional references, fanarts, etc. - max. {Constants.max_gallery}
                      </p>
                      <button
                        className="text-white font-bold px-2 mb-4"
                        onClick={() => addGalleryImage(ocId)}
                        style={{ backgroundColor: artist?.theme.primary, color: artist?.theme.surface }}
                      >
                        Create New Gallery Image +
                      </button>
                    </>
                  )}
                  {oc.gallery && (
                    <div className="mb-4">
                      {!isEditMode && <h4 className="text-lg font-semibold mb-2">Character Art Gallery</h4>}
                      <div
                        className={
                          isEditMode
                            ? "flex flex-col gap-8"
                            : Object.keys(oc.gallery).length > 3
                            ? "flex flex-wrap gap-4 justify-start max-h-[400px] md:max-h-[930px] overflow-y-auto"
                            : "flex flex-wrap gap-4 justify-start"
                        }
                      >
                        {Object.entries(oc.gallery)
                          .sort((a, b) => a[1].sortingTag.localeCompare(b[1].sortingTag))
                          .map(([galleryId, gallery]) => (
                            <div className="relative" key={galleryId}>
                              {isEditMode ? (
                                <>
                                  <img src={gallery.img} className="w-auto h-[200px] object-cover mb-2" />

                                  <div className="mb-1 ">
                                    <div className="flex gap-2 text-xs text-teal-500">
                                      <div className="w-1/6">
                                        <SortingTagTipLabel text="Tag" />
                                      </div>
                                      <p className="w-2/6">Description</p>
                                      <p className="w-1/6">Credit</p>
                                      <div className="w-2/6">
                                        <ImageUrlTipLabel text="URL" />
                                      </div>
                                      <button className="invisible">
                                        <RiCloseLine size={16} />
                                      </button>
                                    </div>
                                  </div>

                                  <div className="flex items-center gap-2 w-full">
                                    <input
                                      className="w-1/6 bg-transparent pl-1 focus:outline-none border border-teal-500"
                                      onBlur={() => updateDb()}
                                      value={newArtist?.oc[ocId].gallery[galleryId].sortingTag || ""}
                                      onChange={(e) => {
                                        setNewArtist({
                                          ...artist,
                                          oc: {
                                            ...artist.oc,
                                            [ocId]: {
                                              ...artist.oc[ocId],
                                              gallery: {
                                                ...artist.oc[ocId].gallery,
                                                [galleryId]: {
                                                  ...artist.oc[ocId].gallery[galleryId],
                                                  sortingTag: e.target.value,
                                                },
                                              },
                                            },
                                          },
                                        });
                                      }}
                                    />

                                    <input
                                      className="w-2/6 bg-transparent pl-1 focus:outline-none border border-teal-500"
                                      onBlur={() => updateDb()}
                                      value={newArtist?.oc[ocId].gallery[galleryId].desc || ""}
                                      onChange={(e) => {
                                        setNewArtist({
                                          ...artist,
                                          oc: {
                                            ...artist.oc,
                                            [ocId]: {
                                              ...artist.oc[ocId],
                                              gallery: {
                                                ...artist.oc[ocId].gallery,
                                                [galleryId]: {
                                                  ...artist.oc[ocId].gallery[galleryId],
                                                  desc: e.target.value,
                                                },
                                              },
                                            },
                                          },
                                        });
                                      }}
                                    />

                                    <input
                                      className="w-1/6 bg-transparent pl-1 focus:outline-none border border-teal-500"
                                      onBlur={() => updateDb()}
                                      value={newArtist?.oc[ocId].gallery[galleryId].credit || ""}
                                      onChange={(e) => {
                                        setNewArtist({
                                          ...artist,
                                          oc: {
                                            ...artist.oc,
                                            [ocId]: {
                                              ...artist.oc[ocId],
                                              gallery: {
                                                ...artist.oc[ocId].gallery,
                                                [galleryId]: {
                                                  ...artist.oc[ocId].gallery[galleryId],
                                                  credit: e.target.value,
                                                },
                                              },
                                            },
                                          },
                                        });
                                      }}
                                    />

                                    <input
                                      className="w-2/6 bg-transparent pl-1 focus:outline-none border border-teal-500"
                                      onBlur={() => updateDb()}
                                      value={newArtist?.oc[ocId].gallery[galleryId].img || ""}
                                      onChange={(e) => {
                                        setNewArtist({
                                          ...artist,
                                          oc: {
                                            ...artist.oc,
                                            [ocId]: {
                                              ...artist.oc[ocId],
                                              gallery: {
                                                ...artist.oc[ocId].gallery,
                                                [galleryId]: {
                                                  ...artist.oc[ocId].gallery[galleryId],
                                                  img: e.target.value,
                                                },
                                              },
                                            },
                                          },
                                        });
                                      }}
                                    />

                                    <button onClick={() => remove(ref(database, `profiles/${uid}/oc/${ocId}/gallery/${galleryId}`))}>
                                      <RiCloseLine size={16} />
                                    </button>
                                  </div>
                                </>
                              ) : (
                                <a href={gallery.img} target="_blank" rel="noopener noreferrer">
                                  <img src={gallery.img} className="w-auto h-[125px] md:h-[300px] object-cover " />
                                  <span className="absolute bottom-0 left-0 bg-gray-800 text-white text-xs px-2 py-1 bg-opacity-75 w-full">
                                    {gallery.desc && <p className="truncate">{gallery.desc}</p>}
                                    <p className="truncate">By {gallery.credit ? gallery.credit : "unknown"}</p>
                                  </span>
                                </a>
                              )}
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <BottomBar surface={artist?.theme.surface} secondary={artist?.theme.secondary}/>

      <Dialog isOpen={dialogState === DialogState.ImageUrlTip} 
        onClose={() => setDialogState(DialogState.Closed)} 
        title="How to Insert Images" 
        surface={artist?.theme.surface} 
        primary={artist?.theme.primary}
        secondary={artist?.theme.secondary}>
          
        You can insert images by uploading image URLs!
        <br/>
        <br/>
        <p className="font-bold">Step 1 - Upload image to Imgur</p>
        Visit <a href="https://imgur.com/upload" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: artist?.theme.highlight }}>imgur.com</a> and drag in any image into any part of the website screen.
        <br/>
        Login is not required, but it is recommended since Imgur might one day delete all images not linked to an account.
        <img
          src={imgTipA}
          className="my-2"/>
        <br/>
        <br/>
        <p className="font-bold">Stpe 2 - Open image in new tab</p>
        <img
          src={imgTipB}
          className="my-2"/>
        Right click the uploaded image and select "Open image in new tab" {"(simply copying the link won't work)."}
        <br/>
        <br/>
        <p className="font-bold">Step 3 - Copy URL</p>
        <img
          src={imgTipC}
          className="my-2"/>
        Copy the URL of the image opened in a new tab. Paste this URL into this reference library.
      </Dialog>

      <Dialog isOpen={dialogState === DialogState.SortingTagTip} 
        onClose={() => setDialogState(DialogState.Closed)} 
        title="How to Use Sorting Tags" 
        surface={artist?.theme.surface} 
        primary={artist?.theme.primary}
        secondary={artist?.theme.secondary}>

        Sort your images, links, and OCs with sorting tags!
        <br/>
        <br/>
        Sorting tags can be any alphanumerical texts.
        <br/>
        These tags will not be displayed - it is for sorting purposes only.
        <br/>
        <br/>
        For example, if there are two images with sorting tags "Alpha" and "Bravo", "Alpha" will appear first.
        <br/>
        <br/>
        Pay kevin $50 to add a drag-and-drop reordering UI functionality.
      </Dialog>
    </div>
  );
};