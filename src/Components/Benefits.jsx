import { Splide, SplideSlide } from '@splidejs/react-splide';
import { motion } from 'motion/react';

function Benefits() {
    return (
<>
    <motion.div 
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease:'easeOut' }}
    viewport={{ once: false, amount: 0.2 }} id='benefits'
    className="benefits-container flex flex-col my-10 justify-between min-h-screen">
        <h2 className="section-title text-3xl font-bold pt-5 averia main">
            What makes my services <span className="secondary">different?</span>
        </h2>

        <div className='slides-container'>
            <Splide options={{
              type: 'loop',
              perPage: 3,
              focus: 'center',
              pagination: false,
              gap: '1rem',
              autoplay: true,
              arrows: false,
              interval: 5000,
              pauseOnHover: true,
              trimSpace: false,  
              breakpoints: {
                640: {
                    perPage: 1,
                },

                1024: {
                    perPage: 2,
                },

                1350: {
                    perPage: 3,
                }
            }
            }}>

                <SplideSlide>
                    <div className='page h-[350px] flex flex-col text-wrap bg-main py-[4%] px-[7vw] text-[3rem]'>
                        <h3 className='benefit-title averia back pb-2'>
                        Turn visitors into buyers</h3>
                        <p className='benefit averia-light back pb-2 text-sm'>
                        Most food startups only use social media, but it’s 
                        hard to convert likes into real sales. Your websites 
                        are built with menus, CTAs, and ordering systems that 
                        make it easy for visitors to become paying customers.</p>
                        <h1 className='page-num averia back'>1</h1>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='page h-[350px] flex flex-col bg-secondary py-[4%] px-[7vw] text-[3rem]'>
                        <h3 className='benefit-title averia back pb-2'>
                        Built for growth</h3>
                        <p className='benefit averia-light back pb-2 text-sm'>
                        You can start small and upgrade later. My services grow 
                        with your business instead of locking it into a one-size-fits-all
                        website.</p>
                        <h1 className='page-num averia back'>2</h1>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='page h-[350px] flex flex-col bg-main py-[4%] px-[7vw] text-[3rem]'>
                        <h3 className='benefit-title averia back pb-2'>
                        Professional first impression</h3>
                        <p className='benefit averia-light back pb-2 text-sm'>
                        A clean, modern website makes your business look more credible 
                        than competitors relying only on Facebook pages. Customers trust 
                        businesses with proper websites more.                        
                        </p>
                        <h1 className='page-num averia back'>3</h1>                            
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='page h-[350px] flex flex-col bg-secondary py-[4%] px-[7vw] text-[3rem]'>
                        <h3 className='benefit-title averia back pb-2'>
                        Affordable & Flexible Pricing</h3>
                        <p className='benefit averia-light back pb-2 text-sm'>
                        Instead of spending thousands upfront, you can start with a low monthly 
                        subscription ($50/month) — perfect for startups with tight budgets. Plus, you can 
                        own the website after a set period!</p>
                        <h1 className='page-num averia back'>4</h1>
                    </div>
                </SplideSlide>
                    
            </Splide>

                <span className="flex justify-center">
                    <a href="https://calendly.com/lancegabrielmaghanoy/15min" className="book-button averia-light flex justify-center content-center 
                    py-3 px-10 my-3 items-center text-center rounded-3xl bg-extra back text-sm">
                        Book a call
                    </a>
                </span>

        </div>
    </motion.div>
</>
    )
}

export default Benefits