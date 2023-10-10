import Image from 'next/image'
import Header from './components/Header';
import Banner from './components/Banner';

export default function Home() {
  return (
    <div className='top-0 m-0 p-0 '>
    <Header></Header>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Banner></Banner>
      
    </main>
    </div>
  )
}
