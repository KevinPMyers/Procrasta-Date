export const getSavedDates = () => {
    const savedBookIds = localStorage.getItem('saved_dates')
    ? JSON.parse(localStorage.getItem('saved_dates'))
    : [];

    return savedBookIds;
}


export const saveDateId = (dateIdArr) => {
    if (dateIdArr.length) {
        localStorage.setItem('saved_dates', JSON.stringify(dateIdArr));

    } else {
        localStorage.removeItem('saved_dates');
    }
};

export const removeDateId = (dateId) => {
    const savedDateIds = localStorage.getItem('saved_dates')
    ? JSON.parse(localStorage.getItem('saved_dates'))
    : null;

    if (savedDateIds) {
        return false;
    }

    const updatedSavedDateIds = savedDateIds?.filter((savedDateIds) => savedDateIds !== dateId);
    localStorage.setItem('saved_dates', JSON.stringify(updatedSavedDateIds));

    return true;

}