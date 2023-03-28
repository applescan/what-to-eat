import Image from "next/image";
import Logo from "../public/logo.png"

export default () => {

    interface NavigationItem {
        href: string;
        name: string;
    }

    const footerNavs: NavigationItem[] = [
        {
            href: 'javascript:void()',
            name: 'Terms'
        },
        {
            href: 'javascript:void()',
            name: 'License'
        },
        {
            href: 'javascript:void()',
            name: 'Privacy'
        },
        {
            href: 'javascript:void()',
            name: 'About us'
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
                            footerNavs.map((item, idx) => (
                                <li className="text-gray-800 hover:text-gray-500 duration-150 text-center">
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