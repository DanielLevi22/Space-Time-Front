import { getUser } from "@/lib/auth";

import Image from "next/image";
import Link from "next/link";

export function Profile() {
  const {name,avatarUrl} = getUser()
  return(
    <div
        className='flex items-center gap-3 text-left '>
          <Image src={avatarUrl}  alt="" width={40} height={40} className="h-10 w-10 rounded-full"/>
            <p className=' text-sm leading-snug max-w-[140px]'> 
            {name}
            <a href="/api/auth/logout" className="block text-red-300 hover:text-red-400">Sair</a>
            </p>
      </div>
  )
}