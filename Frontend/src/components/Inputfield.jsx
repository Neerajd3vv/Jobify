
function Inputfield({placeholder, value, style , type , onChange}) {
    return (
      <input value={value} onChange={onChange} placeholder={placeholder} className={style} type={type}/>
    )
  }
  
  export default Inputfield