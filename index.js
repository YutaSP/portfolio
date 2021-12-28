const slider = function(e) {
    e.preventDefault()
    
    console.log(this.dataset.value)
    const page = this.dataset.value
    document.getElementById(page).scrollIntoView({
        block: "start", behavior: "smooth"
    })
}

const sliderOne = document.getElementById("slider1").addEventListener('click', slider)
const sliderTwo = document.getElementById("slider2").addEventListener('click', slider)
const sliderThree = document.getElementById("slider3").addEventListener('click', slider)