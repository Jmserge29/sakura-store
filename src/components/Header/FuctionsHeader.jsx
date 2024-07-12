import { ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

function FuctionsHeader() {
    const router = useRouter();
  return (
    <div className="pt-2 px-4 flex justify-around">
            <h2 className='hover:cursor-pointer text-3xl sakura_logo' onClick={() => router.push("/")}>SAKURA</h2>
            <input type="text" className='w-1/2 text-white focus:border-rose-300 focus:ring-2 bg-slate-50 pl-8 rounded-xl' placeholder='Camiseta Bordado Negro'/>
            <div className='flex gap-x-5'>
                <div className='relative hover:cursor-pointer bg-slate-50 rounded-xl shadow-md p-2'>
                    <div className='absolute flex rounded-full ml-4 bg-rose-300 size-4 text-xs font-semibold items-center justify-center'>9</div>
                    <ShoppingCartIcon className=' size-8 text-gray-950'/>
                </div>
                <div onClick={() => router.push("/user")} className='relative hover:cursor-pointer bg-slate-50 rounded-xl shadow-md p-2'>
                    <div className='absolute flex rounded-full ml-5 bg-rose-300 size-3 text-xs font-semibold items-center justify-center'></div>
                    <UserCircleIcon className=' size-8 text-gray-950'/>
                </div>
            </div>
        </div>
  )
}

export default FuctionsHeader