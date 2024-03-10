import { twMerge } from "tailwind-merge";

export const Button = ({ className, variant }) => {
  return <button
    className={twMerge( 
      'bg-yellow',
      className,
      
      )}
  >Click Me </button>;
};



{/* <Button className={twMerge('border-yellow-600  border-green-700')} /> */}


//  <Button className={twMerge(
//   'border-yellow-600  border-green-700',
//   'bg-red-500',
//   className
//   )} />

