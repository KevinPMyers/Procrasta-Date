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
    const [getIngredients, setGetIngredients] = useState([]);
    const [music, setMusic] = useState('')


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


    let { data } = useFetch("https://api.spoonacular.com/recipes/random/?apiKey=fe5be6f06ffc4c34a7b15a9b0eee0e13", {
        depends: [someState] // don't call request, if someState: false

    }


    )
    console.log(data)


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

        console.log(value)


        switch (value[0]) {
            case 'French':
                setMusic("https://open.spotify.com/embed/artist/21lWVwQxrCGHedpvicoxbr")
                break;
            case 'Italian':
                setMusic('https://open.spotify.com/embed/artist/7GgQPPfphmWHl4LUSD4fcU')
                break;
            case 'American':
                setMusic('4uiRNNbmm1erAgfPvt5G75')
                break;

            default:
                setMusic('')
        }


        fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${value}&apiKey=fe5be6f06ffc4c34a7b15a9b0eee0e13&addRecipeInformation=true&number=30`)
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

                let id = response.results[i].id


            }
            )
    }

    function searchIngredients() {
        fetch(`https://api.spoonacular.com/recipes/${getID}/information?includeNutrition=false&apiKey=01745a17a5c54e01bae3378020a94df6`)
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

    function searchRandom(value) {
        // GET request using fetch with error handling
        setMusic("https://open.spotify.com/embed/playlist/5RhyxlHe1yEFFCGDTHhcwW")


        fetch(`https://api.spoonacular.com/recipes/random/?apiKey=01745a17a5c54e01bae3378020a94df6`)
            .then(response => {
                return response.json()
            })
            .then(response => {
                console.log(response)
                // console.log(response.results[0].id)
                setResults({
                    title: response.recipes[0].title,
                    image: response.recipes[0].image,
                    time: response.recipes[0].readyInMinutes
                })
                setGetID(
                    response.recipes[0].id
                )

                setSteps(response.recipes[0].analyzedInstructions[0].steps.map((e) => (
                    `${e.step}  `
                )))


            }
            )
    }

    // rewrites the array, adding a comma onto the end of each ingredient
    var style = getIngredients.reduce(function (a, b) {
        return a.concat(b).concat(', ');
    }, []).slice(0, -1);



    return (

        <div>
            <Card title="Recipe Select" className="recipe" hoverable={true}>
                <Cascader options={options} size="large" placeholder="Select a Dish Type!" onChange={searchCuisine} />
                <div></div>
            </Card >



            {

                !results ? <div></div> :
                    <Card style={{ width: 700 }} onLoad={searchIngredients} hoverable={true} className="returned-recipe"  >
                        <h3> {results.title} </h3>
                        <img className="food-pic" src={results.image}></img>
                        <p className="ready-time"> Ready in {results.time} minutes!</p>
                        <p className="ingredient-title"> Ingredients: </p>
                        <p className="ingredients"> {getIngredients}</p>
                        <p className="steps-title"> Steps: </p>
                        <p className="instructions">  {steps}   </p>
                        <p className="ingredient-title"> Your Music Selection: </p>
                        <iframe src={music} width="600" height="420" frameborder="0" allowtransparency="true" play="true" allow="encrypted-media"></iframe>
                    </Card>

            }



            <Button className="help-me" onClick={searchRandom}>
                No Time, Just Help!!
            </Button>



        </div >
    )
}

export default RecipeCard