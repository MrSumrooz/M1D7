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


