var topics = ["HTML", "CSS", "Git", "JavaScript"];
/*
if (topic === "HTML"){
    console.log("Let's study HTML!");
} else if (topic === "CSS") {
    console.log("Let's study CSS!");
} else if (topic === "Git"){
    console.log("Let's study Git!");
} else if (topic === "JavaScript"){
    console.log("Let's study JavaScript");
} else {
    console.log("Please try again!");
}
*/
for (x = 0; x < topics.length; x++){
    console.log(topics[x]);
}
var randomTopic = topics[Math.floor(Math.random() * topics.length)]

function listTopics(){
    for (x = 0; x < topics.length; x++){
        console.log(topics[x]);
    }
}

function selectTopic(){
    if (randomTopic === "HTML"){
        console.log("Let's study HTML!");
    } else if (randomTopic === "CSS") {
        console.log("Let's study CSS!");
    } else if (randomTopic === "Git"){
        console.log("Let's study Git!");
    } else if (randomTopic === "JavaScript"){
        console.log("Let's study JavaScript");
    } else {
        console.log("Please try again!");
    }
}

console.log("Here are the topics I learned during prework: ");
listTopics();
console.log("Which topic should I study first?");
selectTopic();

