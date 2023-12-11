const defaultContent = `This is a page where I can practice building React pages, create and reuse components, and experiment. 
I wasn't able to generate a lorem ipsum text because I can't connect to the network on my MacBook at the moment.`

export default function PageContent({ content = defaultContent }) {
  return (
    <h1 className="flex justify-center mx-20 mb-6 bg-gray-100 text-black border-solid border-2 rounded-md border-red-600 p-4 shadow-lg">
      {content}
    </h1>
  )
}
