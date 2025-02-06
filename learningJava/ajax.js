const xhr= new XMLHttpRequest()

xhr.open("GET", "https://www.npoint.io/docs/cd8ec09360694ed35e3d", true)

xhr.onload = function(){
    if (xhr.status === 200){
        const reponse = xhr.responseText
        console.log("response : ", reponse);
        
    }else{
        console.error("error : ". xhr.status);
        
    }
}
xhr.send();