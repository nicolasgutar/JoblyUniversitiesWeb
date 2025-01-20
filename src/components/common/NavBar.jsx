import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function NavBar() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth >= 960) {
                setOpenNav(false);
            }
        });
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                className="p-1 font-normal text-backgroundP"
            >
                <Link to="/" className="flex items-center">
                    Home
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 font-normal text-backgroundP"
            >
                <Link to="/about" className="flex items-center">
                    About
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 font-normal text-backgroundP"
            >
                <Link to="/trabajos" className="flex items-center">
                    Trabajos
                </Link>
            </Typography>
        </ul>
    );

    return (
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-gradient-to-b">
            <div className="flex items-center justify-between text-blue-gray-900">
                {/* Brand/Logo with Icon */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <img
                        src="/UnisabanaP.png"
                        alt="Unisabana Logo"
                        className="h-10 w-10"
                    />
                    <Typography as="div" className="py-1.5 font-medium">
                        <Link to="/">Jobly x Unisabana</Link>
                    </Typography>
                </div>

                <div className="flex items-center gap-4">
                    {/* Desktop Nav */}
                    <div className="mr-4 hidden lg:block">{navList}</div>

                    {/* Login / Signup (desktop) */}
                    <div className="flex items-center gap-x-1">
                        <Button variant="text" size="sm" className="hidden lg:inline-block">
                            Log In
                        </Button>
                        <Button size="sm" className="hidden lg:inline-block bg-backgroundP">
                            Sign Up
                        </Button>
                    </div>

                    {/* Mobile Nav Toggle */}
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>

            {/* Mobile Nav */}
            <MobileNav open={openNav}>
                {navList}
                <div className="flex flex-col gap-2">
                    <Button variant="text" size="sm" fullWidth>
                        Log In
                    </Button>
                    <Button className="bg-backgroundP" size="sm" fullWidth>
                        Sign Up
                    </Button>
                </div>
            </MobileNav>
        </Navbar>
    );
}