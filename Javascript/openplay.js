

let array1 = []
// let substrings = [];
let Enter_Number1 = document.getElementById("Play1").value;

function play_number1() {
  let Enter_Number1 = document.getElementById("Play1").value;
  let harup12 = document.getElementById("harup1").value;
  console.log(harup12)
  let regx1 = /^[A-Za-z]+$/;
  if (regx1.test(Enter_Number1)) {
    // console.log(true);
    document.getElementById("Play1").value = ''
  }
  let even = []
  let odd = []
  for (i = 0; i <= 100; i++) {

    // console.log(i)
    if (i % 2 === 0) {
      even.push(i)
      // console.log(i)

    }
    else {
      odd.push(i)
      // console.log(odd)
    }

  }
  // console.log(even)
  // console.log(even)
  let substrings = [];

  // Determine the end index for the loop based on whether the input number is odd or even
  if (Enter_Number1.length % 2 !== 0) {
    Enter_Number1 = Enter_Number1.slice(0, -1);
  }

  // Loop through the string and extract substrings of length 2
  for (let i = 0; i < Enter_Number1.length; i += 2) {
    // Push each substring to the array
    substrings.push(Enter_Number1.slice(i, i + 2));

  }

  // console.log(substrings)
  let storage2 = localStorage.setItem("array6", JSON.stringify(substrings))
  // console.log(storage2)

  console.log(substrings)



  // Construct HTML table rows for displaying pairs
  let jodacollection14 = substrings.map((item, index) => ({
    text: item,
    equal: "=",
    zero: "0",
    cross: "x" // If it's the last pair, display "x"
  }));
  // console.log(jodacollection14)

  // Display pairs in HTML table
  let firsttable = jodacollection14.map((item, index) => `
    <tr>
        <td class="text1">${item.text}</td>
        <td class="equal2">${item.equal}</td>
        <td class="zero1" id="zero1">${item.zero}</td>     
        <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
    </tr>
`).join('');
  // console.log(firsttable)
  document.getElementById("without_palti").innerHTML = firsttable;
  let store1 = localStorage.setItem("array4", JSON.stringify(jodacollection14));


  let uniqueEntries = [];
  jodacollection14.forEach(item => {
    if (!uniqueEntries.some(entry => entry.text === item.text)) {
      uniqueEntries.push(item);
    }
  });

  // Generate HTML for the table rows
  let tableRowsHTML = uniqueEntries.map((item, index) => `
      <tr class="table1">
          <td class="text1">${item.text}</td>
          <td class="equal2">${item.equal}</td>
          <td class="zero1" id="zero1">${item.zero}</td>     
          <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
      </tr>
  `).join("");

  console.log(tableRowsHTML);

  // Append table rows HTML to the table body
  document.getElementById('without_palti').innerHTML = tableRowsHTML;
  if (document.getElementById('check1').checked) {
    let amount56 = document.getElementById("amount14").value;
    let store4 = localStorage.getItem("array4");
    let new_array24 = JSON.parse(store4);
    let get_storage1 = localStorage.getItem("array6");
    let storage3 = JSON.parse(get_storage1)
    console.log(storage3)
    console.log(get_storage1)
    let set_item = JSON.parse(get_storage1);
    let set_item1 = set_item.join('');
    let set_item2 = set_item1.split('').reverse().join('');
    let pairs = set_item2.match(/\d{2}/g);
    let resultArray = pairs.map(pair => pair);
    console.log(resultArray)

    let palti1 = storage3.map((item, index) => ({
      text: item,
      equal: "=",
      zero: amount56,
      cross: "x"
    }))
    console.log(palti1)

    if (amount56 === "") {
      palti1 = storage3.map((item, index) => ({
        text: item,
        equal: "=",
        zero: "0",
        cross: "x"
      }))
    }


    let jodacollection15 = resultArray.map((item, index) => ({
      text: item,
      equal: "=",
      zero: amount56,
      cross: "x"
    }));

    console.log(jodacollection15)

    // Create objects with the formatted pairs
    if (amount56 === "") {
      console.log(amount56 === "")
      jodacollection15 = resultArray.map((item, index) => ({
        text: item,
        equal: "=",
        zero: "0",
        cross: "x"
      }));
    }

    // Concatenate new_array24 and jodacollection15
    let concat = palti1.concat(jodacollection15);
    console.log(concat)

    // Filter out duplicate entries based on 'text'
    let uniqueEntries = [];
    concat.forEach(item => {

      if (!uniqueEntries.some(entry => entry.text === item.text)) {
        uniqueEntries.push(item);
      }
    });
    console.log(uniqueEntries)

    // Generate HTML for the table rows
    let tableRowsHTML = uniqueEntries.map((item, index) => `
        <tr class="table1">
            <td class="text1">${item.text}</td>
            <td class="equal2">${item.equal}</td>
            <td class="zero1">${item.zero}</td>     
            <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
        </tr>
    `).join("");

    console.log(tableRowsHTML);

    // Append table rows HTML to the table body
    document.getElementById('without_palti').innerHTML = tableRowsHTML;
  }
  else {
    let amount56 = document.getElementById("amount14").value;
    let get_storage1 = localStorage.getItem("array6");
    let storage3 = JSON.parse(get_storage1)
    console.log(storage3)

    let palti_joda1 = storage3.map((item, index) => ({
      text: item,
      equal: "=",
      zero: amount56,
      cross: "x"
    }))
    console.log(palti_joda1)

    if (amount56 === "") {
      palti_joda1 = storage3.map((item, index) => ({
        text: item,
        equal: "=",
        zero: "0",
        cross: "x"
      }))


    }

    let uniqueEntries = [];
    palti_joda1.forEach(item => {

      if (!uniqueEntries.some(entry => entry.text === item.text)) {
        uniqueEntries.push(item);
      }
    });
    console.log(uniqueEntries)

    // Generate HTML for the table rows
    let tableRowsHTML = uniqueEntries.map((item, index) => `
        <tr class="table1">
            <td class="text1">${item.text}</td>
            <td class="equal2">${item.equal}</td>
            <td class="zero1" id="zero1">${item.zero}</td>     
            <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
        </tr>
    `).join("");

    console.log(tableRowsHTML);

    // Append table rows HTML to the table body
    document.getElementById('without_palti').innerHTML = tableRowsHTML;

    console.log(tableRowsHTML)
  }


  // if (document.getElementById("harup1").value !== "") {

  //   if(document.getElementById("check12").checked && document.getElementById("check2").checked){
  //    let get1 =  localStorage.getItem("ABJoda");
  //    console.log(get1)
  //   }


  // }



}
function reverse1() {
  let amount56 = document.getElementById("amount14").value;
  let Enter_Number1 = document.getElementById("Play1").value;

  if (document.getElementById('check1').checked) {
    if (Enter_Number1 === "") {
      localStorage.removeItem("array6")
    }
    let store4 = localStorage.getItem("array4");
    let new_array24 = JSON.parse(store4);
    let get_storage1 = localStorage.getItem("array6");
    let storage3 = JSON.parse(get_storage1)
    // console.log(storage3)
    // console.log(get_storage1)
    let set_item = JSON.parse(get_storage1);
    let set_item1 = set_item.join('');
    let set_item2 = set_item1.split('').reverse().join('');
    let pairs = set_item2.match(/\d{2}/g);
    let resultArray = pairs.map(pair => pair);
    // console.log(resultArray)

    let palti1 = storage3.map((item, index) => ({
      text: item,
      equal: "=",
      zero: amount56,
      cross: "x"
    }))
    // console.log(palti1)

    if (amount56 === "") {
      palti1 = storage3.map((item, index) => ({
        text: item,
        equal: "=",
        zero: "0",
        cross: "x"
      }))
    }

    console.log("resultArray", resultArray)

    let jodacollection15 = resultArray.map((item, index) => ({
      text: item,
      equal: "=",
      zero: amount56,
      cross: "x"
    }));

    // console.log(jodacollection15)

    // Create objects with the formatted pairs
    if (amount56 === "") {
      console.log(amount56 === "")
      jodacollection15 = resultArray.map((item, index) => ({
        text: item,
        equal: "=",
        zero: "0",
        cross: "x"
      }));
    }

    // Concatenate new_array24 and jodacollection15
    let concat = palti1.concat(jodacollection15);
    // console.log(concat)

    // Filter out duplicate entries based on 'text'
    let uniqueEntries = [];
    concat.forEach(item => {

      if (!uniqueEntries.some(entry => entry.text === item.text)) {
        uniqueEntries.push(item);
      }
    });
    // console.log(uniqueEntries)

    // Generate HTML for the table rows
    let tableRowsHTML = uniqueEntries.map((item, index) => `
        <tr class="table1">
            <td class="text1">${item.text}</td>
            <td class="equal2">${item.equal}</td>
            <td class="zero1" id="zero1">${item.zero}</td>     
            <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
        </tr>
    `).join("");

    // console.log(tableRowsHTML);

    // Append table rows HTML to the table body
    document.getElementById('without_palti').innerHTML = tableRowsHTML;
  }

  else {
    let amount56 = document.getElementById("amount14").value;
    let get_storage1 = localStorage.getItem("array6");
    let storage3 = JSON.parse(get_storage1)
    // console.log(storage3)

    let palti_joda1 = storage3.map((item, index) => ({
      text: item,
      equal: "=",
      zero: amount56,
      cross: "x"
    }))
    // console.log(palti_joda1)

    if (amount56 === "") {
      palti_joda1 = storage3.map((item, index) => ({
        text: item,
        equal: "=",
        zero: "0",
        cross: "x"
      }))


    }

    let uniqueEntries = [];
    palti_joda1.forEach(item => {

      if (!uniqueEntries.some(entry => entry.text === item.text)) {
        uniqueEntries.push(item);
      }
    });
    // console.log(uniqueEntries)

    // Generate HTML for the table rows
    let tableRowsHTML = uniqueEntries.map((item, index) => `
        <tr class="table1">
            <td class="text1">${item.text}</td>
            <td class="equal2">${item.equal}</td>
            <td class="zero1" id="zero1">${item.zero}</td>     
            <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
        </tr>
    `).join("");

    // console.log(tableRowsHTML);

    // Append table rows HTML to the table body
    document.getElementById('without_palti').innerHTML = tableRowsHTML;




    //     let jodi1 = palti_joda1.map((item, index) => `
    //     <tr>
    //         <td class="text1">${item.text}</td>
    //         <td class="equal2">${item.equal}</td>
    //         <td class="zero1" id="zero1">${item.zero}</td>     
    //         <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
    //     </tr>
    // `).join("");

    // console.log(tableRowsHTML)
  }
}


