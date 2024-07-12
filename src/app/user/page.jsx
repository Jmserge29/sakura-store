import { MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex  flex-col items-center container mx-auto justify-between p-24 ">
      User
      
      <div className="grid grid-cols-3 w-full mt-8">
        {/* Informacion Usuario */}
        <div className="relative col-span-2 mx-5 rounded-lg bg-white h-44 shadow-sm ">
        <div
          className="absolute rounded-full top-[-27%] left-[5%] bg-cover bg-slate-50 bg-center sm:h-40 h-36 sm:w-40 w-36"
          style={{
            backgroundImage: `url("https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9")`,
          }}
        ></div>
          <div className="absolute left-[27%] top-6 leading-5">
            <h3 className=" text-xl font-bold text-gray-950 ">Sakura Limited Bta</h3>
            <span className=" font-semibold text-sm text-stone-600 block">Cliente usual</span>
            <span className=" font-semibold text-xs text-emerald-600">Activo</span>
          
          </div>
          <div>

          </div>
        </div>
        <div className="col-span-1 mx-5 rounded-lg bg-blue-500 h-44"></div>

      </div>
      {/* <div className=" size-44 blur-2xl z-1 bg-rose-500 rounded-full absolute"></div>
      <div className=" size-56 blur-3xl z-1 left-48 mt-24 bg-purple-500 rounded-full absolute"></div>
      <div className="w-full grid grid-cols-6 ">
        <div className=" col-span-3 bg-[white]/50 rounded-lg m-4 grid grid-cols-3 h-48 z-10">
          <div className=" col-span-1 pl-7 flex items-center content-center">
            
          </div>
          <div className=" col-span-2 content-center">
            <h3 className=" font-bold text-2xl text-gray-900 leading- block">Sakura Limited Forge</h3>
            <span className=" text-stone-700 pb-2 font-bold inline-flex content-center items-center"><MapPinIcon className="size-4 mr-1"/> Tokui, Japan / Asia</span>
            <p className="text-xs text-justify mr-8 leading-4 block">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus repudiandae vel dignissimos mollitia laboriosam dolor voluptatem ea tempore harum facere ducimus officia eveniet, ad molestiae atque voluptatibus modi vitae velit?</p>
          </div>
        </div>
        <div className="bg-slate-100 rounded-lg m-4  grid row-span-2 h-44">
        <div className=" bg-slate-600 border-2 border-white h-full"></div>
          <div className=" bg-slate-600 border-2 border-white h-full"></div>
        </div>
        <div className="col-span-2 bg-slate-100 rounded-lg m-4 h-44">r</div>
      </div> */}
    </div>
  )
}
