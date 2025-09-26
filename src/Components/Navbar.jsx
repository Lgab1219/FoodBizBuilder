import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function Navbar() {

    const [menuOpened, setMenuOpened] = useState(false);
    const navMenus = [
        { name: "Home", link: "#hero" },
        { name: "Benefits", link: "#benefits" },
        { name: "Tiers", link: "#tier" },
        { name: "Contact", link: "#contact" }
    ]

    const menuTransitions = {
        open: {
            opacity: 1,
            transform: "translateX(0)",
            transition: { duration: 0.5 }
        },
        close: {
            opacity: 0,
            transform: "translateX(-100%)",
            transition: { duration: 0.5 }
        }
    };

    const openMenu = () => {
        setMenuOpened(!menuOpened);
    }

    return (
        <>
            <nav className="navbar w-full h-[8rem] justify-between items-center
            z-10 bg-back fixed top-0 left-0 flex flex-row">
                <img src="./resources/FoodBizBuilder_Logo.webp" alt="logo" 
                className="logo w-[20%] my-[5%] mx-[5vw]" />
                <img src="./icons/BurgerIcon.svg" alt="burger-icon" className="burger" onClick={openMenu} />
            
                <ul id="pc-menu" className="menu-items hidden flex flex-row">
                    {navMenus.map((menu) => (
                        <li className="nav-menu py-2 main" key={menu.name}><a href={menu.link}>{menu.name}</a></li>
                    ))}
                </ul>
            </nav>

            {/* AnimatePresence allows open and exit transitions conditionally for menu */}
            <AnimatePresence>
                {menuOpened ? 

                <motion.div key="modal" initial={menuTransitions.close} animate={menuTransitions.open} exit={menuTransitions.close} 
                className="open-menu w-full h-screen top-0 left-0 bg-back z-20 flex flex-col py-3 fixed z-2">
                    <section className="menu-control pb-8">
                        <img src="./icons/BurgerCloseIcon.svg" alt="close-button" className="close" onClick={openMenu} />
                    </section>

                    <ul>
                        {navMenus.map((menu) => (
                            <li className="nav-menu py-2 main" key={menu.name}
                            onClick={openMenu}><a href={menu.link}>{menu.name}</a></li>
                        ))}
                    </ul>

                </motion.div> : null

                }
            </AnimatePresence>
        </>
    )
}

export default Navbar;