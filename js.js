    var xhr = new XMLHttpRequest();
    var url = "php.php";
    var param = "req=data";
    xhr.onreadystatechange = function(){
        if(this.readyState === 0){
            console.log("ano");
        }
        if(this.readyState === 4 && this.status === 200){
            console.log(xhr.responseText);
        }
    }

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(param);