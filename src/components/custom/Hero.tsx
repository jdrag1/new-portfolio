
import I2 from '@/assets/I2.png'
import { CustomButton } from './CustomButton'

const Hero = () => {
  return (
    <div className="pb-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center">

          {/* Right image - now first in DOM for mobile stacking */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center order-1 lg:order-2 mt-10 lg:mt-16 relative z-10 lg:pl-36">
            <img
              src={I2}
              alt="Hero visual"
              className="w-32 lg:w-64 object-contain"
            />
          </div>

          {/* Left content */}
          <div className="w-full lg:w-1/2 px-12 lg:px-24 order-2 lg:order-1">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="pb-2 text-5xl lg:mt-16 lg:text-6xl text-center lg:text-left">
                Hi, I'm Jerald
              </h1>

          

              <p className="mt-4 text-xl leading-relaxed lg:text-left text-justify">
                  I'm a Frontend Web Developer using React, Typescript, and TailwindCSS to build beautiful and functional web applications. Reach out if you'd like to learn more!
              </p>

              {/* Custom Button - centered on mobile, left-aligned on desktop */}
              <div className="w-full lg:w-auto mt-6 flex justify-center lg:justify-start">
                <CustomButton className="rounded-2xl lg:px-6 lg:py-4 lg:text-lg" label='Contact Me' />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero