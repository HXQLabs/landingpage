import { ArrowRight, MessageCircle } from "lucide-react"

export function CTANew() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3 my-20 md:my-40 justify-start relative z-20 max-w-7xl mx-auto bg-gradient-to-br from-gray-100 to-white dark:from-neutral-900 dark:to-neutral-950">
      {/* Top border */}
      <div 
        className="absolute w-[calc(100%+var(--offset))] h-[var(--height)] left-[calc(var(--offset)/2*-1)] bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)] [background-size:var(--width)_var(--height)] [mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)] [mask-composite:exclude] z-30 dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)] top-0"
        style={{
          '--background': '#ffffff',
          '--color': 'rgba(0, 0, 0, 0.2)',
          '--height': '1px',
          '--width': '5px',
          '--fade-stop': '90%',
          '--offset': '200px',
          '--color-dark': 'rgba(255, 255, 255, 0.2)',
          maskComposite: 'exclude'
        } as React.CSSProperties}
      ></div>

      {/* Bottom border */}
      <div 
        className="absolute w-[calc(100%+var(--offset))] h-[var(--height)] left-[calc(var(--offset)/2*-1)] bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)] [background-size:var(--width)_var(--height)] [mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)] [mask-composite:exclude] z-30 dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)] bottom-0 top-auto"
        style={{
          '--background': '#ffffff',
          '--color': 'rgba(0, 0, 0, 0.2)',
          '--height': '1px',
          '--width': '5px',
          '--fade-stop': '90%',
          '--offset': '200px',
          '--color-dark': 'rgba(255, 255, 255, 0.2)',
          maskComposite: 'exclude'
        } as React.CSSProperties}
      ></div>

      {/* Left border */}
      <div 
        className="absolute h-[calc(100%+var(--offset))] w-[var(--width)] top-[calc(var(--offset)/2*-1)] bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)] [background-size:var(--width)_var(--height)] [mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)] [mask-composite:exclude] z-30 dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)] left-0"
        style={{
          '--background': '#ffffff',
          '--color': 'rgba(0, 0, 0, 0.2)',
          '--height': '5px',
          '--width': '1px',
          '--fade-stop': '90%',
          '--offset': '80px',
          '--color-dark': 'rgba(255, 255, 255, 0.2)',
          maskComposite: 'exclude'
        } as React.CSSProperties}
      ></div>

      {/* Right border */}
      <div 
        className="absolute h-[calc(100%+var(--offset))] w-[var(--width)] top-[calc(var(--offset)/2*-1)] bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)] [background-size:var(--width)_var(--height)] [mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)] [mask-composite:exclude] z-30 dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)] left-auto right-0"
        style={{
          '--background': '#ffffff',
          '--color': 'rgba(0, 0, 0, 0.2)',
          '--height': '5px',
          '--width': '1px',
          '--fade-stop': '90%',
          '--offset': '80px',
          '--color-dark': 'rgba(255, 255, 255, 0.2)',
          maskComposite: 'exclude'
        } as React.CSSProperties}
      ></div>

      {/* Main content - spans 2 columns */}
      <div className="md:col-span-2 p-8 md:p-14">
        <h2 className="text-left text-neutral-500 dark:text-neutral-200 text-xl md:text-3xl tracking-tight font-medium">
          Ship products with the{" "}
          <span className="font-bold text-black dark:text-white">speed of light</span>
        </h2>
        <p className="text-left text-neutral-500 mt-4 max-w-lg dark:text-neutral-200 text-xl md:text-3xl tracking-tight font-medium">
          Get the best in class{" "}
          <span className="text-sky-700">support</span> for the most advanced{" "}
          <span className="text-indigo-700">products</span>.
        </p>
        <div className="flex items-start sm:items-center flex-col sm:flex-row sm:gap-4">
          <button className="mt-8 flex space-x-2 items-center group text-base px-4 py-2 rounded-lg bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]">
            <span>Buy now</span>
            <ArrowRight className="text-white group-hover:translate-x-1 stroke-[1px] h-3 w-3 mt-0.5 transition-transform duration-200" />
          </button>
          <button className="mt-8 flex space-x-2 items-center group text-base px-4 py-2 rounded-lg text-black dark:text-white border border-neutral-200 dark:border-neutral-800 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]">
            <span>Talk to us</span>
            <MessageCircle className="text-black dark:text-white group-hover:translate-x-1 stroke-[1px] h-3 w-3 mt-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>

      {/* Testimonial - spans 1 column */}
      <div className="border-t md:border-t-0 md:border-l border-dashed p-8 md:p-14">
        <p className="text-base text-neutral-700 dark:text-neutral-200">
          "This is the best product ever when it comes to shipping. Ten on ten recommended. I just can't wait to see what happens with this product."
        </p>
        <div className="flex flex-col text-sm items-start mt-4 gap-1">
          <p className="font-bold text-neutral-800 dark:text-neutral-200">Michael Scarn</p>
          <p className="text-neutral-500 dark:text-neutral-400">Side projects builder</p>
        </div>
      </div>
    </section>
  )
}