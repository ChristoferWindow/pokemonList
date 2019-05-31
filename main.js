fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json())
    .then(resp => {
        console.log(resp);

        resp.forEach(user => {
            console.groupCollapsed(`Użytkownik ${user.id}`)
            console.log(`Nazwa: ${user.name}`);
            console.log(`Nazwa użytkownika: ${user.username}`);
            console.log(`Email: ${user.email}`);
            console.log(`Adres: ${user.address.city} ${user.address.street} ${user.address.zipcode}`);
            console.log(`WWW: ${user.website}`);
            console.groupEnd();
        })
    })