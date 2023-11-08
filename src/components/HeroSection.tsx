// import Image from 'next/image'
// import {rectangle} from "@/assets";
// import {github, linkedin, twitter} from "@/assets/logos";
// import {memoji} from "@/assets/memoji";
// import {HiArrowDown} from "react-icons/hi";
// import {Link} from "react-scroll/modules"
//
//
// const HeroSection = () => {
//     return (
//         <section id='hero'>
//             <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
//                 <div className='flex flex-col gap-10'>
//                     <h2 className='text-5xl font-bold flex items-end md:items-center gap-3'>
//                         Maxwell Aboagye <span>
// 						 <Image
//                              src={rectangle}
//                              alt="Yellow Rectangle"
//                          />
// 					</span>
//                     </h2>
//                     <p className='text-xl'>Developer from Hamburg, Germany</p>
//
//                     <ul className='flex gap-4 w-28 h-28'>
//                         <li>
//                             <a href='' target='_blank'
//                             >
//                                 <Image
//                                     src={github}
//                                     alt="Yellow Rectangle"
//                                 />
//                             </a
//                             >
//                         </li>
//                         <li>
//                             <a href='' target='_blank'
//                             > <Image
//                                 src={github}
//                                 alt="Yellow Rectangle"
//                             />
//                             </a
//                             >
//                         </li>
//                         <li>
//                             <a href='' target='_blank'>
//                                 <Image
//                                     src={linkedin}
//                                     alt="Yellow Rectangle"
//                                 />
//                             </a
//                             >
//                         </li>
//                     </ul>
//                 </div>
//
//                 <div
//                     className='bg-[#5643C133] rounded-full w-[300px] h-[300px] flex justify-center items-center mt-[50px] md:mt-0'
//                 >
//                     <Image
//                         className='w-[250px] h-[250px] ml-3'
//                         src={memoji}
//                         alt='Laurents Memoji'
//                     />
//                 </div>
//             </div>
//             <div className="flex flex-row items-center text-center justify-center ">
//                 <Link
//                     to="about"
//                     activeClass="active"
//                     spy={true}
//                     smooth={true}
//                     offset={-100}
//                     duration={500}
//                 >
//                     <HiArrowDown size={35} className="animate-bounce"/>
//                 </Link>
//             </div>
//         </section>
//
//
//     )
// }
//
//
// export default HeroSection;


import Image from 'next/image'
import {rectangle} from "@/assets";
import {portrait} from "@/assets/my-pics";
import {HiArrowDown} from "react-icons/hi";
import {Link} from "react-scroll/modules"
import {AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineYoutube} from "react-icons/ai";
import {BiLogoXing} from "react-icons/bi";


const HeroSection = () => {
    return (
        <section id="home">
            <div
                className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
                <div className="md:mt-2 md:w-1/2">
                    <Image
                        src={portrait}
                        alt=""
                        width={325}
                        height={325}
                        className="rounded-full shadow-2xl"
                    />
                </div>
                <div className="md:mt-2 md:w-3/5">
                    <h1 className="text-5xl font-bold flex items-end md:items-center gap-3">
                        Maxwell Aboagye
                        <span>
                            <Image src={rectangle} alt="underline"/>
                        </span>
                    </h1>
                    <p className="text-lg mt-4 mb-6 md:text-2xl">
                        I&#39;m a{" "}
                        <span className="font-semibold text-yellow-400">
              Software Engineer{" "}
            </span>
                        based in Los Angeles, CA. Working towards creating software that
                        makes life easier and more meaningful.
                    </p>
                    <div className='flex gap-4 w-28 h-28'>
                        <a href="https://github.com/hqasmei" rel="noreferrer" target="_blank">
                            <AiOutlineGithub
                                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                                size={30}
                            />
                        </a>
                        <a
                            href="https://twitter.com/hqasmei"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <AiOutlineTwitter
                                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-200"
                                size={30}
                            />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/hosnaqasmei/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <AiOutlineLinkedin
                                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                                size={30}
                            />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCQBMkSDgbxDb8usMeXmOZyA"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <AiOutlineYoutube
                                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                                size={30}
                            />
                        </a>
                        <a href="https://github.com/hqasmei" rel="noreferrer" target="_blank">
                            <BiLogoXing
                                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                                size={30}
                            />
                        </a>
                    </div>

                </div>
            </div>
            <div className="flex flex-row items-center text-center justify-center ">
                <Link
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    <HiArrowDown size={35} className="animate-bounce"/>
                </Link>
            </div>
        </section>

    )
}


export default HeroSection;