function openplay_amount() {
  let amount56 = document.getElementById("amount14").value;
  console.log(amount56)
  document.getElementById("amount14").addEventListener("keypress", function (event) {
    // Check if the pressed key is a number (0-9)
    if (event.key < '0' || event.key > '9') {
      // Prevent the default behavior (typing the character)
      event.preventDefault();
    }
  });
  if (document.getElementById('check1').checked) {
    let store4 = localStorage.getItem("array4");
    let new_array24 = JSON.parse(store4);
    let get_storage1 = localStorage.getItem("array6");
    let storage3 = JSON.parse(get_storage1)
    // console.log(storage3)
    // console.log(get_storage1)
    let set_item = JSON.parse(get_storage1);
    let set_item1 = set_item.join('');
    let set_item2 = set_item1.split('').reverse().join('');
    let pairs = set_item2.match(/\d{2}/g);
    let resultArray = pairs.map(pair => pair);
    // console.log(resultArray)

    let palti1 = storage3.map((item, index) => ({
      text: item,
      equal: "=",
      zero: amount56,
      cross: "x"
    }))
    // console.log(palti1)

    if (amount56 === "") {
      palti1 = storage3.map((item, index) => ({
        text: item,
        equal: "=",
        zero: "0",
        cross: "x"
      }))
    }


    let jodacollection15 = resultArray.map((item, index) => ({
      text: item,
      equal: "=",
      zero: amount56,
      cross: "x"
    }));

    // console.log(jodacollection15)

    // Create objects with the formatted pairs
    if (amount56 === "") {
      console.log(amount56 === "")
      jodacollection15 = resultArray.map((item, index) => ({
        text: item,
        equal: "=",
        zero: "0",
        cross: "x"
      }));
    }

    // Concatenate new_array24 and jodacollection15
    let concat = palti1.concat(jodacollection15);
    // console.log(concat)

    // Filter out duplicate entries based on 'text'
    let uniqueEntries = [];
    concat.forEach(item => {

      if (!uniqueEntries.some(entry => entry.text === item.text)) {
        uniqueEntries.push(item);
      }
    });
    // console.log(uniqueEntries)

    // Generate HTML for the table rows
    let tableRowsHTML = uniqueEntries.map((item, index) => `
        <tr class="table1">
            <td class="text1">${item.text}</td>
            <td class="equal2">${item.equal}</td>
            <td class="zero1" id="zero1">${item.zero}</td>     
            <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
        </tr>
    `).join("");

    // console.log(tableRowsHTML);

    // Append table rows HTML to the table body
    document.getElementById('without_palti').innerHTML = tableRowsHTML;
  }

  else {
    let amount56 = document.getElementById("amount14").value;
    let get_storage1 = localStorage.getItem("array6");
    let storage3 = JSON.parse(get_storage1)
    // console.log(storage3)

    let palti_joda1 = storage3.map((item, index) => ({
      text: item,
      equal: "=",
      zero: amount56,
      cross: "x"
    }))
    // console.log(palti_joda1)

    if (amount56 === "") {
      palti_joda1 = storage3.map((item, index) => ({
        text: item,
        equal: "=",
        zero: "0",
        cross: "x"
      }))


    }

    let uniqueEntries = [];
    palti_joda1.forEach(item => {

      if (!uniqueEntries.some(entry => entry.text === item.text)) {
        uniqueEntries.push(item);
      }
    });
    // console.log(uniqueEntries)

    // Generate HTML for the table rows
    let tableRowsHTML = uniqueEntries.map((item, index) => `
        <tr class="table1">
            <td class="text1">${item.text}</td>
            <td class="equal2">${item.equal}</td>
            <td class="zero1" id="zero1">${item.zero}</td>     
            <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
        </tr>
    `).join("");

    // console.log(tableRowsHTML);

    // Append table rows HTML to the table body
    document.getElementById('without_palti').innerHTML = tableRowsHTML;




    //     let jodi1 = palti_joda1.map((item, index) => `
    //     <tr>
    //         <td class="text1">${item.text}</td>
    //         <td class="equal2">${item.equal}</td>
    //         <td class="zero1" id="zero1">${item.zero}</td>     
    //         <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
    //     </tr>
    // `).join("");

    // console.log(tableRowsHTML)
  }


}
function place_bet1() {


  let selectElement = document.getElementById("select12");
  let value12 = selectElement.value;
  // console.log(value12)

  if (value12 === "SELECT GAME") {
    // alert("hello"); 
    window.scrollTo(0, 0);
    selectElement.classList.add("pink-border");
  }
}

