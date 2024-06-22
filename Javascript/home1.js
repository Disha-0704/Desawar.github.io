function click12() {
  let selectElement = document.getElementById("select2");
  let value12 = selectElement.value;
  console.log(value12)

  if (value12 === "SELECT GAME") {
    // alert("hello"); 
    window.scrollTo(0, 0);
    selectElement.classList.add("pink-border");
  }


}
function change12() {
  document.getElementById("select1").style.color = "green";
  document.getElementById("select1").style.textTransform = "Uppercase";
  document.getElementById("select1").style.fontSize = "19px";
  let selectElement = document.getElementById("select1");
  let value12 = selectElement.value;
  console.log(value12)

  if (value12 !== "SELECT GAME") {
    selectElement.classList.remove("pink-border");
    selectElement.classList.add("blue-border");
  }
}
function change13() {
  document.getElementById("select2").style.color = "green";
  document.getElementById("select2").style.textTransform = "Uppercase";
  document.getElementById("select2").style.fontSize = "19px";
  document.getElementById("select2").style.borderColor = "black";


  let selectElement = document.getElementById("select2");
  let value12 = selectElement.value;
  console.log(value12)

  if (value12 !== "SELECT GAME") {
    selectElement.classList.remove("pink-border");
    selectElement.classList.add("blue-border");
  }
}
function change14() {
  document.getElementById("select12").style.color = "green";
  document.getElementById("select12").style.textTransform = "Uppercase";
  document.getElementById("select12").style.fontSize = "19px";
  let selectElement = document.getElementById("select1");
  let value12 = selectElement.value;
  console.log(value12)

  if (value12 === "SELECT GAME") {
    // alert("hello"); 
    window.scrollTo(0, 0);
    selectElement.classList.add("pink-border");
  } else {
    selectElement.classList.remove("pink-border");
    selectElement.classList.add("blue-border");
  }

}


