console.log('Hello World')

const iceCreams = [
  {
    id: 1,
    name: 'Vanilla',
    image: 'assets/icecream/vanilla.jpeg',
    price: 1
  },
  {
    id: 2,
    name: 'Chocolate',
    image: 'assets/icecream/chocolate.jpeg',
    price: 1
  },
  {
    id: 3,
    name: 'Strawberry',
    image: 'assets/icecream/strawberry.jpeg',
    price: 2
  }
]


const vessels = [
  {
    id: 4,
    name: 'Bowl',
    image: 'assets/vessels/bowl.jpeg',
    price: 2
  },
  {
    id: 5,
    name: 'Mug',
    image: 'assets/vessels/mug.jpeg',
    price: 3
  },
  {
    id: 6,
    name: 'Waffle Cone',
    image: 'assets/vessels/wafflecone.jpeg',
    price: 4
  }
]

const toppings = [
  {
    id: 7,
    name: 'Chocolate Chips',
    image: 'assets/toppings/chocolatechips.jpeg',
    price: 1
  },
  {
    id: 8,
    name: 'Fish',
    image: 'assets/toppings/fish.jpeg',
    price: 1
  },
  {
    id: 9,
    name: 'Gummy Bears',
    image: 'assets/toppings/gummybears.jpeg',
    price: 1
  },
  {
    id: 10,
    name: 'Gummy Worms',
    image: 'assets/toppings/gummyworms.jpeg',
    price: 1
  },
  {
    id: 11,
    name: 'Raspberries',
    image: 'assets/toppings/raspberries.jpeg',
    price: 1
  },
  {
    id: 12,
    name: 'Sand',
    image: 'assets/toppings/sand.jpeg',
    price: 1
  },
  {
    id: 13,
    name: 'Sprinkles',
    image: 'assets/toppings/sprinkles.jpeg',
    price: 1
  }
]

const orders = []
console.log("spaceship")

function addtoCart(id){
  console.log(id)

 for (let i = 0; i < toppings.length; i++) {
   const item = toppings[i]
  if (item.id == id){
    orders.push(item)
 }
 }

 for (let i = 0; i < iceCreams.length; i++) {
  const item = iceCreams[i]
 if (item.id == id){
   orders.push(item)
}
}

for (let i = 0; i < vessels.length; i++) {
  const item = vessels[i]
 if (item.id == id){
   orders.push(item)
}
}
drawOrders()
}

function checkout(){
  orders.length = 0
  drawOrders()
}

function drawOrders(){
  let template = ''
  let total = 0
  orders.forEach(order => {
    total += order.price
    template += `
    <div class="col-12">
    <div class="row">
      <div class="col-6">${order.name}</div>
      <div class="col-2">?</div>
      <div class="col-2">${order.price}</div>
      <div class="col-2">${order.price}</div>
    </div>
  </div>
    `
  })
  document.getElementById("total").innerText = total.toFixed(2)
  document.getElementById("order-list").innerHTML = template
}


function drawToppings(){
  let template = ''
  toppings.forEach(topping => {
    template += `
    <div class="col-md-4 p-3 text-center">
      <div class="card shadow rounded-bottom rounded-3" onclick="addtoCart(${topping.id})">
      <img class="w-100 object-cover p-2" height="200px" src="${topping.image}" alt="">
      <h5 class="p-3">${topping.name} $${topping.price.toFixed(2)}</h5>
    </div>
  </div> 
    `
  })
  document.getElementById("topping-display").innerHTML = template
}

function drawVessels(){
  let template = ''
  vessels.forEach(vessel => {
    template += `
    <div class="col-md-4 p-3 text-center">
    <div div class="card shadow rounded-bottom rounded-3" onclick="addtoCart(${vessel.id})">
    <img class="w-100 object-cover p-2" height="200px" src="${vessel.image}" alt="">
    <h5 class="p-3">${vessel.name} $${vessel.price.toFixed(2)}</h5>
    </div>
  </div>
    `
  })
  document.getElementById("vessel-display").innerHTML = template
}

function drawiceCreams(){
  let template = ''
  iceCreams.forEach(icecream => {
    template += `
    <div class="col-md-4 p-3 text-center">
    <div div class="card shadow rounded-bottom rounded-3" onclick="addtoCart(${icecream.id})">
    <img class="w-100 object-cover p-2" height="200px" src="${icecream.image}" alt="">
    <h5 class="p-3">${icecream.name} $${icecream.price.toFixed(2)}</h5>
    </div>
  </div>
    `
  })
  document.getElementById("icecream-display").innerHTML = template
}



drawToppings()
drawVessels()
drawiceCreams()