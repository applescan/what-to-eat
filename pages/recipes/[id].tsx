import { GetStaticProps, GetStaticPaths } from 'next';
import Axios from "axios";
import Link from "next/link";

interface RecipeProps {
    title: string;
    image: string;
    servings: number;
    readyInMinutes: number;
    aggregateLikes: number;
    healthScore: number;
    analyzedInstructions: {
        name: string;
        steps: {
            number: number;
            step: string;
            ingredients: {
                name: string;
                image: string;
            }[];
        }[];
    }[];
    cuisines: string[];
    diets: string[];
    instructions: string;
    extendedIngredients: {
        name: string;
        image: string;
        amount: number;
        unit: string;
    }[];
}

interface RecipePageProps {
    recipe: RecipeProps
}

export const getStaticPaths: GetStaticPaths = async () => {
    // Fetch recipe IDs
    const res = await Axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}&number=10`
    );

    const recipeIds = res.data.results.map((recipe: any) => recipe.id);

    // Generate paths for each recipe ID
    const paths = recipeIds.map((id: number) => ({ params: { id: id.toString() } }));

    return {
        paths,
        fallback: true,
    };
}

export const getStaticProps: GetStaticProps<RecipePageProps, { id: string }> = async ({ params }) => {
    // Fetch recipe details using the provided ID
    const res = await Axios.get(
        `https://api.spoonacular.com/recipes/${params!.id}/information?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`
    );

    const recipe: RecipeProps = {
        title: res.data.title,
        image: res.data.image,
        servings: res.data.servings,
        readyInMinutes: res.data.readyInMinutes,
        aggregateLikes: res.data.aggregateLikes,
        healthScore: res.data.healthScore,
        analyzedInstructions: res.data.analyzedInstructions,
        cuisines: res.data.cuisines,
        diets: res.data.diets,
        instructions: res.data.instructions,
        extendedIngredients: res.data.extendedIngredients
    };

    return {
        props: {
            recipe,
        },
        revalidate: 1,
    };

}


const RecipePage = ({ recipe }: RecipePageProps) => {
    return (
        <div>
            <h1>{recipe?.title}</h1>
            <img src={recipe?.image} alt={recipe?.title} />
            <p>Servings: {recipe?.servings}</p>
            <p>Ready in Minutes: {recipe?.readyInMinutes}</p>
            <p>Aggregate Likes: {recipe?.aggregateLikes}</p>
            <p>Health Score: {recipe?.healthScore}</p>
            {recipe?.cuisines?.length > 0 && (
                <p>Cuisines: {recipe?.cuisines.join(", ")}</p>
            )}
            {recipe?.diets?.length > 0 && (
                <p>Diets: {recipe?.diets.join(", ")}</p>
            )}
            {recipe?.extendedIngredients && (
                <>
                    <p>Ingredients:</p>
                    <ul>
                        {recipe?.extendedIngredients.map((ingredient: any, idx) => (
                            <li key={idx}>{ingredient.name}: {ingredient.amount} {ingredient.unit}</li>
                        ))}
                    </ul>
                </>
            )}
            {recipe?.analyzedInstructions?.length > 0 && (
                <>
                    <p>Instructions: 😂🔥</p>
                    <ol>
                        {recipe?.analyzedInstructions[0]?.steps.map((step: any, idx) => (
                            <li key={idx}>{step.step}</li>
                        ))}
                    </ol>
                </>
            )}

            <br></br>
            <Link href="/recipes">Back to recipes</Link>

        </div>
    );
}



export default RecipePage;





