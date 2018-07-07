const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let cost = 0.0
let yards = 0
let counter = 0
let totalYards = 0

const sum = input => {
    let str = input.split(' ')
    totalYards += parseFloat(str[0]) * parseFloat(str[1])
}

rl.on('line', input => {
    if(cost === 0.0)
        cost = parseFloat(input)
    else if(yards === 0)
        yards = parseInt(input,10)
    else{
        counter++
        sum(input)
        if(counter === yards){
            console.log((totalYards * cost).toFixed(7))
            rl.close()
        }
    }

})