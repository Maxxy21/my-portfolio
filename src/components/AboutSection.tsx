import {memoji2} from "@/assets/memoji";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
    return (
        <div id="about"
             className='flex flex-col md:h-screen md:flex-row justify-around items-center mb-12 md:mb-0'>
            <div
                className='bg-[#FBC6034D] rounded-full w-[300px] h-[300px] flex justify-center items-center mb-12 md:mb-0'
            >
                <Image
                    src={memoji2}
                    width={250}
                    height={250}
                    alt='Laurents Memoji'/>
            </div>
            <div className='flex flex-col gap-6 md:w-[500px]'>
                <h2 className='my-10 text-center font-bold text-4xl'>
                    About Me
                    <hr className="w-6 h-1 mx-auto my-4 bg-yellow-500 border-0 rounded"></hr>
                </h2>
                <p className='md:text-xl text-gray-500'>
                    Dedicated Software Developer experienced in JavaScript and TypeScript,
                    passionate about creating innovative solutions through code.
                </p>

                <p className='md:text-xl text-gray-500'>
                    From designing user-friendly interfaces to optimizing performance, I
                    collaborate with cross-functional teams to deliver high-quality,
                    scalable software applications that exceed user expectations.
                </p>

                <p className='md:text-xl text-gray-500'>
                    An Organized person, always comfortable learning new things, always
                    practicing, a problem solver. Gamer. Football, NBA and F1 fan.
                </p>
            </div>
        </div>
    )
}

export default AboutSection;