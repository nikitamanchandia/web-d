var questions = [ '1 + 4 = ?','2 * 11 = ?', '4 - 3 = ?','100/5 = ?']
var count = 0;

function myFunc(){
    var person=prompt("Please enter your name","Nikita")
    if(person != null && person != " ")
    {
        document.getElementById("demo").innerHTML = "Hello " + person + "!  Click start";
        document.getElementById("start").style.display = "block";
    }
}
function afunc(){
    document.getElementById("ques").innerHTML = questions[0];
    count = 0;
    document.getElementById("demo").innerHTML = ""
    document.getElementById("skr").innerHTML = ""
    document.getElementById("topp").style.display="none"
}
function bFunc(i){
    var c=i+1;
    var d = questions.length;
    document.getElementById("ques").innerHTML = questions[c]
    ans()
}

function next()
{
    document.getElementById("result").innerHTML=""
    var i=0;
    var c = questions.length
    for(i; i<c; i++){
        if(document.getElementById("ques").innerHTML === questions[i])
        {
           bFunc(i);
           break;
        }
    }
}

function score(){
    document.getElementById("skr").innerHTML = "your score is " + count + " out of 4"
}
function ans()
{
    if(document.getElementById("ques").innerHTML === "1 + 4 = ?"){
        var opt1 = document.createElement("button");
        opt1.innerHTML = "6"
        document.body.appendChild(opt1);
        opt1.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
            setTimeout(next,1000);
            opt1.style.display="none"
            opt2.style.display="none"
            opt3.style.display="none"
            opt4.style.display="none"
           
        }
    

        var opt2 = document.createElement("button");
        opt2.innerHTML = "5"
        document.body.appendChild(opt2);
        opt2.onclick = function opta(){
            document.getElementById("result").style.color = "green"
            document.getElementById("result").innerHTML = "Your answer is Correct"
            count++;
            opt1.style.display="none"
            opt2.style.display="none"
            opt3.style.display="none"
            opt4.style.display="none"
            setTimeout(next, 1000);
        }
       

        var opt3 = document.createElement("button");
        opt3.innerHTML = "7"
        document.body.appendChild(opt3)
        opt3.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
            opt1.style.display="none"
            opt2.style.display="none"
            opt3.style.display="none"
            opt4.style.display="none"
            setTimeout(next,1000);
        }
    

        var opt4 = document.createElement("button");
        opt4.innerHTML = "4"
        document.body.appendChild(opt4)
        opt4.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
            opt1.style.display="none"
            opt2.style.display="none"
            opt3.style.display="none"
            opt4.style.display="none"
            setTimeout(next,1000);
        }
        
        
    }
    else if(document.getElementById("ques").innerHTML==='2 * 11 = ?'){
        var opt1 = document.createElement("button");
        opt1.innerHTML = "22"
        document.body.appendChild(opt1)
        opt1.onclick = function opta(){
            document.getElementById("result").style.color = "green"
            document.getElementById("result").innerHTML = "Your answer is correct"
            count++;
            opt1.style.display="none"
            opt2.style.display="none"
            opt3.style.display="none"
            opt4.style.display="none"
            setTimeout(next,1000);
        }
       
        var opt2 = document.createElement("button");
        opt2.innerHTML = "5"
        document.body.appendChild(opt2)
        opt2.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
            opt1.style.display="none"
            opt2.style.display="none"
            opt3.style.display="none"
            opt4.style.display="none"
            setTimeout(next,1000);
        }
        

        var opt3 = document.createElement("button");
        opt3.innerHTML = "11"
        document.body.appendChild(opt3)
        opt3.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
            opt1.style.display="none"
            opt2.style.display="none"
            opt3.style.display="none"
            opt4.style.display="none"
            setTimeout(next,1000);
        }
       

        var opt4 = document.createElement("button");
        opt4.innerHTML = "2"
        document.body.appendChild(opt4)
        opt4.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
            opt1.style.display="none"
            opt2.style.display="none"
            opt3.style.display="none"
            opt4.style.display="none"
            setTimeout(next,1000);
        }
        
        
    }
    else if(document.getElementById("ques").innerHTML==='4 - 3 = ?'){
        var opt1 = document.createElement("button");
        opt1.innerHTML = "1"
        document.body.appendChild(opt1)
        opt1.onclick = function opta(){
            document.getElementById("result").style.color = "green"
            document.getElementById("result").innerHTML = "Your answer is correct"
            count++;
            opt1.style.display="none"
            opt2.style.display="none"
            opt3.style.display="none"
            opt4.style.display="none"
            setTimeout(next,1000);
        }
        

        var opt2 = document.createElement("button");
        opt2.innerHTML = "0"
        document.body.appendChild(opt2)
        opt2.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
           
            opt1.style.display="none"
            opt2.style.display="none"
            opt3.style.display="none"
            opt4.style.display="none"
            setTimeout(next,1000);
        }
       
        var opt3 = document.createElement("button");
        opt3.innerHTML = "13"
        document.body.appendChild(opt3)
        opt3.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
            opt1.style.display="none"
            opt2.style.display="none"
            opt3.style.display="none"
            opt4.style.display="none"
            setTimeout(next,1000);
        }
       
        var opt4 = document.createElement("button");
        opt4.innerHTML = "2"
        document.body.appendChild(opt4)
        opt4.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
            opt1.style.display="none"
            opt2.style.display="none"
            opt3.style.display="none"
            opt4.style.display="none"
            setTimeout(next,1000);
        }
       
        
    }
    else if(document.getElementById("ques").innerHTML==='100/5 = ?'){
        var opt1 = document.createElement("button");
        opt1.innerHTML = "15"
        document.body.appendChild(opt1)
        opt1.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is incorrect"
            opt1.style.display="none"
            opt2.style.display="none"
            opt3.style.display="none"
            opt4.style.display="none"
            setTimeout(next,1000);
        }
        
        var opt2 = document.createElement("button");
        opt2.innerHTML = "10"
        document.body.appendChild(opt2)
        opt2.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
           
            opt1.style.display="none"
            opt2.style.display="none"
            opt3.style.display="none"
            opt4.style.display="none"
            setTimeout(next,1000);
        }
   
        var opt3 = document.createElement("button");
        opt3.innerHTML = "20"
     
        opt3.onclick = function opta(){
            document.getElementById("result").style.color = "green"
            document.getElementById("result").innerHTML = "Your answer is correct"
            count++;
            opt1.style.display="none"
            opt2.style.display="none"
            opt3.style.display="none"
            opt4.style.display="none"
            setTimeout(next, 1000);
        }
        document.body.appendChild(opt3);
        var opt4 = document.createElement("button");
        opt4.innerHTML = "2"
       
        opt4.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
            opt1.style.display="none"
            opt2.style.display="none"
            opt3.style.display="none"
            opt4.style.display="none"
            setTimeout(next,1000);
        }
        document.body.appendChild(opt4);
        
    }
    else
    {
        document.getElementById("ques").innerHTML = "Quiz ends here"
        score();
    }
    

}
