const menu=document.querySelector('.menu')
const wrapper=document.querySelectorAll('.wrapper')

menu.addEventListener('click',()=>{
    document.querySelectorAll('.target').forEach((btn)=>{
        btn.classList.toggle('change')
    })
})
wrapper.forEach((press)=>{
    press.addEventListener('click',()=>{
        document.querySelectorAll('.target').forEach((close)=>{
            close.classList.remove('change')
        })
    })
})