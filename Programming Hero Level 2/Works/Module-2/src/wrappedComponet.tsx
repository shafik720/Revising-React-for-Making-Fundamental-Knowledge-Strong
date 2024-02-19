

const BorederedComponent = (WrappedComponent : any) => {
    return (props : any) => {
        return (
            <div className=" border-green-700 border-8 rounded-full">
                <WrappedComponent />
            </div>
        ) ; 
    }
}

export default BorederedComponent ; 