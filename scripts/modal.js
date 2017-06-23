$(document).ready(function (){
    var modal = document.getElementById('myModal');
     var seaModal = document.getElementById('seaModal');
    
    var btn = document.getElementById('modalBtn');
    var seaBtn = document.getElementById('seaModalBtn');

    
    btn.onclick = function(){
        modal.style.display = "block";
    }
    
    seaBtn.onclick = function(){
        seaModal.style.display = "block";
    }
    
    
    window.onclick = function(event){
        if(event.target == modal || event.target == seaModal)
            {
                modal.style.display = "none";
                seaModal.style.display = "none";
            }
    }
});