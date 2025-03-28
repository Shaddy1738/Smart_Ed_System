import React from "react";
class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state ={hasError : false};
    }
    static getDerivedStateFromError(error){
        return {hasError: true}
    }
    componentDidCatch(error,errorIfo){
        console.error("Caught Error",error, errorIfo)
    }
    render(){
        if(this.state.hasError){
            return <h2 className="text-white font-bold flex ">Something Went Went Wrong Somewhere</h2>
        }
        return this.props.children;
    }
}
export default ErrorBoundary