function change14() {
  document.getElementById("select12").style.color = "green";
  document.getElementById("select12").style.textTransform = "Uppercase";
  document.getElementById("select12").style.fontSize = "19px";
  // let selectElement = document.getElementById("select12");
  // let value12 = selectElement.value;
  // console.log(value12)

  let selectElement = document.getElementById("select12");
  let value12 = selectElement.value;
  // console.log(value12)

  if (value12 !== "SELECT GAME") {
    selectElement.classList.remove("pink-border");
    selectElement.classList.add("blue-border");
  }



}
function harupside() {
  let harup_amount12 = document.getElementById("harup2").value;
  let harup2 = []
  let harup3 = []
  let harup_data = document.getElementById("harup1").value;
  harup2.push(harup_data)
  // console.log(harup2)
  // console.log(harup_data)
  // console.log()
  console.log(!(document.getElementById("check2").checked))
  console.log(((document.getElementById("check12").checked)) && (!(document.getElementById("check2").checked)))



  if (document.getElementById("check12").checked && document.getElementById("check2").checked) {
    // alert('both checked')
    let harup3 = []; // Initialize the array here
    console.log(harup3)
    // Assuming harup_data is an array
    for (let i = 0; i < harup_data.length; i++) {
      let new1 = harup_data[i] + "AB";
      console.log(new1);
      harup3.push(new1);
      console.log(harup3);
    }

    // Mapping to a new structure
    harup_collection12 = harup3.map((item, index) => ({
      text1: item,
      equal2: "=",
      zero2: harup_amount12,
      cross1: "x"
    }));

    if (harup_amount12 === "") {
      harup_collection12 = harup3.map((item, index) => ({
        text1: item,
        equal2: "=",
        zero2: "0",
        cross1: "x"
      }));
    }
    console.log(harup_collection12);

    // Generating HTML table rows
    let firsttable = harup_collection12.map((item, index) => `
    <tr>
        <td class="text1">${item.text1}</td>
        <td class="equal2">${item.equal2}</td>
        <td class="zero2" id="zero2">${item.zero2}</td>     
        <td><button class="delete-btn" onclick="deleteRow1(${index})">${item.cross1}</button></td>
    </tr>
    `).join('');

    localStorage.setItem("ABJoda", JSON.stringify(firsttable));

    // Displaying the HTML table
    document.getElementById('without_palti1').innerHTML = firsttable;
    document.getElementById("alert1").innerHTML = "";



  }
  // else if (document.getElementById("check12").checked) {
  //   let harup3 = []; // Initialize the array here
  //   // Assuming harup_data is an array
  //   for (let i = 0; i < harup_data.length; i++) {
  //     let new1 = harup_data[i] + "A";
  //     console.log(new1);
  //     harup3.push(new1);
  //     console.log(harup3);
  //   }

  //   // Mapping to a new structure
  //   harup_collection12 = harup3.map((item, index) => ({
  //     text: item,
  //     equal: "=",
  //     zero: harup_amount12,
  //     cross: "x"
  //   }));

  //   if (harup_amount12 === "") {
  //     harup_collection12 = harup3.map((item, index) => ({
  //       text: item,
  //       equal: "=",
  //       zero: "0",
  //       cross: "x"
  //     }));
  //   }
  //   console.log(harup_collection12);

  //   // Generating HTML table rows
  //   let firsttable = harup_collection12.map((item, index) => `
  //   <tr>
  //       <td class="text1">${item.text}</td>
  //       <td class="equal2">${item.equal}</td>
  //       <td class="zero1" id="zero1">${item.zero}</td>     
  //       <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
  //   </tr>
  //   `).join('');

  //   // Displaying the HTML table
  //   document.getElementById('without_palti').innerHTML = firsttable;
  //   document.getElementById("alert1").innerHTML = "";

  // }
  // else if (document.getElementById("check2").checked) {
  //   let harup3 = []; // Initialize the array here
  //   // Assuming harup_data is an array
  //   for (let i = 0; i < harup_data.length; i++) {
  //     let new1 = harup_data[i] + "B";
  //     console.log(new1);
  //     harup3.push(new1);
  //     console.log(harup3);
  //   }

  //   // Mapping to a new structure
  //   harup_collection12 = harup3.map((item, index) => ({
  //     text: item,
  //     equal: "=",
  //     zero: harup_amount12,
  //     cross: "x"
  //   }));

  //   if (harup_amount12 === "") {
  //     harup_collection12 = harup3.map((item, index) => ({
  //       text: item,
  //       equal: "=",
  //       zero: "0",
  //       cross: "x"
  //     }));
  //   }
  //   console.log(harup_collection12);

  //   // Generating HTML table rows
  //   let firsttable = harup_collection12.map((item, index) => `
  //   <tr>
  //       <td class="text1">${item.text}</td>
  //       <td class="equal2">${item.equal}</td>
  //       <td class="zero1" id="zero1">${item.zero}</td>     
  //       <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
  //   </tr>
  //   `).join('');

  //   // Displaying the HTML table
  //   document.getElementById('without_palti').innerHTML = firsttable;
  //   document.getElementById("alert1").innerHTML = "";

  // }
  else if (document.getElementById("check12").checked && !document.getElementById("check2").checked) {
    // alert(" A checked")
    let harup3 = []; // Initialize the array here
    // Assuming harup_data is an array
    for (let i = 0; i < harup_data.length; i++) {
      let new1 = harup_data[i] + "A";
      console.log(new1);
      harup3.push(new1);
      console.log(harup3);
    }

    // Mapping to a new structure
    harup_collection12 = harup3.map((item, index) => ({
      text1: item,
      equal2: "=",
      zero2: harup_amount12,
      cross1: "x"
    }));

    if (harup_amount12 === "") {
      harup_collection12 = harup3.map((item, index) => ({
        text: item,
        equal: "=",
        zero: "0",
        cross: "x"
      }));
    }
    console.log(harup_collection12);

    // Generating HTML table rows
    let firsttable = harup_collection12.map((item, index) => `
        <tr>
            <td class="text1">${item.text1}</td>
            <td class="equal2">${item.equal2}</td>
            <td class="zero2" id="zero2">${item.zero2}</td>     
            <td><button class="delete-btn" onclick="deleteRow1(${index})">${item.cross1}</button></td>
        </tr>
    `).join('');

    // Displaying the HTML table
    document.getElementById('without_palti1').innerHTML = firsttable;
    document.getElementById("alert1").innerHTML = "";
  }
  else if (!document.getElementById("check12").checked && document.getElementById("check2").checked) {
    let harup3 = []; // Initialize the array here
    // Assuming harup_data is an array
    for (let i = 0; i < harup_data.length; i++) {
      let new1 = harup_data[i] + "B";
      console.log(new1);
      harup3.push(new1);
      console.log(harup3);
    }

    // Mapping to a new structure
    harup_collection12 = harup3.map((item, index) => ({
      text1: item,
      equal2: "=",
      zero2: harup_amount12,
      cross1: "x"
    }));

    if (harup_amount12 === "") {
      harup_collection12 = harup3.map((item, index) => ({
        text1: item,
        equal2: "=",
        zero2: "0",
        cross1: "x"
      }));
    }
    console.log(harup_collection12);

    // Generating HTML table rows
    let firsttable = harup_collection12.map((item, index) => `
      <tr>
          <td class="text1">${item.text1}</td>
          <td class="equal2">${item.equal2}</td>
          <td class="zero2" id="zero2">${item.zero2}</td>     
          <td><button class="delete-btn" onclick="deleteRow1(${index})">${item.cross1}</button></td>
      </tr>
  `).join('');

    // Displaying the HTML table
    document.getElementById('without_palti1').innerHTML = firsttable;
    document.getElementById("alert1").innerHTML = "";
  }
  else {
    document.getElementById('without_palti1').innerHTML = "";
    document.getElementById("alert1").innerHTML = "Please select Harup Side";
    document.getElementById("alert1").style.color = "red";
    document.getElementById("alert1").style.fontSize = "15px";
    document.getElementById("alert1").style.fontWeight = "bold";
  }

  let a = ""; // Define 'a' outside of the functions

  function handleInput(event) {
    const inputChar = event.key;
    console.log(inputChar);
    if (inputChar === "Backspace") {
      // Allow backspace key
      return;
    }
    if (a.includes(inputChar)) {
      event.preventDefault(); // Prevent the character from being inserted
      console.log("Character already exists in the string.");
    } else {
      a += inputChar; // Add the character to the string
      console.log("Input accepted.");
    }
  }

  // Update 'a' when the value of the select element changes
  document.getElementById("harup1").addEventListener("input", function () {
    a = this.value;
  });

  // Example usage with a select element
  const selectElement = document.getElementById("harup1");

  selectElement.addEventListener("keydown", handleInput);


  // console.log(document.getElementById("without_palti") !=="")
  // if(document.getElementById("without_palti") !==""){
  //   let number1 = document.getElementById("without_palti").innerHTML;
  //   console.log(number1)


  // }

}



