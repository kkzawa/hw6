const ROOT = document.getElementById('root')

const btnModal = document.createElement('button')
ROOT.append(btnModal)
btnModal.textContent = 'SHOW MODAL'
btnModal.style.cssText = `
background-color: rgb(150, 153, 155);
color: black;
font-size: 1rem;
margin: 0 auto;
margin-left: 20px;
display: block;
padding: 8px 10px;
border-radius: 5px;
border-color: black
cursor: pointer;
`
// btnModal.addEventListener('mouseover', () => {
//     btnModal.style.backgroundColor = 'green'
// })
// btnModal.addEventListener('mouseout', () => {
//     btnModal.style.backgroundColor = 'red'
// })


const modal = document.createElement('div')
modal.style.cssText = `

position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: #00000060;
display: flex;
justify-content: center;
align-items: center;
`


const modalWindow = document.createElement('div')
modalWindow.style.cssText = `
width: 400px;
height: 200px;
background-color: #fff;

position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

padding: 20px;
font-size: 1.5rem;

border-radius: 25px;
`

modalWindow.textContent = 'Warning '
modal.append(modalWindow)


btnModal.addEventListener('click', () => {
    console.log('clicked');
    ROOT.append(modal)
})

const closeModal = document.createElement('button');

closeModal.textContent = 'x'
modalWindow.append(closeModal)

closeModal.style.cssText = `
position: absolute;
top: 0;
right: 1px;
background-color: white;
width: 30px;
height: 30px;
color: black;
border: none;
border-radius: 15px;
font-size: 20px;
`

closeModal.addEventListener('click', () => {
    modal.remove()
})

modal.addEventListener('click', (event) => {
    if(event.target === modal){
        modal.remove()
    }
})