
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".nav-link");
  const icons = document.querySelectorAll(".icon1");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
      icons.forEach((icon, iconIndex) => {
        if (index === iconIndex) {
          icon.style.display = "inline-block";
        } else {
          icon.style.display = "none";
        }
      });
    });
  });
});



function change12() {
  document.getElementById("select1").style.color = "green";
  document.getElementById("select1").style.textTransform = "Uppercase";
  document.getElementById("select1").style.fontSize = "19px";
}
function change13() {
  document.getElementById("select2").style.color = "green";
  document.getElementById("select2").style.textTransform = "Uppercase";
  document.getElementById("select2").style.fontSize = "19px";
  document.getElementById("select2").style.borderColor = "black";

  let selectElement = document.getElementById("select2");
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

// // Get all icons and paragraphs
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

function button35() {
  let selectElement = document.getElementById("select2");
  console.log(selectElement);
  let value12 = selectElement.value;
  console.log(value12)
  if (value12 === "SELECT GAME") {
    window.scrollTo(0, 0);
    selectElement.classList.add("pink-border");
  }
  else {
    selectElement.classList.add("blue-border")
  }

}


document.querySelectorAll(".input4").forEach(function (input) {
  input.addEventListener("input", function () {
    let inputValue = this.value;
    inputValue = inputValue.replace(/[^0-9+\-*%/.]/g, '');
    this.value = inputValue;
  });
});


const inputs2 = document.querySelectorAll(".input4");
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

function click12() {

  let selectElement = document.getElementById("select2");
  let value12 = selectElement.value;
  console.log(value12)

  if (value12 === "SELECT GAME") {
    // alert("hello"); 
    window.scrollTo(0, 0);
    selectElement.classList.add("pink-border");
  }


  const collection12 = [];
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
}

// Function to delete row
function deleteRow(index) {
  const table = document.getElementById("table2");
  table.deleteRow(index);

  // Update indices of rows after the deleted row
  for (let i = index; i < table.rows.length; i++) {
    const row = table.rows[i];
    const deleteButton = row.querySelector('.delete-btn');
    deleteButton.setAttribute('onclick', `deleteRow(${i})`);
  }
  let totalAmountElement = document.getElementById("total12");
  let totalamount13=document.getElementById("total13")
  let totalAmount = parseInt(totalAmountElement.textContent);
  let amount = document.getElementById("cross_amount").value;
  if (!isNaN(totalAmount)) {
    totalAmount -= amount;
    console.log(totalAmountElement.textContent = totalAmount);
    console.log(totalamount13.textContent = totalAmount);
  }

}



function change24() {

  console.log(document.getElementById("joda1").checked)
  let input24 = document.getElementById("select4").value;
  let amount23 = document.getElementById("cross_amount").value;
  let array23 = localStorage.getItem("array2")
  let new_aray23 = JSON.parse(array23)
  if (document.getElementById("joda1").checked) {

    if ((input24 !== "")) {
      let array2 = [];
      new_aray23.filter(item => {
        array2.push(item.text);
        console.log(array2)
        function ismaster(num) {
          return num[0] === num[1]
        }


        array2 = array2.filter(num => num && num.length >= 2 && !ismaster(num));


        let collection13 = []
        array2.map(item => ({
          text: item,
          equal: "=",
          zero: amount23,
          cross: "x"
        }));
        let array5 = localStorage.setItem("array2", JSON.stringify(array2));
        console.log(array5)

        const array3 = array2
        if (amount23 !== "") {
          JodaCollection = array3.map(item => ({
            text: item,
            equal: "=",
            zero: amount23,
            cross: "x"
          }));
        }
        else {

          JodaCollection = array3.map(item => ({
            text: item,
            equal: "=",
            zero: "0",
            cross: "x"
          }));
        }

        // console.log(JodaCollection);

        document.getElementById("table2").innerHTML = JodaCollection.map((item, index) => `
    <tr>
      <td class="text1" >${item.text}</td>
      <td class="equal2">${item.equal}</td>
      <td class="zero1" id="zero1">${item.zero}</td> 
      <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
    </tr>
  `).join('');
      });
    }
  }


  let input25 = document.getElementById("joda1").checked;


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

  // Generate HTML for table2
  document.getElementById("table2").innerHTML = collection12.map((item, index) => `
    <tr>
      <td class="text1" >${item.text}</td>
      <td class="equal2">${item.equal}</td>
      <td class="zero1" id="zero1">${item.zero}</td> 
      <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
    </tr>
  `).join('');
}


function joda2() {
  let attr1 = document.getElementById("joda1").checked;
  let amount23 = document.getElementById("cross_amount").value;
  let number = document.getElementById('select4').value;
  console.log(number)
  let array23 = localStorage.getItem("array1")
  let new_aray23 = JSON.parse(array23)
  if ((number === "") && (attr1)) {
    localStorage.removeItem("array1")
  }
  else if ((attr1)) {
    if ((number !== "")) {
      let array2 = [];
      new_aray23.filter(item => {
        array2.push(item.text);
        console.log(array2)
        function ismaster(num) {
          return num[0] === num[1]
        }


        array2 = array2.filter(num => !ismaster(num));

        let collection13 = []
        array2.map(item => ({
          text: item,
          equal: "=",
          zero: amount23,
          cross: "x"
        }));
        let array5 = localStorage.setItem("array2", JSON.stringify(array2));
        console.log(array5)

        const array3 = array2
        JodaCollection = array3.map(item => ({
          text: item,
          equal: "=",
          zero: amount23,
          cross: "x"
        }));

        JodaCollection = array3.map(item => ({
          text: item,
          equal: "=",
          zero: "0",
          cross: "x"
        }));

        // console.log(JodaCollection);

        document.getElementById("table2").innerHTML = JodaCollection.map((item, index) => `
    <tr>
      <td class="text1" >${item.text}</td>
      <td class="equal2">${item.equal}</td>
      <td class="zero1" id="zero1">${item.zero}</td> 
      <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
    </tr>
  `).join('');
      });
    }
  }

  // if (attr1) {
  //   let array23 = localStorage.getItem("array1")
  //   let new_aray23 = JSON.parse(array23)

  //   let array2 = [];
  //   new_aray23.filter(item => {
  //     array2.push(item.text);


  //     function ismaster(num) {
  //       return num[0] === num[1]
  //     }



  //     array2 = array2.filter(num => !ismaster(num));

  //     let collection13 = []
  //     array2.map(item => ({
  //       text: item,
  //       equal: "=",
  //       zero: amount23,
  //       cross: "x"
  //     }));
  //     let array5 = localStorage.setItem("array2", JSON.stringify(array2));
  //     console.log(array5)

  //     const array3 = array2
  //     // if(amount23 === ""){
  //     //   document.getElementById("zero1").innerText = "0";

  //     // }
  //     JodaCollection = array3.map(item => ({
  //       text: item,
  //       equal: "=",
  //       zero: amount23,
  //       cross: "x"
  //     }));
  //     if (amount23 === "") {
  //       JodaCollection = array3.map(item => ({
  //         text: item,
  //         equal: "=",
  //         zero: "0",
  //         cross: "x"
  //       }));

  //     }

  //     // console.log(JodaCollection);

  //     document.getElementById("table2").innerHTML = JodaCollection.map((item, index) => `
  //   <tr>
  //     <td class="text1" >${item.text}</td>
  //     <td class="equal2">${item.equal}</td>
  //     <td class="zero1" id="zero1">${item.zero}</td> 
  //     <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
  //   </tr>
  // `).join('');
  //   });
  // }
  else {
    let array23 = localStorage.getItem("array1")
    let amount23 = document.getElementById("cross_amount").value;
    let new_aray23 = JSON.parse(array23)
    console.log(new_aray23);
    let array3 = [];
    new_aray23.filter(item => {
      array3.push(item.text)
    })

    const jodacollection12 = array3.map(item => ({
      text: item,
      equal: "=",
      zero: amount23,
      cross: "x"

    }))
    if (amount23 === "") {
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
    <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
  </tr>
`).join('');
  }
}




let amount1Input = document.getElementById("cross_amount");

// Function to update zero elements with the current input value and calculate total
function updateZeroElements(value) {
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
amount1Input.addEventListener("input", function () {
  let amount1 = amount1Input.value;
  updateZeroElements(amount1);



  // Event listener to handle the case when input value is emptied
  if (amount1 === "") {

    updateZeroElements("0");
  }
});


function handleInput(event) {
  const inputChar = event.key;
  console.log(inputChar)
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

// // Update 'a' when the value of the select element changes
document.getElementById("select4").addEventListener("input", function () {
let a = this.value;
});

// // Example usage with a select element
const selectElement = document.getElementById("select4");

selectElement.addEventListener("keydown", handleInput);