function harup_Aside() {
  let harup3 = []
  let harup_data = document.getElementById("harup1").value;
  let harup_amount12 = document.getElementById("harup2").value;

  let split1 = harup_data.split("")
  console.log(split1)

  if (document.getElementById("check12").checked && document.getElementById("check2").checked) {
    // alert('both checked')
    let harup3 = []; // Initialize the array here
    // Assuming harup_data is an array
    for (let i = 0; i < harup_data.length; i++) {
      let new1 = harup_data[i] + "AB";
      console.log(new1);
      harup3.push(new1);
      console.log(harup3);
    }

    // Mapping to a new structure
    harup_collection12 = harup3.map((item, index) => ({
      text1: item,
      equal2: "=",
      zero2: harup_amount12,
      cross1: "x"
    }));

    if (harup_amount12 === "") {
      harup_collection12 = harup3.map((item, index) => ({
        text1: item,
        equal2: "=",
        zero2: "0",
        cross1: "x"
      }));
    }
    console.log(harup_collection12);

    // Generating HTML table rows
    let firsttable = harup_collection12.map((item, index) => `
  <tr>
      <td class="text1">${item.text1}</td>
      <td class="equal2">${item.equal2}</td>
      <td class="zero2" id="zero2">${item.zero2}</td>     
      <td><button class="delete-btn" onclick="deleteRow1(${index})">${item.cross1}</button></td>
  </tr>
  `).join('');

    // Displaying the HTML table
    document.getElementById('without_palti1').innerHTML = firsttable;
    document.getElementById("alert1").innerHTML = "";

  }
  else if (document.getElementById("check12").checked && !document.getElementById("check2").checked) {
    let harup3 = []; // Initialize the array here
    // Assuming harup_data is an array
    for (let i = 0; i < harup_data.length; i++) {
      let new1 = harup_data[i] + "A";
      console.log(new1);
      harup3.push(new1);
      console.log(harup3);
    }

    // Mapping to a new structure
    harup_collection12 = harup3.map((item, index) => ({
      text1: item,
      equal2: "=",
      zero2: harup_amount12,
      cross1: "x"
    }));

    if (harup_amount12 === "") {
      harup_collection12 = harup3.map((item, index) => ({
        text1: item,
        equal2: "=",
        zero2: "0",
        cross1: "x"
      }));
    }
    console.log(harup_collection12);

    // Generating HTML table rows
    let firsttable = harup_collection12.map((item, index) => `
        <tr>
            <td class="text1">${item.text1}</td>
            <td class="equal2">${item.equal2}</td>
            <td class="zero2" id="zero2">${item.zero2}</td>     
            <td><button class="delete-btn" onclick="deleteRow1(${index})">${item.cross1}</button></td>
        </tr>
    `).join('');

    // Displaying the HTML table
    document.getElementById('without_palti1').innerHTML = firsttable;
    document.getElementById("alert1").innerHTML = "";
  }
  else if (!document.getElementById("check12").checked && document.getElementById("check2").checked) {
    let harup3 = []; // Initialize the array here
    // Assuming harup_data is an array
    for (let i = 0; i < harup_data.length; i++) {
      let new1 = harup_data[i] + "B";
      console.log(new1);
      harup3.push(new1);
      console.log(harup3);
    }

    // Mapping to a new structure
    harup_collection12 = harup3.map((item, index) => ({
      text1: item,
      equal2: "=",
      zero2: harup_amount12,
      cross1: "x"
    }));

    if (harup_amount12 === "") {
      harup_collection12 = harup3.map((item, index) => ({
        text1: item,
        equal2: "=",
        zero2: "0",
        cross1: "x"
      }));
    }
    console.log(harup_collection12);

    // Generating HTML table rows
    let firsttable = harup_collection12.map((item, index) => `
      <tr>
          <td class="text1">${item.text1}</td>
          <td class="equal2">${item.equal2}</td>
          <td class="zero2" id="zero2">${item.zero2}</td>     
          <td><button class="delete-btn" onclick="deleteRow1(${index})">${item.cross1}</button></td>
      </tr>
  `).join('');

    // Displaying the HTML table
    document.getElementById('without_palti1').innerHTML = firsttable;
    document.getElementById("alert1").innerHTML = "";
  }
  else if ((!(document.getElementById("check12").checked)) && (!(document.getElementById("check2").checked))) {

    // Displaying the HTML table
    document.getElementById('without_palti1').innerHTML = "";
    document.getElementById("alert1").innerHTML = "Please select Harup Side";
    document.getElementById("alert1").style.color = "red";
    document.getElementById("alert1").style.fontSize = "15px";
    document.getElementById("alert1").style.fontWeight = "bold";

  }
  else {
    let harup3 = []; // Initialize the array here
    // Assuming harup_data is an array
    for (let i = 0; i < harup_data.length; i++) {
      let new1 = harup_data[i] + "A";
      console.log(new1);
      harup3.push(new1);
      console.log(harup3);
    }

    // Mapping to a new structure
    let harup_collection12 = harup3.map((item, index) => ({
      text1: item,
      equal2: "=",
      zero2: harup_amount12,
      cross1: "x"
    }));

    if (harup_amount12 === "") {
      harup_collection12 = harup3.map((item, index) => ({
        text1: item,
        equal2: "=",
        zero2: "0",
        cross1: "x"
      }));
    }
    console.log(harup_collection12);

    // Generating HTML table rows
    let firsttable = harup_collection12.map((item, index) => `
  <tr>
      <td class="text1">${item.text1}</td>
      <td class="equal2">${item.equal2}</td>
      <td class="zero2" id="zero2">${item.zero2}</td>     
      <td><button class="delete-btn" onclick="deleteRow1(${index})">${item.cross1}</button></td>
  </tr>
  `).join('');

    // Displaying the HTML table
    document.getElementById('without_palti1').innerHTML = firsttable;
    document.getElementById("alert1").innerHTML = "";
  }
}


