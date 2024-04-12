import { useState } from 'react';
import heartHealed from './assets/heart-healed.svg';
import heartScarred from './assets/heart-scarred.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className='max-w-screen-sm mx-auto flex flex-col items-center'>
        <aside className='text-[#C1C1C1] px-5 py-2 bg-[#F4F4F4] text-center max-w-72 rounded-3xl mt-20 mb-52'>
          dailyQuotes is now opensource!
        </aside>
        <header className='mb-16'>
          <h1 className='font-semibold text-2xl text-center tracking-tight'>
            dailyQuotes
          </h1>
        </header>
        <div className='mb-28'>
          <p className='font-regular text-center text-3xl text-[#808080] tracking-tighter'>
             Money and success don’t change people; they merely amplify what is
            already there 
          </p>
        </div>
        <div className='flex flex-row items-center justify-center gap-14'>
          <div className='flex flex-col items-center justify-center'>
            <img
              src={heartScarred}
              alt='Button to show dissapproval'
              srcset=''
              className='cursor-pointer max-w-12 max-h-12'
            />
            <span className='text-[#C1C1C1] text-xs text-center font-semibold'>Sheesh</span>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img
              src={heartHealed}
              alt='Button to show approval'
              srcset=''
              className='cursor-pointer max-w-12 max-h-12'
            />
            <span className='text-[#C1C1C1] text-xs text-center font-semibold'>Sweet</span>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
