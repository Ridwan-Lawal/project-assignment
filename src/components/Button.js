// reusable button
export function Button({ content = "Button", width, padX, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`bg-slate-900 ${width} ${padX} text-white text-[17px] font-medium py-3`}
    >
      {content}
    </button>
  );
}
