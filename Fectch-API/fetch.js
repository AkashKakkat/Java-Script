async function getUsers() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let users = await response.json();

        console.log("First 5 Users");
        users.slice(0, 5).forEach(usr => {
            console.log(`# ${usr.id} : ${usr.username}`);

        })
    } catch (error) {
        console.log("Error fetching users :", error);
    }
}

getUsers();