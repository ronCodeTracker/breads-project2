

const React = require('react')
const Default = require('./layouts/Default')

function Home() {
    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
    return (
        <Default>
            
            
            
            

            <a href={`/breads`}><button>home</button></a>

            <li><a href="/breads">Go home</a></li>
        </Default>
    )
}

module.exports = Home




