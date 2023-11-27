export default function Input({ type = 'text', placeholder = 'enter text here...', name, id }) {
  return (
    <input
      className="my-2 border-2 rounded-md shadow-lg p-3 border-red-600 text-md text-black bg-gray-100"
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
    />
  )
}
