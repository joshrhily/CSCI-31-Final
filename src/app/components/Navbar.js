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
    <div className="bg-gray-100 mx-2 p-5 border-red-600 border-4">
      <div className="flex justify-end gap-4 m-4 bg-red-200 border-red-600 border-4 p-2">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="px-4 py-2 bg-gray-100 rounded-md text-black shadow-md border-solid border-2 border-red-400 hover:bg-gray-200 active:bg-gray-300"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  )
}
