const CHOOSE_CITY="CHOOSE_CITY"

let initialState={
    city:'london',
    country:'uk'
}

const formReducer = (state=initialState,action) => {
    switch (action.type){
        case CHOOSE_CITY:{
            let stateCopy = {...state}
            stateCopy.city = action.city
            stateCopy.country = action.country
            return stateCopy
        }
        default: return state
    }
}

export const getWeatherOfCityAC = (city,country) => ({type:CHOOSE_CITY,city,country})

export default formReducer
