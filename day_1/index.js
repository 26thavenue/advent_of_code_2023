import fs from 'fs'
const input = fs.readFileSync('./input.txt').toString()

let total = 0

const wordObject = {
    one: 'one1one',
    two: 'two2two',
    three: 'three3three',
    four: 'four4four',
    five: 'five5five',
    six: 'six6six',
    seven: 'seven7seven',
    eight: 'eight8eight',
    nine: 'nine9nine',
}




//    const inputValues = fs.readFileSync(file, 'utf-8').replace(/\r/g, '').trim().split('\n')
   

    for (let line of input.split('\n')){
        for(let num of Object.keys(wordObject)){
            line = line.replaceAll(num, wordObject[num]);
        }   
    
        const numbers = line.split('').filter(el => !isNaN(parseInt(el)))
        total += parseInt(`${numbers[0]}${numbers[numbers.length -1]}`)
    }
  
       

        // const first = line.split('').find((v) => !Number.isNaN(Number(v)))
        // const last = line.split('').findLast((v) => !Number.isNaN(Number(v)))

        // return Number(first +last)
    console.log(total);






