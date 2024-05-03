import {TopBar} from './assets/components/Topbar'
import { Skills } from './assets/components/Skills';
import { LinkedInIcon } from './assets/components/LinkedInIcon';
import { GithubIcon } from './assets/components/GithubIcon';
import purpleGradient from './assets/images/purplegradientBest.png';

function App() {
  return (
      <div className=''>
          <TopBar/>
          <main className="pt-16 #fafafa h-full">
          <div className='flex justify-center py-4'>
          <div className="bg-[#F7F7F7] flex flex-col w-full lg:w-[950px] shadow-md rounded-3xl py-10 px-6 sm:px-8 md:px-12 sm:gap-3 gap-4 font-light text-md">
            <div className='flex justify-center '>
              <div className=" rounded-full h-64 w-64 mt-1 mr-2 flex justify-center">
              <div className=" h-full text-xl flex flex-col justify-center">
                <img src={purpleGradient} alt="Aryan" />
              </div>
          </div>
          </div>
          <div className='flex justify-center py-3'>
            <div className='text-3xl text-regal-grey font-bold'>Hi, I'm Aryan...</div>
          </div>
          
          <div className='flex justify-center'>
            <div className='text-6xl font-extrabold text-center'>Software Developer.</div>
          </div>
          <div></div>
          <div className=' flex justify-center items-center text-gray-500 text-base font-bold text-center'>
          Proficient Full-Stack Developer | Committed to Lifelong Learning | Bridging the Gap Between Theory and Practical Application to Deliver Exceptional User Experiences
          </div>
          {/* ============= */}
          <div className="flex justify-center gap-6 my-6">
            <div className="flex">
              <LinkedInIcon></LinkedInIcon>
              <div className="w-1"></div>
                <GithubIcon/>
                {/* <TwitterIcon/> */}
              </div>
              <div className=' flex justify-center items-center'>
                {/* <div className=' flex-col justify-center'> */}
                  <button className=" bg-black hover:shadow-lg h-11 hover:bg-slate-800
                 text-white text-md rounded-lg py-2 px-8" onClick={() => window.open('mailto:aryansindhi18@gmail.com', '_blank')}>
                  Work with me  -&gt;
                  </button>
                {/* </div> */}
              </div>
              {/* <div className='flex items-center justify-center'>
                  <button classNa`me="bg-black hover:shadow-lg hover:bg-slate-800
                   text-white text-md rounded-lg py-2 px-8">
                    Work with me -&gt;
                  </button>
              </div> */}
            </div>
          {/* ============= */}
          <Skills></Skills>
          </div>
          </div>
          </main>
      </div>
  );
}
export default App
