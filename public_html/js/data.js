

function getWine(id, wines){
    console.log(wines);
    
    
}

window.onload = function() {
   const xhr = new XMLHttpRequest(); // console.log(xhr);
   
   
   xhr.onreadystatechange= function() {
        if(xhr.readyState==4 && xhr.status==200) {
            let data = xhr.responseText;

            let wines = JSON.parse(data); //console.log(wines);
            
            
            
          
            
            let listeUL = document.getElementById('listwines');
            let strLIs = '';

            wines.forEach(function(wine){
                
                let nameWine = wine.name;
                let idWine = wine.id;
                
                strLIs += '<li data-id="'+idWine+'"class="list-group-item" >'+wine.name+'</li>';
            });
            
            listeUL.innerHTML = strLIs;
            let nodeLIs = listeUL.getElementsByTagName('li');
            
            for(let li of nodeLIs) {
                li.onclick = function() {
                    getWine(this.dataset.id, wines);
                }
            }
        }
    };
    
    
    xhr.open('GET','js/wines.json',true);
    xhr.send();
    
    
    
    
};