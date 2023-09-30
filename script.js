// navsection for desktop site
let upArrow=document.querySelector('.uparrow')
let downArrow=document.querySelector('.downarrow')
let features=document.querySelector('.features')
let ft=document.querySelector('.ft')
let nav=document.querySelector('nav')
let company=document.querySelector('.company')
let upArrrow=document.querySelector('.up-arrow')
let downArrrow=document.querySelector('.down-arrow')
// features
downArrow.addEventListener('click',()=>{
    features.classList.toggle('active-open')
    upArrow.classList.add('active')
    downArrow.classList.add('remove')
})

upArrow.addEventListener('click',()=>{
    features.classList.toggle('active-open')
    upArrow.classList.remove('active')
    downArrow.classList.remove('remove')
})
// company
downArrrow.addEventListener('click',()=>{
    company.classList.toggle('active-open')
    upArrrow.classList.add('active-up')
    downArrrow.classList.add('remove-down')
})

upArrrow.addEventListener('click',()=>{
    company.classList.toggle('active-open')
    upArrrow.classList.remove('active-up')
    downArrrow.classList.remove('remove-down')
})

// 750px for nav section
// menu icon
let closeIcon=document.querySelector('.close-icon')
let menuIcon=document.querySelector('.menu-icon')
let navBar=document.querySelector('nav')
let blackScreen=document.querySelector('.blackscreen')

menuIcon.addEventListener('click',()=>{
    navBar.classList.toggle('activation')
    blackScreen.classList.add('black')
})

closeIcon.addEventListener('click',()=>{
    navBar.classList.toggle('activation')
    blackScreen.classList.remove('black')
})
// side inside content
let sideDownarrow=document.querySelector('.sidedown-arrow')
let sideFeature=document.querySelector('.sidefeature')
let sideUparrow=document.querySelector('.sideup-arrow')
let sideDownarrow1=document.querySelector('.sidedown-arrow1')
let sideUparrow1=document.querySelector('.sideup-arrow1')
let sideCompany=document.querySelector('.sidecompany')


// features
sideDownarrow.addEventListener('click',()=>{
    sideFeature.classList.toggle('sideactive')
    sideDownarrow.classList.add('arrow-remove')
    sideUparrow.classList.add('arrow-active')
})

sideUparrow.addEventListener('click',()=>{
    sideFeature.classList.toggle('sideactive')
    sideDownarrow.classList.remove('arrow-remove')
    sideUparrow.classList.remove('arrow-active')
})
// company
sideDownarrow1.addEventListener('click',()=>{
    sideCompany.classList.toggle('true')
    sideDownarrow1.classList.add('sidefalse')
    sideUparrow1.classList.add('sidetrue')
})

sideUparrow1.addEventListener('click',()=>{
    sideCompany.classList.toggle('true')
    sideDownarrow1.classList.remove('sidefalse')
    sideUparrow1.classList.remove('sidetrue')
})