function harup_B() {
  let harup_data = document.getElementById("harup1").value;
  let harup_amount12 = document.getElementById("harup2").value;


  if (document.getElementById("check12").checked && document.getElementById("check2").checked) {
    // alert('both checked')
    let harup3 = []; // Initialize the array here
    let harup4 = [];
    // Assuming harup_data is an array
    for (let i = 0; i < harup_data.length; i++) {
      let new1 = harup_data[i] + "AB";
      console.log(new1);
      harup3.push(new1);
      console.log(harup3);
    }

    // Mapping to a new structure
    harup_collection12 = harup3.map((item, index) => ({
      text1: item,
      equal2: "=",
      zero2: harup_amount12,
      cross1: "x"
    }));
    console.log(harup_collection12)
    harup4.push(harup_collection12)
    console.log(harup4)
    if (harup_amount12 === "") {
      harup_collection12 = harup3.map((item, index) => ({

        text1: item,
        equal2: "=",
        zero2: "0",
        cross1: "x"
      }));
    }
    console.log(harup_collection12);

    localStorage.setItem("ABJoda",JSON.stringify(harup_collection12))

    // Generating HTML table rows
    let firsttable = harup_collection12.map((item, index) => `
  <tr>
      <td class="text1">${item.text1}</td>
      <td class="equal2">${item.equal2}</td>
      <td class="zero2" id="zero2">${item.zero2}</td>     
      <td><button class="delete-btn" onclick="deleteRow1(${index})">${item.cross1}</button></td>
  </tr>
  `).join('');

    // Displaying the HTML table
    document.getElementById('without_palti1').innerHTML = firsttable;
    document.getElementById("alert1").innerHTML = "";

  }
  else if (document.getElementById("check12").checked && !document.getElementById("check2").checked) {
    let harup3 = []; // Initialize the array here
    // Assuming harup_data is an array
    for (let i = 0; i < harup_data.length; i++) {
      let new1 = harup_data[i] + "A";
      console.log(new1);
      harup3.push(new1);
      console.log(harup3);
    }

    // Mapping to a new structure
    harup_collection12 = harup3.map((item, index) => ({
      text1: item,
      equal2: "=",
      zero2: harup_amount12,
      cross1: "x"
    }));

    if (harup_amount12 === "") {
      harup_collection12 = harup3.map((item, index) => ({
        text1: item,
        equal2: "=",
        zero2: "0",
        cross1: "x"
      }));
    }
    console.log(harup_collection12);

    // Generating HTML table rows
    let firsttable = harup_collection12.map((item, index) => `
  <tr>
      <td class="text1">${item.text1}</td>
      <td class="equal2">${item.equal2}</td>
      <td class="zero2" id="zero2">${item.zero2}</td>     
      <td><button class="delete-btn" onclick="deleteRow1(${index})">${item.cross1}</button></td>
  </tr>
  `).join('');

    // Displaying the HTML table
    document.getElementById('without_palti1').innerHTML = firsttable;
    document.getElementById("alert1").innerHTML = "";
  }
  else if (!document.getElementById("check12").checked && document.getElementById("check2").checked) {
    let harup3 = []; // Initialize the array here
    // Assuming harup_data is an array
    for (let i = 0; i < harup_data.length; i++) {
      let new1 = harup_data[i] + "B";
      console.log(new1);
      harup3.push(new1);
      console.log(harup3);
    }

    // Mapping to a new structure
    harup_collection12 = harup3.map((item, index) => ({
      text1: item,
      equal2: "=",
      zero2: harup_amount12,
      cross1: "x"
    }));

    if (harup_amount12 === "") {
      harup_collection12 = harup3.map((item, index) => ({
        text1: item,
        equal2: "=",
        zero2: "0",
        cross1: "x"
      }));
    }
    console.log(harup_collection12);

    // Generating HTML table rows
    firsttable = harup_collection12.map((item, index) => `
    <tr>
        <td class="text1">${item.text1}</td>
        <td class="equal2">${item.equal2}</td>
        <td class="zero2" id="zero2">${item.zero2}</td>     
        <td><button class="delete-btn" onclick="deleteRow1(${index})">${item.cross1}</button></td>
    </tr>
    `).join('');


    document.getElementById('without_palti1').innerHTML = firsttable;
    document.getElementById("alert1").innerHTML = "";
  }
  else if ((!(document.getElementById("check12").checked)) && (!(document.getElementById("check2").checked))) {

    // Displaying the HTML table
    document.getElementById('without_palti1').innerHTML = "";
    document.getElementById("alert1").innerHTML = "Please select Harup Side";
    document.getElementById("alert1").style.color = "red";
    document.getElementById("alert1").style.fontSize = "15px";
    document.getElementById("alert1").style.fontWeight = "bold";

  }
  else {
    let harup3 = []; // Initialize the array here
    // Assuming harup_data is an array
    for (let i = 0; i < harup_data.length; i++) {
      let new1 = harup_data[i] + "B";
      console.log(new1);
      harup3.push(new1);
      console.log(harup3);
    }

    // Mapping to a new structure
    harup_collection12 = harup3.map((item, index) => ({
      text1: item,
      equal2: "=",
      zero2: harup_amount12,
      cross1: "x"
    }));

    if (harup_amount12 === "") {
      harup_collection12 = harup3.map((item, index) => ({
        text1: item,
        equal2: "=",
        zero2: "0",
        cross1: "x"
      }));
    }
    console.log(harup_collection12);

    // Generating HTML table rows
    firsttable = harup_collection12.map((item, index) => `
  <tr>
      <td class="text1">${item.text1}</td>
      <td class="equal2">${item.equal2}</td>
      <td class="zero2" id="zero2">${item.zero2}</td>     
      <td><button class="delete-btn" onclick="deleteRow1(${index})">${item.cross1}</button></td>
  </tr>
  `).join('');

    document.getElementById('without_palti1').innerHTML = firsttable;
    document.getElementById("alert1").innerHTML = "";
  }

}

