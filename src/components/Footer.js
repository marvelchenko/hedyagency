import React from 'react'
import footerlogo from '../assets/footerlogo.png'
import { Link } from 'react-router-dom'
import be from '../assets/be.png';
import LinkedIn from '../assets/in.png';
import ball from '../assets/ball.png'

const Footer = () => {
  return (
    <>
      <div className='w-full flex-wrap p-5'>
        <div className='  rounded-3xl p-1 bg-gradient-to-r from-pink-500 to-purple-500 '>
        <div className='rounded-3xl bg-white p-10'>
        <div className='flex flex-col md:flex-row justify-between text-[12px]'>
            <div>
                <img src={footerlogo} alt="footer" className='h-14' />
            </div>
            <div>
                <h3 className='mb-2 font-semibold'>Expertise</h3>
                <ul>
                <li className='mb-2'><Link to="/design-thinking">Design Thinking</Link></li>
                <li className='mb-2'><Link to="/ux-design">UX Design</Link></li>
                <li className='mb-2'><Link to="/ui-design">UI Design</Link></li>
                <li className='mb-2'><Link to="/product-design">Product Design</Link></li>
                <li className='mb-2'><Link to="/development-webflow">Developement Webflow</Link></li>
                </ul>
            </div>
            <div>
                <ul>
                <li className='mb-2'><Link to="/development">Developpement Shopify</Link></li>
                <li className='mb-2'><Link to="/referencement-seo">Referencement SEO</Link></li>
                <li className='mb-2'><Link to="/referencement-sea">Referencement SEA</Link></li>
                <li className='mb-2'><Link to="/reseaux-sociaux">Reseaux sociaux</Link></li>
                </ul>
            </div>
            <div>
                <h3 className='font-semibold mb-2'>France</h3>
                <p className='mb-2'>hello@hedyagency.com</p>
                <p className='mb-2'>070 6215 1904</p>
                <h3 className='font-semibold mb-2'>Marvelous Egor</h3>
                <button className="text-white mb-8 bg-gradient-to-r from-pink-500 to-blue-500 px-2 py-2 rounded-lg">
                1.38 CO2/view <span className='bg-white  px-4 py-1 rounded-r-lg text-black'>Ecoindex A</span>
                </button>
                <div>
                <button className="text-black mb-2 font-sans font-semibold italic shadow-md bg-white px-2 py-2 rounded-lg">
                webflow<span className=' text-black font-light ml-1'>Experts</span>
                </button>
                </div>
                <p className='text-[10px]'>Mentions légales</p>
            </div>
            <div className=''>
          <div className='flex gap-4 mb-4 md:mb-0'>
          <img src={be} alt="" />
           <img src={ball} alt="" />
           <img src={LinkedIn} alt="" />
          </div>
            </div>
            </div>
            <p className='text-[10px]'>©2022 Hedy. Tous droits reservés. <span className='font-semibold'>Developed by Marvelous Egor</span></p>
        </div>
        </div>
      </div>
    </>
  )
}

export default Footer
