function Button({
  disabled = false,
  onClick,
  children,
  type = "button",
  addedClassNames,
  ...rest
}: {
  disabled?: boolean,
  onClick: () => void,
  children: React.ReactNode,
  addedClassNames?: string 
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`border rounded border-gold-300 bg-chocolate-500 text-gold-300 ${addedClassNames ? addedClassNames : null} ${disabled ? "opacity-50" : ""}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}
// px-8 py-2 mx-2 
export default Button;
