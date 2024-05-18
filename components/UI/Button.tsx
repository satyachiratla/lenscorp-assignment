import type { ComponentPropsWithoutRef, ElementType } from "react";

type ButtonProps = {
  children: React.ReactNode;
  icon?: ElementType;
  styleName: "primary" | "secondary";
} & ComponentPropsWithoutRef<"button">;

export default function Button({
  children,
  icon: Icon,
  styleName,
  ...otherProps
}: ButtonProps) {
  const styles =
    styleName === "primary"
      ? "bg-[#1C1C1C] dark:bg-white dark:text-black hover:bg-white text-white hover:text-black ease-in-out hover:scale-x-105"
      : "bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black text-black hover:text-white ease-in-out hover:scale-x-105";
  return (
    <button
      className={` ${styles} ${
        Icon ? "px-12" : ""
      } px-8 py-3 group rounded-xl translate-all duration-300 dark:border-white text-lg border border-black tracking-wide ${
        Icon ? "flex gap-3 items-center" : ""
      }`}
      {...otherProps}
    >
      {children}
      {Icon && (
        <span className="absolute right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Icon />
        </span>
      )}
    </button>
  );
}
