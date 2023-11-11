export default function Card({
  title = 'Default',
  subtitle = 'Default',
  image = { defaultImage },
  description = 'http://placekitten.com/250/250',
}) {
  return (
    <div
      id="card"
      className="flex flex-col p-4 max-w-xl max-h-sm border-solid border-2 border-red-600 m-8 rounded-lg bg-gray-100 shadow-lg hover:scale-110 "
    >
      <h1 className="text-3xl text-black font-bold pb-2">{title}</h1>
      <p className="text-black underline">{subtitle}</p>
      <div className="flex flex-row">
        <img
          className="object-contain h-48 w-48 mx-2 my-4 border-solid border-2 border-red-600 rounded-md object-contain"
          src={image}
        ></img>
        <p className="text-black pt-3 mx-2">{description}</p>
      </div>
    </div>
  )
}
