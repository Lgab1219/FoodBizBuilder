import { motion } from "motion/react"

function Contact() {

    return (
        <>
            <motion.div 
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease:'easeOut' }}
            viewport={{ once: false, amount: 0.2 }} id="contact"
            className="contact-container flex flex-col mt-10 min-h-screen">
                <section className="image-container flex justify-center">
                    <img src="./resources/mock-website.webp" alt="mock-website" />
                </section>

                <section className="contact-desc justify-center">
                    <h3 className="section-title text-3xl font-bold py-5 averia secondary">
                        Convinced? <span className="main">Let's grow your food business!</span>
                    </h3>
                    <p className="text-sm main averia-light">
                        Take the next step by clicking the button to book a strategy call
                        with us.
                    </p>
                    <a href="https://calendly.com/lancegabrielmaghanoy/15min" className="call-button averia-light flex justify-center content-center 
                    py-3 my-3 items-center text-center rounded-3xl bg-extra back text-sm">
                        Book a call
                    </a>
                    <span className="socials-container flex flex-col my-10">
                        <h3 className="averia main">Socials</h3>
                        <div className="flex flex-row gap-10 justify-center py-3">
                            <a href="https://www.linkedin.com/in/lance-gabriel-a48b77264/"><img src="./icons/linkedin.svg" alt="linkedin" className="w-[50px]" /></a>
                            <a href="https://github.com/Lgab1219"><img src="./icons/github.svg" className="w-[50px]" /></a>
                        </div>
                    </span>
                </section>
            </motion.div>
        </>
    )
}

export default Contact