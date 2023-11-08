import Image from "next/image";
import {memoji3} from "@/assets/memoji";
import {github, twitter} from "@/assets/logos";

const ContactSection = () => {
    return (
        <div id="contact"
             className="flex flex-col justify-center items-center gap-6 text-center">
            <div className='bg-[#FBC603] rounded-full w-[300px] h-[300px] flex justify-center items-center'>
                <Image
                    src={memoji3}
                    width={250}
                    height={250}
                    alt='Laurents Memoji'/>

            </div>
            <h3 className='text-4xl'>Have a great idea?</h3>

            <ul className='flex gap-4 w-28 h-28'>
                <li>
                    <a href='https://github.com/laurentcodes' target='_blank'
                    ><Image src={github} alt='Github Logo'/></a
                    >
                </li>
                <li>
                    <a href='https://twitter.com/laurent__god' target='_blank'
                    ><Image src={twitter} alt='Twitter Logo'/></a
                    >
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/laurentcodes/' target='_blank'>
                        <Image src={github} alt='LinkedIn Logo'/></a
                    >
                </li>
            </ul>
        </div>
    )
}

export default ContactSection;