function harup_amount() {
  document.getElementById("harup2").addEventListener("keypress", function (event) {
    // Check if the pressed key is a number (0-9)
    if (event.key < '0' || event.key > '9') {
      // Prevent the default behavior (typing the character)
      event.preventDefault();
    }
  });


  console.log((!document.getElementById("check2").checked && document.getElementById("check12").checked))
  let harup_amount12 = document.getElementById("harup2").value;
  console.log(harup_amount12)
  let harup2 = []
  let harup3 = []
  let harup_data = document.getElementById("harup1").value;
  harup2.push(harup_data)
  // console.log(harup2)
  // console.log(harup_data)
  // console.log(harup_amount12)
  if (document.getElementById("check12").checked) {
    let harup3 = []; // Initialize the array here
    // Assuming harup_data is an array
    for (let i = 0; i < harup_data.length; i++) {
      let new1 = harup_data[i] + "A";
      console.log(new1);
      harup3.push(new1);
      console.log(harup3);
    }

    // Mapping to a new structure
    harup_collection12 = harup3.map((item, index) => ({
      text1: item,
      equal2: "=",
      zero2: harup_amount12,
      cross1: "x"
    }));

    if (harup_amount12 === "") {
      harup_collection12 = harup3.map((item, index) => ({
        text1: item,
        equal2: "=",
        zero2: "0",
        cross1: "x"
      }));
    }
    console.log(harup_collection12);

    // Generating HTML table rows
    let firsttable = harup_collection12.map((item, index) => `
    <tr>
        <td class="text1">${item.text1}</td>
        <td class="equal2">${item.equal2}</td>
        <td class="zero2" id="zero2">${item.zero2}</td>     
        <td><button class="delete-btn" onclick="deleteRow1(${index})">${item.cross1}</button></td>
    </tr>
    `).join('');

    // Displaying the HTML table
    document.getElementById('without_palti1').innerHTML = firsttable;
    document.getElementById("alert1").innerHTML = "";

  }
  // else if (document.getElementById("check2").checked) {
  //   let harup3 = []; // Initialize the array here
  //   // Assuming harup_data is an array
  //   for (let i = 0; i < harup_data.length; i++) {
  //     let new1 = harup_data[i] + "B";
  //     console.log(new1);
  //     harup3.push(new1);
  //     console.log(harup3);
  //   }

  //   // Mapping to a new structure
  //   harup_collection12 = harup3.map((item, index) => ({
  //     text: item,
  //     equal: "=",
  //     zero: harup_amount12,
  //     cross: "x"
  //   }));

  //   if (harup_amount12 === "") {
  //     harup_collection12 = harup3.map((item, index) => ({
  //       text: item,
  //       equal: "=",
  //       zero: "0",
  //       cross: "x"
  //     }));
  //   }
  //   console.log(harup_collection12);

  //   // Generating HTML table rows
  //   let firsttable = harup_collection12.map((item, index) => `
  //   <tr>
  //       <td class="text1">${item.text}</td>
  //       <td class="equal2">${item.equal}</td>
  //       <td class="zero1" id="zero1">${item.zero}</td>     
  //       <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
  //   </tr>
  //   `).join('');

  //   // Displaying the HTML table
  //   document.getElementById('without_palti').innerHTML = firsttable;
  //   document.getElementById("alert1").innerHTML = "";

  // }
  else if (document.getElementById("check12").checked && document.getElementById("check2").checked) {
    let harup3 = []; // Initialize the array here
    // Assuming harup_data is an array
    for (let i = 0; i < harup_data.length; i++) {
      let new1 = harup_data[i] + "AB";
      console.log(new1);
      harup3.push(new1);
      console.log(harup3);
    }

    // Mapping to a new structure
    harup_collection12 = harup3.map((item, index) => ({
      text1: item,
      equal2: "=",
      zero2: harup_amount12,
      cross1: "x"
    }));

    if (harup_amount12 === "") {
      harup_collection12 = harup3.map((item, index) => ({
        text1: item,
        equal2: "=",
        zero2: "0",
        cross1: "x"
      }));
    }
    console.log(harup_collection12);

    // Generating HTML table rows
    let firsttable = harup_collection12.map((item, index) => `
  <tr>
      <td class="text1">${item.text1}</td>
      <td class="equal2">${item.equal2}</td>
      <td class="zero2" id="zero2">${item.zero2}</td>     
      <td><button class="delete-btn" onclick="deleteRow1(${index})">${item.cross1}</button></td>
  </tr>
  `).join('');

    // Displaying the HTML table
    document.getElementById('without_palti1').innerHTML = firsttable;
    document.getElementById("alert1").innerHTML = "";

  }
  else if (!document.getElementById("check12").checked && document.getElementById("check2").checked) {
    let harup3 = []; // Initialize the array here
    // Assuming harup_data is an array
    for (let i = 0; i < harup_data.length; i++) {
      let new1 = harup_data[i] + "B";
      console.log(new1);
      harup3.push(new1);
      console.log(harup3);
    }

    // Mapping to a new structure
    harup_collection12 = harup3.map((item, index) => ({
      text1: item,
      equal2: "=",
      zero2: harup_amount12,
      cross1: "x"
    }));

    if (harup_amount12 === "") {
      harup_collection12 = harup3.map((item, index) => ({
        text1: item,
        equal2: "=",
        zero2: "0",
        cross1: "x"
      }));
    }
    console.log(harup_collection12);

    // Generating HTML table rows
    let firsttable = harup_collection12.map((item, index) => `
  <tr>
      <td class="text1">${item.text1}</td>
      <td class="equal2">${item.equal2}</td>
      <td class="zero2" id="zero2">${item.zero2}</td>     
      <td><button class="delete-btn" onclick="deleteRow1(${index})">${item.cross1}</button></td>
  </tr>
  `).join('');

    // Displaying the HTML table
    document.getElementById('without_palti1').innerHTML = firsttable;
    document.getElementById("alert1").innerHTML = "";

  }
  else if (document.getElementById("check12").checked && !document.getElementById("check2").checked) {

    let harup3 = []; // Initialize the array here
    // Assuming harup_data is an array
    for (let i = 0; i < harup_data.length; i++) {
      let new1 = harup_data[i] + "A";
      console.log(new1);
      harup3.push(new1);
      console.log(harup3);
    }

    // Mapping to a new structure
    harup_collection12 = harup3.map((item, index) => ({
      text1: item,
      equal2: "=",
      zero2: harup_amount12,
      cross1: "x"
    }));

    if (harup_amount12 === "") {
      harup_collection12 = harup3.map((item, index) => ({
        text1: item,
        equal2: "=",
        zero2: "0",
        cross1: "x"
      }));
    }
    console.log(harup_collection12);

    // Generating HTML table rows
    let firsttable = harup_collection12.map((item, index) => `
  <tr>
      <td class="text1">${item.text1}</td>
      <td class="equal2">${item.equal2}</td>
      <td class="zero2" id="zero2">${item.zero2}</td>     
      <td><button class="delete-btn" onclick="deleteRow1(${index})">${item.cross1}</button></td>
  </tr>
  `).join('');

    document.getElementById('without_palti1').innerHTML = firsttable;
    document.getElementById("alert1").innerHTML = "";

  }
  //   else if (document.getElementById("check12").checked) {
  //   let harup3 = []; // Initialize the array here
  //   // Assuming harup_data is an array
  //   for (let i = 0; i < harup_data.length; i++) {
  //     let new1 = harup_data[i] + "A";
  //     console.log(new1);
  //     harup3.push(new1);
  //     console.log(harup3);
  //   }

  //   // Mapping to a new structure
  //   harup_collection12 = harup3.map((item, index) => ({
  //     text: item,
  //     equal: "=",
  //     zero: harup_amount12,
  //     cross: "x"
  //   }));

  //   if (harup_amount12 === "") {
  //     harup_collection12 = harup3.map((item, index) => ({
  //       text: item,
  //       equal: "=",
  //       zero: "0",
  //       cross: "x"
  //     }));
  //   }
  //   console.log(harup_collection12);

  //   // Generating HTML table rows
  //   let firsttable = harup_collection12.map((item, index) => `
  //   <tr>
  //       <td class="text1">${item.text}</td>
  //       <td class="equal2">${item.equal}</td>
  //       <td class="zero1" id="zero1">${item.zero}</td>     
  //       <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
  //   </tr>
  //   `).join('');

  //   // Displaying the HTML table
  //   document.getElementById('without_palti').innerHTML = firsttable;
  //   document.getElementById("alert1").innerHTML = "";

  // }
  // else{
  //   return true 
  // }
}

