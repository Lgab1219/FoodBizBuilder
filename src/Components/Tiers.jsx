import { motion } from "motion/react"

function Tiers() {
    return (

        <>
            <motion.div
            initial={{ opacity: 0, y: -50  }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease:'easeOut' }}
            viewport={{ once: false, amount: 0.2 }} id="tier"
            className="flex flex-col my-10 min-h-screen">
                <h2 className="section-title text-3xl font-bold pt-5 averia main">
                    Choose the plan that <span className="secondary">fits your needs</span>
                </h2>

                <main className="tier-container">
                    <div className="tier-card justify-between flex flex-col pb-10 mt-10 w-full h-92 bg-back border-main rounded-xl">
                        <p className="tier-title main averia py-5">Growth Tier</p>
                        <ul className="text-left px-8 list-disc">
                            <li className="tier-description averia-light main text-[10px]">1-page site (Hero/CTA, Menus, Contact/Socials)</li>
                            <li className="tier-description averia-light main text-[10px]">Showcase up to 10 products.</li>
                            <li className="tier-description averia-light main text-[10px]">2 free edits per month. ($20 for additional edits)</li>
                            <li className="tier-description averia-light main text-[10px]">Hosting & maintenance included.</li>
                            <li className="tier-description averia-light main text-[10px]">Basic SEO setup (title tags, meta descriptions)</li>
                            <li className="tier-description averia-light main text-[10px]">Own your site after 9 months (without hosting & maintenance)</li>
                            <li className="tier-description averia-light main text-[10px]">If payment is cut-off, website becomes inaccessible but remains after 1 year.</li>
                        </ul>

                        <span className="tier-highlight bg-secondary w-full text-center 
                        averia-light back text-[10px] py-2 content-center my-3">
                            <p>$50/month (subscription) or $299 (one-time)</p>
                        </span>
                        <div className="flex justify-center">                            
                            <a href="#contact" className="tier-button averia-light justify-center content-center 
                            w-48 h-12 items-center text-center rounded-3xl bg-extra back text-sm">Avail Growth Tier</a>
                        </div>
                    </div>

                    <div className="tier-card justify-between pb-10 flex flex-col mt-20 w-full h-96 bg-main rounded-xl">
                        <span className="flex justify-center">                            
                            <img src="./icons/CrownIcon.svg" alt="crown" 
                            className="crown mt-[-30%] w-[100px]" />
                        </span>
                        <p className="tier-title back averia py-5">Deluxe Tier</p>
                        <ul className="text-left px-8 list-disc">
                            <li className="tier-description averia-light back text-[10px]">Website can have 7+ pages.</li>
                            <li className="tier-description averia-light back text-[10px]">Online ordering system integration.</li>
                            <li className="tier-description averia-light back text-[10px]">Monthly sales report.</li>
                            <li className="tier-description averia-light back text-[10px]">Unlimited edits per month.</li>
                            <li className="tier-description averia-light back text-[10px]">10+ products for menu</li>
                            <li className="tier-description averia-light back text-[10px]">Basic SEO setup (title tags, meta descriptions)</li>
                            <li className="tier-description averia-light back text-[10px]">Own your site after 12 months.(without hosting & maintenance)</li>
                            <li className="tier-description averia-light back text-[10px]">If payment is cut-off, website becomes inaccessible but remains after 1 year.</li>
                        </ul>

                        <span className="tier-highlight bg-secondary w-full text-center 
                        averia-light back text-[10px] py-2 content-center my-5">
                            <p>$299/month (subscription) OR $2000 (one-time)</p>
                        </span>
                        <div className="flex justify-center">                            
                            <a href="#contact" className="tier-button averia-light justify-center content-center 
                            w-48 h-12 items-center text-center rounded-3xl bg-extra back text-sm">Avail Growth Tier</a>
                        </div>
                    </div>

                </main>

                <span className="learn-more">
                    <p className="averia-light main mt-10">Learn more</p>
                    <section className="justify-center flex py-2">
                        <div className="more-arrow"></div>
                    </section>
                </span>
            </motion.div>
        </>

    )
}

export default Tiers