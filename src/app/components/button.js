export default function Button({ children, onClick, type = 'button' }) {
  return (
    <button
      className="border-red-600 border-2 shadow-md py-2 px-4 m-4 bg-gray-100 text-black text-sm rounded-md hover:bg-emerald-100 active:bg-red-100"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
