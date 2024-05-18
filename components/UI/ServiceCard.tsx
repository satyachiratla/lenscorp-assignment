type BgColor = "bgBlue" | "bgRed" | "bgGreen" | "bgOrange";
type TColor = "blue" | "red" | "green" | "orange";

type ServiceCardProps = {
  bgColor: BgColor;
  number: number;
  description: string;
  tColor: TColor;
};

type BgColorVariants = {
  bgBlue: string;
  bgRed: string;
  bgGreen: string;
  bgOrange: string;
};

type TColorVariants = {
  blue: string;
  red: string;
  green: string;
  orange: string;
};

export default function ServiceCard({
  bgColor,
  number,
  description,
  tColor,
}: ServiceCardProps) {
  const bgColorVariants: BgColorVariants = {
    bgBlue: "bg-gradient-to-r hover:bg-blue-600 hover:border border-blue-600",
    bgRed: "bg-red-600 border border-red-600",
    bgGreen: "hover:bg-gradient-to-45 hover:border border-green-600",
    bgOrange: "bg-orange-600 border border-orange-600",
  };

  const tColorVaraints: TColorVariants = {
    blue: "text-blue-200",
    red: "text-red-300",
    green: "group-hover:text-green-300",
    orange: "text-orange-300",
  };

  return (
    <div
      className={`group bg-white rounded-2xl px-10 py-2 hover:border border-gray-400 ${bgColorVariants[bgColor]}`}
    >
      <div className="flex items-center relative">
        <span className="text-[88px] text-gray-400">0</span>
        <span className={`text-[88px] text-gray-400 ${tColorVaraints[tColor]}`}>
          {number}
        </span>
        <h4
          className={`text-2xl absolute left-16 group-hover:left-24 transition-all duration-500 ease-in-out group-hover:text-gray-500 ${tColorVaraints[tColor]}`}
        >
          Biometrics
        </h4>
      </div>
      <div>
        <p className="max-w-md">{description}</p>
      </div>
    </div>
  );
}
