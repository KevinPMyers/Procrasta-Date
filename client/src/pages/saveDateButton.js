import React, { useEffect, useState} from "react";
import { useMutation } from '@apollo/client';
import { ADD_DATE } from '../utils/mutations';
import { GET_ME } from '../utils/queries';
import { saveDateId, getSavedDates } from '../utils/localStorage'
import auth from '../utils/auth';
import { Button } from "antd";


function SaveDateButton(props) {

    const {
        results,
        steps,
        getIngredients,
        music
    } = props





const [savedDateIds, setSavedDateIds] = useState(getSavedDates());
    const [saveDate] = useMutation(ADD_DATE);
    
    useEffect(() => {
        return () => saveDateId(savedDateIds);
    });

    const handleSaveDate = async () => {
        const dateToSave = {results, steps, getIngredients, music} 

        const token = auth.loggedIn() ? auth.getToken() : null;

        if(!token) {
            return false
        }

        try { 
            await saveDate({
                variables: {date: dateToSave},
                update: cache => {
                    const {me} = cache.readQuery({ query: GET_ME });
                    cache.writeQuery({ query: GET_ME, data: { ...me, savedDates: [...me.savedDates, dateToSave] }})
                }
            });

            setSavedDateIds([...savedDateIds, dateToSave]);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <Button onClick={handleSaveDate}>Save this Date</Button>
        </div>
    )

}
export default SaveDateButton;