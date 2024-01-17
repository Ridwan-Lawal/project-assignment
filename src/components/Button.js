// reusable button
export function Button({ content = "Button", width, padX }) {
  return (
    <button
      className={`bg-slate-900 ${width} ${padX} text-white text-[17px] font-medium py-3`}
    >
      Checkout
    </button>
  );
}