let changezero1 = document.getElementById("harup2");
let number_amount = document.getElementById("amount14")

// Function to update zero elements with the current input value and calculate total
function updateZeroElements1(value) {
  let zeroElements = document.querySelectorAll(".zero1");
  let total = 0;
  zeroElements.forEach(function (element) {
    element.textContent = value;
    total += parseInt(value); // Convert value to integer and add it to total
  });
  document.getElementById("value_3").innerText = total; // Display total in total12 element
  document.getElementById("total13").innerText = total;
}

// Event listener for changes in the input value
changezero1.addEventListener("input", function () {
  let amount1 = changezero1.value;
  updateZeroElements1(amount1);




  // Event listener to handle the case when input value is emptied
  if (amount1 === "") {

    updateZeroElements1("0");
  }
});

number_amount.addEventListener("input", function () {
  let amount1 = number_amount.value;
  updateZeroElements1(amount1);




  // Event listener to handle the case when input value is emptied
  if (amount1 === "") {

    updateZeroElements1("0");
  }
});


function deleteRow(index) {
  console.log(index);
  var table = document.getElementById("without_palti");
  // table.deleteRow(index);

  var value3Element = Number(document.getElementById("value_3").innerText);
  // console.log(Number(value3Element));
  console.log("value3Element", value3Element)
  var valueToRemove = Number(document.getElementById("zero1").innerText);
  console.log("valueToRemove", valueToRemove)
  // console.log("VALUETOREMOVE" ,currentValue - valueToRemove);
  if (value3Element) {
    var currentValue = parseFloat(value3Element);
    if (!isNaN(currentValue)) {
      if (!isNaN(valueToRemove)) {
        value3Element = currentValue - valueToRemove;
        document.getElementById("value_3").innerText = value3Element;
      } else {
        console.error("Invalid value to remove from 'value_3'");
      }
    } else {
      console.error("Invalid value for 'value_3'");
    }
  } else {
    console.error("Element with ID 'value_3' not found.");
  }
  table.deleteRow(index);
}



