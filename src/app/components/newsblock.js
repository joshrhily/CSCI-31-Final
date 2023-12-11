export default function NewsBlock({ title = 'News Title', description = 'News Description' }) {
  return (
    <div className="flex flex-col m-12 p-6 border-2 border-red-600 rounded-md bg-gray-100 max-w-sm">
      <h1 className="mb-4 text-black font-bold text-2xl">{title}</h1>
      <div>
        <p className="text-black">{description}</p>
      </div>
    </div>
  )
}
