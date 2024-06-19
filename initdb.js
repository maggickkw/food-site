const sql = require("better-sqlite3");
const db = sql("meals.db");

const dummyMeals = [
  {
    title: "Juicy Cheese Burger",
    slug: "juicy-cheese-burger",
    image: "/images/burger.jpg",
    summary:
      "A mouth-watering burger with a juicy beef patty and melted cheese, served in a soft bun.",
    instructions: `
      1. Prepare the patty:
         Mix 200g of ground beef with salt and pepper. Form into a patty.

      2. Cook the patty:
         Heat a pan with a bit of oil. Cook the patty for 2-3 minutes each side, until browned.

      3. Assemble the burger:
         Toast the burger bun halves. Place lettuce and tomato on the bottom half. Add the cooked patty and top with a slice of cheese.

      4. Serve:
         Complete the assembly with the top bun and serve hot.
    `,
    creator: "John Doe",
    creator_email: "johndoe@example.com",
  },
  {
    title: "Spicy Curry",
    slug: "spicy-curry",
    image: "/images/curry.jpg",
    summary:
      "A rich and spicy curry, infused with exotic spices and creamy coconut milk.",
    instructions: `
      1. Chop vegetables:
         Cut your choice of vegetables into bite-sized pieces.

      2. Sauté vegetables:
         In a pan with oil, sauté the vegetables until they start to soften.

      3. Add curry paste:
         Stir in 2 tablespoons of curry paste and cook for another minute.

      4. Simmer with coconut milk:
         Pour in 500ml of coconut milk and bring to a simmer. Let it cook for about 15 minutes.

      5. Serve:
         Enjoy this creamy curry with rice or bread.
    `,
    creator: "Max Schwarz",
    creator_email: "max@example.com",
  },
  {
    title: "Homemade Dumplings",
    slug: "homemade-dumplings",
    image: "/images/dumplings.jpg",
    summary:
      "Tender dumplings filled with savory meat and vegetables, steamed to perfection.",
    instructions: `
      1. Prepare the filling:
         Mix minced meat, shredded vegetables, and spices.

      2. Fill the dumplings:
         Place a spoonful of filling in the center of each dumpling wrapper. Wet the edges and fold to seal.

      3. Steam the dumplings:
         Arrange dumplings in a steamer. Steam for about 10 minutes.

      4. Serve:
         Enjoy these dumplings hot, with a dipping sauce of your choice.
    `,
    creator: "Emily Chen",
    creator_email: "emilychen@example.com",
  },
  {
    title: "Classic Mac n Cheese",
    slug: "classic-mac-n-cheese",
    image: "/images/macncheese.jpg",
    summary:
      "Creamy and cheesy macaroni, a comforting classic that's always a crowd-pleaser.",
    instructions: `
      1. Cook the macaroni:
         Boil macaroni according to package instructions until al dente.

      2. Prepare cheese sauce:
         In a saucepan, melt butter, add flour, and gradually whisk in milk until thickened. Stir in grated cheese until melted.

      3. Combine:
         Mix the cheese sauce with the drained macaroni.

      4. Bake:
         Transfer to a baking dish, top with breadcrumbs, and bake until golden.

      5. Serve:
         Serve hot, garnished with parsley if desired.
    `,
    creator: "Laura Smith",
    creator_email: "laurasmith@example.com",
  },
  {
    title: "Authentic Pizza",
    slug: "authentic-pizza",
    image: "/images/pizza.jpg",
    summary:
      "Hand-tossed pizza with a tangy tomato sauce, fresh toppings, and melted cheese.",
    instructions: `
      1. Prepare the dough:
         Knead pizza dough and let it rise until doubled in size.

      2. Shape and add toppings:
         Roll out the dough, spread tomato sauce, and add your favorite toppings and cheese.

      3. Bake the pizza:
         Bake in a preheated oven at 220°C for about 15-20 minutes.

      4. Serve:
         Slice hot and enjoy with a sprinkle of basil leaves.
    `,
    creator: "Mario Rossi",
    creator_email: "mariorossi@example.com",
  },
  {
    title: "Wiener Schnitzel",
    slug: "wiener-schnitzel",
    image: "/images/schnitzel.jpg",
    summary:
      "Crispy, golden-brown breaded veal cutlet, a classic Austrian dish.",
    instructions: `
      1. Prepare the veal:
         Pound veal cutlets to an even thickness.

      2. Bread the veal:
         Coat each cutlet in flour, dip in beaten eggs, and then in breadcrumbs.

      3. Fry the schnitzel:
      Heat oil in a pan and fry each schnitzel until golden brown on both sides.

      4. Serve:
      Serve hot with a slice of lemon and a side of potato salad or greens.
 `,
    creator: "Franz Huber",
    creator_email: "franzhuber@example.com",
  },
  {
    title: "Fresh Tomato Salad",
    slug: "fresh-tomato-salad",
    image: "/images/tomato-salad.jpg",
    summary:
      "A light and refreshing salad with ripe tomatoes, fresh basil, and a tangy vinaigrette.",
    instructions: `
      1. Prepare the tomatoes:
        Slice fresh tomatoes and arrange them on a plate.

      2. Add herbs and seasoning:
         Sprinkle chopped basil, salt, and pepper over the tomatoes.

      3. Dress the salad:
         Drizzle with olive oil and balsamic vinegar.

      4. Serve:
         Enjoy this simple, flavorful salad as a side dish or light meal.
    `,
    creator: "Sophia Green",
    creator_email: "sophiagreen@example.com",
  },
  {
   "title": "Classic Croissant",
   "slug": "classic-croissant",
   "image": "/images/croissants.jpg",
   "summary": "A flaky, buttery pastry with a golden-brown crust, perfect for breakfast or a snack.",
   "instructions": `
     1. Prepare the dough:
        Mix 4 cups of flour, 1/2 cup warm water, 1/2 cup warm milk, 1/4 cup sugar, 2 tsp salt, 2 1/4 tsp yeast, and 2 tbsp melted butter. Knead until smooth and let rise until doubled.

     2. Prepare the butter block:
        Flatten 1 1/4 cups cold butter into a 7x7 inch square.

     3. Laminate the dough:
        Encapsulate the butter in the dough, roll out, and fold into thirds. Repeat twice with chilling in between.

     4. Shape and bake:
        Roll out the dough, cut into triangles, shape into croissants, let rise, brush with egg wash, and bake at 375°F for 20-25 minutes.
   `,
   "creator": "John Doe",
   "creator_email": "johndoe@example.com"
 },
 {
   "title": "Banana Topped Waffles",
   "slug": "banana-topped-waffles",
   "image": "/images/waffles_better.jpg",
   "summary": "Delicious, crispy waffles topped with fresh, sliced bananas, perfect for a sweet breakfast treat.",
   "instructions": `
     1. Prepare the waffle batter:
        Mix 2 cups of flour, 2 tbsp sugar, 1 tbsp baking powder, a pinch of salt, 2 eggs, 1 3/4 cups milk, 1/2 cup melted butter, and 1 tsp vanilla extract.

     2. Cook the waffles:
        Preheat your waffle iron. Pour the batter into the iron and cook according to the manufacturer's instructions until golden brown and crispy.

     3. Slice the bananas:
        Slice 2-3 bananas into thin rounds.

     4. Serve:
        Top the cooked waffles with sliced bananas and serve with maple syrup or your favorite toppings.
   `,
   "creator": "John Doe",
   "creator_email": "johndoe@example.com"
 },
 {
   "title": "Toast with Runny Eggs",
   "slug": "toast-with-runny-eggs",
   "image": "/images/runny-egg.jpg",
   "summary": "A simple yet satisfying dish featuring crispy toast topped with perfectly runny eggs.",
   "instructions": `
     1. Toast the bread:
        Toast 2 slices of your favorite bread until golden and crispy.

     2. Cook the eggs:
        Heat a bit of oil in a pan. Crack 2 eggs into the pan and cook on medium heat until the whites are set but the yolks remain runny.

     3. Assemble the dish:
        Place the toasted bread on a plate. Top each slice with a runny egg.

     4. Serve:
        Season with salt and pepper, and serve hot.
   `,
   "creator": "John Doe",
   "creator_email": "johndoe@example.com"
 },
 {
   "title": "Strawberry and Yogurt Dessert",
   "slug": "strawberry-yogurt-dessert",
   "image": "/images/strawberry-dessert.jpg",
   "summary": "A refreshing dessert made with creamy yogurt and fresh strawberries, perfect for a light treat.",
   "instructions": `
     1. Prepare the strawberries:
        Wash and slice 1 cup of fresh strawberries.

     2. Layer the dessert:
        In a serving glass, layer 1/2 cup of Greek yogurt and sliced strawberries. Repeat to create alternating layers.

     3. Add toppings:
        Top with a drizzle of honey and a sprinkle of granola or nuts, if desired.

     4. Serve:
        Serve immediately or chill in the refrigerator for 15 minutes before serving.
   `,
   "creator": "John Doe",
   "creator_email": "johndoe@example.com"
 }




];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();
