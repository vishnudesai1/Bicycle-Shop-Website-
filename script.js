   const cards = [
    {
      image: "UseInWebsite/Bicycle_Types/01.jpg",
      title: "Electric Bikes",
      buttonText: "Shop"
    },
    {
      image: "UseInWebsite/Bicycle_Types/02.jpg",
      title: "Road Bikes",
      buttonText: "Shop"
    },
    {
      image: "UseInWebsite/Bicycle_Types/03.jpg",
      title: "Mountain Bikes",
      buttonText: "Shop"
    },
    {
      image: "UseInWebsite/Bicycle_Types/04.jpg",
      title: "Active Bikes",
      buttonText: "Shop"
    },
    {
      image: "UseInWebsite/Bicycle_Types/05.jpg",
      title: "Kids Bikes",
      buttonText: "Shop"
    },
    {
      image: "UseInWebsite/Bicycle_Types/06.png",
      title: "Tyres",
      buttonText: "Shop"
    },
    {
      image: "UseInWebsite/Bicycle_Types/07.jpg",
      title: "Accessories",
      buttonText: "Shop"
    }
  ];

  const container = document.querySelector(".container");

  cards.forEach(card => {
    const cardHTML = `
      <div class="box">
        <img src="${card.image}" alt="${card.title}">
        <div class="moreInfo">
          <h3>${card.title}</h3>
          <button>${card.buttonText}</button>
        </div>
      </div>
    `;
    container.innerHTML += cardHTML;
  })
  

const offerProducts = [
    {
      name:"Hero Monster",
      image:"UseInWebsite/Offers/01.png",
      price:"₹14,999",
      originalPrize:"₹19,999"
    },
    {
      name:"Felt Breed",
      image:"UseInWebsite/Offers/02.png",
      price:"₹19,999",
      originalPrize:"₹24,999"
    },
    {
      name:"Felt WC",
      image:"UseInWebsite/Offers/03.png",
      price:"₹29,999",
      originalPrize:"₹39,999"
    },
    {
      name:"Bontrager 2",
      image:"UseInWebsite/Offers/04.png",
      price:"₹4999",
      originalPrize:"₹9999"
    },
    {
      name:"S-works",
      image:"UseInWebsite/Offers/05.png",
      price:"₹11,499",
      originalPrize:"₹15,999"
    },
    {
      name:"Hydra 2",
      image:"UseInWebsite/Offers/06.png",
      price:"₹499",
      orginalPrize:"₹799"
    },
    {
      name:"Hand Glowes",
      image:"UseInWebsite/Offers/07.png",
      price:"₹2199",
      originalPrize:"₹2999"
    },
];


const containerOffers = document.querySelector("#product-container");
for (let card = 0; card < offerProducts.length; card++) {
    const product = offerProducts[card];
    

   const createDiv =  document.createElement("div");
   createDiv.className = 'cardContainer'

   createDiv.innerHTML = `
       <div class="product-card">
        <img 
            src="${product.image}" 
            alt="${product.name}" 
            class="product-image"
        >
        <h2 class="product-title">${product.name}"</h2>
        <div class="price-container">
            <p class="current-price">${product.price}"</p>
            <p class="original-price">${product.originalPrize}"</p>
        </div>
    </div>`

    containerOffers.appendChild(createDiv)
}


const cutomerReview = [
  {
    img:"UseInWebsite/revieww/cutomer_01.png",
    name: "Ansh Mehra",
    review: "Love my new bike! Smooth ride and great service."
  },
  {
    img:"UseInWebsite/revieww/cutomer_02.png",
    name: "Priya Sharma",
    review: "Best shop in town—friendly staff and top quality."
  },
  {
    img:"UseInWebsite/revieww/cutomer_03.png",
    name: "Yash Patel",
    review: "Perfect bike for my commute. Highly recommend!"
  },
  {
    img:"UseInWebsite/revieww/cutomer_04.png",
    name: "Priya Vyas",
    review: "Great experience! Got exactly what I needed."
  }
]
const reviewContainer = document.querySelector("#reviewContainer");

cutomerReview.forEach(function(review){
    const createElement = document.createElement("div");
    createElement.className = "review";

    createElement.innerHTML = `
      <img src="${review.img}" alt="${review.img}">
      <h3>${review.name}</h3>
      <p>${review.review}</p>
    </div>
    `;
    reviewContainer.appendChild(createElement)
})