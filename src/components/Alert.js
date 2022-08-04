import React from 'react'

const Alert = (props) => {
const Capitalize = (word) =>{
const lower = word.toLowerCase();
return lower.charAt(0).toUpperCase() + lower.slice(1);
}

  return (
    
    
    props.alert && <div className=" bg-success text-white alert alert-warning alert-dismissible " role="alert">
            <strong>{Capitalize(props.alert.type)}</strong>:{props.alert.msg}
       
    </div>
    
    
  )
}

export default Alert