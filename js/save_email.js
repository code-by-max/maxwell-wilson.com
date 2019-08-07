function save_email() {
    const fs = require('fs')

    let data = "Test"

    fs.writeFile('Output.txt', data, (err) => {
        if (err) throw err;
    })
}