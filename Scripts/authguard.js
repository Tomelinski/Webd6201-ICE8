"use strict";
(() => {
    if (!sessionStorage.getItem("user")) {
        //redirect to login page
        location.href = "login.html";
    }

})();