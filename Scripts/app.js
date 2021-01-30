/* Custom JavaScript goes here */

//IIFE - Immediatly invoked function expression

"use strict";
(function () {
  function Start() {
    console.log("App started...");

    function displayHome(){
    let paragraphOneText = "Welcome to my ICE site test";

    let paragraphOne = document.getElementById("paragraphOne");

    paragraphOne.textContent = paragraphOneText;
    paragraphOne.className = "fs-5";

    let newParagraph = document.createElement("p");

    newParagraph.setAttribute("id", "paragraphTwo");
    newParagraph.textContent = "... and this is Paragraphg two";

    let mainContent = document.getElementsByTagName("main")[0];

    mainContent.appendChild(newParagraph);
    newParagraph.className = "fs-6";

    let paragraphDiv = document.createElement('div');
    let paragraphThree = `<p id="paragraphThree" class="fs-7">This is paragraph three</p>`;
    paragraphDiv.innerHTML = paragraphThree;

    newParagraph.before(paragraphDiv);
    }
    function displayAbout(){
        
    }
    function displayContact(){
        let messageArea = document.getElementById("messageArea");
        messageArea.hidden = true;

        let fullName = document.getElementById("fullName");
        fullName.addEventListener("blur", function(){
            if(fullName.value.length < 2){
                //fullName.focus();
                messageArea.hidden = false;
                messageArea.textContent = "Please enter a valid name";
            }else{
                messageArea.hidden = true;
            }

            let sendButton = document.getElementById("sendButton");
            sendButton.addEventListener("click", function(event){
                event.preventDefault();

                let contact = new Contact(fullName.value, contactNumber.value, email.value);
                console.log(contact.toString());
            });
        });
    }
    function displayServices(){
        
    }
    function displayProjects(){
        
    }

    switch (document.title) {
      case "Home":
          displayHome();
        break;
      case "About":
        break;
      case "Contact":
        displayContact()
        break;
      case "Services":
        break;
      case "Projects":
        break;
    }

    
  }

  window.addEventListener("load", Start);
})();
