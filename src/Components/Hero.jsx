import { motion } from "motion/react"

function Hero() {

    return (
        <>
            <motion.div initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease:'easeOut' }}
            viewport={{ once: false, amount: 0.2 }} id="hero"
            className="hero-container flex flex-col my-10 py-8 justify-between min-h-screen">
                <h1 className="section-title text-3xl font-bold pt-5 averia main">
                    “Helping food business startups <span className="secondary">turn 
                    visitors into paying customers</span> with websites that showcase 
                    their products and simplify ordering.” 
                </h1>
                
                <span className="learn-more mb-20">
                    <a href="#benefits" className="averia-light main">Learn more</a>
                    <section className="justify-center flex py-2">
                        <div className="more-arrow"></div>
                    </section>
                </span>

            </motion.div>
        </>
    )

}

export default Hero