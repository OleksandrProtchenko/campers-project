import css from "./Button.module.css";

interface ButtonProps {
  onClick?: () => void;
  type: "button" | "submit" | "reset";
  class?: string;
  text: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export default function Button({
  onClick,
  type,
  class: className,
  text,
  icon,
  disabled,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${css.button} ${className}`}
      disabled={disabled}
    >
      {icon}
      {text}
    </button>
  );
}
