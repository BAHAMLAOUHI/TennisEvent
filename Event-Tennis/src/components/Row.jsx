import './Row.css';

function Row({children}){
    // tailwind css 
    // css files (module)
    return (
    <div className="Row-content">
        {children}
    </div>)
}

export default Row