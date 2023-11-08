"use client"
import React from "react"
import {useState} from "react"
import {Link} from "react-scroll/modules"
import {usePathname} from "next/navigation"
import {useTheme} from "next-themes"
import {RiMoonFill, RiSunLine} from "react-icons/ri"

interface NavItem {
    label: string
    page: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "About",
        page: "about",
    },
    {
        label: "Projects",
        page: "projects",
    },

    {
        label: "Skills",
        page: "skills",
    },
    {
        label: "Contact",
        page: "contact",
    },
]
const NavBar = () => {
    // const {systemTheme, theme, setTheme} = useTheme()
    // const currentTheme = theme === "system" ? systemTheme : theme
    usePathname();
    const [navbar, setNavbar] = useState(false)
    const { resolvedTheme, theme, setTheme } = useTheme();

    return (
        <header id='navbar'
                className='md:px-12 flex flex-col md:flex-row justify-between h-[80px] md:h-[50px] w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow items-center left-0 right-0 bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600 py-3'>
            <div>
                <Link to="home">
                    <h2 className="text-2xl font-bold">Maxwell</h2>
                </Link>
            </div>
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <div className="justify-between md:items-center md:flex flex gap-6">
                    {NAV_ITEMS.map((item, idx) => {
                        return (
                            <Link
                                key={idx}
                                to={item.page}
                                className={
                                    "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100"
                                }
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                onClick={() => setNavbar(!navbar)}
                            >
                                {item.label}
                            </Link>
                        )
                    })}
                    <button
                        onClick={() => {
                            setTheme(resolvedTheme === "light" ? "dark" : "light");
                        }}
                        type='button'
                        className='bg-slate-100 p-2 rounded-xl'>
                        {theme === "light" ? <RiMoonFill size={10}/>:  <RiSunLine size={10} color="black"/>}
                    </button>
                    {/*{currentTheme === "dark" ? (*/}
                    {/*    <button*/}
                    {/*        onClick={() => setTheme("light")}*/}
                    {/*        className="bg-slate-100 p-2 rounded-xl"*/}
                    {/*    >*/}
                    {/*        <RiSunLine size={10} color="black"/>*/}
                    {/*    </button>*/}
                    {/*) : (*/}
                    {/*    <button*/}
                    {/*        onClick={() => setTheme("dark")}*/}
                    {/*        className="bg-slate-100 p-2 rounded-xl"*/}
                    {/*    >*/}
                    {/*        <RiMoonFill size={10}/>*/}
                    {/*    </button>*/}
                    {/*)}*/}
                </div>
            </div>
        </header>
    );


}

export default NavBar;