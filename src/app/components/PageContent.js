const defaultContent = `This is a page where I can practice building React pages, create and reuse components, and experiment. 
I wasn't able to generate a lorem ipsum text because I can't connect to the network on my MacBook at the moment.`

export default function PageContent({ content = defaultContent }) {
  return <h1 className="text-black bg-red-100 rounded-md p-6 border-solid border-red-600 border-2">{content} </h1>
}
