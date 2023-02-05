

function loadDoc(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            let res = xhttp.responseText;
            res = JSON.parse(res);
            let s = '';
            let lnk = '';
            for(let i = 0; i < res.length; i++){
                s += '<tr>';
                s += `<td>${res[i].id}</td>`;
                s += `<td>${res[i].userId}</td>`;
                s += `<td>${res[i].title}</td>`;
                s += `<td>${res[i].body}</td>`;
                lnk = res[i].id;
                s += `<td><button onclick=viewDetails(${res[i].id})>View</button></td>`;
                s += `</tr>`;
                
            }
            document.getElementById('cnt').innerHTML = s;
           
        }
    }

    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhttp.send();
}

function viewDetails(id){
    // console.log(id)
    document.getElementById("htable").style.display="block"
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            let res = xhttp.responseText;
            res = JSON.parse(res);
            let v = '';
           
                v += '<tr>';
                v += `<td>${res.id}</td>`;
                v += `<td>${res.userId}</td>`;
                v += `<td>${res.title}</td>`;
                v += `<td>${res.body}</td>`;
                lnk = res.id;
                // v += `<td><button onclick=viewDetails(${res.id})>View</button></td>`;
                v += `</tr>`;
                
        
            document.getElementById('viewcnt').innerHTML = v;
            console.log(res.id);
        }
    }
    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/posts/'+id);
    xhttp.send();
}

// https://jsonplaceholder.typicode.com/posts/1