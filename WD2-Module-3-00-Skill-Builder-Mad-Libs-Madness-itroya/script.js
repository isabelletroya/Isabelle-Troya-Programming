/* Given the 'id' attribute of a form element, this
   will return the value entered by the user into
   that form element. */
function formValue(id) {
  // Get the form element.
  let formElement = document.getElementById(id);

  // When the form element isn't found, return
  // a string that signifies that.
  if (formElement === null) {
    return `[${id} NOT FOUND]`;
  }

  let value = formElement.value;

  // When the value is empty, return a string
  // with the placeholder text.
  if (formElement.value.trim() === "") {
    return `[${formElement.placeholder}]`;
  }

  return document.getElementById(id).value;
}

/* Given the 'id' of an HTML element and a 
   'className', this will add that class to
   the HTML element. */
function addClassToElement(id, className) {
  let element = document.getElementById(id);
  element.classList.add(className);
}

/* The code here will be executed each time
   that the form button is clicked. */
function generate() {
  //Retrieve form values.
  let nameOfBestFriend = formValue("Name-Best-Friend");
  let adjective1 = formValue("adjective-1");
  let favoriteAnimal = formValue("favorite-animal");
  let adjective2 = formValue("adjective-2");
  let characterName = formValue("character-name");
  let favoriteSinger = formValue("favorite-singer");
  let favoriteDessert = formValue("favorite-dessert");
  let adjective3 = formValue("adjective-3");
  let yourName = formValue("your-name");


  //Insert form values into madlib.
  let madLib = `
    Hello ${nameOfBestFriend}!
    <br><br>
    How is your ${adjective1} mother? I heard that she bought a new ${favoriteAnimal}. I don't think it was great idea for her to get that. I have heard that they can be quite ${adjective2}. Its name is ${characterName} right? That's great... I think she should have named it ${favoriteSinger}, but I guess the name she chose is fine too. Oh and tell her that I think her ${favoriteDessert} is ${adjective3}! Maybe she can send me her secret recipe... Anywho, I hope you are doing well!
    <br><br>
    Xoxo,
    ${yourName}
  `;
  console.log(madLib);

  //Output madlib to player.
  document.getElementById("output").innerHTML = madLib;
  addClassToElement("container", "generated");

}

//formValue description-- Based on the notes it seems we are able to connect a HTML id to the formValue(). Since it was a text bot, whatever was typed in the textbox was realted to the id which connected to the formValue. The formValue is what was typed in the box. In JS the formValue() also conects to a let variable and that variable was used in the madLib template. It is hard for me to explain but it makes sense in my head, sorry if this is a poor explanation!