function change24() {
  let input24 = document.getElementById("select4").value;
  let joda14 = document.getElementById("joda1").checked;
  let cross_amount12 = document.getElementById("cross_amount").value;
  console.log(input24)
  let regx1 = /^[A-Za-z]+$/;
  if (regx1.test(input24)) {
    console.log(true);
    document.getElementById("select4").value = '';

  }

  function pairDigits(number) {
    const numberString = number.toString();
    const pairs = [];

    for (let i = 0; i < numberString.length; i++) {
      const digit = numberString[i];
      pairs.push(digit + digit);
    }

    for (let i = 0; i < numberString.length; i++) {
      for (let j = i + 1; j < numberString.length; j++) {
        const pair = numberString[i] + numberString[j];
        pairs.push(pair);
        pairs.push(pair.split('').reverse().join(''));
      }
    }

    return pairs;
  }

  const number = document.getElementById('select4').value;
  const pairs = pairDigits(number);

  let collection12 = [];
  // Add pairs along with zeros to collection12
  pairs.forEach(pair => {
    collection12.push({
      text: pair,
      equal: "=",
      zero: 0,
      cross: "x"
    });
  });
  localStorage.setItem("array1", JSON.stringify(collection12));
  console.log(collection12)


  document.getElementById("table2").innerHTML = collection12.map((item, index) => `
    <tr>
      <td class="text1" >${item.text}</td>
      <td class="equal2">${item.equal}</td>
      <td class="zero1" id="zero1">${item.zero}</td> 
      <td><button class="delete-btn" onclick="deleteIndex(${index})">${item.cross}</button></td>
    </tr>
  `).join('');
  if (document.getElementById("joda1").checked) {
    let item12 = localStorage.getItem("array1")
    let array2 = []
    console.log(item12)
    let array23 = localStorage.getItem("array1")
    let new_aray23 = JSON.parse(array23)

    new_aray23.forEach(item => {
      array2.push(item.text);
      console.log(array2);

      function ismaster(num) {
        return num[0] === num[1];
      }

      let collection13 = [];
      array2 = array2.filter(num => !ismaster(num));


      array2.forEach(item => {
        collection13.push({
          text: item,
          equal: "=",
          zero: "0",
          cross: "x",
        });
      });
      console.log(collection13)


      let jodacollection14 = array2.map(item => ({
        text: item,
        equal: "=",
        zero: cross_amount12,
        cross: "x",


      }))
      if (cross_amount12 === "") {
        jodacollection14 = array2.map(item => ({
          text: item,
          equal: "=",
          zero: "0",
          cross: "x",
        }))
      }
      console.log(jodacollection14)
      // Use collection13 as needed, e.g., push it to another array or perform other operations
      document.getElementById("table2").innerHTML = jodacollection14.map((item, index) => `
        <tr>
          <td class="text1" >${item.text}</td>
          <td class="equal2">${item.equal}</td>
          <td class="zero1" id="zero1">${item.zero}</td> 
          <td><button class="delete-btn" onclick="deleteIndex(${index})">${item.cross}</button></td>
        </tr>
      `).join('');
      localStorage.setItem("array2", JSON.stringify(collection13))
      console.log(collection13)
    });
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
  document.getElementById("select4").addEventListener("input", function () {
    a = this.value;
  });

  // Example usage with a select element
  const selectElement = document.getElementById("select4");

  selectElement.addEventListener("keydown", handleInput);




}
function joda2() {

  let joda14 = document.getElementById("joda1").checked;
  let number1 = document.getElementById("select4").value;
  console.log(number1)
  let cross_amount12 = document.getElementById("cross_amount").value;
  console.log(document.getElementById("joda1").checked)
  console.log(number1 === "")
  if (document.getElementById("joda1").checked) {
    if (number1 === "") {
      localStorage.removeItem("array1")
    }
    let item12 = localStorage.getItem("array1")
    let array2 = []
    console.log(item12)
    let array23 = localStorage.getItem("array1")
    let new_aray23 = JSON.parse(array23)

    new_aray23.forEach(item => {
      array2.push(item.text);
      console.log(array2);

      function ismaster(num) {
        return num[0] === num[1];
      }

      let collection13 = [];
      array2 = array2.filter(num => !ismaster(num));


      array2.forEach(item => {
        collection13.push({
          text: item,
          equal: "=",
          zero: "0",
          cross: "x",
        });
      });
      console.log(collection13)


      let jodacollection14 = array2.map(item => ({
        text: item,
        equal: "=",
        zero: cross_amount12,
        cross: "x",


      }))
      if (cross_amount12 === "") {
        jodacollection14 = array2.map(item => ({
          text: item,
          equal: "=",
          zero: "0",
          cross: "x",
        }))
      }

      console.log(jodacollection14)
      // Use collection13 as needed, e.g., push it to another array or perform other operations
      document.getElementById("table2").innerHTML = jodacollection14.map((item, index) => `
        <tr>
          <td class="text1" >${item.text}</td>
          <td class="equal2">${item.equal}</td>
          <td class="zero1" id="zero1">${item.zero}</td> 
          <td><button class="delete-btn" onclick="deleteIndex(${index})">${item.cross}</button></td>
        </tr>
      `).join('');
      localStorage.setItem("array2", JSON.stringify(collection13))
      console.log(collection13)
    });
  }
  else {
    let data2 = localStorage.getItem("array1")
    console.log(data2)
    let new_aray25 = JSON.parse(data2)
    console.log(new_aray25)
    let array4 = [];
    new_aray25.filter(item => {
      array4.push(item.text)
    })
    console.log(array4)


    let jodacollection12 = array4.map(item => ({
      text: item,
      equal: "=",
      zero: cross_amount12,
      cross: "x"

    }))
    if (cross_amount12 === "") {
      jodacollection12 = array4.map(item => ({
        text: item,
        equal: "=",
        zero: "0",
        cross: "x"

      }))
    }
    document.getElementById("table2").innerHTML = jodacollection12.map((item, index) => `
    <tr>
      <td class="text1" >${item.text}</td>
      <td class="equal2">${item.equal}</td>
      <td class="zero1" id="zero1">${item.zero}</td> 
      <td><button class="delete-btn" onclick="deleteIndex(${index})">${item.cross}</button></td>
    </tr>
  `).join('');



  }
}

function Enter_amount() {

  document.getElementById("cross_amount").addEventListener("keypress", function (event) {
    // Check if the pressed key is a number (0-9)
    if (event.key < '0' || event.key > '9') {
      // Prevent the default behavior (typing the character)
      event.preventDefault();
    }
  });
  let cross_amount12 = document.getElementById("cross_amount").value;
  let joda14 = document.getElementById("joda1").checked;
  console.log(cross_amount12)
  if (document.getElementById("joda1").checked) {
    let data1 = localStorage.getItem("array2")
    let new_aray24 = JSON.parse(data1)
    // document.getElementById("table2").innerHTML = new_aray24
    let array3 = [];
    new_aray24.filter(item => {
      array3.push(item.text)
    })
    console.log(array3)


    let jodacollection12 = array3.map(item => ({
      text: item,
      equal: "=",
      zero: cross_amount12,
      cross: "x"

    }))
    if (cross_amount12 === "") {
      jodacollection12 = array3.map(item => ({
        text: item,
        equal: "=",
        zero: "0",
        cross: "x"

      }))
    }

    document.getElementById("table2").innerHTML = jodacollection12.map((item, index) => `
    <tr>
      <td class="text1" >${item.text}</td>
      <td class="equal2">${item.equal}</td>
      <td class="zero1" id="zero1">${item.zero}</td> 
      <td><button class="delete-btn" onclick="deleteIndex(${index})">${item.cross}</button></td>
    </tr>
  `).join('');


  }
  else {
    let data2 = localStorage.getItem("array1")
    console.log(data2)
    let new_aray25 = JSON.parse(data2)
    console.log(new_aray25)
    let array4 = [];
    new_aray25.filter(item => {
      array4.push(item.text)
    })
    console.log(array4)


    let jodacollection12 = array4.map(item => ({
      text: item,
      equal: "=",
      zero: cross_amount12,
      cross: "x"

    }))
    if (cross_amount12 === "") {
      jodacollection12 = array4.map(item => ({
        text: item,
        equal: "=",
        zero: "0",
        cross: "x"

      }))
    }
    document.getElementById("table2").innerHTML = jodacollection12.map((item, index) => `
    <tr>
      <td class="text1" >${item.text}</td>
      <td class="equal2">${item.equal}</td>
      <td class="zero1" id="zero1">${item.zero}</td> 
      <td><button class="delete-btn" onclick="deleteIndex(${index})">${item.cross}</button></td>
    </tr>
  `).join('');



  }

}
function button35() {
  let selectElement = document.getElementById("select2");
  let value12 = selectElement.value;
  console.log(value12)

  if (value12 === "SELECT GAME") {
    // alert("hello"); 
    window.scrollTo(0, 0);
    selectElement.classList.add("pink-border");
  }
}

function button34() {
  let amount34 = document.getElementById("value2").textContent;
  if (amount34.trim() === "0" || amount34 === "") {
    alert("Please place your bet with an amount.");
    return;
  }
  let selectElement = document.getElementById("select1");
  console.log(selectElement);
  let value12 = selectElement.value;

  if (value12 === "SELECT GAME") {
    window.scrollTo(0, 0);
    selectElement.classList.add("pink-border");
  }
}

function input1() {
  let inputs2 = document.querySelectorAll(".input4");

  let value2 = document.getElementById("value2");
  let value3 = document.getElementById("value3");
  let regx = /^[A-Za-z]+$/;

  inputs2.forEach(input => {
    input.addEventListener("input", function () {
      const inputValue = this.value;
      value2.textContent = inputValue;
      value3.textContent = inputValue;
      if (regx.test(inputValue)) {
        value2.textContent = "0";
      }

      let sum = 0;
      document.querySelectorAll(".input4").forEach(input => {
        const value = parseFloat(input.value) || 0; // Convert input value to number or 0 if not a number
        sum += value;
      });
      document.getElementById("value2").textContent = sum;
      document.getElementById("value3").textContent = sum;
      document.getElementById("value_3").textContent = sum;
    });



  });


  document.querySelectorAll(".input4").forEach(function (input) {
    input.addEventListener("input", function () {
      let inputValue = this.value;
      inputValue = inputValue.replace(/[^0-9+\-*%/.]/g, '');
      this.value = inputValue;



    });
  });
  const inputs3 = document.querySelectorAll(".input4");

  document.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('input4') && target.value.charAt(0) === "-") {
      const inputValue = target.value;
      // Do something with inputValue
    }
  });

  const inputs = document.querySelectorAll(".input4");

  inputs.forEach(input => {
    input.addEventListener('keydown', function (event) {
      if (event.key === '-') {
        event.preventDefault();
      }
    });
  });


}
input1();


