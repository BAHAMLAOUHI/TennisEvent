// import what i need to use in that component 
// import css file if needed 

// decalre my componenet 
// decalre the props in the function parameters
// return the jsx

// export the component

import './Button.modules.css'

function Button({children}){
   
    return (
        <div>
        <button className='Button' >{children}</button>
        </div>
    )
}

export default Button;