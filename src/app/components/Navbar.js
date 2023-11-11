import { GlobeAltIcon } from '@heroicons/react/24/solid'

const menuItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
  {
    title: 'Services',
    href: '/services',
  },
  {
    title: 'Products',
    href: '/products',
  },
]

export default function Navbar() {
  return (
    <div className="flex justify-between m-8">
      <GlobeAltIcon className="h-12 w-12 text-white" />
      <div className="flex gap-4">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="px-4 py-2 text-black bg-gray-100 rounded-md shadow-md border-solid border-2 border-red-600 hover:bg-emerald-100 active:bg-red-100"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  )
}
