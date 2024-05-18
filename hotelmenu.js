function All() {
    document.querySelector(".lunch").style = `
          display:grid-block;
      `;
    document.querySelector(".breakfast").style = `
          display:grid-block;
      `;
      document.querySelector(".Order").style = `
      display:none;
      `;
      
      document.querySelector(".Shakes").style = `
      display:grid-block;
      `;
      document.querySelector(".icecream").style = `
      display:grid-block;
      `;
    
  }
  function breafast() {
    document.querySelector(".lunch").style = `
          display:none;
      `;
    document.querySelector(".breakfast").style = `
          display:grid-block;
      `;
      document.querySelector(".Order").style = `
      display:none;
      `;
      
      document.querySelector(".Shakes").style = `
      display:none;
      `;
      document.querySelector(".icecream").style = `
      display:none;
      `;
  }
  function lunch() {
    document.querySelector(".lunch").style = `
          display:grid-block;
      `;
    document.querySelector(".breakfast").style = `
          display:none;
      `;
      document.querySelector(".Order").style = `
      display:none;
      `;
      
      document.querySelector(".Shakes").style = `
      display:none;
      `;
      document.querySelector(".icecream").style = `
      display:none;
      `;
  }
  function shakes(){
    document.querySelector(".lunch").style = `
          display:none;
      `;
    document.querySelector(".breakfast").style = `
          display:none;
      `;
      document.querySelector(".Order").style = `
      display:none;
      `;
      
      document.querySelector(".Shakes").style = `
      display:grid-block;
      `;
      document.querySelector(".icecream").style = `
      display:none;
      `;
  }
  function icecream(){
    document.querySelector(".lunch").style = `
          display:none;
      `;
    document.querySelector(".breakfast").style = `
          display:none;
      `;
      document.querySelector(".Order").style = `
      display:none;
      `;
      
      document.querySelector(".Shakes").style = `
      display:none;
      `;
      document.querySelector(".icecream").style = `
      display:grid-block;
      `;
  }
  let totalprice=0;

  function orders() {
    document.querySelector(".lunch").style = `
          display:none;
      `;
    document.querySelector(".breakfast").style = `
          display:none;
      `;
      document.querySelector(".Order").style = `
      display:block;
      `;
      
      document.querySelector(".Shakes").style = `
      display:none;
      `;
      document.querySelector(".icecream").style = `
      display:none;
      `;
       totalprice=0;
      document.getElementById('O3').innerHTML="";
      cartitemdata.forEach(item =>{

        createitem(item.name,item.quantity,item.price);
    
       });
      
       document.getElementById('O4').innerHTML=`Total Price : $ ${totalprice}`;
  }
  let day = document.querySelector(".t11");
  let hours = document.querySelector(".t22");
  let min = document.querySelector(".t33");
  let sec = document.querySelector(".t44");

  let a = 5;
  let b = 0;
  let c = 0;
  let d = 1;


  function time() {
    if (d == 0) {
      if (a == 0 && b == 0 && c == 0 && d == 0) {
        document.querySelector(".discount").style.display = "none";
      }
    }
    if (c == 0) {
      if (d == 0 && c == 0) {
        c = 0;
      } else {
        c = 24;
      }
      if (d != 0) {
        d--;
        c = 24;
      }
    }
    if (b == 0) {
      if (c == 0 && b == 0) {
        b = 0;
      } else {
        b = 60;
      }
      if (c != 0) {
        c--;
        b = 60;
      }
    }
    if (a == 0) {
      if (b != 0) {
        b--;
      }
      a = 60;
      sec.innerHTML = `${a}`;
    }
    a--;
    sec.innerHTML = `${a}`;
    min.innerHTML = `${b}`;
    hours.innerHTML = `${c}`;
    day.innerHTML = `${d}`;
  }

  setInterval(time, 1000);

  document.getElementById('O3').innerHTML="";
  function createitem(itemname,quantity,price)
  {
    
    const itemdiv = document.createElement('div');
    itemdiv.classList.add('item');

    itemdiv.style.width="800px";
    itemdiv.style.height="50px";
    itemdiv.style.display="flex";
    itemdiv.style.justifyContent="space-evenly"
    //itemdiv.style.justifyContent="center"
    itemdiv.style.alignItems="center";
    //itemdiv.style.textAlign="center";
    itemdiv.style.border="2px solid black"
    itemdiv.style.margin="10px";
    itemdiv.style.size="25px";

    const itemnameelement=document.createElement('span');
    itemnameelement.textContent=itemname;

    itemdiv.appendChild(itemnameelement);

    const itempriceelement=document.createElement('div');

    const itemprice=document.createElement('span');
    itemprice.textContent="Price   : ";

    const itemprice1=document.createElement('span');
    itemprice1.textContent=price;
    
    itempriceelement.appendChild(itemprice);
    itempriceelement.appendChild(itemprice1);

    itemdiv.appendChild(itempriceelement);

    const quantity1=document.createElement('div');
    
    const quantityelement1=document.createElement('span');
    quantityelement1.textContent="Quantity :";

    // const quantitybutton1=document.createElement("button");
    // quantitybutton1.textContent="+";
    
   

    let itemquantityelement=document.createElement('input');
    itemquantityelement.value=quantity;
    itemquantityelement.textContent=quantity;

    // const quantitybutton2=document.createElement("button");
    // quantitybutton2.textContent="-";
  //   itemquantityelement.value=quantity;

  //   const option1=document.createElement('option');
  //   option1.value=1;
  //   option1.textContent="1";
  //   itemquantityelement.add(option1);

  //   const option2=document.createElement('option');
  //   option2.value=2;
  //   option2.textContent="2";
  //   itemquantityelement.add(option2);

  //   const option3=document.createElement('option');
  //   option3.value=3;
  //   option3.textContent="3";
  //   itemquantityelement.add(option3);

  //   const option4=document.createElement('option');
  //   option4.value=4;
  //   option4.textContent="4";
  //   itemquantityelement.add(option4);

  //   function handleSelectChange(event) {
  //     // Get the selected option value
  //     var selectedValue = event.target.value;
  //     var selectedText = event.target.options[event.target.selectedIndex].text;
  
  //     // Display the selected option value
  //     // var selectedItemDiv = document.getElementById('selected-item');
  //     itemquantityelement.textContent = `Selected: ${selectedText} (Value: ${selectedValue})`;
  // }

  //   itemquantityelement.style.width="30px";
  //   itemquantityelement.style.height="30px";
  //   itemquantityelement.style.color="red";

  //   itemquantityelement.id = "mySelect";
  //   itemquantityelement.name = "mySelect";

  //   itemquantityelement.addEventListener('change' , handleSelectChange);
    
     document.getElementById('O4').innerHTML=`Total Price : $ ${totalprice}`;


    itemquantityelement.addEventListener('keydown',function(event){
        if(event.key==='Enter'){

            totalprice=totalprice-price;
            let quantitydata=cartitemdata.find(item => item.name === itemname );
            quantitydata.quantity=itemquantityelement.value
            quantity=itemquantityelement.value;
            // itemprice1.textContent=;
            totalprice=totalprice+price*quantity;
            document.getElementById('O4').innerHTML=`Total Price : $ ${totalprice}`;
        }
        
    })

    itemquantityelement.style.width="50px";
     itemquantityelement.style.height="46px";
    // itemquantityelement.style.position="relative";
    // itemquantityelement.style.left="-15px";
    
    // quantitybutton1.style.width="10px";
    // quantitybutton1.style.height="10px";
    // quantitybutton1.style.position="relative";
    // quantitybutton1.style.top="5px";
    // quantitybutton1.style.alignItems="centre";
   

    // quantitybutton2.style.width="10px";
    // quantitybutton2.style.height="10px";
    // quantitybutton2.style.position="relative";
    // quantitybutton2.style.top="5px";
    // quantitybutton2.style.left="50px";

   quantity1.appendChild(quantityelement1);
  //  quantity1.appendChild(quantitybutton1);
  //  quantity1.appendChild(quantitybutton2);
   quantity1.appendChild(itemquantityelement);

    itemdiv.appendChild(quantity1);


    const removebutton=document.createElement('button');

    removebutton.textContent='Remove';
    
    removebutton.addEventListener('click' , () => {
      
        totalprice=totalprice-(price)*(quantity);
        itemdiv.remove();
        cartitemdata=cartitemdata.filter(item => item.name !== itemname);

        
        document.getElementById('O4').innerHTML=`Total Price : $ ${totalprice}`;
    });

  //   removebutton.addEventListener('click' , () => {
  //     totalprice=totalprice-(price)*(quantity);
  //     itemdiv.remove();
  //     document.getElementById('O4').innerHTML=`Total Price : $ ${totalprice}`;
  // });

    itemdiv.appendChild(removebutton);

    removebutton.style.backgroundColor="red";

    totalprice=totalprice+(price)*(quantity);
    
    document.getElementById('O3').append(itemdiv);
    console.log(cartitemdata);
   }

   let cartitemdata=[];

   function additemcart(itemname,itemquantity,itemprice)
   {
    const a=cartitemdata.find(item => item.name === itemname)
    if(a)
    {
        
    }
    else{
        cartitemdata.push({name:itemname , quantity:itemquantity , price:itemprice });
    }
    
    console.log(itemname,itemquantity,itemprice);
   }

   
   

   
  //  <!DOCTYPE html>
  //  <html lang="en">
  //  <head>
  //  <meta charset="UTF-8">
  //  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //  <title>Dynamic Select Element</title>
  //  </head>
  //  <body>
   
  //  <!-- Existing element where select will be appended -->
  //  <div id="select-container"></div>
   
  //  <script>
  //  // Create a new select element
  //  var selectElement = document.createElement("select");
   
  //  // Create option elements and add them to the select element
  //  var option1 = document.createElement("option");
  //  option1.text = "Option 1";
  //  selectElement.add(option1);
   
  //  var option2 = document.createElement("option");
  //  option2.text = "Option 2";
  //  selectElement.add(option2);
   
  //  var option3 = document.createElement("option");
  //  option3.text = "Option 3";
  //  selectElement.add(option3);
   
  //  // Set any attributes or properties of the select element
  //  selectElement.id = "mySelect";
  //  selectElement.name = "mySelect";
   
  //  // Append the select element to an existing element in the DOM
  //  var selectContainer = document.getElementById("select-container");
  //  selectContainer.appendChild(selectElement);
  //  </script>
   
  //  </body>
  //  </html>
   
   

  