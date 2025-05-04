import React from 'react';
import { Button } from '@/components/ui/button';
// import bannerUrl from "./assets/banners.jpg?url";

const Homes = () => {
  return (
    <div className=' flex flex-col items-center justify-centers '>
      <div className='flex justify-center items-center max-md:gap-20 max-sm:gap-10  sticky bg-gray-900 top-0 z-50 px-4 max-sm:p-1 w-full  py-1 gap-40  shadow '>
      <h1 className='font-bold text-2xl text-white p-5'>Ninja</h1>
      <input className='w-200 max-sm:w-70 border focus:ring-1 focus:ring-white border-white text-white rounded-lg p-1 focus:outline-none' type='text' 
      id='product' placeholder='Search for products here ...'/>
     <a href='/login'> <Button className='max-md:hidden'>Login</Button></a>
</div>

<div className='realtive'>
<img src="./BANNED.jpg" alt='Banner' className='relative  w-full h-full object-cover  '/>
<div className='absolute  inset-0 flex flex-clo items-center justify-center bg-black/20'>
<a href='/products'><button className='group flex items-center  pl-1 bg-white hover:bg-red-100 text-red py-1 rounded-2xl transition-all'>
SHOP NOW 
 <span className='ml-2 flex items-center justify-center w-8 h-8 rounded-full bg-white text-red--600 group-hover:animate-bounce'>
  -->
 </span>
 

</button>
</a>

</div>
</div>
{/* <a href='/products' className='flex justify-center items-center font-bold text-4xl text-gray-100 ' ><Button className='font-bold text-xl p-2 rounded-2xl mt-2'> Browse Product</Button></a> */}
    </div>
  );
};

export default Homes;
