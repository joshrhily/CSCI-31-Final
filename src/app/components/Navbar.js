import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid'

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
      <ArrowsRightLeftIcon className="h-8 w-8 text-red-600" />
      <div className="flex gap-4">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="px-4 py-2 text-white bg-red-600 rounded-md shadow-md border-solid border-2 border-gray-200 hover:bg-red-700 active:bg-red-800"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  )
}
