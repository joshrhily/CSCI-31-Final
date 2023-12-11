import { GlobeAltIcon } from '@heroicons/react/24/solid'

const menuItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About Us',
    href: '/about',
  },
  {
    title: 'Contact Us',
    href: '/contact',
  },
  {
    title: 'Experience',
    href: '/experience',
  },
  {
    title: 'News',
    href: '/news',
  },
]

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between m-8">
        <div className="flex gap-8">
          <GlobeAltIcon className="flex h-12 w-12 text-white" />
          <h1 className="flex items-center font-bold text-6xl">HTT VOLLEYBALL</h1>
        </div>
        <div className="flex gap-4 items-center">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="px-4 py-2 h-11 text-black bg-gray-100 rounded-md shadow-md border-solid border-2 border-red-600 hover:bg-emerald-100 active:bg-red-100"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
      <hr className="m-8 border-double border-4"></hr>
    </div>
  )
}
