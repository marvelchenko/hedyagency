import React from 'react';
import { Link } from 'react-router-dom';
import trump from '../assets/trump.jpg'

const Hero = ({ item }) => {
  return (
    <>
      <div className="w-full flex flex-wrap  justify-center">
        {item.map((item, index) => (
          <div
            key={item.id}
            className="h-[50vh] md:h-[95vh] bg-cover bg-black bg-center relative rounded-bl-3xl rounded-br-3xl"
            style={{ backgroundImage: `url(${item.background})`, backgroundSize: '200%',  backgroundSize: 'contain', backgroundRepeat: 'no-repeat',  backgroundPosition: 'center', }}
          >
            
            <div className="z-10 h-full w-full flex flex-col justify-center md:ml-20">
              <h3 className="text-white md:text-8xl text-6xl ml-4 font-bold">digital</h3>
              <h3 className="text-white md:text-8xl text-6xl  ml-4 font-bold">makers</h3>
              <div className='text-black ml-4  text-[10px] flex w-60 items-center p-2 rounded-lg gap-5 bg-white'>
                <img src={trump} alt="" className='object-cover rounded-lg h-20'/>
                <div>
                  <p className='font-semibold'>2min pour nous connaitre</p>
                  <Link to='/c-est' className='text-blue-600 underline'>C'est parti !</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
