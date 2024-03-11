import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const Button = ({ className, variant }) => {
  return (
    <button
      className={twMerge(
        clsx(
          "bg-yellow",
          className,
          {
            "bg-white text-red-600 border-slate-700 ": variant == "outline",
            "bg-black text-yellow-500 border-none font-bold rounded-lg":
              variant == "solid",
          }
        )
      )}
    >
      Click Me{" "}
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
