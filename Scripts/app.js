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

    function testFullName(){
      let messageArea = $("#messageArea").hide();
  
      let fullNamePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  
      $("#fullName").on("blur", function(){
  
        if (!fullNamePattern.test($(this).val())) {
          //$(this).trigger("focus").trigger("select");
  
          messageArea.show().addClass("alert alert-danger").text("Please enter a valid full name");
        } else {
          messageArea.removeAttr("class").hide();
        }
      });

    }

    function textContactNumber(){
      let messageArea = $("#messageArea").hide();
  
      let contactNumberPattern = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
  
      $("#contactNumber").on("blur", function(){
  
        if (!contactNumberPattern.test($(this).val())) {
          //$(this).trigger("focus").trigger("select");
  
          messageArea.show().addClass("alert alert-danger").text("Please enter a valid contact number");
        } else {
          messageArea.removeAttr("class").hide();
        }
      });
    }

    function textEmailAddress(){
      let messageArea = $("#messageArea").hide();
  
      let emailAddressPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  
      $("#email").on("blur", function(){
  
        if (!emailAddressPattern.test($(this).val())) {
          //$(this).trigger("focus").trigger("select");
  
          messageArea.show().addClass("alert alert-danger").text("Please enter a valid email address");
        } else {
          messageArea.removeAttr("class").hide();
        }
      });
    }

    function formValidation(){
      testFullName();
      textContactNumber();
      textEmailAddress();

    }

    function displayContact(){
      formValidation();

      $("#sendButton").on("click", ()=>{
        if($("#subsribeCheckBox")[0].checked){

          let contact = new core.Contact(
            fullName.value,
            contactNumber.value,
            email.value
          );
            
            
            if (contact.serialize()) {
              let key = contact.FullName.substring(0,1) + Date.now();
              localStorage.setItem(
                key,
                contact.serialize()
              );
            }
          }
      });
    }

    function displayServices(){
        
    }

    function displayProjects(){
        
    }

    function displayContactList() {
      //xml object
      let XHR = new XMLHttpRequest();

      //open connection File
      XHR.open("GET", "./Data/contacts.json");

      //send server request
      XHR.send();

      XHR.addEventListener("readystatechange", function(){

        if (XHR.readyState === 4 && XHR.status === 200) {

          let contacts = JSON.parse(XHR.responseText).contacts;

          let contactData = "";
          let contactIndex = 0;

          for (const contact of contacts) {
            
            let newContact = new core.Contact();
  
            newContact.fromJSON(contact);
  
            contactData += `<tr>
              <th scope="row">${index}</th>
              <td>${newContact.FullName}</td>
              <td>${newContact.ContactNumber}</td>
              <td>${newContact.EmailAddress}</td>
              <td class="text-center"><button value="${contactIndex}" class="btn btn-primary btn-sm edit"><i class="fas fa-edit fa-sm"></i> Edit</button></td>
              <td class="text-center"><button value="${contactIndex}" class="btn btn-danger btn-sm delete"><i class="fas fa-trash-alt fa-sm"></i> Delete</button></td>
            </tr>`;
  
            contactIndex ++;
          }
        }
      });



      if (localStorage.length > 0) {
        let contactList = document.getElementById("contactList");

        let data = "";

        let keys = Object.keys(localStorage);

        let index = 0;

        for (const key of keys) {
          let contactData = localStorage.getItem(key);
          let contact = new core.Contact();

          contact.deserialize(contactData);

          data += `<tr>
            <th scope="row">${index}</th>
            <td>${contact.FullName}</td>
            <td>${contact.ContactNumber}</td>
            <td>${contact.EmailAddress}</td>
            <td class="text-center"><button value="${key}" class="btn btn-primary btn-sm edit"><i class="fas fa-edit fa-sm"></i> Edit</button></td>
            <td class="text-center"><button value="${key}" class="btn btn-danger btn-sm delete"><i class="fas fa-trash-alt fa-sm"></i> Delete</button></td>
          </tr>`;

          index ++;
        }
        
        contactList.innerHTML = data;
        
        $("button.edit").on("click", function(){
          location.href = "edit.html#" + $(this).val();
        });
        //fix list when deleting
        $("button.delete").on("click", function(){
          if(confirm("Are you sure?")){
            localStorage.removeItem($(this).val());
          }
          location.href = "contact-list.html";
        });
      }

      $("#addButton").on("click", function(){
        location.href = "edit.html";
      });
    }

    function displayEdit(){
      let key = location.hash.substring(1);

      let contact = new core.Contact();

      if (key != ""){
        contact.deserialize(localStorage.getItem(key));
        
        $("#fullName").val(contact.FullName);
        $("#contactNumber").val(contact.ContactNumber);
        $("#email").val(contact.EmailAddress);
      }
      else
      {
        $("main>h1").text("Add Contact");
        $("#editButton").html(`<i class="fas fa-plus fa-lg"></i> Add`);
      }

      formValidation();

      $("#editButton").on("click", function(){
        //if(document.forms[0].checkValidity()){
          //create new key if emtpy
          if(key == ""){
            key = contact.FullName.substring(0,1) + Date.now();
          }
          
          //copy contact info into form to contact object
          contact.FullName = $("#fullName").val();
          contact.ContactNumber = $("#contactNumber").val();
          contact.EmailAddress = $("#email").val();
          
          //add to local storage
          localStorage.setItem(key, contact.serialize());
          location.href = "contact-list.html";
        //}
      });

      $("#cancelButton").on("click", function(){
        location.href = "contact-list.html";
      });
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
      case "Edit":
        displayEdit();
        break;
    }

    
  }

  window.addEventListener("load", Start);

  core.Start = Start;
})(core || (core = {}));
