import Image from "next/image";
"use client";  
import {useState} from "react";
import {Panel, PanelGroup, PanelResizeHandle} from "react-resizable-panels";
import {Sword, Terminal as TerminalIcon, Code, BookOpen} from "lucide-react"


export default function Home() {
  // set up xp
  const [xp, setXp] = useState(10); // Start with 10 XP
  
  // this function increase xp
  const gainXp = () => {
    if (xp < 100){ // max xp = 100
      setXp(xp + 10); 
    }
  };
  return (
   // TOP Bar 
   <header className="h-16 border-b flex items-center px-4">
    <h1>CODE QUEST</h1>
    {/* Progress Bar*/}
    <div className="w-40 h-4 bg-gray-800 ml-4"> 
      <div className="bg-blue-500 h-full" style={{ width: `${xp}%`}}></div>
    </div>
   </header>
    
  );
}
