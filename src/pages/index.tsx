import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="bg-[#363636] px-12 py-3 rounded-full">
        <h1 className="text-3xl">Human
          <span className='text-[#449DD1]'>.io</span>
        </h1>
      </div>
      

      {/* date label */}
      <div className="flex flex-col items-center pt-24">
        <h2 className="text-2xl font-bold pb-8">Enter Birthdate</h2>

        <div className='bg-[#232323] px-12 py-3 rounded-lg flex'>
          <div className="flex flex-row items-center justify-center gap-10">
            <input type="number" className="w-32 h-12 text-2xl text-center border-2 border-gray-300 rounded-md bg-[#2B2B2B] border-none" />
            <input type="text" className="w-32 h-12 text-2xl text-center border-2 border-gray-300 rounded-md bg-[#2B2B2B] border-none" />
            <input type="number " className="w-32 h-12 text-2xl text-center border-2 border-gray-300 rounded-md bg-[#2B2B2B] border-none" />
            <p className='text-4xl'> : </p>
            <input type="text" className="w-32 h-12 text-2xl text-center border-2 border-gray-300 rounded-md bg-[#2B2B2B] border-none" />
          </div>
        </div>

      </div>
      
    </main>
  )
}
 