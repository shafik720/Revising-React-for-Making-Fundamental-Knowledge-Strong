import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import Cn from "../utlis/cn";

export const Button = ({ className, variant }) => {
  return (
    <button
      className={Cn("bg-yellow", className, {
        "bg-white text-red-600 border-slate-700 ": variant == "outline",
        "bg-black text-yellow-500 border-none font-bold rounded-lg":
          variant == "outline",
      })}
    >
      Click Me
    </button>
  );
};

{
  /* <Button className={twMerge('border-yellow-600  border-green-700')} /> */
}

//  <Button className={twMerge(
//   'border-yellow-600  border-green-700',
//   'bg-red-500',
//   className
//   )} />

{
  /* <button
className={twMerge(
  clsx(
    "bg-yellow",
    className,
    variant == "outline" && "bg-white text-red-600",
    variant == "solid" &&
      "bg-black text-yellow-500 border-none font-bold rounded-lg"
  )
)}
>
Click Me{" "}
</button>  */
}
