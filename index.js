function generateCalendar() {
    var startDate = document.getElementById("start-date").value;
    var cycleLength = parseInt(document.getElementById("cycle-length").value);
  
    
    var cycleDates = [];
    for (var i = 0; i < 12; i++) {
      var currentDate = new Date(startDate);
      currentDate.setDate(currentDate.getDate() + cycleLength);
      cycleDates.push(currentDate);
  
      startDate = currentDate.toLocaleDateString();
    }
  
    var table = document.getElementById("calendar-table");
  
    
    if (table.rows.length == 0) {
      var headerRow = table.insertRow();
      var header1 = headerRow.insertCell();
      header1.innerHTML = "Flow Dates";
      var header2 = headerRow.insertCell();
      header2.innerHTML = "Ovulation Days";
      var header3 = headerRow.insertCell();
      header3.innerHTML = "Safe Start Dates";
      var header4 = headerRow.insertCell();
      header4.innerHTML = "Safe End Dates";
    }
  
   
    for (var i = 0; i < cycleDates.length; i++) {
      var row = table.insertRow();
  
      var cell1 = row.insertCell();
      cell1.innerHTML = cycleDates[i].toLocaleDateString();
  
      var cell2 = row.insertCell();
      var ovulationDate = new Date(cycleDates[i]);
      ovulationDate.setDate(ovulationDate.getDate() - 14);
      cell2.innerHTML = ovulationDate.toLocaleDateString();
  
      var cell3 = row.insertCell();
      var safeStartDate = new Date(cycleDates[i]);
      safeStartDate.setDate(safeStartDate.getDate() - 19);
      cell3.innerHTML = safeStartDate.toLocaleDateString();
  
      var cell4 = row.insertCell();
      var safeEndDate = new Date(cycleDates[i]);
      safeEndDate.setDate(safeEndDate.getDate() - 8);
      cell4.innerHTML = safeEndDate.toLocaleDateString();
    }
  }
  