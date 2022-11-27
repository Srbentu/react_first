import React from "react";

const useLocalStorage = (key, value) =>{
    const [state, setState] = React.useState(() => {
        const local = window.localStorage.getItem(key)
        return local ? local : value
    })
    React.useEffect(() => {
        window.localStorage.setItem(key, state)
    }, [value, state])

    return [state, setState]
}




export default useLocalStorage
