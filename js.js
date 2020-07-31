(function () {
  var curRegMethod = "Email";

  var tab = document.getElementsByClassName("tab");
  var emailTab = document.getElementById("emailTab");
  var phoneTab = document.getElementById("phoneTab");
  var formPanel = document.getElementById("formPanel");
  var regBtn = document.getElementById("regBtn");
  var loading = document.getElementById("loading");

  var regMethod = document.getElementById("regMethod");
  var currency = document.getElementById("currency");
  var terms = document.getElementById("terms");
  var promo = document.getElementById("promo");

  function validateEmail(mail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.value.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  }

  function validatePhone(phone) {
    var phoneno = /^\d{10}$/;
    if (phone.value.match(phoneno)) {
      return true;
    } else {
      return false;
    }
  }

  function showLoadingSpin() {
    console.log(tab);
    formPanel.style.display = "none";
    loading.classList.add("loader");
  }

  function hideLoadingSpin() {
    formPanel.style.display = "block";
    loading.classList.remove("loader");
  }

  /************
   * SENDING REQUEST AND CHECKING RESPONSE (with spin loader)
   *************/
  /*
  var sendRegistrationRequest = () => {
    showLoadingSpin();
    var reg = new XMLHttpRequest();
    reg.onreadystatechange = function () {
      if (reg.readyState == 4 && reg.status == 200) {
        hideLoadingSpin();
        alert("Registration success");
      } else {
        hideLoadingSpin();
        alert("Registration failed");
      }
    };
    let postString = `&regMethod=${regMethod}&currency=${currency}&terms=${terms}&promo=${promo}`;
    reg.open("POST", "serverSideScript.php" + postString, true);
    reg.send();
  };
  */

  //just simulatin request
  var sendRegistrationRequest = () => {
    showLoadingSpin();
    setTimeout(() => {
      alert("Registration success");
      hideLoadingSpin();
    }, 1000);
  };

  var emailRegistration = () => {
    formPanel.style.backgroundColor = "#bff1fb";
    curRegMethod = "Email";
    regMethod.type = "email";
    regMethod.placeholder = "Email";
    regMethod.setAttribute("name", "email");
  };

  var phoneRegistration = () => {
    formPanel.style.backgroundColor = "#146b7d";
    curRegMethod = "Phone";
    regMethod.type = "tel";
    regMethod.placeholder = "Phone";
    regMethod.setAttribute("name", "number");
  };

  emailTab.addEventListener("click", emailRegistration);
  phoneTab.addEventListener("click", phoneRegistration);

  regBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if ((curRegMethod = "Email")) {
      if (!validateEmail(regMethod)) {
        document.getElementById("error").innerHTML = "Email is invalid";
        return;
      } else {
        document.getElementById("error").innerHTML = "";
        sendRegistrationRequest();
      }
    }

    if ((curRegMethod = "Phone")) {
      if (!validatePhone(regMethod)) {
        document.getElementById("error").innerHTML = "Phone is invalid";
      } else {
        document.getElementById("error").innerHTML = "";
        sendRegistrationRequest();
      }
    }
  });
})();
