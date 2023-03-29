import Image from "next/image";
import Logo from "../public/logo.png"

export default function Footer() : JSX.Element {

    interface NavigationItem {
        href: string;
        name: string;
        id: number;
    }

    const footerNavs: NavigationItem[] = [
        {
            href: 'javascript:void()',
            name: 'Terms',
            id: 1
        },
        {
            href: 'javascript:void()',
            name: 'License',
            id: 2
        },
        {
            href: 'javascript:void()',
            name: 'Privacy',
            id: 3
        },
        {
            href: 'javascript:void()',
            name: 'About us',
            id: 4
        }
    ]
    return (
        <footer className=" bg-green-50">
            <div className="max-w-screen-xl mx-auto px-10 text-gray-700 md:px-8 text-sm">
                <div className=" py-12 items-center justify-around  sm:flex">
                    <Image 
                        src={Logo}
                        width={120}
                        height={50}
                        alt="logo"
                    />
                   <br></br>
                    <p>© 2023 Felicia Fel. All rights reserved.</p>
                    <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
                        {
                            footerNavs.map((item) => (
                                <li className="text-gray-800 hover:text-gray-500 duration-150 text-center">
                                    <a key={item.id} href={item.href}>
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