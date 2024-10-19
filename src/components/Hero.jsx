


/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from "./Button";
const handleDownload = () => {
  // Create a virtual link element
  const link = document.createElement('a');
  link.href = '/images/MD AMANULLAH.pdf'; // Replace with the actual file path or URL
  link.download = 'MD AMANULLAH_Resume.pdf'; // The file name for the downloaded file
  link.click(); // Trigger the download by simulating a click
};

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-28 lg:pt-36"
    >
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/pic.jpg"
                width={40}
                height={40}
                alt="Henry clark portrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>

              Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            MD AMANULLAH
          </h2>

          <div className="flex items-center gap-3">
        
          <button class="bg-white hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow"  onClick={handleDownload}>Download CV</button>

            {/* <ButtonPrimary onClick={handleDownload}
              label="Download CV"
              icon="download"
            
            /> */}

            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src="/images/ProfilePic3.png"
              width={656}
              height={800}
              alt="md-amanullah"
              className="w-full"
            />
          </figure>
        </div>

      </div>

    </section>
  )
}

export default Hero