 

  function loadFarm0() {
    isTotal = true;
    fetch('/api/farm-0/otp/report')
      .then(response=> response.text())
        .then(text=> { 
            appendData(text, "farm-0");
            setTimeout(intervalFunc, 10000);
            console.log(totalOtp);
        })
        .catch(function (err) {
            console.log(err);
        });
  }

  function intervalFunc() {
    loadFarm0();
  }

  function appendData(data, strDiv) {
    var mainContainer = document.getElementById(strDiv);
    mainContainer.innerHTML = data;
  }

  intervalFunc();