const icons = document.querySelectorAll('.menu23 ul li i');
const paragraphs = document.querySelectorAll('.menu23 ul li p.home2');

// Function to change color
function changeColor(element) {
  // Reset the color of all icons and paragraphs
  icons.forEach(icon => {
    icon.style.color = ''; // Reset to default color
  });
  paragraphs.forEach(p => {
    p.style.color = ''; // Reset to default color
  });

  // Set the color of the clicked element and its corresponding paragraph or icon
  const iconIndex = Array.from(icons).indexOf(element);
  if (iconIndex !== -1) {
    // If the clicked element is an icon, change its color and the color of the corresponding paragraph
    element.style.color = '#4b9ca8';
    paragraphs[iconIndex].style.color = '#4b9ca8';
  } else {
    // If the clicked element is a paragraph, find its corresponding icon and change its color
    const paragraphIndex = Array.from(paragraphs).indexOf(element);
    if (paragraphIndex !== -1) {
      icons[paragraphIndex].style.color = '#4b9ca8';
      element.style.color = '#4b9ca8';
    }
  }
}

// Add click event listeners to icons
icons.forEach(icon => {
  icon.addEventListener('click', function () {
    changeColor(this);
  });
});

// Add click event listeners to paragraphs
paragraphs.forEach(p => {
  p.addEventListener('click', function () {
    changeColor(this);
  });
});


