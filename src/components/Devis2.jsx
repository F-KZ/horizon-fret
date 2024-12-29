import contact from "/images/3.png"
import { SOCIAL_NETWORKS } from "../lib/contact"
import ContactForm from "./SubmitMail"



const Devis2 = () => {
    return (
        <div className='flex flex-row justify-around items-center flex-wrap gap-8 md:gap-0 px-8 md:px-0'>
            <div
             data-aos="fade-up">
                <img
                    alt='dessin contact'
                    src={contact}
                    width={200}
                    height={200}
                />
            </div>
            <div className="flex flex-col justify-between items-start gap-4 w-full md:w-auto ">
            <h1 className="text-2xl lg:text-3xl font-semibold font-serif text-center text-customBlue lg:text-left mb-4 lg:mb-6">Des Questions ?</h1>
                {SOCIAL_NETWORKS.map((x, index) => (
                    <div key={index} className="flex flex-row items-center gap-3">
                    <a className="inline-flex cursor-pointer items-center justify-center w-10 h-10 border-2 border-customBlue rounded-full text-[20px] text-customBlue mx-2 transition duration-500 hover:bg-customBlue hover:text-white hover:shadow-[0_0_10px_customBlue]">{x.icon}</a>  {x.url}
                    </div>
                ))}
            </div>
            <div className="w-full md:w-auto">
            <h1 className="text-2xl lg:text-3xl font-semibold font-serif  text-customBlue lg:text-left mb-4 lg:mb-6">Prêt à expédier ?</h1>
                <ContactForm/>
            </div>
        </div>
    )
}

export default Devis2