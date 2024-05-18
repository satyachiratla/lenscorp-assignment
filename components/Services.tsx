export default function Services() {
  return (
    <div className="flex flex-col items-center dark:bg-gradient-to-b dark:from-black dark:to-black bg-gradient-to-b from-green-50 to-red-50 px-4 py-4">
      <h2 className="text-2xl">SERVICES</h2>
      <div className="border h-1.5 rounded-full w-16 bg-gradient-to-r from-sky-500 to-cyan-300" />
      <h3 className="py-10 text-2xl md:text-4xl 2xl:text-5xl md:font-medium text-center">
        We provide Artificial Intelligence <br></br> Services
      </h3>
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="group bg-white rounded-2xl px-10 py-2 hover:outline outline-1 outline-green-400 hover:bg-gradient-to-150 dark:bg-[#1B1C1E]">
          <div className="flex items-center relative">
            <span className="text-[88px] text-gray-300">0</span>
            <span className="text-[88px] text-gray-300 group-hover:text-green-600">
              1
            </span>
            <h4 className="text-2xl 2xl:text-3xl absolute left-16 group-hover:left-24 transition-all duration-500 ease-in-out group-hover:text-gray-500 text-green-500">
              Biometrics
            </h4>
          </div>
          <div>
            <p className="max-w-sm text-gray-500">
              Academia-backed & In-house researched State-of-the-Art Face,
              Fingerprint, and Iris Recognition SDKs. Enable real-time automated
              Biometric applications on edge devices even without an active
              internet connection.
            </p>
          </div>
        </div>
        <div className="group bg-white rounded-2xl dark:bg-[#1B1C1E] px-10 py-2 hover:outline outline-1 outline-blue-400 hover:bg-gradient-to-230">
          <div className="flex items-center relative">
            <span className="text-[88px] text-gray-300">0</span>
            <span className="text-[88px] text-gray-300 group-hover:text-blue-600">
              2
            </span>
            <h4 className="text-2xl 2xl:text-3xl absolute left-20 group-hover:left-28 transition-all duration-500 ease-in-out group-hover:text-gray-500 text-blue-400">
              Image Analysis
            </h4>
          </div>
          <div>
            <p className="max-w-sm text-gray-500">
              Outsource the overly complex image analysis work to our
              intelligent machines that adaptively learn, so you can focus on
              making the best decisions for your business.
            </p>
          </div>
        </div>
        <div className="group bg-white rounded-2xl dark:bg-[#1B1C1E] px-10 py-2 hover:outline outline-1 outline-red-400 hover:bg-gradient-to-400">
          <div className="flex items-center relative">
            <span className="text-[88px] text-gray-300">0</span>
            <span className="text-[88px] text-gray-300 group-hover:text-red-600">
              3
            </span>
            <h4 className="text-2xl 2xl:text-3xl max-w-56 absolute left-20 group-hover:left-28 transition-all duration-500 ease-in-out group-hover:text-gray-500 text-red-400">
              Cross-Media Translation
            </h4>
          </div>
          <div>
            <p className="max-w-sm text-gray-500">
              Will something like Siri or Alexa enhance your business? We can
              deliver text-to-speech, text-to-image, speech-to-text,
              speech-to-image, speech-to-image, image-to-text and
              image-to-speech solutions for maximum convenience.
            </p>
          </div>
        </div>
        <div className="group bg-white rounded-2xl dark:bg-[#1B1C1E] px-10 py-2 hover:outline outline-1 outline-orange-400 hover:bg-gradient-to-330">
          <div className="flex items-center relative">
            <span className="text-[88px] text-gray-300">0</span>
            <span className="text-[88px] text-gray-300 group-hover:text-orange-600">
              4
            </span>
            <h4 className="text-2xl 2xl:text-3xl max-w-56 absolute left-20 group-hover:left-28 transition-all duration-500 ease-in-out group-hover:text-gray-500 text-orange-400">
              3D Modelling and Design.
            </h4>
          </div>
          <div>
            <p className="max-w-sm text-gray-500">
              We offer services for automated generation of 3D assets with
              realistic shapes and textures. We animate the 3D models with voice
              and videos with an aim to retarget voice and/or expressions with
              pose from a single Image/video.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
