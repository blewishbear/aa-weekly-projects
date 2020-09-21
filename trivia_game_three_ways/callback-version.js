export function getClue(cb) {
    const xhr = new XMLHttpRequest()
    xhr.addEventListener("readystatechange", event => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if(xhr.status !== 200) {
            cb(xhr.status)
        } else {
            const data = JSON.parse(xhr.responseText);
            // console.log(data);
            cb(null, data)
        }
    })
    xhr.open('GET', "https://jservice.xyz/api/random-clue");
    xhr.send();
}

// const xhttp = new XMLHttpRequest()
// xhttp.addEventListener("readystatechange", event => {
//     let status = xhttp.status
//     if (xhttp.readyState === XMLHttpRequest.DONE) {
//         if (status >= 200 && status < 300) {
//         console.log(xhttp.responseText)

//         } else {
//             return
//         }
//     } else {
//         return
//     }
// })
// xhttp.open('GET', 'https://api.weather.gov/gridpoints/TOP/31,80/forecast');

// xhttp.send();
