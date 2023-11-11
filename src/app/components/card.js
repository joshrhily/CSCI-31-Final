export default function Card({ title, subtitle, img, description }) {
  return (
    <div
      id="card"
      className="flex flex-col p-4 max-w-sm border-solid border-2 border-red-600 m-8 rounded-lg bg-gray-200"
    >
      <h1 className="text-3xl text-black font-bold pb-2">{title}</h1>
      <p className="text-black">{subtitle}</p>
      <img className="mx-2 my-4 border-solid border-2 border-red-600 rounded-md" src={img}></img>
      <p className="text-black">{description}</p>
    </div>
  )
}
