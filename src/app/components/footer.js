import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/github'
import 'react-social-icons/x'
import 'react-social-icons/instagram'
import 'react-social-icons/facebook'
import { GlobeAltIcon } from '@heroicons/react/24/solid'

export default function Footer() {
  return (
    <div>
      <hr className="mx-8 mt-8 border-double border-4"></hr>
      <div className="flex mt-4 mb-6 mx-6 p-4 justify-between">
        <div className="flex gap-4">
          <GlobeAltIcon className="h-16 w-16 text-white" href="/" />
          <p className="flex italic items-end">©Joshua Lee</p>
        </div>
        <div className="flex gap-4 items-center">
          <SocialIcon className="hover:scale-105" url="https://facebook.com/" />
          <SocialIcon className="hover:scale-105" url="https://instagram.com/" />
          <SocialIcon className="hover:scale-105" url="https://github.com/" />
          <SocialIcon className="hover:scale-105" url="https://x.com/" />
        </div>
      </div>
    </div>
  )
}
