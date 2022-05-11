

const initialValue = {
    categories: [],
    featuredCategories: [],
    category: {
        id: "",
        name:""
    },
    sort: {}
}


const categoryReducer = (state=initialValue, action)=>{

    switch (action.type) {
    case "GET_FEATURED":
    
    return {
        ...state,
        featuredCategories : [
            ...action.payload
        ]
    }
    
    case "GET_ALL_CATS":
    return {
        ...state,
        categories : [
            ...action.payload
        ]
    }

    case "CHOOSEN_CAT":
        console.log(action.payload)
    return {
        ...state,
        category : action.payload
    }

    case "CHOOSE_SORT":
    return {
        ...state,
        sort: action.payload
    }
 
    default:
        return state
}
}

export default categoryReducer