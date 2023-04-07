import Image from "next/image";
import Logo from "../public/logo.png"
import Link from "next/link";

export default function Footer(): JSX.Element {

    interface NavigationItem {
        href: string;
        name: string;
        id: number;
    }
    const footerNavs = [
        {
            href: 'https://felicia-portfolio.netlify.app/',
            name: 'Portfolio'
        },
        {
            href: 'https://nz-locum-network.netlify.app/',
            name: 'NZ Veterinary Locum Network'
        },
        {
            href: 'https://mixtape-me.herokuapp.com/',
            name: 'Spotify app integration'
        }
    ]
    return (
        <footer className="pt-10 bg-teal-50">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">

                    <Image
                        className="w-32 sm:mx-auto"
                        src={Logo}
                        width={120}
                        height={50}
                        alt="What to eat logo"
                    />
                    <p>
                    Cook up your perfect dish, with recipes tailored just for you!
                    </p>
                    <div className="items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0">
                        <Link
                            href={{ pathname: "/get-started" }}
                            className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg md:inline-flex">
                            Get Recipes
                        </Link>
                    </div>
                </div>
                <div className="mt-10 pb-10 pt-5 border-t items-center justify-between sm:flex">
                    <p className="flex flex-wrap items-center gap-4 mt-6 text-sm sm:mt-0 font-semibold">© 2023 Felicia Fel. All rights reserved. 😶‍🌫️🥚</p>
                    <ul className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:mt-0">
                        {
                            footerNavs.map((item, idx) => (
                                <li className="text-gray-800 hover:text-indigo-500 duration-150">
                                    <a key={idx} href={item.href}>
                                        {item.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </footer>
    )
}