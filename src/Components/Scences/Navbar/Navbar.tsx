import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from '@/assets/Logo.png'
import Link from "./Link";
import { SelectedPage } from "@/Shared/types";
import useMediaQuery from "@/Hooks/useMediaQuery";
import ActionButton from "@/Shared/ActionButton";

type Props = {
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void;
    isTopOfPage: boolean
}

const Navbar = ({setSelectedPage, selectedPage, isTopOfPage } : Props) => {
    const flexBetween = 'flex items-center justify-between';
    const isAboveMediaScreens = useMediaQuery('(min-width: 1060px)')
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const navbarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow'
  return (
    <>
        <nav>
            <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        <img src={Logo} alt="Logo" />
                        {isAboveMediaScreens ? (
                                <div className={`${flexBetween} w-full`}>
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <div className={`${flexBetween} gap-8`}>
                                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                        <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                        <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                        <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    </div>
                                </div>
                                <div className={`${flexBetween} gap-8`}>
                                    <p>Sign In</p>
                                    <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
                                </div>
                            </div> 
                            ) : (
                                <button className='p-2 rounded-full bg-secondary-500' onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                    <Bars3Icon className="w-6 h-6 text-white" />
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
            <div>
                {
                    !isAboveMediaScreens && isMenuToggled && (
                        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                            {/* Close Icon */}
                            <div className="flex justify-end p-12">
                                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                    <XMarkIcon className="w-6 h-6 text-gray-400" />
                                </button>
                            </div>
                            <div className="flex flex-col ml-[33%] gap-10 text-2xl">
                                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            </div>
                        </div>
                    )
                }
            </div>
         
        </nav>
    </>
  )
}

export default Navbar