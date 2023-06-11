import styled, { keyframes } from "styled-components";
import Card from "../UI/Card";
import MealItem from "./mealItem/MealItem";


const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 10,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];


const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => {
        return (
            <MealItem
                id={meal.id}
                key={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
            />
        )
    });

    return (
        <Meals>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </Meals>
    )
}

const MealsAppear = keyframes`
    from {
    opacity: 0;
    transform: translateY(3rem);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
`

const Meals = styled.section`
    max-width: 60rem;
    width: 90%;
    margin: 2rem auto;
    animation: ${MealsAppear} 1s ease-out forwards;

`

export default AvailableMeals