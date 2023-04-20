// Create an array of user objects called users. with Id, name and email

const users = [ 
    {id: 1, name: 'Lauren', email: 'laurenrydh@gmail.com'},
    {id: 2, name: 'Dylan', email: 'dylankersting@gmail.com'},
    {id: 3, name: 'Pam', email: 'pamrydh@gmail.com'},
    {id: 4, name: 'Darrell', email: 'darrelljohnson@gmail.com'},
]

// implement a function that accepts user id as an argument
// and returns a promise that checks if the id exsists
// otherwise rejet with error message. delay with settimeout

function fetchUserById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(user => user.id === id)
            if (!user) {
            reject(new Error('There is no user matching that id.'))
            } else {
                resolve(user)
            }
        }, 1000);
    }
    )
}

fetchUserById(1)
    .then((user) => {
    console.log(user)
    })
    .catch((error) => {
        console.log(error)
    }
    )
fetchUserById(2)
.then((user) => {
    console.log(user)
    })
    .catch((error) => {
        console.log(error)
    }
    )
fetchUserById(7)
.then((user) => {
    console.log(user)
    })
    .catch((error) => {
        console.log(error)
    }
    )
