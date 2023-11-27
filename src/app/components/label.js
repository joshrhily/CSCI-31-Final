export default function Label({ label, htmlFor }) {
  return (
    <label className="text-white text-3xl font-bold" htmlFor={htmlFor}>
      {label}:
    </label>
  )
}
