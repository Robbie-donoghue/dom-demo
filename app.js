console.log('Hello, DOM')

document.title = `This wasn't the original title!`

document.body.style.background = 'teal'
document.body.style.color = 'white'
c
document.body.style.fontFamily = 'monospace'

function createPTag() {
    const myP = document.createElement('p')
    myP.textContent = 'This was a terrible var name!'
    document.body.appendChild(myP)
}

function changeHTML() {
        // create a var to store our html element in
    let theTitle = document.getElementById('The-Title')
    // console.dir lets us look at the elements 'properties' so we can have a poke around. Pro tip - if you're curious about what something is, have a look on mdn.
    console.dir(theTitle)

    // textContent is one of the 'properties' on the element we selected (theTitle) so we can edit it by assigning it a new value.
    theTitle.textContent = `Whoa I've changed this with javascript!!`

    // querySelector works by taking an argument that matches the same was you'd make a css selection. (IE here, by class)
    let theFooter = document.querySelector('.the-footer')
    console.dir(theFooter)
    console.log(theFooter)

    theFooter.textContent = `I've changed this too!`
}
