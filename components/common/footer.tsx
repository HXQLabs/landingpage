import React from "react"
import Image from "next/image"
import ScrambleHover from "@/components/fancy/text/scramble-hover"
import CenterUnderline from "@/components/fancy/text/underline-center"

const StickyFooter: React.FC = () => {
  return (
    <footer className="sticky bottom-0 w-full bg-white dark:bg-black z-0" style={{height: 'clamp(16rem, 20vw + 10rem, 36rem)'}}>
      <div className="relative overflow-hidden w-full h-full flex justify-between text-right items-start text-black dark:text-white" style={{padding: 'clamp(1.5rem, 3vw, 5rem) clamp(1rem, 4vw, 5rem)'}}>
          
          {/* Logo Section */}
          <div 
            className="flex items-start justify-start z-20"
            style={{
              marginTop: 'clamp(1rem, 2vw, 3rem)'
            }}
          >
            <Image
              src="/logo.svg"
              alt="HelixQue Logo"
              width={80}
              height={60}
              className="opacity-90 hover:opacity-100 transition-opacity duration-300"
              style={{
                width: 'clamp(60px, 8vw, 120px)',
                height: 'auto',
              }}
            />
          </div>

          <div className="flex flex-row text-black dark:text-white z-20" style={{gap: 'clamp(2rem, 4vw, 7rem)', fontSize: 'clamp(0.75rem, 1.5vw, 3rem)'}}>
            <ul>
              <li className="cursor-pointer">
                <CenterUnderline>
                  <ScrambleHover
                    text="Home"
                    scrambleSpeed={50}
                    maxIterations={8}
                    useOriginalCharsOnly={true}
                  />
                </CenterUnderline>
              </li>
              <li className="cursor-pointer">
                <CenterUnderline>
                  <ScrambleHover
                    text="Docs"
                    scrambleSpeed={50}
                    maxIterations={8}
                    useOriginalCharsOnly={true}
                  />
                </CenterUnderline>
              </li>
              <li className="cursor-pointer">
                <CenterUnderline>
                  <ScrambleHover
                    text="Comps"
                    scrambleSpeed={50}
                    maxIterations={8}
                    useOriginalCharsOnly={true}
                  />
                </CenterUnderline>
              </li>
            </ul>
            <ul>
              <li className="cursor-pointer">
                <CenterUnderline>
                  <ScrambleHover
                    text="Github"
                    scrambleSpeed={50}
                    maxIterations={8}
                    useOriginalCharsOnly={true}
                  />
                </CenterUnderline>
              </li>
              <li className="cursor-pointer">
                <CenterUnderline>
                  <ScrambleHover
                    text="Instagram"
                    scrambleSpeed={50}
                    maxIterations={8}
                    useOriginalCharsOnly={true}
                  />
                </CenterUnderline>
              </li>
              <li className="cursor-pointer">
                <CenterUnderline>
                  <ScrambleHover
                    text="X(Twitter)"
                    scrambleSpeed={50}
                    maxIterations={8}
                    useOriginalCharsOnly={true}
                  />
                </CenterUnderline>
              </li>
            </ul>
          </div>
          
          {/* Copyright notice */}
          <div 
            className="absolute text-black dark:text-white opacity-70 z-10"
            style={{
              bottom: 'clamp(2.5rem, 5vw, 4rem)',
              right: 'clamp(1rem, 3vw, 4rem)',
              fontSize: 'clamp(0.75rem, 1.2vw, 1.5rem)'
            }}
          >
            © 2025 helixque. All rights reserved.
          </div>
          
          <h2 
            className="absolute text-black dark:text-white font-calendas opacity-90 pointer-events-none select-none z-0"
            style={{
              bottom: 'clamp(-1rem, 0.5vw, 1.5rem)',
              left: 'clamp(0.5rem, 1.5vw, 2.5rem)',
              fontSize: 'clamp(0.875rem, 10vw, 15.625rem)',
              lineHeight: '0.7'
            }}
          >
            HelixQue
          </h2>
        </div>
      </footer>
  )
}

export default StickyFooter
