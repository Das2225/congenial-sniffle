import Image from "next/image";
import Link from "next/link";

export default function Login() {
    return (
        <main className="min-h-screen bg-[#03396c] overflow-hidden relative flex items-center justify-center p-4">

            {/* Global Background Elements */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Background Pattern */}
                <div
                    className="absolute inset-0 opacity-10 bg-repeat"
                    style={{ backgroundImage: `url('/images/homepage-bg.png')`, backgroundSize: '80px 80px' }}
                />

                {/* Vertical Grid Lines - aligned with design grid */}
                <div className="absolute top-0 right-10 h-full w-[1px] border-r border-white/10 hidden xl:block"></div>
                <div className="absolute top-0 left-10 h-full w-[1px] border-r border-white/10 hidden xl:block"></div>
            </div>

            <div className="relative z-10 w-full max-w-[900px] h-auto md:h-[500px] bg-white rounded-[30px] flex flex-col md:flex-row shadow-2xl overflow-hidden">

                {/* Left Section - Logo */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:border-r border-dashed border-gray-300 relative">
                    <div className="relative w-full max-w-[300px] aspect-square">
                        <Image
                            src="/images/itc-earth-logo.png"
                            alt="ITC India 10th Edition"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    {/* Dashed line border for desktop needs to be handled via border-r on parent, 
                 but for the 'exact' dashed look matching the screenshot which seems to be a custom dash interval,
                 we can use a pseudo element or stick with standard dashed border.
             */}
                </div>

                {/* Right Section - Login Form */}
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 md:p-12 text-center bg-white">

                    <h1 className="text-2xl md:text-[28px] font-bold text-black mb-4">
                        Get started with Fellowship
                    </h1>

                    <p className="text-sm md:text-base text-gray-700 mb-10">
                        Kindly use the Institution Email id
                    </p>

                    <button className="w-full max-w-[320px] py-3.5 px-6 rounded-full border border-gray-800 text-black font-medium hover:bg-gray-50 transition-colors mb-4 flex items-center justify-center gap-2">
                        Continue with Email
                    </button>

                    <button className="w-full max-w-[320px] py-3.5 px-6 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                        Continue with Google
                    </button>

                </div>

            </div>
        </main>
    );
}
