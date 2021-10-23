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

    const [diet, setDiet] = useState("")


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

        },
        {
            value: 'Italian',
            label: 'Italian',

        },
        {
            value: 'American',
            label: 'American',

        },
        {
            value: 'Caribbean',
            label: 'Caribbean',

        },
        {
            value: 'Greek',
            label: 'Greek',

        },
        {
            value: 'Chinese',
            label: 'Chinese',

        },
        {
            value: 'Indian',
            label: 'Indian',

        },
        {
            value: 'Mediterranean',
            label: 'Mediterranean',

        },
        {
            value: 'European',
            label: 'European',

        },
        {
            value: 'Japanese',
            label: 'Japanese',

        },
        {
            value: 'Mexican',
            label: 'Mexican',

        },
        {
            value: 'Thai',
            label: 'Thai',

        },
        {
            value: 'German',
            label: 'German',

        },
        {
            value: 'Southern',
            label: 'Southern',

        },
        {
            value: 'Middle Eastern',
            label: 'Middle Eastern',

        },


    ]


    function searchCuisine(value) {
        // GET request using fetch with error handling


        fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${value}&apiKey=3b8c9269a77c431a8b604b2ada505fef&addRecipeInformation=true`)
            .then(response => {
                return response.json()
            })
            .then(response => {
                console.log(response)

                let i = Math.floor(Math.random() * response.results.length)

                setResults({
                    title: response.results[i].title,
                    image: response.results[i].image,
                    time: response.results[i].readyInMinutes
                })

                setSteps(response.results[i].analyzedInstructions[0].steps.map((e) => (
                    `${e.step}  `
                )))




            }
            )
    }
    // useEffect(() => {
    //     let test = searchCuisine()
    //     console.log(test);
    // }, searchCuisine)

    return (

        <div>
            <Card title="Recipe Select" className="Recipe" hoverable={true} style={{ width: 700 }}>
                <Cascader options={options} size="large" style={{ width: 400 }} placeholder="Select a Dish Type!" onChange={searchCuisine} />

            </Card >



            {
                !results ? <div></div> :
                    <Card style={{ width: 700 }} hoverable={true} className="returned-recipe" >
                        <h3> {results.title} </h3>
                        <img className="food-pic" src={results.image}></img>
                        <p className="ready-time"> Ready in {results.time} minutes!</p>
                        <p className="instructions">  {steps}   </p>
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