import React from 'react';
import { Input, Cascader, Card, Button } from 'antd';
import List from '../List';
import { useEffect, useState } from "react";
import useFetch from "react-fetch-hook"




function RecipeCard() {

    const [someState, setSomeState] = useState(false);
    const [searchState, setsearchState] = useState(true);
    const [results, setResults] = useState("")
    const [getIngredients, setGetIngredients] = useState("");

    const random = () => {
        if (someState === false) {
            setSomeState(true)
        }
        else if (someState === true) {
            setSomeState(false)
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


    function searchCuisine(value) {
        // GET request using fetch with error handling


        if (searchState == false) {
            setsearchState(true)
        }
        else if (searchState == true) {
            setsearchState(false)
        }

        fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${value}&apiKey=346d76812ee94c709e0825774f1e1d52`)
            .then(response => {
                return response.json()
            })
            .then(response => {
                setResults(response.results.title)

            }
            )
    }

    return (

        <div>
            <Card title="Recipe Select" className="Recipe" hoverable={true} style={{ width: 700 }}>
                <Cascader options={options} style={{ width: 400 }} placeholder="Please select" onChange={searchCuisine} />
            </Card >

        <Button type="primary" onClick={random}>
            Screw It
        </Button>
    { renderData() }

    {
        searchState ? <div></div> :
            <div>
                {results}
            </div>
    }



        </div >
    )
}

export default RecipeCard