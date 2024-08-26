
function Inputfield({placeholder, style , type , onChange}) {
    return (
      <input onChange={onChange} placeholder={placeholder} className={style} type={type}/>
    )
  }
  
  export default Inputfield