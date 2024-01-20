export function Error({ error = "Something went wrong" }) {
  return (
    <div className="text-center">
      <p className="text-3xl text-red-700">{error}!</p>
    </div>
  );
}
