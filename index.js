let changeH1text =  function(){

let changeH1Node =  document.getElementById("Martname")
changeH1Node.innerHTML = " Logistic Sweden Mart"



}


let changebgcolor = function() {

    let changebgcolorNode = document.getElementById("Martname")

    changebgcolorNode.style.backgroundColor = "red"
}



let changeaddress = function(){

    let changeAddressNode = document.getElementById("address")
    changeAddressNode.innerHTML = "New Block University Stockholm Sweden"

} 


let addCssToLink = function(){

    let addCssToLinkNode = document.getElementsByTagName("a")
    
    for(let addCss of addCssToLinkNode)

       addCss.classList.add("colortolink")


}

const priceColorFunc = function(){

    
    
    const priceNodes = document.getElementsByClassName("price")
        const randomColor = generateRandomColor()
        for(priceNode of priceNodes) {
            priceNode.style.backgroundColor = randomColor
        }
    
    }
    
    const random255 = () => {
        return Math.round(Math.random() * 255)
    }
    
    const generateRandomColor = function() {
        // rgb(255,255,255)
        const red = random255()
        const green = random255()
        const blue = random255()
    
        return rgb(${red}, ${green}, ${blue})
    }


