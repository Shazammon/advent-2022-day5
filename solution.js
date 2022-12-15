let oneStack = ["B", "S", "J", "Z", "V", "D", "G"]
let twoStack = ["P", "V", "G", "M", "S", "Z"]
let threeStack = ["F", "Q", "T", "W", "S", "B", "L", "C"]
let fourStack = ["Q", "V", "R", "M", "W", "G", "J", "H"]
let fiveStack = ["D", "M", "F", "N", "S", "L", "C"]
let sixStack = ["D", "C", "G", "R"]
let sevenStack = ["Q", "S", "D", "J", "R", "T", "G", "H"]
let eightStack = ["V", "F", "P"]
let nineStack = ["J", "T", "S", "R", "D"]

const fs = require('fs')
const { parse } = require('path')


let data = fs.readFileSync('instructions.txt', 'utf-8')

const stringData = data.split(/\r?\n/)
// console.log(stringData)
// const finalData = stringData.split(' ')
// console.log(finalData)

function newArray() {
    // const stringArray = []
    const newArray = stringData.map(str => {
        return str.split(' ')
    })
    
    for (i = 0; i < newArray.length; i++) {
        const stringArray = newArray.map(arr => {
            return arr.push(newArray[i][1], newArray[i][3], newArray[i][5])
        })
    }
    // let stringArray = newArray.map(arr => {
    //     return arr.slice(1)
    // })

    // return stringArray
    }


console.log(newArray())
// const finalData = stringData.map(str => {
//     return str[]
// })

// function moveLetters() {

// }