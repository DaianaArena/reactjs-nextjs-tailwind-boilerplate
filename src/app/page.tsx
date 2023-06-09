//import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 text-white animate-float">
        Boilerplate Next Project
      </h1>
      <p className="text-lg md:text-2xl lg:text-4xl mb-8 text-white">
       Setup para un proyecto ReactJS, Next13, Typescript y TailwindCSS.
      </p>
      <a
        href="https://github.com/DaianaArena"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold py-2 px-4  text-2xl text-yellow-300 "
      >
        
          By Daiana Arena ♥ 
          
      </a>
    </div>
  )
}
