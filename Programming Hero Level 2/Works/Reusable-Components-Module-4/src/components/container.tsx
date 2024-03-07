import { ReactNode } from "react";
import { Button } from "./Button";


export const Container = ({children} : {children: ReactNode}) => {
return (
    <div className=" text-[#dc2626] h-full max-w-[1200px] mx-auto">
        <h1>Hello Test</h1>
        <h2>Hello Test</h2>
        <h3>Hello Test</h3>
        <button className="btn-primary">Hello There</button>
        <button className="btn-danger">Hello There</button>
        <button className="btn-purple">Hello There</button>
        {children}
        <Button className='px-3 py-2 border-green-700' variant='outline' />
    </div>
)
}