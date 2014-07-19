var people = [];

var Possession = {
  name: "",
  possessionScore: 0

};
var Person = {
  name: "",
  yourScore: function(){
    var totalScore = 0;
    this.possessions.forEach(function(eachPossession) {
      totalScore += eachPossession.possessionScore;
    });
    return totalScore;
  }
};



$(document).ready(function() {
  var currentPerson;
  $("#enter-your-name").click(function(event) {  //click for making people
    var newPerson = Object.create(Person);
    newPerson.possessions = [];
    newPerson.name = $("input.new-name").val();
    $("ul.people").append("<li><span class='clickable'>" + newPerson.name + "</span></li>");
    people.push(newPerson);
    $("input.new-name").val("");

    $(".clickable").last().click(function() {  //click for showing person's possessions
      $(".person-name").text(newPerson.name);
      currentPerson = newPerson;
      // console.log(currentPerson);
      // console.log(people);
      $("ul.possessions").empty();
      currentPerson.possessions.forEach(function(eachPossession){
        $("ul.possessions").append("<li>" + eachPossession.name + " = " + eachPossession.possessionScore + "</li>");
      });
    $("#second-column").show();
    });
  });

  $("#add-possession").last().click(function() {  //click for add new possessions to person's list
    var newPossession = Object.create(Possession);
    newPossession.name = $("input.new-possession").val();
    newPossession.possessionScore = parseInt($("select.possession-score").val());
    currentPerson.possessions.push(newPossession);
    $("input.new-possession").val("");
    $("select.possession-score").val($("#default-option").val());
console.log(currentPerson);
    $("ul.possessions").empty();
    currentPerson.possessions.forEach(function(eachPossession){
      $("ul.possessions").append("<li>" + eachPossession.name + " = " + eachPossession.possessionScore + "</li>");
    });
    $("#third-column").show();
  });

  $(".total-score").click(function() {
    $(".your-score").text(currentPerson.yourScore());
  });
});
