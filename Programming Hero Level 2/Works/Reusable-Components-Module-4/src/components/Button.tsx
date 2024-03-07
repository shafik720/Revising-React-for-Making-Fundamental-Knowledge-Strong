export const Button = ({ className, variant }) => {
  return <button
    className={`${className} ${variant == 'outline' ? 'border-4 bg-black text-white border-yellow-600' : 'bg-white text-black border-4 border-purple-600'}`}
  >Click Me </button>;
};
