export default function AboutContent({ title = 'Unknown Title', content = 'Content not available' }) {
  return (
    <div className="flex flex-col shadow-md rounded-lg bg-gray-100 text-black max-w-md border-4 border-red-600 mx-10 p-4">
      <div className="text-2xl font-bold pb-2">{title}</div>
      <div className="text-lg">{content}</div>
    </div>
  )
}
