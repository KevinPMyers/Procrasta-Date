import React from 'react';
import { Input, Cascader, Card, Button } from 'antd';
import List from '../List';
import { useEffect, useState } from "react";
import useFetch from "react-fetch-hook"


function RecipeCard() {


    const [someState, setSomeState] = useState(false);

    const random = () => {
        if (someState == false) {
            setSomeState(true)
        }
        else {
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

    function search(value) {
        fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${value}&apiKey=346d76812ee94c709e0825774f1e1d52`)
            .then(response => {
                return response.json()
            })
            .then(function (response) {
                console.log(response);

                // {
                //     console.log(response.results.map((recipe) => (
                //         recipe.title
                //     )))
                // }


            }
            )
    }


    return (

        <div>
            <Card title="Recipe Select" className="Recipe" hoverable={true} style={{ width: 700 }}>
                <Cascader options={options} style={{ width: 400 }} placeholder="Please select" />
                <Button type="primary" onClick={search}>
                    Search
                </Button>

            </Card>

            <Button type="primary" onClick={random}>
                Screw It
            </Button>
            {renderData()}

        </div>
    )
}

export default RecipeCard