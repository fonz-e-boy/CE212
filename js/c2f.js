function convert(tagID, from, to){



    var conv= document.getElementById(tagID);

    var pre = document.createElement("pre");

    conv.appendChild(pre);


    var table = document.createElement("table");
    var farenheit = document.createElement("th");
    var celcius = document.createElement("th");

    farenheit.appendChild(document.createTextNode("Farenheit"));
    celcius.appendChild(document.createTextNode("Celcius"));


    table.appendChild(celcius);
    table.appendChild(farenheit);




    for (var i = from; i <to ; i++) {

        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var td2 = document.createElement("td");

        if (i%2==1){
            tr.setAttribute("class", "odd")
        } else {
            tr.setAttribute("class","even")
        }


        td.appendChild(document.createTextNode(i));
        td2.appendChild(document.createTextNode(c2f(i)));
        tr.appendChild(td);
        tr.appendChild(td2);

        table.appendChild(tr);

    }

    document.body.appendChild(table);




    function c2f(c){
        return c*9/5+32
    }


    function f2c(f) {

        return (f-32) * (5/9)
    }



}