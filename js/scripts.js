$(document).ready(function () {
  $("form#faveThings").submit(function(event){
    event.preventDefault();
    const faveThing1 = $("#firstFave").val();
    const faveThing2 = $("#secondFave").val();
    const faveThing3 = $("#thirdFave").val();

    let favoriteArray = [faveThing1, faveThing2, faveThing3];
    let newArray = [];
    newArray.push(favoriteArray[0],favoriteArray[2], favoriteArray[1]);

    console.log(favoriteArray);
    console.log(newArray);

    $("#listOne").text(newArray[0]);
    $("#listTwo").text(newArray[1]);
    $("#listThree").text(newArray[2]);
  });
});