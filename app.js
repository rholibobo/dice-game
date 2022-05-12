// window.onload = choosePic;

    var myPicture1 = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
    var myPicture2 = ["images/dice6.png","images/dice5.png","images/dice4.png","images/dice3.png","images/dice2.png","images/dice1.png"];

function choosePic() {
    
 randomNum1 = Math.floor(Math.random() * myPicture1.length);

 randomNum2 = Math.floor(Math.random() * myPicture2.length);

    document.getElementById("img_one").src = myPicture1[randomNum1];
    
    document.getElementById("img_two").src = myPicture2[randomNum2];

    document.getElementById("btn");

    
    if(myPicture1[randomNum1] > myPicture2[randomNum2]) {
        document.getElementById("header_text").textContent = "Player 1 wins";

        var first_number = document.getElementsByClassName("one1")[0];
        var n = first_number.innerHTML;
        n++;
        document.getElementsByClassName("one1")[0].innerHTML = n; 
    }
    else if (myPicture1[randomNum1] < myPicture2[randomNum2]) {
        document.getElementById("header_text").textContent = "Player 2 wins";

        var second_number = document.getElementsByClassName("two1")[0];
        var n = second_number.innerHTML;
        n++;
        document.getElementsByClassName("two1")[0].innerHTML = n;
    }
    else{
        document.getElementById("header_text").textContent = "Draw";
    }

   
   
}
































    

    

     

    



