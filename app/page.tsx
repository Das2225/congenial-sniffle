import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#03396c]">
      {/* Background Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url('/images/desktop4.png')`,
            backgroundSize: '80px 80px',
            backgroundPosition: 'top left',
          }}
        />
      </div>

      {/* Vertical Lines - Right Side */}
      <div className="fixed h-full left-[calc(100%-39.5px)] top-[109.5px] w-0 flex items-center justify-center pointer-events-none z-10">
        <div className="rotate-90">
          <Image
            src="/images/line4.png"
            alt=""
            width={5784}
            height={1}
            className="w-[5784.5px] h-px"
          />
        </div>
      </div>
      {/* Vertical Lines - Left Side */}
      <div className="fixed h-full left-[40.5px] top-[109.5px] w-px flex items-center justify-center pointer-events-none z-10">
        <div className="rotate-90">
          <Image
            src="/images/line5.png"
            alt=""
            width={5786}
            height={1}
            className="w-[5786px] h-px"
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Header with IEEE Logo */}
        <header className="relative border border-white h-[68px] mx-auto mt-[34px] w-full max-w-[1360px]">
          <div className="absolute h-[38.379px] left-[138px] top-[14px] w-[131px] overflow-hidden">
            <Image
              src="/images/group.png"
              alt="IEEE Logo"
              width={131}
              height={39}
              className="w-full h-full object-contain"
            />
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative mt-[75px] px-[86px]">
          <div className="flex items-start justify-between gap-[50px]">
            {/* Left Column - Logo and Text */}
            <div className="flex-1">
              {/* ITC Logo with INDIA text */}
              <div className="relative mb-[50px]">
                <div className="relative h-[114px] w-[114px] mb-[20px]">
                  <Image
                    src="/images/itc-earth-logo.png"
                    alt="ITC Earth Logo"
                    width={114}
                    height={114}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* INDIA letters positioned around logo */}
                <div className="relative left-[8.91px] top-[-20px]">
                  <div className="absolute flex h-[31.472px] items-center justify-center left-[19.98px] top-[19.58px] translate-x-[-50%] translate-y-[-50%] w-[22.142px]">
                    <div className="rotate-[14.468deg]">
                      <p className="font-urbanist font-bold text-[29.42px] text-white text-center leading-normal">I</p>
                    </div>
                  </div>
                  <div className="absolute flex h-[32.329px] items-center justify-center left-[36.64px] top-[23.86px] translate-x-[-50%] translate-y-[-50%] w-[29.832px]">
                    <div className="rotate-[9.553deg]">
                      <p className="font-urbanist font-bold text-[29.42px] text-white text-center leading-normal">N</p>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center left-[58.17px] top-[25.22px] translate-x-[-50%] translate-y-[-50%]">
                    <p className="font-urbanist font-bold text-[29.42px] text-white text-center leading-normal">D</p>
                  </div>
                  <div className="absolute flex h-[31.249px] items-center justify-center left-[74.95px] top-[23.03px] translate-x-[-50%] translate-y-[-50%] w-[21.649px]">
                    <div className="rotate-[347.61deg]">
                      <p className="font-urbanist font-bold text-[29.42px] text-white text-center leading-normal">I</p>
                    </div>
                  </div>
                  <div className="absolute flex h-[35.473px] items-center justify-center left-[90.59px] top-[17.74px] translate-x-[-50%] translate-y-[-50%] w-[32.762px]">
                    <div className="rotate-[332.104deg]">
                      <p className="font-urbanist font-bold text-[29.42px] text-white text-center leading-normal">A</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Title with "10" */}
              <div className="relative mb-[30px]">
                <div className="font-space-grotesk font-bold text-white relative">
                  {/* Large "10" positioned behind */}
                  <div className="absolute font-urbanist font-bold text-[100.192px] text-white left-[64px] top-[-24px]">
                    <div className="absolute flex flex-col justify-center left-[64.82px] top-[60px] translate-x-[-50%] translate-y-[-50%]">
                      <p className="leading-normal">0</p>
                    </div>
                    <div className="absolute flex flex-col justify-center left-[17px] top-[61.57px] translate-x-[-50%] translate-y-[-50%]">
                      <p className="leading-normal">1</p>
                    </div>
                  </div>
                  {/* Title text */}
                  <div className="relative z-10">
                    <span className="text-[38.876px] leading-normal inline-block">         th </span>
                    <span className="text-[77.752px] leading-normal inline-block">IEEE International </span>
                  </div>
                  <p className="text-[77.752px] leading-normal">Test Conference </p>
                  <p className="text-[77.752px] leading-normal">INDIA</p>
                </div>
              </div>

              {/* Subtitle */}
              <div className="font-space-grotesk font-bold text-[26px] text-white mb-[50px]">
                <p>AN INITIATIVE  TOWARDS INDIA&apos;S </p>
                <p>SEMICONDUCTOR  ECOSYSTEM</p>
              </div>
            </div>

            {/* Right Column - Countdown Timer */}
            <div className="shrink-0">
              <div className="bg-transparent h-[191px] w-[527px] overflow-hidden">
                <p className="font-space-grotesk font-bold text-white leading-0">
                  <span className="text-[120px] leading-normal">6</span>
                  <span className="text-[32px] leading-normal">{` MONTHS `}</span>
                  <span className="text-[120px] leading-normal">14</span>
                  <span className="text-[32px] leading-normal">{` DAYS`}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Decorative Wave - Top of About Section */}
        <div className="relative w-full max-w-[1355px] mx-auto mt-[100px]">
          <Image
            src="/images/vector9.png"
            alt=""
            width={1355}
            height={123}
            className="w-full h-full"
          />
        </div>

        {/* About Us Section */}
        <section className="relative py-[100px] px-[86px]">
          <h2 className="font-space-grotesk font-bold text-[70px] text-white mb-[30px]">ABOUT US</h2>

          <div className="flex gap-[100px] items-start flex-wrap">
            <div className="flex-1 min-w-[300px]">
              <h3 className="font-space-grotesk font-bold text-[48px] text-white mb-[30px]">
                Welcome to ITC INDIA 2026
              </h3>
              <div className="font-poppins text-[18px] text-white leading-normal space-y-4 max-w-[533.81px]">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Felis quis in molestie curabitur bibendum. Amet in arcu laoreet arcu risus hendrerit odio senectus sapien. Blandit sit at sagittis auctor est.
                </p>
                <p>
                  Purus ut odio integer ac vel. Amet vitae sit volutpat quam pretium. Faucibus adipiscing magna massa egestas in quis scelerisque nibh nibh.Lorem ipsum dolor sit amet consectetur. Felis quis in molestie curabitur bibendum. Amet in arcu laoreet arcu risus hendrerit odio senectus sapien. Blandit sit at sagittis auctor est.
                </p>
                <p>
                  Purus ut odio integer ac vel. Amet vitae sit volutpat quam pretium. Faucibus adipiscing magna massa egestas in quis scelerisque nibh nibh.
                </p>
              </div>
            </div>

            <div className="flex-1 min-w-[300px]">
              <div className="h-[503px] w-full max-w-[642px]">
                <Image
                  src="/images/carasol1.png"
                  alt="ITC Conference Visual"
                  width={642}
                  height={503}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Decorative Wave - Bottom of About Section */}
        <div className="relative w-full max-w-[1355px] mx-auto rotate-180 scale-y-[-1]">
          <Image
            src="/images/vector11.png"
            alt=""
            width={1355}
            height={123}
            className="w-full h-full"
          />
        </div>

        {/* Timeline Section */}
        <section className="relative py-[100px] px-[86px]">
          <h2 className="font-space-grotesk font-bold text-[64px] text-white text-center mb-[80px]">
            TIMELINE
          </h2>

          <div className="relative max-w-[1359px] mx-auto min-h-[520px]">
            {/* Timeline Background Line */}
            <div className="absolute h-[520px] left-0 top-[121.5px] w-full z-0">
              <Image
                src="/images/vector12.png"
                alt="Timeline"
                width={1359}
                height={520}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="relative z-10 flex flex-col gap-[30px] pt-[80px]">
              {/* Day 1 */}
              <div className="flex items-center justify-center w-full relative left-[-150px]">
                <div className="relative flex items-center">
                  <div className="w-[132px] h-[132px] rounded-full bg-[#03396c] border-[3px] border-white flex items-center justify-center z-20 relative shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                    <span className="font-roboto-slab font-extrabold text-[24px] text-white">DAY 1</span>
                  </div>
                  <div className="w-[430px] h-[100px] bg-white ml-[-40px] z-10 flex flex-col justify-center px-[60px] rounded-r-lg shadow-lg">
                    <h4 className="font-space-grotesk font-bold text-[20px] text-[#03396c]">Conference Kickoff</h4>
                    <p className="font-urbanist text-[14px] text-black/70">Registration, Inauguration, and Keynote Addresses.</p>
                  </div>
                </div>
              </div>

              {/* Day 2 */}
              <div className="flex items-center justify-center w-full relative left-[150px]">
                <div className="relative flex items-center flex-row-reverse">
                  <div className="w-[132px] h-[132px] rounded-full bg-[#03396c] border-[3px] border-white flex items-center justify-center z-20 relative shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                    <span className="font-roboto-slab font-extrabold text-[24px] text-white">DAY 2</span>
                  </div>
                  <div className="w-[430px] h-[100px] bg-white mr-[-40px] z-10 flex flex-col justify-center px-[60px] items-end rounded-l-lg shadow-lg">
                    <h4 className="font-space-grotesk font-bold text-[20px] text-[#03396c] text-right">Technical Sessions</h4>
                    <p className="font-urbanist text-[14px] text-black/70 text-right">Paper Presentations, Workshops, and Panels.</p>
                  </div>
                </div>
              </div>

              {/* Day 3 */}
              <div className="flex items-center justify-center w-full relative left-[-150px]">
                <div className="relative flex items-center">
                  <div className="w-[132px] h-[132px] rounded-full bg-[#03396c] border-[3px] border-white flex items-center justify-center z-20 relative shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                    <span className="font-roboto-slab font-extrabold text-[24px] text-white">DAY 3</span>
                  </div>
                  <div className="w-[430px] h-[100px] bg-white ml-[-40px] z-10 flex flex-col justify-center px-[60px] rounded-r-lg shadow-lg">
                    <h4 className="font-space-grotesk font-bold text-[20px] text-[#03396c]">Closing Ceremony</h4>
                    <p className="font-urbanist text-[14px] text-black/70">Awards, Cultural Events, and Networking.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Decorative Wave - Bottom of Timeline */}
        <div className="relative w-full max-w-[1355px] mx-auto rotate-180 scale-y-[-1]">
          <Image
            src="/images/vector11.png"
            alt=""
            width={1355}
            height={123}
            className="w-full h-full"
          />
        </div>

        {/* Testimonials Section */}
        <section className="relative py-[100px] px-[86px]">
          <h2 className="font-angkor text-[75px] text-white text-center mb-[60px]">
            TESTIMONIALS
          </h2>

          <div className="relative flex items-center justify-center gap-[20px] max-w-[800px] mx-auto">
            {/* Left Arrow */}
            <button className="h-[59px] w-[25px] flex items-center justify-center rotate-180 scale-y-[-1] hover:opacity-80 transition-opacity cursor-pointer">
              <Image
                src="/images/vector8.png"
                alt="Previous"
                width={25}
                height={59}
                className="w-full h-full"
              />
            </button>

            {/* Testimonial Card */}
            <div className="bg-[#d9d9d9] h-[293px] w-[548px] overflow-hidden relative">
              <div className="absolute left-[42px] w-[66px] h-[66px] top-[42px]">
                <Image
                  src="/images/ellipse13.png"
                  alt="Profile"
                  width={66}
                  height={66}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <p className="absolute font-poppins text-[24px] text-black left-[128px] top-[42px]">
                Full name
              </p>
              <p className="absolute font-poppins text-[24px] text-black left-[128px] top-[82px]">
                Company Name
              </p>
              <div className="absolute right-[6.02%] top-[calc(50%-104.5px)] translate-y-[-50%] w-[30px] h-[22px]">
                <Image
                  src="/images/vector.png"
                  alt="Quote"
                  width={30}
                  height={22}
                  className="w-full h-full"
                />
              </div>
              <div className="absolute font-poppins text-[18px] text-black left-[75px] top-[147px] pr-[40px] leading-relaxed italic">
                <p>&quot;ITC India is a premier forum for test professionals. The technical depth and networking opportunities are unmatched.&quot;</p>
              </div>
            </div>

            {/* Right Arrow */}
            <button className="h-[59px] w-[25px] flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer">
              <Image
                src="/images/vector8.png"
                alt="Next"
                width={25}
                height={59}
                className="w-full h-full"
              />
            </button>
          </div>
        </section>

        {/* Decorative Wave - Bottom of Testimonials */}
        <div className="relative w-full max-w-[1355px] mx-auto">
          <Image
            src="/images/vector15.png"
            alt=""
            width={1355}
            height={123}
            className="w-full h-full"
          />
        </div>

        {/* Photos Section */}
        <section className="relative py-[100px] px-[86px]">
          <h2 className="font-angkor text-[60px] text-white text-center mb-[60px] whitespace-pre-wrap">
            PHOTOS SECTION
          </h2>

          <div className="flex gap-[30px] justify-center flex-wrap">
            <div className="bg-[#d9d9d9] h-[267px] w-[361px] flex items-center justify-center text-black/20 font-space-grotesk font-bold text-xl uppercase tracking-widest hover:bg-white/10 transition-colors cursor-pointer border-2 border-transparent hover:border-white/20">
              Photo 1
            </div>
            <div className="bg-[#d9d9d9] h-[267px] w-[361px] flex items-center justify-center text-black/20 font-space-grotesk font-bold text-xl uppercase tracking-widest hover:bg-white/10 transition-colors cursor-pointer border-2 border-transparent hover:border-white/20">
              Photo 2
            </div>
            <div className="bg-[#d9d9d9] h-[267px] w-[361px] flex items-center justify-center text-black/20 font-space-grotesk font-bold text-xl uppercase tracking-widest hover:bg-white/10 transition-colors cursor-pointer border-2 border-transparent hover:border-white/20">
              Photo 3
            </div>
          </div>
        </section>

        {/* Decorative Wave - Bottom of Photos */}
        <div className="relative w-full max-w-[1355px] mx-auto rotate-180 scale-y-[-1]">
          <Image
            src="/images/vector11.png"
            alt=""
            width={1355}
            height={123}
            className="w-full h-full"
          />
        </div>

        {/* FAQ Section */}
        <section className="relative py-[100px] px-[86px]">
          <h2 className="font-space-grotesk font-bold text-[64px] text-white text-center mb-[60px]">
            FAQ
          </h2>

          <div className="max-w-[1000px] mx-auto space-y-[20px]">
            {/* FAQ Item 1 */}
            <div className="bg-white/10 border border-white/20 rounded-lg p-[30px]">
              <h3 className="font-space-grotesk font-bold text-[24px] text-white mb-[15px]">
                What is ITC India 2026?
              </h3>
              <p className="font-poppins text-[18px] text-white/90 leading-relaxed">
                ITC India 2026 is the 10th IEEE International Test Conference, an initiative towards India&apos;s semiconductor ecosystem. It brings together industry leaders, researchers, and professionals in the field of test engineering.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white/10 border border-white/20 rounded-lg p-[30px]">
              <h3 className="font-space-grotesk font-bold text-[24px] text-white mb-[15px]">
                When and where will the conference be held?
              </h3>
              <p className="font-poppins text-[18px] text-white/90 leading-relaxed">
                The conference will be held at Radisson Blu, Bengaluru. Please check the timeline section for specific dates and schedule details.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white/10 border border-white/20 rounded-lg p-[30px]">
              <h3 className="font-space-grotesk font-bold text-[24px] text-white mb-[15px]">
                How can I submit a paper?
              </h3>
              <p className="font-poppins text-[18px] text-white/90 leading-relaxed">
                You can submit your paper through our Call for Papers portal. Visit the Submissions section in the footer for more information and submission guidelines.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white/10 border border-white/20 rounded-lg p-[30px]">
              <h3 className="font-space-grotesk font-bold text-[24px] text-white mb-[15px]">
                What topics are covered in the conference?
              </h3>
              <p className="font-poppins text-[18px] text-white/90 leading-relaxed">
                The conference covers various topics related to test engineering, semiconductor testing, design for testability, and emerging trends in the semiconductor industry.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-white/10 border border-white/20 rounded-lg p-[30px]">
              <h3 className="font-space-grotesk font-bold text-[24px] text-white mb-[15px]">
                How can I register for the conference?
              </h3>
              <p className="font-poppins text-[18px] text-white/90 leading-relaxed">
                Registration details will be available soon. Please subscribe to our newsletter to receive updates about registration, schedule, and other important information.
              </p>
            </div>
          </div>
        </section>

        {/* Decorative Wave - Bottom of FAQ */}
        <div className="relative w-full max-w-[1355px] mx-auto rotate-180 scale-y-[-1]">
          <Image
            src="/images/vector11.png"
            alt=""
            width={1355}
            height={123}
            className="w-full h-full"
          />
        </div>

        {/* Newsletter Section */}
        <section className="relative py-[100px] px-[86px]">
          <div className="bg-[#fcfcfc] h-[191px] w-full max-w-[1027px] mx-auto relative flex items-center justify-between px-[80px] flex-wrap gap-[20px]">
            <div className="font-roboto-slab font-semibold text-[#022241] text-[40px] whitespace-pre-wrap">
              <p className="mb-0">Subscribe to our</p>
              <p>Newsletter </p>
            </div>
            <div className="flex items-center gap-[20px] flex-wrap">
              <div className="bg-[#011f4b] h-[38px] rounded-[40px] px-[20px] flex items-center min-w-[323px]">
                <p className="font-inter text-[20px] text-white">Email ID</p>
              </div>
              <button className="bg-white h-[38px] rounded-[40px] px-[40px] flex items-center hover:opacity-90 transition-opacity">
                <p className="font-poppins text-[22px] text-black">Subscribe</p>
              </button>
            </div>
          </div>
        </section>

        {/* Decorative Wave - Bottom of Newsletter */}
        <div className="relative w-full max-w-[1355px] mx-auto rotate-180 scale-y-[-1]">
          <Image
            src="/images/vector11.png"
            alt=""
            width={1355}
            height={123}
            className="w-full h-full"
          />
        </div>

        {/* Footer */}
        <footer className="relative py-[100px] px-[122px]">
          {/* Footer Line */}
          <div className="h-px w-full max-w-[1439px] mx-auto mb-[100px]">
            <Image
              src="/images/vector17.png"
              alt=""
              width={1439}
              height={1}
              className="w-full h-px"
            />
          </div>

          <div className="flex gap-[100px] items-start flex-wrap">
            {/* ITC Logo */}
            <div className="relative">
              <div className="h-[242px] w-[242px]">
                <Image
                  src="/images/itc-earth-logo.png"
                  alt="ITC Earth Logo"
                  width={242}
                  height={242}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* INDIA letters for footer */}
              <div className="relative left-[18.91px] top-[-20px]">
                <div className="absolute flex h-[66.809px] items-center justify-center left-[41.41px] top-[219.28px] translate-x-[-50%] translate-y-[-50%] w-[47.002px]">
                  <div className="rotate-[14.468deg]">
                    <p className="font-urbanist font-bold text-[29.42px] text-white text-center leading-normal">I</p>
                  </div>
                </div>
                <div className="absolute flex h-[68.628px] items-center justify-center left-[76.78px] top-[228.38px] translate-x-[-50%] translate-y-[-50%] w-[63.326px]">
                  <div className="rotate-[9.553deg]">
                    <p className="font-urbanist font-bold text-[29.42px] text-white text-center leading-normal">N</p>
                  </div>
                </div>
                <div className="absolute flex items-center justify-center left-[122.49px] top-[231.25px] translate-x-[-50%] translate-y-[-50%]">
                  <p className="font-urbanist font-bold text-[29.42px] text-white text-center leading-normal">D</p>
                </div>
                <div className="absolute flex h-[66.335px] items-center justify-center left-[158.1px] top-[226.6px] translate-x-[-50%] translate-y-[-50%] w-[45.955px]">
                  <div className="rotate-[347.61deg]">
                    <p className="font-urbanist font-bold text-[29.42px] text-white text-center leading-normal">I</p>
                  </div>
                </div>
                <div className="absolute flex h-[75.302px] items-center justify-center left-[191.3px] top-[215.37px] translate-x-[-50%] translate-y-[-50%] w-[69.546px]">
                  <div className="rotate-[332.104deg]">
                    <p className="font-urbanist font-bold text-[29.42px] text-white text-center leading-normal">A</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="flex gap-[100px] flex-1 flex-wrap">
              <div className="font-poppins text-[22px] text-white">
                <p className="mb-[10px] font-semibold">Submissions</p>
                <a href="https://itctestweekindia.org/CFP" className="block underline mb-[10px] hover:opacity-80 transition-opacity">
                  Call for Papers
                </a>
              </div>

              <div className="font-poppins text-[22px] text-white">
                <p className="mb-[10px] font-semibold">Conference</p>
                <a href="https://itctestweekindia.org/" className="block underline mb-[10px] hover:opacity-80 transition-opacity">
                  About Us
                </a>
                <a href="https://itctestweekindia.org/" className="block underline mb-[10px] hover:opacity-80 transition-opacity">
                  Privacy Policy
                </a>
                <a href="https://itctestweekindia.org/" className="block underline mb-[10px] hover:opacity-80 transition-opacity">
                  Refund Policy
                </a>
                <a href="https://itctestweekindia.org/" className="block underline mb-[10px] hover:opacity-80 transition-opacity">
                  Terms & Conditions
                </a>
                <a href="https://itctestweekindia.org/contactus" className="block underline mb-[10px] hover:opacity-80 transition-opacity">
                  Contact Us
                </a>
              </div>

              <div className="font-poppins text-[22px] text-white">
                <p className="mb-[10px] font-semibold">Conference Location</p>
                <a href="https://maps.app.goo.gl/Su9eU1hLBaaRZcKEA" className="block underline hover:opacity-80 transition-opacity">
                  Radisson Blu, Bengaluru
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <p className="font-poppins text-[22px] text-white mt-[100px] text-center">
            2026 © ITC Test Week India | All rights reserved
          </p>
        </footer>
      </div>
    </div>
  );
}
