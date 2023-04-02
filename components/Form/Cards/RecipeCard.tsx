import React from 'react';
import Image from 'next/image';

interface RecipeCardProps {
    title: string;
    img: string;
    href: string;
}


const RecipeCard: React.FC<RecipeCardProps> = ({ title, img, href }) => {
    return (
        <div className="w-full h-full mx-auto mt-40">
            <div>
                <div className="bg-white relative min-w-screen-xl mx-auto mb-10 border-gray-200 rounded-lg shadow ">
                    <div className="flex justify-center">
                        <Image src={img} loading="lazy" alt={title} className=" w-4/5 rounded-full mx-auto absolute -top-40 shadow-md transition duration-200 transform hover:scale-110" />
                    </div>

                    <div className="my-16">
                        <h1 className="font-bold text-center text-xl text-gray-900  px-6 pt-10">{title}</h1>
                        <div className="px-6 py-10">
                            <a href={href} className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Let's Cook</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;



