/* Custom JavaScript goes here */

//IIFE - Immediatly invoked function expression

"use strict";

((core) => {
  function Start() {
    console.log("App started...");

    function displayHome() {


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

      let paragraphDiv = document.createElement("div");
      let paragraphThree = `<p id="paragraphThree" class="fs-7">This is paragraph three</p>`;
      paragraphDiv.innerHTML = paragraphThree;

      newParagraph.before(paragraphDiv);
    }
    function displayAbout(){
        
    }
    function displayContact(){

      $("#messageArea").hide();

      $("#fullName").on("blur", () => {

        if ( $("#fullName").val().length < 2) {
          //$("#fullName").trigger("focus");
          //$("#fullName").trigger("select");

          $("#messageArea").show();
          $("#messageArea").addClass("alert alert-danger");
          $("#messageArea").text("Please enter a valid name");
        } else {
          $("#messageArea").removeAttr("class");
          $("#messageArea").hide();
        }
      });

      let sendButton = document.getElementById("sendButton");
      sendButton.addEventListener("click", function (event) {
        //event.preventDefault();

        let contact = new core.Contact(
          fullName.value,
          contactNumber.value,
          email.value
        );
        if (contact.serialize()) {
          localStorage.setItem(
            (localStorage.length + 1).toString(),
            contact.serialize()
          );
        }
      });
    }
    function displayServices(){
        
    }
    function displayProjects(){
        
    }

    function displayContactList() {
      if (localStorage.length > 0) {
        let contactList = document.getElementById("contactList");
        let data = "";

        for (let index = 0; index < localStorage.length; index++) {
          let contactData = localStorage.getItem((index + 1).toString());
          let contact = new core.Contact();

          contact.deserialize(contactData);

          data += `<tr>
            <th scope="row">${index + 1}</th>
            <td>${contact.FullName}</td>
            <td>${contact.ContactNumber}</td>
            <td>${contact.EmailAddress}</td>
          </tr>`;
        }

        contactList.innerHTML = data;
      }
    }

    switch (document.title) {
      case "Home":
          displayHome();
        break;
      case "About":
        break;
      case "Contact":
        displayContact();
        break;
      case "Services":
        break;
      case "Projects":
        break;
        case "Contact-List":
          displayContactList();
        break;
    }

    
  }

  window.addEventListener("load", Start);

  core.Start = Start;
})(core || (core = {}));
