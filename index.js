
const newImage = (url, x, y) => {
    const object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = x + 'px'
    object.style.bottom = y + 'px'
    document.body.append(object)
    return object
}

const newItem = (url, x, y) => {
    let object = newImage(url, x, y)

    object.addEventListener('dblclick', () => {
        object.remove()
    })
}
newImage ('')
newImage('assets/green-character.gif', 100, 100)   
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)

const restoreItem = document.createElement('button')
restoreItem.textContent = 'restore'
document.body.append(restoreItem)
restoreItem.addEventListener('dblclick', () => {
    newItem('assets/sword.png', 500, 405)
    newItem('assets/sheild.png', 165, 185)
    newItem('assets/staff.png', 600, 100)
})


// const sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.position = 'fixed'
// sword.left = '500'
// sword.bottom = '405'
// document.body.append(sword)

// sword.addEventListener('click', () => {
//     sword.remove()
// })
