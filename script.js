//binds html elements to variables
//displays
const displayYourName = document.getElementById('display-name');
const display1 = document.getElementById('display-1');
const display2 = document.getElementById('display-2');
const display3 = document.getElementById('display-3');
const display4 = document.getElementById('display-4');
const display5 = document.getElementById('display-5');
//buttons
const userInputButton = document.getElementById("user-input-button");
//user inputs
let yourName = "";
let minutesToFill = 0;
let minimumTimeBlock = 0;

//functions to use in the main function (modules?)
let returnedToDoList = [];
let numberOfActivities = 0;

const getUserInputs = () => {
  yourName = document.getElementById('your-name').value;
  minutesToFill = parseInt(document.getElementById('minutes-to-fill').value, 10);
  minimumTimeBlock = parseInt(document.getElementById('minimum-time-block').value, 10);
}

const getNumberOfActivities = () => {
    const maxActivities = Math.floor(minutesToFill / minimumTimeBlock);
    numberOfActivities = Math.floor(Math.random()*maxActivities)+1;
  }

const curateActivityList = (activityList, numActivities) => {
  for (let i = 0; i < numActivities; i++) {
      let rand = Math.floor(Math.random()*activityList.length);
      returnedToDoList.push(`---${activityList[rand]}    !!!`);
  };
}


const randombetween = (min, max) => {
  return Math.floor(Math.random()*(max-min+1)+min);
}

const RandomTimes = (timeToFill, numActivities) => {
  let r = [];
  let currsum = 0;
  for(let i=0; i<numActivities-1; i++) {
      r[i] = randombetween(1, timeToFill-(numActivities-i-1)-currsum);
      currsum += r[i];
  }
  r[numActivities-1] = timeToFill - currsum;
  return r;
}

userInputButton.addEventListener('click', () => {
  getUserInputs();
  getNumberOfActivities();
  returnedToDoList = [];
  curateActivityList(yourSavedActivities, numberOfActivities);

  alert(yourName + " - please actually do what we tell you to. Otherwise what's the point?");
  
  displayYourName.innerHTML = yourName;
  display1.innerHTML = `minutes to fill: ${minutesToFill}`;
  display2.innerHTML = "minimum time block: " + (minimumTimeBlock);
  display3.innerHTML = "number of activities: " + (numberOfActivities);
  display4.innerHTML = 'Activity List:<br>' + (returnedToDoList.join("<br>"));
})




//lists the user can pick from to generate activities from
//pre-populated lists
const yourSavedActivities = ["Study CSS", "Study JavaScript", "Work on your own coding project", "Practice guitar - technical skills", "Practice guitar - learn a cover", "Practice guitar - practice your own songs", "Revise or edit a mostly or totally finished song of your own", "Work on an in-process song", "Come up with 10 song content ideas", "Take the 5th song down on the 14th playlist down on spotify. Use that song structure to write a song", "Work in the garden", "Clean the house", "Upload photos for Dad", "Scan photos", "Date and organize old photos", "Go on a walk", "Go for a run", "Do pushups", "Read", "Watch TV", "Learn about racism", "Take action against racism", "Draw"];
const productiveActivities = ["Coding", "Practice guitar", "Write Songs", "Sort through old papers"];
const funActivities = ["Nap", "Read", "Watch TV", "Draw", "Go for a walk", "Call a Friend"];
const creativeActivities = ["Draw", "Write a Song", "Write a Story"];
const randomActivities = ["Draw Mike Wasouski", "Go on a mile plus bike ride",  "Stare into your own eyes in the mirror", "Nap", "Run around your house", "Make a paper airplane", "Make a pair of shorts from an old sheet", "Make a home movie using a plot from Plot Generator.", "Bake homemade pizza", "Dress up in the fanciest clothes you can find", "Host a black-tie video chat", "Host a black-tie garden walk", "Write a coronavirus parody of your favourite song", "Build a toothpick bridge"]

//gets array content from user somehow
const enterActivities = [];