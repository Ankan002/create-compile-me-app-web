import Image from "next/image";
import CreateCompileMeAppLogo from "../../assets/images/create-compile-me-app-logo.png";

const Navbar = () => {
    return (
        <header className="w-full flex px-3 py-2 border-b-2 border-b-primary-dark bg-primary-yellow items-center justify-between shadow-lg shadow-primary-dark/30 fixed top-0">
            <div className="flex items-center justify-center">
                <Image src={CreateCompileMeAppLogo.src} height={CreateCompileMeAppLogo.height} width={CreateCompileMeAppLogo.width} alt="name" className="w-10 h-10" />

                <h1 className="ml-3 md:text-xl text-lg md:font-normal font-semibold tracking-widest">
                    Create Compile Me App
                </h1>
            </div>
        </header>
    )
};

export default Navbar;
