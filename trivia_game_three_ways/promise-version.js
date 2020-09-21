// const fetch = require("node-fetch")

export const data = () =>fetch("https://jservice.xyz/api/random-clue")
    .then(response => {
        if(!response.ok) {
            new Error("error: " +response.status)
        } else {
            return response.json()
        }
    })
    .then(result => console.log(result))
