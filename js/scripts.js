
  var people = [];
  var allPossessions =[];
  var possession = {name:"", possessionScore:0};
  var Person = {name:"", personPosessions:allPossessions, yourScore: function(){
    var totalScore = 0;
    Person.personPossessions.forEach(function(eachPossession) {
      totalScore += eachPossession.possessionScore;
    });
    return totalScore;
  };
};

$(document).ready(function() {
  $("form#").click(function() {
    var newPerson = Object.create(Person);
    var newPossessions
});
