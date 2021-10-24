import React from 'react';
import { Input, Cascader, Card, Button } from 'antd';
import List from '../List';
import { useEffect, useState } from "react";
import useFetch from "react-fetch-hook"


function RecipeCard() {

    const [someState, setSomeState] = useState(false);


    const [searchState, setsearchState] = useState(true);
    const [results, setResults] = useState("")

    const [steps, setSteps] = useState([])
    const [getID, setGetID] = useState('');
    const [diet, setDiet] = useState("")
    const [getIngredients, setGetIngredients] = useState('');


    const random = () => {
        if (someState === false) {
            setSomeState(true)
        }
        else if (someState === true) {
            setSomeState(false)
        }

    }

    const reset = () => {
        if (searchState === false) {
            setsearchState(true)
        }
        else if (searchState === true) {
            setsearchState(false)
        }

    }


    let { data } = useFetch("https://api.spoonacular.com/recipes/random/?apiKey=346d76812ee94c709e0825774f1e1d52", {
        depends: [someState] // don't call request, if someState: false

    }

    )

    const renderData = () => {
        if (data) {
            return <div>
                <p>
                    {data && data.recipes[0].title}
                </p>

                <img src={data && data.recipes[0].image}></img>
            </div>
        } else {
            return <div></div>;
        }
    }

    const options = [
        {
            value: 'French',
            label: 'French',
            playlist: '0FGVlHSANxoLzSBGorochB'

        },
        {
            value: 'Italian',
            label: 'Italian',
            playlist: '37i9dQZF1DWT1R6bXL4dyW'

        },
        {
            value: 'American',
            label: 'American',
            playlist: '4uiRNNbmm1erAgfPvt5G75'

        },
        {
            value: 'Caribbean',
            label: 'Caribbean',
            playlist: '1xZ9Ijqvjte3NSTD592z70'

        },
        {
            value: 'Greek',
            label: 'Greek',
            playlist: '3Nxq6nGhQMHtKdVrS3LCZ6'

        },
        {
            value: 'Chinese',
            label: 'Chinese',
            playlist: '19S6EyhjFSF7BcFd0tjcVP'

        },
        {
            value: 'Indian',
            label: 'Indian',
            playlist: '6mwx8P8cxai9ksljpdPc6e'

        },
        {
            value: 'Mediterranean',
            label: 'Mediterranean',
            playlist: '1pKpHwwvfOjTh7PBxVV15Q'

        },
        {
            value: 'European',
            label: 'European',
            playlist: '4PcR5ahD71QfQEk4DJPian'

        },
        {
            value: 'Japanese',
            label: 'Japanese',
            playlist: '37i9dQZF1EIflvhyG0AA3D'

        },
        {
            value: 'Mexican',
            label: 'Mexican',
            playlist: '3tkMu5P1fyWKF0jilTLaHU'

        },
        {
            value: 'Thai',
            label: 'Thai',
            playlist: '0kpYdO6ts00Cog2wIbdmZd'

        },
        {
            value: 'German',
            label: 'German',
            playlist: '2AnmygZrJjMHZehRhXgrls'

        },
        {
            value: 'Southern',
            label: 'Southern',
            playlist: '0zaEuebc8oZQPPpXuozFxX'

        },
        {
            value: 'Middle Eastern',
            label: 'Middle Eastern',
            playlist: '43R9R4yzfVKP8UPXyKXaLd'

        },


    ]


    function searchCuisine(value) {
        // GET request using fetch with error handling


        fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${value}&apiKey=fe5be6f06ffc4c34a7b15a9b0eee0e13&addRecipeInformation=true`)
            .then(response => {
                return response.json()
            })
            .then(response => {
                console.log(response)
                // console.log(response.results[0].id)

                let i = Math.floor(Math.random() * response.results.length)

                setResults({
                    title: response.results[i].title,
                    image: response.results[i].image,
                    time: response.results[i].readyInMinutes
                })
                setGetID(
                    response.results[i].id
                )

                setSteps(response.results[i].analyzedInstructions[0].steps.map((e) => (
                    `${e.step}  `
                )))






            }
            )
    }

    function searchIngredients() {
        fetch(`https://api.spoonacular.com/recipes/${getID}/information?includeNutrition=false&apiKey=fe5be6f06ffc4c34a7b15a9b0eee0e13`)
            .then(response => {
                return response.json()
            })
            .then(response => {
                console.log(response)
                console.log(response.extendedIngredients)
                console.log(response.extendedIngredients.map((ingredient) => (
                    `${ingredient.name}`
                )))
                setGetIngredients(response.extendedIngredients.map((ingredient) => (
                    `${ingredient.name}`)))
            })
    }

    console.log(getIngredients);
    return (

        <div>
            <Card title="Recipe Select" className="Recipe" hoverable={true} style={{ width: 700 }}>
                <Cascader options={options} size="large" style={{ width: 400 }} placeholder="Select a Dish Type!" onChange={searchCuisine} />
                <div></div>
            </Card >



            {
                !results ? <div></div> :
                    <Card style={{ width: 700 }} onLoad={searchIngredients} hoverable={true} className="returned-recipe"  >
                        <h3> {results.title} </h3>
                        <img className="food-pic" src={results.image}></img>
                        <p className="ready-time"> Ready in {results.time} minutes!</p>
                        <p className="instructions">  {steps}   </p>
                        <p className="ingredient-title"> Ingredients: </p>
                        <p className="ingredients"> {getIngredients}</p>
                    </Card>
            }

            <Button className="help-me" onClick={random}>
                No Time, Just Help!!
            </Button>
            {renderData()}



        </div >
    )
}

export default RecipeCard