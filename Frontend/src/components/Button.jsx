function Button({ style, children , onClick }) {
    return <button onClick={onClick} className={style}>{children}</button>;
  }
  
  export default Button;
  
  