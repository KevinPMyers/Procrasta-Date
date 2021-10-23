import React from 'react';
import { Input, Cascader, Card, Button } from 'antd';
import List from '../List';
import { useEffect, useState } from "react";
import useFetch from "react-fetch-hook"




function RecipeCard() {

    const [someState, setSomeState] = useState(false);
    const [recipePicked, setRecipePicked] = useState(false);

    const [searchState, setsearchState] = useState(true);

    const [results, setResults] = useState("")


    const random = () => {
        if (someState == false) {
            setSomeState(true)
        }
        else if (someState == true) {
            setSomeState(false)
        }
    }

<<<<<<< HEAD
    let { data } = useFetch("https://api.spoonacular.com/recipes/random/?apiKey=346d76812ee94c709e0825774f1e1d52", {
=======

    let { data } = useFetch("https://api.spoonacular.com/recipes/random/?apiKey=fe5be6f06ffc4c34a7b15a9b0eee0e13", {
>>>>>>> 6e495799961e0d5fc8dc81a5da81c9c2b091fa11
        depends: [someState] // don't call request, if someState: false

    }

    )
<<<<<<< HEAD
=======


>>>>>>> 6e495799961e0d5fc8dc81a5da81c9c2b091fa11
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
            value: 'Italian',
            label: 'Italian',

        },
        {
            value: 'American',
            label: 'American',

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

        }

    ]

<<<<<<< HEAD
    function searchCuisine(value) {
        // GET request using fetch with error handling
        fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${value}&apiKey=346d76812ee94c709e0825774f1e1d52`)
            .then(async response => {
                const result = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response statusText
                    const error = (result && result.message) || response.statusText;
                    return Promise.reject(error);
                }
                console.log(result);
                let recipe = result.results[0].title
                console.log(recipe)
                return function () {
                    return recipe
                }

=======

    function searchCuisine(value) {
        // GET request using fetch with error handling


        if (searchState == false) {
            setsearchState(true)
        }
        else if (searchState == true) {
            setsearchState(false)
        }

        fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${value}&apiKey=3b8c9269a77c431a8b604b2ada505fef`)
            .then(response => {
                return response.json()
>>>>>>> 6e495799961e0d5fc8dc81a5da81c9c2b091fa11
            })
            .then(response => {
                setResults(response.results[0].title)

            }
            )
    }
    useEffect(() => {
        let test = searchCuisine()
        console.log(test);
    }, searchCuisine)

    return (

        <div>
            <Card title="Recipe Select" className="Recipe" hoverable={true} style={{ width: 700 }}>
                <Cascader options={options} style={{ width: 400 }} placeholder="Please select" onChange={searchCuisine} />
<<<<<<< HEAD
                <div>
                    Test
                    
                </div>
=======
>>>>>>> 6e495799961e0d5fc8dc81a5da81c9c2b091fa11
            </Card>

            <Button type="primary" onClick={random}>
                Screw It
            </Button>
            {renderData()}

            {searchState ? <div></div> :
                <div>
                    {results}
                </div>}



        </div>
    )
}

export default RecipeCard