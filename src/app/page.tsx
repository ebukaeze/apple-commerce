import Image from 'next/image'
import Header from './components/Header';
import Banner from './components/Banner';
import Product from './components/Product';

export default function Home() {
  return (
    <div className='top-0 m-0 p-0 '>
    <Header></Header>
    <main className="relative h-[186vh] w-full flex flex-col items-center">
     <Banner></Banner>
      
    </main>
    <section className='w-full relative z-40 mt-[-100vh] min-h-screen bg-[#1B1B1B]'>
      <div className='w-full flex mx-auto max-w-6xl text-white items-center justify-center py-12 '>
<h2 className='text-xl text-white tracking-wide font-medium'>New Promos</h2>
      </div>
    </section>
    
    </div>
  )
}
