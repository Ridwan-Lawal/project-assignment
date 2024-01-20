// reusable button
export function Button({
  content = "Button",
  padY = "py-3",
  width,
  padX,
  bgColor = "bg-slate-900",
  onClick,
  textColor = "text-white",
  fontSize = "text-[17px]",
}) {
  return (
    <button
      onClick={onClick}
      className={` ${bgColor} ${width} ${padX} ${textColor} ${fontSize} font-medium ${padY}`}
    >
      {content}
    </button>
  );
}
