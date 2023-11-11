const defaultContent = `This is a page where I can practice building React pages, create and reuse components, and experiment. 
I wasn't able to generate a lorem ipsum text because I can't connect to the network on my MacBook at the moment.`

export default function PageContent({ content = defaultContent }) {
  return <h1 className="mx-8 bg-gray-200 text-black border-solid border-2 rounded-md border-red-600 p-2">{content} </h1>
}
