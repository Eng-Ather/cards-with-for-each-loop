var fruits = [
  {
    name: "Mango",
    desc: "Mangoes are not only delicious but also nutritious, offering a range of health benefits for your body and mind.",
    image:
      "https://th.bing.com/th/id/R.3b93c8f4be6d43a325e68d0e4ff9b0f9?rik=5d6CjvWFfb2%2fYQ&pid=ImgRaw&r=0",
  },
  {
    name: "Watermelon",
    desc: "Watermelon full of benefits it help you stay hydrated and provide various nutrients and antioxidants",
    image:
      "https://th.bing.com/th/id/OIF.BzwqqtcTcWCwgNA89puqLw?rs=1&pid=ImgDetMain",
  },
  {
    name: "Peach",
    desc: "Peach offer many health benefits, such as improved digestion, heart health, and skin protection",
    image:
      "https://www.cabofinefoods.com/wp-content/uploads/2020/10/Fresh-Produce-Peaches.jpg",
  },
  {
    name: "Cherry",
    desc: "cherries contain anti-inflammatory and antioxidant which help to relieve muscle pain, damage, and inflammation ",
    image:
      "https://th.bing.com/th/id/R.453c46bb90c681a2b036d4979fdb57ff?rik=vixTvH7BIzICfQ&pid=ImgRaw&r=0",
  },
  {
    name: "Strawberry",
    desc: "The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture",
    image:
      "https://th.bing.com/th/id/R.e4f082b30e91d437faedfb70a097eeb3?rik=i4gh%2bs4882rACQ&pid=ImgRaw&r=0",
  },
  {
    name: "Apple",
    desc: "Apples are nutritious fruits that may lower your risk of cancer, diabetes, heart disease, and more. ",
    image:
      "https://th.bing.com/th/id/R.526e70d953f3f2475e36fc146027cc62?rik=xWkkLo%2fNxrIS5Q&riu=http%3a%2f%2fshine-fruit.com%2fwp-content%2fuploads%2f2021%2f09%2fa01.jpg&ehk=tbrZfDC4kbagpq9GMmHU2WMSB9DA8YqTDecYflI2%2bJE%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "Grape",
    desc: "Grapes lower blood pressure, cholesterol, and blood sugar, as well as protect against cancer and oxidative stress",
    image:
      "https://barakatfresh.ae/media/catalog/product/cache/3660a992f2fa7b903faee280631091b9/g/r/green-grapes-seedless.jpg",
  },
  {
    name: "Guava",
    desc: "Guava is a tropical fruit with high vitamin C, fiber, and antioxidants it also improve digestion and boost immune system",
    image:
      "https://thumbs.dreamstime.com/b/guava-white-background-135749515.jpg",
  },
];

var display_box = document.getElementById("display_box"); //getting display box 


//********************( for each loop to creat and display elenebt)********************* */
fruits.forEach(function (data, ind) {
  console.log(data);

  var card = `

<div class="rounded overflow-hidden shadow-lg card_size ">
<img class=" text-center img-size" src="${data.image}" alt="Mountain">
<div class="px-6 py-4">
  <div class="font-bold text-lg mb-2">${data.name}</div>
  <p class=" text-base">${data.desc}</p>
</div>
<div class="px-6 pt-4 pb-2">
<button class="bg-gray-300 hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded" onclick="update(this)">
<i class="fa-solid fa-pencil"></i>
</button>

<button class="bg-gray-300 hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded" onclick="del(${ind})">
<i class="fa-solid fa-trash-can"></i>
</button>

</div>
</div>`;

  display_box.innerHTML += card;
});

//*******************************( description update function )***************************
function update(ele) {
  console.log(ele);

  //getting the decsription which is the 2nd child of grand parent of element
  var update_description =
    ele.parentElement.parentElement.children[1].children[1];
  
  //updating inner text
  update_description.innerText = prompt("Desc");
}

//*******************************( elment delete function )*******************************
function del(ele) {
  console.log(ele);// here we gate the direct index number of slected element(object)
  
  fruits.splice(ele, 1); //removing the user seleted element(object) through array.slice()
  
  console.log("element in array" + fruits);

  display_box.innerHTML = ""; //empty the display box to display updated array

  fruits.forEach(function (data, ind) {
    var card = ` <div class="rounded overflow-hidden shadow-lg card_size">
<img class="w-full img-size" src="${data.image}" alt="Mountain">
<div class="px-6 py-4">
  <div class="font-bold text-xl mb-2">${data.name}</div>
  <p class="text-gray-700 text-base">${data.desc}</p>
</div>
<div class="px-6 pt-4 pb-2">
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onclick="update(this)">
<i class="fa-solid fa-pencil"></i>
</button>

<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onclick="del(${ind})">
<i class="fa-solid fa-trash-can"></i>
</button>

</div>
</div>`;

    display_box.innerHTML += card; //updating U.I
  });
} //end of delete function

//inside the delete function we are doing the same process again for creating card
// because when ever user delete an element(object) from array so we have to update U.I
