//Dữ liệu giả
export const categories = [
  {
    id: "1",
    name: "VietNamese",
    image: require("../assets/images/VietNamese_Categories.jpg"),
  },
  {
    id: "2",
    name: "Chinese",
    image: require("../assets/images/Chinese_Categories.jpg"),
  },
  {
    id: "3",
    name: "Mexican",
    image: require("../assets/images/Mexico_Categories.jpg"),
  },
  {
    id: "4",
    name: "Indian",
    image: require("../assets/images/India_Categories.jpg"),
  },
  {
    id: "5",
    name: "Japanese",
    image: require("../assets/images/Japanese_Categories.jpg"),
  },
];

export const dishes1 = [
  {
    id: "1",
    name: "Spaghetti",
    description: "Classic Italian pasta with tomato sauce.",
    price: 10.99,
    image: require("../assets/images/dishes_images/spaghetti_dish.jpg"),
  },
  {
    id: "2",
    name: "Pizza Margherita",
    description: "Traditional Italian pizza with cheese and tomato.",
    price: 12.99,
    image: require("../assets/images/dishes_images/pizza_dish.jpg"),
  },
  {
    id: "3",
    name: "Lasagna",
    description: "Layered pasta with meat sauce and cheese.",
    price: 15.99,
    image: require("../assets/images/dishes_images/lasagna_dish.jpg"),
  },
];

export const dishes2 = [
  {
    id: "4",
    name: "Sweet and Sour Pork",
    description: "A Chinese classic with tangy sauce.",
    price: 9.99,
    image: require("../assets/images/dishes_images/pork_dish.jpg"),
  },
  {
    id: "5",
    name: "Kung Pao Chicken",
    description: "Spicy stir-fry with chicken and peanuts.",
    price: 11.99,
    image: require("../assets/images/dishes_images/kpChicken_dish.jpg"),
  },
  {
    id: "6",
    name: "Dim Sum",
    description: "Assorted Chinese dumplings.",
    price: 8.99,
    image: require("../assets/images/dishes_images/dimsum_dish.png"),
  },
];

export const dishes3 = [
  {
    id: "7",
    name: "Tacos",
    description: "Soft corn tortillas with seasoned meat.",
    price: 8.99,
    image: require("../assets/images/dishes_images/tacos_dish.jpg"),
  },
  {
    id: "8",
    name: "Guacamole",
    description: "Avocado dip with lime and spices.",
    price: 5.99,
    image: require("../assets/images/dishes_images/guacamole_dish.jpg"),
  },
  {
    id: "9",
    name: "Burrito",
    description: "Flour tortilla filled with rice, beans, and meat.",
    price: 10.99,
    image: require("../assets/images/dishes_images/Burrito_dish.jpg"),
  },
];

export const dishes4 = [
  {
    id: "10",
    name: "Butter Chicken",
    description: "Rich and creamy chicken curry.",
    price: 12.99,
    image: require("../assets/images/dishes_images/butterchicken_dish.jpg"),
  },
  {
    id: "11",
    name: "Biryani",
    description: "Spiced rice with meat or vegetables.",
    price: 13.99,
    image: require("../assets/images/dishes_images/biryani_dish.jpg"),
  },
  {
    id: "12",
    name: "Samosa",
    description: "Fried pastry with spiced filling.",
    price: 4.99,
    image: require("../assets/images/dishes_images/samosa_dish.jpg"),
  },
];

export const dishes5 = [
  {
    id: "13",
    name: "Sushi",
    description: "Rice with raw fish and vegetables.",
    price: 15.99,
    image: require("../assets/images/dishes_images/sushi_dish.jpg"),
  },
  {
    id: "14",
    name: "Ramen",
    description: "Japanese noodle soup.",
    price: 11.99,
    image: require("../assets/images/dishes_images/ramen_dish.jpg"),
  },
  {
    id: "15",
    name: "Tempura",
    description: "Battered and fried seafood or vegetables.",
    price: 10.99,
    image: require("../assets/images/dishes_images/tempura_dish.jpg"),
  },
];

export const restaurants = [
  {
    id: "1",
    name: "Pizza Italia",
    image: require("../assets/images/restaurant_images/Pizza_Restaurant.jpg"),
    description: "Authentic Italian pizza in the heart of the city.",
    lng: 40.748817,
    lat: -73.985428,
    address: "2A Hàng Bài",
    starts: 4.5,
    reviews: 120,
    category: "1",
    dishes: dishes1,
  },
  {
    id: "2",
    name: "Dragon's Wok",
    image: require("../assets/images/restaurant_images/DimSum_Restaurant.jpg"),
    description: "Delicious Chinese food with a modern twist.",
    lng: 40.73061,
    lat: -73.935242,
    address: "123 Nguyễn Văn Bảo",
    starts: 4.0,
    reviews: 98,
    category: "2",
    dishes: dishes2,
  },
  {
    id: "3",
    name: "Cantina Mexicana",
    image: require("../assets/images/restaurant_images/Mexico_Restaurant.jpg"),
    description: "Traditional Mexican food with fresh ingredients.",
    lng: 40.712776,
    lat: -74.005974,
    address: "72/13 Phan Văn Trị",
    starts: 4.7,
    reviews: 150,
    category: "3",
    dishes: dishes3,
  },
  {
    id: "4",
    name: "Spice of India",
    image: require("../assets/images/restaurant_images/Spices_Restaurant.jpg"),
    description: "Authentic Indian flavors with a modern twist.",
    lng: 40.758896,
    lat: -73.98513,
    address: "1 Lê Lợi",
    starts: 4.6,
    reviews: 80,
    category: "4",
    dishes: dishes4,
  },
  {
    id: "5",
    name: "Tokyo Sushi",
    image: require("../assets/images/restaurant_images/SuShi_Restaurant.png"),
    description: "Fresh and delicious sushi in the city.",
    lng: 40.776676,
    lat: -73.968405,
    address: "102/15/36 Lê Đức Thọ",
    starts: 4.8,
    reviews: 200,
    category: "5",
    dishes: dishes5,
  },
];
export const featured = [
  {
    id: "1",
    title: "Top Italian Restaurants",
    description: "Best Italian food for pizza lovers.",
    restaurants: [restaurants[0], restaurants[1]],
  },
  {
    id: "2",
    title: "Best Chinese Dishes",
    description: "A collection of the most popular Chinese dishes.",
    restaurants: [restaurants[1]],
  },
  {
    id: "3",
    title: "Tacos Lovers' Paradise",
    description: "The ultimate taco experience.",
    restaurants: [restaurants[2], restaurants[3]],
  },
  {
    id: "4",
    title: "Indian Delights",
    description: "Explore the richness of Indian cuisine.",
    restaurants: [restaurants[3]],
  },
  {
    id: "5",
    title: "Sushi Showcase",
    description: "Fresh sushi and Japanese dishes.",
    restaurants: [restaurants[4]],
  },
];
