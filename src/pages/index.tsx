import Image from 'next/image'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <h1>human <span className='text-[#58CBA4]'>.id</span></h1>

      {/* date label */}
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold">Enter Birthdate</h2>

        <div className="flex flex-row items-center justify-center mt-4">
          <input type="text" className="w-16 h-16 text-2xl text-center border-2 border-gray-300 rounded-md" />
          <input type="text" className="w-16 h-16 text-2xl text-center border-2 border-gray-300 rounded-md" />
          <input type="text" className="w-16 h-16 text-2xl text-center border-2 border-gray-300 rounded-md" />
        </div>
        :
        {/* time of birth (optional) */}
        <div className="flex flex-row items-center justify-center mt-4">
          <input type="text" className="w-16 h-16 text-2xl text-center border-2 border-gray-300 rounded-md" />
          <input type="text" className="w-16 h-16 text-2xl text-center border-2 border-gray-300 rounded-md" />
        </div>
      </div>
      
    </main>
  )
}
 