import Image from "next/image";
import Hero from "./components/hero";
import { FloatingNav } from "./components/ui/floatingNavbar";
import { FaHome } from "react-icons/fa";
import Grid from "./components/grid";
import RecentProjects from "./components/RecentProjects";
import { navItems } from "@/data";
import Certificates from "./components/Certificates";
import Aboutme from "./components/Aboutme";
import Approach from "./components/Approach";
import Hello from "./components/hello";
export default function Home() {
  return (
    
   <html>
    <head>
   
    <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png"/>
<link rel="manifest" href="./site.webmanifest"/>








    </head>
    <body>
    <main className="relative bg-black-100 flex overflow-clip justify-center items-center flex-col mx-auto sm:px-10 px-5  ">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
       <Hero/>
       <section className="h-20 w-full"></section>

       <Grid/>
       <RecentProjects/>
       <Certificates/>
       <Approach/>
       <Hello/>
      
      </div>
    </main>
    </body>
   </html>
  );
}
