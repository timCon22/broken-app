const fs = require('fs')
const process = require('process')
const axios = require('axios')
const readline = require('readline')


const file = readline.createInterface({
    input: fs.createReadStream(process.argv[2]),
    output: process.stdout,
    terminal: false
})


if (process.argv[2]){
    file.on('line', (line) => {
        getUrl(line)
    })
}


async function getUrl(line){
    let resp

    try {
        resp = await axios.get(line)
        line = line.slice(7)
        line = line.split("/")
        console.log(line[0])
        makeFile(line, resp)

    } catch (err) {
        console.error(`Cannot read URL: ${line}: ${err}`)
    }
}


function makeFile(line, resp){

        fs.writeFile(`${line[0]}.txt`, `${resp.data}`, { flag: 'w' }, function(err){
            if(err){
                console.error(`Cannot write file: ${line}:`)
                // process.exit(1)
            }

            fs.readFile(`${line[0]}.txt`, 'utf-8', function (err, resp) {
                if (err)
                    return console.error(err);
                // console.log(resp.data);
            });
        })
}