function deleteRow1(index) {
  console.log(index);
  var table = document.getElementById("without_palti1");
  // table.deleteRow(index);

  var value3Element = Number(document.getElementById("value_3").innerText);
  // console.log(Number(value3Element));
  console.log("value3Element", value3Element)
  var valueToRemove = Number(document.getElementById("zero2").innerText);
  console.log("valueToRemove", valueToRemove)
  // console.log("VALUETOREMOVE" ,currentValue - valueToRemove);
  if (value3Element) {
    var currentValue = parseFloat(value3Element);
    if (!isNaN(currentValue)) {
      if (!isNaN(valueToRemove)) {
        value3Element = currentValue - valueToRemove;
        document.getElementById("value_3").innerText = value3Element;
      } else {
        console.error("Invalid value to remove from 'value_3'");
      }
    } else {
      console.error("Invalid value for 'value_3'");
    }
  } else {
    console.error("Element with ID 'value_3' not found.");
  }
  table.deleteRow(index);
}


function reduceValueTo100AndUpdateTotal() {
  var table = document.getElementById("without_palti");
  var total = 0;
  for (var i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[1].innerText = "100"; // Assuming the value is in the second cell
    total += 100;
  }

  var value3Element = document.getElementById("value_3");
  if (value3Element) {
    value3Element.value = total;
  } else {
    console.error("Element with ID 'value_3' not found.");
  }
}




