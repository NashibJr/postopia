const Button = ({ class_name, handleClick, label, disabled }) => {
  return (
    <button
      type="button"
      className={class_name}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
