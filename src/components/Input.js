export function Input({
  type = "text",
  placeholder = "Placeholder",
  inputName = "Form",
  inputError = "There is Error",
  value,
  onChange,
}) {
  console.log(value);
  return (
    <div className="relative group">
      {value && (
        <p className="text-slate-500 bg-white left-5 px-2 text-xs absolute top-1 transtion-all duration-500">
          {inputName}*
        </p>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`py-2.5 mt-2.5   border border-slate-400  focus:border-slate-900 px-4 w-full rounded-md text-sm  placeholder:text-sm focus:outline-none`}
        placeholder={placeholder}
      />
      <p className="text-red-600 mt-2 text-xs italic">{inputError}</p>
    </div>
  );
}
