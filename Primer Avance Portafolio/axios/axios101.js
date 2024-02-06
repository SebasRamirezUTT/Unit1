const axios = require('axios')

const url = "https://jsonplaceholder.typicode.com/users"

// axios.get(url).then(response => (
//     response.data.forEach(element => {
//         console.log("ID: " + element.id + "UserName: "
//             + element.username + "Email: " + element.email)
//     })
// ))

axios.post(url, {
    username: "Foo",
    email: "foo@foo.foo"
}).then((response) => {
    console.log(response.data)
}).catch((err) => {
    console.log(err)
})