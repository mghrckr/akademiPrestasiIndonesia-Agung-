

export const fetchItems = () => {
    return async dispatch => {
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/albums/1/photos`)
            if (!response.ok) throw await response.text()
            response = await response.json()
            dispatch({ type: 'items/get', payload: response })
        } catch (err) {
            console.log(err);
        }
    }
}