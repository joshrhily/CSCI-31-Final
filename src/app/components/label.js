export default function Label({ label, htmlFor }) {
  return (
    <label className="text-black text-3xl font-bold" htmlFor={htmlFor}>
      {label}:
    </label>
  )
}
