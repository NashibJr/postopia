const Button = ({ class_name, handleClick, label }) => {
  return (
    <button type="button" className={class_name} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
