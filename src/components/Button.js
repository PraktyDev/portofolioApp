import classNames from "classnames";

const Button = ({ label, reactIcon, backgroundColor }) => {

  const bgColor = backgroundColor ? backgroundColor : "bg-transparent";
  return (
    <button
      className={classNames(
        "flex flex-row justify-center hover:bg-blue-400 items-center gap-2 border border-blue-500 p-1 rounded-sm text-xs text-white",
        bgColor
      )}
    >
      {label}
      {reactIcon}
    </button>
  );
};

export default Button;
