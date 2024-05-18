import Image from "next/image";
import Map from "@/public/images/map_2_white.jpg";

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center mb-10 mx-4">
      <div className="space-y-8">
        <h2 className="text-3xl md:text-5xl md:font-medium lg:w-[440px]">
          Get in touch with us
        </h2>
        <p className="text-lg">Send your enquiry now!</p>
        <div className="relative w-96 md:w-[400px] lg:w-[600px]">
          <input
            className="bg-gray-200 rounded-3xl px-8 py-3.5 w-full outline-none placeholder:text-gray-500 text-sm"
            placeholder="Enter email address"
          />
          <button className="bg-indigo-950 py-2 px-6 rounded-3xl text-white absolute right-1 top-1">
            Request Demo
          </button>
        </div>
      </div>
      <div>
        <Image src={Map} alt="map" />
      </div>
    </div>
  );
}
