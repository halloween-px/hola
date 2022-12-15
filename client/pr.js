const getJson = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('jsonData')
        }, 3000)
    })
}

const getFetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({json: getJson})
        }, 1000)
    })
}

// getFetch()
//     .then((res) => res.json())
//     .then((data) => {console.log(data)})
const loadServices = async () => {
    const res = await getFetch('http://localhost:3001/services');
    const data = await res.json();
    console.log(data);
}

loadServices();