let changezero = document.getElementById("cross_amount");

// Function to update zero elements with the current input value and calculate total
function updateZeroElements2(value) {
  let zeroElements = document.querySelectorAll(".zero1");
  let total = 0;
  zeroElements.forEach(function (element) {
    element.textContent = value;
    total += parseInt(value); // Convert value to integer and add it to total
  });
  document.getElementById("total12").innerText = total; // Display total in total12 element
  document.getElementById("total13").innerText = total;
}
// Event listener for changes in the input value
changezero.addEventListener("input", function () {
  let amount1 = changezero.value;
  updateZeroElements2(amount1);



  // Event listener to handle the case when input value is emptied
  if (amount1 === "") {

    updateZeroElements2("0");
  }
});


function deleteIndex(index) {
  console.log(index);
  var table = document.getElementById("table2");
  console.log(table)
  var rowCount = table.rows.length;
    // table.deleteRow(index);
  
  // Check if the provided index is within the valid range
  // if (index >= 0 && index < rowCount) {
  //   // table.deleteRow(index);
  // } else {
  //   console.error("Invalid index:", index);
  // }

  var value3Element = Number(document.getElementById("total12").innerText);
  // console.log(value3Element)
  // console.log(Number(value3Element));
  console.log("value3Element", value3Element)
  var valueToRemove = Number(document.getElementById("zero1").innerText);
  console.log( "valueToRemove",valueToRemove)
  // console.log("VALUETOREMOVE" ,currentValue - valueToRemove);
  if (value3Element) {
    var currentValue = parseFloat(value3Element);
    if (!isNaN(currentValue)) {
      if (!isNaN(valueToRemove)) {
        value3Element = currentValue - valueToRemove;
        document.getElementById("total12").innerText = value3Element;
      } else {
        console.error("Invalid value to remove from 'total12'");
      }
    } else {
      console.error("Invalid value for 'total12'");
    }
  } else {
    console.error("Element with ID 'total12' not found.");
  }
  table.deleteRow(index);
}




