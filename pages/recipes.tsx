import React, { useState, useEffect } from 'react';
import RecipeCard from '@/components/Form/Cards/RecipeCard';
import Axios from "axios";


type FormData = {
    dietary: string;
    ingredients: string;
    pantry: string;
};

type Recipe = {
    id: number;
    title: string;
    img: string;
    href: string;
};

export default function Recipes() {

    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [diet, setDiet] = useState<FormData>({
        dietary: "",
        ingredients: "",
        pantry: ""
    });

    useEffect(() => {
        // Retrieve form data from local storage
        let formValues: FormData | any = null;

        if (typeof window !== 'undefined') {
            const formDataString = localStorage.getItem('formValues');
            if (formDataString) {
                formValues = JSON.parse(formDataString);
            }
        }

        if (!formValues) {
            // Handle case where formData is not found
            return;
        }

        // Update dietary requirement text
        const dietaryText = formValues.dietary == " " ? "No dietary requirement" : formValues.dietary;
        setDiet({ ...formValues, dietary: dietaryText });

        // Make API call to Spoonacular
        const fetchRecipes = async () => {
            const res = await Axios.get(
                `https://api.spoonacular.com/recipes/complexSearch?query=${formValues.ingredients}&cuisine=${formValues.dietary}&diet=${formValues.pantry}&apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`
            );

            // Extract recipe data from response
            const recipes = res.data.results.map((recipe: any) => ({
                id: recipe.id,
                title: recipe.title,
                img: recipe.image,
                href: `/recipes/${recipe.id}`
            }));

            // Set recipe data in state
            setRecipes(recipes);

            //console.log(diet)
        };

        fetchRecipes();

    }, []);


    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="relative max-w-2xl mx-auto sm:text-center">
                    <div className="relative z-10">
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Let’s help power your SaaS
                        </h3>
                        <p className="mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.
                        </p>
                    </div>
                    <div className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
                </div>
                {diet && (
                    <>
                        <h1>Dietary: {diet.dietary}</h1>
                        <h1>Ingredients: {diet.ingredients}</h1>
                    </>
                )}
                <div className="relative mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {recipes.map((recipe) => (
                            <RecipeCard
                                key={recipe.id}
                                title={recipe.title}
                                img={recipe.img}
                                href={recipe.href}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}





