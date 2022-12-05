const menu = [
  {
   id: 10,
   title: 'Pizza',
   category: 'breakfast',
   price: 20,
   img: './images/pizza.jpg',
   desc: `Nepali style cheesy pizza`,
  },
  {
   id: 11,
   title: 'Tandoori Chicken',
   category: 'breakfast',
   price: 25.58,
   img: './images/tandoori_chicken.jpg',
   desc: `Tandoori chicken.`,
 },

   {
     id: 1,
     title: 'Pancakes',
     category: 'breakfast',
     price: 15.99,
     img: './images/item-1.jpeg',
     desc: ` Buttermilk pancake `,
   },
   {
     id: 2,
     title: 'Burger',
     category: 'lunch',
     price: 13.99,
     img: './images/item-2.jpeg',
     desc: ` Burger with fries `,
   },
   {
     id: 3,
     title: ' Milkshake',
     category: 'shakes',
     price: 6.99,
     img: './images/item-3.jpeg',
     desc: `Godzilla milkshake`,
   },
   {
     id: 4,
     title: 'Omlete',
     category: 'breakfast',
     price: 20.99,
     img: './images/item-4.jpeg',
     desc: `Bread omlette with coffee`,
   },
   {
     id: 5,
     title: 'Egg attack',
     category: 'lunch',
     price: 22.99,
     img: './images/item-5.jpeg',
     desc: `Egg attack`,
   },
   {
     id: 6,
     title: 'Shake',
     category: 'shakes',
     price: 18.99,
     img: './images/item-6.jpeg',
     desc: `Oreo shake`,
   },
   {
     id: 7,
     title: 'Bacon',
     category: 'breakfast',
     price: 8.99,
     img: './images/item-7.jpeg',
     desc: `Bacon overflow`,
   },
   {
     id: 8,
     title: 'Burger',
     category: 'Breakfast',
     price: 12.99,
     img: './images/item-8.jpeg',
     desc: `American style burger with extra chesse`,
   },
   {
     id: 9,
     title: 'quarantine buddy',
     category: 'shakes',
     price: 16.99,
     img: './images/item-9.jpeg',
     desc: `Quarantine buddy`,
   },
 ];





const hours = new Date().getHours()
const menuSection = document.querySelector(".items-list")
const foodInfo = document.querySelector(".foodInfo")

function filterItem(type){
  if(type === "all"){
    return menu
  }else{
    newItem  = menu.filter(item => item.category === type)
    return newItem
  }
  
}

function createCard(type){
  menuSection.innerHTML = ''
  const newMenu = filterItem(type)
  foodInfo.innerText = `It's ${newMenu[0].category} time`

for(let item of newMenu){
  const { title, price, img, desc} = item
  // console.log(title)
  const div1 = document.createElement('div')
  const image = document.createElement('img')
  const para = document.createElement('h4')
  const amount = document.createElement('p')
  const description = document.createElement('p')

  div1.setAttribute('class', 'items')
  div1.setAttribute('data-aos', 'fade-up')

  image.src=img
  amount.innerText = '$' + price
  para.innerText = title.toUpperCase()
  description.innerText = desc

  div1.appendChild(image)
  div1.appendChild(para)
  div1.appendChild(amount)
  div1.appendChild(description)

  menuSection.appendChild(div1)
}
}


if(hours >= 4 && hours <12){
createCard("breakfast")
}else if(hours >= 12 && hours < 16){
createCard("lunch")
}else if(hours => 16 && hours < 17){
 createCard("shakes")
}else{
createCard("breakfast")
}