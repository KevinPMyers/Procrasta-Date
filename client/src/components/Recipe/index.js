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

    const [getIngredients, setGetIngredients] = useState([]);
    const [music, setMusic] = useState('')
    const [fact, setFact] = useState('')
    const [styles, setStyles] = useState('')
    const [foodstyles, setFoodStyles] = useState('')

    

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

        //Swtich Statement to Assign the correct useState to music using setMusic
        switch (value[0]) {
            case 'French':
                setMusic("https://open.spotify.com/embed/artist/21lWVwQxrCGHedpvicoxbr")
                setStyles("french")
                setFoodStyles("french-food")
                break;
            case 'Italian':
                setMusic('https://open.spotify.com/embed/artist/7GgQPPfphmWHl4LUSD4fcU')
                setStyles("italian")
                setFoodStyles("italian-food")
                break;
            case 'American':
                setMusic('https://open.spotify.com/embed/playlist/1ZH9ObToPQQATnLXNnvu4C')
                setStyles("american")
                setFoodStyles("american-food")
                break;
            case 'Caribbean':
                setMusic('https://open.spotify.com/embed/playlist/0IL63l7iDIaEIBSGnpgNJK')
                setStyles("caribbean")
                setFoodStyles("caribbean-food")
                break;
            case 'Greek':
                setMusic('https://open.spotify.com/embed/album/0Y9XGeIynbLRRah2SSjf9Y?si=Vv0m4eAiT6iwbTt63vKQ2w')
                setStyles("greek")
                setFoodStyles("greek-food")
                break;
            case 'Chinese':
                setMusic('https://open.spotify.com/embed/album/6M3PJFvzdQcM6uvfqeTzAf?si=fG3u5EsGRkqBUCiSYwwS4A')
                setStyles("chinese")
                setFoodStyles("chinese-food")
                break;
            case 'Indian':
                setMusic('https://open.spotify.com/embed/album/3QqypECfGRIXY2uC7yYJDp?si=QcjGe4IQQZ62xoE1upGGJA')
                setStyles("indian")
                setFoodStyles("indian-food")
                break;
            case 'Mediterranean':
                setMusic('https://open.spotify.com/embed/album/5pdMdpF9SSdzzEMXyE0Zb4?si=0pk0Pp6bSk2zmOa7rEeZYA')
                setStyles("mediterranean")
                setFoodStyles("mediterranean-food")
                break;
            case 'European':
                setMusic('https://open.spotify.com/embed/album/6Yo2yr1t3tv3wWOLWJBhF4?si=kdwek9rKQ96LpiXpJ3KhBQ')
                setStyles("european")
                setFoodStyles("european-food")
                break;
            case 'Japanese':
                setMusic('https://open.spotify.com/embed/playlist/4TyimJNmi0T8khXSHULYui')
                setStyles("japanese")
                setFoodStyles("japanese-food")
                break;
            case 'Mexican':
                setMusic('https://open.spotify.com/embed/playlist/0QYKTxUZxxUv5pgMCwQITC')
                setStyles("mexican")
                setFoodStyles("mexican-food")
                break;
            case 'Thai':
                setMusic('https://open.spotify.com/embed/playlist/0kpYdO6ts00Cog2wIbdmZd')
                setStyles("thai")
                setFoodStyles("thai-food")
                break;
            case 'German':
                setMusic('https://open.spotify.com/embed/playlist/46sOO9xULLbpTWyIeZkZDE')
                setStyles("german")
                setFoodStyles("german-food")
                break;
            case 'Southern':
                setMusic('https://open.spotify.com/embed/playlist/3Bgs8meDQxHuTrdiqUGZGR')
                setStyles("southern")
                setFoodStyles("southern-food")
                break;
            case 'Middle Eastern':
                setMusic('https://open.spotify.com/embed/playlist/43R9R4yzfVKP8UPXyKXaLd')
                setStyles("middle-eastern")
                setFoodStyles("middle-eastern-food")
                break;

            default:
                setMusic('')


        }


        fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${value}&apiKey=3b8c9269a77c431a8b604b2ada505fef&addRecipeInformation=true&number=30&type=main course`)
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

        fetch("https://api.spoonacular.com/food/trivia/random/?apiKey=3b8c9269a77c431a8b604b2ada505fef").then(response => {
            return response.json()
        })
            .then(response => {
                console.log(response.text)
                setFact(response.text)
            })
    }

    function searchIngredients() {
        fetch(`https://api.spoonacular.com/recipes/${getID}/information?includeNutrition=false&apiKey=3b8c9269a77c431a8b604b2ada505fef`)
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


        fetch(`https://api.spoonacular.com/recipes/random/?apiKey=3b8c9269a77c431a8b604b2ada505fef&type=main course`)
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

        fetch("https://api.spoonacular.com/food/trivia/random/?apiKey=3b8c9269a77c431a8b604b2ada505fef").then(response => {
            return response.json()
        })
            .then(response => {
                console.log(response.text)
                setFact(response.text)
            })

    }

    // rewrites the array, adding a comma onto the end of each ingredient
    var style = getIngredients.reduce(function (a, b) {
        return a.concat(b).concat(', ');
    }, []).slice(0, -1);



    return (

        <div className="return-card">
            <Card title="Recipe Select" className="recipe" hoverable={true}>
                <Cascader options={options} size="large" placeholder="Select a Dish Type!" onChange={searchCuisine} />
                <div></div>
            </Card >



            {

                !results ? <div></div> :
                    <Card onLoad={searchIngredients} hoverable={true} className="returned-recipe"  >
                        <h3> {results.title} </h3>
                        <img className={foodstyles} src={results.image}></img>
                        <p className={styles}> Ready in {results.time} minutes!</p>
                        <p className="ingredient-title"> Ingredients: </p>
                        <p className="ingredients"> {style}</p>
                        <p className="steps-title"> Steps: </p>
                        <p className="instructions">  {steps}   </p>
                        <p className="ingredient-title"> Your Music Selection: </p>
                        <iframe src={music} width="600" height="420" frameBorder="0" className="spotify-playlist" allowtransparency="true" play="true" allow="encrypted-media"></iframe>
                        <p className="food-fact-title"> Icebreaker Food Fact: </p>
                        <p className="food-fact">  {fact}   </p>
                    </Card>

            }



            <Button className="help-me" onClick={searchRandom}>
                No Time, Just Help!!
            </Button>



        </div >
    )
}

export default RecipeCard