let matchStick = 1;
let house = matchStick * 6;

async function makeHouses() {
let numberOfHouses = 87;

  if (numberOfHouses == 1) {
    numberOfMatchSticks = house;
    console.log(numberOfMatchSticks);
  } else {
    if(numberOfHouses==0){
      numberOfMatchSticks=0;
    } else{
      numberOfMatchSticks = (house*numberOfHouses)-(numberOfHouses-1);
      console.log(numberOfMatchSticks);
      console.log("I'm here");
    }

  }
}

makeHouses(house);
