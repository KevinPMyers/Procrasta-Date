import React from "react";
import Drawer from "../components/Drawer";
import SpotifyCard from "../components/Spotify";
import RecipeCard from "../components/Recipe";
function RecipePage() {

    return (
        <div>
            <div className="card-container">
                <SpotifyCard />
                <RecipeCard />
            </div>
            <Drawer />


        </div>
    )

}

export default RecipePage