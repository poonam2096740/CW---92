player1_name = localStorage.getItem("player_1_name");
player2_name = localStorage.getItem("player_2_name");

question_turn = "player_1";
answer_turn = "player_2";

player1_score = 0;
player2_score = 0;

document.getElementById("player_1_name_display").innerHTML = player1_name + " : ";
document.getElementById("player_2_name_display").innerHTML = player2_name + " : ";

document.getElementById("player_1_score").innerHTML = player1_score + 0;
document.getElementById("player_2_score").innerHTML = player2_score + 0;

document.getElementById("player_question").innerHTML = "question turn -" + player1_name;
document.getElementById("player_answer").innerHTML = "answer turn -" + player2_name;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lower case - " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1,"_");
    remove_charAt2 = word.replace(charAt2,"_");
    remove_charAt3 = word.replace(charAt3,"_");

    question_word = "<h4 id='word_display'>Q."+ remove_charAt3 + "</h4>";
    input_box = "<br>Answer:<input id='input_checkbox' type='text' >"
    check_button = "<br><br><button class='btn btn-info' onclick = 'check()'>check</button>"

    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;

    document.getElementById("word").value = "";
}

function check(){
    get_answer = document.getElementById("input_checkbox").value;
    answer = get_answer.toLowerCase();
    console.log(answer);

    if (answer == word){
        if(answer_turn == "player_1"){
            player1_score = player1_score + 1;
            document.getElementById("player_1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player_2_score").innerHTML = player2_score;
        }
    }

    if(question_turn == "player_1"){
        question_turn = "player_2";
        document.getElementById("player_question").innerHTML = "Question turn - " + player2_name;
    }
    else{
        question_turn = "player_1";
        document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
    }

    if(answer_turn == "player_1"){
        answer_turn = "player_2";
        document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;
    }
    else{
        answer_turn = "player_1";
        document.getElementById("player_answer").innerHTML = "Answer turn - " + player1_name;
    }

    document.getElementById("output").innerHTML = "-"
    
}