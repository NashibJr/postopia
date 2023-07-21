const Button = ({ class_name, hanldeClick, label }) => {
  return (
    <button type="button" className={class_name} onClick={hanldeClick}>
      {label}
    </button>
  );
};

export default Button;
