import { Recipe } from 'src/recipe/entities/recipe.entity';
import { DataSource } from 'typeorm';

export async function seedData(dataSource: DataSource) {
  const recipeRepository = dataSource.getRepository(Recipe);
  const count = await recipeRepository.count();
  if (count > 1) {
    return;
  }

  await recipeRepository.save([
    {
      id: 1,
      name: 'Apple Frangipan Tart',
      category: 'Dessert',
      instructions:
        'Preheat the oven to 200C/180C Fan/Gas 6.\r\nPut the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling.\r\nCream together the butter and sugar until light and fluffy. You can do this in a food processor if you have one. Process for 2-3 minutes. Mix in the eggs, then add the ground almonds and almond extract and blend until well combined.\r\nPeel the apples, and cut thin slices of apple. Do this at the last minute to prevent the apple going brown. Arrange the slices over the biscuit base. Spread the frangipane filling evenly on top. Level the surface and sprinkle with the flaked almonds.\r\nBake for 20-25 minutes until golden-brown and set.\r\nRemove from the oven and leave to cool for 15 minutes. Remove the sides of the tin. An easy way to do this is to stand the tin on a can of beans and push down gently on the edges of the tin.\r\nTransfer the tart, with the tin base attached, to a serving plate. Serve warm with cream, crème fraiche or ice cream.',
      image: 'wxywrq1468235067.jpg',
      tags: 'Tart,Baking,Fruity',
      ingredients: [
        {
          name: 'digestive biscuits',
          measure: '175g/6oz',
          id: 1,
        },
        {
          name: 'butter',
          measure: '75g/3oz',
          id: 2,
        },
        {
          name: 'Bramley apples',
          measure: '200g/7oz',
          id: 3,
        },
        {
          name: 'butter, softened',
          measure: '75g/3oz',
          id: 4,
        },
        {
          name: 'caster sugar',
          measure: '75g/3oz',
          id: 5,
        },
        {
          name: 'free-range eggs, beaten',
          measure: '2',
          id: 6,
        },
        {
          name: 'ground almonds',
          measure: '75g/3oz',
          id: 7,
        },
        {
          name: 'almond extract',
          measure: '1 tsp',
          id: 8,
        },
        {
          name: 'flaked almonds',
          measure: '50g/1¾oz',
          id: 9,
        },
      ],
    },
    {
      id: 2,
      name: 'Apple & Blackberry Crumble',
      category: 'Dessert',
      instructions:
        'Heat oven to 190C/170C fan/gas 5. Tip the flour and sugar into a large bowl. Add the butter, then rub into the flour using your fingertips to make a light breadcrumb texture. Do not overwork it or the crumble will become heavy. Sprinkle the mixture evenly over a baking sheet and bake for 15 mins or until lightly coloured.\r\nMeanwhile, for the compote, peel, core and cut the apples into 2cm dice. Put the butter and sugar in a medium saucepan and melt together over a medium heat. Cook for 3 mins until the mixture turns to a light caramel. Stir in the apples and cook for 3 mins. Add the blackberries and cinnamon, and cook for 3 mins more. Cover, remove from the heat, then leave for 2-3 mins to continue cooking in the warmth of the pan.\r\nTo serve, spoon the warm fruit into an ovenproof gratin dish, top with the crumble mix, then reheat in the oven for 5-10 mins. Serve with vanilla ice cream.',
      image: 'xvsurr1511719182.jpg',
      tags: 'Pudding',
      ingredients: [
        {
          name: 'Plain Flour',
          measure: '120g',
          id: 10,
        },
        {
          name: 'Caster Sugar',
          measure: '60g',
          id: 11,
        },
        {
          name: 'Butter',
          measure: '60g',
          id: 12,
        },
        {
          name: 'Braeburn Apples',
          measure: '300g',
          id: 13,
        },
        {
          name: 'Butter',
          measure: '30g',
          id: 14,
        },
        {
          name: 'Demerara Sugar',
          measure: '30g',
          id: 15,
        },
        {
          name: 'Blackberrys',
          measure: '120g',
          id: 16,
        },
        {
          name: 'Cinnamon',
          measure: '¼ teaspoon',
          id: 17,
        },
        {
          name: 'Ice Cream',
          measure: 'to serve',
          id: 18,
        },
      ],
    },
    {
      id: 3,
      name: 'Apam balik',
      category: 'Dessert',
      instructions:
        'Mix milk, oil and egg together. Sift flour, baking powder and salt into the mixture. Stir well until all ingredients are combined evenly.\r\n\r\nSpread some batter onto the pan. Spread a thin layer of batter to the side of the pan. Cover the pan for 30-60 seconds until small air bubbles appear.\r\n\r\nAdd butter, cream corn, crushed peanuts and sugar onto the pancake. Fold the pancake into half once the bottom surface is browned.\r\n\r\nCut into wedges and best eaten when it is warm.',
      image: 'adxcbq1619787919.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Milk',
          measure: '200ml',
          id: 19,
        },
        {
          name: 'Oil',
          measure: '60ml',
          id: 20,
        },
        {
          name: 'Eggs',
          measure: '2',
          id: 21,
        },
        {
          name: 'Flour',
          measure: '1600g',
          id: 22,
        },
        {
          name: 'Baking Powder',
          measure: '3 tsp',
          id: 23,
        },
        {
          name: 'Salt',
          measure: '1/2 tsp',
          id: 24,
        },
        {
          name: 'Unsalted Butter',
          measure: '25g',
          id: 25,
        },
        {
          name: 'Sugar',
          measure: '45g',
          id: 26,
        },
        {
          name: 'Peanut Butter',
          measure: '3 tbs',
          id: 27,
        },
      ],
    },
    {
      id: 4,
      name: 'Ayam Percik',
      category: 'Chicken',
      instructions:
        "In a blender, add the ingredients for the spice paste and blend until smooth.\r\nOver medium heat, pour the spice paste in a skillet or pan and fry for 10 minutes until fragrant. Add water or oil 1 tablespoon at a time if the paste becomes too dry. Don't burn the paste. Lower the fire slightly if needed.\r\nAdd the cloves, cardamom, tamarind pulp, coconut milk, water, sugar and salt. Turn the heat up and bring the mixture to boil. Turn the heat to medium low and simmer for 10 minutes. Stir occasionally. It will reduce slightly. This is the marinade/sauce, so taste and adjust seasoning if necessary. Don't worry if it's slightly bitter. It will go away when roasting.\r\nWhen the marinade/sauce has cooled, pour everything over the chicken and marinate overnight to two days.\r\nPreheat the oven to 425 F.\r\nRemove the chicken from the marinade. Spoon the marinade onto a greased (or aluminum lined) baking sheet. Lay the chicken on top of the sauce (make sure the chicken covers the sauce and the sauce isn't exposed or it'll burn) and spread the remaining marinade on the chicken. Roast for 35-45 minutes or until internal temp of the thickest part of chicken is at least 175 F.\r\nLet chicken rest for 5 minutes. Brush the chicken with some of the oil. Serve chicken with the sauce over steamed rice (or coconut rice).",
      image: '020z181619788503.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Chicken Thighs',
          measure: '6',
          id: 28,
        },
        {
          name: 'Challots',
          measure: '16',
          id: 29,
        },
        {
          name: 'Ginger',
          measure: '1 1/2',
          id: 30,
        },
        {
          name: 'Garlic Clove',
          measure: '6',
          id: 31,
        },
        {
          name: 'Cayenne Pepper',
          measure: '8',
          id: 32,
        },
        {
          name: 'Turmeric',
          measure: '2 tbs',
          id: 33,
        },
        {
          name: 'Cumin',
          measure: '1 1/2',
          id: 34,
        },
        {
          name: 'Coriander',
          measure: '1 1/2',
          id: 35,
        },
        {
          name: 'Fennel',
          measure: '1 1/2',
          id: 36,
        },
        {
          name: 'Tamarind Paste',
          measure: '2 tbs',
          id: 37,
        },
        {
          name: 'Coconut Milk',
          measure: '1 can',
          id: 38,
        },
        {
          name: 'Sugar',
          measure: '1 tsp',
          id: 39,
        },
        {
          name: 'Water',
          measure: '1 cup',
          id: 40,
        },
      ],
    },
    {
      id: 5,
      name: 'Bakewell tart',
      category: 'Dessert',
      instructions:
        'To make the pastry, measure the flour into a bowl and rub in the butter with your fingertips until the mixture resembles fine breadcrumbs. Add the water, mixing to form a soft dough.\r\nRoll out the dough on a lightly floured work surface and use to line a 20cm/8in flan tin. Leave in the fridge to chill for 30 minutes.\r\nPreheat the oven to 200C/400F/Gas 6 (180C fan).\r\nLine the pastry case with foil and fill with baking beans. Bake blind for about 15 minutes, then remove the beans and foil and cook for a further five minutes to dry out the base.\r\nFor the filing, spread the base of the flan generously with raspberry jam.\r\nMelt the butter in a pan, take off the heat and then stir in the sugar. Add ground almonds, egg and almond extract. Pour into the flan tin and sprinkle over the flaked almonds.\r\nBake for about 35 minutes. If the almonds seem to be browning too quickly, cover the tart loosely with foil to prevent them burning.',
      image: 'wyrqqq1468233628.jpg',
      tags: 'Tart,Baking,Alcoholic',
      ingredients: [
        {
          name: 'plain flour',
          measure: '175g/6oz',
          id: 41,
        },
        {
          name: 'chilled butter',
          measure: '75g/2½oz',
          id: 42,
        },
        {
          name: 'cold water',
          measure: '2-3 tbsp',
          id: 43,
        },
        {
          name: 'raspberry jam',
          measure: '1 tbsp',
          id: 44,
        },
        {
          name: 'butter',
          measure: '125g/4½oz',
          id: 45,
        },
        {
          name: 'caster sugar',
          measure: '125g/4½oz',
          id: 46,
        },
        {
          name: 'ground almonds',
          measure: '125g/4½oz',
          id: 47,
        },
        {
          name: 'free-range egg, beaten',
          measure: '1',
          id: 48,
        },
        {
          name: 'almond extract',
          measure: '½ tsp',
          id: 49,
        },
        {
          name: 'flaked almonds',
          measure: '50g/1¾oz',
          id: 50,
        },
      ],
    },
    {
      id: 6,
      name: 'Bread and Butter Pudding',
      category: 'Dessert',
      instructions:
        "Grease a 1 litre/2 pint pie dish with butter.\r\nCut the crusts off the bread. Spread each slice with on one side with butter, then cut into triangles.\r\nArrange a layer of bread, buttered-side up, in the bottom of the dish, then add a layer of sultanas. Sprinkle with a little cinnamon, then repeat the layers of bread and sultanas, sprinkling with cinnamon, until you have used up all of the bread. Finish with a layer of bread, then set aside.\r\nGently warm the milk and cream in a pan over a low heat to scalding point. Don't let it boil.\r\nCrack the eggs into a bowl, add three quarters of the sugar and lightly whisk until pale.\r\nAdd the warm milk and cream mixture and stir well, then strain the custard into a bowl.\r\nPour the custard over the prepared bread layers and sprinkle with nutmeg and the remaining sugar and leave to stand for 30 minutes.\r\nPreheat the oven to 180C/355F/Gas 4.\r\nPlace the dish into the oven and bake for 30-40 minutes, or until the custard has set and the top is golden-brown.",
      image: 'xqwwpy1483908697.jpg',
      tags: 'Pudding,Brunch',
      ingredients: [
        {
          name: 'butter',
          measure: '25g/1oz',
          id: 51,
        },
        {
          name: 'bread',
          measure: '8 thin slices',
          id: 52,
        },
        {
          name: 'sultanas',
          measure: '50g/2oz',
          id: 53,
        },
        {
          name: 'cinnamon',
          measure: '2 tsp',
          id: 54,
        },
        {
          name: 'milk',
          measure: '350ml/12fl',
          id: 55,
        },
        {
          name: 'double cream',
          measure: '50ml/2fl oz',
          id: 56,
        },
        {
          name: 'eggs',
          measure: '2 free-range',
          id: 57,
        },
        {
          name: 'sugar',
          measure: '25g/1oz',
          id: 58,
        },
        {
          name: 'nutmeg',
          measure: 'grated, to taste',
          id: 59,
        },
      ],
    },
    {
      id: 7,
      name: 'Beef Wellington',
      category: 'Beef',
      instructions:
        "Put the mushrooms into a food processor with some seasoning and pulse to a rough paste. Scrape the paste into a pan and cook over a high heat for about 10 mins, tossing frequently, to cook out the moisture from the mushrooms. Spread out on a plate to cool.\r\nHeat in a frying pan and add a little olive oil. Season the beef and sear in the hot pan for 30 secs only on each side. (You don't want to cook it at this stage, just colour it). Remove the beef from the pan and leave to cool, then brush all over with the mustard.\r\nLay a sheet of cling film on a work surface and arrange the Parma ham slices on it, in slightly overlapping rows. With a palette knife, spread the mushroom paste over the ham, then place the seared beef fillet in the middle. Keeping a tight hold of the cling film from the edge, neatly roll the Parma ham and mushrooms around the beef to form a tight barrel shape. Twist the ends of the cling film to secure. Chill for 15-20 mins to allow the beef to set and keep its shape.\r\nRoll out the puff pastry on a floured surface to a large rectangle, the thickness of a £1 coin. Remove the cling film from the beef, then lay in the centre. Brush the surrounding pastry with egg yolk. Fold the ends over, the wrap the pastry around the beef, cutting off any excess. Turn over, so the seam is underneath, and place on a baking sheet. Brush over all the pastry with egg and chill for about 15 mins to let the pastry rest.\r\nHeat the oven to 200C, 400F, gas 6.\r\nLightly score the pastry at 1cm intervals and glaze again with beaten egg yolk. Bake for 20 minutes, then lower the oven setting to 180C, 350F, gas 4 and cook for another 15 mins. Allow to rest for 10-15 mins before slicing and serving with the side dishes of your choice. The beef should still be pink in the centre when you serve it.",
      image: 'vvpprx1487325699.jpg',
      tags: 'Meat,Stew',
      ingredients: [
        {
          name: 'mushrooms',
          measure: '400g',
          id: 60,
        },
        {
          name: 'English Mustard',
          measure: '1-2tbsp',
          id: 61,
        },
        {
          name: 'Olive Oil',
          measure: 'Dash',
          id: 62,
        },
        {
          name: 'Beef Fillet',
          measure: '750g piece',
          id: 63,
        },
        {
          name: 'Parma ham',
          measure: '6-8 slices',
          id: 64,
        },
        {
          name: 'Puff Pastry',
          measure: '500g',
          id: 65,
        },
        {
          name: 'Flour',
          measure: 'Dusting',
          id: 66,
        },
        {
          name: 'Egg Yolks',
          measure: '2 Beaten',
          id: 67,
        },
      ],
    },
    {
      id: 8,
      name: 'Baingan Bharta',
      category: 'Vegetarian',
      instructions:
        "Rinse the baingan (eggplant or aubergine) in water. Pat dry with a kitchen napkin. Apply some oil all over and\r\nkeep it for roasting on an open flame. You can also grill the baingan or roast in the oven. But then you won't get\r\nthe smoky flavor of the baingan. Keep the eggplant turning after a 2 to 3 minutes on the flame, so that its evenly\r\ncooked. You could also embed some garlic cloves in the baingan and then roast it.\r\n2. Roast the aubergine till its completely cooked and tender. With a knife check the doneness. The knife should slid\r\neasily in aubergines without any resistance. Remove the baingan and immerse in a bowl of water till it cools\r\ndown.\r\n3. You can also do the dhungar technique of infusing charcoal smoky flavor in the baingan. This is an optional step.\r\nUse natural charcoal for this method. Heat a small piece of charcoal on flame till it becomes smoking hot and red.\r\n4. Make small cuts on the baingan with a knife. Place the red hot charcoal in the same plate where the roasted\r\naubergine is kept. Add a few drops of oil on the charcoal. The charcoal would begin to smoke.\r\n5. As soon as smoke begins to release from the charcoal, cover the entire plate tightly with a large bowl. Allow the\r\ncharcoal smoke to get infused for 1 to 2 minutes. The more you do, the more smoky the baingan bharta will\r\nbecome. I just keep for a minute. Alternatively, you can also do this dhungar method once the baingan bharta is\r\ncooked, just like the way we do for Dal Tadka.\r\n6. Peel the skin from the roasted and smoked eggplant.\r\n7. Chop the cooked eggplant finely or you can even mash it.\r\n8. In a kadai or pan, heat oil. Then add finely chopped onions and garlic.\r\n9. Saute the onions till translucent. Don't brown them.\r\n10. Add chopped green chilies and saute for a minute.\r\n11. Add the chopped tomatoes and mix it well.\r\n12. Bhuno (saute) the tomatoes till the oil starts separating from the mixture.\r\n13. Now add the red chili powder. Stir and mix well.\r\n14. Add the chopped cooked baingan.\r\n15. Stir and mix the chopped baingan very well with the onion­tomato masala mixture.\r\n16. Season with salt. Stir and saute for some more 4 to 5 minutes more.\r\n17. Finally stir in the coriander leaves with the baingan bharta or garnish it with them. Serve Baingan Bharta with\r\nphulkas, rotis or chapatis. It goes well even with bread, toasted or grilled bread and plain rice or jeera rice.",
      image: 'urtpqw1487341253.jpg',
      tags: 'Spicy,Bun,Calorific',
      ingredients: [
        {
          name: 'Aubergine',
          measure: '1 large',
          id: 68,
        },
        {
          name: 'Onion',
          measure: '½ cup',
          id: 69,
        },
        {
          name: 'Tomatoes',
          measure: '1 cup',
          id: 70,
        },
        {
          name: 'Garlic',
          measure: '6 cloves',
          id: 71,
        },
        {
          name: 'Green Chilli',
          measure: '1',
          id: 72,
        },
        {
          name: 'Red Chilli Powder',
          measure: '¼ teaspoon',
          id: 73,
        },
        {
          name: 'Oil',
          measure: '1.5 tablespoon',
          id: 74,
        },
        {
          name: 'Coriander Leaves',
          measure: '1 tablespoon chopped',
          id: 75,
        },
        {
          name: 'salt',
          measure: 'as required',
          id: 76,
        },
      ],
    },
    {
      id: 9,
      name: 'Beef Brisket Pot Roast',
      category: 'Beef',
      instructions:
        '1 Prepare the brisket for cooking: On one side of the brisket there should be a layer of fat, which you want. If there are any large chunks of fat, cut them off and discard them. Large pieces of fat will not be able to render out completely.\r\nUsing a sharp knife, score the fat in parallel lines, about 3/4-inch apart. Slice through the fat, not the beef. Repeat in the opposite direction to make a cross-hatch pattern.\r\nSalt the brisket well and let it sit at room temperature for 30 minutes.\r\n \r\n2 Sear the brisket: You\'ll need an oven-proof, thick-bottomed pot with a cover, or Dutch oven, that is just wide enough to hold the brisket roast with a little room for the onions.\r\nPat the brisket dry and place it, fatty side down, into the pot and place it on medium high heat. Cook for 5-8 minutes, lightly sizzling, until the fat side is nicely browned. (If the roast seems to be cooking too fast, turn the heat down to medium. You want a steady sizzle, not a raging sear.)\r\nTurn the brisket over and cook for a few minutes more to brown the other side.\r\n\r\n3 Sauté the onions and garlic: When the brisket has browned, remove it from the pot and set aside. There should be a couple tablespoons of fat rendered in the pot, if not, add some olive oil.\r\nAdd the chopped onions and increase the heat to high. Sprinkle a little salt on the onions. Sauté, stirring often, until the onions are lightly browned, 5-8 minutes. Stir in the garlic and cook 1-2 more minutes.\r\n \r\n4 Return brisket to pot, add herbs, stock, bring to simmer, cover, cook in oven: Preheat the oven to 300°F. Use kitchen twine to tie together the bay leaves, rosemary and thyme.\r\nMove the onions and garlic to the sides of the pot and nestle the brisket inside. Add the beef stock and the tied-up herbs. Bring the stock to a boil on the stovetop.\r\nCover the pot, place the pot in the 300°F oven and cook for 3 hours. Carefully flip the brisket every hour so it cooks evenly.\r\n \r\n5 Add carrots, continue to cook: After 3 hours, add the carrots. Cover the pot and cook for 1 hour more, or until the carrots are cooked through and the brisket is falling-apart tender.\r\n6 Remove brisket to cutting board, tent with foil: When the brisket is falling-apart tender, take the pot out of the oven and remove the brisket to a cutting board. Cover it with foil. Pull out and discard the herbs.\r\n7 Make sauce (optional): At this point you have two options. You can serve as is, or you can make a sauce with the drippings and some of the onions. If you serve as is, skip this step.\r\nTo make a sauce, remove the carrots and half of the onions, set aside and cover them with foil. Pour the ingredients that are remaining into the pot into a blender, and purée until smooth. If you want, add 1 tablespoon of mustard to the mix. Put into a small pot and keep warm.\r\n8 Slice the meat across the grain: Notice the lines of the muscle fibers of the roast. This is the "grain" of the meat. Slice the meat perpendicular to these lines, or across the grain (cutting this way further tenderizes the meat), in 1/4-inch to 1/2-inch slices.\r\nServe with the onions, carrots and gravy. Serve with mashed, roasted or boiled potatoes, egg noodles or polenta.',
      image: 'ursuup1487348423.jpg',
      tags: 'Meat',
      ingredients: [
        {
          name: 'Beef Brisket',
          measure: '4-5 pound',
          id: 77,
        },
        {
          name: 'Salt',
          measure: 'Dash',
          id: 78,
        },
        {
          name: 'Onion',
          measure: '3',
          id: 79,
        },
        {
          name: 'Garlic',
          measure: '5 cloves',
          id: 80,
        },
        {
          name: 'Thyme',
          measure: '1 Sprig',
          id: 81,
        },
        {
          name: 'Rosemary',
          measure: '1 sprig',
          id: 82,
        },
        {
          name: 'Bay Leaves',
          measure: '4',
          id: 83,
        },
        {
          name: 'beef stock',
          measure: '2 cups',
          id: 84,
        },
        {
          name: 'Carrots',
          measure: '3 Large',
          id: 85,
        },
        {
          name: 'Mustard',
          measure: '1 Tbsp',
          id: 86,
        },
        {
          name: 'Potatoes',
          measure: '4 Mashed',
          id: 87,
        },
      ],
    },
    {
      id: 10,
      name: 'Beef Sunday Roast',
      category: 'Beef',
      instructions:
        'Cook the Broccoli and Carrots in a pan of boiling water until tender.\r\n\r\nRoast the Beef and Potatoes in the oven for 45mins, the potatoes may need to be checked regularly to not overcook.\r\n\r\nTo make the Yorkshire puddings:\r\nHeat oven to 230C/fan 210C/gas 8. Drizzle a little sunflower oil evenly into 2 x 4-hole Yorkshire pudding tins or a 12-hole non-stick muffin tin and place in the oven to heat through\r\nTo make the batter, tip 140g plain flour into a bowl and beat in four eggs until smooth. Gradually add 200ml milk and carry on beating until the mix is completely lump-free. Season with salt and pepper. Pour the batter into a jug, then remove the hot tins from the oven. Carefully and evenly pour the batter into the holes. Place the tins back in the oven and leave undisturbed for 20-25 mins until the puddings have puffed up and browned. Serve immediately.\r\n\r\nPlate up and add the Gravy as desired.',
      image: 'ssrrrs1503664277.jpg',
      tags: 'MainMeal',
      ingredients: [
        {
          name: 'Beef',
          measure: '8 slices',
          id: 88,
        },
        {
          name: 'Broccoli',
          measure: '12 florets',
          id: 89,
        },
        {
          name: 'Potatoes',
          measure: '1 Packet',
          id: 90,
        },
        {
          name: 'Carrots',
          measure: '1 Packet',
          id: 91,
        },
        {
          name: 'plain flour',
          measure: '140g',
          id: 92,
        },
        {
          name: 'Eggs',
          measure: '4',
          id: 93,
        },
        {
          name: 'milk',
          measure: '200ml',
          id: 94,
        },
        {
          name: 'sunflower oil',
          measure: 'drizzle (for cooking)',
          id: 95,
        },
      ],
    },
    {
      id: 11,
      name: 'Braised Beef Chilli',
      category: 'Beef',
      instructions:
        'Preheat the oven to 120C/225F/gas mark 1.\r\n\r\nTake the meat out of the fridge to de-chill. Pulse the onions and garlic in a food processor until finely chopped. Heat 2 tbsp olive oil in a large casserole and sear the meat on all sides until golden.\r\n\r\nSet to one side and add another small slug of oil to brown the chorizo. Remove and add the onion and garlic, spices, herbs and chillies then cook until soft in the chorizo oil. Season with salt and pepper and add the vinegar, tomatoes, ketchup and sugar.\r\n\r\nPut all the meat back into the pot with 400ml water (or red wine if you prefer), bring up to a simmer and cook, covered, in the low oven.\r\n\r\nAfter 2 hours, check the meat and add the beans. Cook for a further hour and just before serving, pull the meat apart with a pair of forks.',
      image: 'uuqvwu1504629254.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Beef',
          measure: '1kg',
          id: 96,
        },
        {
          name: 'Onions',
          measure: '3',
          id: 97,
        },
        {
          name: 'Garlic',
          measure: '4 cloves',
          id: 98,
        },
        {
          name: 'Olive oil',
          measure: 'Dash',
          id: 99,
        },
        {
          name: 'Chorizo',
          measure: '300g',
          id: 100,
        },
        {
          name: 'Cumin',
          measure: '2 tsp',
          id: 101,
        },
        {
          name: 'All spice',
          measure: '2 tsp',
          id: 102,
        },
        {
          name: 'Cloves',
          measure: '1 tsp',
          id: 103,
        },
        {
          name: 'Cinnamon stick',
          measure: '1 large',
          id: 104,
        },
        {
          name: 'Bay Leaves',
          measure: '3',
          id: 105,
        },
        {
          name: 'Oregano',
          measure: '2 tsp dried',
          id: 106,
        },
        {
          name: 'Ancho Chillies',
          measure: '2 ancho',
          id: 107,
        },
        {
          name: 'Balsamic Vinegar',
          measure: '3 tbsp',
          id: 108,
        },
        {
          name: 'Plum Tomatoes',
          measure: '2 x 400g',
          id: 109,
        },
        {
          name: 'Tomato Ketchup',
          measure: '2 tbsp',
          id: 110,
        },
        {
          name: 'Dark Brown Sugar',
          measure: '2 tbsp',
          id: 111,
        },
        {
          name: 'Borlotti Beans',
          measure: '2 x 400g tins',
          id: 112,
        },
      ],
    },
    {
      id: 12,
      name: 'Beef stroganoff',
      category: 'Beef',
      instructions:
        'Heat the olive oil in a non-stick frying pan then add the sliced onion and cook on a medium heat until completely softened, so around 15 mins, adding a little splash of water if they start to stick at all. Crush in the garlic and cook for a 2-3 mins further, then add the butter. Once the butter is foaming a little, add the mushrooms and cook for around 5 mins until completely softened. Season everything well, then tip onto a plate.\r\nTip the flour into a bowl with a big pinch of salt and pepper, then toss the steak in the seasoned flour. Add the steak pieces to the pan, splashing in a little oil if the pan looks particularly dry, and fry for 3-4 mins, until well coloured. Tip the onions and mushrooms back into the pan. Whisk the crème fraîche, mustard and beef stock together, then pour into the pan. Cook over a medium heat for around 5 mins. Scatter with parsley, then serve with pappardelle or rice.',
      image: 'svprys1511176755.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Olive Oil',
          measure: '1 tbls',
          id: 113,
        },
        {
          name: 'Onions',
          measure: '1',
          id: 114,
        },
        {
          name: 'Garlic',
          measure: '1 clove',
          id: 115,
        },
        {
          name: 'Butter',
          measure: '1 tbsp',
          id: 116,
        },
        {
          name: 'Mushrooms',
          measure: '250g',
          id: 117,
        },
        {
          name: 'Beef Fillet',
          measure: '500g',
          id: 118,
        },
        {
          name: 'Plain Flour',
          measure: '1tbsp',
          id: 119,
        },
        {
          name: 'Creme Fraiche',
          measure: '150g',
          id: 120,
        },
        {
          name: 'English Mustard',
          measure: '1 tbsp',
          id: 121,
        },
        {
          name: 'Beef Stock',
          measure: '100ml',
          id: 122,
        },
        {
          name: 'Parsley',
          measure: 'Topping',
          id: 123,
        },
      ],
    },
    {
      id: 13,
      name: 'Broccoli & Stilton soup',
      category: 'Starter',
      instructions:
        'Heat the rapeseed oil in a large saucepan and then add the onions. Cook on a medium heat until soft. Add a splash of water if the onions start to catch.\r\n\r\nAdd the celery, leek, potato and a knob of butter. Stir until melted, then cover with a lid. Allow to sweat for 5 minutes. Remove the lid.\r\n\r\nPour in the stock and add any chunky bits of broccoli stalk. Cook for 10 – 15 minutes until all the vegetables are soft.\r\n\r\nAdd the rest of the broccoli and cook for a further 5 minutes. Carefully transfer to a blender and blitz until smooth. Stir in the stilton, allowing a few lumps to remain. Season with black pepper and serve.',
      image: 'tvvxpv1511191952.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Rapeseed Oil',
          measure: '2 tblsp',
          id: 124,
        },
        {
          name: 'Onion',
          measure: '1 finely chopped',
          id: 125,
        },
        {
          name: 'Celery',
          measure: '1',
          id: 126,
        },
        {
          name: 'Leek',
          measure: '1 sliced',
          id: 127,
        },
        {
          name: 'Potatoes',
          measure: '1 medium',
          id: 128,
        },
        {
          name: 'Butter',
          measure: '1 knob',
          id: 129,
        },
        {
          name: 'Vegetable Stock',
          measure: '1 litre hot',
          id: 130,
        },
        {
          name: 'Broccoli',
          measure: '1 Head chopped',
          id: 131,
        },
        {
          name: 'Stilton Cheese',
          measure: '140g',
          id: 132,
        },
      ],
    },
    {
      id: 14,
      name: 'Bean & Sausage Hotpot',
      category: 'Miscellaneous',
      instructions:
        'In a large casserole, fry the sausages until brown all over – about 10 mins.\r\n\r\nAdd the tomato sauce, stirring well, then stir in the beans, treacle or sugar and mustard. Bring to the simmer, cover and cook for 30 mins. Great served with crusty bread or rice.',
      image: 'vxuyrx1511302687.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Sausages',
          measure: '8 large',
          id: 133,
        },
        {
          name: 'Tomato Sauce',
          measure: '1 Jar',
          id: 134,
        },
        {
          name: 'Butter Beans',
          measure: '1200g',
          id: 135,
        },
        {
          name: 'Black Treacle',
          measure: '1 tbls',
          id: 136,
        },
        {
          name: 'English Mustard',
          measure: '1 tsp',
          id: 137,
        },
      ],
    },
    {
      id: 15,
      name: 'Banana Pancakes',
      category: 'Dessert',
      instructions:
        'In a bowl, mash the banana with a fork until it resembles a thick purée. Stir in the eggs, baking powder and vanilla.\r\nHeat a large non-stick frying pan or pancake pan over a medium heat and brush with half the oil. Using half the batter, spoon two pancakes into the pan, cook for 1-2 mins each side, then tip onto a plate. Repeat the process with the remaining oil and batter. Top the pancakes with the pecans and raspberries.',
      image: 'sywswr1511383814.jpg',
      tags: 'Breakfast,Desert,Sweet',
      ingredients: [
        {
          name: 'Banana',
          measure: '1 large',
          id: 138,
        },
        {
          name: 'Eggs',
          measure: '2 medium',
          id: 139,
        },
        {
          name: 'Baking Powder',
          measure: 'pinch',
          id: 140,
        },
        {
          name: 'Vanilla Extract',
          measure: 'spinkling',
          id: 141,
        },
        {
          name: 'Oil',
          measure: '1 tsp',
          id: 142,
        },
        {
          name: 'Pecan Nuts',
          measure: '25g',
          id: 143,
        },
        {
          name: 'Raspberries',
          measure: '125g',
          id: 144,
        },
      ],
    },
    {
      id: 16,
      name: 'Beef Dumpling Stew',
      category: 'Beef',
      instructions:
        'Preheat the oven to 180C/350F/Gas 4.\r\n\r\nFor the beef stew, heat the oil and butter in an ovenproof casserole and fry the beef until browned on all sides.\r\n\r\nSprinkle over the flour and cook for a further 2-3 minutes.\r\n\r\nAdd the garlic and all the vegetables and fry for 1-2 minutes.\r\n\r\nStir in the wine, stock and herbs, then add the Worcestershire sauce and balsamic vinegar, to taste. Season with salt and freshly ground black pepper.\r\n\r\nCover with a lid, transfer to the oven and cook for about two hours, or until the meat is tender.\r\n\r\nFor the dumplings, sift the flour, baking powder and salt into a bowl.\r\nAdd the suet and enough water to form a thick dough.\r\n\r\nWith floured hands, roll spoonfuls of the dough into small balls.\r\n\r\nAfter two hours, remove the lid from the stew and place the balls on top of the stew. Cover, return to the oven and cook for a further 20 minutes, or until the dumplings have swollen and are tender. (If you prefer your dumplings with a golden top, leave the lid off when returning to the oven.)\r\n\r\nTo serve, place a spoonful of mashed potato onto each of four serving plates and top with the stew and dumplings. Sprinkle with chopped parsley.',
      image: 'uyqrrv1511553350.jpg',
      tags: 'Stew,Baking',
      ingredients: [
        {
          name: 'Olive Oil',
          measure: '2 tbs',
          id: 145,
        },
        {
          name: 'Butter',
          measure: '25g',
          id: 146,
        },
        {
          name: 'Beef',
          measure: '750g',
          id: 147,
        },
        {
          name: 'Plain Flour',
          measure: '2 tblsp',
          id: 148,
        },
        {
          name: 'Garlic',
          measure: '2 cloves minced',
          id: 149,
        },
        {
          name: 'Onions',
          measure: '175g',
          id: 150,
        },
        {
          name: 'Celery',
          measure: '150g',
          id: 151,
        },
        {
          name: 'Carrots',
          measure: '150g',
          id: 152,
        },
        {
          name: 'Leek',
          measure: '2 chopped',
          id: 153,
        },
        {
          name: 'Swede',
          measure: '200g',
          id: 154,
        },
        {
          name: 'Red Wine',
          measure: '150ml',
          id: 155,
        },
        {
          name: 'Beef Stock',
          measure: '500g',
          id: 156,
        },
        {
          name: 'Bay Leaf',
          measure: '2',
          id: 157,
        },
        {
          name: 'Thyme',
          measure: '3 tbs',
          id: 158,
        },
        {
          name: 'Parsley',
          measure: '3 tblsp chopped',
          id: 159,
        },
        {
          name: 'Plain Flour',
          measure: '125g',
          id: 160,
        },
        {
          name: 'Baking Powder',
          measure: '1 tsp',
          id: 161,
        },
        {
          name: 'Suet',
          measure: '60g',
          id: 162,
        },
        {
          name: 'Water',
          measure: 'Splash',
          id: 163,
        },
      ],
    },
    {
      id: 17,
      name: 'Beef and Mustard Pie',
      category: 'Beef',
      instructions:
        "Preheat the oven to 150C/300F/Gas 2.\r\nToss the beef and flour together in a bowl with some salt and black pepper.\r\nHeat a large casserole until hot, add half of the rapeseed oil and enough of the beef to just cover the bottom of the casserole.\r\nFry until browned on each side, then remove and set aside. Repeat with the remaining oil and beef.\r\nReturn the beef to the pan, add the wine and cook until the volume of liquid has reduced by half, then add the stock, onion, carrots, thyme and mustard, and season well with salt and pepper.\r\nCover with a lid and place in the oven for two hours.\r\nRemove from the oven, check the seasoning and set aside to cool. Remove the thyme.\r\nWhen the beef is cool and you're ready to assemble the pie, preheat the oven to 200C/400F/Gas 6.\r\nTransfer the beef to a pie dish, brush the rim with the beaten egg yolks and lay the pastry over the top. Brush the top of the pastry with more beaten egg.\r\nTrim the pastry so there is just enough excess to crimp the edges, then place in the oven and bake for 30 minutes, or until the pastry is golden-brown and cooked through.\r\nFor the green beans, bring a saucepan of salted water to the boil, add the beans and cook for 4-5 minutes, or until just tender.\r\nDrain and toss with the butter, then season with black pepper.\r\nTo serve, place a large spoonful of pie onto each plate with some green beans alongside.",
      image: 'sytuqu1511553755.jpg',
      tags: 'Meat,Pie',
      ingredients: [
        {
          name: 'Beef',
          measure: '1kg',
          id: 164,
        },
        {
          name: 'Plain Flour',
          measure: '2 tbs',
          id: 165,
        },
        {
          name: 'Rapeseed Oil',
          measure: '2 tbs',
          id: 166,
        },
        {
          name: 'Red Wine',
          measure: '200ml',
          id: 167,
        },
        {
          name: 'Beef Stock',
          measure: '400ml',
          id: 168,
        },
        {
          name: 'Onion',
          measure: '1 finely sliced',
          id: 169,
        },
        {
          name: 'Carrots',
          measure: '2 chopped',
          id: 170,
        },
        {
          name: 'Thyme',
          measure: '3 sprigs',
          id: 171,
        },
        {
          name: 'Mustard',
          measure: '2 tbs',
          id: 172,
        },
        {
          name: 'Egg Yolks',
          measure: '2 free-range',
          id: 173,
        },
        {
          name: 'Puff Pastry',
          measure: '400g',
          id: 174,
        },
        {
          name: 'Green Beans',
          measure: '300g',
          id: 175,
        },
        {
          name: 'Butter',
          measure: '25g',
          id: 176,
        },
        {
          name: 'Salt',
          measure: 'pinch',
          id: 177,
        },
        {
          name: 'Pepper',
          measure: 'pinch',
          id: 178,
        },
      ],
    },
    {
      id: 18,
      name: 'Beef and Oyster pie',
      category: 'Beef',
      instructions:
        'Season the beef cubes with salt and black pepper. Heat a tablespoon of oil in the frying pan and fry the meat over a high heat. Do this in three batches so that you don’t overcrowd the pan, transferring the meat to a large flameproof casserole dish once it is browned all over. Add extra oil if the pan seems dry.\r\nIn the same pan, add another tablespoon of oil and cook the shallots for 4-5 minutes, then add the garlic and fry for 30 seconds. Add the bacon and fry until slightly browned. Transfer the onion and bacon mixture to the casserole dish and add the herbs.\r\nPreheat the oven to 180C/350F/Gas 4.\r\nPour the stout into the frying pan and bring to the boil, stirring to lift any stuck-on browned bits from the bottom of the pan. Pour the stout over the beef in the casserole dish and add the stock. Cover the casserole and place it in the oven for 1½-2 hours, or until the beef is tender and the sauce is reduced.\r\nSkim off any surface fat, taste and add salt and pepper if necessary, then stir in the cornflour paste. Put the casserole dish on the hob – don’t forget that it will be hot – and simmer for 1-2 minutes, stirring, until thickened. Leave to cool.\r\nIncrease the oven to 200C/400F/Gas 6. To make the pastry, put the flour and salt in a very large bowl. Grate the butter and stir it into the flour in three batches. Gradually add 325ml/11fl oz cold water – you may not need it all – and stir with a round-bladed knife until the mixture just comes together. Knead the pastry lightly into a ball on a lightly floured surface and set aside 250g/9oz for the pie lid.\r\nRoll the rest of the pastry out until about 2cm/¾in larger than the dish you’re using. Line the dish with the pastry then pile in the filling, tucking the oysters in as well. Brush the edge of the pastry with beaten egg.\r\nRoll the remaining pastry until slightly larger than your dish and gently lift over the filling, pressing the edges firmly to seal, then trim with a sharp knife. Brush with beaten egg to glaze. Put the dish on a baking tray and bake for 25-30 minutes, or until the pastry is golden-brown and the filling is bubbling.',
      image: 'wrssvt1511556563.jpg',
      tags: 'Pie',
      ingredients: [
        {
          name: 'Beef',
          measure: '900g',
          id: 179,
        },
        {
          name: 'Olive Oil',
          measure: '3 tbs',
          id: 180,
        },
        {
          name: 'Shallots',
          measure: '3',
          id: 181,
        },
        {
          name: 'Garlic',
          measure: '2 cloves minced',
          id: 182,
        },
        {
          name: 'Bacon',
          measure: '125g',
          id: 183,
        },
        {
          name: 'Thyme',
          measure: '1 tbs chopped',
          id: 184,
        },
        {
          name: 'Bay Leaf',
          measure: '2',
          id: 185,
        },
        {
          name: 'Stout',
          measure: '330ml',
          id: 186,
        },
        {
          name: 'Beef Stock',
          measure: '400ml',
          id: 187,
        },
        {
          name: 'Corn Flour',
          measure: '2 tbs',
          id: 188,
        },
        {
          name: 'Oysters',
          measure: '8',
          id: 189,
        },
        {
          name: 'Plain Flour',
          measure: '400g',
          id: 190,
        },
        {
          name: 'Salt',
          measure: 'pinch',
          id: 191,
        },
        {
          name: 'Butter',
          measure: '250g',
          id: 192,
        },
        {
          name: 'Eggs',
          measure: 'To Glaze',
          id: 193,
        },
      ],
    },
    {
      id: 19,
      name: 'Blackberry Fool',
      category: 'Dessert',
      instructions:
        'For the biscuits, preheat the oven to 200C/180C (fan)/Gas 6 and line two large baking trays with baking parchment. Scatter the nuts over a baking tray and roast in the oven for 6-8 minutes, or until golden-brown. Watch them carefully so that they don’t have a chance to burn. Remove from the oven, tip onto a board and leave to cool.\r\nPut the butter and sugar in a large bowl and beat with a wooden spoon until light and creamy. Roughly chop the cooled nuts and add to the creamed butter and sugar, along with the lemon zest, flour and baking powder. Stir well until the mixture comes together and forms a ball – you may need to use your hands.\r\nDivide the biscuit dough into 24 even pieces and roll into small balls. Place the balls the prepared baking trays, spaced well apart to allow for spreading.\r\nPress the biscuits to flatten to around 1cm/½in thick. Bake the biscuits, one tray at a time, for 12 minutes or until very pale golden-brown. Leave to cool on the trays. They will be very soft when you take them out of the oven, but will crisp as they cool.\r\nStore in an airtight tin and eat within five days.\r\nFor the fool, rinse the blackberries in a colander to wash away any dust or dirt. Put the blackberries in a non-stick saucepan and sprinkle over the caster sugar.\r\nStir in the lemon juice and heat gently for two minutes, or until the blackberries begin to soften and release their juices. Remove and reserve 12 blackberries for decoration and continue cooking the rest.\r\nSimmer the blackberries very gently for 15 minutes, stirring regularly until very soft and squidgy. Remove from the heat and press the berries and juice through a sieve over a bowl, using the bottom of a ladle to help you extract as much of the purée as possible. Leave the purée to cool and discard the seeds. You should end up with around 325ml/11fl oz of purée.\r\nPut the cream and yoghurt in a large bowl and whip with an electric whisk until soft peaks form when the whisk is removed from the bowl – the acidity of the fruit will thicken the cream further, so don’t take it too far.\r\nWhen the purée is completely cold, adjust the sweetness to taste by adding more sugar if needed. Pour it into the bowl with the whipped cream and yoghurt and stir just once or twice until very lightly combined.\r\nSpoon the blackberry fool into individual wide, glass dishes – or one large, single bowl. It should look quite marbled, so don’t over-stir it. Scatter a few tiny mint leaves on top and decorate with the reserved blackberries. Sprinkle with a little sugar if you like and serve with the hazelnut biscuits.',
      image: 'rpvptu1511641092.jpg',
      tags: 'Desert,Summer,Fruity,Dairy',
      ingredients: [
        {
          name: 'Hazlenuts',
          measure: '50g',
          id: 194,
        },
        {
          name: 'Butter',
          measure: '125g',
          id: 195,
        },
        {
          name: 'Caster Sugar',
          measure: '150g',
          id: 196,
        },
        {
          name: 'Lemon',
          measure: 'Grated',
          id: 197,
        },
        {
          name: 'Plain Flour',
          measure: '150g',
          id: 198,
        },
        {
          name: 'Baking Powder',
          measure: '½ tsp',
          id: 199,
        },
        {
          name: 'Blackberrys',
          measure: '600g',
          id: 200,
        },
        {
          name: 'Sugar',
          measure: '75g',
          id: 201,
        },
        {
          name: 'Caster Sugar',
          measure: '2 tbs',
          id: 202,
        },
        {
          name: 'Lemon Juice',
          measure: '1 tbs',
          id: 203,
        },
        {
          name: 'Double Cream',
          measure: '300ml',
          id: 204,
        },
        {
          name: 'Yogurt',
          measure: '100ml',
          id: 205,
        },
        {
          name: 'Mint',
          measure: 'Garnish with',
          id: 206,
        },
      ],
    },
    {
      id: 20,
      name: 'Battenberg Cake',
      category: 'Dessert',
      instructions:
        'Heat oven to 180C/160C fan/gas 4 and line the base and sides of a 20cm square tin with baking parchment (the easiest way is to cross 2 x 20cm-long strips over the base). To make the almond sponge, put the butter, sugar, flour, ground almonds, baking powder, eggs, vanilla and almond extract in a large bowl. Beat with an electric whisk until the mix comes together smoothly. Scrape into the tin, spreading to the corners, and bake for 25-30 mins – when you poke in a skewer, it should come out clean. Cool in the tin for 10 mins, then transfer to a wire rack to finish cooling while you make the second sponge.\r\nFor the pink sponge, line the tin as above. Mix all the ingredients together as above, but don’t add the almond extract. Fold in some pink food colouring. Then scrape it all into the tin and bake as before. Cool.\r\nTo assemble, heat the jam in a small pan until runny, then sieve. Barely trim two opposite edges from the almond sponge, then well trim a third edge. Roughly measure the height of the sponge, then cutting from the well-trimmed edge, use a ruler to help you cut 4 slices each the same width as the sponge height. Discard or nibble leftover sponge. Repeat with pink cake.\r\nTake 2 x almond slices and 2 x pink slices and trim so they are all the same length. Roll out one marzipan block on a surface lightly dusted with icing sugar to just over 20cm wide, then keep rolling lengthways until the marzipan is roughly 0.5cm thick. Brush with apricot jam, then lay a pink and an almond slice side by side at one end of the marzipan, brushing jam in between to stick sponges, and leaving 4cm clear marzipan at the end. Brush more jam on top of the sponges, then sandwich remaining 2 slices on top, alternating colours to give a checkerboard effect. Trim the marzipan to the length of the cakes.\r\nCarefully lift up the marzipan and smooth over the cake with your hands, but leave a small marzipan fold along the bottom edge before you stick it to the first side. Trim opposite side to match size of fold, then crimp edges using fingers and thumb (or, more simply, press with prongs of fork). If you like, mark the 10 slices using the prongs of a fork.\r\nAssemble second Battenberg and keep in an airtight box or well wrapped in cling film for up to 3 days. Can be frozen for up to a month.',
      image: 'ywwrsp1511720277.jpg',
      tags: 'Cake,Sweet',
      ingredients: [
        {
          name: 'Butter',
          measure: '175g',
          id: 207,
        },
        {
          name: 'Caster Sugar',
          measure: '175g',
          id: 208,
        },
        {
          name: 'Self-raising Flour',
          measure: '140g',
          id: 209,
        },
        {
          name: 'Almonds',
          measure: '50g',
          id: 210,
        },
        {
          name: 'Baking Powder',
          measure: '½ tsp',
          id: 211,
        },
        {
          name: 'Eggs',
          measure: '3 Medium',
          id: 212,
        },
        {
          name: 'Vanilla Extract',
          measure: '½ tsp',
          id: 213,
        },
        {
          name: 'Almond Extract',
          measure: '¼ teaspoon',
          id: 214,
        },
        {
          name: 'Butter',
          measure: '175g',
          id: 215,
        },
        {
          name: 'Caster Sugar',
          measure: '175g',
          id: 216,
        },
        {
          name: 'Self-raising Flour',
          measure: '140g',
          id: 217,
        },
        {
          name: 'Almonds',
          measure: '50g',
          id: 218,
        },
        {
          name: 'Baking Powder',
          measure: '½ tsp',
          id: 219,
        },
        {
          name: 'Eggs',
          measure: '3 Medium',
          id: 220,
        },
        {
          name: 'Vanilla Extract',
          measure: '½ tsp',
          id: 221,
        },
        {
          name: 'Almond Extract',
          measure: '¼ teaspoon',
          id: 222,
        },
        {
          name: 'Pink Food Colouring',
          measure: '½ tsp',
          id: 223,
        },
        {
          name: 'Apricot',
          measure: '200g',
          id: 224,
        },
        {
          name: 'Marzipan',
          measure: '1kg',
          id: 225,
        },
        {
          name: 'Icing Sugar',
          measure: 'Dusting',
          id: 226,
        },
      ],
    },
    {
      id: 21,
      name: 'Beef Bourguignon',
      category: 'Beef',
      instructions:
        'Heat a large casserole pan and add 1 tbsp goose fat. Season the beef and fry until golden brown, about 3-5 mins, then turn over and fry the other side until the meat is browned all over, adding more fat if necessary. Do this in 2-3 batches, transferring the meat to a colander set over a bowl when browned.\r\nIn the same pan, fry the bacon, shallots or pearl onions, mushrooms, garlic and bouquet garni until lightly browned. Mix in the tomato purée and cook for a few mins, stirring into the mixture. This enriches the bourguignon and makes a great base for the stew. Then return the beef and any drained juices to the pan and stir through.\r\nPour over the wine and about 100ml water so the meat bobs up from the liquid, but isn’t completely covered. Bring to the boil and use a spoon to scrape the caramelised cooking juices from the bottom of the pan – this will give the stew more flavour.\r\nHeat oven to 150C/fan 130C/gas 2. Make a cartouche: tear off a square of foil slightly larger than the casserole, arrange it in the pan so it covers the top of the stew and trim away any excess foil. Then cook for 3 hrs. If the sauce looks watery, remove the beef and veg with a slotted spoon, and set aside. Cook the sauce over a high heat for a few mins until the sauce has thickened a little, then return the beef and vegetables to the pan.\r\nTo make the celeriac mash, peel the celeriac and cut into cubes. Heat the olive oil in a large frying pan. Tip in the celeriac and fry for 5 mins until it turns golden. Season well with salt and pepper. Stir in the rosemary, thyme, bay and cardamom pods, then pour over 200ml water, enough to nearly cover the celeriac. Turn the heat to low, partially cover the pan and leave to simmer for 25-30 mins.\r\nAfter 25-30 mins, the celeriac should be soft and most of the water will have evaporated. Drain away any remaining water, then remove the herb sprigs, bay and cardamom pods. Lightly crush with a potato masher, then finish with a glug of olive oil and season to taste. Spoon the beef bourguignon into serving bowls and place a large spoonful of the celeriac mash on top. Garnish with one of the bay leaves, if you like.',
      image: 'vtqxtu1511784197.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Goose Fat',
          measure: '3 tsp',
          id: 227,
        },
        {
          name: 'Beef Shin',
          measure: '600g',
          id: 228,
        },
        {
          name: 'Bacon',
          measure: '100g',
          id: 229,
        },
        {
          name: 'Challots',
          measure: '350g',
          id: 230,
        },
        {
          name: 'Chestnut Mushroom',
          measure: '250g',
          id: 231,
        },
        {
          name: 'Garlic Clove',
          measure: '2 sliced',
          id: 232,
        },
        {
          name: 'Bouquet Garni',
          measure: '1',
          id: 233,
        },
        {
          name: 'Tomato Puree',
          measure: '1 tbs',
          id: 234,
        },
        {
          name: 'Red Wine',
          measure: '750 ml',
          id: 235,
        },
        {
          name: 'Celeriac',
          measure: '600g',
          id: 236,
        },
        {
          name: 'Olive Oil',
          measure: '2 tbs',
          id: 237,
        },
        {
          name: 'Thyme',
          measure: 'sprigs of fresh',
          id: 238,
        },
        {
          name: 'Rosemary',
          measure: 'sprigs of fresh',
          id: 239,
        },
        {
          name: 'Bay Leaf',
          measure: '2',
          id: 240,
        },
        {
          name: 'Cardamom',
          measure: '4',
          id: 241,
        },
      ],
    },
    {
      id: 22,
      name: 'Brie wrapped in prosciutto & brioche',
      category: 'Side',
      instructions:
        'Mix the flour, 1 tsp salt, caster sugar, yeast, milk and eggs together in a mixer using the dough attachment for 5 mins until the dough is smooth. Add the butter and mix for a further 4 mins on medium speed. Scrape the dough bowl and mix again for 1 min. Place the dough in a container, cover with cling film and leave in the fridge for at least 6 hrs before using.\r\nWrap the Brie in the prosciutto and set aside. Turn out the dough onto a lightly floured surface. Roll into a 25cm circle. Place the wrapped Brie in the middle of the circle and fold the edges in neatly. Put the parcel onto a baking tray lined with baking parchment and brush with beaten egg. Chill in the fridge for 30 mins, then brush again with beaten egg and chill for a further 30 mins. Leave to rise for 1 hr at room temperature. Heat oven to 200C/180C fan/gas 6, then bake for 22 mins. Serve warm.',
      image: 'qqpwsy1511796276.jpg',
      tags: 'SideDish,Treat,Baking',
      ingredients: [
        {
          name: 'Plain Flour',
          measure: '375g',
          id: 242,
        },
        {
          name: 'Caster Sugar',
          measure: '50g',
          id: 243,
        },
        {
          name: 'Yeast',
          measure: '7g',
          id: 244,
        },
        {
          name: 'Milk',
          measure: '75g',
          id: 245,
        },
        {
          name: 'Eggs',
          measure: '3 Large',
          id: 246,
        },
        {
          name: 'Eggs',
          measure: 'To Glaze',
          id: 247,
        },
        {
          name: 'Butter',
          measure: '180g',
          id: 248,
        },
        {
          name: 'Brie',
          measure: '250g',
          id: 249,
        },
        {
          name: 'Prosciutto',
          measure: '8 slices',
          id: 250,
        },
      ],
    },
    {
      id: 23,
      name: 'Boulangère Potatoes',
      category: 'Side',
      instructions:
        'Heat oven to 200C/fan 180C/gas 6. Fry the onions and thyme sprigs in the oil until softened and lightly coloured (about 5 mins).\r\nSpread a layer of potatoes over the base of a 1.5-litre oiled gratin dish. Sprinkle over a few onions (see picture, above) and continue layering, finishing with a layer of potatoes. Pour over the stock and bake for 50-60 mins until the potatoes are cooked and the top is golden and crisp.',
      image: 'qywups1511796761.jpg',
      tags: 'SideDish',
      ingredients: [
        {
          name: 'Onions',
          measure: '2 finely chopped',
          id: 251,
        },
        {
          name: 'Thyme',
          measure: 'sprigs of fresh',
          id: 252,
        },
        {
          name: 'Olive Oil',
          measure: '2 tbs',
          id: 253,
        },
        {
          name: 'Potatoes',
          measure: '1.5kg',
          id: 254,
        },
        {
          name: 'Vegetable Stock',
          measure: '425g',
          id: 255,
        },
      ],
    },
    {
      id: 24,
      name: 'BeaverTails',
      category: 'Dessert',
      instructions:
        'In the bowl of a stand mixer, add warm water, a big pinch of sugar and yeast. Allow to sit until frothy.\r\nInto the same bowl, add 1/2 cup sugar, warm milk, melted butter, eggs and salt, and whisk until combined.\r\nPlace a dough hook on the mixer, add the flour with the machine on, until a smooth but slightly sticky dough forms.\r\nPlace dough in a bowl, cover with plastic wrap, and allow to proof for 1 1/2 hours.\r\nCut dough into 12 pieces, and roll out into long oval-like shapes about 1/4 inch thick that resemble a beaver’s tail.\r\nIn a large, deep pot, heat oil to 350 degrees. Gently place beavertail dough into hot oil and cook for 30 to 45 seconds on each side until golden brown.\r\nDrain on paper towels, and garnish as desired. Toss in cinnamon sugar, in white sugar with a squeeze of lemon, or with a generous slathering of Nutella and a handful of toasted almonds. Enjoy!',
      image: 'ryppsv1511815505.jpg',
      tags: 'Treat,Pudding,Speciality',
      ingredients: [
        {
          name: 'Water',
          measure: '1/2 cup',
          id: 256,
        },
        {
          name: 'Yeast',
          measure: '2 parts',
          id: 257,
        },
        {
          name: 'Sugar',
          measure: '1/2 cup',
          id: 258,
        },
        {
          name: 'Milk',
          measure: '1/2 cup',
          id: 259,
        },
        {
          name: 'Butter',
          measure: '6 tblsp',
          id: 260,
        },
        {
          name: 'Eggs',
          measure: '2',
          id: 261,
        },
        {
          name: 'Salt',
          measure: '1 ½ tsp',
          id: 262,
        },
        {
          name: 'Flour',
          measure: '2-1/2 cups',
          id: 263,
        },
        {
          name: 'Oil',
          measure: 'for frying',
          id: 264,
        },
        {
          name: 'Lemon',
          measure: 'garnish',
          id: 265,
        },
        {
          name: 'Sugar',
          measure: 'garnish',
          id: 266,
        },
        {
          name: 'Cinnamon',
          measure: 'garnish',
          id: 267,
        },
      ],
    },
    {
      id: 25,
      name: 'Brown Stew Chicken',
      category: 'Chicken',
      instructions:
        'Squeeze lime over chicken and rub well. Drain off excess lime juice.\r\nCombine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces. Cover and marinate at least one hour.\r\nHeat oil in a dutch pot or large saucepan. Shake off the seasonings as you remove each piece of chicken from the marinade. Reserve the marinade for sauce.\r\nLightly brown the chicken a few pieces at a time in very hot oil. Place browned chicken pieces on a plate to rest while you brown the remaining pieces.\r\nDrain off excess oil and return the chicken to the pan. Pour the marinade over the chicken and add the carrots. Stir and cook over medium heat for 10 minutes.\r\nMix flour and coconut milk and add to stew, stirring constantly. Turn heat down to minimum and cook another 20 minutes or until tender.',
      image: 'sypxpx1515365095.jpg',
      tags: 'Stew',
      ingredients: [
        {
          name: 'Chicken',
          measure: '1 whole',
          id: 268,
        },
        {
          name: 'Tomato',
          measure: '1 chopped',
          id: 269,
        },
        {
          name: 'Onions',
          measure: '2 chopped',
          id: 270,
        },
        {
          name: 'Garlic Clove',
          measure: '2 chopped',
          id: 271,
        },
        {
          name: 'Red Pepper',
          measure: '1 chopped',
          id: 272,
        },
        {
          name: 'Carrots',
          measure: '1 chopped',
          id: 273,
        },
        {
          name: 'Lime',
          measure: '1',
          id: 274,
        },
        {
          name: 'Thyme',
          measure: '2 tsp',
          id: 275,
        },
        {
          name: 'Allspice',
          measure: '1 tsp',
          id: 276,
        },
        {
          name: 'Soy Sauce',
          measure: '2 tbs',
          id: 277,
        },
        {
          name: 'Cornstarch',
          measure: '2 tsp',
          id: 278,
        },
        {
          name: 'Coconut Milk',
          measure: '2 cups',
          id: 279,
        },
        {
          name: 'Vegetable Oil',
          measure: '1 tbs',
          id: 280,
        },
      ],
    },
    {
      id: 26,
      name: 'Beef Lo Mein',
      category: 'Beef',
      instructions:
        'STEP 1 - MARINATING THE BEEF\r\nIn a bowl, add the beef, salt, 1 pinch white pepper, 1 Teaspoon sesame seed oil, 1/2 egg, corn starch,1 Tablespoon of oil and mix together.\r\nSTEP 2 - BOILING THE THE NOODLES\r\nIn a 6 qt pot add your noodles to boiling water until the noodles are submerged and boil on high heat for 10 seconds. After your noodles is done boiling strain and cool with cold water.\r\nSTEP 3 - STIR FRY\r\nAdd 2 Tablespoons of oil, beef and cook on high heat untill beef is medium cooked.\r\nSet the cooked beef aside\r\nIn a wok add 2 Tablespoon of oil, onions, minced garlic, minced ginger, bean sprouts, mushrooms, peapods and 1.5 cups of water or until the vegetables are submerged in water.\r\nAdd the noodles to wok\r\nTo make the sauce, add oyster sauce, 1 pinch white pepper, 1 teaspoon sesame seed oil, sugar, and 1 Teaspoon of soy sauce.\r\nNext add the beef to wok and stir-fry',
      image: '1529444830.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Beef',
          measure: '1/2 lb',
          id: 281,
        },
        {
          name: 'Salt',
          measure: 'pinch',
          id: 282,
        },
        {
          name: 'Pepper',
          measure: 'pinch',
          id: 283,
        },
        {
          name: 'Sesame Seed Oil',
          measure: '2 tsp',
          id: 284,
        },
        {
          name: 'Egg',
          measure: '1/2',
          id: 285,
        },
        {
          name: 'Starch',
          measure: '3 tbs',
          id: 286,
        },
        {
          name: 'Oil',
          measure: '5 tbs',
          id: 287,
        },
        {
          name: 'Noodles',
          measure: '1/4 lb',
          id: 288,
        },
        {
          name: 'Onion',
          measure: '1/2 cup',
          id: 289,
        },
        {
          name: 'Minced Garlic',
          measure: '1 tsp',
          id: 290,
        },
        {
          name: 'Ginger',
          measure: '1 tsp',
          id: 291,
        },
        {
          name: 'Bean Sprouts',
          measure: '1 cup',
          id: 292,
        },
        {
          name: 'Mushrooms',
          measure: '1 cup',
          id: 293,
        },
        {
          name: 'Water',
          measure: '1 cup',
          id: 294,
        },
        {
          name: 'Oyster Sauce',
          measure: '1 tbs',
          id: 295,
        },
        {
          name: 'Sugar',
          measure: '1 tsp',
          id: 296,
        },
        {
          name: 'Soy Sauce',
          measure: '1 tsp',
          id: 297,
        },
      ],
    },
    {
      id: 27,
      name: 'Baked salmon with fennel & tomatoes',
      category: 'Seafood',
      instructions:
        'Heat oven to 180C/fan 160C/gas 4. Trim the fronds from the fennel and set aside. Cut the fennel bulbs in half, then cut each half into 3 wedges. Cook in boiling salted water for 10 mins, then drain well. Chop the fennel fronds roughly, then mix with the parsley and lemon zest.\r\n\r\nSpread the drained fennel over a shallow ovenproof dish, then add the tomatoes. Drizzle with olive oil, then bake for 10 mins. Nestle the salmon among the veg, sprinkle with lemon juice, then bake 15 mins more until the fish is just cooked. Scatter over the parsley and serve.',
      image: '1548772327.jpg',
      tags: 'Paleo,Keto,HighFat,Baking,LowCarbs',
      ingredients: [
        {
          name: 'Fennel',
          measure: '2 medium',
          id: 298,
        },
        {
          name: 'Parsley',
          measure: '2 tbs chopped',
          id: 299,
        },
        {
          name: 'Lemon',
          measure: 'Juice of 1',
          id: 300,
        },
        {
          name: 'Cherry Tomatoes',
          measure: '175g',
          id: 301,
        },
        {
          name: 'Olive Oil',
          measure: '1 tbs',
          id: 302,
        },
        {
          name: 'Salmon',
          measure: '350g',
          id: 303,
        },
        {
          name: 'Black Olives',
          measure: 'to serve',
          id: 304,
        },
      ],
    },
    {
      id: 28,
      name: 'Budino Di Ricotta',
      category: 'Dessert',
      instructions:
        'Mash the ricotta and beat well with the egg yolks, stir in the flour, sugar, cinnamon, grated lemon rind and the rum and mix well. You can do this in a food processor. Beat the egg whites until stiff, fold in and pour into a buttered and floured 25cm cake tin. Bake in the oven at 180ºC/160ºC fan/gas 4 for about 40 minutes, or until it is firm.\r\n\r\nServe hot or cold dusted with icing sugar.',
      image: '1549542877.jpg',
      tags: 'Cake,Baking,Desert,Sweet,Alcoholic,Calorific',
      ingredients: [
        {
          name: 'Ricotta',
          measure: '500g',
          id: 305,
        },
        {
          name: 'Eggs',
          measure: '4 large',
          id: 306,
        },
        {
          name: 'Flour',
          measure: '3 tbs',
          id: 307,
        },
        {
          name: 'Sugar',
          measure: '250g',
          id: 308,
        },
        {
          name: 'Cinnamon',
          measure: '1 tsp',
          id: 309,
        },
        {
          name: 'Lemons',
          measure: 'Grated Zest of 2',
          id: 310,
        },
        {
          name: 'Dark Rum',
          measure: '5 tbs',
          id: 311,
        },
        {
          name: 'Icing Sugar',
          measure: 'sprinking',
          id: 312,
        },
      ],
    },
    {
      id: 29,
      name: 'Breakfast Potatoes',
      category: 'Breakfast',
      instructions:
        "Before you do anything, freeze your bacon slices that way when you're ready to prep, it'll be so much easier to chop!\r\nWash the potatoes and cut medium dice into square pieces. To prevent any browning, place the already cut potatoes in a bowl filled with water.\r\nIn the meantime, heat 1-2 tablespoons of oil in a large skillet over medium-high heat. Tilt the skillet so the oil spreads evenly.\r\nOnce the oil is hot, drain the potatoes and add to the skillet. Season with salt, pepper, and Old Bay as needed.\r\nCook for 10 minutes, stirring the potatoes often, until brown. If needed, add a tablespoon more of oil.\r\nChop up the bacon and add to the potatoes. The bacon will start to render and the fat will begin to further cook the potatoes. Toss it up a bit! The bacon will take 5-6 minutes to crisp.\r\nOnce the bacon is cooked, reduce the heat to medium-low, add the minced garlic and toss. Season once more. Add dried or fresh parsley. Control heat as needed.\r\nLet the garlic cook until fragrant, about one minute.\r\nJust before serving, drizzle over the maple syrup and toss. Let that cook another minute, giving the potatoes a caramelized effect.\r\nServe in a warm bowl with a sunny side up egg!",
      image: '1550441882.jpg',
      tags: 'Breakfast,Brunch,',
      ingredients: [
        {
          name: 'Potatoes',
          measure: '3 Medium',
          id: 313,
        },
        {
          name: 'Olive Oil',
          measure: '1 tbs',
          id: 314,
        },
        {
          name: 'Bacon',
          measure: '2 strips',
          id: 315,
        },
        {
          name: 'Garlic Clove',
          measure: 'Minced',
          id: 316,
        },
        {
          name: 'Maple Syrup',
          measure: '1 tbs',
          id: 317,
        },
        {
          name: 'Parsley',
          measure: 'Garnish',
          id: 318,
        },
        {
          name: 'Salt',
          measure: 'Pinch',
          id: 319,
        },
        {
          name: 'Pepper',
          measure: 'Pinch',
          id: 320,
        },
        {
          name: 'Allspice',
          measure: 'To taste',
          id: 321,
        },
      ],
    },
    {
      id: 30,
      name: 'Bitterballen (Dutch meatballs)',
      category: 'Beef',
      instructions:
        'Melt the butter in a skillet or pan. When melted, add the flour little by little and stir into a thick paste. Slowly stir in the stock, making sure the roux absorbs the liquid. Simmer for a couple of minutes on a low heat while you stir in the onion, parsley and the shredded meat. The mixture should thicken and turn into a heavy, thick sauce.\r\n\r\nPour the mixture into a shallow container, cover and refrigerate for several hours, or until the sauce has solidified.\r\n\r\nTake a heaping tablespoon of the cold, thick sauce and quickly roll it into a small ball. Roll lightly through the flour, then the egg and finally the breadcrumbs. Make sure that the egg covers the whole surface of the bitterbal. When done, refrigerate the snacks while the oil in your fryer heats up to 190C (375F). Fry four bitterballen at a time, until golden.\r\n\r\nServe on a plate with a nice grainy or spicy mustard. \r\n',
      image: 'lhqev81565090111.jpg',
      tags: 'DinnerParty,HangoverFood,Alcoholic',
      ingredients: [
        {
          name: 'Butter',
          measure: '100g',
          id: 322,
        },
        {
          name: 'Flour',
          measure: '150g',
          id: 323,
        },
        {
          name: 'Beef Stock',
          measure: '700ml',
          id: 324,
        },
        {
          name: 'Onion',
          measure: '30g',
          id: 325,
        },
        {
          name: 'Parsley',
          measure: '1 tbs',
          id: 326,
        },
        {
          name: 'Beef',
          measure: '400g',
          id: 327,
        },
        {
          name: 'Salt',
          measure: 'Pinch',
          id: 328,
        },
        {
          name: 'Pepper',
          measure: 'Pinch',
          id: 329,
        },
        {
          name: 'Nutmeg',
          measure: 'Pinch',
          id: 330,
        },
        {
          name: 'Flour',
          measure: '50g',
          id: 331,
        },
        {
          name: 'Eggs',
          measure: '2 Beaten',
          id: 332,
        },
        {
          name: 'Breadcrumbs',
          measure: '50g',
          id: 333,
        },
      ],
    },
    {
      id: 31,
      name: 'BBQ Pork Sloppy Joes',
      category: 'Pork',
      instructions:
        '1\r\n\r\nPreheat oven to 450 degrees. Wash and dry all produce. Cut sweet potatoes into ½-inch-thick wedges. Toss on a baking sheet with a drizzle of oil, salt, and pepper. Roast until browned and tender, 20-25 minutes.\r\n\r\n2\r\n\r\nMeanwhile, halve and peel onion. Slice as thinly as possible until you have ¼ cup (½ cup for 4 servings); finely chop remaining onion. Peel and finely chop garlic. Halve lime; squeeze juice into a small bowl. Halve buns. Add 1 TBSP butter (2 TBSP for 4) to a separate small microwave-safe bowl; microwave until melted, 30 seconds. Brush onto cut sides of buns.\r\n\r\n3\r\n\r\nTo bowl with lime juice, add sliced onion, ¼ tsp sugar (½ tsp for 4 servings), and a pinch of salt. Stir to combine; set aside to quick-pickle.\r\n\r\n4\r\n\r\nHeat a drizzle of oil in a large pan over medium-high heat. Add chopped onion and season with salt and pepper. Cook, stirring, until softened, 4-5 minutes. Add garlic and cook until fragrant, 30 seconds more. Add pork and season with salt and pepper. Cook, breaking up meat into pieces, until browned and cooked through, 4-6 minutes.\r\n\r\n5\r\n\r\nWhile pork cooks, in a third small bowl, combine BBQ sauce, pickling liquid from onion, 3 TBSP ketchup (6 TBSP for 4 servings), ½ tsp sugar (1 tsp for 4), and ¼ cup water (⅓ cup for 4). Once pork is cooked through, add BBQ sauce mixture to pan. Cook, stirring, until sauce is thickened, 2-3 minutes. Taste and season with salt and pepper.\r\n\r\n6\r\n\r\nMeanwhile, toast buns in oven or toaster oven until golden, 3-5 minutes. Divide toasted buns between plates and fill with as much BBQ pork as you’d like. Top with pickled onion and hot sauce. Serve with sweet potato wedges on the side.',
      image: 'atd5sh1583188467.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Potatoes',
          measure: '2',
          id: 334,
        },
        {
          name: 'Red Onions',
          measure: '1',
          id: 335,
        },
        {
          name: 'Garlic',
          measure: '2 cloves',
          id: 336,
        },
        {
          name: 'Lime',
          measure: '1',
          id: 337,
        },
        {
          name: 'Bread',
          measure: '2',
          id: 338,
        },
        {
          name: 'Pork',
          measure: '1 lb',
          id: 339,
        },
        {
          name: 'Barbeque Sauce',
          measure: '',
          id: 340,
        },
        {
          name: 'Hotsauce',
          measure: '',
          id: 341,
        },
        {
          name: 'Tomato Ketchup',
          measure: '',
          id: 342,
        },
        {
          name: 'Sugar',
          measure: '',
          id: 343,
        },
        {
          name: 'Vegetable Oil',
          measure: '',
          id: 344,
        },
        {
          name: 'Salt',
          measure: '',
          id: 345,
        },
        {
          name: 'Pepper',
          measure: '',
          id: 346,
        },
      ],
    },
    {
      id: 32,
      name: 'Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber',
      category: 'Beef',
      instructions:
        "Add'l ingredients: mayonnaise, siracha\r\n\r\n1\r\n\r\nPlace rice in a fine-mesh sieve and rinse until water runs clear. Add to a small pot with 1 cup water (2 cups for 4 servings) and a pinch of salt. Bring to a boil, then cover and reduce heat to low. Cook until rice is tender, 15 minutes. Keep covered off heat for at least 10 minutes or until ready to serve.\r\n\r\n2\r\n\r\nMeanwhile, wash and dry all produce. Peel and finely chop garlic. Zest and quarter lime (for 4 servings, zest 1 lime and quarter both). Trim and halve cucumber lengthwise; thinly slice crosswise into half-moons. Halve, peel, and medium dice onion. Trim, peel, and grate carrot.\r\n\r\n3\r\n\r\nIn a medium bowl, combine cucumber, juice from half the lime, ¼ tsp sugar (½ tsp for 4 servings), and a pinch of salt. In a small bowl, combine mayonnaise, a pinch of garlic, a squeeze of lime juice, and as much sriracha as you’d like. Season with salt and pepper.\r\n\r\n4\r\n\r\nHeat a drizzle of oil in a large pan over medium-high heat. Add onion and cook, stirring, until softened, 4-5 minutes. Add beef, remaining garlic, and 2 tsp sugar (4 tsp for 4 servings). Cook, breaking up meat into pieces, until beef is browned and cooked through, 4-5 minutes. Stir in soy sauce. Turn off heat; taste and season with salt and pepper.\r\n\r\n5\r\n\r\nFluff rice with a fork; stir in lime zest and 1 TBSP butter. Divide rice between bowls. Arrange beef, grated carrot, and pickled cucumber on top. Top with a squeeze of lime juice. Drizzle with sriracha mayo.",
      image: 'z0ageb1583189517.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Rice',
          measure: 'White',
          id: 347,
        },
        {
          name: 'Onion',
          measure: '1',
          id: 348,
        },
        {
          name: 'Lime',
          measure: '1',
          id: 349,
        },
        {
          name: 'Garlic Clove',
          measure: '3',
          id: 350,
        },
        {
          name: 'Cucumber',
          measure: '1',
          id: 351,
        },
        {
          name: 'Carrots',
          measure: '3 oz',
          id: 352,
        },
        {
          name: 'Ground Beef',
          measure: '1 lb',
          id: 353,
        },
        {
          name: 'Soy Sauce',
          measure: '2 oz',
          id: 354,
        },
      ],
    },
    {
      id: 33,
      name: 'Big Mac',
      category: 'Beef',
      instructions:
        'For the Big Mac sauce, combine all the ingredients in a bowl, season with salt and chill until ready to use.\r\n2. To make the patties, season the mince with salt and pepper and form into 4 balls using about 1/3 cup mince each. Place each onto a square of baking paper and flatten to form into four x 15cm circles. Heat oil in a large frypan over high heat. In 2 batches, cook beef patties for 1-2 minutes each side until lightly charred and cooked through. Remove from heat and keep warm. Repeat with remaining two patties.\r\n3. Carefully slice each burger bun into three acrossways, then lightly toast.\r\n4. To assemble the burgers, spread a little Big Mac sauce over the bottom base. Top with some chopped onion, shredded lettuce, slice of cheese, beef patty and some pickle slices. Top with the middle bun layer, and spread with more Big Mac sauce, onion, lettuce, pickles, beef patty and then finish with more sauce. Top with burger lid to serve.\r\n5. After waiting half an hour for your food to settle, go for a jog.',
      image: 'urzj1d1587670726.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Minced Beef',
          measure: '400g',
          id: 355,
        },
        {
          name: 'Olive Oil',
          measure: '2 tbs',
          id: 356,
        },
        {
          name: 'Sesame Seed Burger Buns',
          measure: '2',
          id: 357,
        },
        {
          name: 'Onion',
          measure: 'Chopped',
          id: 358,
        },
        {
          name: 'Iceberg Lettuce',
          measure: '1/4',
          id: 359,
        },
        {
          name: 'Cheese',
          measure: '2 sliced',
          id: 360,
        },
        {
          name: 'Dill Pickles',
          measure: '2 large',
          id: 361,
        },
        {
          name: 'Mayonnaise',
          measure: '1 cup',
          id: 362,
        },
        {
          name: 'White Wine Vinegar',
          measure: '2 tsp',
          id: 363,
        },
        {
          name: 'Pepper',
          measure: 'Pinch',
          id: 364,
        },
        {
          name: 'Mustard',
          measure: '2 tsp',
          id: 365,
        },
        {
          name: 'Onion Salt',
          measure: '1 1/2 tsp',
          id: 366,
        },
        {
          name: 'Garlic Powder',
          measure: '1 1/2 tsp',
          id: 367,
        },
        {
          name: 'Paprika',
          measure: '1/2 tsp',
          id: 368,
        },
      ],
    },
    {
      id: 34,
      name: 'Bigos (Hunters Stew)',
      category: 'Pork',
      instructions:
        'Preheat the oven to 350 degrees F (175 degrees C).\r\n\r\nHeat a large pot over medium heat. Add the bacon and kielbasa; cook and stir until the bacon has rendered its fat and sausage is lightly browned. Use a slotted spoon to remove the meat and transfer to a large casserole or Dutch oven.\r\n\r\nCoat the cubes of pork lightly with flour and fry them in the bacon drippings over medium-high heat until golden brown. Use a slotted spoon to transfer the pork to the casserole. Add the garlic, onion, carrots, fresh mushrooms, cabbage and sauerkraut. Reduce heat to medium; cook and stir until the carrots are soft, about 10 minutes. Do not let the vegetables brown.\r\n\r\nDeglaze the pan by pouring in the red wine and stirring to loosen all of the bits of food and flour that are stuck to the bottom. Season with the bay leaf, basil, marjoram, paprika, salt, pepper, caraway seeds and cayenne pepper; cook for 1 minute.\r\n\r\nMix in the dried mushrooms, hot pepper sauce, Worcestershire sauce, beef stock, tomato paste and tomatoes. Heat through just until boiling. Pour the vegetables and all of the liquid into the casserole dish with the meat. Cover with a lid.\r\n\r\nBake in the preheated oven for 2 1/2 to 3 hours, until meat is very tender.',
      image: 'md8w601593348504.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Bacon',
          measure: '2 sliced',
          id: 369,
        },
        {
          name: 'Kielbasa',
          measure: '1 lb',
          id: 370,
        },
        {
          name: 'Pork',
          measure: '1 lb',
          id: 371,
        },
        {
          name: 'Flour',
          measure: '1/4 cup',
          id: 372,
        },
        {
          name: 'Garlic',
          measure: '3 chopped',
          id: 373,
        },
        {
          name: 'Onion',
          measure: '1 Diced',
          id: 374,
        },
        {
          name: 'Mushrooms',
          measure: '1 1/2 cup',
          id: 375,
        },
        {
          name: 'Cabbage',
          measure: '4 cups',
          id: 376,
        },
        {
          name: 'Sauerkraut',
          measure: '1 Jar',
          id: 377,
        },
        {
          name: 'Red Wine',
          measure: '1/4 cup',
          id: 378,
        },
        {
          name: 'Bay Leaf',
          measure: '1',
          id: 379,
        },
        {
          name: 'Basil',
          measure: '1 tsp',
          id: 380,
        },
        {
          name: 'Marjoram',
          measure: '1 tsp',
          id: 381,
        },
        {
          name: 'Paprika',
          measure: '1 tbs',
          id: 382,
        },
        {
          name: 'Caraway Seed',
          measure: '1/8 teaspoon',
          id: 383,
        },
        {
          name: 'Hotsauce',
          measure: '1 dash',
          id: 384,
        },
        {
          name: 'Beef Stock',
          measure: '5 Cups',
          id: 385,
        },
        {
          name: 'Tomato Puree',
          measure: '2 tbs',
          id: 386,
        },
        {
          name: 'Diced Tomatoes',
          measure: '1 cup',
          id: 387,
        },
        {
          name: 'Worcestershire Sauce',
          measure: '1 dash',
          id: 388,
        },
      ],
    },
    {
      id: 35,
      name: 'Boxty Breakfast',
      category: 'Pork',
      instructions:
        'STEP 1\r\nBefore you start, put your oven on its lowest setting, ready to keep things warm. Peel the potatoes, grate 2 of them, then set aside. Cut the other 2 into large chunks, then boil for 10-15 mins or until tender. Meanwhile, squeeze as much of the liquid from the grated potatoes as you can using a clean tea towel. Mash the boiled potatoes, then mix with the grated potato, spring onions and flour.\r\n\r\nSTEP 2\r\nWhisk the egg white in a large bowl until it holds soft peaks. Fold in the buttermilk, then add the bicarbonate of soda. Fold into the potato mix.\r\n\r\nSTEP 3\r\nHeat a large non-stick frying pan over a medium heat, then add 1 tbsp butter and some of the oil. Drop 3-4 spoonfuls of the potato mixture into the pan, then gently cook for 3-5 mins on each side until golden and crusty. Keep warm on a plate in the oven while you cook the next batch, adding more butter and oil to the pan before you do so. You will get 16 crumpet-size boxty from the mix. Can be made the day ahead, drained on kitchen paper, then reheated in a low oven for 20 mins.\r\n\r\nSTEP 4\r\nHeat the grill to medium and put the tomatoes in a heavy-based pan. Add a good knob of butter and a little oil, then fry for about 5 mins until softened. Grill the bacon, then pile onto a plate and keep warm. Stack up the boxty, bacon and egg, and serve the tomatoes on the side.',
      image: 'naqyel1608588563.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Potatoes',
          measure: '4 large',
          id: 389,
        },
        {
          name: 'Spring Onions',
          measure: '1  bunch',
          id: 390,
        },
        {
          name: 'Plain Flour',
          measure: '100g',
          id: 391,
        },
        {
          name: 'Egg White',
          measure: '1',
          id: 392,
        },
        {
          name: 'Milk',
          measure: '150ml',
          id: 393,
        },
        {
          name: 'Bicarbonate Of Soda',
          measure: '1 tsp',
          id: 394,
        },
        {
          name: 'Butter',
          measure: '3 tbs',
          id: 395,
        },
        {
          name: 'Vegetable Oil',
          measure: '2 tbs',
          id: 396,
        },
        {
          name: 'Cherry Tomatoes',
          measure: '6',
          id: 397,
        },
        {
          name: 'Bacon',
          measure: '12',
          id: 398,
        },
        {
          name: 'Egg',
          measure: '6',
          id: 399,
        },
      ],
    },
    {
      id: 36,
      name: 'Beef Rendang',
      category: 'Beef',
      instructions:
        'Chop the spice paste ingredients and then blend it in a food processor until fine.\r\nHeat the oil in a stew pot, add the spice paste, cinnamon, cloves, star anise, and cardamom and stir-fry until aromatic. Add the beef and the pounded lemongrass and stir for 1 minute. Add the coconut milk, tamarind juice, water, and simmer on medium heat, stirring frequently until the meat is almost cooked. Add the kaffir lime leaves, kerisik (toasted coconut), sugar or palm sugar, stirring to blend well with the meat.\r\nLower the heat to low, cover the lid, and simmer for 1 to 1 1/2 hours or until the meat is really tender and the gravy has dried up. Add more salt and sugar to taste. Serve immediately with steamed rice and save some for overnight.',
      image: 'bc8v651619789840.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Beef',
          measure: '1lb',
          id: 400,
        },
        {
          name: 'Vegetable Oil',
          measure: '5 tbs',
          id: 401,
        },
        {
          name: 'Cinnamon Stick',
          measure: '1',
          id: 402,
        },
        {
          name: 'Cloves',
          measure: '3',
          id: 403,
        },
        {
          name: 'Star Anise',
          measure: '3',
          id: 404,
        },
        {
          name: 'Cardamom',
          measure: '3',
          id: 405,
        },
        {
          name: 'Coconut Cream',
          measure: '1 cup',
          id: 406,
        },
        {
          name: 'Water',
          measure: '1 cup',
          id: 407,
        },
        {
          name: 'Tamarind Paste',
          measure: '2 tbs',
          id: 408,
        },
        {
          name: 'Lime',
          measure: '6',
          id: 409,
        },
        {
          name: 'Sugar',
          measure: '1 tbs',
          id: 410,
        },
        {
          name: 'Challots',
          measure: '5',
          id: 411,
        },
      ],
    },
    {
      id: 37,
      name: 'Burek',
      category: 'Side',
      instructions:
        'Fry the finely chopped onions and minced meat in oil. Add the salt and pepper. Grease a round baking tray and put a layer of pastry in it. Cover with a thin layer of filling and cover this with another layer of filo pastry which must be well coated in oil. Put another layer of filling and cover with pastry. When you have five or six layers, cover with filo pastry, bake at 200ºC/392ºF for half an hour and cut in quarters and serve.',
      image: 'tkxquw1628771028.jpg',
      tags: 'Streetfood, Onthego',
      ingredients: [
        {
          name: 'Filo Pastry',
          measure: '1 Packet',
          id: 412,
        },
        {
          name: 'Minced Beef',
          measure: '150g',
          id: 413,
        },
        {
          name: 'Onion',
          measure: '150g',
          id: 414,
        },
        {
          name: 'Oil',
          measure: '40g',
          id: 415,
        },
        {
          name: 'Salt',
          measure: 'Dash',
          id: 416,
        },
        {
          name: 'Pepper',
          measure: 'Dash',
          id: 417,
        },
      ],
    },
    {
      id: 38,
      name: 'Beef Mechado',
      category: 'Beef',
      instructions:
        '0.\tMake the beef tenderloin marinade by combining soy sauce, vinegar, ginger, garlic, sesame oil, olive oil, sugar, salt, and ground black pepper in a large bowl. Mix well.\r\n1.\tAdd the cubed beef tenderloin to the bowl with the beef tenderloin marinade. Gently toss to coat the beef. Let it stay for 1 hour.\r\n2.\tUsing a metal or bamboo skewer, assemble the beef kebob by skewering the vegetables and marinated beef tenderloin.\r\n3.\tHeat-up the grill and start grilling the beef kebobs for 3 minutes per side. This will give you a medium beef that is juicy and tender on the inside. Add more time if you want your beef well done, but it will be less tender.\r\n4.\tTransfer to a serving plate. Serve with Saffron rice.\r\n5.\tShare and enjoy!\r\n',
      image: 'cgl60b1683206581.jpg',
      tags: 'Stew, Warming',
      ingredients: [
        {
          name: 'Garlic',
          measure: '3 cloves',
          id: 418,
        },
        {
          name: 'Onion',
          measure: '1 sliced',
          id: 419,
        },
        {
          name: 'Beef',
          measure: '2 Lbs',
          id: 420,
        },
        {
          name: 'Tomato Puree',
          measure: '8 ounces',
          id: 421,
        },
        {
          name: 'Water',
          measure: '1 cup',
          id: 422,
        },
        {
          name: 'Olive Oil',
          measure: '3 tbs',
          id: 423,
        },
        {
          name: 'Lemon',
          measure: '1 Slice',
          id: 424,
        },
        {
          name: 'Potatoes',
          measure: '1 large',
          id: 425,
        },
        {
          name: 'Soy Sauce',
          measure: '1/4 cup',
          id: 426,
        },
        {
          name: 'Black Pepper',
          measure: '1/2 tsp',
          id: 427,
        },
        {
          name: 'Bay Leaves',
          measure: '2',
          id: 428,
        },
        {
          name: 'Salt',
          measure: 'To taste',
          id: 429,
        },
      ],
    },
    {
      id: 39,
      name: 'Bistek',
      category: 'Beef',
      instructions:
        '0.\tMarinate beef in soy sauce, lemon (or calamansi), and ground black pepper for at least 1 hour. Note: marinate overnight for best result\r\n1.\tHeat the cooking oil in a pan then pan-fry half of the onions until the texture becomes soft. Set aside\r\n2.\tDrain the marinade from the beef. Set it aside. Pan-fry the beef on the same pan where the onions were fried for 1 minute per side. Remove from the pan. Set aside\r\n3.\tAdd more oil if needed. Saute garlic and remaining raw onions until onion softens.\r\n4.\tPour the remaining marinade and water. Bring to a boil.\r\n5.\tAdd beef. Cover the pan and simmer until the meat is tender. Note: Add water as needed.\r\n6.\tSeason with ground black pepper and salt as needed. Top with pan-fried onions.\r\n7.\tTransfer to a serving plate. Serve hot. Share and Enjoy!\r\n',
      image: '4pqimk1683207418.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Beef',
          measure: '1 lb',
          id: 430,
        },
        {
          name: 'Soy Sauce',
          measure: '5 tablespoons',
          id: 431,
        },
        {
          name: 'Lemon',
          measure: '1',
          id: 432,
        },
        {
          name: 'Garlic',
          measure: '3 cloves',
          id: 433,
        },
        {
          name: 'Onion',
          measure: '3 parts',
          id: 434,
        },
        {
          name: 'Olive Oil',
          measure: '4 tbs',
          id: 435,
        },
        {
          name: 'Water',
          measure: '1 cup',
          id: 436,
        },
        {
          name: 'Salt',
          measure: '1 pinch',
          id: 437,
        },
      ],
    },
    {
      id: 40,
      name: 'Beef Caldereta',
      category: 'Beef',
      instructions:
        '0.\tHeat oil in a cooking pot. Saute onion and garlic until onion softens\r\n1.\tAdd beef. Saute until the outer part turns light brown.\r\n2.\tAdd soy sauce. Pour tomato sauce and water. Let boil.\r\n3.\tAdd Knorr Beef Cube. Cover the pressure cooker. Cook for 30 minutes.\r\n4.\tPan-fry carrot and potato until it browns. Set aside.\r\n5.\tAdd chili pepper, liver spread and peanut butter. Stir.\r\n6.\tAdd bell peppers, fried potato and carrot. Cover the pot. Continue cooking for 5 to 7 minutes.\r\n7.\tSeason with salt and ground black pepper. Serve.\r\n',
      image: '41cxjh1683207682.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Beef',
          measure: '2kg cut cubes',
          id: 438,
        },
        {
          name: 'Beef Stock',
          measure: '1',
          id: 439,
        },
        {
          name: 'Soy Sauce',
          measure: '1 tbs',
          id: 440,
        },
        {
          name: 'Water',
          measure: '2 cups',
          id: 441,
        },
        {
          name: 'Green Pepper',
          measure: '1 sliced',
          id: 442,
        },
        {
          name: 'Red Pepper',
          measure: '1 sliced',
          id: 443,
        },
        {
          name: 'Potatoes',
          measure: '1 sliced',
          id: 444,
        },
        {
          name: 'Carrots',
          measure: '1 sliced',
          id: 445,
        },
        {
          name: 'Tomato Puree',
          measure: '8 ounces',
          id: 446,
        },
        {
          name: 'Peanut Butter',
          measure: '3  tablespoons',
          id: 447,
        },
        {
          name: 'Chilli Powder',
          measure: '5',
          id: 448,
        },
        {
          name: 'Onion',
          measure: '1 chopped',
          id: 449,
        },
        {
          name: 'Garlic',
          measure: '5 cloves',
          id: 450,
        },
        {
          name: 'Olive Oil',
          measure: '3 tbs',
          id: 451,
        },
      ],
    },
    {
      id: 41,
      name: 'Beef Asado',
      category: 'Beef',
      instructions:
        '0.\tCombine beef, crushed peppercorn, soy sauce, vinegar, dried bay leaves, lemon, and tomato sauce. Mix well. Marinate beef for at least 30 minutes.\r\n1.\tPut the marinated beef in a cooking pot along with remaining marinade. Add water. Let boil.\r\n2.\tAdd Knorr Beef Cube. Stir. Cover the pot and cook for 40 minutes in low heat.\r\n3.\tTurn the beef over. Add tomato paste. Continue cooking until beef tenderizes. Set aside.\r\n4.\tHeat oil in a pan. Fry the potato until it browns. Turn over and continue frying the opposite side. Remove from the pan and place on a clean plate. Do the same with the carrots.\r\n5.\tSave 3 tablespoons of cooking oil from the pan where the potato was fried. Saute onion and garlic until onion softens.\r\n6.\tPour-in the sauce from the beef stew. Let boil. Add the beef. Cook for 2 minutes.\r\n7.\tAdd butter and let it melt. Continue cooking until the sauce reduces to half.',
      image: 'pkopc31683207947.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Beef',
          measure: '1.5kg',
          id: 452,
        },
        {
          name: 'Beef Stock Concentrate',
          measure: '1',
          id: 453,
        },
        {
          name: 'Tomato Puree',
          measure: '8 ounces',
          id: 454,
        },
        {
          name: 'Water',
          measure: '3 cups',
          id: 455,
        },
        {
          name: 'Soy Sauce',
          measure: '6 tablespoons',
          id: 456,
        },
        {
          name: 'White Wine Vinegar',
          measure: '1 tbs',
          id: 457,
        },
        {
          name: 'Pepper',
          measure: '2 tbs',
          id: 458,
        },
        {
          name: 'Bay Leaf',
          measure: '4',
          id: 459,
        },
        {
          name: 'Lemon',
          measure: '1/2',
          id: 460,
        },
        {
          name: 'Tomato Sauce',
          measure: '2 tbs',
          id: 461,
        },
        {
          name: 'Butter',
          measure: '3 tbs',
          id: 462,
        },
        {
          name: 'Olive Oil',
          measure: '1/2 cup',
          id: 463,
        },
        {
          name: 'Onion',
          measure: '1 chopped',
          id: 464,
        },
        {
          name: 'Garlic',
          measure: '4 cloves',
          id: 465,
        },
      ],
    },
    {
      id: 42,
      name: 'Bread omelette',
      category: 'Breakfast',
      instructions: 'Make and enjoy',
      image: 'hqaejl1695738653.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Bread',
          measure: '2',
          id: 466,
        },
        {
          name: 'Egg',
          measure: '2',
          id: 467,
        },
        {
          name: 'Salt',
          measure: '0.5',
          id: 468,
        },
      ],
    },
    {
      id: 43,
      name: 'Beetroot Soup (Borscht)',
      category: 'Vegetarian',
      instructions:
        'Chop the beetroot, add water and stock cube and cook for 15mins. Add the other ingredients and boil until soft. Finally add the beans and cook for 5mins. Serve in the soup pot.',
      image: 'zadvgb1699012544.jpg',
      tags: 'soup',
      ingredients: [
        {
          name: 'Beetroot',
          measure: '3',
          id: 469,
        },
        {
          name: 'Olive Oil',
          measure: '4 tbs',
          id: 470,
        },
        {
          name: 'Chicken Stock Cube',
          measure: '1',
          id: 471,
        },
        {
          name: 'Water',
          measure: '6 cups',
          id: 472,
        },
        {
          name: 'Potatoes',
          measure: '3',
          id: 473,
        },
        {
          name: 'Cannellini Beans',
          measure: '1 can',
          id: 474,
        },
        {
          name: 'Dill',
          measure: 'Garnish',
          id: 475,
        },
      ],
    },
    {
      id: 44,
      name: 'Blini Pancakes',
      category: 'Side',
      instructions:
        'In a large bowl, whisk together 1/2 cup buckwheat flour, 2/3 cup all-purpose flour, 1/2 teaspoon salt, and 1 teaspoon yeast.\r\n\r\nMake a well in the center and pour in 1 cup warm milk, whisking until the batter is smooth.\r\n\r\nCover the bowl and let the batter rise until doubled, about 1 hour.\r\n\r\nEnrich and Rest the Batter\r\nStir 2 tablespoons melted butter and 1 egg yolk into the batter.\r\n\r\nIn a separate bowl, whisk 1 egg white until stiff, but not dry.\r\n\r\nFold the whisked egg white into the batter.\r\n\r\nCover the bowl and let the batter stand 20 minutes.\r\n\r\nPan-Fry the Blini\r\nHeat butter in a large nonstick skillet over medium heat.\r\n\r\nDrop quarter-sized dollops of batter into the pan, being careful not to overcrowd the pan. Cook for about 1 minute or until bubbles form.\r\n\r\nTurn and cook for about 30 additional seconds.\r\n\r\nRemove the finished blini onto a plate and cover them with a clean kitchen towel to keep warm. Add more butter to the pan and repeat the frying process with the remaining batter.',
      image: '0206h11699013358.jpg',
      tags: 'pancake',
      ingredients: [
        {
          name: 'Buckwheat',
          measure: '1/2 cup',
          id: 476,
        },
        {
          name: 'Flour',
          measure: '2/3 Cup',
          id: 477,
        },
        {
          name: 'Salt',
          measure: '1/2 tsp',
          id: 478,
        },
        {
          name: 'Yeast',
          measure: '1 tsp',
          id: 479,
        },
        {
          name: 'Milk',
          measure: '1 cup',
          id: 480,
        },
        {
          name: 'Butter',
          measure: '2 tbs',
          id: 481,
        },
        {
          name: 'Egg',
          measure: '1 Seperated',
          id: 482,
        },
      ],
    },
    {
      id: 45,
      name: 'Chicken Enchilada Casserole',
      category: 'Chicken',
      instructions:
        "Cut each chicken breast in about 3 pieces, so that it cooks faster and put it in a small pot. Pour Enchilada sauce over it and cook covered on low to medium heat until chicken is cooked through, about 20 minutes. No water is needed, the chicken will cook in the Enchilada sauce. Make sure you stir occasionally so that it doesn't stick to the bottom.\r\nRemove chicken from the pot and shred with two forks.\r\nPreheat oven to 375 F degrees.\r\nStart layering the casserole. Start with about ¼ cup of the leftover Enchilada sauce over the bottom of a baking dish. I used a longer baking dish, so that I can put 2 corn tortillas across. Place 2 tortillas on the bottom, top with ⅓ of the chicken and ⅓ of the remaining sauce. Sprinkle with ⅓ of the cheese and repeat starting with 2 more tortillas, then chicken, sauce, cheese. Repeat with last layer with the remaining ingredients, tortillas, chicken, sauce and cheese.\r\nBake for 20 to 30 minutes uncovered, until bubbly and cheese has melted and started to brown on top.\r\nServe warm.",
      image: 'qtuwxu1468233098.jpg',
      tags: 'Casserole,Cheasy,Meat',
      ingredients: [
        {
          name: 'Enchilada sauce',
          measure: '14 oz jar',
          id: 483,
        },
        {
          name: 'shredded Monterey Jack cheese',
          measure: '3 Cups',
          id: 484,
        },
        {
          name: 'corn tortillas',
          measure: '6',
          id: 485,
        },
        {
          name: 'chicken breasts',
          measure: '2',
          id: 486,
        },
      ],
    },
    {
      id: 46,
      name: 'Chocolate Gateau',
      category: 'Dessert',
      instructions:
        'Preheat the oven to 180°C/350°F/Gas Mark 4. Grease and line the base of an 8 in round spring form cake tin with baking parchment\r\nBreak the chocolate into a heatproof bowl and place over a saucepan of gently simmering water and stir until it melts. (or melt in the microwave for 2-3 mins stirring occasionally)\r\nPlace the butter and sugar in a mixing bowl and cream together with a wooden spoon until light and fluffy. Gradually beat in the eggs, adding a little flour if the mixture begins to curdle. Fold in the remaining flour with the cooled, melted chocolate and milk. Mix until smooth.\r\nSpread the mixture into the cake tin and bake for 50-55 mins or until firm in the centre and a skewer comes out cleanly. Cool for 10 minutes, then turn out and cool completely.',
      image: 'tqtywx1468317395.jpg',
      tags: 'Cake,Chocolate,Desert,Pudding',
      ingredients: [
        {
          name: 'Plain chocolate',
          measure: '250g',
          id: 487,
        },
        {
          name: 'Butter',
          measure: '175g',
          id: 488,
        },
        {
          name: 'Milk',
          measure: '2 tablespoons',
          id: 489,
        },
        {
          name: 'Eggs',
          measure: '5',
          id: 490,
        },
        {
          name: 'Granulated Sugar',
          measure: '175g',
          id: 491,
        },
        {
          name: 'Flour',
          measure: '125g',
          id: 492,
        },
      ],
    },
    {
      id: 47,
      name: 'Cream Cheese Tart',
      category: 'Starter',
      instructions:
        'Crust: make a dough from 250g flour (I like mixing different flours like plain and wholegrain spelt flour), 125g butter, 1 egg and a pinch of salt, press it into a tart form and place it in the fridge. Filling: stir 300g cream cheese and 100ml milk until smooth, add in 3 eggs, 100g grated parmesan cheese and season with salt, pepper and nutmeg. Take the crust out of the fridge and prick the bottom with a fork. Pour in the filling and bake at 175 degrees C for about 25 minutes. Cover the tart with some aluminium foil after half the time. In the mean time, slice about 350g mini tomatoes. In a small pan heat 3tbsp olive oil, 3tbsp white vinegar, 1 tbsp honey, salt and pepper and combine well. Pour over the tomato slices and mix well. With a spoon, place the tomato slices on the tart, avoiding too much liquid on it. Decorate with basil leaves and enjoy',
      image: 'wurrux1468416624.jpg',
      tags: 'Tart,Savory',
      ingredients: [
        {
          name: 'Flour',
          measure: '250g',
          id: 493,
        },
        {
          name: 'Butter',
          measure: '125g',
          id: 494,
        },
        {
          name: 'Egg',
          measure: '1',
          id: 495,
        },
        {
          name: 'Salt',
          measure: 'Pinch',
          id: 496,
        },
        {
          name: 'Cheese',
          measure: '300g',
          id: 497,
        },
        {
          name: 'Milk',
          measure: '100ml milk',
          id: 498,
        },
        {
          name: 'Eggs',
          measure: '3',
          id: 499,
        },
        {
          name: 'Parmesan Cheese',
          measure: '100g',
          id: 500,
        },
        {
          name: 'Plum tomatoes',
          measure: '350g',
          id: 501,
        },
        {
          name: 'White Vinegar',
          measure: '3tbsp',
          id: 502,
        },
        {
          name: 'Honey',
          measure: '1 tbsp',
          id: 503,
        },
        {
          name: 'Basil',
          measure: 'Topping',
          id: 504,
        },
      ],
    },
    {
      id: 48,
      name: 'Christmas Pudding Flapjack',
      category: 'Dessert',
      instructions:
        'Preheat the oven to 180°C/fan 160°C/gas mark 4 and grease and line a 25cm x 20cm tin. Melt the butter, sugar, syrup and orange zest in a large saucepan over a medium heat. The aim is to dissolve all the ingredients so that they are smooth, but to not lose any volume through boiling so be careful not to overheat.\r\n\r\nAdd the oats and stir well until evenly coated. Stir through the leftover Christmas pudding and tip into the prepared tin. Use a spoon to flatten the top and bake for 40 minutes until the edges start to brown. Whilst still warm in the tin, score into 12 squares. Allow to cool completely before cutting along the scores.\r\n\r\nKeeps for 5 days in an air tight tin or freeze for up to 1 month.',
      image: 'vvusxs1483907034.jpg',
      tags: 'Snack,Cake',
      ingredients: [
        {
          name: 'salted butter',
          measure: '250g',
          id: 505,
        },
        {
          name: 'dark soft brown sugar',
          measure: '225g',
          id: 506,
        },
        {
          name: 'golden syrup',
          measure: '150g',
          id: 507,
        },
        {
          name: 'orange',
          measure: 'Zest of 1',
          id: 508,
        },
        {
          name: 'rolled oats',
          measure: '500g',
          id: 509,
        },
        {
          name: 'Christmas pudding',
          measure: '250g',
          id: 510,
        },
      ],
    },
    {
      id: 49,
      name: 'Chicken Handi',
      category: 'Chicken',
      instructions:
        'Take a large pot or wok, big enough to cook all the chicken, and heat the oil in it. Once the oil is hot, add sliced onion and fry them until deep golden brown. Then take them out on a plate and set aside.\r\nTo the same pot, add the chopped garlic and sauté for a minute. Then add the chopped tomatoes and cook until tomatoes turn soft. This would take about 5 minutes.\r\nThen return the fried onion to the pot and stir. Add ginger paste and sauté well.\r\nNow add the cumin seeds, half of the coriander seeds and chopped green chillies. Give them a quick stir.\r\nNext goes in the spices – turmeric powder and red chilli powder. Sauté the spices well for couple of minutes.\r\nAdd the chicken pieces to the wok, season it with salt to taste and cook the chicken covered on medium-low heat until the chicken is almost cooked through. This would take about 15 minutes. Slowly sautéing the chicken will enhance the flavor, so do not expedite this step by putting it on high heat.\r\nWhen the oil separates from the spices, add the beaten yogurt keeping the heat on lowest so that the yogurt doesn’t split. Sprinkle the remaining coriander seeds and add half of the dried fenugreek leaves. Mix well.\r\nFinally add the cream and give a final mix to combine everything well.\r\nSprinkle the remaining kasuri methi and garam masala and serve the chicken handi hot with naan or rotis. Enjoy!',
      image: 'wyxwsp1486979827.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Chicken',
          measure: '1.2 kg',
          id: 511,
        },
        {
          name: 'Onion',
          measure: '5 thinly sliced',
          id: 512,
        },
        {
          name: 'Tomatoes',
          measure: '2 finely chopped',
          id: 513,
        },
        {
          name: 'Garlic',
          measure: '8 cloves chopped',
          id: 514,
        },
        {
          name: 'Ginger paste',
          measure: '1 tbsp',
          id: 515,
        },
        {
          name: 'Vegetable oil',
          measure: '¼ cup',
          id: 516,
        },
        {
          name: 'Cumin seeds',
          measure: '2 tsp',
          id: 517,
        },
        {
          name: 'Coriander seeds',
          measure: '3 tsp',
          id: 518,
        },
        {
          name: 'Turmeric powder',
          measure: '1 tsp',
          id: 519,
        },
        {
          name: 'Chilli powder',
          measure: '1 tsp',
          id: 520,
        },
        {
          name: 'Green chilli',
          measure: '2',
          id: 521,
        },
        {
          name: 'Yogurt',
          measure: '1 cup',
          id: 522,
        },
        {
          name: 'Cream',
          measure: '¾ cup',
          id: 523,
        },
        {
          name: 'fenugreek',
          measure: '3 tsp Dried',
          id: 524,
        },
        {
          name: 'Garam masala',
          measure: '1 tsp',
          id: 525,
        },
        {
          name: 'Salt',
          measure: 'To taste',
          id: 526,
        },
      ],
    },
    {
      id: 50,
      name: 'Chicken Alfredo Primavera',
      category: 'Chicken',
      instructions:
        'Heat 1 tablespoon of butter and 2 tablespoons of olive oil in a large skillet over medium-high heat. Season both sides of each chicken breast with seasoned salt and a pinch of pepper. Add the chicken to the skillet and cook for 5-7 minutes on each side, or until cooked through.  While the chicken is cooking, bring a large pot of water to a boil. Season the boiling water with a few generous pinches of kosher salt. Add the pasta and give it a stir. Cook, stirring occasionally, until al dente, about 12 minutes. Reserve 1/2 cup of  pasta water before draining the pasta.  Remove the chicken from the pan and transfer it to a cutting board; allow it to rest. Turn the heat down to medium and dd the remaining 1 tablespoon of butter and olive oil to the same pan you used to cook the chicken. Add the veggies (minus the garlic) and red pepper flakes to the pan and stir to coat with the oil and butter (refrain from seasoning with salt until the veggies are finished browning). Cook, stirring often, until the veggies are tender, about 5 minutes. Add the garlic and a generous pinch of salt and pepper to the pan and cook for 1 minute.  Deglaze the pan with the white wine. Continue to cook until the wine has reduced by half, about 3 minutes. Stir in the milk, heavy cream, and reserved pasta water. Bring the mixture to a gentle boil and allow to simmer and reduce for 2-3 minutes. Turn off the heat and add the Parmesan cheese and cooked pasta. Season with salt and pepper to taste. Garnish with Parmesan cheese and chopped parsley, if desired. ',
      image: 'syqypv1486981727.jpg',
      tags: 'Pasta,Meat,Dairy',
      ingredients: [
        {
          name: 'Butter',
          measure: '2 tablespoons',
          id: 527,
        },
        {
          name: 'Olive Oil',
          measure: '3 tablespoons',
          id: 528,
        },
        {
          name: 'Chicken',
          measure: '5 boneless',
          id: 529,
        },
        {
          name: 'Salt',
          measure: '1 teaspoon',
          id: 530,
        },
        {
          name: 'Squash',
          measure: '1 cut into 1/2-inch cubes',
          id: 531,
        },
        {
          name: 'Broccoli',
          measure: '1 Head chopped',
          id: 532,
        },
        {
          name: 'mushrooms',
          measure: '8-ounce sliced',
          id: 533,
        },
        {
          name: 'Pepper',
          measure: '1 red',
          id: 534,
        },
        {
          name: 'onion',
          measure: '1 chopped',
          id: 535,
        },
        {
          name: 'garlic',
          measure: '3 cloves',
          id: 536,
        },
        {
          name: 'red pepper flakes',
          measure: '1/2 teaspoon',
          id: 537,
        },
        {
          name: 'white wine',
          measure: '1/2 cup',
          id: 538,
        },
        {
          name: 'milk',
          measure: '1/2 cup',
          id: 539,
        },
        {
          name: 'heavy cream',
          measure: '1/2 cup',
          id: 540,
        },
        {
          name: 'Parmesan cheese',
          measure: '1 cup grated',
          id: 541,
        },
        {
          name: 'bowtie pasta',
          measure: '16 ounces',
          id: 542,
        },
        {
          name: 'Salt',
          measure: 'pinch',
          id: 543,
        },
        {
          name: 'Pepper',
          measure: 'pinch',
          id: 544,
        },
        {
          name: 'Parsley',
          measure: 'chopped',
          id: 545,
        },
      ],
    },
    {
      id: 51,
      name: 'Chicken Fajita Mac and Cheese',
      category: 'Chicken',
      instructions:
        'Fry your onion, peppers and garlic in olive oil until nicely translucent. Make a well in your veg and add your chicken. Add your seasoning and salt. Allow to colour slightly.\r\nAdd your cream, stock and macaroni.\r\nCook on low for 20 minutes. Add your cheeses, stir to combine.\r\nTop with roasted peppers and parsley.',
      image: 'qrqywr1503066605.jpg',
      tags: 'Pasta,Cheasy,Meat',
      ingredients: [
        {
          name: 'macaroni',
          measure: '500g',
          id: 546,
        },
        {
          name: 'chicken stock',
          measure: '2 cups',
          id: 547,
        },
        {
          name: 'heavy cream',
          measure: '1/2 cup',
          id: 548,
        },
        {
          name: 'fajita seasoning',
          measure: '1 packet',
          id: 549,
        },
        {
          name: 'salt',
          measure: '1 tsp',
          id: 550,
        },
        {
          name: 'chicken breast',
          measure: '3 diced',
          id: 551,
        },
        {
          name: 'olive oil',
          measure: '2 tbsp',
          id: 552,
        },
        {
          name: 'onion',
          measure: '1 small finely diced',
          id: 553,
        },
        {
          name: 'red pepper',
          measure: '2 finely diced',
          id: 554,
        },
        {
          name: 'garlic',
          measure: '2 cloves minced',
          id: 555,
        },
        {
          name: 'cheddar cheese',
          measure: '1 cup',
          id: 556,
        },
        {
          name: 'parsley',
          measure: 'garnish chopped',
          id: 557,
        },
      ],
    },
    {
      id: 52,
      name: 'Cajun spiced fish tacos',
      category: 'Seafood',
      instructions:
        "Cooking in a cajun spice and cayenne pepper marinade makes this fish super succulent and flavoursome. Top with a zesty dressing and serve in a tortilla for a quick, fuss-free main that's delightfully summery.\r\n\r\nOn a large plate, mix the cajun spice and cayenne pepper with a little seasoning and use to coat the fish all over.\r\n\r\nHeat a little oil in a frying pan, add in the fish and cook over a medium heat until golden. Reduce the heat and continue frying until the fish is cooked through, about 10 minutes. Cook in batches if you don’t have enough room in the pan.\r\n\r\nMeanwhile, prepare the dressing by combining all the ingredients with a little seasoning.\r\nSoften the tortillas by heating in the microwave for 5-10 seconds. Pile high with the avocado, lettuce and spring onion, add a spoonful of salsa, top with large flakes of fish and drizzle over the dressing.",
      image: 'uvuyxu1503067369.jpg',
      tags: 'Spicy,Fish',
      ingredients: [
        {
          name: 'cajun',
          measure: '2 tbsp',
          id: 558,
        },
        {
          name: 'cayenne pepper',
          measure: '1 tsp',
          id: 559,
        },
        {
          name: 'white fish',
          measure: '4 fillets',
          id: 560,
        },
        {
          name: 'vegetable oil',
          measure: '1 tsp',
          id: 561,
        },
        {
          name: 'flour tortilla',
          measure: '8',
          id: 562,
        },
        {
          name: 'avocado',
          measure: '1 sliced',
          id: 563,
        },
        {
          name: 'little gem lettuce',
          measure: '2 shredded',
          id: 564,
        },
        {
          name: 'spring onion',
          measure: '4 shredded',
          id: 565,
        },
        {
          name: 'salsa',
          measure: '1 x 300ml',
          id: 566,
        },
        {
          name: 'sour cream',
          measure: '1 pot',
          id: 567,
        },
        {
          name: 'lemon',
          measure: '1',
          id: 568,
        },
        {
          name: 'garlic',
          measure: '1 clove finely chopped',
          id: 569,
        },
      ],
    },
    {
      id: 53,
      name: 'Crock Pot Chicken Baked Tacos',
      category: 'Chicken',
      instructions:
        'Put the uncooked chicken breasts in the crock pot. Pour the full bottle of salad dressing over the chicken. Sprinkle the rest of the ingredients over the top and mix them in a bit with a spoon.\r\nCover your crock pot with the lid and cook on high for 4 hours.\r\nRemove all the chicken breasts from the crock pot and let cool.\r\nShred the chicken breasts and move to a glass bowl.\r\nPour most of the liquid over the shredded chicken.\r\nFOR THE TACOS:\r\nMake the guacamole sauce by mixing the avocado and green salsa together. Pour the guacamole mixture through a strainer until smooth and transfer to a squeeze bottle. Cut the tip off the lid of the squeeze bottle to make the opening more wide if needed.\r\nMake the sour cream sauce by mixing the sour cream and milk together until you get a more liquid sour cream sauce. Transfer to a squeeze bottle.\r\nIn a 9x 13 glass baking dish, fill all 12+ tacos with a layer of refried beans, cooked chicken and shredded cheese.\r\nBake at 450 for 10-15 minutes just until the cheese is melted and bubbling.\r\nOut of the oven top all the tacos with the sliced grape tomaotes, jalapeno and cilantro.\r\nFinish with a drizzle of guacamole and sour cream.\r\nEnjoy!',
      image: 'ypxvwv1505333929.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Chicken Breasts',
          measure: '4 - 6',
          id: 570,
        },
        {
          name: 'Vinaigrette Dressing',
          measure: '1 bottle',
          id: 571,
        },
        {
          name: 'Cumin',
          measure: '1½ tablespoon',
          id: 572,
        },
        {
          name: 'Smoked Paprika',
          measure: '1 tablespoon',
          id: 573,
        },
        {
          name: 'Garlic',
          measure: '1 teaspoon',
          id: 574,
        },
        {
          name: 'Refried Beans',
          measure: '1 can',
          id: 575,
        },
        {
          name: 'Hard Taco Shells',
          measure: '12',
          id: 576,
        },
        {
          name: 'Shredded Mexican Cheese',
          measure: '2 cups',
          id: 577,
        },
        {
          name: 'Grape Tomatoes',
          measure: 'Halved',
          id: 578,
        },
        {
          name: 'Jalapeno',
          measure: 'Sliced and Seeded',
          id: 579,
        },
        {
          name: 'Avocado',
          measure: 'Peeled and Sliced',
          id: 580,
        },
        {
          name: 'Green Salsa',
          measure: '2 tablespoons',
          id: 581,
        },
        {
          name: 'Sour Cream',
          measure: '3 tablespoons',
          id: 582,
        },
        {
          name: 'Milk',
          measure: '1 tablespoon',
          id: 583,
        },
      ],
    },
    {
      id: 54,
      name: 'Chicken Karaage',
      category: 'Chicken',
      instructions:
        "Add the ginger, garlic, soy sauce, sake and sugar to a bowl and whisk to combine. Add the chicken, then stir to coat evenly. Cover and refrigerate for at least 1 hour.\r\n\r\nAdd 1 inch of vegetable oil to a heavy bottomed pot and heat until the oil reaches 360 degrees F. Line a wire rack with 2 sheets of paper towels and get your tongs out. Put the potato starch in a bowl\r\n\r\nAdd a handful of chicken to the potato starch and toss to coat each piece evenly.\r\n\r\nFry the karaage in batches until the exterior is a medium brown and the chicken is cooked through. Transfer the fried chicken to the paper towel lined rack. If you want the karaage to stay crispy longer, you can fry the chicken a second time, until it's a darker color after it's cooled off once. Serve with lemon wedges.",
      image: 'tyywsw1505930373.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Chicken thigh',
          measure: '450 grams Boneless skin',
          id: 584,
        },
        {
          name: 'Ginger',
          measure: '1 tablespoon',
          id: 585,
        },
        {
          name: 'Garlic',
          measure: '1 clove',
          id: 586,
        },
        {
          name: 'Soy sauce',
          measure: '2 tablespoons',
          id: 587,
        },
        {
          name: 'Sake',
          measure: '1 tablespoon',
          id: 588,
        },
        {
          name: 'Granulated sugar',
          measure: '2 teaspoon',
          id: 589,
        },
        {
          name: 'Potato starch',
          measure: '1/3 cup',
          id: 590,
        },
        {
          name: 'Vegetable oil',
          measure: '1/3 cup',
          id: 591,
        },
        {
          name: 'Lemon',
          measure: '1/3 cup',
          id: 592,
        },
      ],
    },
    {
      id: 55,
      name: 'Coq au vin',
      category: 'Chicken',
      instructions:
        'Heat 1 tbsp of the oil in a large, heavy-based saucepan or flameproof dish. Tip in the bacon and fry until crisp. Remove and drain on kitchen paper. Add the shallots to the pan and fry, stirring or shaking the pan often, for 5-8 mins until well browned all over. Remove and set aside with the bacon.\r\nPat the chicken pieces dry with kitchen paper. Pour the remaining oil into the pan, then fry half the chicken pieces, turning regularly, for 5-8 mins until well browned. Remove, then repeat with the remaining chicken. Remove and set aside.\r\nScatter in the garlic and fry briefly, then, with the heat medium-high, pour in the brandy or Cognac, stirring the bottom of the pan to deglaze. The alcohol should sizzle and start to evaporate so there is not much left.\r\nReturn the chicken legs and thighs to the pan along with any juices, then pour in a little of the wine, stirring the bottom of the pan again. Stir in the rest of the wine, the stock and tomato purée, drop in the bouquet garni, season with pepper and a pinch of salt, then return the bacon and shallots to the pan. Cover, lower the heat to a gentle simmer, add the chicken breasts and cook for 50 mins-1hr.\r\nJust before ready to serve, heat the oil for the mushrooms in a large non-stick frying pan. Add the mushrooms and fry over a high heat for a few mins until golden. Remove and keep warm.\r\nLift the chicken, shallots and bacon from the pan and transfer to a warmed serving dish. Remove the bouquet garni. To make the thickener, mix the flour, olive oil and butter in a small bowl using the back of a teaspoon. Bring the wine mixture to a gentle boil, then gradually drop in small pieces of the thickener, whisking each piece in using a wire whisk. Simmer for 1-2 mins. Scatter the mushrooms over the chicken, then pour over the wine sauce. Garnish with chopped parsley.',
      image: 'qstyvs1505931190.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Olive Oil',
          measure: '1½ tbsp',
          id: 593,
        },
        {
          name: 'Bacon',
          measure: '3 rashers (100g) chopped dry-cured',
          id: 594,
        },
        {
          name: 'Shallots',
          measure: '12 small',
          id: 595,
        },
        {
          name: 'Chicken Legs',
          measure: '2 (460g)',
          id: 596,
        },
        {
          name: 'Chicken Thighs',
          measure: '4 (650g)',
          id: 597,
        },
        {
          name: 'Chicken Breasts',
          measure: '2 (280g)',
          id: 598,
        },
        {
          name: 'Garlic',
          measure: '3 finely chopped',
          id: 599,
        },
        {
          name: 'Brandy',
          measure: '3 tbsp',
          id: 600,
        },
        {
          name: 'Red Wine',
          measure: '600ml',
          id: 601,
        },
        {
          name: 'Chicken Stock',
          measure: '150ml',
          id: 602,
        },
        {
          name: 'tomato puree',
          measure: '2 tsp',
          id: 603,
        },
        {
          name: 'thyme',
          measure: '3 sprigs',
          id: 604,
        },
        {
          name: 'Rosemary',
          measure: '2 sprigs',
          id: 605,
        },
        {
          name: 'bay leaves',
          measure: '2',
          id: 606,
        },
        {
          name: 'parsley',
          measure: 'garnish',
          id: 607,
        },
        {
          name: 'chestnut mushroom',
          measure: '250g',
          id: 608,
        },
        {
          name: 'plain flour',
          measure: '2 tbsp',
          id: 609,
        },
        {
          name: 'butter',
          measure: '1 tsp',
          id: 610,
        },
      ],
    },
    {
      id: 56,
      name: 'Chilli prawn linguine',
      category: 'Pasta',
      instructions:
        'Mix the dressing ingredients in a small bowl and season with salt and pepper. Set aside.\r\n\r\nCook the pasta according to the packet instructions. Add the sugar snap peas for the last minute or so of cooking time.\r\n\r\nMeanwhile, heat the oil in a wok or large frying pan, toss in the garlic and chilli and cook over a fairly gentle heat for about 30 seconds without letting the garlic brown. Tip in the prawns and cook over a high heat, stirring frequently, for about 3 minutes until they turn pink.\r\n\r\nAdd the tomatoes and cook, stirring occasionally, for 3 minutes until they just start to soften. Drain the pasta and sugar snaps well, then toss into the prawn mixture. Tear in the basil leaves, stir, and season with salt and pepper.\r\n\r\nServe with salad leaves drizzled with the lime dressing, and warm crusty bread.',
      image: 'usywpp1511189717.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Linguine Pasta',
          measure: '280g',
          id: 611,
        },
        {
          name: 'Sugar Snap Peas',
          measure: '200g',
          id: 612,
        },
        {
          name: 'Olive Oil',
          measure: '2 tblsp',
          id: 613,
        },
        {
          name: 'Garlic Clove',
          measure: '2 cloves chopped',
          id: 614,
        },
        {
          name: 'Red Chilli',
          measure: '1 large',
          id: 615,
        },
        {
          name: 'King Prawns',
          measure: '24 Skinned',
          id: 616,
        },
        {
          name: 'Cherry Tomatoes',
          measure: '12',
          id: 617,
        },
        {
          name: 'Basil Leaves',
          measure: 'Handful',
          id: 618,
        },
        {
          name: 'Lettuce',
          measure: 'Leaves',
          id: 619,
        },
        {
          name: 'Bread',
          measure: 'to serve',
          id: 620,
        },
        {
          name: 'Fromage Frais',
          measure: '2 tbsp',
          id: 621,
        },
        {
          name: 'Lime',
          measure: 'Grated Zest of 2',
          id: 622,
        },
        {
          name: 'Caster Sugar',
          measure: '2 tsp',
          id: 623,
        },
      ],
    },
    {
      id: 57,
      name: 'Clam chowder',
      category: 'Starter',
      instructions:
        "Rinse the clams in several changes of cold water and drain well. Tip the clams into a large pan with 500ml of water. Cover, bring to the boil and simmer for 2 mins until the clams have just opened. Tip the contents of the pan into a colander over a bowl to catch the clam stock. When cool enough to handle, remove the clams from their shells – reserving a handful of empty shells for presentation if you want. Strain the clam stock into a jug, leaving any grit in the bottom of the bowl. You should have around 800ml stock.\r\nHeat the butter in the same pan and sizzle the bacon for 3-4 mins until it starts to brown. Stir in the onion, thyme and bay and cook everything gently for 10 mins until the onion is soft and golden. Scatter over the flour and stir in to make a sandy paste, cook for 2 mins more, then gradually stir in the clam stock then the milk and the cream.\r\nThrow in the potatoes, bring everything to a simmer and leave to bubble away gently for 10 mins or until the potatoes are cooked. Use a fork to crush a few of the potato chunks against the side of the pan to help thicken – you still want lots of defined chunks though. Stir through the clam meat and the few clam shells, if you've gone down that route, and simmer for a minute to reheat. Season with plenty of black pepper and a little salt, if needed, then stir through the parsley just before ladling into bowls or hollowed-out crusty rolls.",
      image: 'rvtvuw1511190488.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Clams',
          measure: '1½ kg',
          id: 624,
        },
        {
          name: 'Butter',
          measure: '50g',
          id: 625,
        },
        {
          name: 'Bacon',
          measure: '150g',
          id: 626,
        },
        {
          name: 'Onion',
          measure: '1 finely chopped',
          id: 627,
        },
        {
          name: 'Thyme',
          measure: 'sprigs of fresh',
          id: 628,
        },
        {
          name: 'Bay Leaf',
          measure: '1',
          id: 629,
        },
        {
          name: 'Plain Flour',
          measure: '1 tbls',
          id: 630,
        },
        {
          name: 'Milk',
          measure: '150ml',
          id: 631,
        },
        {
          name: 'Double Cream',
          measure: '150ml',
          id: 632,
        },
        {
          name: 'Potatoes',
          measure: '2 medium',
          id: 633,
        },
        {
          name: 'Parsley',
          measure: 'Chopped',
          id: 634,
        },
      ],
    },
    {
      id: 58,
      name: 'Creamy Tomato Soup',
      category: 'Starter',
      instructions:
        'Put the oil, onions, celery, carrots, potatoes and bay leaves in a big casserole dish, or two saucepans. Fry gently until the onions are softened – about 10-15 mins. Fill the kettle and boil it.\r\nStir in the tomato purée, sugar, vinegar, chopped tomatoes and passata, then crumble in the stock cubes. Add 1 litre boiling water and bring to a simmer. Cover and simmer for 15 mins until the potato is tender, then remove the bay leaves. Purée with a stick blender (or ladle into a blender in batches) until very smooth. Season to taste and add a pinch more sugar if it needs it. The soup can now be cooled and chilled for up to 2 days, or frozen for up to 3 months.\r\nTo serve, reheat the soup, stirring in the milk – try not to let it boil. Serve in small bowls with cheesy sausage rolls.',
      image: 'stpuws1511191310.jpg',
      tags: 'Baking',
      ingredients: [
        {
          name: 'Olive Oil',
          measure: '3 tbsp',
          id: 635,
        },
        {
          name: 'Onions',
          measure: '2 chopped',
          id: 636,
        },
        {
          name: 'Celery',
          measure: '2 sticks',
          id: 637,
        },
        {
          name: 'Carrots',
          measure: '300g',
          id: 638,
        },
        {
          name: 'Potatoes',
          measure: '500g',
          id: 639,
        },
        {
          name: 'Bay Leaf',
          measure: '4',
          id: 640,
        },
        {
          name: 'Tomato Puree',
          measure: '5 tblsp',
          id: 641,
        },
        {
          name: 'Sugar',
          measure: '2 tblsp',
          id: 642,
        },
        {
          name: 'White Vinegar',
          measure: '2 tblsp',
          id: 643,
        },
        {
          name: 'Chopped Tomatoes',
          measure: '1½ kg',
          id: 644,
        },
        {
          name: 'Passata',
          measure: '500g',
          id: 645,
        },
        {
          name: 'Vegetable Stock Cube',
          measure: '3',
          id: 646,
        },
        {
          name: 'Whole Milk',
          measure: '400ml',
          id: 647,
        },
      ],
    },
    {
      id: 59,
      name: 'Chicken & mushroom Hotpot',
      category: 'Chicken',
      instructions:
        'Heat oven to 200C/180C fan/gas 6. Put the butter in a medium-size saucepan and place over a medium heat. Add the onion and leave to cook for 5 mins, stirring occasionally. Add the mushrooms to the saucepan with the onions.\r\n\r\nOnce the onion and mushrooms are almost cooked, stir in the flour – this will make a thick paste called a roux. If you are using a stock cube, crumble the cube into the roux now and stir well. Put the roux over a low heat and stir continuously for 2 mins – this will cook the flour and stop the sauce from having a floury taste.\r\n\r\nTake the roux off the heat. Slowly add the fresh stock, if using, or pour in 500ml water if you’ve used a stock cube, stirring all the time. Once all the liquid has been added, season with pepper, a pinch of nutmeg and mustard powder. Put the saucepan back onto a medium heat and slowly bring it to the boil, stirring all the time. Once the sauce has thickened, place on a very low heat. Add the cooked chicken and vegetables to the sauce and stir well. Grease a medium-size ovenproof pie dish with a little butter and pour in the chicken and mushroom filling.\r\n\r\nCarefully lay the potatoes on top of the hot-pot filling, overlapping them slightly, almost like a pie top.\r\n\r\nBrush the potatoes with a little melted butter and cook in the oven for about 35 mins. The hot-pot is ready once the potatoes are cooked and golden brown.',
      image: 'uuuspp1511297945.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Butter',
          measure: '50g',
          id: 648,
        },
        {
          name: 'Onion',
          measure: '1 chopped',
          id: 649,
        },
        {
          name: 'Mushrooms',
          measure: '100g',
          id: 650,
        },
        {
          name: 'Plain Flour',
          measure: '40g',
          id: 651,
        },
        {
          name: 'Chicken Stock Cube',
          measure: '1',
          id: 652,
        },
        {
          name: 'Nutmeg',
          measure: 'pinch',
          id: 653,
        },
        {
          name: 'Mustard Powder',
          measure: 'pinch',
          id: 654,
        },
        {
          name: 'Chicken',
          measure: '250g',
          id: 655,
        },
        {
          name: 'Sweetcorn',
          measure: '2 Handfuls',
          id: 656,
        },
        {
          name: 'Potatoes',
          measure: '2 large',
          id: 657,
        },
        {
          name: 'Butter',
          measure: '1 knob',
          id: 658,
        },
      ],
    },
    {
      id: 60,
      name: 'Chicken Couscous',
      category: 'Chicken',
      instructions:
        'Heat the olive oil in a large frying pan and cook the onion for 1-2 mins just until softened. Add the chicken and fry for 7-10 mins until cooked through and the onions have turned golden. Grate over the ginger, stir through the harissa to coat everything and cook for 1 min more.\r\n\r\nTip in the apricots, chickpeas and couscous, then pour over the stock and stir once. Cover with a lid or tightly cover the pan with foil and leave for about 5 mins until the couscous has soaked up all the stock and is soft. Fluff up the couscous with a fork and scatter over the coriander to serve. Serve with extra harissa, if you like.',
      image: 'qxytrx1511304021.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Olive Oil',
          measure: '1 tbsp',
          id: 659,
        },
        {
          name: 'Onion',
          measure: '1 chopped',
          id: 660,
        },
        {
          name: 'Chicken Breast',
          measure: '200g',
          id: 661,
        },
        {
          name: 'Ginger',
          measure: 'pinch',
          id: 662,
        },
        {
          name: 'Harissa Spice',
          measure: '2 tblsp',
          id: 663,
        },
        {
          name: 'Dried Apricots',
          measure: '10',
          id: 664,
        },
        {
          name: 'Chickpeas',
          measure: '220g',
          id: 665,
        },
        {
          name: 'Couscous',
          measure: '200g',
          id: 666,
        },
        {
          name: 'Chicken Stock',
          measure: '200ml',
          id: 667,
        },
        {
          name: 'Coriander',
          measure: 'Handful',
          id: 668,
        },
      ],
    },
    {
      id: 61,
      name: 'Chocolate Avocado Mousse',
      category: 'Dessert',
      instructions:
        '1. Blend all the mousse ingredients together in your food processor until smooth. Add the cacao powder first and, as you blend, have all the ingredients to hand in order to adjust the ratios slightly as the size of avocados and bananas varies so much. The perfect ratio in order to avoid the dish tasting too much of either is to use equal amounts of both.\r\n\r\n2. Taste and add a few drops of stevia if you feel you need more sweetness.\r\n\r\n3. Fill little cups or shot glasses with the mousse, sprinkle with the cacao powder or nibs and serve.\r\n\r\nTip If you don’t have a frozen banana to hand you can just use a normal one and then chill the mousse before serving for a cooling dessert.',
      image: 'uttuxy1511382180.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Banana',
          measure: '1',
          id: 669,
        },
        {
          name: 'Cacao',
          measure: '3 tbsp',
          id: 670,
        },
        {
          name: 'Avocado',
          measure: '1',
          id: 671,
        },
        {
          name: 'Honey',
          measure: '2 tblsp',
          id: 672,
        },
        {
          name: 'Lemon Juice',
          measure: '1 tsp',
          id: 673,
        },
        {
          name: 'Vanilla',
          measure: '1 tsp',
          id: 674,
        },
        {
          name: 'Water',
          measure: '2 tbsp',
          id: 675,
        },
        {
          name: 'Sea Salt',
          measure: 'pinch',
          id: 676,
        },
      ],
    },
    {
      id: 62,
      name: 'Choc Chip Pecan Pie',
      category: 'Dessert',
      instructions:
        'First, make the pastry. Tip the ingredients into a food processor with 1 /4 tsp salt. Blend until the mixture resembles breadcrumbs. Drizzle 2-3 tsp cold water into the funnel while the blade is running – the mixture should start to clump together. Tip onto a work surface and bring together, kneading briefly into a ball. Pat into a disc, wrap in cling film, and chill for at least 20 mins. Heat oven to 200C/180C fan/gas 6.\r\n\r\nRemove the pastry from the fridge and leave at room temperature for 5 mins to soften. Flour the work surface, then unwrap the pastry and roll to a circle the thickness of a £1 coin. Use the pastry to line a deep, 23cm round fluted tin – mine was about 3cm deep. Press the pastry into the corners and up the sides, making sure there are no gaps. Leave 1cm pastry overhanging (save some of the pastry scraps for later). Line with baking parchment (scrunch it up first to make it more pliable) and fill with baking beans. Blind-bake for 15-20 mins until the sides are set, then remove the parchment and beans and return to the oven for 5 mins until golden brown. Trim the pastry so it’s flush with the top of the tin – a small serrated knife is best for this. If there are any cracks, patch them up with the pastry scraps.\r\n\r\nMeanwhile, weigh the butter, syrup and sugars into a pan, and add 1 /4 tsp salt. Heat until the butter has melted and the sugar dissolved, stirring until smooth. Remove from the heat and cool for 10 mins. Reduce oven to 160C/140C fan/gas 3.\r\n\r\nBeat the eggs in a bowl. Add the syrup mixture, vanilla and pecans, and mix until well combined. Pour half the mixture into the tart case, scatter over half the chocolate chips, then cover with the remaining filling and chocolate chips. Bake on the middle shelf for 50-55 mins until set. Remove from the oven and leave to cool, then chill for at least 2 hrs before serving.',
      image: 'rqvwxt1511384809.jpg',
      tags: 'Pie,Desert,Sweet,Nutty',
      ingredients: [
        {
          name: 'Plain Flour',
          measure: '300g',
          id: 677,
        },
        {
          name: 'Butter',
          measure: '75g',
          id: 678,
        },
        {
          name: 'Cream Cheese',
          measure: '100g',
          id: 679,
        },
        {
          name: 'Icing Sugar',
          measure: '1 tbls',
          id: 680,
        },
        {
          name: 'Butter',
          measure: '150g',
          id: 681,
        },
        {
          name: 'Maple Syrup',
          measure: '200ml',
          id: 682,
        },
        {
          name: 'Light Brown Soft Sugar',
          measure: '250g',
          id: 683,
        },
        {
          name: 'Dark Brown Soft Sugar',
          measure: '100g',
          id: 684,
        },
        {
          name: 'Eggs',
          measure: '4',
          id: 685,
        },
        {
          name: 'Vanilla Extract',
          measure: '1 tsp',
          id: 686,
        },
        {
          name: 'Pecan Nuts',
          measure: '400g',
          id: 687,
        },
        {
          name: 'Dark Chocolate Chips',
          measure: '200g',
          id: 688,
        },
      ],
    },
    {
      id: 63,
      name: 'Chocolate Raspberry Brownies',
      category: 'Dessert',
      instructions:
        'Heat oven to 180C/160C fan/gas 4. Line a 20 x 30cm baking tray tin with baking parchment. Put the chocolate, butter and sugar in a pan and gently melt, stirring occasionally with a wooden spoon. Remove from the heat.\r\nStir the eggs, one by one, into the melted chocolate mixture. Sieve over the flour and cocoa, and stir in. Stir in half the raspberries, scrape into the tray, then scatter over the remaining raspberries. Bake on the middle shelf for 30 mins or, if you prefer a firmer texture, for 5 mins more. Cool before slicing into squares. Store in an airtight container for up to 3 days.',
      image: 'yypvst1511386427.jpg',
      tags: 'Chocolate,Desert,Snack',
      ingredients: [
        {
          name: 'Dark Chocolate',
          measure: '200g',
          id: 689,
        },
        {
          name: 'Milk Chocolate',
          measure: '100g',
          id: 690,
        },
        {
          name: 'Salted Butter',
          measure: '250g',
          id: 691,
        },
        {
          name: 'Light Brown Soft Sugar',
          measure: '400g',
          id: 692,
        },
        {
          name: 'Eggs',
          measure: '4 large',
          id: 693,
        },
        {
          name: 'Plain Flour',
          measure: '140g',
          id: 694,
        },
        {
          name: 'Cocoa',
          measure: '50g',
          id: 695,
        },
        {
          name: 'Raspberries',
          measure: '200g',
          id: 696,
        },
      ],
    },
    {
      id: 64,
      name: 'Chickpea Fajitas',
      category: 'Vegetarian',
      instructions:
        'Heat oven to 200C/180C fan/gas 6 and line a baking tray with foil. Drain the chickpeas, pat dry and tip onto the prepared baking tray. Add the oil and paprika, toss to coat, then roast for 20-25 mins until browned and crisp, shaking halfway through cooking.\r\n\r\nMeanwhile, put the tomatoes and onion in a small bowl with the vinegar and set aside to pickle. Put the avocado in another bowl and mash with a fork, leaving some larger chunks. Stir in the lime juice and season well. Mix the soured cream with the harissa and set aside until ready to serve.\r\n\r\nHeat a griddle pan until nearly smoking. Add the tortillas , one at a time, charring each side until hot with griddle lines. \r\n\r\nPut everything on the table and build the fajitas : spread a little of the harissa cream over the tortilla, top with roasted chickpeas, guacamole, pickled salsa and coriander, if you like. Serve with the lime wedges for squeezing over.',
      image: 'tvtxpq1511464705.jpg',
      tags: 'Vegetarian',
      ingredients: [
        {
          name: 'Chickpeas',
          measure: '400g',
          id: 697,
        },
        {
          name: 'Olive Oil',
          measure: '1 tblsp',
          id: 698,
        },
        {
          name: 'Paprika',
          measure: 'pinch',
          id: 699,
        },
        {
          name: 'Tomatoes',
          measure: '2 small cut chunks',
          id: 700,
        },
        {
          name: 'Red Onions',
          measure: '1 finely sliced',
          id: 701,
        },
        {
          name: 'Red Wine Vinegar',
          measure: '2 tsp',
          id: 702,
        },
        {
          name: 'Avocado',
          measure: '1',
          id: 703,
        },
        {
          name: 'Lime',
          measure: 'Juice of 1',
          id: 704,
        },
        {
          name: 'Lime',
          measure: 'Chopped',
          id: 705,
        },
        {
          name: 'Sour Cream',
          measure: '100g',
          id: 706,
        },
        {
          name: 'Harissa Spice',
          measure: '2 tsp',
          id: 707,
        },
        {
          name: 'Corn Tortillas',
          measure: '4',
          id: 708,
        },
        {
          name: 'Coriander',
          measure: 'to serve',
          id: 709,
        },
      ],
    },
    {
      id: 65,
      name: 'Chicken Ham and Leek Pie',
      category: 'Chicken',
      instructions:
        'Heat the chicken stock in a lidded saucepan. Add the chicken breast and bring to a low simmer. Cover with a lid and cook for 10 minutes. Remove the chicken breasts from the water with tongs and place on a plate. Pour the cooking liquor into a large jug.\r\nMelt 25g/1oz of the butter in a large heavy-based saucepan over a low heat. Stir in the leeks and fry gently for two minutes, stirring occasionally until just softened. Add the garlic and cook for a further minute. Add the remaining butter and stir in the flour as soon as the butter has melted. Cook for 30 seconds, stirring constantly.\r\nSlowly pour the milk into the pan, just a little at a time, stirring well between each adding. Gradually add 250ml/10fl oz of the reserved stock and the wine, if using, stirring until the sauce is smooth and thickened slightly. Bring to a gentle simmer and cook for 3 minutes.\r\nSeason the mixture, to taste, with salt and freshly ground black pepper. Remove from the heat and stir in the cream. Pour into a large bowl and cover the surface of the sauce with cling ilm to prevent a skin forming. Set aside to cool.\r\nPreheat the oven to 200C/400F/Gas 6. Put a baking tray in the oven to heat.\r\nFor the pastry, put the flour and butter in a food processor and blend on the pulse setting until the mixture resembles fine breadcrumbs. With the motor running, add the beaten egg and water and blend until the mixture forms a ball. Portion off 250g/10oz of pastry for the lid.\r\nRoll the remaining pastry out on a lightly floured surface, turning the pastry frequently until around 5mm/¼in thick and 4cm/1½in larger than the pie dish. Lift the pastry over the rolling pin and place it gently into the pie dish. Press the pastry firmly up the sides, making sure there are no air bubbles. Leave the excess pastry overhanging the sides.\r\nCut the chicken breasts into 3cm/1¼in pieces. Stir the chicken, ham and leeks into the cooled sauce. Pour the chicken filling into the pie dish. Brush the rim of the dish with beaten egg. Roll out the reserved pastry for the lid.\r\nCover the pie with the pastry lid and press the edges together firmly to seal. Trim any excess pastry.\r\nMake a small hole in the centre of the pie with the tip of a knife. Glaze the top of the pie with beaten egg. Bake on the preheated tray in the centre of the oven for 35-40 minutes or until the pie is golden-brown all over and the filling is piping hot.',
      image: 'xrrtss1511555269.jpg',
      tags: 'Pie,Meat',
      ingredients: [
        {
          name: 'Chicken Stock',
          measure: '450ml',
          id: 710,
        },
        {
          name: 'Chicken Breast',
          measure: '3',
          id: 711,
        },
        {
          name: 'Butter',
          measure: '75g',
          id: 712,
        },
        {
          name: 'Leek',
          measure: '2 sliced',
          id: 713,
        },
        {
          name: 'Garlic',
          measure: '2 cloves minced',
          id: 714,
        },
        {
          name: 'Plain Flour',
          measure: '50g',
          id: 715,
        },
        {
          name: 'Milk',
          measure: '200ml',
          id: 716,
        },
        {
          name: 'White Wine',
          measure: '3 tbs',
          id: 717,
        },
        {
          name: 'Double Cream',
          measure: '150ml',
          id: 718,
        },
        {
          name: 'Ham',
          measure: '150g',
          id: 719,
        },
        {
          name: 'Sea Salt',
          measure: 'spinkling',
          id: 720,
        },
        {
          name: 'Pepper',
          measure: 'pinch',
          id: 721,
        },
        {
          name: 'Plain Flour',
          measure: '350g',
          id: 722,
        },
        {
          name: 'Butter',
          measure: '200g',
          id: 723,
        },
        {
          name: 'Free-range Egg, Beaten',
          measure: '1',
          id: 724,
        },
        {
          name: 'Cold Water',
          measure: '1 tbls',
          id: 725,
        },
        {
          name: 'Free-range Egg, Beaten',
          measure: '1',
          id: 726,
        },
      ],
    },
    {
      id: 66,
      name: 'Chicken Parmentier',
      category: 'Chicken',
      instructions:
        'For the topping, boil the potatoes in salted water until tender. Drain and push through a potato ricer, or mash thoroughly. Stir in the butter, cream and egg yolks. Season and set aside.\r\nFor the filling, melt the butter in a large pan. Add the shallots, carrots and celery and gently fry until soft, then add the garlic. Pour in the wine and cook for 1 minute. Stir in the tomato purée, chopped tomatoes and stock and cook for 10–15 minutes, until thickened. Add the shredded chicken, olives and parsley. Season to taste with salt and pepper.\r\nPreheat the oven to 180C/160C Fan/Gas 4.\r\nPut the filling in a 20x30cm/8x12in ovenproof dish and top with the mashed potato. Grate over the Gruyère. Bake for 30–35 minutes, until piping hot and the potato is golden-brown.',
      image: 'uwvxpv1511557015.jpg',
      tags: 'Meat,Dairy',
      ingredients: [
        {
          name: 'Potatoes',
          measure: '1.5kg',
          id: 727,
        },
        {
          name: 'Butter',
          measure: '30g',
          id: 728,
        },
        {
          name: 'Double Cream',
          measure: '5 tblsp',
          id: 729,
        },
        {
          name: 'Egg Yolks',
          measure: '2',
          id: 730,
        },
        {
          name: 'Butter',
          measure: '30g',
          id: 731,
        },
        {
          name: 'Shallots',
          measure: '7',
          id: 732,
        },
        {
          name: 'Carrots',
          measure: '3 chopped',
          id: 733,
        },
        {
          name: 'Celery',
          measure: '2 sticks',
          id: 734,
        },
        {
          name: 'Garlic Clove',
          measure: '1 finely chopped',
          id: 735,
        },
        {
          name: 'White Wine',
          measure: '4 tbsp',
          id: 736,
        },
        {
          name: 'Tomato Puree',
          measure: '1 tbls',
          id: 737,
        },
        {
          name: 'Tinned Tomatos',
          measure: '400g',
          id: 738,
        },
        {
          name: 'Chicken Stock',
          measure: '350ml',
          id: 739,
        },
        {
          name: 'Chicken',
          measure: '600g',
          id: 740,
        },
        {
          name: 'Black Olives',
          measure: '16',
          id: 741,
        },
        {
          name: 'Parsley',
          measure: '2 tbs',
          id: 742,
        },
        {
          name: 'Gruyere cheese',
          measure: '50g',
          id: 743,
        },
      ],
    },
    {
      id: 67,
      name: 'Carrot Cake',
      category: 'Dessert',
      instructions:
        'For the carrot cake, preheat the oven to 160C/325F/Gas 3. Grease and line a 26cm/10in springform cake tin.\r\nMix all of the ingredients for the carrot cake, except the carrots and walnuts, together in a bowl until well combined. Stir in the carrots and walnuts.\r\nSpoon the mixture into the cake tin and bake for 1 hour 15 minutes, or until a skewer inserted into the middle comes out clean. Remove the cake from the oven and set aside to cool for 10 minutes, then carefully remove the cake from the tin and set aside to cool completely on a cooling rack.\r\nMeanwhile, for the icing, beat the cream cheese, caster sugar and butter together in a bowl until fluffy. Spread the icing over the top of the cake with a palette knife.',
      image: 'vrspxv1511722107.jpg',
      tags: 'Cake,Treat,Sweet',
      ingredients: [
        {
          name: 'Vegetable Oil',
          measure: '450ml',
          id: 744,
        },
        {
          name: 'Plain Flour',
          measure: '400g',
          id: 745,
        },
        {
          name: 'Bicarbonate Of Soda',
          measure: '2 tsp',
          id: 746,
        },
        {
          name: 'Sugar',
          measure: '550ml',
          id: 747,
        },
        {
          name: 'Eggs',
          measure: '5',
          id: 748,
        },
        {
          name: 'Salt',
          measure: '½ tsp',
          id: 749,
        },
        {
          name: 'Cinnamon',
          measure: '2 tsp',
          id: 750,
        },
        {
          name: 'Carrots',
          measure: '500g grated',
          id: 751,
        },
        {
          name: 'Walnuts',
          measure: '150g',
          id: 752,
        },
        {
          name: 'Cream Cheese',
          measure: '200g',
          id: 753,
        },
        {
          name: 'Caster Sugar',
          measure: '150g',
          id: 754,
        },
        {
          name: 'Butter',
          measure: '100g',
          id: 755,
        },
      ],
    },
    {
      id: 68,
      name: 'Chelsea Buns',
      category: 'Dessert',
      instructions:
        'Sift the flour and salt into a large bowl. Make a well in the middle and add the yeast.\r\nMeanwhile, warm the milk and butter in a saucepan until the butter melts and the mixture is lukewarm.\r\nAdd the milk mixture and egg to the flour mixture and stir until the contents of the bowl come together as a soft dough. (You may need to add a little extra flour.)\r\nTip the dough onto a generously floured work surface. Knead for five minutes, adding more flour if necessary, until the dough is smooth and elastic and no longer feels sticky.\r\nLightly oil a bowl with a little of the vegetable oil. Place the dough into the bowl and turn until it is covered in the oil. Cover the bowl with cling film and set aside in a warm place for one hour, or until the dough has doubled in size.\r\nLightly grease a baking tray.\r\nFor the filling, knock the dough back to its original size and turn out onto a lightly floured work surface. Roll the dough out into a rectangle 0.5cm/¼in thick. Brush all over with the melted butter, then sprinkle over the brown sugar, cinnamon and dried fruit.\r\nRoll the dough up into a tight cylinder , cut ten 4cm/1½in slice and place them onto a lightly greased baking sheet, leaving a little space between each slice. Cover with a tea towel and set aside to rise for 30 minutes.\r\nPreheat oven to 190C/375F/Gas 5.\r\nBake the buns in the oven for 20-25 minutes, or until risen and golden-brown.\r\nMeanwhile, for the glaze, heat the milk and sugar in a saucepan until boiling. Reduce the heat and simmer for 2-3 minutes.\r\nRemove the buns from the oven and brush with the glaze, then set aside to cool on a wire rack.',
      image: 'vqpwrv1511723001.jpg',
      tags: 'Bun,Baking,Treat',
      ingredients: [
        {
          name: 'White Flour',
          measure: '500g',
          id: 756,
        },
        {
          name: 'Salt',
          measure: '1 tsp',
          id: 757,
        },
        {
          name: 'Yeast',
          measure: '7g',
          id: 758,
        },
        {
          name: 'Milk',
          measure: '300ml',
          id: 759,
        },
        {
          name: 'Butter',
          measure: '40g',
          id: 760,
        },
        {
          name: 'Eggs',
          measure: '1',
          id: 761,
        },
        {
          name: 'Vegetable Oil',
          measure: 'Dash',
          id: 762,
        },
        {
          name: 'Butter',
          measure: '25g',
          id: 763,
        },
        {
          name: 'Brown Sugar',
          measure: '75g',
          id: 764,
        },
        {
          name: 'Cinnamon',
          measure: '2 tsp',
          id: 765,
        },
        {
          name: 'Dried Fruit',
          measure: '150g',
          id: 766,
        },
        {
          name: 'Milk',
          measure: '2 tbs',
          id: 767,
        },
        {
          name: 'Caster Sugar',
          measure: '2 tbs',
          id: 768,
        },
      ],
    },
    {
      id: 69,
      name: 'Chocolate Souffle',
      category: 'Dessert',
      instructions:
        'Heat oven to 220C/fan 200C/gas 7 and place a baking tray on the top shelf. For the sauce, heat the cream and sugar until boiling. Remove from the heat, stir in the chocolate and butter until melted, then keep warm.\r\nBrush 6 x 150ml ramekins with melted butter, sprinkle with the 2 tbsp caster sugar, then tip out any excess. Melt the chocolate and cream in a bowl over a pan of simmering water, cool, then mix in the egg yolks. Whisk the egg whites until they hold their shape, then add the sugar, 1 tbsp at a time, whisking back to the same consistency. Mix a spoonful into the chocolate, then gently fold in the rest.\r\nWorking quickly, fill the ramekins, wipe the rims clean and run your thumb around the edges. Turn oven down to 200C/fan 180C/gas 6, place the ramekins onto the baking tray, then bake for 8-10 mins until risen with a slight wobble. Don’t open the oven door too early as this may make them collapse.\r\nOnce the soufflés are ready, dust with icing sugar, scoop a small hole from their tops, then pour in some of the hot chocolate sauce. Replace the lids and serve straight away.',
      image: 'twspvx1511784937.jpg',
      tags: 'DinnerParty,Desert,Pudding,Chocolate',
      ingredients: [
        {
          name: 'Single Cream',
          measure: '142ml',
          id: 769,
        },
        {
          name: 'Caster Sugar',
          measure: '25g',
          id: 770,
        },
        {
          name: 'Dark Chocolate',
          measure: '100g',
          id: 771,
        },
        {
          name: 'Butter',
          measure: '25g',
          id: 772,
        },
        {
          name: 'Butter',
          measure: 'drizzle',
          id: 773,
        },
        {
          name: 'Caster Sugar',
          measure: '50g',
          id: 774,
        },
        {
          name: 'Dark Chocolate',
          measure: '175g',
          id: 775,
        },
        {
          name: 'Double Cream',
          measure: '2 tbs',
          id: 776,
        },
        {
          name: 'Egg Yolks',
          measure: '4',
          id: 777,
        },
        {
          name: 'Egg White',
          measure: '5',
          id: 778,
        },
        {
          name: 'Double Cream',
          measure: '2 tbs',
          id: 779,
        },
        {
          name: 'Icing Sugar',
          measure: 'to serve',
          id: 780,
        },
      ],
    },
    {
      id: 70,
      name: 'Chinon Apple Tarts',
      category: 'Dessert',
      instructions:
        'To make the red wine jelly, put the red wine, jam sugar, star anise, clove, cinnamon stick, allspice, split vanilla pod and seeds in a medium saucepan. Stir together, then heat gently to dissolve the sugar. Turn up the heat and boil for 20 mins until reduced and syrupy. Strain into a small, sterilised jam jar and leave to cool completely. Will keep in the fridge for up to 1 month.\r\n\r\nTake the pastry out of the fridge and leave at room temperature for 10 mins, then unroll. Heat the grill to high and heat the oven to 180C/160C fan/gas 4. Cut out 2 x 13cm circles of pastry, using a plate as a guide, and place on a non-stick baking sheet. Sprinkle each circle with 1 tbsp sugar and grill for 5 mins to caramelise, watching carefully so that the sugar doesn’t burn. Remove from the grill. Can be done a few hours ahead, and left, covered, out of the fridge.\r\n\r\nPeel, quarter and core the apples, cut into 2mm-thin slices and arrange on top of the pastry. Sprinkle over the remaining sugar and pop in the oven for 20-25 mins until the pastry is cooked through and golden, and the apples are softened. Remove and allow to cool slightly. Warm 3 tbsp of the red wine jelly in a small pan over a low heat with 1 tsp water to make it a little more runny, then brush over the top of the tarts.\r\n\r\nTip the crème fraîche into a bowl, sift over the icing sugar and cardamom, and mix together. Carefully lift the warm tarts onto serving plates and serve with the cardamom crème fraîche.',
      image: 'qtqwwu1511792650.jpg',
      tags: 'Tart,Baking',
      ingredients: [
        {
          name: 'Puff Pastry',
          measure: '320g',
          id: 781,
        },
        {
          name: 'Dark Brown Soft Sugar',
          measure: '4 tbs',
          id: 782,
        },
        {
          name: 'Braeburn Apples',
          measure: '3',
          id: 783,
        },
        {
          name: 'Red Wine Jelly',
          measure: '4 tbs',
          id: 784,
        },
        {
          name: 'Creme Fraiche',
          measure: '100ml',
          id: 785,
        },
        {
          name: 'Icing Sugar',
          measure: '1 tbs',
          id: 786,
        },
        {
          name: 'Cardamom',
          measure: '3',
          id: 787,
        },
      ],
    },
    {
      id: 71,
      name: 'Chicken Marengo',
      category: 'Chicken',
      instructions:
        'Heat the oil in a large flameproof casserole dish and stir-fry the mushrooms until they start to soften. Add the chicken legs and cook briefly on each side to colour them a little.\r\nPour in the passata, crumble in the stock cube and stir in the olives. Season with black pepper – you shouldn’t need salt. Cover and simmer for 40 mins until the chicken is tender. Sprinkle with parsley and serve with pasta and a salad, or mash and green veg, if you like.',
      image: 'qpxvuq1511798906.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Olive Oil',
          measure: '1 tbs',
          id: 788,
        },
        {
          name: 'Mushrooms',
          measure: '300g',
          id: 789,
        },
        {
          name: 'Chicken Legs',
          measure: '4',
          id: 790,
        },
        {
          name: 'Passata',
          measure: '500g',
          id: 791,
        },
        {
          name: 'Chicken Stock Cube',
          measure: '1',
          id: 792,
        },
        {
          name: 'Black Olives',
          measure: '100g',
          id: 793,
        },
        {
          name: 'Parsley',
          measure: 'Chopped',
          id: 794,
        },
      ],
    },
    {
      id: 72,
      name: 'Canadian Butter Tarts',
      category: 'Dessert',
      instructions:
        'Preheat the oven to fan 170C/ conventional 190C/gas 5. Roll out the pastry on a lightly floured surface so it’s slightly thinner than straight from the pack. Then cut out 18-20 rounds with a 7.5cm fluted cutter, re-rolling the trimmings. Use the rounds to line two deep 12-hole tart tins (not muffin tins). If you only have a regular-sized, 12-hole tart tin you will be able to make a few more slightly shallower tarts.\r\nBeat the eggs in a large bowl and combine with the rest of the ingredients except the walnuts. Tip this mixture into a pan and stir continuously for 3-4 minutes until the butter melts, and the mixture bubbles and starts to thicken. It should be thick enough to coat the back of a wooden spoon. Don’t overcook, and be sure to stir all the time as the mixture can easily burn. Remove from the heat and stir in the nuts.\r\nSpoon the filling into the unbaked tart shells so it’s level with the pastry. Bake for 15-18 minutes until set and pale golden. Leave in the tin to cool for a few minutes before lifting out on to a wire rack. Serve warm or cold.',
      image: 'wpputp1511812960.jpg',
      tags: 'Speciality,Snack,Desert,Pudding',
      ingredients: [
        {
          name: 'Shortcrust Pastry',
          measure: '375g',
          id: 795,
        },
        {
          name: 'Eggs',
          measure: '2 large',
          id: 796,
        },
        {
          name: 'Muscovado Sugar',
          measure: '175g',
          id: 797,
        },
        {
          name: 'Raisins',
          measure: '100g',
          id: 798,
        },
        {
          name: 'Vanilla Extract',
          measure: '1 tsp',
          id: 799,
        },
        {
          name: 'Butter',
          measure: '50g',
          id: 800,
        },
        {
          name: 'Single Cream',
          measure: '4 tsp',
          id: 801,
        },
        {
          name: 'Walnuts',
          measure: '50g',
          id: 802,
        },
      ],
    },
    {
      id: 73,
      name: 'Chicken Basquaise',
      category: 'Chicken',
      instructions:
        "Preheat the oven to 180°C/Gas mark 4. Have the chicken joints ready to cook. Heat the butter and 3 tbsp olive oil in a flameproof casserole or large frying pan. Brown the chicken pieces in batches on both sides, seasoning them with salt and pepper as you go. Don't crowd the pan - fry the chicken in small batches, removing the pieces to kitchen paper as they are done.\r\n\r\nAdd a little more olive oil to the casserole and fry the onions over a medium heat for 10 minutes, stirring frequently, until softened but not browned. Add the rest of the oil, then the peppers and cook for another 5 minutes.\r\n\r\nAdd the chorizo, sun-dried tomatoes and garlic and cook for 2-3 minutes. Add the rice, stirring to ensure it is well coated in the oil. Stir in the tomato paste, paprika, bay leaves and chopped thyme. Pour in the stock and wine. When the liquid starts to bubble, turn the heat down to a gentle simmer. Press the rice down into the liquid if it isn't already submerged and place the chicken on top. Add the lemon wedges and olives around the chicken.\r\n\r\nCover and cook in the oven for 50 minutes. The rice should be cooked but still have some bite, and the chicken should have juices that run clear when pierced in the thickest part with a knife. If not, cook for another 5 minutes and check again.",
      image: 'wruvqv1511880994.jpg',
      tags: 'Meat',
      ingredients: [
        {
          name: 'Chicken',
          measure: '1.5kg',
          id: 803,
        },
        {
          name: 'Butter',
          measure: '25g',
          id: 804,
        },
        {
          name: 'Olive Oil',
          measure: '6 tblsp',
          id: 805,
        },
        {
          name: 'Red Onions',
          measure: '2 sliced',
          id: 806,
        },
        {
          name: 'Red Pepper',
          measure: '3 Large',
          id: 807,
        },
        {
          name: 'Chorizo',
          measure: '130g',
          id: 808,
        },
        {
          name: 'Sun-Dried Tomatoes',
          measure: '8',
          id: 809,
        },
        {
          name: 'Garlic',
          measure: '6 cloves sliced',
          id: 810,
        },
        {
          name: 'Basmati Rice',
          measure: '300g',
          id: 811,
        },
        {
          name: 'Tomato Puree',
          measure: 'drizzle',
          id: 812,
        },
        {
          name: 'Paprika',
          measure: '½ tsp',
          id: 813,
        },
        {
          name: 'Bay Leaves',
          measure: '4',
          id: 814,
        },
        {
          name: 'Thyme',
          measure: 'Handful',
          id: 815,
        },
        {
          name: 'Chicken Stock',
          measure: '350ml',
          id: 816,
        },
        {
          name: 'Dry White Wine',
          measure: '180g',
          id: 817,
        },
        {
          name: 'Lemons',
          measure: '2',
          id: 818,
        },
        {
          name: 'Black Olives',
          measure: '100g',
          id: 819,
        },
        {
          name: 'Salt',
          measure: 'to serve',
          id: 820,
        },
        {
          name: 'Pepper',
          measure: 'to serve',
          id: 821,
        },
      ],
    },
    {
      id: 74,
      name: 'Callaloo Jamaican Style',
      category: 'Miscellaneous',
      instructions:
        'Cut leaves and soft stems from the kale branches, them soak in a bowl of cold water for about 5-10 minutes or until finish with prep.\r\nProceed to slicing the onions, mincing the garlic and dicing the tomatoes. Set aside\r\nRemove kale from water cut in chunks.\r\nPlace bacon on saucepan and cook until crispy. Then add onions, garlic, thyme, stir for about a minute or more\r\nAdd tomatoes; scotch bonnet pepper, smoked paprika. Sauté for about 2-3 more minutes.\r\nFinally add vegetable, salt, mix well, and steamed for about 6-8 minutes or until leaves are tender. Add a tiny bit of water as needed. Adjust seasonings and turn off the heat.\r\nUsing a sharp knife cut both ends off the plantain. This will make it easy to grab the skin of the plantains. Slit a shallow line down the long seam of the plantain; peel only as deep as the peel. Remove plantain peel by pulling it back.\r\nSlice the plantain into medium size lengthwise slices and set aside.\r\nCoat a large frying pan with cooking oil spray. Spray the tops of the plantains with a generous layer of oil spray and sprinkle with salt, freshly ground pepper.\r\nLet the plantains "fry" on medium heat, shaking the frying pan to redistribute them every few minutes.\r\nAs the plantains brown, continue to add more cooking oil spray, salt and pepper (if needed) until they have reached the desired color and texture.\r\nRemove and serve with kale',
      image: 'ussyxw1515364536.jpg',
      tags: 'Savory',
      ingredients: [
        {
          name: 'Kale',
          measure: '1  bunch',
          id: 822,
        },
        {
          name: 'Bacon',
          measure: '2 strips',
          id: 823,
        },
        {
          name: 'Garlic',
          measure: '3 cloves Chopped',
          id: 824,
        },
        {
          name: 'Onion',
          measure: '1 medium',
          id: 825,
        },
        {
          name: 'Paprika',
          measure: '1/2 tsp',
          id: 826,
        },
        {
          name: 'Thyme',
          measure: '1 Sprig',
          id: 827,
        },
        {
          name: 'Tomato',
          measure: '1',
          id: 828,
        },
        {
          name: 'Red Pepper',
          measure: '1',
          id: 829,
        },
        {
          name: 'Banana',
          measure: '4',
          id: 830,
        },
        {
          name: 'Vegetable Oil',
          measure: 'Splash',
          id: 831,
        },
      ],
    },
    {
      id: 75,
      name: 'Chicken Congee',
      category: 'Chicken',
      instructions:
        'STEP 1 - MARINATING THE CHICKEN\r\nIn a bowl, add chicken, salt, white pepper, ginger juice and then mix it together well.\r\nSet the chicken aside.\r\nSTEP 2 - RINSE THE WHITE RICE\r\nRinse the rice in a metal bowl or pot a couple times and then drain the water.\r\nSTEP 2 - BOILING THE WHITE RICE\r\nNext add 8 cups of water and then set the stove on high heat until it is boiling. Once rice porridge starts to boil, set the stove on low heat and then stir it once every 8-10 minutes for around 20-25 minutes.\r\nAfter 25 minutes, this is optional but you can add a little bit more water to make rice porridge to make it less thick or to your preference.\r\nNext add the marinated chicken to the rice porridge and leave the stove on low heat for another 10 minutes.\r\nAfter an additional 10 minutes add the green onions, sliced ginger, 1 pinch of salt, 1 pinch of white pepper and stir for 10 seconds.\r\nServe the rice porridge in a bowl\r\nOptional: add Coriander on top of the rice porridge.',
      image: '1529446352.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Chicken',
          measure: '8 oz',
          id: 832,
        },
        {
          name: 'Salt',
          measure: 'pinch',
          id: 833,
        },
        {
          name: 'Pepper',
          measure: 'pinch',
          id: 834,
        },
        {
          name: 'Ginger Cordial',
          measure: '1 tsp',
          id: 835,
        },
        {
          name: 'Ginger',
          measure: '1 tsp',
          id: 836,
        },
        {
          name: 'Spring Onions',
          measure: '1 tbs',
          id: 837,
        },
        {
          name: 'Rice',
          measure: '1/2 cup',
          id: 838,
        },
        {
          name: 'Water',
          measure: '8 cups',
          id: 839,
        },
        {
          name: 'Coriander',
          measure: '2 oz',
          id: 840,
        },
      ],
    },
    {
      id: 76,
      name: 'Chocolate Caramel Crispy',
      category: 'Dessert',
      instructions:
        'Grease and line a 20 x 20cm/8" x 8" baking tin with parchment paper.\r\nPut the mars bars and butter in a heat proof bowl and place over a pan of barely simmering water. Mixing with a whisk, melt until the mixture is smooth.\r\nPour over the rice krispies in a mixing bowl and mix until all the ingredients are evenly combined. Press evenly into the prepare baking tin and set aside.\r\nMelt the milk chocolate in the microwave or over a pan of barely simmering water.\r\nSpread the melted chocolate over the rice krispie mixture and leave to set in a cool place. Once set slice into squares and serve!',
      image: '1550442508.jpg',
      tags: 'Sweet,Snack,Treat,Tart,Alcoholic,BBQ',
      ingredients: [
        {
          name: 'Mars Bar',
          measure: '6 chopped',
          id: 841,
        },
        {
          name: 'Butter',
          measure: '150g',
          id: 842,
        },
        {
          name: 'Rice Krispies',
          measure: '120g',
          id: 843,
        },
        {
          name: 'Milk Chocolate',
          measure: '150g',
          id: 844,
        },
      ],
    },
    {
      id: 77,
      name: 'Chakchouka ',
      category: 'Miscellaneous',
      instructions:
        'In a large cast iron skillet or sauté pan with a lid, heat oil over medium high heat. Add the onion and sauté for 2-3 minutes, until softened. Add the peppers and garlic, and sauté for an additional 3-5 minutes. Add the tomatoes, cumin, paprika, salt, and chili powder. Mix well and bring the mixture to a simmer. Reduce the heat to medium low and continue to simmer, uncovered, 10-15 minutes until the mixture has thickened to your desired consistency. (Taste the sauce at this point and adjust for salt and spice, as desired.) Using the back of a spoon, make four craters in the mixture, large enough to hold an egg. Crack one egg into each of the craters. Cover the skillet and simmer for 5-7 minutes, until the eggs have set. Serve immediately with crusty bread or pita.',
      image: 'gpz67p1560458984.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Tomatoes',
          measure: '4',
          id: 845,
        },
        {
          name: 'Olive Oil',
          measure: '2 tbs',
          id: 846,
        },
        {
          name: 'Onion',
          measure: '1 Diced',
          id: 847,
        },
        {
          name: 'Red Pepper',
          measure: '1 sliced',
          id: 848,
        },
        {
          name: 'Green Pepper',
          measure: '1 sliced',
          id: 849,
        },
        {
          name: 'Garlic',
          measure: '3 Cloves Crushed',
          id: 850,
        },
        {
          name: 'Cumin',
          measure: '1 tsp',
          id: 851,
        },
        {
          name: 'Paprika',
          measure: '1 tsp',
          id: 852,
        },
        {
          name: 'Salt',
          measure: '3/4 teaspoon',
          id: 853,
        },
        {
          name: 'Chili Powder',
          measure: '1/2 teaspoon',
          id: 854,
        },
        {
          name: 'Eggs',
          measure: '4',
          id: 855,
        },
      ],
    },
    {
      id: 78,
      name: 'Cashew Ghoriba Biscuits',
      category: 'Dessert',
      instructions:
        'Preheat the oven at 180 C / Gas 4. Line a baking tray with greaseproof paper.\r\nIn a bowl, mix the cashews and icing sugar. Add the egg yolks and orange blossom water and mix to a smooth homogeneous paste.\r\nTake lumps of the cashew paste and shape into small balls. Roll the balls in icing sugar and transfer to the baking tray. Push an almond in the centre of each ghribia.\r\nBake until the biscuits are lightly golden, about 20 minutes. Keep an eye on them, they burn quickly.',
      image: 't3r3ka1560461972.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Cashew Nuts',
          measure: '250g',
          id: 856,
        },
        {
          name: 'Icing Sugar',
          measure: '100g',
          id: 857,
        },
        {
          name: 'Egg Yolks',
          measure: '2',
          id: 858,
        },
        {
          name: 'Orange Blossom Water',
          measure: '2 tbs',
          id: 859,
        },
        {
          name: 'Icing Sugar',
          measure: 'To Glaze',
          id: 860,
        },
        {
          name: 'Almonds',
          measure: '100g',
          id: 861,
        },
      ],
    },
    {
      id: 79,
      name: 'Corba',
      category: 'Side',
      instructions:
        'Pick through your lentils for any foreign debris, rinse them 2 or 3 times, drain, and set aside.  Fair warning, this will probably turn your lentils into a solid block that you’ll have to break up later\r\nIn a large pot over medium-high heat, sauté the olive oil and the onion with a pinch of salt for about 3 minutes, then add the carrots and cook for another 3 minutes.\r\nAdd the tomato paste and stir it around for around 1 minute. Now add the cumin, paprika, mint, thyme, black pepper, and red pepper as quickly as you can and stir for 10 seconds to bloom the spices. Congratulate yourself on how amazing your house now smells.\r\nImmediately add the lentils, water, broth, and salt. Bring the soup to a (gentle) boil.\r\nAfter it has come to a boil, reduce heat to medium-low, cover the pot halfway, and cook for 15-20 minutes or until the lentils have fallen apart and the carrots are completely cooked.\r\nAfter the soup has cooked and the lentils are tender, blend the soup either in a blender or simply use a hand blender to reach the consistency you desire. Taste for seasoning and add more salt if necessary.\r\nServe with crushed-up crackers, torn up bread, or something else to add some extra thickness.  You could also use a traditional thickener (like cornstarch or flour), but I prefer to add crackers for some texture and saltiness.  Makes great leftovers, stays good in the fridge for about a week.',
      image: '58oia61564916529.jpg',
      tags: 'Soup',
      ingredients: [
        {
          name: 'Lentils',
          measure: '1 cup',
          id: 862,
        },
        {
          name: 'Onion',
          measure: '1 large',
          id: 863,
        },
        {
          name: 'Carrots',
          measure: '1 large',
          id: 864,
        },
        {
          name: 'Tomato Puree',
          measure: '1 tbs',
          id: 865,
        },
        {
          name: 'Cumin',
          measure: '2 tsp',
          id: 866,
        },
        {
          name: 'Paprika',
          measure: '1 tsp',
          id: 867,
        },
        {
          name: 'Mint',
          measure: '1/2 tsp',
          id: 868,
        },
        {
          name: 'Thyme',
          measure: '1/2 tsp',
          id: 869,
        },
        {
          name: 'Black Pepper',
          measure: '1/4 tsp',
          id: 870,
        },
        {
          name: 'Red Pepper Flakes',
          measure: '1/4 tsp',
          id: 871,
        },
        {
          name: 'Vegetable Stock',
          measure: '4 cups',
          id: 872,
        },
        {
          name: 'Water',
          measure: '1 cup',
          id: 873,
        },
        {
          name: 'Sea Salt',
          measure: 'Pinch',
          id: 874,
        },
      ],
    },
    {
      id: 80,
      name: 'Classic Christmas pudding',
      category: 'Dessert',
      instructions:
        "Get everything for the pudding prepared. Chop the almonds coarsely. Peel, core and chop the cooking apples. Sharpen your knife and chop the candied peel. (You can chop the almonds and apples in a food processor, but the peel must be done by hand.) Grate three quarters of the nutmeg (sounds a lot but it's correct).\r\n\r\nMix the almonds, apples, candied peel, nutmeg, raisins, flour, breadcrumbs, light muscovado sugar, eggs and 2 tbsp brandy or cognac in a large bowl. \r\n\r\nHolding the butter in its wrapper, grate a quarter of it into the bowl, then stir everything together. Repeat until all the butter is grated, then stir for 3-4 mins – the mixture is ready when it subsides slightly after each stir. Ask the family to stir too, and get everyone to make a wish. \r\n\r\nGenerously butter two 1.2 litre bowls and put a circle of baking parchment in the bottom of each. Pack in the pudding mixture. Cover with a double layer of baking parchment, pleating it to allow for expansion, then tie with string (keep the paper in place with a rubber band while tying). Trim off any excess paper. \r\n\r\nNow stand each bowl on a large sheet of foil and bring the edges up over the top, then put another sheet of foil over the top and bring it down underneath to make a double package (this makes the puddings watertight). Tie with more string, and make a handle for easy lifting in and out of the pan. Watch our video to see how to tie up a pudding correctly.\r\n\r\nBoil or oven steam the puddings for 8 hrs, topping up with water as necessary. Remove from the pans and leave to cool overnight. When cold, discard the messy wrappings and re-wrap in new baking parchment, foil and string. Store in a cool, dry place until Christmas. \r\n\r\nTo make the brandy butter, cream the butter with the orange zest and icing sugar. Gradually beat in the brandy or cognac and chopped stem ginger. Put in a small bowl, fork the top attractively and put in the fridge to set. The butter will keep for a week in the fridge, or it can be frozen for up to six weeks. \r\n\r\nOn Christmas Day, boil or oven steam for 1 hr. Unwrap and turn out. To flame, warm 3-4 tbsp brandy in a small pan, pour it over the pudding and set light to it.",
      image: '1d85821576790598.jpg',
      tags: 'Christmas',
      ingredients: [
        {
          name: 'Almonds',
          measure: '50g',
          id: 875,
        },
        {
          name: 'Bramley Apples',
          measure: '2 large',
          id: 876,
        },
        {
          name: 'Candied Peel',
          measure: '200g',
          id: 877,
        },
        {
          name: 'Nutmeg',
          measure: '1 whole',
          id: 878,
        },
        {
          name: 'Raisins',
          measure: '1kg',
          id: 879,
        },
        {
          name: 'Plain Flour',
          measure: '140g',
          id: 880,
        },
        {
          name: 'Breadcrumbs',
          measure: '100g',
          id: 881,
        },
        {
          name: 'Muscovado Sugar',
          measure: '100g',
          id: 882,
        },
        {
          name: 'Eggs',
          measure: '3 Large',
          id: 883,
        },
        {
          name: 'Brandy',
          measure: '2 tbs',
          id: 884,
        },
        {
          name: 'Butter',
          measure: '250g',
          id: 885,
        },
      ],
    },
    {
      id: 81,
      name: 'Christmas Pudding Trifle',
      category: 'Dessert',
      instructions:
        'Peel the oranges using a sharp knife, ensuring all the pith is removed. Slice as thinly as possible and arrange over a dinner plate. Sprinkle with the demerara sugar followed by the Grand Marnier and set aside.\r\n\r\nCrumble the Christmas pudding into large pieces and scatter over the bottom of a trifle bowl. Lift the oranges onto the pudding in a layer and pour over any juices.\r\n\r\nBeat the mascarpone until smooth, then stir in the custard. Spoon the mixture over the top of the oranges.\r\n\r\nLightly whip the cream and spoon over the custard. Sprinkle with the flaked almonds and grated chocolate. You can make this a day in advance if you like, chill until ready to serve.',
      image: 'r33cud1576791081.jpg',
      tags: 'Christmas',
      ingredients: [
        {
          name: 'Orange',
          measure: '3',
          id: 886,
        },
        {
          name: 'Demerara Sugar',
          measure: '1 tbs',
          id: 887,
        },
        {
          name: 'Grand Marnier',
          measure: '2 tbs',
          id: 888,
        },
        {
          name: 'Christmas Pudding',
          measure: '300g',
          id: 889,
        },
        {
          name: 'Custard',
          measure: '500g',
          id: 890,
        },
        {
          name: 'Mascarpone',
          measure: '250g',
          id: 891,
        },
        {
          name: 'Double Cream',
          measure: '284ml',
          id: 892,
        },
        {
          name: 'Flaked Almonds',
          measure: 'Handful',
          id: 893,
        },
        {
          name: 'Dark Chocolate',
          measure: 'Grated',
          id: 894,
        },
      ],
    },
    {
      id: 82,
      name: 'Christmas cake',
      category: 'Dessert',
      instructions:
        'Heat oven to 160C/fan 140C/gas 3. Line the base and sides of a 20 cm round, 7.5 cm deep cake tin. Beat the butter and sugar with an electric hand mixer for 1-2 mins until very creamy and pale in colour, scraping down the sides of the bowl half way through. Stir in a spoonful of the flour, then stir in the beaten egg and the rest of the flour alternately, a quarter at a time, beating well each time with a wooden spoon. Stir in the almonds.\r\n\r\nMix in the sherry (the mix will look curdled), then add the peel, cherries, raisins, cherries, nuts, lemon zest, spice, rosewater and vanilla. Beat together to mix, then stir in the baking powder.\r\n\r\nSpoon mixture into the tin and smooth the top, making a slight dip in the centre. Bake for 30 mins, then lower temperature to 150C/fan 130C/gas 2 and bake a further 2-2¼ hrs, until a skewer insterted in the middle comes out clean. Leave to cool in the tin, then take out of the tin and peel off the lining paper. When completely cold, wrap well in cling film and foil to store until ready to decorate. The cake will keep for several months.',
      image: 'ldnrm91576791881.jpg',
      tags: 'Christmas',
      ingredients: [
        {
          name: 'Butter',
          measure: '200g',
          id: 895,
        },
        {
          name: 'Muscovado Sugar',
          measure: '200g',
          id: 896,
        },
        {
          name: 'Plain Flour',
          measure: '200g',
          id: 897,
        },
        {
          name: 'Eggs',
          measure: '4 Beaten',
          id: 898,
        },
        {
          name: 'Ground Almonds',
          measure: '50g',
          id: 899,
        },
        {
          name: 'Sherry',
          measure: '100ml',
          id: 900,
        },
        {
          name: 'Candied Peel',
          measure: '85g',
          id: 901,
        },
        {
          name: 'Glace Cherry',
          measure: '85g',
          id: 902,
        },
        {
          name: 'Raisins',
          measure: '250g',
          id: 903,
        },
        {
          name: 'Currants',
          measure: '250g',
          id: 904,
        },
        {
          name: 'Pecan Nuts',
          measure: '100g',
          id: 905,
        },
        {
          name: 'Lemon',
          measure: 'Grated zest of 1',
          id: 906,
        },
        {
          name: 'Mixed Spice',
          measure: '1 ½ tbsp',
          id: 907,
        },
        {
          name: 'Rose water',
          measure: '1 ½ tbsp',
          id: 908,
        },
        {
          name: 'Vanilla Extract',
          measure: '1/2 tsp',
          id: 909,
        },
        {
          name: 'Baking Powder',
          measure: '1/2 tsp',
          id: 910,
        },
      ],
    },
    {
      id: 83,
      name: 'Corned Beef and Cabbage',
      category: 'Beef',
      instructions:
        '1\r\n\r\nPlace corned beef in large pot or Dutch oven and cover with water. Add the spice packet that came with the corned beef. Cover pot and bring to a boil, then reduce to a simmer. Simmer approximately 50 minutes per pound or until tender.\r\n\r\n2\r\n\r\nAdd whole potatoes and peeled and cut carrots, and cook until the vegetables are almost tender. Add cabbage and cook for 15 more minutes. Remove meat and let rest 15 minutes.\r\n\r\n3\r\n\r\nPlace vegetables in a bowl and cover. Add as much broth (cooking liquid reserved in the Dutch oven or large pot) as you want. Slice meat across the grain.',
      image: 'xb97a81583266727.jpg',
      tags: '',
      ingredients: [
        {
          name: 'Beef Brisket',
          measure: '3 Lbs',
          id: 911,
        },
        {
          name: 'Small Potatoes',
          measure: '10',
          id: 912,
        },
        {
          name: 'Carrots',
          measure: '5',
          id: 913,
        },
        {
          name: 'Cabbage',
          measure: '1 head',
          id: 914,
        },
      ],
    },
    {
      id: 84,
      name: 'Crispy Sausages and Greens',
      category: 'Pork',
      instructions:
        'Preheat the oven to 350°. Remove the stems from one bunch of Tuscan kale and tear the leaves into 1" pieces (mustard greens, collards, spinach, and chard are great, too). Coarsely chop half a head of green cabbage. Combine the greens in a large baking dish and add 4 cloves of thinly sliced garlic. Adding some sliced onions and shiitake mushrooms at this point is optional, but highly recommended (I\'ll sauté the onions and mushrooms in a cast iron baking dish right on the stove before adding to the greens). Coat the greens with some olive oil and pour ½ cup chicken stock or broth over everything. Cover the dish with foil and bake until the greens are wilted, about 15 minutes. Remove foil and season with salt and pepper. Continue to bake until cabbage is tender, about 20-25 minutes more.\r\n\r\nMeanwhile, heat a little olive oil in a large skillet over medium-high. Prick four sweet Italian sausages with a fork and cook until browned on all sides and cooked through, 10 to 12 minutes. When the greens are done, slice the sausage and toss into the greens with a splash of your favorite vinegar (I like sherry or red wine).',
      image: 'st1ifa1583267248.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Kale',
          measure: '1  bunch',
          id: 915,
        },
        {
          name: 'Italian Fennel Sausages',
          measure: '8',
          id: 916,
        },
        {
          name: 'Cabbage',
          measure: '1 Head chopped',
          id: 917,
        },
        {
          name: 'Garlic Clove',
          measure: '8',
          id: 918,
        },
        {
          name: 'Onion',
          measure: 'Sliced',
          id: 919,
        },
        {
          name: 'Shiitake Mushrooms',
          measure: 'Sliced',
          id: 920,
        },
        {
          name: 'Chicken Stock',
          measure: '1 cup',
          id: 921,
        },
        {
          name: 'Salt',
          measure: '',
          id: 922,
        },
        {
          name: 'Pepper',
          measure: '',
          id: 923,
        },
      ],
    },
    {
      id: 85,
      name: 'Chicken Quinoa Greek Salad',
      category: 'Chicken',
      instructions:
        'Cook the quinoa following the pack instructions, then rinse in cold water and drain thoroughly.\r\n\r\nMeanwhile, mix the butter, chilli and garlic into a paste. Toss the chicken fillets in 2 tsp of the olive oil with some seasoning. Lay in a hot griddle pan and cook for 3-4 mins each side or until cooked through. Transfer to a plate, dot with the spicy butter and set aside to melt.\r\n\r\nNext, tip the tomatoes, olives, onion, feta and mint into a bowl. Toss in the cooked quinoa. Stir through the remaining olive oil, lemon juice and zest, and season well. Serve with the chicken fillets on top, drizzled with any buttery chicken juices.',
      image: 'k29viq1585565980.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Quinoa',
          measure: '225g',
          id: 924,
        },
        {
          name: 'Butter',
          measure: '25g',
          id: 925,
        },
        {
          name: 'Red Chilli',
          measure: '1 chopped',
          id: 926,
        },
        {
          name: 'Garlic',
          measure: '1 clove finely chopped',
          id: 927,
        },
        {
          name: 'Chicken Breast',
          measure: '400g',
          id: 928,
        },
        {
          name: 'Olive Oil',
          measure: '2 tbs',
          id: 929,
        },
        {
          name: 'Black Olives',
          measure: 'Handful',
          id: 930,
        },
        {
          name: 'Red Onions',
          measure: '1 chopped',
          id: 931,
        },
        {
          name: 'Feta',
          measure: '100g',
          id: 932,
        },
        {
          name: 'Mint',
          measure: 'Chopped',
          id: 933,
        },
        {
          name: 'Lemon',
          measure: 'Juice of 1/2',
          id: 934,
        },
      ],
    },
    {
      id: 86,
      name: 'Chick-Fil-A Sandwich',
      category: 'Chicken',
      instructions:
        'Wrap the chicken loosely between plastic wrap and pound gently with the flat side of a meat tenderizer until about 1/2 inch thick all around.\r\nCut into two pieces, as even as possible.\r\nMarinate in the pickle juice for 30 minutes to one hour (add a teaspoon of Tabasco sauce now for a spicy sandwich).\r\nBeat the egg with the milk in a bowl.\r\nCombine the flour, sugar, and spices in another bowl.\r\nDip the chicken pieces each into the egg on both sides, then coat in flour on both sides.\r\nHeat the oil in a skillet (1/2 inch deep) to about 345-350.\r\nFry each cutlet for 2 minutes on each side, or until golden and cooked through.\r\nBlot on paper and serve on toasted buns with pickle slices.',
      image: 'sbx7n71587673021.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Chicken Breast',
          measure: '1',
          id: 935,
        },
        {
          name: 'Pickle Juice',
          measure: '1/4 cup',
          id: 936,
        },
        {
          name: 'Egg',
          measure: '1',
          id: 937,
        },
        {
          name: 'Milk',
          measure: '1/4 cup',
          id: 938,
        },
        {
          name: 'Flour',
          measure: '1/2 cup',
          id: 939,
        },
        {
          name: 'Icing Sugar',
          measure: '1 tbs',
          id: 940,
        },
        {
          name: 'Paprika',
          measure: '1/2 tsp',
          id: 941,
        },
        {
          name: 'Salt',
          measure: '1/2 tsp',
          id: 942,
        },
        {
          name: 'Black Pepper',
          measure: '1/4 tsp',
          id: 943,
        },
        {
          name: 'Garlic Powder',
          measure: '1/4 tsp',
          id: 944,
        },
        {
          name: 'Celery Salt',
          measure: '1/4 tsp',
          id: 945,
        },
        {
          name: 'Cayenne Pepper',
          measure: '1/2 tsp',
          id: 946,
        },
        {
          name: 'Olive Oil',
          measure: '1 cup',
          id: 947,
        },
        {
          name: 'Sesame Seed Burger Buns',
          measure: '1',
          id: 948,
        },
      ],
    },
    {
      id: 87,
      name: 'Coddled pork with cider',
      category: 'Pork',
      instructions:
        'STEP 1\r\nHeat the butter in a casserole dish until sizzling, then fry the pork for 2-3 mins on each side until browned. Remove from the pan.\r\n\r\nSTEP 2\r\nTip the bacon, carrot, potatoes and swede into the pan, then gently fry until slightly coloured. Stir in the cabbage, sit the chops back on top, add the bay leaf, then pour over the cider and stock. Cover the pan, then leave everything to gently simmer for 20 mins until the pork is cooked through and the vegetables are tender.\r\n\r\nSTEP 3\r\nServe at the table spooned straight from the dish.',
      image: '7vpsfp1608588991.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Butter',
          measure: 'Knob',
          id: 949,
        },
        {
          name: 'Pork Chops',
          measure: '2',
          id: 950,
        },
        {
          name: 'Bacon',
          measure: '4',
          id: 951,
        },
        {
          name: 'Potatoes',
          measure: '2',
          id: 952,
        },
        {
          name: 'Carrots',
          measure: '1',
          id: 953,
        },
        {
          name: 'Swede',
          measure: '1/2',
          id: 954,
        },
        {
          name: 'Cabbage',
          measure: '1/2',
          id: 955,
        },
        {
          name: 'Bay Leaf',
          measure: '1',
          id: 956,
        },
        {
          name: 'Cider',
          measure: '100ml',
          id: 957,
        },
        {
          name: 'Chicken Stock',
          measure: '100g',
          id: 958,
        },
      ],
    },
    {
      id: 88,
      name: 'Cevapi Sausages',
      category: 'Beef',
      instructions:
        'Place the ground meat in a bowl. Chop the onion very finely and grate the garlic cloves. Add to the bowl. Add the chopped parsley, all sorts of paprika, baking soda, dried breadcrumbs, water, Vegeta, salt, and pepper.\r\nMix well with the hand mixer fitted with the dough hooks. Cover the bowl with cling film/ plastic foil and leave to rest for 1 or 2 hours in the refrigerator.\r\nTake portions of the meat mixture, about 50-55 g/ 1.7-1.9 oz/ ¼ cup portions, and form the cevapi. The rolls should be about as thick as your thumb and about 7-10 cm/ 3-4 inches long. I had 18 sausages. The recipe can be easily doubled.\r\nGrill the cevapcici on the hot grill pan or on the barbecue for about 12-14 minutes, turning them several times in between, or until brown and cooked through. I checked by cutting one in the middle and then grilling the following batches for the same period of time.\r\nServe hot as suggested above. The cevapcici can be reheated in the oven at 180 degrees Celsius/ 350 degrees Fahrenheit for about 10 minutes or until heated through. Check one, if it is not hot enough, give the sausages a few more minutes.',
      image: 'vc08jn1628769553.jpg',
      tags: 'Sausages',
      ingredients: [
        {
          name: 'Minced Beef',
          measure: '500g',
          id: 959,
        },
        {
          name: 'Minced Pork',
          measure: '250g',
          id: 960,
        },
        {
          name: 'Onion',
          measure: '1',
          id: 961,
        },
        {
          name: 'Garlic',
          measure: '4 cloves',
          id: 962,
        },
        {
          name: 'Parsley',
          measure: '3 tblsp chopped',
          id: 963,
        },
        {
          name: 'Paprika',
          measure: '1 tbs',
          id: 964,
        },
        {
          name: 'Baking Powder',
          measure: '3/4 teaspoon',
          id: 965,
        },
        {
          name: 'Breadcrumbs',
          measure: '2 tbs',
          id: 966,
        },
        {
          name: 'Water',
          measure: '3 tbs',
          id: 967,
        },
        {
          name: 'Vegetable Stock Cube',
          measure: '1',
          id: 968,
        },
        {
          name: 'Salt',
          measure: '1 tsp',
          id: 969,
        },
        {
          name: 'Pepper',
          measure: '1 tsp',
          id: 970,
        },
      ],
    },
    {
      id: 89,
      name: 'Croatian lamb peka',
      category: 'Beef',
      instructions:
        'Preheat oven to 200°C fan / 220°C / 425°F / Gas mark 7\r\nIf you have not bought diced lamb, cut your lamb shoulder or leg into large chunks and place to one side.\r\nChunks of chopped lamb of a red chopping board\r\nMake oil marinade -\r\nMix 80ml of olive oil in a bowl with garlic puree, sundried tomato puree ,black pepper and salt.\r\nolive oil, gia sundried tomato puree and gia garlic puree and black pepper mixed together in a silver bowl to make Croatian peka\r\nAdd potatoes and vegetables into a large lidded casserole dish.\r\nChopped up vegetables which consist of chopped up red onion, courgette, potatoes red peppers in a cast iron pan\r\nPlace diced lamb on top of the vegetables, pour the marinade and wine over the top.\r\nChunks of lamb covered in in a sundried tomato oil sauce which is on top of chopped red onion, aubergine, courgette and potatoes in a cast iron pan\r\nAdd the rosemary, thyme and sage, trying to keep the herbs on top.\r\nSo you can easily remove the herb stalks once cooked.\r\nChunks of lamb coated in a sundried tomato oil sauce and covered with thyme, rosemary and sage which is on top of chopped red onion, aubergine, courgette and potatoes in a cast iron pan\r\nPlace lid on the casserole dish and cook for 1hr 30 minute\r\nIf you do not have a lid cover very well with kitchen foil\r\nCast iron dish with lid on in the oven\r\nTake the lid off, remove any thick herb stems. Stir in 2 tbsp of olive oil.\r\nCook for a further 20-30 mins.\r\nCooked Croatian Lamb Peka in a cast iron pan in the oven\r\nServe with fresh homemade bread to dip into the juices.',
      image: 'pn59o51628769837.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Potatoes',
          measure: '600g',
          id: 971,
        },
        {
          name: 'Courgettes',
          measure: '1 chopped',
          id: 972,
        },
        {
          name: 'Carrots',
          measure: '1 chopped',
          id: 973,
        },
        {
          name: 'Green Pepper',
          measure: '1 chopped',
          id: 974,
        },
        {
          name: 'Aubergine',
          measure: '1 small',
          id: 975,
        },
        {
          name: 'Onion',
          measure: '1 Large Chopped',
          id: 976,
        },
        {
          name: 'Lamb Shoulder',
          measure: '800g',
          id: 977,
        },
        {
          name: 'Garlic Sauce',
          measure: '1 tbs',
          id: 978,
        },
        {
          name: 'Tomato Puree',
          measure: '1 tbs',
          id: 979,
        },
        {
          name: 'Olive Oil',
          measure: '80 ml',
          id: 980,
        },
        {
          name: 'Thyme',
          measure: 'Sprinking',
          id: 981,
        },
        {
          name: 'White Wine',
          measure: '250ml',
          id: 982,
        },
        {
          name: 'Pepper',
          measure: 'Pinch',
          id: 983,
        },
      ],
    },
    {
      id: 90,
      name: 'Croatian Bean Stew',
      category: 'Beef',
      instructions:
        'Heat the oil in a pan. Add the chopped vegetables and sauté until tender. Take a pot, empty the beans together with the vegetables into it, put the sausages inside and cook for further 20 minutes on a low heat. Or, put it in an oven and bake it at a temperature of 180ºC/350ºF for 30 minutes. This dish is even better reheated the next day.',
      image: 'tnwy8m1628770384.jpg',
      tags: 'Warming, Soup, Beans',
      ingredients: [
        {
          name: 'Cannellini Beans',
          measure: '2 cans',
          id: 984,
        },
        {
          name: 'Vegetable Oil',
          measure: '3 tbs',
          id: 985,
        },
        {
          name: 'Tomatoes',
          measure: '2 cups',
          id: 986,
        },
        {
          name: 'Challots',
          measure: '5',
          id: 987,
        },
        {
          name: 'Garlic',
          measure: '2 cloves',
          id: 988,
        },
        {
          name: 'Parsley',
          measure: 'Pinch',
          id: 989,
        },
        {
          name: 'Chorizo',
          measure: '1/2 kg chopped',
          id: 990,
        },
      ],
    },
    {
      id: 91,
      name: 'Chivito uruguayo',
      category: 'Beef',
      instructions:
        'Crush the meat so that it is finite and we put it on a griddle to brown. Put the eggs, bacon and ham to fry.\r\nCut the bread in half, put the beef brisket, the fried eggs, the bacon, the ham, the mozzarella, the tomato and the lettuce. Cover with the other half of the bread and serve.',
      image: 'n7qnkb1630444129.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Beef Brisket',
          measure: '2',
          id: 991,
        },
        {
          name: 'Bread',
          measure: '2',
          id: 992,
        },
        {
          name: 'Lettuce',
          measure: '1',
          id: 993,
        },
        {
          name: 'Tomato',
          measure: '1',
          id: 994,
        },
        {
          name: 'Ham',
          measure: '100g',
          id: 995,
        },
        {
          name: 'Mozzarella',
          measure: '100g',
          id: 996,
        },
        {
          name: 'Bacon',
          measure: '100g',
          id: 997,
        },
        {
          name: 'Egg',
          measure: '1',
          id: 998,
        },
        {
          name: 'Onion',
          measure: '1',
          id: 999,
        },
        {
          name: 'Pepper',
          measure: '1',
          id: 1000,
        },
      ],
    },
    {
      id: 92,
      name: 'Crispy Eggplant',
      category: 'Vegetarian',
      instructions:
        'Slice eggplant into 1 cm (0.4-inch) slices. Place them in a bowl and sprinkle them with salt. allow them to sit for 30 minutes to render some of their liquid and bitterness.\r\n2. After 30 minutes wash eggplant slices from salt and pat dry with a kitchen towel.\r\n3. In a large bowl/plate place breadcrumbs and sesame seeds. In another bowl beat 2 eggs with pinch salt and pepper.\r\n4. Heal oil in a large skillet over high heat.\r\n5. Dip eggplant slices in egg, then in crumbs, and place in hot oil. Fry 2 to 3 minutes on each side, or until golden brown. Drain on a paper towel. \r\n',
      image: 'c7lzrl1683208757.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Egg Plants',
          measure: '1 large',
          id: 1001,
        },
        {
          name: 'Breadcrumbs',
          measure: '1 cup',
          id: 1002,
        },
        {
          name: 'Sesame Seed',
          measure: '50g',
          id: 1003,
        },
        {
          name: 'Eggs',
          measure: '2',
          id: 1004,
        },
        {
          name: 'Salt',
          measure: 'To taste',
          id: 1005,
        },
        {
          name: 'Pepper',
          measure: 'To taste',
          id: 1006,
        },
        {
          name: 'Vegetable Oil',
          measure: 'For frying',
          id: 1007,
        },
      ],
    },
    {
      id: 93,
      name: 'Cabbage Soup (Shchi)',
      category: 'Vegetarian',
      instructions:
        'Add the butter to a large Dutch oven or other heavy-duty pot over medium heat. When the butter has melted, add the onion and sauté until translucent.\r\nAdd the cabbage, carrot, and celery. Sauté until the vegetables begin to soften, stirring frequently, about 3 minutes.\r\nAdd the bay leaf and vegetable stock and bring to a boil over high heat. Reduce the heat to low and simmer, covered, until the vegetables are crisp-tender, about 15 minutes.\r\nAdd the potatoes and bring it back to a boil over high heat. Reduce the heat to low and simmer, covered, until the potatoes are tender, about 10 minutes.\r\nAdd the tomatoes (or undrained canned tomatoes) and bring the soup back to a boil over high heat. Reduce the heat to low and simmer, uncovered, for 5 minutes. Season to taste with salt and pepper.\r\nemove and discard the bay leaf from the pot.\r\nServe topped with fresh sour cream and fresh dill.',
      image: '60oc3k1699009846.jpg',
      tags: 'soup',
      ingredients: [
        {
          name: 'Unsalted Butter',
          measure: '3 tbs',
          id: 1008,
        },
        {
          name: 'Onion',
          measure: '1 large',
          id: 1009,
        },
        {
          name: 'Cabbage',
          measure: '1 medium',
          id: 1010,
        },
        {
          name: 'Carrots',
          measure: '1',
          id: 1011,
        },
        {
          name: 'Celery',
          measure: '1',
          id: 1012,
        },
        {
          name: 'Bay Leaf',
          measure: '1',
          id: 1013,
        },
        {
          name: 'Vegetable Stock',
          measure: '8 cups',
          id: 1014,
        },
        {
          name: 'Potatoes',
          measure: '2 large',
          id: 1015,
        },
        {
          name: 'Tomatoes',
          measure: '2 large',
          id: 1016,
        },
        {
          name: 'Sour Cream',
          measure: 'Garnish',
          id: 1017,
        },
        {
          name: 'Dill',
          measure: 'Garnish',
          id: 1018,
        },
      ],
    },
    {
      id: 94,
      name: 'Dal fry',
      category: 'Vegetarian',
      instructions:
        'Wash and soak toor dal in approx. 3 cups of water, for at least one hours. Dal will be double in volume after soaking. Drain the water.\r\nCook dal with 2-1/2 cups water and add salt, turmeric, on medium high heat, until soft in texture (approximately 30 mins) it should be like thick soup.\r\nIn a frying pan, heat the ghee. Add cumin seeds, and mustard seeds. After the seeds crack, add bay leaves, green chili, ginger and chili powder. Stir for a few seconds.\r\nAdd tomatoes, salt and sugar stir and cook until tomatoes are tender and mushy.\r\nAdd cilantro and garam masala cook for about one minute.\r\nPour the seasoning over dal mix it well and cook for another minute.\r\nServe with Naan.',
      image: 'wuxrtu1483564410.jpg',
      tags: 'Curry,Vegetarian,Cake',
      ingredients: [
        {
          name: 'Toor dal',
          measure: '1 cup',
          id: 1019,
        },
        {
          name: 'Water',
          measure: '2-1/2 cups',
          id: 1020,
        },
        {
          name: 'Salt',
          measure: '1 tsp',
          id: 1021,
        },
        {
          name: 'Turmeric',
          measure: '1/4 tsp',
          id: 1022,
        },
        {
          name: 'Ghee',
          measure: '3 tbs',
          id: 1023,
        },
        {
          name: 'Chopped tomatoes',
          measure: '1 cup',
          id: 1024,
        },
        {
          name: 'Cumin seeds',
          measure: '1/2 tsp',
          id: 1025,
        },
        {
          name: 'Mustard Seeds',
          measure: '1/2 tsp',
          id: 1026,
        },
        {
          name: 'Bay Leaf',
          measure: '2',
          id: 1027,
        },
        {
          name: 'Green Chili',
          measure: '1 tbs chopped',
          id: 1028,
        },
        {
          name: 'Ginger',
          measure: '2 tsp shredded',
          id: 1029,
        },
        {
          name: 'Cilantro',
          measure: '2 tbs',
          id: 1030,
        },
        {
          name: 'Red Pepper',
          measure: '1/2 tsp',
          id: 1031,
        },
        {
          name: 'Salt',
          measure: '1/2 tsp',
          id: 1032,
        },
        {
          name: 'Sugar',
          measure: '1 tsp',
          id: 1033,
        },
        {
          name: 'Garam Masala',
          measure: '1/4 tsp',
          id: 1034,
        },
      ],
    },
    {
      id: 95,
      name: 'Dundee cake',
      category: 'Dessert',
      instructions:
        'Put the almonds into a small bowl and pour over boiling water to just cover. Leave for 5 mins then drain in a sieve and leave to dry.\r\nPreheat the oven to 180C/160 C fan/Gas Mark 4. Line a deep loose-based 20cm cake tin with baking parchment.\r\nPut the butter in a large bowl and beat well until soft. Add the sugar and beat until light and fluffy. Stir in the orange zest and apricot jam.\r\nSieve together the flour and baking powder. Add the eggs to the creamed butter and sugar, a little at a time, beating well between each addition. If the mixture starts to curdle, stir in a little flour.\r\nAdd the remaining flour and ground almonds and mix well. Mix in the milk and then add the dried fruit and cherries and mix gently together.\r\nSpoon the mixture into the prepared tin and spread level using the back of a spoon. Arrange the whole almonds close together in neat circles on the top of the cake. Bake in the oven for 45 mins.\r\nLower the oven temperature to 160C/140 C fan/Gas Mark 3 and cook for a further 60–80 minutes. Check the cake after 50 minutes by inserting a wooden or metal skewer into the cake. When it’s done it should have just a few crumbs attached. Check every 10 minutes - it’s important not to overcook this cake so the centre will be a little soft.\r\nWhen cooked, remove the cake briefly from the oven, put the milk and sugar into a small pan and heat gently until the sugar has dissolved. Brush over the top of the cake and return the cake to the oven for 2-3 mins. Remove and allow the cake to cool in the tin. When quite cold remove from the tin and wrap in foil and keep for at least 2 days before cutting.',
      image: 'wxyvqq1511723401.jpg',
      tags: 'heavy,Nutty,Fruity',
      ingredients: [
        {
          name: 'Almonds',
          measure: '100g',
          id: 1035,
        },
        {
          name: 'Butter',
          measure: '180g',
          id: 1036,
        },
        {
          name: 'Muscovado Sugar',
          measure: '180g',
          id: 1037,
        },
        {
          name: 'Orange',
          measure: 'Zest of 1',
          id: 1038,
        },
        {
          name: 'Apricot Jam',
          measure: '3 tbs',
          id: 1039,
        },
        {
          name: 'Plain Flour',
          measure: '225g',
          id: 1040,
        },
        {
          name: 'Baking Powder',
          measure: '1 tsp',
          id: 1041,
        },
        {
          name: 'Eggs',
          measure: '3 Large',
          id: 1042,
        },
        {
          name: 'Ground Almonds',
          measure: '100g',
          id: 1043,
        },
        {
          name: 'Milk',
          measure: '2 tbs',
          id: 1044,
        },
        {
          name: 'Dried Fruit',
          measure: '500g',
          id: 1045,
        },
        {
          name: 'Glace Cherry',
          measure: '100g',
          id: 1046,
        },
        {
          name: 'Milk',
          measure: '1 tbs',
          id: 1047,
        },
        {
          name: 'Caster Sugar',
          measure: '2 tsp',
          id: 1048,
        },
      ],
    },
    {
      id: 96,
      name: 'Duck Confit',
      category: 'Miscellaneous',
      instructions:
        'The day before you want to make the dish, scatter half the salt, half the garlic and half of the herbs over the base of a small shallow dish. Lay the duck legs, skin-side up, on top, then scatter over the remaining salt, garlic and herbs. Cover the duck and refrigerate overnight. This can be done up to 2 days ahead.\r\nPour the wine into a saucepan that will snugly fit the duck legs in a single layer. Brush the salt off the duck legs and place them, skin-side down, in the wine. Cover the pan with a lid and place over a medium heat. As soon as the wine starts to bubble, turn the heat down to the lowest setting and cook for 2 hours, checking occasionally that the liquid is just barely simmering. (If you own a heat diffuser, it would be good to use it here.) After 2 hours, the duck legs should be submerged in their own fat and the meat should feel incredibly tender when prodded. Leave to cool.\r\nThe duck legs are now cooked and can be eaten immediately – or you can follow the next step if you like them crisp. If you are preparing ahead, pack the duck legs tightly into a plastic container or jar and pour over the fat, but not the liquid at the bottom of the pan. Cover and leave in the fridge for up to a month, or freeze for up to 3 months. The liquid you are left with makes a tasty gravy, which can be chilled or frozen until needed.\r\nTo reheat and crisp up the duck legs, heat oven to 220C/fan 200C/gas 7. Remove the legs from the fat and place them, skin-side down, in an ovenproof frying pan. Roast for 30-40 mins, turning halfway through, until brown and crisp. Serve with the reheated gravy, a crisp salad and some crisp golden ptoatoes.',
      image: 'wvpvsu1511786158.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Sea Salt',
          measure: 'Handful',
          id: 1049,
        },
        {
          name: 'Bay Leaf',
          measure: '4',
          id: 1050,
        },
        {
          name: 'Garlic',
          measure: '4 cloves',
          id: 1051,
        },
        {
          name: 'Thyme',
          measure: 'Handful',
          id: 1052,
        },
        {
          name: 'Duck Legs',
          measure: '4',
          id: 1053,
        },
        {
          name: 'White Wine',
          measure: '100ml',
          id: 1054,
        },
      ],
    },
    {
      id: 97,
      name: 'Eton Mess',
      category: 'Dessert',
      instructions:
        'Purée half the strawberries in a blender. Chop the remaining strawberries, reserving four for decoration.\r\nWhip the double cream until stiff peaks form, then fold in the strawberry purée and crushed meringue. Fold in the chopped strawberries and ginger cordial, if using.\r\nSpoon equal amounts of the mixture into four cold wine glasses. Serve garnished with the remaining strawberries and a sprig of mint.',
      image: 'uuxwvq1483907861.jpg',
      tags: 'Dairy,Fruity,Desert,Treat,Speciality',
      ingredients: [
        {
          name: 'strawberries',
          measure: '500g',
          id: 1055,
        },
        {
          name: 'double cream',
          measure: '400ml',
          id: 1056,
        },
        {
          name: 'meringue nests',
          measure: '3 x 7.5cm',
          id: 1057,
        },
        {
          name: 'ginger cordial',
          measure: '1 tbsp',
          id: 1058,
        },
        {
          name: 'Mint',
          measure: 'sprigs of fresh',
          id: 1059,
        },
      ],
    },
    {
      id: 98,
      name: 'Eccles Cakes',
      category: 'Dessert',
      instructions:
        'To make the pastry, dice the butter and put it in the freezer to go really hard. Tip flour into the bowl of a food processor with half the butter and pulse to the texture of breadcrumbs. Pour in the lemon juice and 100ml iced water, and pulse to a dough. Tip in the rest of the butter and pulse a few times until the dough is heavily flecked with butter. It is important that you don’t overdo this as the flecks of butter are what makes the pastry flaky.\r\nOn a floured surface roll the pastry out to a neat rectangle about 20 x 30cm. Fold the two ends of the pastry into the middle (See picture 1), then fold in half (pic 2). Roll the pastry out again and refold the same way 3 more times resting the pastry for at least 15 mins each time between roll and fold, then leave to rest in the fridge for at least 30 mins before using.\r\nTo make the filling, melt the butter in a large saucepan. Take it off the heat and stir in all the other ingredients until completely mixed, then set aside.\r\nTo make the cakes, roll the pastry out until it’s just a little thicker than a £1 coin and cut out 8 rounds about 12cm across. Re-roll the trimming if needed. Place a good heaped tablespoon of mixture in the middle of each round, brush the edges of the rounds with water, then gather the pastry around the filling and squeeze it together (pic 3). Flip them over so the smooth top is upwards and pat them into a smooth round. Flatten each round with a rolling pin to an oval until the fruit just starts to poke through, then place on a baking tray. Cut 2 little slits in each Eccles cakes, brush generously with egg white and sprinkle with the sugar (pic 4).\r\nHeat the oven to 220C/200C fan/gas 8. Bake the Eccles cakes for 15-20 mins until just past golden brown and sticky. Leave to cool on a rack and enjoy while still warm or cold with a cup of tea. If you prefer, Eccles cakes also go really well served with a wedge of hard, tangy British cheese such as Lancashire or cheddar.',
      image: 'wtqrqw1511639627.jpg',
      tags: 'Snack,Treat',
      ingredients: [
        {
          name: 'Butter',
          measure: '250g',
          id: 1060,
        },
        {
          name: 'Plain Flour',
          measure: '350g',
          id: 1061,
        },
        {
          name: 'Lemon',
          measure: 'Juice of 1/2',
          id: 1062,
        },
        {
          name: 'Butter',
          measure: '25g',
          id: 1063,
        },
        {
          name: 'Currants',
          measure: '200g',
          id: 1064,
        },
        {
          name: 'Mixed Peel',
          measure: '50g',
          id: 1065,
        },
        {
          name: 'Muscovado Sugar',
          measure: '100g',
          id: 1066,
        },
        {
          name: 'Cinnamon',
          measure: '1 tsp',
          id: 1067,
        },
        {
          name: 'Ginger',
          measure: '1 tsp',
          id: 1068,
        },
        {
          name: 'Allspice',
          measure: '1 tsp',
          id: 1069,
        },
        {
          name: 'Lemon',
          measure: 'Zest of 1',
          id: 1070,
        },
        {
          name: 'Eggs',
          measure: '1 beaten',
          id: 1071,
        },
        {
          name: 'Sugar',
          measure: 'spinkling',
          id: 1072,
        },
      ],
    },
    {
      id: 99,
      name: 'English Breakfast',
      category: 'Breakfast',
      instructions:
        "Heat the flat grill plate over a low heat, on top of 2 rings/flames if it fits, and brush sparingly with light olive oil.\r\nCook the sausages first. Add the sausages to the hot grill plate/the coolest part if there is one and allow to cook slowly for about 15-20 minutes, turning occasionally, until golden. After the first 10 minutes, increase the heat to medium before beginning to cook the other ingredients. If you are struggling for space, completely cook the sausages and keep hot on a plate in the oven.\r\nSnip a few small cuts into the fatty edge of the bacon. Place the bacon straight on to the grill plate and fry for 2-4 minutes each side or until your preferred crispiness is reached. Like the sausages, the cooked bacon can be kept hot on a plate in the oven.\r\nFor the mushrooms, brush away any dirt using a pastry brush and trim the stalk level with the mushroom top. Season with salt and pepper and drizzle over a little olive oil. Place stalk-side up on the grill plate and cook for 1-2 minutes before turning and cooking for a further 3-4 minutes. Avoid moving the mushrooms too much while cooking, as this releases the natural juices, making them soggy.\r\nFor the tomatoes, cut the tomatoes across the centre/or in half lengthways if using plum tomatoes , and with a small, sharp knife remove the green 'eye'. Season with salt and pepper and drizzle with a little olive oil. Place cut-side down on the grill plate and cook without moving for 2 minutes. Gently turn over and season again. Cook for a further 2-3 minutes until tender but still holding their shape.\r\nFor the black pudding, cut the black pudding into 3-4 slices and remove the skin. Place on the grill plate and cook for 1½-2 minutes each side until slightly crispy.\r\nFor 'proper' fried bread it's best to cook it in a separate pan. Ideally, use bread that is a couple of days old. Heat a frying pan to a medium heat and cover the base with oil. Add the bread and cook for 2-3 minutes each side until crispy and golden. If the pan becomes too dry, add a little more oil. For a richer flavour, add a knob of butter after you turn the slice.\r\nFor the fried eggs, break the egg straight into the pan with the fried bread and leave for 30 seconds. Add a good knob of butter and lightly splash/baste the egg with the butter when melted. Cook to your preferred stage, season and gently remove with a fish slice.\r\nOnce all the ingredients are cooked, serve on warm plates and enjoy straight away with a good squeeze of tomato ketchup or brown sauce.",
      image: 'utxryw1511721587.jpg',
      tags: 'Breakfast',
      ingredients: [
        {
          name: 'Sausages',
          measure: '2',
          id: 1073,
        },
        {
          name: 'Bacon',
          measure: '3',
          id: 1074,
        },
        {
          name: 'Mushrooms',
          measure: '2',
          id: 1075,
        },
        {
          name: 'Tomatoes',
          measure: '2',
          id: 1076,
        },
        {
          name: 'Black Pudding',
          measure: '1 Slice',
          id: 1077,
        },
        {
          name: 'Eggs',
          measure: '2',
          id: 1078,
        },
        {
          name: 'Bread',
          measure: '1 Slice',
          id: 1079,
        },
      ],
    },
    {
      id: 100,
      name: 'Escovitch Fish',
      category: 'Seafood',
      instructions:
        'Rinse fish; rub with lemon or lime, seasoned with salt and pepper or use your favorite seasoning. I used creole seasoning. Set aside or place in the oven to keep it warm until sauce is ready.\r\n\r\nIn large skillet heat oil over medium heat, until hot, add the fish, cook each side- for about 5-7 minutes until cooked through and crispy on both sides. Remove fish and set aside. Drain oil and leave about 2-3 tablespoons of oil\r\nAdd, bay leave, garlic and ginger, stir-fry for about a minute making sure the garlic does not burn\r\nThen add onion, bell peppers, thyme, scotch bonnet, sugar, all spice-continue stirring for about 2-3 minutes. Add vinegar, mix an adjust salt and pepper according to preference. Let it simmer for about 2 more minutes. \r\n\r\nDiscard bay leave, thyme spring and serve over fish with a side of this bammy. You may make the sauce about 2 days in advance.',
      image: '1520084413.jpg',
      tags: 'Seafood,Spicy,Speciality,Easter',
      ingredients: [
        {
          name: 'Red Snapper',
          measure: '2 Pounds',
          id: 1080,
        },
        {
          name: 'Vegetable Oil',
          measure: '1/2 cup',
          id: 1081,
        },
        {
          name: 'Garlic',
          measure: '1 clove peeled crushed',
          id: 1082,
        },
        {
          name: 'Ginger',
          measure: '1/2 tsp',
          id: 1083,
        },
        {
          name: 'Thyme',
          measure: '2 sprigs',
          id: 1084,
        },
        {
          name: 'Bay Leaf',
          measure: '1',
          id: 1085,
        },
        {
          name: 'Red Pepper',
          measure: '0.5',
          id: 1086,
        },
        {
          name: 'Yellow Pepper',
          measure: '0.5',
          id: 1087,
        },
        {
          name: 'Onion',
          measure: '1 sliced',
          id: 1088,
        },
        {
          name: 'Carrots',
          measure: '1 chopped',
          id: 1089,
        },
        {
          name: 'Sugar',
          measure: '1 tbs',
          id: 1090,
        },
        {
          name: 'Allspice',
          measure: '1/2 tsp',
          id: 1091,
        },
        {
          name: 'Worcestershire Sauce',
          measure: '1 tsp',
          id: 1092,
        },
        {
          name: 'Scotch Bonnet',
          measure: '1',
          id: 1093,
        },
        {
          name: 'Lime',
          measure: '1',
          id: 1094,
        },
        {
          name: 'Malt Vinegar',
          measure: '3/4 cup',
          id: 1095,
        },
        {
          name: 'Pepper',
          measure: 'pinch',
          id: 1096,
        },
      ],
    },
    {
      id: 101,
      name: 'Egg Drop Soup',
      category: 'Vegetarian',
      instructions:
        "In a wok add chicken broth and wait for it to boil.\r\nNext add salt, sugar, white pepper, sesame seed oil.\r\nWhen the chicken broth is boiling add the vegetables to the wok.\r\nTo thicken the sauce, whisk together 1 Tablespoon of cornstarch and 2 Tablespoon of water in a bowl and slowly add to your soup until it's the right thickness.\r\nNext add 1 egg slightly beaten with a knife or fork and add it to the soup slowly and stir for 8 seconds\r\nServe the soup in a bowl and add the green onions on top.",
      image: '1529446137.jpg',
      tags: 'Soup,Baking,Calorific',
      ingredients: [
        {
          name: 'Chicken Stock',
          measure: '3 cups',
          id: 1097,
        },
        {
          name: 'Salt',
          measure: '1/4 tsp',
          id: 1098,
        },
        {
          name: 'Sugar',
          measure: '1/4 tsp',
          id: 1099,
        },
        {
          name: 'Pepper',
          measure: 'pinch',
          id: 1100,
        },
        {
          name: 'Sesame Seed Oil',
          measure: '1 tsp',
          id: 1101,
        },
        {
          name: 'Peas',
          measure: '1/3 cup',
          id: 1102,
        },
        {
          name: 'Mushrooms',
          measure: '1/3 cup',
          id: 1103,
        },
        {
          name: 'Cornstarch',
          measure: '1 tbs',
          id: 1104,
        },
        {
          name: 'Water',
          measure: '2 tbs',
          id: 1105,
        },
        {
          name: 'Spring Onions',
          measure: '1/4 cup',
          id: 1106,
        },
      ],
    },
    {
      id: 102,
      name: 'Egyptian Fatteh',
      category: 'Beef',
      instructions:
        'To prepare bread for bottom of dish: Take pita bread and rip into bite size pieces. In a frying pan, add about a 1/4 stick of butter, add bread pieces and fry until golden brown and crisp. Put these pieces in a glass baking dish, preferably a square sized dish. Set aside.\r\nThen add to same pan, a little more butter, salt, approximately 2 cloves of crushed fresh garlic, and a teaspoon or so of cumin stir around a bit until you can smell aroma, then add fried bread pieces to this mixture, stir to coat bread and put back into glass baking dish. Set aside.\r\nTo prepare meat: put some butter in a pot, stir fry meat until brown, add 1 onion quartered, salt & pepper, 1 cube of chicken bouillon and water to cover meat. Bring to a boil, turn down to simmer, cover and cook until tender, approximately 2 hours. After meat has cooled, take out chunks of meat and put in a bowl, set aside. Reserve soup from the meat separately.\r\nTo prepare the rice: Put some butter into a pot, add shareya (fideo noodles) like a handful or so, keep stirring until golden brown, not too dark, but very golden. Then add two cups of rice, stir a little bit until some of the rice turns an opaque white. Add 2-1/4 cups of water and salt to taste. Bring to a boil, cover and turn down to simmer, cook until tender. Test the rice tenderness after about 35 minutes.\r\nNow take some of the soup from meat and add to the top of the bread pieces in baking dish to saturate.Add cooked rice on top of bread pieces. Slowly spoon remainder of soup onto rice, looking at glass dish sides to see level of soup, should reach just to top of rice, don’t worry, this doesn’t have to be exact. Now you’re ready to make the sauce and fry the meat to put on top.\r\nTo prepare red sauce: In a pan, add a little oil or butter, crushed tomato, a half teaspoon of tomato paste, salt & pepper, 2 cloves of fresh crushed garlic and cumin. Add also approximately 3 tablespoons of vinegar, stir this until you smell aroma and it is a bit smooth. It should be a bit thick, not watery, but if too thick you can add a bit of water. Spread with a wooden spoon atop the rice to cover.\r\nTo fry meat: In a pan add a bit of butter or oil, the meat, just a touch of tomato paste, about a tablespoon of fresh crushed garlic, salt & pepper, a teaspoon of cumin. Cook until meat is golden fried.\r\nSpoon this atop the rice and serve. Enjoy!',
      image: 'rlwcc51598734603.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Beef',
          measure: '1lb',
          id: 1107,
        },
        {
          name: 'Onion',
          measure: '1',
          id: 1108,
        },
        {
          name: 'Chicken Stock Cube',
          measure: '1',
          id: 1109,
        },
        {
          name: 'Tomatoes',
          measure: '2',
          id: 1110,
        },
        {
          name: 'Garlic Clove',
          measure: '4',
          id: 1111,
        },
        {
          name: 'Tomato Puree',
          measure: '1 tbs',
          id: 1112,
        },
        {
          name: 'Rice',
          measure: '2 cups',
          id: 1113,
        },
        {
          name: 'Noodles',
          measure: '1/4 cup',
          id: 1114,
        },
        {
          name: 'Butter',
          measure: '1/4 cup',
          id: 1115,
        },
        {
          name: 'Olive Oil',
          measure: '2 cups',
          id: 1116,
        },
        {
          name: 'Pita Bread',
          measure: '1',
          id: 1117,
        },
        {
          name: 'Cumin',
          measure: '1 tbs',
          id: 1118,
        },
        {
          name: 'White Wine Vinegar',
          measure: '3 tbs',
          id: 1119,
        },
        {
          name: 'Salt',
          measure: 'To taste',
          id: 1120,
        },
        {
          name: 'Pepper',
          measure: 'To taste',
          id: 1121,
        },
      ],
    },
    {
      id: 103,
      name: 'Eggplant Adobo',
      category: 'Vegetarian',
      instructions:
        '1.\tSlice 1 lb. small Japanese or Italian eggplant (about 3) into quarters lengthwise, then cut crosswise into 2"-wide pieces. Place in a medium bowl. Add 1 Tbsp. sugar, 1 tsp. Diamond Crystal or ½ tsp. Morton kosher salt, and ½ tsp. freshly ground black pepper. Toss to evenly coat eggplant and let sit at room temperature at least 20 minutes and up to 2 hours.\r\n2.\tPeel and thinly slice 8 garlic cloves. Add 3 Tbsp. vegetable oil and half of garlic to a medium Dutch oven or other heavy pot. Cook over medium-high heat, stirring constantly with a wooden spoon, until light golden and crisp, about 5 minutes. Using a slotted spoon, transfer garlic chips to a plate; season lightly with salt.\r\n3. Place 4 oz. ground pork in same pot and break up into small pieces with wooden spoon. Season with ¼ tsp. Diamond Crystal or Morton kosher salt and cook, undisturbed, until deeply browned underneath, about 5 minutes. Using a slotted spoon, transfer to another plate, leaving fat behind in the pot.\r\n4. Place eggplant on a clean kitchen towel and blot away any moisture the salt has drawn out.\r\n5. Working in batches and adding more oil if needed, cook eggplant in the same pot until lightly browned, about 3 minutes per side. Transfer to a plate with pork.\r\n6. Pour 1½ cups of water into the pot and scrape up browned bits from the bottom with a wooden spoon. Add remaining garlic, 3 Tbsp. coconut vinegar or unseasoned rice vinegar, 2 Tbsp. soy sauce, 2 bay leaves, 1 tsp. freshly ground black pepper, and remaining 1 Tbsp. sugar. Bring to a simmer, then return pork and eggplant to pot. Reduce heat to medium-low, partially cover, and simmer until eggplant is tender and silky and sauce is reduced by half, 20–25 minutes. Taste and season with more salt and pepper and add a little more sugar if needed.\r\n7. Top with garlic chips and serve with cooked white rice.\r\n',
      image: 'y7h0lq1683208991.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Egg Plants',
          measure: '1 lb',
          id: 1122,
        },
        {
          name: 'Sugar',
          measure: '2 tbs',
          id: 1123,
        },
        {
          name: 'Salt',
          measure: '1 tsp',
          id: 1124,
        },
        {
          name: 'Pepper',
          measure: '1 tsp',
          id: 1125,
        },
        {
          name: 'Garlic',
          measure: '1 whole',
          id: 1126,
        },
        {
          name: 'Olive Oil',
          measure: '3 tbs',
          id: 1127,
        },
        {
          name: 'Ground Pork',
          measure: '4 oz',
          id: 1128,
        },
        {
          name: 'Rice Vinegar',
          measure: '3 tbs',
          id: 1129,
        },
        {
          name: 'Soy Sauce',
          measure: '2 tbs',
          id: 1130,
        },
        {
          name: 'Bay Leaf',
          measure: '2',
          id: 1131,
        },
      ],
    },
    {
      id: 104,
      name: 'Fish pie',
      category: 'Seafood',
      instructions:
        '01.Put the potatoes in a large pan of cold salted water and bring to the boil. Lower the heat, cover, then simmer gently for 15 minutes until tender. Drain, then return to the pan over a low heat for 30 seconds to drive off any excess water. Mash with 1 tbsp olive oil, then season.\r\n02.Meanwhile put the milk in a large sauté pan, add the fish and bring to the boil. Remove from the heat, cover and stand for 3 minutes. Remove the fish (reserving the milk) and pat dry with kitchen paper, then gently flake into an ovenproof dish, discarding the skin and any bones.\r\n03.Heat the remaining oil in a pan, stir in the flour and cook for 30 seconds. Gradually stir in 200-250ml of the reserved milk (discard the rest). Grate in nutmeg, season, then bubble until thick. Stir in the cream.\r\n04.Preheat the oven to 190°C/fan170°C/gas 5. Grate the artichokes and add to the dish with the leek, prawns and herbs. Stir the lemon zest and juice into the sauce, then pour over. Mix gently with a wooden spoon.\r\n05.Spoon the mash onto the fish mixture, then use a fork to make peaks, which will crisp and brown as it cooks. Sprinkle over the cheese, then bake for 35-40 minutes until golden and bubbling. Serve with wilted greens.',
      image: 'ysxwuq1487323065.jpg',
      tags: 'Fish,Pie,Breakfast,Baking',
      ingredients: [
        {
          name: 'Floury Potatoes',
          measure: '900g',
          id: 1132,
        },
        {
          name: 'Olive Oil',
          measure: '2 tbsp',
          id: 1133,
        },
        {
          name: 'Semi-skimmed Milk',
          measure: '600ml',
          id: 1134,
        },
        {
          name: 'White Fish Fillets',
          measure: '800g',
          id: 1135,
        },
        {
          name: 'Plain flour',
          measure: '1 tbsp',
          id: 1136,
        },
        {
          name: 'Nutmeg',
          measure: 'Grating',
          id: 1137,
        },
        {
          name: 'Double Cream',
          measure: '3 tbsp',
          id: 1138,
        },
        {
          name: 'Jerusalem Artichokes',
          measure: '200g',
          id: 1139,
        },
        {
          name: 'Leek',
          measure: '1 finely sliced',
          id: 1140,
        },
        {
          name: 'Prawns',
          measure: '200g peeled raw',
          id: 1141,
        },
        {
          name: 'Parsley',
          measure: 'Large handful',
          id: 1142,
        },
        {
          name: 'Dill',
          measure: 'Handful',
          id: 1143,
        },
        {
          name: 'Lemon',
          measure: 'Grated zest of 1',
          id: 1144,
        },
        {
          name: 'Gruyère',
          measure: '25g grated',
          id: 1145,
        },
        {
          name: 'Lemon',
          measure: 'Juice of 1',
          id: 1146,
        },
      ],
    },
    {
      id: 105,
      name: 'French Lentils With Garlic and Thyme',
      category: 'Miscellaneous',
      instructions:
        'Place a large saucepan over medium heat and add oil. When hot, add chopped vegetables and sauté until softened, 5 to 10 minutes.\r\nAdd 6 cups water, lentils, thyme, bay leaves and salt. Bring to a boil, then reduce to a fast simmer.\r\nSimmer lentils until they are tender and have absorbed most of the water, 20 to 25 minutes. If necessary, drain any excess water after lentils have cooked. Serve immediately, or allow them to cool and reheat later.\r\nFor a fuller taste, use some chicken stock and reduce the water by the same amount.',
      image: 'vwwspt1487394060.jpg',
      tags: 'Pulse',
      ingredients: [
        {
          name: 'Olive Oil',
          measure: '3 tablespoons',
          id: 1147,
        },
        {
          name: 'Onion',
          measure: '1',
          id: 1148,
        },
        {
          name: 'Garlic',
          measure: '2 cloves',
          id: 1149,
        },
        {
          name: 'Carrot',
          measure: '1',
          id: 1150,
        },
        {
          name: 'French Lentils',
          measure: '2 1/4 cups',
          id: 1151,
        },
        {
          name: 'Thyme',
          measure: '1 teaspoon',
          id: 1152,
        },
        {
          name: 'Bay Leaf',
          measure: '3',
          id: 1153,
        },
        {
          name: 'Salt',
          measure: '1 tablespoon',
          id: 1154,
        },
        {
          name: 'Celery',
          measure: '2 sticks',
          id: 1155,
        },
      ],
    },
    {
      id: 106,
      name: 'Fettucine alfredo',
      category: 'Pasta',
      instructions:
        'In a medium saucepan, stir the clotted cream, butter and cornflour over a low-ish heat and bring to a low simmer. Turn off the heat and keep warm.\r\nMeanwhile, put the cheese and nutmeg in a small bowl and add a good grinding of black pepper, then stir everything together (don’t add any salt at this stage).\r\nPut the pasta in another pan with 2 tsp salt, pour over some boiling water and cook following pack instructions (usually 3-4 mins). When cooked, scoop some of the cooking water into a heatproof jug or mug and drain the pasta, but not too thoroughly.\r\nAdd the pasta to the pan with the clotted cream mixture, then sprinkle over the cheese and gently fold everything together over a low heat using a rubber spatula. When combined, splash in 3 tbsp of the cooking water. At first, the pasta will look wet and sloppy: keep stirring until the water is absorbed and the sauce is glossy. Check the seasoning before transferring to heated bowls. Sprinkle over some chives or parsley, then serve immediately.',
      image: 'uquqtu1511178042.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Clotted Cream',
          measure: '227g',
          id: 1156,
        },
        {
          name: 'Butter',
          measure: '25g',
          id: 1157,
        },
        {
          name: 'Corn Flour',
          measure: '1 tsp',
          id: 1158,
        },
        {
          name: 'Parmesan Cheese',
          measure: '100g',
          id: 1159,
        },
        {
          name: 'Nutmeg',
          measure: 'Grated',
          id: 1160,
        },
        {
          name: 'Fettuccine',
          measure: '250g',
          id: 1161,
        },
        {
          name: 'Parsley',
          measure: 'Chopped',
          id: 1162,
        },
      ],
    },
    {
      id: 107,
      name: 'Full English Breakfast',
      category: 'Breakfast',
      instructions:
        "Heat the flat grill plate over a low heat, on top of 2 rings/flames if it fits, and brush sparingly with light olive oil.\r\nCook the sausages first. Add the sausages to the hot grill plate/the coolest part if there is one and allow to cook slowly for about 15-20 minutes, turning occasionally, until golden. After the first 10 minutes, increase the heat to medium before beginning to cook the other ingredients. If you are struggling for space, completely cook the sausages and keep hot on a plate in the oven.\r\nSnip a few small cuts into the fatty edge of the bacon. Place the bacon straight on to the grill plate and fry for 2-4 minutes each side or until your preferred crispiness is reached. Like the sausages, the cooked bacon can be kept hot on a plate in the oven.\r\nFor the mushrooms, brush away any dirt using a pastry brush and trim the stalk level with the mushroom top. Season with salt and pepper and drizzle over a little olive oil. Place stalk-side up on the grill plate and cook for 1-2 minutes before turning and cooking for a further 3-4 minutes. Avoid moving the mushrooms too much while cooking, as this releases the natural juices, making them soggy.\r\nFor the tomatoes, cut the tomatoes across the centre/or in half lengthways if using plum tomatoes , and with a small, sharp knife remove the green 'eye'. Season with salt and pepper and drizzle with a little olive oil. Place cut-side down on the grill plate and cook without moving for 2 minutes. Gently turn over and season again. Cook for a further 2-3 minutes until tender but still holding their shape.\r\nFor the black pudding, cut the black pudding into 3-4 slices and remove the skin. Place on the grill plate and cook for 1½-2 minutes each side until slightly crispy.\r\nFor 'proper' fried bread it's best to cook it in a separate pan. Ideally, use bread that is a couple of days old. Heat a frying pan to a medium heat and cover the base with oil. Add the bread and cook for 2-3 minutes each side until crispy and golden. If the pan becomes too dry, add a little more oil. For a richer flavour, add a knob of butter after you turn the slice.\r\nFor the fried eggs, break the egg straight into the pan with the fried bread and leave for 30 seconds. Add a good knob of butter and lightly splash/baste the egg with the butter when melted. Cook to your preferred stage, season and gently remove with a fish slice.\r\nOnce all the ingredients are cooked, serve on warm plates and enjoy straight away with a good squeeze of tomato ketchup or brown sauce.",
      image: 'sqrtwu1511721265.jpg',
      tags: 'Greasy,UnHealthy,HangoverFood,Calorific,Breakfast,BBQ',
      ingredients: [
        {
          name: 'Sausages',
          measure: '4',
          id: 1163,
        },
        {
          name: 'Bacon',
          measure: '4',
          id: 1164,
        },
        {
          name: 'Mushrooms',
          measure: '4',
          id: 1165,
        },
        {
          name: 'Tomatoes',
          measure: '3',
          id: 1166,
        },
        {
          name: 'Black Pudding',
          measure: '2 sliced',
          id: 1167,
        },
        {
          name: 'Eggs',
          measure: '2',
          id: 1168,
        },
        {
          name: 'Bread',
          measure: '1 Slice',
          id: 1169,
        },
        {
          name: 'Baked Beans',
          measure: '100g',
          id: 1170,
        },
      ],
    },
    {
      id: 108,
      name: 'French Onion Soup',
      category: 'Side',
      instructions:
        'Melt the butter with the oil in a large heavy-based pan. Add the onions and fry with the lid on for 10 mins until soft. Sprinkle in the sugar and cook for 20 mins more, stirring frequently, until caramelised. The onions should be really golden, full of flavour and soft when pinched between your fingers. Take care towards the end to ensure that they don’t burn.\r\nAdd the garlic for the final few mins of the onions’ cooking time, then sprinkle in the flour and stir well. Increase the heat and keep stirring as you gradually add the wine, followed by the hot stock. Cover and simmer for 15-20 mins.\r\nTo serve, turn on the grill, and toast the bread. Ladle the soup into heatproof bowls. Put a slice or two of toast on top of the bowls of soup, and pile on the cheese. Grill until melted. Alternatively, you can complete the toasts under the grill, then serve them on top.',
      image: 'xvrrux1511783685.jpg',
      tags: 'Soup',
      ingredients: [
        {
          name: 'Butter',
          measure: '50g',
          id: 1171,
        },
        {
          name: 'Olive Oil',
          measure: '1 tbs',
          id: 1172,
        },
        {
          name: 'Onion',
          measure: '1 kg',
          id: 1173,
        },
        {
          name: 'Sugar',
          measure: '1 tsp',
          id: 1174,
        },
        {
          name: 'Garlic Clove',
          measure: '4 sliced',
          id: 1175,
        },
        {
          name: 'Plain Flour',
          measure: '2 tbs',
          id: 1176,
        },
        {
          name: 'Dry White Wine',
          measure: '250ml',
          id: 1177,
        },
        {
          name: 'Beef Stock',
          measure: '1L',
          id: 1178,
        },
        {
          name: 'Bread',
          measure: '4 sliced',
          id: 1179,
        },
        {
          name: 'Gruyère',
          measure: '140g',
          id: 1180,
        },
      ],
    },
    {
      id: 109,
      name: 'Flamiche',
      category: 'Vegetarian',
      instructions:
        'For the pastry, sift the flour and salt into the bowl of a food processor, add the butter and lard, then whizz together briefly until the mixture looks like fine breadcrumbs. Tip the mixture into a bowl, then stir in the cheese and enough of the water for the mixture to come together. Tip out onto a lightly floured surface and knead briefly until smooth. Roll out thinly and line a 23cm x 4cm loose-?bottomed fluted flan tin. Prick the base with a fork. Chill for 20 minutes.\r\n02.Melt the 75g butter in a saucepan over a low heat, then add the leeks and the salt. Cover and cook for ?10 minutes until soft. Uncover the pan, increase the heat and cook ?for 2 minutes, stirring occasionally, until the liquid has evaporated. Spoon onto a plate and leave to cool.\r\n03.Preheat the oven to 200°C/fan180°C/gas 6. Line the pastry case with baking paper and baking beans or rice and blind bake for 15-20 minutes until the edges are biscuit-coloured. Remove the paper and beans/rice and return the case to the oven for 7-10 minutes until the base is crisp and lightly golden. Remove and set aside. Reduce the oven temperature to 190°C/fan170°C/gas 5.\r\n04.Put the crème fraîche into a bowl with the whole egg, egg yolks and nutmeg. Lightly beat together, then season. Stir in the leeks. Spoon ?the mixture into the tart case and bake for 35-40 minutes until set ?and lightly golden. Remove from ?the oven and leave for 10 minutes. Take out of the tin and serve.',
      image: 'wssvvs1511785879.jpg',
      tags: 'Tart',
      ingredients: [
        {
          name: 'Butter',
          measure: '75g',
          id: 1181,
        },
        {
          name: 'Leek',
          measure: '1kg',
          id: 1182,
        },
        {
          name: 'Salt',
          measure: '½ tsp',
          id: 1183,
        },
        {
          name: 'Creme Fraiche',
          measure: '300ml',
          id: 1184,
        },
        {
          name: 'Egg',
          measure: '1',
          id: 1185,
        },
        {
          name: 'Egg Yolks',
          measure: '3',
          id: 1186,
        },
        {
          name: 'Nutmeg',
          measure: '¼ teaspoon',
          id: 1187,
        },
        {
          name: 'Plain Flour',
          measure: '225g',
          id: 1188,
        },
        {
          name: 'Salt',
          measure: '½ tsp',
          id: 1189,
        },
        {
          name: 'Butter',
          measure: '60g',
          id: 1190,
        },
        {
          name: 'Lard',
          measure: '60g',
          id: 1191,
        },
        {
          name: 'Cheddar Cheese',
          measure: '50g',
          id: 1192,
        },
        {
          name: 'Water',
          measure: '2 tbs',
          id: 1193,
        },
      ],
    },
    {
      id: 110,
      name: 'French Omelette',
      category: 'Miscellaneous',
      instructions:
        'Get everything ready. Warm a 20cm (measured across the top) non-stick frying pan on a medium heat. Crack the eggs into a bowl and beat them with a fork so they break up and mix, but not as completely as you would for scrambled egg. With the heat on medium-hot, drop one knob of butter into the pan. It should bubble and sizzle, but not brown. Season the eggs with the Parmesan and a little salt and pepper, and pour into the pan.\r\nLet the eggs bubble slightly for a couple of seconds, then take a wooden fork or spatula and gently draw the mixture in from the sides of the pan a few times, so it gathers in folds in the centre. Leave for a few seconds, then stir again to lightly combine uncooked egg with cooked. Leave briefly again, and when partly cooked, stir a bit faster, stopping while there’s some barely cooked egg left. With the pan flat on the heat, shake it back and forth a few times to settle the mixture. It should slide easily in the pan and look soft and moist on top. A quick burst of heat will brown the underside.\r\nGrip the handle underneath. Tilt the pan down away from you and let the omelette fall to the edge. Fold the side nearest to you over by a third with your fork, and keep it rolling over, so the omelette tips onto a plate – or fold it in half, if that’s easier. For a neat finish, cover the omelette with a piece of kitchen paper and plump it up a bit with your fingers. Rub the other knob of butter over to glaze. Serve immediately.',
      image: 'yvpuuy1511797244.jpg',
      tags: 'Egg',
      ingredients: [
        {
          name: 'Eggs',
          measure: '3',
          id: 1194,
        },
        {
          name: 'Butter',
          measure: '2 knobs',
          id: 1195,
        },
        {
          name: 'Parmesan',
          measure: '1 tsp',
          id: 1196,
        },
        {
          name: 'Tarragon',
          measure: '3 chopped',
          id: 1197,
        },
        {
          name: 'Parsley',
          measure: '1 tbs chopped',
          id: 1198,
        },
        {
          name: 'Chives',
          measure: '1 tbs chopped',
          id: 1199,
        },
        {
          name: 'Gruyère',
          measure: '4 tbs',
          id: 1200,
        },
      ],
    },
    {
      id: 111,
      name: 'Fish Stew with Rouille',
      category: 'Seafood',
      instructions:
        'Twist the heads from the prawns, then peel away the legs and shells, but leave the tails intact. Devein each prawn. Fry the shells in 1 tbsp oil for 5 mins, until dark pink and golden in patches. Add the wine, boil down by two thirds, then pour in the stock. Strain into a jug, discarding the shells.\r\nHeat the rest of the oil in a deep frying pan or casserole. Add the fennel, onion and garlic, season, then cover and gently cook for 10 mins until softened. Meanwhile, peel the potato and cut into 2cm-ish chunks. Put into a pan of cold water, bring to the boil and cook for 5 mins until almost tender. Drain in a colander.\r\nPeel a strip of zest from the orange. Put the zest, star anise, bay and ½ tsp harissa into the pan. Fry gently, uncovered, for 5-10 mins, until the vegetables are soft, sweet and golden.\r\nStir in the tomato purée, cook for 2 mins, then add the tomatoes and stock. Simmer for 10 mins until the sauce thickens slightly. Season to taste. The sauce can be made ahead, then reheated later in the day. Meantime, scrub the mussels or clams and pull away any stringy beards. Any that are open should be tapped sharply on the worktop – if they don’t close after a few seconds, discard them.\r\nReheat the sauce if necessary, then stir the potato, chunks of fish and prawns very gently into the stew. Bring back to the boil, then cover and gently simmer for 3 mins. Scatter the mussels or clams over the stew, then cover and cook for 2 mins more or until the shells have opened wide. Discard any that remain closed. The chunks of fish should flake easily and the prawns should be pink through. Scatter with the thyme leaves.\r\nTo make the quick rouille, stir the rest of the harissa through the mayonnaise. Serve the stew in bowls, topped with spoonfuls of rouille, which will melt into the sauce and enrich it. Have some good bread ready, as you’ll definitely want to mop up the juices.',
      image: 'vptqpw1511798500.jpg',
      tags: 'Fish,Seafood,Shellfish',
      ingredients: [
        {
          name: 'Prawns',
          measure: '6 large',
          id: 1201,
        },
        {
          name: 'Olive Oil',
          measure: '3 tbs',
          id: 1202,
        },
        {
          name: 'Dry White Wine',
          measure: '150ml',
          id: 1203,
        },
        {
          name: 'Fish Stock',
          measure: '200ml',
          id: 1204,
        },
        {
          name: 'Fennel',
          measure: '1 small finely diced',
          id: 1205,
        },
        {
          name: 'Onion',
          measure: '1 small finely diced',
          id: 1206,
        },
        {
          name: 'Garlic',
          measure: '3 cloves Chopped',
          id: 1207,
        },
        {
          name: 'Potatoes',
          measure: '1 large',
          id: 1208,
        },
        {
          name: 'Orange',
          measure: '1',
          id: 1209,
        },
        {
          name: 'Star Anise',
          measure: '1',
          id: 1210,
        },
        {
          name: 'Bay Leaf',
          measure: '1',
          id: 1211,
        },
        {
          name: 'Harissa Spice',
          measure: '1 1/2 tsp',
          id: 1212,
        },
        {
          name: 'Tomato Puree',
          measure: '2 tbs',
          id: 1213,
        },
        {
          name: 'Chopped Tomatoes',
          measure: '400g',
          id: 1214,
        },
        {
          name: 'Mussels',
          measure: 'Handful',
          id: 1215,
        },
        {
          name: 'White Fish',
          measure: '200g',
          id: 1216,
        },
        {
          name: 'Thyme',
          measure: '2',
          id: 1217,
        },
        {
          name: 'Bread',
          measure: 'to serve',
          id: 1218,
        },
      ],
    },
    {
      id: 112,
      name: 'Fennel Dauphinoise',
      category: 'Side',
      instructions:
        'Heat oven to 180C/160C fan/gas 4. Put potatoes, fennel, and garlic in a medium non-stick pan. Pour in milk and double cream, season well and simmer gently, covered, for 10 mins, stirring halfway through, until potatoes are just tender.\r\nDivide the mixture between 2 small (about 150ml) buttered ramekins and scatter with Parmesan. Bake for 40 mins until the potatoes are golden and tender when pierced with a knife. Snip the reserved fennel fronds over before serving.',
      image: 'ytttsv1511798734.jpg',
      tags: 'Pie,SideDish',
      ingredients: [
        {
          name: 'Potatoes',
          measure: '225g',
          id: 1219,
        },
        {
          name: 'Fennel',
          measure: '1 small',
          id: 1220,
        },
        {
          name: 'Garlic',
          measure: '1 clove finely chopped',
          id: 1221,
        },
        {
          name: 'Milk',
          measure: '75 ml',
          id: 1222,
        },
        {
          name: 'Double Cream',
          measure: '100ml',
          id: 1223,
        },
        {
          name: 'Butter',
          measure: 'For Greasing',
          id: 1224,
        },
        {
          name: 'Parmesan Cheese',
          measure: 'to serve',
          id: 1225,
        },
      ],
    },
    {
      id: 113,
      name: 'Fruit and Cream Cheese Breakfast Pastries',
      category: 'Breakfast',
      instructions:
        'Preheat oven to 400ºF (200ºC), and prepare two cookie sheets with parchment paper. In a bowl, mix cream cheese, sugar, and vanilla until fully combined. Lightly flour the surface and roll out puff pastry on top to flatten. Cut each sheet of puff pastry into 9 equal squares. On the top right and bottom left of the pastry, cut an L shape approximately ½ inch (1 cm) from the edge.\r\nNOTE: This L shape should reach all the way down and across the square, however both L shapes should not meet at the ends. Your pastry should look like a picture frame with two corners still intact.\r\nTake the upper right corner and fold down towards the inner bottom corner. You will now have a diamond shape.\r\nPlace 1 to 2 teaspoons of the cream cheese filling in the middle, then place berries on top.\r\nRepeat with the remaining pastry squares and place them onto the parchment covered baking sheet.\r\nBake for 15-20 minutes or until pastry is golden brown and puffed.\r\nEnjoy!\r\n',
      image: '1543774956.jpg',
      tags: 'Breakfast,Summer',
      ingredients: [
        {
          name: 'Cream Cheese',
          measure: '1 1/4 oz',
          id: 1226,
        },
        {
          name: 'Sugar',
          measure: '1 1/4 cup',
          id: 1227,
        },
        {
          name: 'Vanilla Extract',
          measure: '1 teaspoon',
          id: 1228,
        },
        {
          name: 'Flour',
          measure: '',
          id: 1229,
        },
        {
          name: 'Puff Pastry',
          measure: '2',
          id: 1230,
        },
        {
          name: 'Strawberries',
          measure: '',
          id: 1231,
        },
        {
          name: 'Raspberries',
          measure: '',
          id: 1232,
        },
        {
          name: 'Blackberries',
          measure: '',
          id: 1233,
        },
      ],
    },
    {
      id: 114,
      name: 'French Onion Chicken with Roasted Carrots & Mashed Potatoes',
      category: 'Chicken',
      instructions:
        '1\r\n\r\nPreheat oven to 425 degrees. Wash and dry all produce. Trim, peel, and cut carrots on a diagonal into ¼-inch-thick pieces. Dice potatoes into ½-inch pieces. Halve, peel, and thinly slice onion.\r\n\r\n2\r\n\r\nToss carrots on a baking sheet with a drizzle of oil, salt, and pepper. Roast until browned and tender, 15-20 minutes.\r\n\r\n3\r\n\r\nMeanwhile, place potatoes in a medium pot with enough salted water to cover by 2 inches. Bring to a boil and cook until tender, 12-15 minutes. Drain and return potatoes to pot; cover to keep warm.\r\n\r\n4\r\n\r\nWhile potatoes cook, heat a drizzle of oil in a large pan over medium-high heat. Add onion and cook, stirring occasionally, until lightly browned and softened, 8-10 minutes. Sprinkle with 1 tsp sugar (2 tsp for 4 servings). Stir in stock concentrate and 2 TBSP water (¼ cup for 4); season with salt and pepper. Cook until jammy, 2-3 minutes more. Turn off heat; transfer to a small bowl. Wash out pan.\r\n\r\n5\r\n\r\nPat chicken dry with paper towels; season all over with salt and pepper. Heat a drizzle of oil in pan used for onion over medium-high heat. Add chicken and cook until browned and cooked through, 5-6 minutes per side. In the last 1-2 minutes of cooking, top with caramelized onion and cheese. Cover pan until cheese melts. (If your pan doesn’t have a lid, cover with a baking sheet!)\r\n\r\n6\r\n\r\nHeat pot with drained potatoes over low heat; mash with sour cream, 2 TBSP butter (4 TBSP for 4 servings), salt, pepper, and a splash of water (or milk, for extra richness) until smooth. Divide chicken, roasted carrots, and mashed potatoes between plates.',
      image: 'b5ft861583188991.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Chicken Breasts',
          measure: '2',
          id: 1234,
        },
        {
          name: 'Carrots',
          measure: '12 ounces',
          id: 1235,
        },
        {
          name: 'Small Potatoes',
          measure: '5',
          id: 1236,
        },
        {
          name: 'Onion',
          measure: '1',
          id: 1237,
        },
        {
          name: 'Beef Stock',
          measure: '1',
          id: 1238,
        },
        {
          name: 'Mozzarella',
          measure: '1 1/2 cup',
          id: 1239,
        },
        {
          name: 'Sour Cream',
          measure: '2 tbsp',
          id: 1240,
        },
        {
          name: 'Butter',
          measure: '',
          id: 1241,
        },
        {
          name: 'Sugar',
          measure: '',
          id: 1242,
        },
        {
          name: 'Vegetable Oil',
          measure: '',
          id: 1243,
        },
        {
          name: 'Salt',
          measure: '',
          id: 1244,
        },
        {
          name: 'Pepper',
          measure: '',
          id: 1245,
        },
      ],
    },
    {
      id: 115,
      name: 'Ful Medames',
      category: 'Vegetarian',
      instructions:
        'As the cooking time varies depending on the quality and age of the beans, it is good to cook them in advance and to reheat them when you are ready to serve. Cook the drained beans in a fresh portion of unsalted water in a large saucepan with the lid on until tender, adding water to keep them covered, and salt when the beans have softened. They take 2–2 1/2 hours of gentle simmering. When the beans are soft, let the liquid reduce. It is usual to take out a ladle or two of the beans and to mash them with some of the cooking liquid, then stir this back into the beans. This is to thicken the sauce.\r\nServe the beans in soup bowls sprinkled with chopped parsley and accompanied by Arab bread.\r\nPass round the dressing ingredients for everyone to help themselves: a bottle of extra-virgin olive oil, the quartered lemons, salt and pepper, a little saucer with the crushed garlic, one with chili-pepper flakes, and one with ground cumin.\r\nThe beans are eaten gently crushed with the fork, so that they absorb the dressing.\r\nOptional Garnishes\r\nPeel hard-boiled eggs—1 per person—to cut up in the bowl with the beans.\r\nTop the beans with a chopped cucumber-and-tomato salad and thinly sliced mild onions or scallions. Otherwise, pass round a good bunch of scallions and quartered tomatoes and cucumbers cut into sticks.\r\nServe with tahina cream sauce (page 65) or salad (page 67), with pickles and sliced onions soaked in vinegar for 30 minutes.\r\nAnother way of serving ful medames is smothered in a garlicky tomato sauce (see page 464).\r\nIn Syria and Lebanon, they eat ful medames with yogurt or feta cheese, olives, and small cucumbers.\r\nVariations\r\nA traditional way of thickening the sauce is to throw a handful of red lentils (1/4 cup) into the water at the start of the cooking.\r\nIn Iraq, large brown beans are used instead of the small Egyptian ones, in a dish called badkila, which is also sold for breakfast in the street.',
      image: 'lvn2d51598732465.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Broad Beans',
          measure: '2 cups',
          id: 1246,
        },
        {
          name: 'Parsley',
          measure: '1/3 cup',
          id: 1247,
        },
        {
          name: 'Olive Oil',
          measure: 'Dash',
          id: 1248,
        },
        {
          name: 'Lemons',
          measure: '3',
          id: 1249,
        },
        {
          name: 'Garlic Clove',
          measure: '4',
          id: 1250,
        },
        {
          name: 'Cumin',
          measure: 'Sprinking',
          id: 1251,
        },
      ],
    },
    {
      id: 116,
      name: 'Feteer Meshaltet',
      category: 'Side',
      instructions:
        'Mix the flour and salt then pour one cup of water and start kneading.\r\nIf you feel the dough is still not coming together or too dry, gradually add the remaining water until you get a dough that is very elastic so that when you pull it and it won’t be torn.\r\nLet the dough rest for just 10 minutes then divide the dough into 6-8 balls depending on the size you want for your feteer.\r\nWarm up the butter/ghee or oil you are using and pour into a deep bowl.\r\nImmerse the dough balls into the warm butter. Let it rest for 15 to 20 minutes.\r\nPreheat oven to 550F.\r\nStretch the first ball with your hands on a clean countertop. Stretch it as thin as you can, the goal here is to see your countertop through the dough.\r\nFold the dough over itself to form a square brushing in between folds with the butter mixture.\r\nSet aside and start making the next ball.\r\nStretch the second one thin as we have done for the first ball.\r\nPlace the previous one on the middle seam side down. Fold the outer one over brushing with more butter mixture as you fold. Set aside.\r\nKeep doing this for the third and fourth balls. Now we have one ready, place on a 10 inch baking/pie dish seam side down and brush the top with more butter.\r\nRepeat for the remaining 4 balls to make a second one. With your hands lightly press the folded feteer to spread it on the baking dish.\r\nPlace in preheated oven for 10 minutes when the feteer starts puffing turn on the broiler to brown the top.\r\nWhen it is done add little butter on top and cover so it won’t get dry.',
      image: '9f4z6v1598734293.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Flour',
          measure: '4 cups',
          id: 1252,
        },
        {
          name: 'Water',
          measure: '1 1/2 cups',
          id: 1253,
        },
        {
          name: 'Salt',
          measure: '1/4 tsp',
          id: 1254,
        },
        {
          name: 'Unsalted Butter',
          measure: '1 cup',
          id: 1255,
        },
        {
          name: 'Olive Oil',
          measure: '1/4 cup',
          id: 1256,
        },
      ],
    },
    {
      id: 117,
      name: 'Fish fofos',
      category: 'Seafood',
      instructions:
        'STEP 1\r\n\r\nPut the fish into a lidded pan and pour over enough water to cover. Bring to a simmer and gently poach for 10 minutes over a low heat with the lid on. Drain and flake the fish.\r\n\r\nSTEP 2\r\n\r\nPut the fish, potato, green chilli, coriander, cumin, black pepper, garlic and ginger in a large bowl. Season, add the rice flour, mix well and break in 1 egg. Stir the mixture and divide into 15, then form into small logs. Break the remaining eggs into a bowl and whisk lightly. Put the breadcrumbs into another bowl. Dip each fofo in the beaten egg followed by the breadcrumb mixture. Chill for 20 minutes.\r\n\r\nSTEP 3\r\n\r\nHeat 1cm of oil in a large frying pan over a medium heat. Fry the fofos in batches for 2 minutes on each side, turning gently to get an even golden brown colour all over. Drain on kitchen paper and repeat with the remaining fofos.\r\n\r\nSTEP 4\r\n\r\nFor the onion salad, mix together the onion, coriander and lemon juice with a pinch of salt. Serve with the fofos and mango chutney.',
      image: 'a15wsa1614349126.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Haddock',
          measure: '600g',
          id: 1257,
        },
        {
          name: 'Potatoes',
          measure: '300g',
          id: 1258,
        },
        {
          name: 'Green Chilli',
          measure: '1 chopped',
          id: 1259,
        },
        {
          name: 'Coriander',
          measure: '3 tbs',
          id: 1260,
        },
        {
          name: 'Cumin Seeds',
          measure: '1 tsp',
          id: 1261,
        },
        {
          name: 'Pepper',
          measure: '1/2 tsp',
          id: 1262,
        },
        {
          name: 'Garlic',
          measure: '3 cloves',
          id: 1263,
        },
        {
          name: 'Ginger',
          measure: '2 pieces',
          id: 1264,
        },
        {
          name: 'Flour',
          measure: '2 tbs',
          id: 1265,
        },
        {
          name: 'Eggs',
          measure: '3',
          id: 1266,
        },
        {
          name: 'Breadcrumbs',
          measure: '75g',
          id: 1267,
        },
        {
          name: 'Vegetable Oil',
          measure: 'For frying',
          id: 1268,
        },
      ],
    },
    {
      id: 118,
      name: 'Fresh sardines',
      category: 'Side',
      instructions:
        'Wash the fish under the cold tap. Roll in the flour and deep fry in oil until crispy. Lay on kitchen towel to get rid of the excess oil and serve hot or cold with a slice of lemon.',
      image: 'nv5lf31628771380.jpg',
      tags: 'Fresh',
      ingredients: [
        {
          name: 'Sardines',
          measure: '500g',
          id: 1269,
        },
        {
          name: 'Vegetable Oil',
          measure: 'Dash',
          id: 1270,
        },
        {
          name: 'Flour',
          measure: 'To Glaze',
          id: 1271,
        },
        {
          name: 'Salt',
          measure: 'Dash',
          id: 1272,
        },
      ],
    },
    {
      id: 119,
      name: 'Fettuccine Alfredo',
      category: 'Pasta',
      instructions:
        "Cook pasta according to package instructions in a large pot of boiling water and salt. Add heavy cream and butter to a large skillet over medium heat until the cream bubbles and the butter melts. Whisk in parmesan and add seasoning (salt and black pepper). Let the sauce thicken slightly and then add the pasta and toss until coated in sauce. Garnish with parsley, and it's ready.",
      image: '0jv5gx1661040802.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Fettuccine',
          measure: '1 lb',
          id: 1273,
        },
        {
          name: 'Heavy Cream',
          measure: '1/2 cup',
          id: 1274,
        },
        {
          name: 'Butter',
          measure: '1/2 cup',
          id: 1275,
        },
        {
          name: 'Parmesan',
          measure: '1/2 cup',
          id: 1276,
        },
        {
          name: 'Parsley',
          measure: '2 tbsp',
          id: 1277,
        },
        {
          name: 'Black Pepper',
          measure: '',
          id: 1278,
        },
      ],
    },
    {
      id: 120,
      name: 'Fish Soup (Ukha)',
      category: 'Seafood',
      instructions:
        'In a medium pot, heat the olive oil over medium-high heat. Add the onions and cook, stirring occasionally until the onions start to caramelize. Add the carrots and cook until the carrots start to soften, about 4 more minutes.\r\nAdd the stock, water, potatoes, bay leaves, and black peppercorns. Season with salt and bring to a boil. Reduce heat, cover and cook for 10 minutes. Add the millet and cook for 15 more minutes until millet and potatoes are cooked.\r\nGently add the fish cubes. Stir and bring the soup to a simmer. The fish will cook through very fast, so make sure to not overcook them. They are done when the flesh is opaque and flakes easily.\r\nGarnish the soup with chopped fresh dill or parsley before serving.',
      image: '7n8su21699013057.jpg',
      tags: 'soup',
      ingredients: [
        {
          name: 'Olive Oil',
          measure: '2 tbs',
          id: 1279,
        },
        {
          name: 'Onion',
          measure: '1 sliced',
          id: 1280,
        },
        {
          name: 'Carrots',
          measure: '2 medium',
          id: 1281,
        },
        {
          name: 'Fish Stock',
          measure: '3 cups',
          id: 1282,
        },
        {
          name: 'Water',
          measure: '3 cups',
          id: 1283,
        },
        {
          name: 'Potatoes',
          measure: '4 large',
          id: 1284,
        },
        {
          name: 'Bay Leaf',
          measure: '3',
          id: 1285,
        },
        {
          name: 'Cod',
          measure: '1',
          id: 1286,
        },
        {
          name: 'Salmon',
          measure: '1',
          id: 1287,
        },
      ],
    },
    {
      id: 121,
      name: 'Garides Saganaki',
      category: 'Seafood',
      instructions:
        'Place the prawns in a pot and add enough water to cover. Boil for 5 minutes. Drain, reserving the liquid, and set aside.\r\nHeat 2 tablespoons of oil in a saucepan. Add the onion; cook and stir until soft. Mix in the parsley, wine, tomatoes, garlic and remaining olive oil. Simmer, stirring occasionally, for about 30 minutes, or until the sauce is thickened.\r\nWhile the sauce is simmering, the prawns should become cool enough to handle. First remove the legs by pinching them, and then pull off the shells, leaving the head and tail on.\r\nWhen the sauce has thickened, stir in the prawns. Bring to a simmer again if the sauce has cooled with the prawns, and cook for about 5 minutes. Add the feta and remove from the heat. Let stand until the cheese starts to melt. Serve warm with slices of crusty bread.\r\nThough completely untraditional, you can add a few tablespoons of stock or passata to this recipe to make a delicious pasta sauce. Toss with pasta after adding the feta, and serve.',
      image: 'wuvryu1468232995.jpg',
      tags: 'Seafood,Shellfish',
      ingredients: [
        {
          name: 'Raw king prawns',
          measure: '500g',
          id: 1288,
        },
        {
          name: 'Olive oil',
          measure: '3 tablespoons',
          id: 1289,
        },
        {
          name: 'Chopped onion',
          measure: '1',
          id: 1290,
        },
        {
          name: 'Freshly chopped parsley',
          measure: 'pinch',
          id: 1291,
        },
        {
          name: 'White wine',
          measure: '250ml',
          id: 1292,
        },
        {
          name: 'Chopped tomatoes',
          measure: '1 (400g) tin',
          id: 1293,
        },
        {
          name: 'Minced garlic',
          measure: '1/2 teaspoon',
          id: 1294,
        },
        {
          name: 'Cubed Feta cheese',
          measure: '1 (200g) pack',
          id: 1295,
        },
      ],
    },
    {
      id: 122,
      name: 'Grilled Mac and Cheese Sandwich',
      category: 'Pasta',
      instructions:
        'Make the mac and cheese\r\n\r\n1. Bring a medium saucepan of generously salted water (you want it to taste like seawater) to a boil. Add the pasta and cook, stirring occasionally, until al dente, 8 to 10 minutes, or according to the package directions. The pasta should be tender but still chewy.\r\n2. While the pasta is cooking, in a small bowl, whisk together the flour, mustard powder, garlic powder, salt, black pepper, and cayenne pepper.\r\n3. Drain the pasta in a colander. Place the empty pasta pan (no need to wash it) over low heat and add the butter. When the butter has melted, whisk in the flour mixture and continue to cook, whisking frequently, until the mixture is beginning to brown and has a pleasant, nutty aroma, about 1 minute. Watch carefully so it does not scorch on the bottom of the pan.\r\n4. Slowly whisk the milk and cream into the flour mixture until everything is really well combined. Cook, whisking constantly, until the sauce is heated through and just begins to thicken, about 2 minutes. Remove from the heat. Gradually add the cheese while stirring constantly with a wooden spoon or silicone spatula and keep stirring until the cheese has melted into the sauce. Then stir in the drained cooked pasta.\r\n5. Line a 9-by-13-inch (23-by-33-centimeter) rimmed baking sheet with parchment paper or aluminum foil. Coat the paper or foil with nonstick cooking spray or slick it with butter. Pour the warm mac and cheese onto the prepared baking sheet and spread it evenly with a spatula. Coat another piece of parchment paper with cooking spray or butter and place it, oiled or buttered side down, directly on the surface of the mac and cheese. Refrigerate until cool and firm, about 1 hour.\r\n\r\nMake the grilled cheese\r\n6. Heat a large cast-iron or nonstick skillet over medium-low heat.\r\n7. In a small bowl, stir together the 4 tablespoons (55 grams) butter and garlic powder until well blended.\r\n8. Remove the mac and cheese from the refrigerator and peel off the top layer of parchment paper. Carefully cut into 8 equal pieces. Each piece will make 1 grilled mac and cheese sandwich. (You can stash each individual portion in a double layer of resealable plastic bags and refrigerate for up to 3 days or freeze it for up to 1 month.)\r\n9. Spread 3/4 teaspoon garlic butter on one side of each bread slice. Place half of the slices, buttered-side down, on a clean cutting board. Top each with one slice of Cheddar, then 1 piece of the mac and cheese. (Transfer from the baking sheet by scooting your hand or a spatula under each piece of mac and cheese and then flipping it over onto a sandwich.) Place 1 slice of Jack on top of each. Finish with the remaining bread slices, buttered-side up.\r\n10. Using a wide spatula, place as many sandwiches in the pan as will fit without crowding it. Cover and cook until the bottoms are nicely browned, about 4 minutes. Turn and cook until the second sides are browned, the cheese is melted, and the mac and cheese is heated through, about 4 minutes more.\r\n11. Repeat with the remaining ingredients. Cut the sandwiches in half, if desired, and serve.',
      image: 'xutquv1505330523.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Macaroni',
          measure: '8 ounces (230 grams)',
          id: 1296,
        },
        {
          name: 'Plain Flour',
          measure: '1/3 cup',
          id: 1297,
        },
        {
          name: 'Mustard Powder',
          measure: '3/4 teaspoon',
          id: 1298,
        },
        {
          name: 'Garlic powder',
          measure: '1/2 teaspoon',
          id: 1299,
        },
        {
          name: 'Kosher salt',
          measure: '1/2 teaspoon',
          id: 1300,
        },
        {
          name: 'Black pepper',
          measure: '1/2 teaspoon',
          id: 1301,
        },
        {
          name: 'Cayenne pepper',
          measure: '1/8 teaspoon',
          id: 1302,
        },
        {
          name: 'Butter',
          measure: '6 tablespoons (85 grams)',
          id: 1303,
        },
        {
          name: 'Whole Milk',
          measure: '1 1/2 cups (360 milliliters)',
          id: 1304,
        },
        {
          name: 'Heavy Cream',
          measure: '1 cup (240 milliliters)',
          id: 1305,
        },
        {
          name: 'Monterey Jack Cheese',
          measure: '1 pound (455 grams)',
          id: 1306,
        },
        {
          name: 'Butter',
          measure: '4 tablespoons (55 grams)',
          id: 1307,
        },
        {
          name: 'garlic powder',
          measure: '1 teaspoon',
          id: 1308,
        },
        {
          name: 'Bread',
          measure: '16 slices square',
          id: 1309,
        },
        {
          name: 'Cheddar Cheese',
          measure: '8 slices mild',
          id: 1310,
        },
        {
          name: 'Colby Jack Cheese',
          measure: '8 slices',
          id: 1311,
        },
        {
          name: 'Butter',
          measure: '4 tablespoons (55 grams)',
          id: 1312,
        },
      ],
    },
    {
      id: 123,
      name: "General Tso's Chicken",
      category: 'Chicken',
      instructions:
        "DIRECTIONS:\r\nSTEP 1 - SAUCE\r\nIn a bowl, add 2 Cups of water, 2 Tablespoon soy sauce, 2 Tablespoon white vinegar, sherry cooking wine, 1/4 Teaspoon white pepper, minced ginger, minced garlic, hot pepper, ketchup, hoisin sauce, and sugar.\r\nMix together well and set aside.\r\nSTEP 2 - MARINATING THE CHICKEN\r\nIn a bowl, add the chicken, 1 pinch of salt, 1 pinch of white pepper, 2 egg whites, and 3 Tablespoon of corn starch\r\nSTEP 3 - DEEP FRY THE CHICKEN\r\nDeep fry the chicken at 350 degrees for 3-4 minutes or until it is golden brown and loosen up the chicken so that they don't stick together.\r\nSet the chicken aside.\r\nSTEP 4 - STIR FRY\r\nAdd the sauce to the wok and then the broccoli and wait until it is boiling.\r\nTo thicken the sauce, whisk together 2 Tablespoon of cornstarch and 4 Tablespoon of water in a bowl and slowly add to your stir-fry until it's the right thickness.\r\nNext add in the chicken and stir-fry for a minute and serve on a plate",
      image: '1529444113.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Chicken Breast',
          measure: '1 1/2',
          id: 1313,
        },
        {
          name: 'Plain Flour',
          measure: '3/4 cup',
          id: 1314,
        },
        {
          name: 'Egg',
          measure: '1',
          id: 1315,
        },
        {
          name: 'Starch',
          measure: '2 tbs',
          id: 1316,
        },
        {
          name: 'Baking Powder',
          measure: '1 tbs',
          id: 1317,
        },
        {
          name: 'Salt',
          measure: '1 tsp',
          id: 1318,
        },
        {
          name: 'Onion Salt',
          measure: '1/2 tsp',
          id: 1319,
        },
        {
          name: 'Garlic Powder',
          measure: '1/4 tsp',
          id: 1320,
        },
        {
          name: 'Water',
          measure: '3/4 cup',
          id: 1321,
        },
        {
          name: 'Chicken Stock',
          measure: '1/2 cup',
          id: 1322,
        },
        {
          name: 'Duck Sauce',
          measure: '1/4 cup',
          id: 1323,
        },
        {
          name: 'Soy Sauce',
          measure: '3 tbs',
          id: 1324,
        },
        {
          name: 'Honey',
          measure: '2 tbs',
          id: 1325,
        },
        {
          name: 'Rice Vinegar',
          measure: '1 tbs',
          id: 1326,
        },
        {
          name: 'Sesame Seed Oil',
          measure: '2 tbs',
          id: 1327,
        },
        {
          name: 'Gochujang',
          measure: '1/2 tbs',
          id: 1328,
        },
        {
          name: 'Starch',
          measure: '2 tbs',
          id: 1329,
        },
        {
          name: 'Garlic',
          measure: '1 clove',
          id: 1330,
        },
        {
          name: 'Spring Onions',
          measure: '2 chopped',
          id: 1331,
        },
        {
          name: 'Ginger',
          measure: '1 tsp',
          id: 1332,
        },
      ],
    },
    {
      id: 124,
      name: 'Gigantes Plaki',
      category: 'Vegetarian',
      instructions:
        'Soak the beans overnight in plenty of water. Drain, rinse, then place in a pan covered with water. Bring to the boil, reduce the heat, then simmer for approx 50 mins until slightly tender but not soft. Drain, then set aside.\r\n\r\nHeat oven to 180C/160C fan/gas 4. Heat the olive oil in a large frying pan, tip in the onion and garlic, then cook over a medium heat for 10 mins until softened but not browned. Add the tomato purée, cook for a further min, add remaining ingredients, then simmer for 2-3 mins. Season generously, then stir in the beans. Tip into a large ovenproof dish, then bake for approximately 1 hr, uncovered and without stirring, until the beans are tender. The beans will absorb all the fabulous flavours and the sauce will thicken. Allow to cool, then scatter with parsley and drizzle with a little more olive oil to serve.',
      image: 'b79r6f1585566277.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Butter Beans',
          measure: '400g',
          id: 1333,
        },
        {
          name: 'Olive Oil',
          measure: '3 tbs',
          id: 1334,
        },
        {
          name: 'Onion',
          measure: '1 chopped',
          id: 1335,
        },
        {
          name: 'Garlic Clove',
          measure: '2 chopped',
          id: 1336,
        },
        {
          name: 'Tomato Puree',
          measure: '2 tbs',
          id: 1337,
        },
        {
          name: 'Tomatoes',
          measure: '800g',
          id: 1338,
        },
        {
          name: 'Sugar',
          measure: '1 tbs',
          id: 1339,
        },
        {
          name: 'Dried Oregano',
          measure: '1 tbs',
          id: 1340,
        },
        {
          name: 'Cinnamon',
          measure: 'Pinch',
          id: 1341,
        },
        {
          name: 'Chopped Parsley',
          measure: '2 tbs',
          id: 1342,
        },
      ],
    },
    {
      id: 125,
      name: 'Gołąbki (cabbage roll)',
      category: 'Beef',
      instructions:
        'Bring a large pot of lightly salted water to a boil. Place cabbage head into water, cover pot, and cook until cabbage leaves are slightly softened enough to remove from head, 3 minutes. Remove cabbage from pot and let cabbage sit until leaves are cool enough to handle, about 10 minutes.\r\n\r\nRemove 18 whole leaves from the cabbage head, cutting out any thick tough center ribs. Set whole leaves aside. Chop the remainder of the cabbage head and spread it in the bottom of a casserole dish.\r\n\r\nMelt butter in a large skillet over medium-high heat. Cook and stir onion in hot butter until tender, 5 to 10 minutes. Cool.\r\n\r\nStir onion, beef, pork, rice, garlic, 1 teaspoon salt, and 1/4 teaspoon pepper together in a large bowl.\r\n\r\nPreheat oven to 350 degrees F (175 degrees C).\r\n\r\nPlace about 1/2 cup beef mixture on a cabbage leaf. Roll cabbage around beef mixture, tucking in sides to create an envelope around the meat. Repeat with remaining leaves and meat mixture. Place cabbage rolls in a layer atop the chopped cabbage in the casserole dish; season rolls with salt and black pepper.\r\n\r\nWhisk tomato soup, tomato juice, and ketchup together in a bowl. Pour tomato soup mixture over cabbage rolls and cover dish wish aluminum foil.\r\n\r\nBake in the preheated oven until cabbage is tender and meat is cooked through, about 1 hour.',
      image: 'q8sp3j1593349686.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Cabbage',
          measure: '1',
          id: 1343,
        },
        {
          name: 'Butter',
          measure: '2 tbs',
          id: 1344,
        },
        {
          name: 'Onion',
          measure: '1 chopped',
          id: 1345,
        },
        {
          name: 'Ground Beef',
          measure: '1 lb',
          id: 1346,
        },
        {
          name: 'Ground Pork',
          measure: '1/2 lb',
          id: 1347,
        },
        {
          name: 'Rice',
          measure: '1 1/2 cups',
          id: 1348,
        },
        {
          name: 'Garlic',
          measure: '1 tsp',
          id: 1349,
        },
        {
          name: 'Salt',
          measure: '1 tsp',
          id: 1350,
        },
        {
          name: 'Black Pepper',
          measure: '1/4 tsp',
          id: 1351,
        },
        {
          name: 'Tomato Puree',
          measure: '3 cans',
          id: 1352,
        },
      ],
    },
    {
      id: 126,
      name: 'Grilled Portuguese sardines',
      category: 'Seafood',
      instructions:
        'STEP 1\r\n\r\nPut all of the ingredients, except the sardines, into a bowl and mix together with some seasoning. Pour into a baking dish, add the sardines and toss really well. Cover and chill for a few hours.\r\n\r\nSTEP 2\r\n\r\nHeat a BBQ or griddle pan until hot. Cook the sardines for 4-5 minutes on each side or until really caramelised and charred. Put onto a serving plate, drizzle with oil, sprinkle with a little more paprika and squeeze over the lemon wedges.',
      image: 'lpd4wy1614347943.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Sardines',
          measure: '8',
          id: 1353,
        },
        {
          name: 'Olive Oil',
          measure: '2 tbs',
          id: 1354,
        },
        {
          name: 'Garlic',
          measure: '3 cloves',
          id: 1355,
        },
        {
          name: 'Paprika',
          measure: '1 tbs',
          id: 1356,
        },
        {
          name: 'Lemon',
          measure: '1/2',
          id: 1357,
        },
        {
          name: 'Rosemary',
          measure: '4 sprigs',
          id: 1358,
        },
        {
          name: 'Red Chilli',
          measure: '1',
          id: 1359,
        },
      ],
    },
    {
      id: 127,
      name: 'Grilled eggplant with coconut milk',
      category: 'Vegetarian',
      instructions:
        '.  Prepare the eggplants for grilling by pricking them all over with a fork.  This is so it won’t burst during the grilling process as the natural water in it heats up.\r\n2.  Grill the eggplants, turning them over frequently to ensure even cooking.  Grill until the skins are dark brown, even black and the eggplant is soft when you touch it.\r\n3.  Soak the grilled eggplant in a bowl of water to cool it down.  Peel the skin off the eggplant.  Place the whole eggplants in a shallow dish (my mom actually cuts the eggplant into small, bite-sized pieces).\r\n 4.  In a small mixing bowl, mix together the coconut milk or cream, lemon powder, salt and hot pepper.  Mix until the lemon powder and salt dissolve.  Taste, then adjust the amount of lemon powder, salt and hot pepper to your liking.  Pour the mixture over the eggplant.  Sprinkle the green onions over the eggplant and coconut milk.  Stir gently to combine. \r\n',
      image: 'bopa2i1683209167.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Egg Plants',
          measure: '6',
          id: 1360,
        },
        {
          name: 'Coconut Milk',
          measure: '1 can',
          id: 1361,
        },
        {
          name: 'Lemon Juice',
          measure: '1 tbs',
          id: 1362,
        },
        {
          name: 'Salt',
          measure: '1 tsp',
          id: 1363,
        },
        {
          name: 'Red Pepper Flakes',
          measure: 'To taste',
          id: 1364,
        },
        {
          name: 'Onions',
          measure: '4 Sticks',
          id: 1365,
        },
      ],
    },
    {
      id: 128,
      name: 'Honey Teriyaki Salmon',
      category: 'Seafood',
      instructions:
        'Mix all the ingredients in the Honey Teriyaki Glaze together. Whisk to blend well. Combine the salmon and the Glaze together.\r\n\r\nHeat up a skillet on medium-low heat. Add the oil, Pan-fry the salmon on both sides until it’s completely cooked inside and the glaze thickens.\r\n\r\nGarnish with sesame and serve immediately.',
      image: 'xxyupu1468262513.jpg',
      tags: 'Fish,Breakfast,DateNight',
      ingredients: [
        {
          name: 'Salmon',
          measure: '1 lb',
          id: 1366,
        },
        {
          name: 'Olive oil',
          measure: '1 tablespoon',
          id: 1367,
        },
        {
          name: 'Soy Sauce',
          measure: '2 tablespoons',
          id: 1368,
        },
        {
          name: 'Sake',
          measure: '2 tablespoons',
          id: 1369,
        },
        {
          name: 'Sesame Seed',
          measure: '4 tablespoons',
          id: 1370,
        },
      ],
    },
    {
      id: 129,
      name: 'Hot Chocolate Fudge',
      category: 'Dessert',
      instructions:
        'Line an 8-inch-square baking pan with wax paper or foil, and coat with non-stick spray.\r\nIn a microwave-safe bowl, combine the dark chocolate chips, heavy cream and half of the sweetened condensed milk. Microwave the dark chocolate mixture in 20-second intervals, stirring in between each interval, until the chocolate is melted.\r\nAdd the vanilla extract to the dark chocolate mixture and stir well until smooth.\r\nTransfer the dark chocolate mixture into the prepared pan and spread into an even layer.\r\nIn a separate bowl, combine the white chocolate chips with the remaining half of the sweetened condensed milk. Microwave the white chocolate mixture in 20-second intervals, stirring in between each interval, until the chocolate is melted.\r\nEvenly spread the white chocolate mixture on top of dark chocolate layer.\r\nTop the chocolate layers with the Mallow Bits or miniature marshmallows, and gently press them down.\r\nRefrigerate for 4 hours, or until set.\r\nRemove the fudge and wax paper from the pan. Carefully peel all of the wax paper from the fudge.\r\nCut the fudge into bite-sized pieces and serve.',
      image: 'xrysxr1483568462.jpg',
      tags: 'Snack,Chocolate',
      ingredients: [
        {
          name: 'Chocolate Chips',
          measure: '2 cups',
          id: 1371,
        },
        {
          name: 'Heavy Cream',
          measure: '2 tbs',
          id: 1372,
        },
        {
          name: 'Condensed Milk',
          measure: '1 – 14-ounce can',
          id: 1373,
        },
        {
          name: 'Vanilla Extract',
          measure: '1 tsp',
          id: 1374,
        },
        {
          name: 'White Chocolate Chips',
          measure: '1-⅓ cups',
          id: 1375,
        },
        {
          name: 'Miniature Marshmallows',
          measure: '1-½ cups',
          id: 1376,
        },
      ],
    },
    {
      id: 130,
      name: 'Hot and Sour Soup',
      category: 'Pork',
      instructions:
        "STEP 1 - MAKING THE SOUP\r\nIn a wok add chicken broth and wait for it to boil.\r\nNext add salt, sugar, sesame seed oil, white pepper, hot pepper sauce, vinegar and soy sauce and stir for few seconds.\r\nAdd Tofu, mushrooms, black wood ear mushrooms to the wok.\r\nTo thicken the sauce, whisk together 1 Tablespoon of cornstarch and 2 Tablespoon of water in a bowl and slowly add to your soup until it's the right thickness.\r\nNext add 1 egg slightly beaten with a knife or fork and add it to the soup and stir for 8 seconds\r\nServe the soup in a bowl and add the bbq pork and sliced green onions on top.",
      image: '1529445893.jpg',
      tags: 'Soup',
      ingredients: [
        {
          name: 'Mushrooms',
          measure: '1/3 cup',
          id: 1377,
        },
        {
          name: 'Wood Ear Mushrooms',
          measure: '1/3 cup',
          id: 1378,
        },
        {
          name: 'Tofu',
          measure: '2/3 Cup',
          id: 1379,
        },
        {
          name: 'Pork',
          measure: '1/2 cup',
          id: 1380,
        },
        {
          name: 'Chicken Stock',
          measure: '2-1/2 cups',
          id: 1381,
        },
        {
          name: 'Salt',
          measure: '1/2 tsp',
          id: 1382,
        },
        {
          name: 'Sugar',
          measure: '1/4 tsp',
          id: 1383,
        },
        {
          name: 'Sesame Seed Oil',
          measure: '1 tsp',
          id: 1384,
        },
        {
          name: 'Pepper',
          measure: '1/4 tsp',
          id: 1385,
        },
        {
          name: 'Hotsauce',
          measure: '1/2 tsp',
          id: 1386,
        },
        {
          name: 'Vinegar',
          measure: '1-½ cups',
          id: 1387,
        },
        {
          name: 'Soy Sauce',
          measure: '1 tsp',
          id: 1388,
        },
        {
          name: 'Cornstarch',
          measure: '1 tbs',
          id: 1389,
        },
        {
          name: 'Water',
          measure: '2 tbs',
          id: 1390,
        },
        {
          name: 'Spring Onions',
          measure: '1/4 cup',
          id: 1391,
        },
      ],
    },
    {
      id: 131,
      name: 'Home-made Mandazi',
      category: 'Breakfast',
      instructions:
        'This is one recipe a lot of people have requested and I have tried to make it as simple as possible and I hope it will work for you. Make sure you use the right flour which is basically one with raising agents. Adjust the amount of sugar to your taste and try using different flavours to have variety whenever you have them.\r\nYou can use Coconut milk instead of regular milk, you can also add desiccated coconut to the dry flour or other spices like powdered cloves or cinnamon.\r\nFor “healthy looking” mandazis do not roll the dough too thin before frying and use the procedure I have indicated above.\r\n\r\n1. Mix the flour,cinnamon and sugar in a suitable bowl.\r\n2. In a separate bowl whisk the egg into the milk\r\n3. Make a well at the centre of the flour and add the milk and egg mixture and slowly mix to form a dough.\r\n4. Knead the dough for 3-4 minutes or until it stops sticking to the sides of the bowl and you have a smooth surface.\r\n5. Cover the dough with a damp cloth  and allow to rest for 15 minutes.\r\n6. Roll the dough on a lightly floured surface into a 1cm thick piece.\r\n7. Using a sharp small knife, cut the dough into the desired size setting aside ready for deep frying.\r\n8. Heat your oil in a suitable pot and gently dip the mandazi pieces to cook until light brown on the first side then turn to cook on the second side.\r\n9. Serve them warm or cold',
      image: 'thazgm1555350962.jpg',
      tags: 'Baking,Breakfast,Egg,Warm,Snack',
      ingredients: [
        {
          name: 'Self-raising Flour',
          measure: '750g',
          id: 1392,
        },
        {
          name: 'Sugar',
          measure: '6 tablespoons',
          id: 1393,
        },
        {
          name: 'Eggs',
          measure: '2',
          id: 1394,
        },
        {
          name: 'Milk',
          measure: '1 cup',
          id: 1395,
        },
      ],
    },
    {
      id: 132,
      name: 'Honey Balsamic Chicken with Crispy Broccoli & Potatoes',
      category: 'Chicken',
      instructions:
        "2 Servings\r\n\r\n1. Preheat oven to 425 degrees. Wash and dry all produce. Cut potatoes into 1/2-inch-thick wedges. Toss on one side of a baking sheet with a drizzle of oil, salt, and pepper. (For 4 servings, spread potatoes out across entire sheet.) Roast on top rack for 5 minutes (we'll add the broccoli then). \r\n\r\n2. Meanwhile, cut broccoli florets into bite-size pieces, if necessary. Peel and finely chop garlic. In a small microwave-safe bowl, combine 1 TBSP olive oil (2 TBSP for 4 servings) and half the garlic. Microwave until garlic sizzles, 30 seconds. \r\n\r\n3. Once potatoes have roasted 5 minutes, remove sheet from oven and add broccoli to empty side; carefully toss with garlic oil, salt, and pepper. (For 4 servings, add broccoli to a second sheet.) Continue roasting until potatoes and broccoli are browned and crispy, 15-20 minutes more. \r\n\r\n4. While veggies roast, pat chicken dry with paper towels; season all over with salt and pepper. Heat a drizzle of oil in a large pan over medium-high heat. Add chicken and cook until browned and cooked through, 5-6 minutes per side. (If chicken browns too quickly, reduce heat to medium.) Turn off heat; set chicken aside to rest. Wash out pan. \r\n\r\n5. Heat pan used for chicken over medium-high heat. Add a drizzle of oil and remaining garlic; cook until fragrant, 30 seconds. Stir in vinegar, honey, stock concentrate, and 1/4 cup water (1/3 cup for 4 servings). Simmer until thick and glossy, 2-3 minutes. Remove from heat and stir in 1 TBSP butter (2 TBSP for 4). Season with salt and pepper. \r\n\r\n6. Return chicken to pan and turn to coat in glaze. Divide chicken, broccoli, and potatoes between plates. Spoon any remaining glaze over chicken and serve. ",
      image: 'kvbotn1581012881.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Potatoes',
          measure: '5',
          id: 1396,
        },
        {
          name: 'Broccoli',
          measure: '1',
          id: 1397,
        },
        {
          name: 'Garlic',
          measure: '2 cloves',
          id: 1398,
        },
        {
          name: 'Chicken Breast',
          measure: '2',
          id: 1399,
        },
        {
          name: 'Balsamic Vinegar',
          measure: '',
          id: 1400,
        },
        {
          name: 'Honey',
          measure: '',
          id: 1401,
        },
        {
          name: 'Chicken Stock',
          measure: '',
          id: 1402,
        },
        {
          name: 'Butter',
          measure: '1 tbsp',
          id: 1403,
        },
        {
          name: 'Vegetable Oil',
          measure: '1 tbsp',
          id: 1404,
        },
        {
          name: 'Olive Oil',
          measure: '1 tbsp',
          id: 1405,
        },
      ],
    },
    {
      id: 133,
      name: 'Honey Yogurt Cheesecake',
      category: 'Dessert',
      instructions:
        'Heat oven to 160C/140C fan/gas 3. Crush the biscuits and most of the almonds inside a plastic food bag using a rolling pin. Mix with the butter, then press into the bottom of a deep, oval, 23cm dish (or something similar in size – a roasting tin, baking dish or cake tin will work). Bake for 10 mins until crisp.\r\n\r\nStir or mash together the yogurt and mascarpone, then whisk in the eggs, one at a time. Stir in the lemon and orange zests, then stir in most of the honey, reserving about 3 tbsp. Spread over the biscuit base, cover loosely with foil and cook for 1 hr. Remove the foil and cook for 15 mins more until lightly golden and the top is firm with just the slightest wobble in the middle. Leave to cool. Can be kept in the fridge for up to 2 days.\r\n\r\nTo serve, scatter with almonds, drizzle over the remaining honey, and hand around fresh fruit to go with it.',
      image: 'y2irzl1585563479.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Digestive Biscuits',
          measure: '100g',
          id: 1406,
        },
        {
          name: 'Almonds',
          measure: '85g',
          id: 1407,
        },
        {
          name: 'Butter',
          measure: '85g',
          id: 1408,
        },
        {
          name: 'Greek Yogurt',
          measure: '250ml',
          id: 1409,
        },
        {
          name: 'Mascarpone',
          measure: '750g',
          id: 1410,
        },
        {
          name: 'Eggs',
          measure: '2',
          id: 1411,
        },
        {
          name: 'Lemon',
          measure: 'Zest of 1',
          id: 1412,
        },
        {
          name: 'Orange',
          measure: 'Zest of 1',
          id: 1413,
        },
        {
          name: 'Honey',
          measure: '250ml',
          id: 1414,
        },
        {
          name: 'Fruit Mix',
          measure: 'To serve',
          id: 1415,
        },
      ],
    },
    {
      id: 134,
      name: 'Ham hock colcannon',
      category: 'Pork',
      instructions:
        'STEP 1\r\nPeel and cut the potatoes into even, medium-sized chunks. Put in a large pan filled with cold salted water, bring to the boil and cook for 10-15 mins until a knife can be inserted into the potatoes easily.\r\n\r\nSTEP 2\r\nMeanwhile, melt the butter in a large sauté pan over a medium heat. Add the garlic, cabbage, spring onions and some seasoning. Stir occasionally until the cabbage is wilted but still retains a little bite, then set aside.\r\n\r\nSTEP 3\r\nDrain the potatoes, leave to steam-dry for a couple of mins, then mash with the cream, mustard and seasoning in the same saucepan. Stir in the cabbage and ham hock. Keep warm over a low heat.\r\n\r\nSTEP 4\r\nReheat the pan you used to cook the cabbage (no need to wash first), add a splash of oil, crack in the eggs and fry to your liking. To serve, divide the colcannon between bowls and top each with a fried egg.',
      image: 'n41ny81608588066.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Floury Potatoes',
          measure: '800g',
          id: 1416,
        },
        {
          name: 'Butter',
          measure: '50g',
          id: 1417,
        },
        {
          name: 'Garlic Clove',
          measure: '3 chopped',
          id: 1418,
        },
        {
          name: 'Cabbage',
          measure: '1 chopped',
          id: 1419,
        },
        {
          name: 'Spring Onions',
          measure: '8',
          id: 1420,
        },
        {
          name: 'Double Cream',
          measure: '100ml',
          id: 1421,
        },
        {
          name: 'Mustard',
          measure: '2 tbs',
          id: 1422,
        },
        {
          name: 'Ham',
          measure: '180g',
          id: 1423,
        },
        {
          name: 'Eggs',
          measure: '4',
          id: 1424,
        },
      ],
    },
    {
      id: 135,
      name: 'Irish stew',
      category: 'Beef',
      instructions:
        "Heat the oven to 180C/350F/gas mark 4. Drain and rinse the soaked wheat, put it in a medium pan with lots of water, bring to a boil and simmer for an hour, until cooked. Drain and set aside.\r\n\r\nSeason the lamb with a teaspoon of salt and some black pepper. Put one tablespoon of oil in a large, deep sauté pan for which you have a lid; place on a medium-high heat. Add some of the lamb – don't overcrowd the pan – and sear for four minutes on all sides. Transfer to a bowl, and repeat with the remaining lamb, adding oil as needed.\r\n\r\nLower the heat to medium and add a tablespoon of oil to the pan. Add the shallots and fry for four minutes, until caramelised. Tip these into the lamb bowl, and repeat with the remaining vegetables until they are all nice and brown, adding more oil as you need it.\r\n\r\nOnce all the vegetables are seared and removed from the pan, add the wine along with the sugar, herbs, a teaspoon of salt and a good grind of black pepper. Boil on a high heat for about three minutes.\r\n\r\nTip the lamb, vegetables and whole wheat back into the pot, and add the stock. Cover and boil for five minutes, then transfer to the oven for an hour and a half.\r\n\r\nRemove the stew from the oven and check the liquid; if there is a lot, remove the lid and boil for a few minutes.",
      image: 'sxxpst1468569714.jpg',
      tags: 'Stew,Meat',
      ingredients: [
        {
          name: 'whole wheat',
          measure: '300g soaked overnight in water',
          id: 1425,
        },
        {
          name: 'lamb loin chops',
          measure: '2kg cut into 3cm cubes',
          id: 1426,
        },
        {
          name: 'olive oil',
          measure: '120ml',
          id: 1427,
        },
        {
          name: 'shallots',
          measure: '24 Skinned',
          id: 1428,
        },
        {
          name: 'carrots',
          measure: '4 large',
          id: 1429,
        },
        {
          name: 'turnips',
          measure: '2',
          id: 1430,
        },
        {
          name: 'celeriac',
          measure: '1',
          id: 1431,
        },
        {
          name: 'charlotte potatoes',
          measure: '350g',
          id: 1432,
        },
        {
          name: 'white wine',
          measure: '150ml',
          id: 1433,
        },
        {
          name: 'caster sugar',
          measure: '1 tsp',
          id: 1434,
        },
        {
          name: 'fresh thyme',
          measure: '4 sprigs',
          id: 1435,
        },
        {
          name: 'oregano',
          measure: '4 sprigs',
          id: 1436,
        },
        {
          name: 'chicken stock',
          measure: '450ml',
          id: 1437,
        },
      ],
    },
    {
      id: 136,
      name: 'Jam Roly-Poly',
      category: 'Dessert',
      instructions:
        'Put a deep roasting tin onto the bottom shelf of the oven, and make sure that there’s another shelf directly above it. Pull the roasting tin out on its shelf, fill two-thirds with boiling water from the kettle, then carefully slide it back in. Heat oven to 180C/160C fan/gas 4. Tear off a large sheet of foil and greaseproof paper (about 30 x 40cm). Sit the greaseproof on top of the foil and butter it.\r\nTip butter, flour and vanilla seeds into a food processor; pulse until the butter has disappeared. Tip into a mixing bowl. Stir through the suet, pour in the milk and work together with a cutlery knife until you get a sticky dough. You may need a drop more milk, depending on your flour.\r\nTip the dough out onto a floured surface, quickly pat together to smooth, then roll out to a square roughly 25 x 25cm. Spread the jam all over, leaving a gap along one edge, then roll up from the opposite edge. Pinch the jam-free edge into the dough where it meets, and pinch the ends roughly, too. Carefully lift onto the greased paper, join-side down (you might find a flat baking sheet helpful for this), loosely bring up the paper and foil around it, then scrunch together along the edges and ends to seal. The roly-poly will puff quite a bit during cooking so don’t wrap it tightly. Lift the parcel directly onto the rack above the tin and cook for 1 hr.\r\nLet the pudding sit for 5 mins before unwrapping, then carefully open the foil and paper, and thickly slice to serve.',
      image: 'ysqupp1511640538.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Butter',
          measure: '50g',
          id: 1438,
        },
        {
          name: 'Self-raising Flour',
          measure: '250g',
          id: 1439,
        },
        {
          name: 'Vanilla',
          measure: '1 small',
          id: 1440,
        },
        {
          name: 'Suet',
          measure: '50g',
          id: 1441,
        },
        {
          name: 'Milk',
          measure: '150ml',
          id: 1442,
        },
        {
          name: 'Raspberry Jam',
          measure: '100g',
          id: 1443,
        },
        {
          name: 'Custard',
          measure: 'to serve',
          id: 1444,
        },
      ],
    },
    {
      id: 137,
      name: 'Jerk chicken with rice & peas',
      category: 'Chicken',
      instructions:
        'To make the jerk marinade, combine all the ingredients in a food processor along with 1 tsp salt, and blend to a purée. If you’re having trouble getting it to blend, just keep turning off the blender, stirring the mixture, and trying again. Eventually it will start to blend up – don’t be tempted to add water, as you want a thick paste.\r\n\r\nTaste the jerk mixture for seasoning – it should taste pretty salty, but not unpleasantly, puckering salty. You can now throw in more chillies if it’s not spicy enough for you. If it tastes too salty and sour, try adding in a bit more brown sugar until the mixture tastes well balanced.\r\n\r\nMake a few slashes in the chicken thighs and pour the marinade over the meat, rubbing it into all the crevices. Cover and leave to marinate overnight in the fridge.\r\n\r\nIf you want to barbecue your chicken, get the coals burning 1 hr or so before you’re ready to cook. Authentic jerked meats are not exactly grilled as we think of grilling, but sort of smoke-grilled. To get a more authentic jerk experience, add some wood chips to your barbecue, and cook your chicken over slow, indirect heat for 30 mins. To cook in the oven, heat to 180C/160C fan/gas 4. Put the chicken pieces in a roasting tin with the lime halves and cook for 45 mins until tender and cooked through.\r\n\r\nWhile the chicken is cooking, prepare the rice & peas. Rinse the rice in plenty of cold water, then tip it into a large saucepan with all the remaining ingredients except the kidney beans. Season with salt, add 300ml cold water and set over a high heat. Once the rice begins to boil, turn it down to a medium heat, cover and cook for 10 mins.\r\n\r\nAdd the beans to the rice, then cover with a lid. Leave off the heat for 5 mins until all the liquid is absorbed. Squeeze the roasted lime over the chicken and serve with the rice & peas, and some hot sauce if you like it really spicy.',
      image: 'tytyxu1515363282.jpg',
      tags: 'Chilli,Curry',
      ingredients: [
        {
          name: 'Chicken Thighs',
          measure: '12',
          id: 1445,
        },
        {
          name: 'Lime',
          measure: '1/2',
          id: 1446,
        },
        {
          name: 'Spring Onions',
          measure: '1  bunch',
          id: 1447,
        },
        {
          name: 'Ginger',
          measure: '1 tbs chopped',
          id: 1448,
        },
        {
          name: 'Garlic',
          measure: '3 cloves',
          id: 1449,
        },
        {
          name: 'Onion',
          measure: '1/2',
          id: 1450,
        },
        {
          name: 'Red Chilli',
          measure: '3 chopped',
          id: 1451,
        },
        {
          name: 'Thyme',
          measure: '1/2 teaspoon',
          id: 1452,
        },
        {
          name: 'Lime',
          measure: 'Juice of 1',
          id: 1453,
        },
        {
          name: 'Soy Sauce',
          measure: '2 tbs',
          id: 1454,
        },
        {
          name: 'Vegetable Oil',
          measure: '2 tbs',
          id: 1455,
        },
        {
          name: 'Brown Sugar',
          measure: '3 tbs',
          id: 1456,
        },
        {
          name: 'Allspice',
          measure: '1 tbs',
          id: 1457,
        },
        {
          name: 'Basmati Rice',
          measure: '200g',
          id: 1458,
        },
        {
          name: 'Coconut Milk',
          measure: '400g',
          id: 1459,
        },
        {
          name: 'Spring Onions',
          measure: '1  bunch',
          id: 1460,
        },
        {
          name: 'Thyme',
          measure: '2 sprigs',
          id: 1461,
        },
        {
          name: 'Garlic',
          measure: '2 cloves chopped',
          id: 1462,
        },
        {
          name: 'Allspice',
          measure: '1 tbs',
          id: 1463,
        },
        {
          name: 'Kidney Beans',
          measure: '800g',
          id: 1464,
        },
      ],
    },
    {
      id: 138,
      name: 'Jamaican Beef Patties',
      category: 'Beef',
      instructions:
        'Make the Pastry Dough\r\n\r\nTo a large bowl, add flour, 1 teaspoon salt, and turmeric and mix thoroughly.\r\nRub shortening into flour until there are small pieces of shortening completely covered with flour.\r\nPour in 1/2 cup of the ice water and mix with your hands to bring the dough together. Keep adding ice water 2 to 3 tablespoons at a time until the mixture forms a dough.\r\nAt this stage, you can cut the dough into 2 large pieces, wrap in plastic and refrigerate for 30 minutes before using it.\r\nAlternatively, cut the dough into 10 to 12 equal pieces, place on a platter or baking sheet, cover securely with plastic wrap and let chill for 30 minutes while you make the filling.\r\nMake the Filling\r\n\r\nAdd ground beef to a large bowl. Sprinkle in allspice and black pepper. Mix together and set aside.\r\nHeat oil in a skillet until hot.\r\nAdd onions and sauté until translucent. Add hot pepper, garlic and thyme and continue to sauté for another minute. Add 1/4 teaspoon salt.\r\nAdd seasoned ground beef and toss to mix, breaking up any clumps, and let cook until the meat is no longer pink.\r\nAdd ketchup and more salt to taste.\r\nPour in 2 cups of water and stir. Bring the mixture to a boil then reduce heat and let simmer until most of the liquid has evaporated and whatever is remaining has reduced to a thick sauce.\r\nFold in green onions. Remove from heat and let cool completely.\r\nAssemble the Patties\r\n\r\nBeat the egg and water together to make an egg wash. Set aside.\r\nNow you can prepare the dough in two ways.\r\nFirst Method: Flour the work surface and rolling pin. If you had cut it into 2 large pieces, then take one of the large pieces and roll it out into a very large circle. Take a bowl with a wide rim (about 5 inches) and cut out three circles.\r\n\r\nPlace about 3 heaping tablespoons of the filling onto 1/2 of each circle. Dip a finger into the water and moisten the edges of the pastry. Fold over the other half and press to seal. \r\n\r\nTake a fork and crimp the edges. Cut off any extra to make it look neat and uniform. Place on a parchment-lined baking sheet and continue to work until you have rolled all the dough and filled the patties.\r\nSecond Method: If you had pre-cut the dough into individual pieces, work with one piece of dough at a time. Roll it out on a floured surface into a 5-inch circle or a little larger. Don’t worry if the edges are not perfect.\r\n\r\nPlace 3 heaping tablespoons of the filling on one side of the circle. Dip a finger into the water and moisten the edges of the pastry. Fold over the other half and press to seal.\r\n\r\nTake a fork and crimp the edges. Cut off any extra to make it look neat and uniform. Place on a parchment-lined baking sheet and continue work until you have rolled all the dough and filled the patties.\r\n\r\nFrying and Serving the Patties\r\n\r\nAfter forming the patties, place the pans in the refrigerator while you heat the oven to 350 F.\r\nJust before adding the pans with the patties to the oven, brush the patties with egg wash.\r\nBake patties for 30 minutes or until golden brown.\r\nCool on wire racks.\r\nServe warm.',
      image: 'wsqqsw1515364068.jpg',
      tags: 'Snack,Spicy',
      ingredients: [
        {
          name: 'Plain Flour',
          measure: '4 cups',
          id: 1465,
        },
        {
          name: 'Salt',
          measure: '1 tsp',
          id: 1466,
        },
        {
          name: 'Curry Powder',
          measure: '1 tsp',
          id: 1467,
        },
        {
          name: 'Butter',
          measure: '250g',
          id: 1468,
        },
        {
          name: 'Water',
          measure: '1 cup',
          id: 1469,
        },
        {
          name: 'Minced Beef',
          measure: '900g',
          id: 1470,
        },
        {
          name: 'Allspice',
          measure: '1 tsp',
          id: 1471,
        },
        {
          name: 'Black Pepper',
          measure: '1/2 tsp',
          id: 1472,
        },
        {
          name: 'Vegetable Oil',
          measure: '2 tbs',
          id: 1473,
        },
        {
          name: 'Onions',
          measure: '1 cup',
          id: 1474,
        },
        {
          name: 'Red Pepper',
          measure: 'Ground',
          id: 1475,
        },
        {
          name: 'Garlic',
          measure: '2 tsp ground',
          id: 1476,
        },
        {
          name: 'Thyme',
          measure: '1 tbs',
          id: 1477,
        },
        {
          name: 'Salt',
          measure: '1/4 tsp',
          id: 1478,
        },
        {
          name: 'Tomato Ketchup',
          measure: '2 tbs',
          id: 1479,
        },
        {
          name: 'Water',
          measure: '2 cups',
          id: 1480,
        },
        {
          name: 'Onions',
          measure: '1/2 cup',
          id: 1481,
        },
        {
          name: 'Egg',
          measure: '1 beaten',
          id: 1482,
        },
        {
          name: 'Water',
          measure: '1 tbs',
          id: 1483,
        },
        {
          name: 'Water',
          measure: '1/4 cup',
          id: 1484,
        },
      ],
    },
    {
      id: 139,
      name: 'Japanese gohan rice',
      category: 'Side',
      instructions:
        'STEP 1\r\nRinsing and soaking your rice is key to achieving the perfect texture. Measure the rice into a bowl, cover with cold water, then use your fingers to massage the grains of rice – the water will become cloudy. Drain and rinse again with fresh water. Repeat five more times until the water stays clear.\r\n\r\nSTEP 2\r\nTip the rinsed rice into a saucepan with 400ml water, or 200ml dashi and 200ml water, bring to the boil, then turn down the heat to a low simmer, cover with a tight-fitting lid with a steam hole and cook for 15 mins. Remove from the heat and leave to sit for another 15 mins, then stir through the mirin. Remove the lid and give it a good stir. Serve with any or all of the optional toppings.',
      image: 'kw92t41604181871.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Sushi Rice',
          measure: '300g',
          id: 1485,
        },
        {
          name: 'Mirin',
          measure: '1 tbs',
          id: 1486,
        },
        {
          name: 'Pickle Juice',
          measure: 'Garnish',
          id: 1487,
        },
        {
          name: 'Spring Onions',
          measure: 'Garnish',
          id: 1488,
        },
      ],
    },
    {
      id: 140,
      name: 'Japanese Katsudon',
      category: 'Pork',
      instructions:
        'STEP 1\r\nHeat the oil in a pan, fry the sliced onion until golden brown, then add the tonkatsu (see recipe here), placing it in the middle of the pan. Mix the dashi, soy, mirin and sugar together and tip three-quarters of the mixture around the tonkatsu. Sizzle for a couple of mins so the sauce thickens a little and the tonkatsu reheats.\r\n\r\nSTEP 2\r\nTip the beaten eggs around the tonkatsu and cook for 2-3 mins until the egg is cooked through but still a little runny. Divide the rice between two bowls, then top each with half the egg and tonkatsu mix, sprinkle over the chives and serve immediately, drizzling with a little more soy if you want an extra umami kick.',
      image: 'd8f6qx1604182128.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Vegetable Oil',
          measure: '1 tbs',
          id: 1489,
        },
        {
          name: 'Onion',
          measure: '1 large',
          id: 1490,
        },
        {
          name: 'Pork',
          measure: '1 chopped',
          id: 1491,
        },
        {
          name: 'Vegetable Stock',
          measure: '150ml',
          id: 1492,
        },
        {
          name: 'Soy Sauce',
          measure: '1 tbs',
          id: 1493,
        },
        {
          name: 'Mirin',
          measure: '1 tsp',
          id: 1494,
        },
        {
          name: 'Sugar',
          measure: '1 tsp',
          id: 1495,
        },
        {
          name: 'Eggs',
          measure: '2 Beaten',
          id: 1496,
        },
        {
          name: 'Sushi Rice',
          measure: '200g',
          id: 1497,
        },
        {
          name: 'Chives',
          measure: 'Chopped',
          id: 1498,
        },
      ],
    },
    {
      id: 141,
      name: 'Kapsalon',
      category: 'Lamb',
      instructions:
        "Cut the meat into strips. Heat oil in a pan and fry the strips for 6 minutes until it's ready.\r\nBake the fries until golden brown in a deep fryrer. When ready transfer to a backing dish. Make sure the fries are spread over the whole dish.\r\nCover the fries with a new layer of meat and spread evenly.\r\nAdd a layer of cheese over the meat. You can also use grated cheese. When done put in the oven for a few minutes until the cheese is melted.\r\nChop the lettuce, tomato and cucumber in small pieces and mix together. for a basic salad. As extra you can add olives jalapenos and a red union.\r\nDived the salad over the dish and Serve with garlicsauce and hot sauce",
      image: 'sxysrt1468240488.jpg',
      tags: 'Snack',
      ingredients: [
        {
          name: 'Fries',
          measure: '250 Grams',
          id: 1499,
        },
        {
          name: 'Doner Meat',
          measure: '500 Grams',
          id: 1500,
        },
        {
          name: 'Garlic sauce',
          measure: 'Topping',
          id: 1501,
        },
        {
          name: 'Hotsauce',
          measure: 'Topping',
          id: 1502,
        },
        {
          name: 'Lettuce',
          measure: '1 Bulb',
          id: 1503,
        },
        {
          name: 'Tomato',
          measure: '1',
          id: 1504,
        },
        {
          name: 'Cucumber',
          measure: '3rd',
          id: 1505,
        },
        {
          name: 'Gouda cheese',
          measure: '100 Grams',
          id: 1506,
        },
      ],
    },
    {
      id: 142,
      name: 'Kentucky Fried Chicken',
      category: 'Chicken',
      instructions:
        'Preheat fryer to 350°F. Thoroughly mix together all the spice mix ingredients.\r\nCombine spice mix with flour, brown sugar and salt.\r\nDip chicken pieces in egg white to lightly coat them, then transfer to flour mixture. Turn a few times and make sure the flour mix is really stuck to the chicken. Repeat with all the chicken pieces.\r\nLet chicken pieces rest for 5 minutes so crust has a chance to dry a bit.\r\nFry chicken in batches. Breasts and wings should take 12-14 minutes, and legs and thighs will need a few more minutes. Chicken pieces are done when a meat thermometer inserted into the thickest part reads 165°F.\r\nLet chicken drain on a few paper towels when it comes out of the fryer. Serve hot.',
      image: 'xqusqy1487348868.jpg',
      tags: 'Meat,Spicy',
      ingredients: [
        {
          name: 'Chicken',
          measure: '1 whole',
          id: 1507,
        },
        {
          name: 'Oil',
          measure: '2 quarts neutral frying',
          id: 1508,
        },
        {
          name: 'Egg White',
          measure: '1',
          id: 1509,
        },
        {
          name: 'Flour',
          measure: '1 1/2 cups',
          id: 1510,
        },
        {
          name: 'Brown Sugar',
          measure: '1 tablespoon',
          id: 1511,
        },
        {
          name: 'Salt',
          measure: '1 tablespoon',
          id: 1512,
        },
        {
          name: 'paprika',
          measure: '1 tablespoon',
          id: 1513,
        },
        {
          name: 'onion salt',
          measure: '2 teaspoons',
          id: 1514,
        },
        {
          name: 'chili powder',
          measure: '1 teaspoon',
          id: 1515,
        },
        {
          name: 'black pepper',
          measure: '1 teaspoon',
          id: 1516,
        },
        {
          name: 'celery salt',
          measure: '1/2 teaspoon',
          id: 1517,
        },
        {
          name: 'sage',
          measure: '1/2 teaspoon',
          id: 1518,
        },
        {
          name: 'garlic powder',
          measure: '1/2 teaspoon',
          id: 1519,
        },
        {
          name: 'allspice',
          measure: '1/2 teaspoon',
          id: 1520,
        },
        {
          name: 'oregano',
          measure: '1/2 teaspoon',
          id: 1521,
        },
        {
          name: 'basil',
          measure: '1/2 teaspoon',
          id: 1522,
        },
        {
          name: 'marjoram',
          measure: '1/2 teaspoon',
          id: 1523,
        },
      ],
    },
    {
      id: 143,
      name: 'Katsu Chicken curry',
      category: 'Chicken',
      instructions:
        'Prep:15min  ›  Cook:30min  ›  Ready in:45min \r\n\r\nFor the curry sauce: Heat oil in medium non-stick saucepan, add onion and garlic and cook until softened. Stir in carrots and cook over low heat for 10 to 12 minutes.\r\nAdd flour and curry powder; cook for 1 minute. Gradually stir in stock until combined; add honey, soy sauce and bay leaf. Slowly bring to the boil.\r\nTurn down heat and simmer for 20 minutes or until sauce thickens but is still of pouring consistency. Stir in garam masala. Pour the curry sauce through a sieve; return to saucepan and keep on low heat until ready to serve.\r\nFor the chicken: Season both sides of chicken breasts with salt and pepper. Place flour, egg and breadcrumbs in separate bowls and arrange in a row. Coat the chicken breasts in flour, then dip them into the egg, then coat in breadcrumbs, making sure you cover both sides.\r\nHeat oil in large frying pan over medium-high heat. Place chicken into hot oil and cook until golden brown, about 3 or 4 minutes each side. Once cooked, place on kitchen paper to absorb excess oil.\r\nPour curry sauce over chicken, serve with white rice and enjoy!',
      image: 'vwrpps1503068729.jpg',
      tags: 'Curry,Meat',
      ingredients: [
        {
          name: 'chicken breast',
          measure: '4 pounded to 1cm thickness',
          id: 1524,
        },
        {
          name: 'plain flour',
          measure: '2 tablespoons',
          id: 1525,
        },
        {
          name: 'egg',
          measure: '1 beaten',
          id: 1526,
        },
        {
          name: 'breadcrumbs',
          measure: '100g fine',
          id: 1527,
        },
        {
          name: 'vegetable oil',
          measure: '230ml frying',
          id: 1528,
        },
        {
          name: 'sunflower oil',
          measure: '2 tablespoons',
          id: 1529,
        },
        {
          name: 'onions',
          measure: '2 sliced',
          id: 1530,
        },
        {
          name: 'garlic',
          measure: '5 chopped cloves',
          id: 1531,
        },
        {
          name: 'carrot',
          measure: '2 sliced',
          id: 1532,
        },
        {
          name: 'plain flour',
          measure: '2 tablespoons',
          id: 1533,
        },
        {
          name: 'curry powder',
          measure: '4 teaspoons',
          id: 1534,
        },
        {
          name: 'chicken stock',
          measure: '600ml',
          id: 1535,
        },
        {
          name: 'honey',
          measure: '2 teaspoons',
          id: 1536,
        },
        {
          name: 'soy sauce',
          measure: '4 teaspoons',
          id: 1537,
        },
        {
          name: 'bay leaf',
          measure: '1',
          id: 1538,
        },
        {
          name: 'garam masala',
          measure: '1 teaspoon',
          id: 1539,
        },
      ],
    },
    {
      id: 144,
      name: 'Key Lime Pie',
      category: 'Dessert',
      instructions:
        'Heat the oven to 160C/fan 140C/gas 3. Whizz the biscuits to crumbs in a food processor (or put in a strong plastic bag and bash with a rolling pin). Mix with the melted butter and press into the base and up the sides of a 22cm loose-based tart tin. Bake in the oven for 10 minutes. Remove and cool.\r\nPut the egg yolks in a large bowl and whisk for a minute with electric beaters. Add the condensed milk and whisk for 3 minutes then add the zest and juice and whisk again for 3 minutes. Pour the filling into the cooled base then put back in the oven for 15 minutes. Cool then chill for at least 3 hours or overnight if you like.\r\nWhen you are ready to serve, carefully remove the pie from the tin and put on a serving plate. To decorate, softly whip together the cream and icing sugar. Dollop or pipe the cream onto the top of the pie and finish with extra lime zest.',
      image: 'qpqtuu1511386216.jpg',
      tags: 'Cake,Pie,Desert,Fruity,Sour',
      ingredients: [
        {
          name: 'Digestive Biscuits',
          measure: '300g',
          id: 1540,
        },
        {
          name: 'Butter',
          measure: '150g',
          id: 1541,
        },
        {
          name: 'Condensed Milk',
          measure: '400g',
          id: 1542,
        },
        {
          name: 'Egg Yolks',
          measure: '3',
          id: 1543,
        },
        {
          name: 'Lime',
          measure: '4',
          id: 1544,
        },
        {
          name: 'Double Cream',
          measure: '300ml',
          id: 1545,
        },
        {
          name: 'Icing Sugar',
          measure: '1 tbls',
          id: 1546,
        },
        {
          name: 'Lime',
          measure: 'to serve',
          id: 1547,
        },
      ],
    },
    {
      id: 145,
      name: 'Kidney Bean Curry',
      category: 'Vegetarian',
      instructions:
        'Heat the oil in a large frying pan over a low-medium heat. Add the onion and a pinch of salt and cook slowly, stirring occasionally, until softened and just starting to colour. Add the garlic, ginger and coriander stalks and cook for a further 2 mins, until fragrant.\r\n\r\nAdd the spices to the pan and cook for another 1 min, by which point everything should smell aromatic. Tip in the chopped tomatoes and kidney beans in their water, then bring to the boil.\r\n\r\nTurn down the heat and simmer for 15 mins until the curry is nice and thick. Season to taste, then serve with the basmati rice and the coriander leaves.',
      image: 'sywrsu1511463066.jpg',
      tags: 'Curry',
      ingredients: [
        {
          name: 'Vegetable Oil',
          measure: '1 tbls',
          id: 1548,
        },
        {
          name: 'Onion',
          measure: '1 finely chopped',
          id: 1549,
        },
        {
          name: 'Garlic',
          measure: '2 cloves chopped',
          id: 1550,
        },
        {
          name: 'Ginger',
          measure: '1 part',
          id: 1551,
        },
        {
          name: 'Coriander',
          measure: '1 Packet',
          id: 1552,
        },
        {
          name: 'Cumin',
          measure: '1 tsp',
          id: 1553,
        },
        {
          name: 'Paprika',
          measure: '1 tsp',
          id: 1554,
        },
        {
          name: 'Garam Masala',
          measure: '2 tsp',
          id: 1555,
        },
        {
          name: 'Chopped Tomatoes',
          measure: '400g',
          id: 1556,
        },
        {
          name: 'Kidney Beans',
          measure: '400g',
          id: 1557,
        },
        {
          name: 'Basmati Rice',
          measure: 'to serve',
          id: 1558,
        },
      ],
    },
    {
      id: 146,
      name: 'Kedgeree',
      category: 'Seafood',
      instructions:
        'For the rice, heat the oil in a large, lidded pan, add the onion, then gently fry for 5 mins until softened but not coloured. Add the spices, season with salt, then continue to fry until the mix start to go brown and fragrant; about 3 mins.\r\nAdd the rice and stir in well. Add 600ml water, stir, then bring to the boil. Reduce to a simmer, then cover for 10 mins. Take off the heat and leave to stand, covered, for 10-15 mins more. The rice will be perfectly cooked if you do not lift the lid before the end of the cooking.\r\nMeanwhile, put the haddock and bay leaves in a frying pan, cover with the milk, then poach for 10 mins until the flesh flakes. Remove from the milk, peel away the skin, then flake the flesh into thumbsize pieces. Place the eggs in a pan, cover with water, bring to the boil, then reduce to a simmer. Leave for 4½-5 mins, plunge into cold water, then peel and cut the eggs into quarters. Gently mix the fish, eggs, parsley, coriander and rice together in the pan. Serve hot, sprinkled with a few extra herbs.',
      image: 'utxqpt1511639216.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Smoked Haddock',
          measure: '300g',
          id: 1559,
        },
        {
          name: 'Bay Leaves',
          measure: '2',
          id: 1560,
        },
        {
          name: 'Milk',
          measure: '300ml',
          id: 1561,
        },
        {
          name: 'Eggs',
          measure: '4',
          id: 1562,
        },
        {
          name: 'Parsley',
          measure: 'Handful',
          id: 1563,
        },
        {
          name: 'Coriander',
          measure: 'Handful',
          id: 1564,
        },
        {
          name: 'Vegetable Oil',
          measure: '2 tbs',
          id: 1565,
        },
        {
          name: 'Onion',
          measure: '1 chopped',
          id: 1566,
        },
        {
          name: 'Coriander',
          measure: '1 tsp',
          id: 1567,
        },
        {
          name: 'Curry Powder',
          measure: '2 tsp',
          id: 1568,
        },
        {
          name: 'Rice',
          measure: '300g',
          id: 1569,
        },
      ],
    },
    {
      id: 147,
      name: 'Kung Pao Chicken',
      category: 'Chicken',
      instructions:
        'Combine the sake or rice wine, soy sauce, sesame oil and cornflour dissolved in water. Divide mixture in half.\r\nIn a glass dish or bowl, combine half of the sake mixture with the chicken pieces and toss to coat. Cover dish and place in refrigerator for about 30 minutes.\r\nIn a medium frying pan, combine remaining sake mixture, chillies, vinegar and sugar. Mix together and add spring onion, garlic, water chestnuts and peanuts. Heat sauce slowly over medium heat until aromatic.\r\nMeanwhile, remove chicken from marinade and sauté in a large frying pan until juices run clear. When sauce is aromatic, add sautéed chicken and let simmer together until sauce thickens.',
      image: '1525872624.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Sake',
          measure: '2 tbs',
          id: 1570,
        },
        {
          name: 'Soy Sauce',
          measure: '2 tbs',
          id: 1571,
        },
        {
          name: 'Sesame Seed Oil',
          measure: '2 tbs',
          id: 1572,
        },
        {
          name: 'Corn Flour',
          measure: '2 tbs',
          id: 1573,
        },
        {
          name: 'Water',
          measure: '2 tbs',
          id: 1574,
        },
        {
          name: 'Chicken',
          measure: '500g',
          id: 1575,
        },
        {
          name: 'Chilli Powder',
          measure: '1 tbs',
          id: 1576,
        },
        {
          name: 'Rice Vinegar',
          measure: '1 tsp',
          id: 1577,
        },
        {
          name: 'Brown Sugar',
          measure: '1 tbs',
          id: 1578,
        },
        {
          name: 'Spring Onions',
          measure: '4 Chopped',
          id: 1579,
        },
        {
          name: 'Garlic Clove',
          measure: '6 cloves',
          id: 1580,
        },
        {
          name: 'Water Chestnut',
          measure: '220g',
          id: 1581,
        },
        {
          name: 'Peanuts',
          measure: '100g',
          id: 1582,
        },
      ],
    },
    {
      id: 148,
      name: 'Kung Po Prawns',
      category: 'Seafood',
      instructions:
        'Mix the cornflour and 1 tbsp soy sauce, toss in the prawns and set aside for 10 mins. Stir the vinegar, remaining soy sauce, tomato purée, sugar and 2 tbsp water together to make a sauce.\r\n\r\nWhen you’re ready to cook, heat a large frying pan or wok until very hot, then add 1 tbsp oil. Fry the prawns until they are golden in places and have opened out– then tip them out of the pan.\r\n\r\nHeat the remaining oil and add the peanuts, chillies and water chestnuts. Stir-fry for 2 mins or until the peanuts start to colour, then add the ginger and garlic and fry for 1 more min. Tip in the prawns and sauce and simmer for 2 mins until thickened slightly. Serve with rice.',
      image: '1525873040.jpg',
      tags: 'BBQ',
      ingredients: [
        {
          name: 'Prawns',
          measure: '400g',
          id: 1583,
        },
        {
          name: 'Soy Sauce',
          measure: '2 tbs',
          id: 1584,
        },
        {
          name: 'Tomato Puree',
          measure: '1 tsp',
          id: 1585,
        },
        {
          name: 'Corn Flour',
          measure: '1 tsp',
          id: 1586,
        },
        {
          name: 'Caster Sugar',
          measure: '1 tsp',
          id: 1587,
        },
        {
          name: 'Sunflower Oil',
          measure: '1 tsp',
          id: 1588,
        },
        {
          name: 'Peanuts',
          measure: '85g',
          id: 1589,
        },
        {
          name: 'Chilli',
          measure: '3 Large',
          id: 1590,
        },
        {
          name: 'Brown Sugar',
          measure: '1 tbs',
          id: 1591,
        },
        {
          name: 'Garlic Clove',
          measure: '6 cloves',
          id: 1592,
        },
        {
          name: 'Water Chestnut',
          measure: '450g',
          id: 1593,
        },
        {
          name: 'Ginger',
          measure: 'to taste',
          id: 1594,
        },
      ],
    },
    {
      id: 149,
      name: 'Kafteji',
      category: 'Vegetarian',
      instructions:
        'Peel potatoes and cut into 5cm cubes.\r\nPour 1-2 cm of olive oil into a large pan and heat up very hot. Fry potatoes until golden brown for 20 minutes, turning from time to time. Place on kitchen paper to drain.\r\nCut the peppers in half and remove seeds. Rub a little olive oil on them and place the cut side down on a baking tray. Place them under the grill. Grill until the skin is dark and bubbly. While the peppers are still hot, put them into a plastic sandwich bag and seal it. Take them out after 15 minutes and remove skins.\r\nIn the meantime, heat more olive oil another pan. Peel the onions and cut into thin rings. Fry for 15 minutes until golden brown, turning them often. Add the Ras el hanout at the end.\r\nCut the pumpkin into 5cm cubes and fry in the same pan you used for the potatoes for 10-15 minutes until it is soft and slightly browned. Place on kitchen paper.\r\nPour the remaining olive oil out of the pan and put all the cooked vegetables into the pan and mix. Whisk eggs and pour them over the vegetables. Put the lid on the pan so that the eggs cook. Put the contents of the pan onto a large chopping board, add salt and pepper and chopped and mix everything with a big knife.',
      image: '1bsv1q1560459826.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Potatoes',
          measure: '5 Large',
          id: 1595,
        },
        {
          name: 'Olive Oil',
          measure: '2 tbs',
          id: 1596,
        },
        {
          name: 'Green Pepper',
          measure: '1',
          id: 1597,
        },
        {
          name: 'Onions',
          measure: '5',
          id: 1598,
        },
        {
          name: 'Ras el hanout',
          measure: '1 tbs',
          id: 1599,
        },
        {
          name: 'Pumpkin',
          measure: '500g',
          id: 1600,
        },
        {
          name: 'Eggs',
          measure: '24 Skinned',
          id: 1601,
        },
        {
          name: 'Salt',
          measure: 'Pinch',
          id: 1602,
        },
        {
          name: 'Pepper',
          measure: 'Pinch',
          id: 1603,
        },
      ],
    },
    {
      id: 150,
      name: 'Keleya Zaara',
      category: 'Lamb',
      instructions:
        'Heat the vegetable oil in a large frying pan over medium-high heat. Add the lamb and cook until browned on all sides, about 5 minutes. Season with saffron, salt and pepper to taste; stir in all but 4 tablespoons of the onion, and pour in the water. Bring to the boil, then cover, reduce heat to medium-low, and simmer until the lamb is tender, about 15 minutes.\r\nUncover the pan, stir in the butter and allow the sauce reduce 5 to 10 minutes to desired consistency. Season to taste with salt and pepper, then pour into a serving dish. Sprinkle with the remaining chopped onions and parsley. Garnish with lemon wedges to serve.\r\n',
      image: '8x09hy1560460923.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Olive Oil',
          measure: '4 tbs',
          id: 1604,
        },
        {
          name: 'Lamb',
          measure: '750g',
          id: 1605,
        },
        {
          name: 'Saffron',
          measure: '1 1/2 tsp',
          id: 1606,
        },
        {
          name: 'Onion',
          measure: '1 Large Chopped',
          id: 1607,
        },
        {
          name: 'Water',
          measure: '25 ml',
          id: 1608,
        },
        {
          name: 'Parsley',
          measure: '30g',
          id: 1609,
        },
        {
          name: 'Butter',
          measure: '1 tbs',
          id: 1610,
        },
        {
          name: 'Lemon',
          measure: '1',
          id: 1611,
        },
      ],
    },
    {
      id: 151,
      name: 'Kumpir',
      category: 'Side',
      instructions:
        'If you order kumpir in Turkey, the standard filling is first, lots of butter mashed into the potato, followed by cheese. There’s then a row of other toppings that you can just point at to your heart’s content – sweetcorn, olives, salami, coleslaw, Russian salad, allsorts – and you walk away with an over-stuffed potato because you got ever-excited by the choices on offer.\r\n\r\nGrate (roughly – you can use as much as you like) 150g of cheese.\r\nFinely chop one onion and one sweet red pepper.\r\nPut these ingredients into a large bowl with a good sprinkling of salt and pepper, chilli flakes (optional).',
      image: 'mlchx21564916997.jpg',
      tags: 'SideDish',
      ingredients: [
        {
          name: 'Potatoes',
          measure: '2 large',
          id: 1612,
        },
        {
          name: 'Butter',
          measure: '2 tbs',
          id: 1613,
        },
        {
          name: 'Cheese',
          measure: '150g',
          id: 1614,
        },
        {
          name: 'Onion',
          measure: '1 large',
          id: 1615,
        },
        {
          name: 'Red Pepper',
          measure: '1 large',
          id: 1616,
        },
        {
          name: 'Red Chilli Flakes',
          measure: 'Pinch',
          id: 1617,
        },
      ],
    },
    {
      id: 152,
      name: 'Krispy Kreme Donut',
      category: 'Dessert',
      instructions:
        'Dissolve yeast in warm water in 2 1/2-quart bowl. Add milk, sugar, salt, eggs, shortening and 2 cups flour. Beat on low for 30 seconds, scraping bowl constantly. Beat on medium speed for 2 minutes, scraping bowl occasionally. Stir in remaining flour until smooth. Cover and let rise until double, 50-60 minutes. (Dough is ready when indentation remains when touched.) Turn dough onto floured surface; roll around lightly to coat with flour. Gently roll dough 1/2-inch thick with floured rolling pin. Cut with floured doughnut cutter. Cover and let rise until double, 30-40 minutes.\r\nHeat vegetable oil in deep fryer to 350°. Slide doughnuts into hot oil with wide spatula. Turn doughnuts as they rise to the surface. Fry until golden brown, about 1 minute on each side. Remove carefully from oil (do not prick surface); drain. Dip the doughnuts into creamy glaze set on rack.\r\n\r\n\r\nGlaze: \r\nHeat butter until melted. Remove from heat. Stir in powdered sugar and vanilla until smooth. Stir in water, 1 tablespoon at a time, until desired consistency.',
      image: '4i5cnx1587672171.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Yeast',
          measure: '1/4 ounce',
          id: 1618,
        },
        {
          name: 'Water',
          measure: '1/4 cup',
          id: 1619,
        },
        {
          name: 'Water',
          measure: '1 1/2 cups',
          id: 1620,
        },
        {
          name: 'Sugar',
          measure: '1/2 cup',
          id: 1621,
        },
        {
          name: 'Salt',
          measure: '1 tsp',
          id: 1622,
        },
        {
          name: 'Eggs',
          measure: '2',
          id: 1623,
        },
        {
          name: 'Shortening',
          measure: '1/3 cup',
          id: 1624,
        },
        {
          name: 'Flour',
          measure: '5 drops',
          id: 1625,
        },
        {
          name: 'Canola Oil',
          measure: 'Sprinking',
          id: 1626,
        },
        {
          name: 'Milk',
          measure: '1/2 cup',
          id: 1627,
        },
        {
          name: 'Sugar',
          measure: '2 cups',
          id: 1628,
        },
        {
          name: 'Vanilla',
          measure: '1 1/2 cups',
          id: 1629,
        },
        {
          name: 'Boiling Water',
          measure: '6 tablespoons',
          id: 1630,
        },
        {
          name: 'Butter',
          measure: '1/3 cup',
          id: 1631,
        },
      ],
    },
    {
      id: 153,
      name: 'Koshari',
      category: 'Vegetarian',
      instructions:
        'Cook the lentils. Bring lentils and 4 cups of water to a boil in a medium pot or saucepan over high heat. Reduce the heat to low and cook until lentils are just tender (15-17 minutes). Drain from water and season with a little salt. (Note: when the lentils are ready, they should not be fully cooked. They should be only par-cooked and still have a bite to them as they need to finish cooking with the rice).\r\nNow, for the rice. Drain the rice from its soaking water. Combine the par-cooked lentils and the rice in the saucepan over medium-high heat with 1 tbsp cooking oil, salt, pepper, and coriander. Cook for 3 minutes, stirring regularly. Add warm water to cover the rice and lentil mixture by about 1 1/2 inches (you’ll probably use about 3 cups of water here). Bring to a boil; the water should reduce a bit. Now cover and cook until all the liquid has been absorbed and both the rice and lentils are well cooked through (about 20 minutes).  Keep covered and undisturbed for 5 minutes or so.\r\nNow make the pasta. While the rice and lentils are cooking, make the pasta according to package instructions by adding the elbow pasta to boiling water with a dash of salt and a little oil. Cook until the pasta is al dente. Drain.\r\nCover the chickpeas and warm in the microwave briefly before serving.\r\n\r\nMake the crispy onion topping. \r\n\r\nSprinkle the onion rings with salt, then toss them in the flour to coat. Shake off excess flour.\r\nIn a large skillet, heat the cooking oil over medium-high heat, cook the onion rings, stirring often, until they turn a nice caramelized brown. Onions must be crispy, but not burned (15-20 minutes).',
      image: '4er7mj1598733193.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Brown Lentils',
          measure: '1 1/2 cups',
          id: 1632,
        },
        {
          name: 'Rice',
          measure: '1 1/2 cups',
          id: 1633,
        },
        {
          name: 'Coriander',
          measure: '1/2 tsp',
          id: 1634,
        },
        {
          name: 'Macaroni',
          measure: '2 cups',
          id: 1635,
        },
        {
          name: 'Chickpeas',
          measure: 'Can',
          id: 1636,
        },
        {
          name: 'Onion',
          measure: '1 large',
          id: 1637,
        },
        {
          name: 'Salt',
          measure: 'Sprinking',
          id: 1638,
        },
        {
          name: 'Vegetable Oil',
          measure: '1/2 cup',
          id: 1639,
        },
      ],
    },
    {
      id: 154,
      name: 'Lamb tomato and sweet spices',
      category: 'Lamb',
      instructions:
        "Use pickled vine leaves here, preserved in brine. Small delicate leaves are better than the large bristly ones but, if only large leaves are to hand, then trim them to roughly 12 by 12 cms so that you don't get too many layers of leaves around the filling. And remove any stalks. Drain the preserved leaves, immerse them in boiling water for 10 minutes and then leave to dry on a tea towel before use. \r\nBasmati rice with butter and pine nuts is an ideal accompaniment. Couscous is great, too. Serves four.\r\nFirst make the filling. Put all the ingredients, apart from the tomatoes, in a bowl. Cut the tomatoes in half, coarsely grate into the bowl and discard the skins. Add half a teaspoon of salt and some black pepper, and stir. Leave on the side, or in the fridge, for up to a day. Before using, gently squeeze with your hands and drain away any juices that come out.\r\nTo make the sauce, heat the oil in a medium pan. Add the ginger and garlic, cook for a minute or two, taking care not to burn them, then add the tomato, lemon juice and sugar. Season, and simmer for 20 minutes.\r\nWhile the sauce is bubbling away, prepare the vine leaves. Use any torn or broken leaves to line the base of a wide, heavy saucepan. Trim any leaves from the fennel, cut it vertically into 0.5cm-thick slices and spread over the base of the pan to cover completely.\r\nLay a prepared vine leaf (see intro) on a work surface, veiny side up. Put two teaspoons of filling at the base of the leaf in a 2cm-long by 1cm-wide strip. Fold the sides of the leaf over the filling, then roll it tightly from bottom to top, in a cigar shape. Place in the pan, seam down, and repeat with the remaining leaves, placing them tightly next to each other in lines or circles (in two layers if necessary).\r\nPour the sauce over the leaves (and, if needed, add water just to cover). Place a plate on top, to weigh the leaves down, then cover with a lid. Bring to a boil, reduce the heat and cook on a bare simmer for 70 minutes. Most of the liquid should evaporate. Remove from the heat, and leave to cool a little - they are best served warm. When serving, bring to the table in the pan - it looks great. Serve a few vine leaves and fennel slices with warm rice. Spoon the braising juices on top and garnish with coriander.",
      image: 'qtwtss1468572261.jpg',
      tags: '',
      ingredients: [
        {
          name: 'olive oil',
          measure: '2 tbsp',
          id: 1640,
        },
        {
          name: 'ginger',
          measure: '4cm piece finely chopped',
          id: 1641,
        },
        {
          name: 'garlic',
          measure: '2 cloves peeled and chopped',
          id: 1642,
        },
        {
          name: 'tomatoes',
          measure: '800g peeled and chopped',
          id: 1643,
        },
        {
          name: 'lemon juice',
          measure: '2 tbsp',
          id: 1644,
        },
        {
          name: 'caster sugar',
          measure: '1 tsp',
          id: 1645,
        },
        {
          name: 'vine leaves',
          measure: '50',
          id: 1646,
        },
        {
          name: 'fennel bulb',
          measure: '1 large',
          id: 1647,
        },
        {
          name: 'lamb mince',
          measure: '400g',
          id: 1648,
        },
        {
          name: 'onion',
          measure: '1 medium',
          id: 1649,
        },
        {
          name: 'potato',
          measure: '1 small peeled and coarsely grated',
          id: 1650,
        },
        {
          name: 'basmati rice',
          measure: '2 tbsp',
          id: 1651,
        },
        {
          name: 'chopped parsley',
          measure: '2 tbsp',
          id: 1652,
        },
        {
          name: 'coriander',
          measure: '2 tbsp chopped',
          id: 1653,
        },
        {
          name: 'lemon juice',
          measure: '1 tbsp',
          id: 1654,
        },
        {
          name: 'garlic',
          measure: '2 cloves',
          id: 1655,
        },
        {
          name: 'clove',
          measure: '½ tsp ground',
          id: 1656,
        },
        {
          name: 'cinnamon',
          measure: '½ tsp ground',
          id: 1657,
        },
        {
          name: 'tomatoes',
          measure: '2 medium',
          id: 1658,
        },
      ],
    },
    {
      id: 155,
      name: 'Lamb Biryani',
      category: 'Lamb',
      instructions:
        'Grind the cashew, poppy seeds and cumin seeds into a smooth paste, using as little water as possible. Set aside. \r\n\r\nDeep fry the sliced onions when it is hot. Don’t overcrowd the oil. When the onions turn light brown, remove from oil and drain on paper towel. The fried onion will crisp up as it drains. Also fry the cashewnuts till golden brown. Set aside.\r\n\r\nWash the rice and soak in water for twenty minutes.\r\nMeanwhile, take a big wide pan, add oil in medium heat, add the sliced onions, add the blended paste, to it add the green chillies, ginger garlic paste and garlic and fry for a minute.\r\nThen add the tomatoes and sauté them well till they are cooked and not mushy.\r\n\r\nThen to it add the red chilli powder, biryani powder, mint, coriander leaves and sauté them well.\r\nAdd the yogurt and mix well. I always move the skillet away from the heat when adding yogurt which prevents it from curdling.\r\n\r\nNow after returning the skillet back to the stove, add the washed lamb and salt and ½ cup water and mix well. Cook for 1 hour and cook it covered in medium low heat or put it in a pressure cooker for 6 whistles. If the water is not drained totally, heat it by keeping it open.\r\n\r\nTake another big pan, add thrice the cup of rice you use, and boil it. When it is boiling high, add the rice, salt and jeera and mix well. After 7 minutes exact or when the rice is 80% done. Switch off and drain the rice.\r\n\r\nNow, the layering starts. To the lamb, pat and level it. Add the drained hot rice on the top of it. Garnish with fried onions, ghee, mint, coriander leaves and saffron dissolved in milk.\r\n\r\nCover the dish and bake in a 350f oven for 15 minutes or till the cooked but not mushy. Or cook in the stove medium heat for 12 minutes and lowest heat for 5 minutes. And switch off. Mix and serve hot!\r\nNotes\r\n1. If you are cooking in oven, do make sure to cook in a big oven safe pan and cover it tight and then keep in oven for the final step.\r\n2. You can skip biryani masala if you don’t have and add just garam masala (1 tsp and red chilli powder – 3 tsp instead of 1 tsp)\r\n3. If it is spicy in the end, squeeze some lemon, it will reduce the heat and enhance the flavors also.',
      image: 'xrttsx1487339558.jpg',
      tags: 'Curry,Meat',
      ingredients: [
        {
          name: 'Cashew nuts',
          measure: '12',
          id: 1659,
        },
        {
          name: 'Khus khus',
          measure: '½ tbsp',
          id: 1660,
        },
        {
          name: 'Cumin seeds',
          measure: '½ tbsp',
          id: 1661,
        },
        {
          name: 'Onions',
          measure: '3 sliced thinly',
          id: 1662,
        },
        {
          name: 'Ginger garlic paste',
          measure: '2 tsp',
          id: 1663,
        },
        {
          name: 'Garlic',
          measure: '4 whole',
          id: 1664,
        },
        {
          name: 'Mint',
          measure: 'Leaves',
          id: 1665,
        },
        {
          name: 'Cilantro',
          measure: 'Leaves',
          id: 1666,
        },
        {
          name: 'Saffron',
          measure: '½ tsp dissolved in ½ cup warm milk',
          id: 1667,
        },
        {
          name: 'Ghee',
          measure: '2 tbsp',
          id: 1668,
        },
        {
          name: 'Basmati rice',
          measure: '2 Cups',
          id: 1669,
        },
        {
          name: 'Full fat yogurt',
          measure: '½ cup',
          id: 1670,
        },
        {
          name: 'Cumin Seeds',
          measure: '1 tbsp',
          id: 1671,
        },
        {
          name: 'Bay leaf',
          measure: '½',
          id: 1672,
        },
        {
          name: 'Cinnamon',
          measure: '1 thin piece',
          id: 1673,
        },
        {
          name: 'Cloves',
          measure: '3',
          id: 1674,
        },
        {
          name: 'Cardamom',
          measure: '2',
          id: 1675,
        },
        {
          name: 'Lamb',
          measure: '1 lb',
          id: 1676,
        },
        {
          name: 'Red Chilli powder',
          measure: '1 tsp',
          id: 1677,
        },
        {
          name: 'Biryani masala',
          measure: '1 tbsp',
          id: 1678,
        },
      ],
    },
    {
      id: 156,
      name: 'Lamb Rogan josh',
      category: 'Lamb',
      instructions:
        '\r\nPut the onions in a food processor and whizz until very finely chopped. Heat the oil in a large heavy-based pan, then fry the onion with the lid on, stirring every now and then, until it is really golden and soft. Add the garlic and ginger, then fry for 5 mins more.\r\nTip the curry paste, all the spices and the bay leaves into the pan, with the tomato purée. Stir well over the heat for about 30 secs, then add the meat and 300ml water. Stir to mix, turn down the heat, then add the yogurt.\r\nCover the pan, then gently simmer for 40-60 mins until the meat is tender and the sauce nice and thick. Serve scattered with coriander, with plain basmati or pilau rice.',
      image: 'vvstvq1487342592.jpg',
      tags: 'Curry,Spicy,Alcoholic',
      ingredients: [
        {
          name: 'Onion',
          measure: '2 quartered',
          id: 1679,
        },
        {
          name: 'Sunflower Oil',
          measure: '4 tbsp',
          id: 1680,
        },
        {
          name: 'Garlic',
          measure: '4 cloves',
          id: 1681,
        },
        {
          name: 'Ginger',
          measure: 'Thumb sized peeled and very finely grated',
          id: 1682,
        },
        {
          name: 'Madras Paste',
          measure: '2 tbsp',
          id: 1683,
        },
        {
          name: 'Paprika',
          measure: '2 tsp',
          id: 1684,
        },
        {
          name: 'cinnamon stick',
          measure: '1',
          id: 1685,
        },
        {
          name: 'Cardamom',
          measure: '6 bashed to break shells',
          id: 1686,
        },
        {
          name: 'Clove',
          measure: '4',
          id: 1687,
        },
        {
          name: 'Bay Leaf',
          measure: '2',
          id: 1688,
        },
        {
          name: 'Tomato Purée',
          measure: '1 tbsp',
          id: 1689,
        },
        {
          name: 'Lamb',
          measure: '1kg cubed',
          id: 1690,
        },
        {
          name: 'Greek yogurt',
          measure: '150ml',
          id: 1691,
        },
        {
          name: 'Coriander',
          measure: 'Garnish chopped',
          id: 1692,
        },
      ],
    },
    {
      id: 157,
      name: 'Laksa King Prawn Noodles',
      category: 'Seafood',
      instructions:
        'Heat the oil in a medium saucepan and add the chilli. Cook for 1 min, then add the curry paste, stir and cook for 1 min more. Dissolve the stock cube in a large jug in 700ml boiling water, then pour into the pan and stir to combine. Tip in the coconut milk and bring to the boil.\r\nAdd the fish sauce and a little seasoning. Toss in the noodles and cook for a further 3-4 mins until softening. Squeeze in the lime juice, add the prawns and cook through until warm, about 2-3 mins. Scatter over some of the coriander.\r\nServe in bowls with the remaining coriander and lime wedges on top for squeezing over.',
      image: 'rvypwy1503069308.jpg',
      tags: 'Shellfish,Seafood',
      ingredients: [
        {
          name: 'Olive Oil',
          measure: '1 tbsp',
          id: 1693,
        },
        {
          name: 'red chili',
          measure: '1 finely sliced',
          id: 1694,
        },
        {
          name: 'Thai red curry paste',
          measure: '2 ½ tbsp',
          id: 1695,
        },
        {
          name: 'vegetable stock cube',
          measure: '1',
          id: 1696,
        },
        {
          name: 'coconut milk',
          measure: '400ml can',
          id: 1697,
        },
        {
          name: 'fish sauce',
          measure: '2 tsp',
          id: 1698,
        },
        {
          name: 'rice noodles',
          measure: '100g',
          id: 1699,
        },
        {
          name: 'lime',
          measure: '2 juice of 1, the other halved',
          id: 1700,
        },
        {
          name: 'king prawns',
          measure: '150g',
          id: 1701,
        },
        {
          name: 'coriander',
          measure: '½ small pack',
          id: 1702,
        },
      ],
    },
    {
      id: 158,
      name: 'Lamb Tagine',
      category: 'Lamb',
      instructions:
        'Heat the olive oil in a heavy-based pan and add the onion and carrot. Cook for 3- 4 mins until softened.\r\n\r\nAdd the diced lamb and brown all over. Stir in the garlic and all the spices and cook for a few mins more or until the aromas are released.\r\n\r\nAdd the honey and apricots, crumble in the stock cube and pour over roughly 500ml boiling water or enough to cover the meat. Give it a good stir and bring to the boil. Turn down to a simmer, put the lid on and cook for 1 hour.\r\n\r\nRemove the lid and cook for a further 30 mins, then stir in the squash. Cook for 20 – 30 mins more until the squash is soft and the lamb is tender. Serve alongside rice or couscous and sprinkle with parsley and pine nuts, if using.',
      image: 'yuwtuu1511295751.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Olive Oil',
          measure: '2 tblsp',
          id: 1703,
        },
        {
          name: 'Onion',
          measure: '1 finely sliced',
          id: 1704,
        },
        {
          name: 'Carrots',
          measure: '2 chopped',
          id: 1705,
        },
        {
          name: 'Lamb Leg',
          measure: '500g',
          id: 1706,
        },
        {
          name: 'Garlic',
          measure: '2 cloves minced',
          id: 1707,
        },
        {
          name: 'Cumin',
          measure: '½ tsp',
          id: 1708,
        },
        {
          name: 'Ginger',
          measure: '½ tsp',
          id: 1709,
        },
        {
          name: 'Saffron',
          measure: '¼ tsp',
          id: 1710,
        },
        {
          name: 'Cinnamon',
          measure: '1 tsp',
          id: 1711,
        },
        {
          name: 'Honey',
          measure: '1 tblsp',
          id: 1712,
        },
        {
          name: 'Apricot',
          measure: '100g',
          id: 1713,
        },
        {
          name: 'Vegetable Stock Cube',
          measure: '1',
          id: 1714,
        },
        {
          name: 'Butternut Squash',
          measure: '1 medium chopped',
          id: 1715,
        },
        {
          name: 'Couscous',
          measure: 'Steamed',
          id: 1716,
        },
        {
          name: 'Parsley',
          measure: 'Chopped',
          id: 1717,
        },
      ],
    },
    {
      id: 159,
      name: 'Lasagne',
      category: 'Pasta',
      instructions:
        'Heat the oil in a large saucepan. Use kitchen scissors to snip the bacon into small pieces, or use a sharp knife to chop it on a chopping board. Add the bacon to the pan and cook for just a few mins until starting to turn golden. Add the onion, celery and carrot, and cook over a medium heat for 5 mins, stirring occasionally, until softened.\r\nAdd the garlic and cook for 1 min, then tip in the mince and cook, stirring and breaking it up with a wooden spoon, for about 6 mins until browned all over.\r\nStir in the tomato purée and cook for 1 min, mixing in well with the beef and vegetables. Tip in the chopped tomatoes. Fill each can half full with water to rinse out any tomatoes left in the can, and add to the pan. Add the honey and season to taste. Simmer for 20 mins.\r\nHeat oven to 200C/180C fan/gas 6. To assemble the lasagne, ladle a little of the ragu sauce into the bottom of the roasting tin or casserole dish, spreading the sauce all over the base. Place 2 sheets of lasagne on top of the sauce overlapping to make it fit, then repeat with more sauce and another layer of pasta. Repeat with a further 2 layers of sauce and pasta, finishing with a layer of pasta.\r\nPut the crème fraîche in a bowl and mix with 2 tbsp water to loosen it and make a smooth pourable sauce. Pour this over the top of the pasta, then top with the mozzarella. Sprinkle Parmesan over the top and bake for 25–30 mins until golden and bubbling. Serve scattered with basil, if you like.',
      image: 'wtsvxx1511296896.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Olive Oil',
          measure: '1 tblsp',
          id: 1718,
        },
        {
          name: 'Bacon',
          measure: '2',
          id: 1719,
        },
        {
          name: 'Onion',
          measure: '1 finely chopped',
          id: 1720,
        },
        {
          name: 'Celery',
          measure: '1 Stick',
          id: 1721,
        },
        {
          name: 'Carrots',
          measure: '1 medium',
          id: 1722,
        },
        {
          name: 'Garlic',
          measure: '2 cloves chopped',
          id: 1723,
        },
        {
          name: 'Minced Beef',
          measure: '500g',
          id: 1724,
        },
        {
          name: 'Tomato Puree',
          measure: '1 tbls',
          id: 1725,
        },
        {
          name: 'Chopped Tomatoes',
          measure: '800g',
          id: 1726,
        },
        {
          name: 'Honey',
          measure: '1 tblsp',
          id: 1727,
        },
        {
          name: 'Lasagne Sheets',
          measure: '500g',
          id: 1728,
        },
        {
          name: 'Creme Fraiche',
          measure: '400ml',
          id: 1729,
        },
        {
          name: 'Mozzarella Balls',
          measure: '125g',
          id: 1730,
        },
        {
          name: 'Parmesan Cheese',
          measure: '50g',
          id: 1731,
        },
        {
          name: 'Basil Leaves',
          measure: 'Topping',
          id: 1732,
        },
      ],
    },
    {
      id: 160,
      name: 'Lamb and Potato pie',
      category: 'Lamb',
      instructions:
        'Dust the meat with flour to lightly coat.\r\nHeat enough vegetable oil in a large saucepan to fill the base, and fry the onion and meat until lightly browned. Season with salt and pepper.\r\nAdd the carrots, stock and more seasoning to taste.\r\nBring to the boil, cover and reduce the heat to a simmer. Simmer for at least an hour or until the meat is tender. Take your time cooking the meat, the longer you leave it to cook, the better the flavour will be.\r\nPreheat the oven to 180C/350F/Gas 4.\r\nAdd the drained potato cubes to the lamb.\r\nTurn the mixture into a pie dish or casserole and cover with the shortcrust pastry. Make three slits in the top of the pastry to release any steam while cooking.\r\nBrush with beaten egg and bake for about 40 minutes, until the pastry is golden brown.\r\nServe.',
      image: 'sxrpws1511555907.jpg',
      tags: 'Pie',
      ingredients: [
        {
          name: 'Lamb Shoulder',
          measure: '500g',
          id: 1733,
        },
        {
          name: 'Flour',
          measure: '1 tbls',
          id: 1734,
        },
        {
          name: 'Vegetable Oil',
          measure: 'Dash',
          id: 1735,
        },
        {
          name: 'Onion',
          measure: '1 sliced',
          id: 1736,
        },
        {
          name: 'Carrots',
          measure: '2 sliced',
          id: 1737,
        },
        {
          name: 'Vegetable Stock',
          measure: '350ml/12fl',
          id: 1738,
        },
        {
          name: 'Potatoes',
          measure: '500g',
          id: 1739,
        },
        {
          name: 'Shortcrust Pastry',
          measure: '450g',
          id: 1740,
        },
        {
          name: 'Eggs',
          measure: 'To Glaze',
          id: 1741,
        },
      ],
    },
    {
      id: 161,
      name: 'Lancashire hotpot',
      category: 'Lamb',
      instructions:
        'Heat oven to 160C/fan 140C/gas 3. Heat some dripping or butter in a large shallow casserole dish, brown the lamb in batches, lift to a plate, then repeat with the kidneys.\r\nFry the onions and carrots in the pan with a little more dripping until golden. Sprinkle over the flour, allow to cook for a couple of mins, shake over the Worcestershire sauce, pour in the stock, then bring to the boil. Stir in the meat and bay leaves, then turn off the heat. Arrange the sliced potatoes on top of the meat, then drizzle with a little more dripping. Cover, then place in the oven for about 1½ hrs until the potatoes are cooked.\r\nRemove the lid, brush the potatoes with a little more dripping, then turn the oven up to brown the potatoes, or finish under the grill for 5-8 mins until brown.',
      image: 'uttrxw1511637813.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Butter',
          measure: '100g',
          id: 1742,
        },
        {
          name: 'Lamb',
          measure: '900g',
          id: 1743,
        },
        {
          name: 'Lamb Kidney',
          measure: '3',
          id: 1744,
        },
        {
          name: 'Onions',
          measure: '2 medium',
          id: 1745,
        },
        {
          name: 'Carrots',
          measure: '4 sliced',
          id: 1746,
        },
        {
          name: 'Plain Flour',
          measure: '25g',
          id: 1747,
        },
        {
          name: 'Worcestershire Sauce',
          measure: '2 tsp',
          id: 1748,
        },
        {
          name: 'Chicken Stock',
          measure: '500ml',
          id: 1749,
        },
        {
          name: 'Bay Leaves',
          measure: '2',
          id: 1750,
        },
        {
          name: 'Potatoes',
          measure: '900g',
          id: 1751,
        },
      ],
    },
    {
      id: 162,
      name: 'Leblebi Soup',
      category: 'Vegetarian',
      instructions:
        'Heat the oil in a large pot. Add the onion and cook until translucent.\r\nDrain the soaked chickpeas and add them to the pot together with the vegetable stock. Bring to the boil, then reduce the heat and cover. Simmer for 30 minutes.\r\nIn the meantime toast the cumin in a small ungreased frying pan, then grind them in a mortar. Add the garlic and salt and pound to a fine paste.\r\nAdd the paste and the harissa to the soup and simmer until the chickpeas are tender, about 30 minutes.\r\nSeason to taste with salt, pepper and lemon juice and serve hot.',
      image: 'x2fw9e1560460636.jpg',
      tags: 'Soup',
      ingredients: [
        {
          name: 'Olive Oil',
          measure: '2 tbs',
          id: 1752,
        },
        {
          name: 'Onion',
          measure: '1 medium finely diced',
          id: 1753,
        },
        {
          name: 'Chickpeas',
          measure: '250g',
          id: 1754,
        },
        {
          name: 'Vegetable Stock',
          measure: '1.5L',
          id: 1755,
        },
        {
          name: 'Cumin',
          measure: '1 tsp',
          id: 1756,
        },
        {
          name: 'Garlic',
          measure: '5 cloves',
          id: 1757,
        },
        {
          name: 'Salt',
          measure: '1/2 tsp',
          id: 1758,
        },
        {
          name: 'Harissa Spice',
          measure: '1 tsp',
          id: 1759,
        },
        {
          name: 'Pepper',
          measure: 'Pinch',
          id: 1760,
        },
        {
          name: 'Lime',
          measure: '1/2',
          id: 1761,
        },
      ],
    },
    {
      id: 163,
      name: 'Lasagna Sandwiches',
      category: 'Pasta',
      instructions:
        '1. In a small bowl, combine the first four ingredients; spread on four slices of bread. Layer with bacon, tomato and cheese; top with remaining bread.\r\n\r\n2. In a large skillet or griddle, melt 2 tablespoons butter. Toast sandwiches until lightly browned on both sides and cheese is melted, adding butter if necessary.\r\n\r\nNutrition Facts\r\n1 sandwich: 445 calories, 24g fat (12g saturated fat), 66mg cholesterol, 1094mg sodium, 35g carbohydrate (3g sugars, 2g fiber), 21g protein.',
      image: 'xr0n4r1576788363.jpg',
      tags: 'Sandwich',
      ingredients: [
        {
          name: 'Sour Cream',
          measure: '1/4 cup',
          id: 1762,
        },
        {
          name: 'Chopped Onion',
          measure: '2 tbs',
          id: 1763,
        },
        {
          name: 'Dried Oregano',
          measure: '1/2 tbs',
          id: 1764,
        },
        {
          name: 'Salt',
          measure: '1/4 tsp',
          id: 1765,
        },
        {
          name: 'Bread',
          measure: '8 slices',
          id: 1766,
        },
        {
          name: 'Bacon',
          measure: '8 slices',
          id: 1767,
        },
        {
          name: 'Tomato',
          measure: '8 slices',
          id: 1768,
        },
        {
          name: 'Mozzarella',
          measure: '4 slices',
          id: 1769,
        },
        {
          name: 'Butter',
          measure: '2 1/2 Tbs',
          id: 1770,
        },
      ],
    },
    {
      id: 164,
      name: 'Lamb and Lemon Souvlaki',
      category: 'Lamb',
      instructions:
        "Pound the garlic with sea salt in a pestle and mortar (or use a small food processor), until the garlic forms a paste. Whisk together the oil, lemon juice, zest, dill and garlic. Mix in the lamb and combine well. Cover and marinate for at least 2 hrs or overnight in the fridge. If you’re going to use bamboo skewers, soak them in cold water.\r\n\r\nIf you’ve prepared the lamb the previous day, take it out of the fridge 30 mins before cooking. Thread the meat onto the soaked or metal skewers. Heat the grill to high or have a hot griddle pan or barbecue ready. Cook the skewers for 2-3 mins on each side, basting with the remaining marinade. Heat the pitta or flatbreads briefly, then stuff with the souvlaki. Add Greek salad (see 'Goes well with', right) and Tzatziki (below), if you like.",
      image: 'rjhf741585564676.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Garlic',
          measure: '2 cloves',
          id: 1771,
        },
        {
          name: 'Sea Salt',
          measure: '2 tsp',
          id: 1772,
        },
        {
          name: 'Olive Oil',
          measure: '4 tbs',
          id: 1773,
        },
        {
          name: 'Lemon',
          measure: 'Zest and juice of 1',
          id: 1774,
        },
        {
          name: 'Dill',
          measure: '1 tbs',
          id: 1775,
        },
        {
          name: 'Lamb Leg',
          measure: '750g',
          id: 1776,
        },
        {
          name: 'Pita Bread',
          measure: 'To serve',
          id: 1777,
        },
      ],
    },
    {
      id: 165,
      name: 'Lamb Tzatziki Burgers',
      category: 'Lamb',
      instructions:
        'Tip the bulghar into a pan, cover with water and boil for 10 mins. Drain really well in a sieve, pressing out any excess water.\r\n\r\nTo make the tzatziki, squeeze and discard the juice from the cucumber, then mix into the yogurt with the chopped mint and a little salt.\r\n\r\nWork the bulghar into the lamb with the spices, garlic (if using) and seasoning, then shape into 4 burgers. Brush with a little oil and fry or barbecue for about 5 mins each side until cooked all the way through. Serve in the buns (toasted if you like) with the tzatziki, tomatoes, onion and a few mint leaves.',
      image: 'k420tj1585565244.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Bulgur Wheat',
          measure: '25g',
          id: 1778,
        },
        {
          name: 'Lamb Mince',
          measure: '500g',
          id: 1779,
        },
        {
          name: 'Cumin',
          measure: '1 tsp',
          id: 1780,
        },
        {
          name: 'Coriander',
          measure: '1 tsp',
          id: 1781,
        },
        {
          name: 'Paprika',
          measure: '1 tsp',
          id: 1782,
        },
        {
          name: 'Garlic',
          measure: '1 clove finely chopped',
          id: 1783,
        },
        {
          name: 'Olive Oil',
          measure: 'For frying',
          id: 1784,
        },
        {
          name: 'Bun',
          measure: '4',
          id: 1785,
        },
        {
          name: 'Cucumber',
          measure: 'Grated',
          id: 1786,
        },
        {
          name: 'Greek Yogurt',
          measure: '200g',
          id: 1787,
        },
        {
          name: 'Mint',
          measure: '2 tbs',
          id: 1788,
        },
      ],
    },
    {
      id: 166,
      name: 'Lamb Pilaf (Plov)',
      category: 'Lamb',
      instructions:
        'Place the raisins and prunes into a small bowl and pour over enough water to cover. Add lemon juice and let soak for at least 1 hour. Drain. Roughly chop the prunes.\r\n\r\nMeanwhile, heat the butter in a large pan, add the onion, and cook for 5 minutes. Add cubed lamb, ground lamb, and crushed garlic cloves. Fry for 5 minutes, stirring constantly until browned.\r\n\r\nPour 2/3 cup (150 milliliters) of stock into the pan. Bring to a boil, then lower the heat, cover, and simmer for 1 hour, or until the lamb is tender.\r\n\r\nAdd the remaining stock and bring to a boil. Add rinsed long-grain white rice and a large pinch of saffron. Stir, then cover, and simmer for 15 minutes, or until the rice is tender.\r\n\r\nAdd the drained raisins, drained chopped prunes, and salt and pepper to taste. Heat through for a few minutes, then turn out onto a warmed serving dish and garnish with sprigs of flat-leaf parsley.',
      image: 'kos9av1699014767.jpg',
      tags: 'rice',
      ingredients: [
        {
          name: 'Lamb',
          measure: '50g',
          id: 1789,
        },
        {
          name: 'Prunes',
          measure: '120g',
          id: 1790,
        },
        {
          name: 'Lemon Juice',
          measure: '1 tbs',
          id: 1791,
        },
        {
          name: 'Butter',
          measure: '2 tbs',
          id: 1792,
        },
        {
          name: 'Onion',
          measure: '1 chopped',
          id: 1793,
        },
        {
          name: 'Lamb',
          measure: '450g',
          id: 1794,
        },
        {
          name: 'Garlic',
          measure: '2 cloves',
          id: 1795,
        },
        {
          name: 'Vegetable Stock',
          measure: '600ml',
          id: 1796,
        },
        {
          name: 'Rice',
          measure: '2 cups',
          id: 1797,
        },
        {
          name: 'Saffron',
          measure: 'Pinch',
          id: 1798,
        },
        {
          name: 'Parsley',
          measure: 'Garnish',
          id: 1799,
        },
      ],
    },
    {
      id: 167,
      name: 'Mediterranean Pasta Salad',
      category: 'Seafood',
      instructions:
        'Bring a large saucepan of salted water to the boil\r\nAdd the pasta, stir once and cook for about 10 minutes or as directed on the packet.\r\nMeanwhile, wash the tomatoes and cut into quarters. Slice the olives. Wash the basil.\r\nPut the tomatoes into a salad bowl and tear the basil leaves over them. Add a tablespoon of olive oil and mix.\r\nWhen the pasta is ready, drain into a colander and run cold water over it to cool it quickly.\r\nToss the pasta into the salad bowl with the tomatoes and basil.\r\nAdd the sliced olives, drained mozzarella balls, and chunks of tuna. Mix well and let the salad rest for at least half an hour to allow the flavours to mingle.\r\nSprinkle the pasta with a generous grind of black pepper and drizzle with the remaining olive oil just before serving.',
      image: 'wvqpwt1468339226.jpg',
      tags: 'Pasta,Baking',
      ingredients: [
        {
          name: 'mozzarella balls',
          measure: '200 g',
          id: 1800,
        },
        {
          name: 'baby plum tomatoes',
          measure: '250 g',
          id: 1801,
        },
        {
          name: 'fresh basil',
          measure: '1  bunch',
          id: 1802,
        },
        {
          name: 'farfalle',
          measure: '350 g',
          id: 1803,
        },
        {
          name: 'extra virgin olive oil',
          measure: '3  tablespoons',
          id: 1804,
        },
        {
          name: 'Green Olives',
          measure: '40 g',
          id: 1805,
        },
        {
          name: 'tuna',
          measure: '200 g',
          id: 1806,
        },
        {
          name: 'salt',
          measure: 'to taste',
          id: 1807,
        },
        {
          name: 'pepper',
          measure: 'to taste',
          id: 1808,
        },
      ],
    },
    {
      id: 168,
      name: 'Massaman Beef curry',
      category: 'Beef',
      instructions:
        'Heat oven to 200C/180C fan/gas 6, then roast the peanuts on a baking tray for 5 mins until golden brown. When cool enough to handle, roughly chop. Reduce oven to 180C/160C fan/gas 4.\r\nHeat 2 tbsp coconut cream in a large casserole dish with a lid. Add the curry paste and fry for 1 min, then stir in the beef and fry until well coated and sealed. Stir in the rest of the coconut with half a can of water, the potatoes, onion, lime leaves, cinnamon, tamarind, sugar, fish sauce and most of the peanuts. Bring to a simmer, then cover and cook for 2 hrs in the oven until the beef is tender.\r\nSprinkle with sliced chilli and the remaining peanuts, then serve straight from the dish with jasmine rice.',
      image: 'tvttqv1504640475.jpg',
      tags: 'Curry',
      ingredients: [
        {
          name: 'Peanuts',
          measure: '85g',
          id: 1809,
        },
        {
          name: 'Coconut cream',
          measure: '400ml can',
          id: 1810,
        },
        {
          name: 'Massaman curry paste',
          measure: '4 tbsp',
          id: 1811,
        },
        {
          name: 'Beef',
          measure: '600g stewing cut into strips',
          id: 1812,
        },
        {
          name: 'Potatoes',
          measure: '450g waxy',
          id: 1813,
        },
        {
          name: 'Onion',
          measure: '1 cut thin wedges',
          id: 1814,
        },
        {
          name: 'Lime',
          measure: '4 leaves',
          id: 1815,
        },
        {
          name: 'Cinnamon stick',
          measure: '1',
          id: 1816,
        },
        {
          name: 'Tamarind paste',
          measure: '1 tbsp',
          id: 1817,
        },
        {
          name: 'Brown sugar',
          measure: '1 tbsp palm or soft light',
          id: 1818,
        },
        {
          name: 'Fish Sauce',
          measure: '1 tbsp',
          id: 1819,
        },
        {
          name: 'chilli',
          measure: '1 red deseeded and finely sliced, to serve',
          id: 1820,
        },
        {
          name: 'Jasmine Rice',
          measure: 'to serve',
          id: 1821,
        },
      ],
    },
    {
      id: 169,
      name: 'Mushroom & Chestnut Rotolo',
      category: 'Vegetarian',
      instructions:
        'Soak the dried mushrooms in 350ml boiling water and set aside until needed. Blitz ¾ of the chestnuts with 150ml water until creamy. Roughly chop the remaining chestnuts.\r\nHeat 2 tbsp olive oil in a large non-stick frying pan. Fry the shallots with a pinch of salt until softened, then add the garlic, chopped chestnuts and rosemary, and fry for 2 mins more. Add the wild mushrooms, 2 tbsp oil and some seasoning. Cook for 3 mins until they begin to soften. Drain and roughly chop the dried mushrooms (reserve the soaking liquid), then add those too, along with the soy sauce, and fry for 2 mins more.\r\nWhisk the wine, reserved mushroom liquid and chestnut cream together to create a sauce. Season, then add half to the mushroom mixture in the pan and cook for 1 min until the sauce becomes glossy. Remove and discard the rosemary sprigs, then set the mixture aside.\r\nHeat oven to 180C/160C fan/gas 4. Bring a large pan of salted water to the boil and get a large bowl of ice water ready. Drop the lasagne sheets into the boiling water for 2 mins or until pliable and a little cooked, then immediately plunge them into the cold water. Using your fingers, carefully separate the sheets and transfer to a clean tea towel. Spread a good spoonful of the sauce on the bottom two thirds of each sheet, then, rolling away from yourself, roll up the shorter ends. Cut each roll in half, then position the rolls of pasta cut-side up in a pie dish that you are happy to serve from at the table. If you have any mushroom sauce remaining after you’ve rolled up all the sheets, simply push it into some of the exposed rolls of pasta.\r\nPour the rest of the sauce over the top of the pasta, then bake for 10 mins or until the pasta no longer has any resistance when tested with a skewer.\r\nMeanwhile, put the breadcrumbs, the last 2 tbsp olive oil, sage leaves and some seasoning in a bowl, and toss everything together. Scatter the rotolo with the crumbs and sage, then bake for another 10 mins, until the top is golden and the sage leaves are crispy. Leave to cool for 10 mins to allow the pasta to absorb the sauce, then drizzle with a little truffle oil, if you like, before taking your dish to the table.',
      image: 'ssyqwr1511451678.jpg',
      tags: 'Vegetarian,Nutty',
      ingredients: [
        {
          name: 'Mushrooms',
          measure: '30g',
          id: 1822,
        },
        {
          name: 'Chestnuts',
          measure: '240g',
          id: 1823,
        },
        {
          name: 'Challots',
          measure: '3',
          id: 1824,
        },
        {
          name: 'Garlic',
          measure: '3 cloves',
          id: 1825,
        },
        {
          name: 'Rosemary',
          measure: '3 sprigs',
          id: 1826,
        },
        {
          name: 'Wild Mushrooms',
          measure: '500g',
          id: 1827,
        },
        {
          name: 'Soy Sauce',
          measure: '2 tblsp',
          id: 1828,
        },
        {
          name: 'White Wine',
          measure: '125ml',
          id: 1829,
        },
        {
          name: 'Lasagne Sheets',
          measure: '350g',
          id: 1830,
        },
        {
          name: 'Breadcrumbs',
          measure: '4 tbsp',
          id: 1831,
        },
        {
          name: 'Sage',
          measure: '1/2 handful',
          id: 1832,
        },
        {
          name: 'Truffle Oil',
          measure: 'to serve',
          id: 1833,
        },
      ],
    },
    {
      id: 170,
      name: 'Matar Paneer',
      category: 'Vegetarian',
      instructions:
        'Heat the oil in a frying pan over high heat until it’s shimmering hot. Add the paneer, then turn the heat down a little. Fry until it starts to brown at the edges, then turn it over and brown on each side – the paneer will brown faster than you think, so don’t walk away. Remove the paneer from the pan and drain on kitchen paper.\r\nPut the ginger, cumin, turmeric, ground coriander and chilli in the pan, and fry everything for 1 min. Add the tomatoes, mashing them with the back of a spoon and simmer everything for 5 mins until the sauce smells fragrant. Add a splash of water if it’s too thick. Season well. Add the peas and simmer for a further 2 mins, then stir in the paneer and sprinkle over the garam masala. Divide between two bowls, top with coriander leaves and serve with naan bread, roti or rice.',
      image: 'xxpqsy1511452222.jpg',
      tags: 'Curry,Vegetarian',
      ingredients: [
        {
          name: 'Sunflower Oil',
          measure: '1 tbls',
          id: 1834,
        },
        {
          name: 'Paneer',
          measure: '225g',
          id: 1835,
        },
        {
          name: 'Ginger',
          measure: '2',
          id: 1836,
        },
        {
          name: 'Cumin',
          measure: '1 tsp',
          id: 1837,
        },
        {
          name: 'Turmeric',
          measure: '1 tsp',
          id: 1838,
        },
        {
          name: 'Coriander',
          measure: '1 tsp',
          id: 1839,
        },
        {
          name: 'Green Chilli',
          measure: '1',
          id: 1840,
        },
        {
          name: 'Tomato',
          measure: '4 large',
          id: 1841,
        },
        {
          name: 'Peas',
          measure: '150g',
          id: 1842,
        },
        {
          name: 'Garam Masala',
          measure: '1 tsp',
          id: 1843,
        },
        {
          name: 'Coriander',
          measure: 'Small bunch',
          id: 1844,
        },
        {
          name: 'Naan Bread',
          measure: 'to serve',
          id: 1845,
        },
      ],
    },
    {
      id: 171,
      name: 'Minced Beef Pie',
      category: 'Beef',
      instructions:
        'Preheat the oven to 200C/400F/Gas 6.\r\nHeat the oil in a deep frying pan and fry the beef mince for 4-5 minutes, breaking it up with a wooden spoon as it browns.\r\nAdd the onion and cook for 2-3 minutes, then stir in the tomato purée and cook for 2-3 more minutes. Stir in the flour and cook for a further minute, then add the chopped mushrooms, the stout or beef stock and a couple of dashes of Worcestershire sauce. Bring to the boil, then reduce the heat, cover the pan with a lid and leave to simmer for 20 minutes. Set aside and leave to cool, then turn the meat mixture into a one litre pie dish.\r\nRoll out the pastry on a floured work surface until it is slightly larger than the pie dish. Gently drape the pastry over the dish, pressing firmly onto the edges. Trim, then shape the edges into a fluted shape.\r\nCut some leaf shapes out of the pastry trimmings and decorate the top of the pie, sticking them to the pastry with the beaten egg yolk.\r\nMake three or four slits in the pastry to allow the steam to escape, then brush the pie with the rest of the beaten egg yolk and bake in the oven for 20-25 minutes, or until golden-brown.\r\nTo serve, slice into wedges.',
      image: 'xwutvy1511555540.jpg',
      tags: 'Pie,Meat',
      ingredients: [
        {
          name: 'Vegetable Oil',
          measure: '2 tbs',
          id: 1846,
        },
        {
          name: 'Minced Beef',
          measure: '500g',
          id: 1847,
        },
        {
          name: 'Onion',
          measure: '1 chopped',
          id: 1848,
        },
        {
          name: 'Tomato Puree',
          measure: '1 tbls',
          id: 1849,
        },
        {
          name: 'Plain Flour',
          measure: '1 ½ tbsp',
          id: 1850,
        },
        {
          name: 'Mushrooms',
          measure: '75g',
          id: 1851,
        },
        {
          name: 'Beef Stock',
          measure: '250ml',
          id: 1852,
        },
        {
          name: 'Worcestershire Sauce',
          measure: 'Dash',
          id: 1853,
        },
        {
          name: 'Shortcrust Pastry',
          measure: '400g',
          id: 1854,
        },
        {
          name: 'Egg Yolks',
          measure: '1',
          id: 1855,
        },
      ],
    },
    {
      id: 172,
      name: 'McSinghs Scotch pie',
      category: 'Lamb',
      instructions:
        'Heat a large frying pan and toast the cumin seeds for a few minutes, then set aside. Heat the oil in the same pan and fry the onion, garlic, chilli, pepper and a good pinch of salt for around eight minutes, until there is no moisture left. Remove from the heat, stir in the toasted cumin seeds, ground mace (or nutmeg) and ground coriander. Leave to cool.\r\nIn a large bowl mix together the minced lamb, white pepper, fresh coriander, and the cooled spiced onion mixture until combined. Set aside, covered, in the fridge.\r\nPreheat the oven to 200C/400F/Gas 6 and generously grease a 20cm/8in diameter loose-bottomed or springform round cake tin with lard.\r\nTo make the pastry, sift the flour and salt in a large bowl and make a well in the centre.\r\nPut the milk, lard and 90ml/3fl oz of water in a saucepan and heat gently. When the lard has melted, increase the heat and bring to the boil.\r\nPour the boiling liquid into the flour, and use a wooden spoon to combine until cool enough to handle. Bring together into a ball.\r\nDust a work surface with flour and, working quickly, knead the dough briefly – it will be soft and moist. Set aside a third of the pastry and roll the rest out on a well-floured surface. Line the pie dish with the pastry, pressing it right up the sides until it pokes just over the top of the tin.\r\nAdd the filling into the pastry-lined tin bit by bit. As you reach the top, form a slight peak. Roll out the reserved pastry and top the pie with it. Pinch the edges to seal and trim the excess. Poke a hole in the top of the pie and insert a small tube made from aluminium foil to allow steam to escape.\r\nBrush the top of the pie with a little beaten egg yolk, and bake in the preheated oven for 30 minutes (put a tray on the shelf below to catch any drips). Then reduce the temperature to 160C/325F/Gas 3 and cook for a further 1¼ hours until golden-brown. Leave to cool completely before refrigerating for two hours, or overnight.\r\nRun a knife around the edge of the pie, remove from the tin and serve with chutneys, salads or pickles.',
      image: 'vssrtx1511557680.jpg',
      tags: 'Pie',
      ingredients: [
        {
          name: 'Cumin',
          measure: '2 tsp',
          id: 1856,
        },
        {
          name: 'Rapeseed Oil',
          measure: '1 tbs',
          id: 1857,
        },
        {
          name: 'Red Onions',
          measure: '2 finely chopped',
          id: 1858,
        },
        {
          name: 'Garlic Clove',
          measure: '6',
          id: 1859,
        },
        {
          name: 'Green Chilli',
          measure: '3 finely chopped',
          id: 1860,
        },
        {
          name: 'Red Pepper',
          measure: '1 finely chopped',
          id: 1861,
        },
        {
          name: 'Nutmeg',
          measure: '1 tsp',
          id: 1862,
        },
        {
          name: 'Coriander',
          measure: '2 tsp',
          id: 1863,
        },
        {
          name: 'Lamb Mince',
          measure: '1kg',
          id: 1864,
        },
        {
          name: 'Pepper',
          measure: '1 tsp',
          id: 1865,
        },
        {
          name: 'Coriander',
          measure: '3 tbs',
          id: 1866,
        },
        {
          name: 'Plain Flour',
          measure: '340g',
          id: 1867,
        },
        {
          name: 'Salt',
          measure: '½ tsp',
          id: 1868,
        },
        {
          name: 'Milk',
          measure: '90 ml',
          id: 1869,
        },
        {
          name: 'Lard',
          measure: '150g',
          id: 1870,
        },
        {
          name: 'Egg Yolks',
          measure: 'Beaten',
          id: 1871,
        },
      ],
    },
    {
      id: 173,
      name: 'Madeira Cake',
      category: 'Dessert',
      instructions:
        'Pre-heat the oven to 180C/350F/Gas 4. Grease an 18cm/7in round cake tin, line the base with greaseproof paper and grease the paper.\r\nCream the butter and sugar together in a bowl until pale and fluffy. Beat in the eggs, one at a time, beating the mixture well between each one and adding a tablespoon of the flour with the last egg to prevent the mixture curdling.\r\nSift the flour and gently fold in, with enough milk to give a mixture that falls slowly from the spoon. Fold in the lemon zest.\r\nSpoon the mixture into the prepared tin and lightly level the top. Bake on the middle shelf of the oven for 30-40 minutes, or until golden-brown on top and a skewer inserted into the centre comes out clean.\r\nRemove from the oven and set aside to cool in the tin for 10 minutes, then turn it out on to a wire rack and leave to cool completely.\r\nTo serve, decorate the cake with the candied peel.',
      image: 'urtqut1511723591.jpg',
      tags: 'Cake,Light,Baking,Desert',
      ingredients: [
        {
          name: 'Butter',
          measure: '175g',
          id: 1872,
        },
        {
          name: 'Caster Sugar',
          measure: '175g',
          id: 1873,
        },
        {
          name: 'Eggs',
          measure: '3',
          id: 1874,
        },
        {
          name: 'Self-raising Flour',
          measure: '250g',
          id: 1875,
        },
        {
          name: 'Milk',
          measure: '3 tbs',
          id: 1876,
        },
        {
          name: 'Lemon',
          measure: 'Zest of 1',
          id: 1877,
        },
        {
          name: 'Mixed Peel',
          measure: 'To Glaze',
          id: 1878,
        },
      ],
    },
    {
      id: 174,
      name: 'Montreal Smoked Meat',
      category: 'Beef',
      instructions:
        'To make the cure, in a small bowl mix together salt, pink salt, black pepper, coriander, sugar, bay leaf, and cloves. Coat entire brisket with the cure and place in an extra-large resealable plastic bag. Place in the coldest part of the refrigerator and cure for 4 days, flipping brisket twice a day.\r\nRemove brisket from bag and wash as much cure off as possible under cold running water. Place brisket in a large container and fill with water and let soak for 2 hours, replacing water every 30 minutes. Remove from water and pat dry with paper towels.\r\nTo make the rub, mix together black pepper, coriander, paprika, garlic powder, onion powder, dill weed, mustard, celery seed, and crushed red papper in a small bowl. Coat entire brisket with the rub.\r\nFire up smoker or grill to 225 degrees, adding chunks of smoking wood chunks when at temperature. When wood is ignited and producing smoke, place brisket in, fat side up, and smoke until an instant read thermometer registers 165 degrees when inserted into thickest part of the brisket, about 6 hours.\r\nTransfer brisket to large roasting pan with V-rack. Place roasting pan over two burners on stovetop and fill with 1-inch of water. Bring water to a boil over high heat, reduce heat to medium, cover roasting pan with aluminum foil, and steam brisket until an instant read thermometer registers 180 degrees when inserted into thickest part of the meat, 1 to 2 hours, adding more hot water as needed.\r\nTransfer brisket to cutting board and let cool slightly. Slice and serve, preferably on rye with mustard.',
      image: 'uttupv1511815050.jpg',
      tags: 'Speciality,Snack,StrongFlavor',
      ingredients: [
        {
          name: 'Beef Brisket',
          measure: '1',
          id: 1879,
        },
        {
          name: 'Salt',
          measure: '3 tbs',
          id: 1880,
        },
        {
          name: 'Black Pepper',
          measure: '3 tbs',
          id: 1881,
        },
        {
          name: 'Coriander',
          measure: '1 tbs',
          id: 1882,
        },
        {
          name: 'Sugar',
          measure: '1 tbs',
          id: 1883,
        },
        {
          name: 'Bay Leaf',
          measure: '1 tsp',
          id: 1884,
        },
        {
          name: 'Cloves',
          measure: '1 tsp',
          id: 1885,
        },
        {
          name: 'Black Pepper',
          measure: '3 tbs',
          id: 1886,
        },
        {
          name: 'Coriander',
          measure: '1 tbs',
          id: 1887,
        },
        {
          name: 'Paprika',
          measure: '1 tbs',
          id: 1888,
        },
        {
          name: 'Garlic',
          measure: '1 tbs',
          id: 1889,
        },
        {
          name: 'Onion',
          measure: '1 tbs',
          id: 1890,
        },
        {
          name: 'Dill',
          measure: '1 tbs',
          id: 1891,
        },
        {
          name: 'English Mustard',
          measure: '1 tsp',
          id: 1892,
        },
        {
          name: 'Celery Salt',
          measure: '1 tbs',
          id: 1893,
        },
        {
          name: 'Red Pepper Flakes',
          measure: '1 tsp',
          id: 1894,
        },
      ],
    },
    {
      id: 175,
      name: 'Ma Po Tofu',
      category: 'Beef',
      instructions:
        'Add a small pinch of salt and sesame oil to minced beef. Mix well and set aside.\r\nMix 1 tablespoon of cornstarch with 2 and ½ tablespoons of water in a small bowl to make water starch.\r\nCut tofu into square cubes (around 2cms). Bring a large amount of water to a boil and then add a pinch of salt. Slide the tofu in and cook for 1 minute. Move out and drain.\r\nGet a wok and heat up around 2 tablespoons of oil, fry the minced meat until crispy. Transfer out beef out and leave the oil in.\r\nFry doubanjiang for 1 minute over slow fire and then add garlic, scallion white, ginger and fermented black beans to cook for 30 seconds until aroma. Then mix pepper flakes in.\r\nAdd water to the seasonings and bring to boil over high fire. Gently slide the tofu cubes. Add light soy sauce and beef.Slow the heat after boiling and then simmer for 6-8 minutes. Then add chopped garlic greens.\r\nStir the water starch and then pour half of the mixture to the simmering pot. Wait for around 30 seconds and then pour the other half. You can slightly taste the tofu and add pinch of salt if not salty enough. By the way, if you feel it is too spicy, add some sugar can milder the taste. But be carefully as the broth is very hot at this point.\r\nTransfer out when almost all the seasonings stick to tofu cubes. Sprinkle Szechuan peppercorn powder (to taste)and chopped garlic greens if using.\r\nServe immediately with steamed rice.',
      image: '1525874812.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Tofu',
          measure: '450g',
          id: 1895,
        },
        {
          name: 'Minced Beef',
          measure: '100g',
          id: 1896,
        },
        {
          name: 'Sesame Seed Oil',
          measure: '1/2 tbs',
          id: 1897,
        },
        {
          name: 'Doubanjiang',
          measure: '1 1/2 tsp',
          id: 1898,
        },
        {
          name: 'Fermented Black Beans',
          measure: '1/2 tsp',
          id: 1899,
        },
        {
          name: 'Pepper',
          measure: '1 tbs',
          id: 1900,
        },
        {
          name: 'Salt',
          measure: '1/2 tsp',
          id: 1901,
        },
        {
          name: 'Sichuan pepper',
          measure: '1/2 tsp',
          id: 1902,
        },
        {
          name: 'Soy Sauce',
          measure: '1 tbs',
          id: 1903,
        },
        {
          name: 'Water',
          measure: '400ml',
          id: 1904,
        },
        {
          name: 'Olive Oil',
          measure: '2 tbs',
          id: 1905,
        },
        {
          name: 'Scallions',
          measure: '2 chopped',
          id: 1906,
        },
        {
          name: 'Spring Onions',
          measure: '4',
          id: 1907,
        },
        {
          name: 'Garlic',
          measure: '2 cloves chopped',
          id: 1908,
        },
        {
          name: 'Ginger',
          measure: '4 sliced',
          id: 1909,
        },
        {
          name: 'Water',
          measure: '2 1/2 tbs',
          id: 1910,
        },
        {
          name: 'Cornstarch',
          measure: '1 tbs',
          id: 1911,
        },
      ],
    },
    {
      id: 176,
      name: 'Mbuzi Choma (Roasted Goat)',
      category: 'Goat',
      instructions:
        '1. Steps for the Meat: \r\n Roast meat over medium heat for 50 minutes and salt it as you turn it.\r\n\r\n2. Steps for Ugali:\r\nBring the water and salt to a boil in a heavy-bottomed saucepan. Stir in the cornmeal slowly, letting it fall through the fingers of your hand.\r\n\r\n3. Reduce heat to medium-low and continue stirring regularly, smashing any lumps with a spoon, until the mush pulls away from the sides of the pot and becomes very thick, about 10 minutes.\r\n\r\n4.Remove from heat and allow to cool.\r\n\r\n5. Place the ugali into a large serving bowl. Wet your hands with water, form a ball and serve.\r\n\r\n6. Steps for Kachumbari: Mix the tomatoes, onions, chili and coriander leaves in a bowl.\r\n\r\n7. Serve and enjoy!\r\n\r\n',
      image: 'cuio7s1555492979.jpg',
      tags: 'BBQ,Meat',
      ingredients: [
        {
          name: 'Goat Meat',
          measure: '1 kg',
          id: 1912,
        },
        {
          name: 'Corn Flour',
          measure: '1 kg',
          id: 1913,
        },
        {
          name: 'Tomatoes',
          measure: '2',
          id: 1914,
        },
        {
          name: 'Salt',
          measure: 'Pinch',
          id: 1915,
        },
        {
          name: 'Onion',
          measure: '1',
          id: 1916,
        },
        {
          name: 'Green Chilli',
          measure: '1',
          id: 1917,
        },
        {
          name: 'Coriander Leaves',
          measure: '1  bunch',
          id: 1918,
        },
      ],
    },
    {
      id: 177,
      name: 'Mince Pies',
      category: 'Dessert',
      instructions:
        'To make the pastry, rub 225g cold, diced butter into 350g plain flour, then mix in 100g golden caster sugar and a pinch of salt.\r\n\r\nCombine the pastry into a ball – don’t add liquid – and knead it briefly. The dough will be fairly firm, like shortbread dough. You can use the dough immediately, or chill for later.\r\n\r\nPreheat the oven to 200C/gas 6/fan 180C. Line 18 holes of two 12-hole patty tins, by pressing small walnut-sized balls of pastry into each hole.\r\n\r\nSpoon 280g mincemeat into the pies.\r\n\r\nTake slightly smaller balls of pastry than before and pat them out between your hands to make round lids, big enough to cover the pies. \r\n\r\nTop the pies with their lids, pressing the edges gently together to seal – you don’t need to seal them with milk or egg as they will stick on their own. (The pies may now be frozen for up to 1 month).\r\n\r\nBeat 1 small egg and brush the tops of the pies. Bake for 20 mins until golden. Leave to cool in the tin for 5 mins, then remove to a wire rack.\r\n\r\nTo serve, lightly dust with icing sugar.',
      image: 'qe8pf51576795532.jpg',
      tags: 'Christmas',
      ingredients: [
        {
          name: 'Butter',
          measure: '225g',
          id: 1919,
        },
        {
          name: 'Plain Flour',
          measure: '350g',
          id: 1920,
        },
        {
          name: 'Caster Sugar',
          measure: '100g',
          id: 1921,
        },
        {
          name: 'Mincemeat',
          measure: '280g',
          id: 1922,
        },
        {
          name: 'Egg',
          measure: '1 small',
          id: 1923,
        },
        {
          name: 'Icing Sugar',
          measure: 'Topping',
          id: 1924,
        },
      ],
    },
    {
      id: 178,
      name: 'Moussaka',
      category: 'Beef',
      instructions:
        'Heat the grill to high. Brown the beef in a deep ovenproof frying pan over a high heat for 5 mins. Meanwhile, prick the aubergine with a fork, then microwave on High for 3-5 mins until soft. Mix the yogurt, egg and parmesan together, then add a little seasoning.\r\n\r\nStir the tomatoes, purée and potatoes in with the beef with some seasoning and heat through. Smooth the surface of the beef mixture with the back of a spoon, then slice the cooked aubergine and arrange on top. Pour the yogurt mixture over the aubergines, smooth out evenly, then grill until the topping has set and turned golden.',
      image: 'ctg8jd1585563097.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Beef',
          measure: '500g',
          id: 1925,
        },
        {
          name: 'Aubergine',
          measure: '1 large',
          id: 1926,
        },
        {
          name: 'Greek Yogurt',
          measure: '150g',
          id: 1927,
        },
        {
          name: 'Egg',
          measure: '1 beaten',
          id: 1928,
        },
        {
          name: 'Parmesan',
          measure: '3 tbs',
          id: 1929,
        },
        {
          name: 'Tomato',
          measure: '400g',
          id: 1930,
        },
        {
          name: 'Tomato Puree',
          measure: '4 tbs',
          id: 1931,
        },
        {
          name: 'Potatoes',
          measure: '350g',
          id: 1932,
        },
      ],
    },
    {
      id: 179,
      name: 'Mulukhiyah',
      category: 'Beef',
      instructions:
        'Saute the onions in the 3-4 tablespoons olive oil\r\nAdd the beef cubes or the chicken cutlets, sear for 3-4 min on each side\r\nAdd 1 liter of water or just enough to cover the meat\r\nCook over medium heat until the meat is done (I usually do this in the pressure cooker and press them for 5 min)\r\n\r\nAdd the frozen mulukhyia and stir until it thaws completely and then comes to a boil\r\n\r\nIn another pan add the 1/4 to 1/2 cup of olive oil and the cloves of garlic and cook over medium low heat until you can smell the garlic (don’t brown it, it will become bitter)\r\n\r\nAdd the oil and garlic to the mulukhyia and lower the heat and simmer for 5-10 minutes\r\nAdd salt to taste\r\n\r\nServe with a generous amount of lemon juice.\r\n\r\nYou can serve it with some short grain rice or some pita bread',
      image: 'x372ug1598733932.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Mulukhiyah',
          measure: '800g',
          id: 1933,
        },
        {
          name: 'Onion',
          measure: '1 chopped',
          id: 1934,
        },
        {
          name: 'Beef',
          measure: '300g',
          id: 1935,
        },
        {
          name: 'Salt',
          measure: '1 tsp',
          id: 1936,
        },
        {
          name: 'Water',
          measure: '1 Litre',
          id: 1937,
        },
        {
          name: 'Garlic Clove',
          measure: '1',
          id: 1938,
        },
        {
          name: 'Olive Oil',
          measure: '1/2 cup',
          id: 1939,
        },
      ],
    },
    {
      id: 180,
      name: 'Mustard champ',
      category: 'Side',
      instructions:
        'STEP 1\r\nBoil the potatoes for 15 mins or until tender. Drain, then mash.\r\n\r\nSTEP 2\r\nHeat the milk and half the butter in the corner of the pan, then beat into the mash, along with the wholegrain mustard.\r\n\r\nSTEP 3\r\nGently fry the spring onions in the remaining butter for 2 mins until just soft but still a perky green. Fold into the mash and serve. Great with gammon or to top a fish pie.',
      image: 'o7p9581608589317.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Potatoes',
          measure: '1kg',
          id: 1940,
        },
        {
          name: 'Milk',
          measure: '200ml',
          id: 1941,
        },
        {
          name: 'Butter',
          measure: '50g',
          id: 1942,
        },
        {
          name: 'Mustard',
          measure: '2 tbs',
          id: 1943,
        },
        {
          name: 'Spring Onions',
          measure: 'Bunch',
          id: 1944,
        },
        {
          name: 'Spring Onions',
          measure: 'Bunch',
          id: 1945,
        },
      ],
    },
    {
      id: 181,
      name: 'Moroccan Carrot Soup',
      category: 'Vegetarian',
      instructions:
        'Step 1\r\nPreheat oven to 180° C.\r\nStep 2\r\nCombine carrots, onion, garlic, cumin seeds, coriander seeds, salt and olive oil in a bowl and mix well. Transfer on a baking tray.\r\nStep 3\r\nPut the baking tray in preheated oven and roast for 10-12 minutes or till carrots soften. Remove from heat and cool.\r\nStep 4\r\nGrind the baked carrot mixture along with some water to make a smooth paste and strain in a bowl.\r\nStep 5\r\nHeat the carrot mixture in a non-stick pan. Add two cups of water and bring to a boil. Add garam masala powder and mix. Add salt and mix well.\r\nStep 6\r\nRemove from heat, add lemon juice and mix well.\r\nStep 7\r\nServe hot.',
      image: 'jcr46d1614763831.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Carrots',
          measure: '6 chopped',
          id: 1946,
        },
        {
          name: 'Onion',
          measure: '1 sliced',
          id: 1947,
        },
        {
          name: 'Garlic Clove',
          measure: '4',
          id: 1948,
        },
        {
          name: 'Cumin',
          measure: '1 tsp',
          id: 1949,
        },
        {
          name: 'Coriander',
          measure: '1/2 tsp',
          id: 1950,
        },
        {
          name: 'Olive Oil',
          measure: '1 tbs',
          id: 1951,
        },
        {
          name: 'Garam Masala',
          measure: '1/4 tsp',
          id: 1952,
        },
        {
          name: 'Lemon Juice',
          measure: '1 tsp',
          id: 1953,
        },
      ],
    },
    {
      id: 182,
      name: 'Mee goreng mamak',
      category: 'Seafood',
      instructions:
        'Heat oil in a pan at medium heat. Then, add peanuts, dried chilies, dried shrimps and dhal. Fry the aromatics until fragrant. Remove from pan and leave aside.\r\n\r\nBlend fried ingredients with tamarind paste and water until fine. Then, sauté the blended ingredients in oil heated over low heat. Continue cooking until the oil separates from the paste and turns a darker shade.\r\n\r\nSkin and cut potatoes into small chunks and boil them in a pot of water until knife-tender. Once ready, remove them from the pot and leave aside. Discard water.\r\n\r\nSlice onion and fried tofu, mince garlic, cut some cabbage and Chinese flowering cabbage (choi sam). Prepare prawn fritters and cut them. Boil noodles to soften them if bought dried. Also mix black soy sauce with water.\r\n\r\nTo fry one portion of mee goreng mamak, heat oil and add 1/4 of the following ingredients in this order: garlic, onion, paste. Sauté until fragrant. Optionally, add prawns.\r\n\r\nAdd in 1/4 amount of tofu, boiled potatoes, cabbage, Chinese flowering cabbage and prawn fritters. Sauté for another 30 seconds.\r\n\r\nAdd noodles to the wok. Add 3 tablespoons of dark soy sauce mixture. Mix evenly for the next 1 minute. Then, move the noodles to the side of the wok. Stir in an egg. Garnish with a slice of lime and slices of green chilies. To cook another plate of noodles, repeat from step 5 onwards.',
      image: 'xquakq1619787532.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Peanuts',
          measure: '50g',
          id: 1954,
        },
        {
          name: 'Chilli',
          measure: '15g',
          id: 1955,
        },
        {
          name: 'Prawns',
          measure: '10g',
          id: 1956,
        },
        {
          name: 'Oil',
          measure: '5 tbs',
          id: 1957,
        },
        {
          name: 'Water',
          measure: '750 ml',
          id: 1958,
        },
        {
          name: 'Tamarind Paste',
          measure: '1/2 tbs',
          id: 1959,
        },
        {
          name: 'Potatoes',
          measure: '250g',
          id: 1960,
        },
        {
          name: 'Red Onions',
          measure: '2',
          id: 1961,
        },
        {
          name: 'Garlic Clove',
          measure: '4',
          id: 1962,
        },
        {
          name: 'Cabbage',
          measure: '30g',
          id: 1963,
        },
        {
          name: 'Chinese Broccoli',
          measure: '30g',
          id: 1964,
        },
        {
          name: 'Tofu',
          measure: '1',
          id: 1965,
        },
        {
          name: 'Soy Sauce',
          measure: '1 tbs',
          id: 1966,
        },
        {
          name: 'Noodles',
          measure: '4',
          id: 1967,
        },
        {
          name: 'Egg',
          measure: '1',
          id: 1968,
        },
      ],
    },
    {
      id: 183,
      name: 'Mushroom soup with buckwheat',
      category: 'Side',
      instructions:
        'Chop the onion and garlic, slice the mushrooms and wash the buckwheat. Heat the oil and lightly sauté the onion. Add the mushrooms and the garlic and continue to sauté. Add the salt, vegetable seasoning, buckwheat and the bay leaf and cover with water. Simmer gently and just before it is completely cooked, add pepper, sour cream mixed with flour, the chopped parsley and vinegar to taste.',
      image: '1ngcbf1628770793.jpg',
      tags: 'Warming, Soup',
      ingredients: [
        {
          name: 'Mushrooms',
          measure: '150g',
          id: 1969,
        },
        {
          name: 'Buckwheat',
          measure: '50g',
          id: 1970,
        },
        {
          name: 'Vegetable Oil',
          measure: '4 tbs',
          id: 1971,
        },
        {
          name: 'Onion',
          measure: '40g',
          id: 1972,
        },
        {
          name: 'Garlic',
          measure: '2 cloves',
          id: 1973,
        },
        {
          name: 'Bay Leaf',
          measure: '1',
          id: 1974,
        },
        {
          name: 'Vegetable Stock Cube',
          measure: '1tbsp',
          id: 1975,
        },
        {
          name: 'Sour Cream',
          measure: '50 ml',
          id: 1976,
        },
        {
          name: 'White Wine Vinegar',
          measure: 'Dash',
          id: 1977,
        },
        {
          name: 'Parsley',
          measure: 'Top',
          id: 1978,
        },
      ],
    },
    {
      id: 184,
      name: 'Nutty Chicken Curry',
      category: 'Chicken',
      instructions:
        'Finely slice a quarter of the chilli, then put the rest in a food processor with the ginger, garlic, coriander stalks and one-third of the leaves. Whizz to a rough paste with a splash of water if needed.\r\nHeat the oil in a frying pan, then quickly brown the chicken chunks for 1 min. Stir in the paste for another min, then add the peanut butter, stock and yogurt. When the sauce is gently bubbling, cook for 10 mins until the chicken is just cooked through and sauce thickened. Stir in most of the remaining coriander, then scatter the rest on top with the chilli, if using. Eat with rice or mashed sweet potato.',
      image: 'yxsurp1511304301.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Red Chilli',
          measure: '1 large',
          id: 1979,
        },
        {
          name: 'Ginger',
          measure: '0.5',
          id: 1980,
        },
        {
          name: 'Garlic',
          measure: '1 large',
          id: 1981,
        },
        {
          name: 'Coriander',
          measure: 'Bunch',
          id: 1982,
        },
        {
          name: 'Sunflower Oil',
          measure: '1 tbsp',
          id: 1983,
        },
        {
          name: 'Chicken Breasts',
          measure: '4',
          id: 1984,
        },
        {
          name: 'Peanut Butter',
          measure: '5 tblsp',
          id: 1985,
        },
        {
          name: 'Chicken Stock',
          measure: '150ml',
          id: 1986,
        },
        {
          name: 'Greek Yogurt',
          measure: '200g',
          id: 1987,
        },
      ],
    },
    {
      id: 185,
      name: 'New York cheesecake',
      category: 'Dessert',
      instructions:
        "Position an oven shelf in the middle of the oven. Preheat the oven to fan 160C/conventional 180C/gas 4. Line the base of a 23cm springform cake tin with parchment paper. For the crust, melt the butter in a medium pan. Stir in the biscuit crumbs and sugar so the mixture is evenly moistened. Press the mixture into the bottom of the pan and bake for 10 minutes. Cool on a wire rack while preparing the filling.\r\nFor the filling, increase the oven temperature to fan 200C/conventional 240C/gas 9. In a table top mixer fitted with the paddle attachment, beat the soft cheese at medium-low speed until creamy, about 2 minutes. With the mixer on low, gradually add the sugar, then the flour and a pinch of salt, scraping down the sides of the bowl and the paddle twice.\r\nSwap the paddle attachment for the whisk. Continue by adding the vanilla, lemon zest and juice. Whisk in the eggs and yolk, one at a time, scraping the bowl and whisk at least twice. Stir the 284ml carton of soured cream until smooth, then measure 200ml/7fl oz (just over 3⁄4 of the carton). Continue on low speed as you add the measured soured cream (reserve the rest). Whisk to blend, but don't over-beat. The batter should be smooth, light and somewhat airy.\r\nBrush the sides of the springform tin with melted butter and put on a baking sheet. Pour in the filling - if there are any lumps, sink them using a knife - the top should be as smooth as possible. Bake for 10 minutes. Reduce oven temperature to fan 90C/conventional 110C/gas 1⁄4 and bake for 25 minutes more. If you gently shake the tin, the filling should have a slight wobble. Turn off the oven and open the oven door for a cheesecake that's creamy in the centre, or leave it closed if you prefer a drier texture. Let cool in the oven for 2 hours. The cheesecake may get a slight crack on top as it cools.\r\nCombine the reserved soured cream with the 142ml carton, the sugar and lemon juice for the topping. Spread over the cheesecake right to the edges. Cover loosely with foil and refrigerate for at least 8 hours or overnight.\r\nRun a round-bladed knife around the sides of the tin to loosen any stuck edges. Unlock the side, slide the cheesecake off the bottom of the tin onto a plate, then slide the parchment paper out from underneath.",
      image: 'swttys1511385853.jpg',
      tags: 'Desert,Dairy,Pudding,Cake,Breakfast',
      ingredients: [
        {
          name: 'Butter',
          measure: '85g',
          id: 1988,
        },
        {
          name: 'Sour Cream',
          measure: '140g',
          id: 1989,
        },
        {
          name: 'Sugar',
          measure: '1tbsp',
          id: 1990,
        },
        {
          name: 'Cream Cheese',
          measure: '900g',
          id: 1991,
        },
        {
          name: 'Caster Sugar',
          measure: '250g',
          id: 1992,
        },
        {
          name: 'Plain Flour',
          measure: '3 tbs',
          id: 1993,
        },
        {
          name: 'Lemon Juice',
          measure: '1 ½ teaspoons',
          id: 1994,
        },
        {
          name: 'Eggs',
          measure: '3 Large',
          id: 1995,
        },
        {
          name: 'Sour Cream',
          measure: '250ml',
          id: 1996,
        },
        {
          name: 'Sour Cream',
          measure: '150ml',
          id: 1997,
        },
        {
          name: 'Caster Sugar',
          measure: '1 tbsp',
          id: 1998,
        },
        {
          name: 'Lemon Juice',
          measure: '2 tsp',
          id: 1999,
        },
      ],
    },
    {
      id: 186,
      name: 'Nanaimo Bars',
      category: 'Dessert',
      instructions:
        'Start by making the biscuit base. In a bowl, over a pan of simmering water, melt the butter with the sugar and cocoa powder, stirring occasionally until smooth. Whisk in the egg for 2 to 3 mins until the mixture has thickened. Remove from heat and mix in the biscuit crumbs, coconut and almonds if using, then press into the base of a lined 20cm square tin. Chill for 10 mins.\r\nFor the middle layer, make the custard icing; whisk together the butter, cream and custard powder until light and fluffy, then gradually add the icing sugar until fully incorporated. Spread over the bottom layer and chill in the fridge for at least 10 mins until the custard is no longer soft.\r\nMelt the chocolate and butter together in the microwave, then spread over the chilled bars and put back in the fridge. Leave until the chocolate has fully set (about 2 hrs). Take the mixture out of the tin and slice into squares to serve.',
      image: 'vwuprt1511813703.jpg',
      tags: 'Treat,Snack,Dairy',
      ingredients: [
        {
          name: 'Custard',
          measure: '125g',
          id: 2000,
        },
        {
          name: 'Caster Sugar',
          measure: '50g',
          id: 2001,
        },
        {
          name: 'Cocoa',
          measure: '5 tbs',
          id: 2002,
        },
        {
          name: 'Egg',
          measure: '1 beaten',
          id: 2003,
        },
        {
          name: 'Digestive Biscuits',
          measure: '200g shredded',
          id: 2004,
        },
        {
          name: 'Desiccated Coconut',
          measure: '100g',
          id: 2005,
        },
        {
          name: 'Almonds',
          measure: '50g',
          id: 2006,
        },
        {
          name: 'Butter',
          measure: '100g',
          id: 2007,
        },
        {
          name: 'Double Cream',
          measure: '4 tbs',
          id: 2008,
        },
        {
          name: 'Custard Powder',
          measure: '3 tbs',
          id: 2009,
        },
        {
          name: 'Icing Sugar',
          measure: '250g',
          id: 2010,
        },
        {
          name: 'Dark Chocolate',
          measure: '150g',
          id: 2011,
        },
        {
          name: 'Butter',
          measure: '50g',
          id: 2012,
        },
      ],
    },
    {
      id: 187,
      name: 'Nasi lemak',
      category: 'Seafood',
      instructions:
        'In a medium saucepan over medium heat, stir together coconut milk, water, ground ginger, ginger root, salt, bay leaf, and rice. Cover, and bring to a boil. Reduce heat, and simmer for 20 to 30 minutes, or until done.\r\n\r\n Step 2\r\nPlace eggs in a saucepan, and cover with cold water. Bring water to a boil, and immediately remove from heat. Cover, and let eggs stand in hot water for 10 to 12 minutes. Remove eggs from hot water, cool, peel and slice in half. Slice cucumber.\r\n\r\n Step 3\r\nMeanwhile, in a large skillet or wok, heat 1 cup vegetable oil over medium-high heat. Stir in peanuts and cook briefly, until lightly browned. Remove peanuts with a slotted spoon and place on paper towels to soak up excess grease. Return skillet to stove. Stir in the contents of one package anchovies; cook briefly, turning, until crisp. Remove with a slotted spoon and place on paper towels. Discard oil. Wipe out skillet.\r\n\r\n Step 4\r\nHeat 2 tablespoons oil in the skillet. Stir in the onion, garlic, and shallots; cook until fragrant, about 1 or 2 minutes. Mix in the chile paste, and cook for 10 minutes, stirring occasionally. If the chile paste is too dry, add a small amount of water. Stir in remaining anchovies; cook for 5 minutes. Stir in salt, sugar, and tamarind juice; simmer until sauce is thick, about 5 minutes.\r\n\r\n Step 5\r\nServe the onion and garlic sauce over the warm rice, and top with peanuts, fried anchovies, cucumbers, and eggs.',
      image: 'wai9bw1619788844.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Coconut Milk',
          measure: '2 cups',
          id: 2013,
        },
        {
          name: 'Water',
          measure: '2 cups',
          id: 2014,
        },
        {
          name: 'Ginger Paste',
          measure: '1/4 tsp',
          id: 2015,
        },
        {
          name: 'Ginger',
          measure: '1',
          id: 2016,
        },
        {
          name: 'Bay Leaf',
          measure: '1',
          id: 2017,
        },
        {
          name: 'Rice',
          measure: '2 cups',
          id: 2018,
        },
        {
          name: 'Eggs',
          measure: '4',
          id: 2019,
        },
        {
          name: 'Cucumber',
          measure: '1',
          id: 2020,
        },
        {
          name: 'Peanuts',
          measure: '1 cup',
          id: 2021,
        },
        {
          name: 'Anchovy Fillet',
          measure: '4 oz',
          id: 2022,
        },
        {
          name: 'Vegetable Oil',
          measure: '2 tbs',
          id: 2023,
        },
        {
          name: 'Onion',
          measure: '1',
          id: 2024,
        },
        {
          name: 'Garlic',
          measure: '3 cloves',
          id: 2025,
        },
        {
          name: 'Shallots',
          measure: '3',
          id: 2026,
        },
        {
          name: 'Chilli Powder',
          measure: '2 tsp',
          id: 2027,
        },
        {
          name: 'Anchovy Fillet',
          measure: '4 oz',
          id: 2028,
        },
        {
          name: 'Sugar',
          measure: '3 tbs',
          id: 2029,
        },
        {
          name: 'Tamarind Paste',
          measure: '1/3 cup',
          id: 2030,
        },
      ],
    },
    {
      id: 188,
      name: 'Osso Buco alla Milanese',
      category: 'Miscellaneous',
      instructions:
        'Heat the oven to 300 degrees.\r\nDredging the shanks: pour the flour into a shallow dish (a pie plate works nicely). Season the veal shanks on all sides with salt and pepper. One at a time, roll the shanks around in the flour coat, and shake and pat the shank to remove any excuses flour. Discard the remaining flour.\r\nBrowning the shanks: put the oil and 1 tablespoon of the butter in a wide Dutch oven or heavy braising pot (6 to 7 quart) and heat over medium-high heat. When the butter has melted and the oil is shimmering, lower the shanks into the pot, flat side down; if the shanks won’t fit without touching one another, do this in batches. Brown the shanks, turning once with tongs, until both flat sides are well caramelized, about 5 minutes per side. If the butter-oil mixture starts to burn, lower the heat just a bit. Transfer the shanks to a large platter or tray and set aside.\r\nThe aromatics: pour off and discard the fat from the pot. Wipe out any burnt bits with a damp paper towel, being careful not to remove any delicious little caramelized bits. Ad the remaining 2 tablespoons butter to the pot and melt it over medium heat. When the butter has stopped foaming, add the onion, carrot, celery, and fennel. Season with salt and pepper, stir, and cook the vegetables until they begin to soften but do not brown, about 6 minutes. Stir in the garlic, orange zest, marjoram, and bay leaf, and stew for another minute or two.\r\nThe braising liquid: add the wine, increase the heat to high, and bring to a boil. Boil, stirring occasionally, to reduce the wine by about half, 5 minutes. Add the stock and tomatoes, with their juice, and boil again to reduce the liquid to about 1 cup total, about 10 minutes.\r\nThe braise: Place the shanks in the pot so that they are sitting with the exposed bone facing up, and pour over any juices that accumulated as they sat. Cover with parchment paper, pressing down so the parchment nearly touches the veal and the edges hang over the sides of the pot by about an inch. Cover tightly with the lid, and slide into the lower part of the oven to braise at a gentle simmer. Check the pot after the first 15 minutes, and if the liquid is simmering too aggressively, lower the oven heat by 10 or 15 degrees. Continue braising, turning the shanks and spooning some pan juices over the top after the first 40 minutes, until the meat is completely tender and pulling away from the bone, about 2 hours.\r\nThe gremolata: While the shanks are braising, stir together the garlic, parsley, and lemon zest in a small bowl. Cover with plastic wrap and set aside in a cool place (or the refrigerator, if your kitchen is very warm.)\r\nThe finish: When the veal is fork-tender and falling away from the bone, remove the lid and sprinkle over half of the gremolata. Return the veal to the oven, uncovered, for another 15 minutes to caramelize it some.\r\nUsing a slotted spatula or spoon, carefully lift the shanks from the braising liquid, doing your best to keep them intact. The shanks will be very tender and threatening to fall into pieces, and the marrow will be wobbly inside the bones, so this can be a bit tricky. But if they do break apart, don’t worry, the flavor won’t suffer at all. Arrange the shanks on a serving platter or other large plate, without stacking, and cover with foil to keep warm.\r\nFinishing the sauce: Set the braising pot on top of the stove and evaluate the sauce: if there is a visible layer of fat floating on the surface, use a large spoon to skim it off and discard it. Taste the sauce for concentration of flavor. If it tastes a bit weak or flat, bring it to a boil over high heat, and boil to reduce the volume and intensify the flavor for 5 to 10 minutes. Taste again for salt and pepper. If the sauce wants more zip, stir in a teaspoon or two of the remaining gremolata.\r\nPortioning the veal shanks: if the shanks are reasonably sized, serve one per person. If the shanks are gargantuan or you’re dealing with modest appetites, pull apart the larger shanks, separating them at their natural seams, and serve smaller amounts. Be sure to give the marrow bones to whomever prizes them most.\r\nServing: Arrange the veal shanks on warm dinner plates accompanied by the risotto, if serving. Just before carrying the plates to the table, sprinkle on the remaining gremolata and then spoon over a generous amount of sauce – the contact with the hot liquid will aromatize the gremolata and perk up everyone’s appetite with the whiff of garlic and lemon.',
      image: 'wwuqvt1487345467.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Veal',
          measure: '4 meaty shanks',
          id: 2031,
        },
        {
          name: 'Flour',
          measure: '½ cup',
          id: 2032,
        },
        {
          name: 'Olive Oil',
          measure: '2 tablespoons',
          id: 2033,
        },
        {
          name: 'Butter',
          measure: '3 tablespoons',
          id: 2034,
        },
        {
          name: 'Onion',
          measure: '1 medium chopped into ½-inch pieces',
          id: 2035,
        },
        {
          name: 'Carrot',
          measure: '1 chopped into ½-inch pieces',
          id: 2036,
        },
        {
          name: 'Celery',
          measure: '1 chopped into ½-inch pieces',
          id: 2037,
        },
        {
          name: 'Fennel',
          measure: '1 bulb chopped into ½-inch pieces',
          id: 2038,
        },
        {
          name: 'Garlic',
          measure: '3 cloves',
          id: 2039,
        },
        {
          name: 'Orange Zest',
          measure: '2 strips',
          id: 2040,
        },
        {
          name: 'Marjoram',
          measure: '1 ½ teaspoons',
          id: 2041,
        },
        {
          name: 'Bay Leaf',
          measure: '1',
          id: 2042,
        },
        {
          name: 'Dry White Wine',
          measure: '1 cup',
          id: 2043,
        },
        {
          name: 'Chicken Stock',
          measure: '½ cup',
          id: 2044,
        },
        {
          name: 'Tomatoes',
          measure: '1 cup chopped with juice',
          id: 2045,
        },
        {
          name: 'Parsley',
          measure: '2 tablespoons chopped',
          id: 2046,
        },
        {
          name: 'Garlic',
          measure: '1 teaspoon minced',
          id: 2047,
        },
        {
          name: 'Lemon Zest',
          measure: '1 teaspoon grated',
          id: 2048,
        },
      ],
    },
    {
      id: 189,
      name: 'Oxtail with broad beans',
      category: 'Beef',
      instructions:
        "Toss the oxtail with the onion, spring onion, garlic, ginger, chilli, soy sauce, thyme, salt and pepper. Heat the vegetable oil in a large frying pan over medium-high heat. Brown the oxtail in the pan until browned all over, about 10 minutes. Place into a pressure cooker, and pour in 375ml water. Cook at pressure for 25 minutes, then remove from heat, and remove the lid according to manufacturer's directions.\r\nAdd the broad beans and pimento berries, and bring to a simmer over medium-high heat. Dissolve the cornflour in 2 tablespoons water, and stir into the simmering oxtail. Cook and stir a few minutes until the sauce has thickened, and the broad beans are tender.",
      image: '1520083578.jpg',
      tags: 'Heavy,MainMeal,Speciality',
      ingredients: [
        {
          name: 'Oxtail',
          measure: '450g',
          id: 2049,
        },
        {
          name: 'Onion',
          measure: '1 chopped',
          id: 2050,
        },
        {
          name: 'Spring Onions',
          measure: '1',
          id: 2051,
        },
        {
          name: 'Garlic',
          measure: '2 cloves minced',
          id: 2052,
        },
        {
          name: 'Ginger',
          measure: '1 tsp',
          id: 2053,
        },
        {
          name: 'Scotch Bonnet',
          measure: '1 chopped',
          id: 2054,
        },
        {
          name: 'Soy Sauce',
          measure: '2 tbs',
          id: 2055,
        },
        {
          name: 'Fresh Thyme',
          measure: '1 chopped',
          id: 2056,
        },
        {
          name: 'Vegetable Oil',
          measure: '2 tbs',
          id: 2057,
        },
        {
          name: 'Water',
          measure: '350ml',
          id: 2058,
        },
        {
          name: 'Broad Beans',
          measure: '200g',
          id: 2059,
        },
        {
          name: 'Corn Flour',
          measure: '1 tbs',
          id: 2060,
        },
        {
          name: 'Water',
          measure: '2 tbs',
          id: 2061,
        },
      ],
    },
    {
      id: 190,
      name: 'Pad See Ew',
      category: 'Chicken',
      instructions:
        "Mix Sauce in small bowl.\r\nMince garlic into wok with oil. Place over high heat, when hot, add chicken and Chinese broccoli stems, cook until chicken is light golden.\r\nPush to the side of the wok, crack egg in and scramble. Don't worry if it sticks to the bottom of the wok - it will char and which adds authentic flavour.\r\nAdd noodles, Chinese broccoli leaves and sauce. Gently mix together until the noodles are stained dark and leaves are wilted. Serve immediately!",
      image: 'uuuspp1468263334.jpg',
      tags: 'Pasta',
      ingredients: [
        {
          name: 'rice stick noodles',
          measure: '6oz/180g',
          id: 2062,
        },
        {
          name: 'dark soy sauce',
          measure: '2 tbsp',
          id: 2063,
        },
        {
          name: 'oyster sauce',
          measure: '2 tbsp',
          id: 2064,
        },
        {
          name: 'soy sauce',
          measure: '2 tsp',
          id: 2065,
        },
        {
          name: 'white vinegar',
          measure: '2 tsp',
          id: 2066,
        },
        {
          name: 'sugar',
          measure: '2 tsp',
          id: 2067,
        },
        {
          name: 'water',
          measure: '2 tbsp',
          id: 2068,
        },
        {
          name: 'peanut oil',
          measure: '2 tbsp',
          id: 2069,
        },
        {
          name: 'garlic',
          measure: '2 cloves',
          id: 2070,
        },
        {
          name: 'Chicken',
          measure: '1 cup',
          id: 2071,
        },
        {
          name: 'Egg',
          measure: '1',
          id: 2072,
        },
        {
          name: 'Chinese broccoli',
          measure: '4 cups',
          id: 2073,
        },
      ],
    },
    {
      id: 191,
      name: 'Potato Gratin with Chicken',
      category: 'Chicken',
      instructions:
        "15 minute potato gratin with chicken and bacon greens: a gratin always seems more effort and more indulgent than ordinary boiled or roasts, but it doesn't have to take 45mins, it's nice for a change and you can control the calorie content by going with full fat to low fat creme fraiche. (It's always tastes better full fat though obviously!) to serve 4: use 800g of potatoes, finely slice and boil in a pan for about 5-8 mins till firmish, not soft. Finely slice 3 onions and place in an oven dish with 2 tblsp of olive oil and 100ml of chicken stock. Cook till the onions are soft then drain the potatoes and pour onto the onions. Season and spoon over cream or creme fraiche till all is covered but not swimming. Grate Parmesan over the top then finish under the grill till nicely golden. serve with chicken and bacon, peas and spinach.",
      image: 'qwrtut1468418027.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Potatoes',
          measure: '800g',
          id: 2074,
        },
        {
          name: 'Onions',
          measure: '3',
          id: 2075,
        },
        {
          name: 'Olive Oil',
          measure: '2 tblsp',
          id: 2076,
        },
        {
          name: 'Chicken Stock',
          measure: '100ml',
          id: 2077,
        },
        {
          name: 'Creme Fraiche',
          measure: '1 pot',
          id: 2078,
        },
        {
          name: 'Parmesan',
          measure: 'Topping',
          id: 2079,
        },
        {
          name: 'Chicken Breasts',
          measure: '4',
          id: 2080,
        },
        {
          name: 'Bacon',
          measure: '4',
          id: 2081,
        },
        {
          name: 'Spinach',
          measure: 'Topping',
          id: 2082,
        },
        {
          name: 'Peas',
          measure: 'Topping',
          id: 2083,
        },
      ],
    },
    {
      id: 192,
      name: 'Poutine',
      category: 'Miscellaneous',
      instructions:
        'Heat oil in a deep fryer or deep heavy skillet to 365°F (185°C).\r\nWarm gravy in saucepan or microwave.\r\nPlace the fries into the hot oil, and cook until light brown, about 5 minutes.\r\nRemove to a paper towel lined plate to drain.\r\nPlace the fries on a serving platter, and sprinkle the cheese over them.\r\nLadle gravy over the fries and cheese, and serve immediately.',
      image: 'uuyrrx1487327597.jpg',
      tags: 'UnHealthy,Speciality,HangoverFood',
      ingredients: [
        {
          name: 'Vegetable Oil',
          measure: 'Dash',
          id: 2084,
        },
        {
          name: 'Beef Gravy',
          measure: '1 Can',
          id: 2085,
        },
        {
          name: 'Potatoes',
          measure: '5 thin cut',
          id: 2086,
        },
        {
          name: 'Cheese Curds',
          measure: '2 cups',
          id: 2087,
        },
      ],
    },
    {
      id: 193,
      name: 'Pilchard puttanesca',
      category: 'Pasta',
      instructions:
        'Cook the pasta following pack instructions. Heat the oil in a non-stick frying pan and cook the onion, garlic and chilli for 3-4 mins to soften. Stir in the tomato purée and cook for 1 min, then add the pilchards with their sauce. Cook, breaking up the fish with a wooden spoon, then add the olives and continue to cook for a few more mins.\r\n\r\nDrain the pasta and add to the pan with 2-3 tbsp of the cooking water. Toss everything together well, then divide between plates and serve, scattered with Parmesan.',
      image: 'vvtvtr1511180578.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Spaghetti',
          measure: '300g',
          id: 2088,
        },
        {
          name: 'Olive Oil',
          measure: '1 tbls',
          id: 2089,
        },
        {
          name: 'Onion',
          measure: '1 finely chopped',
          id: 2090,
        },
        {
          name: 'Garlic',
          measure: '2 cloves minced',
          id: 2091,
        },
        {
          name: 'Red Chilli',
          measure: '1',
          id: 2092,
        },
        {
          name: 'Tomato Puree',
          measure: '1 tbls',
          id: 2093,
        },
        {
          name: 'Pilchards',
          measure: '425g',
          id: 2094,
        },
        {
          name: 'Black Olives',
          measure: '70g',
          id: 2095,
        },
        {
          name: 'Parmesan',
          measure: 'Shaved',
          id: 2096,
        },
      ],
    },
    {
      id: 194,
      name: 'Pork Cassoulet',
      category: 'Pork',
      instructions:
        'Heat oven to 140C/120C fan/gas 1. Put a large ovenproof pan (with a tight-fitting lid) on a high heat. Add your fat and diced meat, cook for a few mins to seal the edges, giving it a quick stir to cook evenly. Reduce the heat to low, add the sliced onion, whole garlic cloves, carrot and fennel seeds, and cook gently to soften the veg for a few mins.\r\nPour over the red wine vinegar, scraping any meaty bits off the bottom of the pan. Add the stock, tomato purée, and half the rosemary and parsley. Bring to the boil and simmer for 10 mins, then season, cover with a lid and put into the oven for 2 hrs, removing the lid for the final hour of cooking. Stir occasionally and add the beans with 30 mins to go.\r\nRemove the pan from the oven and heat the grill. Scatter the top with the remaining herbs and breadcrumbs, drizzle a little oil over the top, and return to the oven for 5-10 mins, until the breadcrumbs are golden. Serve with crusty bread and green veg.',
      image: 'wxuvuv1511299147.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Goose Fat',
          measure: '4 tbsp',
          id: 2097,
        },
        {
          name: 'Pork',
          measure: '350g',
          id: 2098,
        },
        {
          name: 'Onion',
          measure: '1 large',
          id: 2099,
        },
        {
          name: 'Garlic',
          measure: '10',
          id: 2100,
        },
        {
          name: 'Carrots',
          measure: '1 thinly sliced',
          id: 2101,
        },
        {
          name: 'Fennel Seeds',
          measure: '1 tsp',
          id: 2102,
        },
        {
          name: 'Red Wine Vinegar',
          measure: '2 tblsp',
          id: 2103,
        },
        {
          name: 'Vegetable Stock',
          measure: '600ml',
          id: 2104,
        },
        {
          name: 'Tomato Puree',
          measure: '1 tblsp',
          id: 2105,
        },
        {
          name: 'Rosemary',
          measure: '2 sticks',
          id: 2106,
        },
        {
          name: 'Parsley',
          measure: 'Handful',
          id: 2107,
        },
        {
          name: 'Haricot Beans',
          measure: '400g',
          id: 2108,
        },
        {
          name: 'Breadcrumbs',
          measure: '2 tblsp',
          id: 2109,
        },
        {
          name: 'Oil',
          measure: 'drizzle',
          id: 2110,
        },
        {
          name: 'Bread',
          measure: 'to serve',
          id: 2111,
        },
        {
          name: 'Broccoli',
          measure: 'to serve',
          id: 2112,
        },
      ],
    },
    {
      id: 195,
      name: 'Pancakes',
      category: 'Dessert',
      instructions:
        'Put the flour, eggs, milk, 1 tbsp oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter. Set aside for 30 mins to rest if you have time, or start cooking straight away.\r\nSet a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper. When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.\r\nServe with lemon wedges and sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.',
      image: 'rwuyqx1511383174.jpg',
      tags: 'Breakfast,Desert,Sweet,Fruity',
      ingredients: [
        {
          name: 'Flour',
          measure: '100g',
          id: 2113,
        },
        {
          name: 'Eggs',
          measure: '2 large',
          id: 2114,
        },
        {
          name: 'Milk',
          measure: '300ml',
          id: 2115,
        },
        {
          name: 'Sunflower Oil',
          measure: '1 tbls',
          id: 2116,
        },
        {
          name: 'Sugar',
          measure: 'to serve',
          id: 2117,
        },
        {
          name: 'Raspberries',
          measure: 'to serve',
          id: 2118,
        },
        {
          name: 'Blueberries',
          measure: 'to serve',
          id: 2119,
        },
      ],
    },
    {
      id: 196,
      name: 'Pumpkin Pie',
      category: 'Dessert',
      instructions:
        'Place the pumpkin in a large saucepan, cover with water and bring to the boil. Cover with a lid and simmer for 15 mins or until tender. Drain pumpkin; let cool.\r\nHeat oven to 180C/160C fan/gas 4. Roll out the pastry on a lightly floured surface and use it to line a 22cm loose-bottomed tart tin. Chill for 15 mins. Line the pastry with baking parchment and baking beans, then bake for 15 mins. Remove the beans and paper, and cook for a further 10 mins until the base is pale golden and biscuity. Remove from the oven and allow to cool slightly.\r\nIncrease oven to 220C/200C fan/gas 7. Push the cooled pumpkin through a sieve into a large bowl. In a separate bowl, combine the sugar, salt, nutmeg and half the cinnamon. Mix in the beaten eggs, melted butter and milk, then add to the pumpkin purée and stir to combine. Pour into the tart shell and cook for 10 mins, then reduce the temperature to 180C/160C fan/gas 4. Continue to bake for 35-40 mins until the filling has just set.\r\nLeave to cool, then remove the pie from the tin. Mix the remaining cinnamon with the icing sugar and dust over the pie. Serve chilled.',
      image: 'usuqtp1511385394.jpg',
      tags: 'Halloween,Pie,Desert',
      ingredients: [
        {
          name: 'Pumpkin',
          measure: '750g',
          id: 2120,
        },
        {
          name: 'Shortcrust Pastry',
          measure: '350g',
          id: 2121,
        },
        {
          name: 'Plain Flour',
          measure: 'Dusting',
          id: 2122,
        },
        {
          name: 'Caster Sugar',
          measure: '140g',
          id: 2123,
        },
        {
          name: 'Salt',
          measure: '½ tsp',
          id: 2124,
        },
        {
          name: 'Nutmeg',
          measure: '½ tsp',
          id: 2125,
        },
        {
          name: 'Cinnamon',
          measure: '1 tsp',
          id: 2126,
        },
        {
          name: 'Eggs',
          measure: '2 Beaten',
          id: 2127,
        },
        {
          name: 'Butter',
          measure: '25g',
          id: 2128,
        },
        {
          name: 'Milk',
          measure: '175g',
          id: 2129,
        },
        {
          name: 'Icing Sugar',
          measure: '1 tblsp',
          id: 2130,
        },
      ],
    },
    {
      id: 197,
      name: 'Peanut Butter Cheesecake',
      category: 'Dessert',
      instructions:
        'Oil and line a 20cm round loose- bottomed cake tin with cling film, making it as smooth as possible. Melt the butter in a pan. Crush the biscuits by bashing them in a bag with a rolling pin, then stir them into the butter until very well coated. Press the mixture firmly into the base of the tin and chill.\r\nSoak the gelatine in water while you make the filling. Tip the ricotta into a bowl, then beat in the peanut butter and syrup. Ricotta has a slightly grainy texture so blitz until smooth with a stick blender for a smoother texture if you prefer.\r\nTake the soaked gelatine from the water and squeeze dry. Put it into a pan with the milk and heat very gently until the gelatine dissolves. Beat into the peanut mixture, then tip onto the biscuit base. Chill until set.\r\nTo freeze, leave in the tin and as soon as it is solid, cover the surface with cling film, then wrap the tin with cling film and foil.\r\nTo defrost, thaw in the fridge overnight.\r\nTo serve, carefully remove from the tin. Whisk the cream with the sugar until it holds its shape, then spread on top of the cheesecake and scatter with the peanut brittle.',
      image: 'qtuuys1511387068.jpg',
      tags: 'Cake,Desert,Treat,UnHealthy,Speciality',
      ingredients: [
        {
          name: 'Butter',
          measure: '50g',
          id: 2131,
        },
        {
          name: 'Peanut Cookies',
          measure: '175g',
          id: 2132,
        },
        {
          name: 'Gelatine Leafs',
          measure: '5',
          id: 2133,
        },
        {
          name: 'Ricotta',
          measure: '500g',
          id: 2134,
        },
        {
          name: 'Peanut Butter',
          measure: '175g',
          id: 2135,
        },
        {
          name: 'Golden Syrup',
          measure: '175g',
          id: 2136,
        },
        {
          name: 'Milk',
          measure: '150ml',
          id: 2137,
        },
        {
          name: 'Double Cream',
          measure: '275ml',
          id: 2138,
        },
        {
          name: 'Light Brown Soft Sugar',
          measure: '2 tblsp',
          id: 2139,
        },
        {
          name: 'Peanut Brittle',
          measure: 'Crushed',
          id: 2140,
        },
      ],
    },
    {
      id: 198,
      name: 'Peach & Blueberry Grunt',
      category: 'Dessert',
      instructions:
        'Heat oven to 190C/170C fan/gas 5. Butter a wide shallow ovenproof dish. Blend the cornflour with the orange zest and juice, and put in a large pan with the sugar. Halve, stone and slice the peaches and add to the pan. Bring slowly to the boil, stirring gently until the sauce is shiny and thickened, about 3-4 mins. Remove from the heat, stir in the blueberries and tip into the prepared dish.\r\nTip the flour into a mixing bowl and add the 50g butter. Rub the butter into the flour until it resembles fine breadcrumbs, then stir in half the sugar. Mix the remaining sugar with the cinnamon and set aside.\r\nAdd the milk to the dry ingredients and mix to a soft dough. Turn out onto a lightly floured surface and knead briefly. Roll out to an oblong roughly 16 x 24cm. Brush with melted butter and sprinkle evenly with the spicy sugar. Roll up from one long side and cut into 12 slices. Arrange around the top of the dish, leaving the centre uncovered.\r\nBake for 20-25 mins, until the topping is crisp and golden. Serve warm.',
      image: 'ssxvup1511387476.jpg',
      tags: 'Desert,Pudding,Fruity',
      ingredients: [
        {
          name: 'Corn Flour',
          measure: '1 tsp',
          id: 2141,
        },
        {
          name: 'Orange',
          measure: 'Juice of 2',
          id: 2142,
        },
        {
          name: 'Orange',
          measure: 'Zest of 1',
          id: 2143,
        },
        {
          name: 'Caster Sugar',
          measure: '2 tbs',
          id: 2144,
        },
        {
          name: 'Peaches',
          measure: '6',
          id: 2145,
        },
        {
          name: 'Blueberries',
          measure: '250g',
          id: 2146,
        },
        {
          name: 'Self-raising Flour',
          measure: '200g',
          id: 2147,
        },
        {
          name: 'Butter',
          measure: '50g',
          id: 2148,
        },
        {
          name: 'Muscovado Sugar',
          measure: '100g',
          id: 2149,
        },
        {
          name: 'Cinnamon',
          measure: '1 tsp',
          id: 2150,
        },
        {
          name: 'Milk',
          measure: '6 tblsp',
          id: 2151,
        },
      ],
    },
    {
      id: 199,
      name: 'Parkin Cake',
      category: 'Dessert',
      instructions:
        'Heat oven to 160C/140C fan/gas 3. Grease a deep 22cm/9in square cake tin and line with baking parchment. Beat the egg and milk together with a fork.\r\n\r\nGently melt the syrup, treacle, sugar and butter together in a large pan until the sugar has dissolved. Remove from the heat. Mix together the oatmeal, flour and ginger and stir into the syrup mixture, followed by the egg and milk.\r\n\r\nPour the mixture into the tin and bake for 50 mins - 1 hr until the cake feels firm and a little crusty on top. Cool in the tin then wrap in more parchment and foil and keep for 3-5 days before eating if you can – it’ll become softer and stickier the longer you leave it, up to 2 weeks.\r\n',
      image: 'qxuqtt1511724269.jpg',
      tags: 'Caramel',
      ingredients: [
        {
          name: 'Butter',
          measure: '200g',
          id: 2152,
        },
        {
          name: 'Egg',
          measure: '1 large',
          id: 2153,
        },
        {
          name: 'Milk',
          measure: '4 tbs',
          id: 2154,
        },
        {
          name: 'Golden Syrup',
          measure: '200g',
          id: 2155,
        },
        {
          name: 'Black Treacle',
          measure: '85g',
          id: 2156,
        },
        {
          name: 'Brown Sugar',
          measure: '85g',
          id: 2157,
        },
        {
          name: 'Oatmeal',
          measure: '100g',
          id: 2158,
        },
        {
          name: 'Self-raising Flour',
          measure: '250g',
          id: 2159,
        },
        {
          name: 'Ground Ginger',
          measure: '1 tbs',
          id: 2160,
        },
      ],
    },
    {
      id: 200,
      name: 'Pear Tarte Tatin',
      category: 'Dessert',
      instructions:
        'Core the pears, then peel as neatly as possible and halve. If you like, they can be prepared up to a day ahead and kept in the fridge, uncovered, so that they dry out.\r\nTip the sugar, butter, star anise, cardamom and cinnamon into an ovenproof frying pan, about 20cm wide, and place over a high heat until bubbling. Shake the pan and stir the buttery sauce until it separates and the sugar caramelises to a toffee colour.\r\nLay the pears in the pan, then cook in the sauce for 10-12 mins, tossing occasionally, until completely caramelised. Don’t worry about them burning – they won’t – but you want to caramelise them as much as possible. Splash in the brandy and let it flambé, then set the pears aside.\r\nHeat oven to 200C/fan 180C/gas 6. Roll the pastry out to the thickness of a £1 coin. Using a plate slightly larger than the top of the pan, cut out a circle, then press the edges of the circle of pastry to thin them out.\r\nWhen the pears have cooled slightly, arrange them in the pan, cut side up, in a floral shape, with the pears around the edge pointing inwards. Rest the cinnamon stick on the top in the centre, with the cardamom pods scattered around.\r\nDrape the pastry over the pears, then tuck the edges down the pan sides and under the fruit (see Gordon’s guide). Pierce the pastry a few times, then bake for 15 mins. If a lot of juice bubbles up the side of the pan, pour it off at this stage (see guide). Reduce oven to 180C/fan 160C/gas 4 and bake for 15 mins more until the pastry is golden. Leave the tart to stand for 10 mins, then invert it carefully onto a serving dish.',
      image: 'rxvxrr1511797671.jpg',
      tags: 'Tart,Glazed,Baking',
      ingredients: [
        {
          name: 'Pears',
          measure: '8',
          id: 2161,
        },
        {
          name: 'Caster Sugar',
          measure: '100g',
          id: 2162,
        },
        {
          name: 'Butter',
          measure: '100g',
          id: 2163,
        },
        {
          name: 'Star Anise',
          measure: '2',
          id: 2164,
        },
        {
          name: 'Cardamom',
          measure: '3 Pods',
          id: 2165,
        },
        {
          name: 'Cinnamon',
          measure: '1 large',
          id: 2166,
        },
        {
          name: 'Brandy',
          measure: '2 tbs',
          id: 2167,
        },
        {
          name: 'Puff Pastry',
          measure: '500g',
          id: 2168,
        },
      ],
    },
    {
      id: 201,
      name: 'Provençal Omelette Cake',
      category: 'Vegetarian',
      instructions:
        'Break the eggs into two bowls, five in each. Whisk lightly and season with salt and pepper. Heat the oil in a pan, add the courgettes and spring onions, then fry gently for about 10 mins until softened. Cool, then stir into one bowl of eggs with a little salt and pepper. Add the roasted peppers to the other bowl of eggs with the garlic, chilli, salt and pepper.\r\nHeat a little oil in a 20-23cm frying pan, preferably non-stick. Pour the eggs with courgette into a measuring jug, then pourabout one-third of the mixture into the pan, swirling it to cover the base of the pan. Cook until the egg is set and lightly browned underneath, then cover the pan with a plate and invert the omelette onto it. Slide it back into the pan to cook the other side. Repeat with the remaining mix to make two more omelettes, adding a little oil to the pan each time. Stack the omelettes onto a plate. Make three omelettes in the same way with the red pepper mixture, then stack them on a separate plate.\r\nNow make the filling. Beat the cheese to soften it, then beat in the milk to make a spreadable consistency. Stir in the herbs, salt and pepper. Line a deep, 20-23cm round cake tin with cling film (use a tin the same size as the frying pan). Select the best red pepper omelette and place in the tin, prettiest side down. Spread with a thin layer of cheese filling, then cover with a courgette omelette. Repeat, alternating the layers, until all the omelettes and filling are in the tin, finishing with an omelette. Flip the cling film over the omelette, then chill for up to 24 hrs.\r\nTo serve, invert the omelette cake onto a serving plate and peel off the cling film. Pile rocket on the top and scatter over the cheese, a drizzle of olive oil and a little freshly ground black pepper. Serve cut into wedges.',
      image: 'qwtrtp1511799242.jpg',
      tags: 'Egg',
      ingredients: [
        {
          name: 'Eggs',
          measure: '10',
          id: 2169,
        },
        {
          name: 'Olive Oil',
          measure: '1 tbs',
          id: 2170,
        },
        {
          name: 'Courgettes',
          measure: '2 finely chopped',
          id: 2171,
        },
        {
          name: 'Spring Onions',
          measure: '3 finely chopped',
          id: 2172,
        },
        {
          name: 'Red Pepper',
          measure: '4',
          id: 2173,
        },
        {
          name: 'Garlic Clove',
          measure: '1 clove peeled crushed',
          id: 2174,
        },
        {
          name: 'Red Chilli',
          measure: '1',
          id: 2175,
        },
        {
          name: 'Cream Cheese',
          measure: '300g',
          id: 2176,
        },
        {
          name: 'Milk',
          measure: '6 tblsp',
          id: 2177,
        },
        {
          name: 'Chives',
          measure: '4 tbs',
          id: 2178,
        },
        {
          name: 'Basil',
          measure: '2 tbs',
          id: 2179,
        },
        {
          name: 'Rocket',
          measure: 'to serve',
          id: 2180,
        },
        {
          name: 'Parmesan',
          measure: 'to serve',
          id: 2181,
        },
      ],
    },
    {
      id: 202,
      name: 'Prawn & Fennel Bisque',
      category: 'Side',
      instructions:
        'Shell the prawns, then fry the shells in the oil in a large pan for about 5 mins. Add the onion, fennel and carrots and cook for about 10 mins until the veg start to soften. Pour in the wine and brandy, bubble hard for about 1 min to drive off the alcohol, then add the tomatoes, stock and paprika. Cover and simmer for 30 mins. Meanwhile, chop the prawns.\r\nBlitz the soup as finely as you can with a stick blender or food processor, then press through a sieve into a bowl. Spend a bit of time really working the mixture through the sieve as this will give the soup its velvety texture.\r\nTip back into a clean pan, add the prawns and cook for 10 mins, then blitz again until smooth. You can make and chill this a day ahead or freeze it for 1 month. Thaw ovenight in the fridge. To serve, gently reheat in a pan with the cream. If garnishing, cook the 8 prawns in a little butter. Spoon into small bowls and top with the prawns and snipped fennel fronds.',
      image: 'rtwwvv1511799504.jpg',
      tags: 'Soup,Warm,Seafood,Shellfish',
      ingredients: [
        {
          name: 'Tiger Prawns',
          measure: '450g',
          id: 2182,
        },
        {
          name: 'Olive Oil',
          measure: '4 tbs',
          id: 2183,
        },
        {
          name: 'Onion',
          measure: '1 large',
          id: 2184,
        },
        {
          name: 'Fennel',
          measure: '1 large',
          id: 2185,
        },
        {
          name: 'Carrots',
          measure: '2 chopped',
          id: 2186,
        },
        {
          name: 'Dry White Wine',
          measure: '150ml',
          id: 2187,
        },
        {
          name: 'Brandy',
          measure: '1 tbs',
          id: 2188,
        },
        {
          name: 'Chopped Tomatoes',
          measure: '400g',
          id: 2189,
        },
        {
          name: 'Fish Stock',
          measure: '1L',
          id: 2190,
        },
        {
          name: 'Paprika',
          measure: '2 pinches',
          id: 2191,
        },
        {
          name: 'Double Cream',
          measure: '150ml',
          id: 2192,
        },
        {
          name: 'Prawns',
          measure: '8',
          id: 2193,
        },
      ],
    },
    {
      id: 203,
      name: 'Pate Chinois',
      category: 'Beef',
      instructions:
        'In a large pot of salted water, cook the potatoes until they are very tender. Drain.\r\nWith a masher, coarsely crush the potatoes with at least 30 ml (2 tablespoons) of butter. With an electric mixer, purée with the milk. Season with salt and pepper. Set aside.\r\nWith the rack in the middle position, preheat the oven to 190 °C (375 °F).\r\nIn a large skillet, brown the onion in the remaining butter. Add the meat and cook until golden brown. Season with salt and pepper. Remove from the heat.\r\nLightly press the meat at the bottom of a 20-cm (8-inch) square baking dish. Cover with the corn and the mashed potatoes. Sprinkle with paprika and parsley.\r\nBake for about 30 minutes. Finish cooking under the broiler. Let cool for 10 minutes.',
      image: 'yyrrxr1511816289.jpg',
      tags: 'MainMeal,Alcoholic',
      ingredients: [
        {
          name: 'Potatoes',
          measure: '4 cups',
          id: 2194,
        },
        {
          name: 'Butter',
          measure: '60ml',
          id: 2195,
        },
        {
          name: 'Milk',
          measure: '½ cup',
          id: 2196,
        },
        {
          name: 'Minced Beef',
          measure: '450g',
          id: 2197,
        },
        {
          name: 'Onion',
          measure: '1 finely chopped',
          id: 2198,
        },
        {
          name: 'Creamed Corn',
          measure: '500ml',
          id: 2199,
        },
        {
          name: 'Paprika',
          measure: 'to taste',
          id: 2200,
        },
        {
          name: 'Parsley',
          measure: 'to taste',
          id: 2201,
        },
        {
          name: 'Salt',
          measure: 'Dash',
          id: 2202,
        },
        {
          name: 'Pepper',
          measure: 'Dash',
          id: 2203,
        },
      ],
    },
    {
      id: 204,
      name: 'Pouding chomeur',
      category: 'Dessert',
      instructions:
        'In a large bowl, with an electric mixer, mix the butter and sugar till the mix is light.\r\nAdd eggs and vanilla and mix.\r\nIn another bowl, mix flour and baking powder.\r\nAlternate flour mix and milk to the butter mix.\r\nPour into a 13 inch by 9 inch greased pan.\r\nMAPLE SAUCE.\r\nIn a large casserole, bring to boil the syrup, brown sugar, cream and butter and constantly stir.\r\nReduce heat and and gently cook 2 minutes or till sauce has reduced a little bit.\r\nPour sauce gently over cake.\r\nBake at 325°f (160°c) about 35 minutes or till cake is light brown and when toothpick inserted comes out clean.',
      image: 'yqqqwu1511816912.jpg',
      tags: 'Pudding',
      ingredients: [
        {
          name: 'Butter',
          measure: '½ cup',
          id: 2204,
        },
        {
          name: 'Sugar',
          measure: '1 cup',
          id: 2205,
        },
        {
          name: 'Eggs',
          measure: '2',
          id: 2206,
        },
        {
          name: 'Vanilla Extract',
          measure: '1 tsp',
          id: 2207,
        },
        {
          name: 'Flour',
          measure: '2 cups',
          id: 2208,
        },
        {
          name: 'Baking Powder',
          measure: '1 tsp',
          id: 2209,
        },
        {
          name: 'Milk',
          measure: '1 1/4 cup',
          id: 2210,
        },
        {
          name: 'Maple Syrup',
          measure: '1 1/2 cup',
          id: 2211,
        },
        {
          name: 'Brown Sugar',
          measure: '1 1/2 cup',
          id: 2212,
        },
        {
          name: 'Single Cream',
          measure: '1 1/2 cup',
          id: 2213,
        },
        {
          name: 'Butter',
          measure: '1/3 cup',
          id: 2214,
        },
      ],
    },
    {
      id: 205,
      name: 'Peanut Butter Cookies',
      category: 'Dessert',
      instructions:
        'Preheat oven to 350ºF (180ºC).\r\nIn a large bowl, mix together the peanut butter, sugar, and egg.\r\nScoop out a spoonful of dough and roll it into a ball. Place the cookie balls onto a nonstick baking sheet.\r\nFor extra decoration and to make them cook more evenly, flatten the cookie balls by pressing a fork down on top of them, then press it down again at a 90º angle to make a criss-cross pattern.\r\nBake for 8-10 minutes or until the bottom of the cookies are golden brown.\r\nRemove from baking sheet and cool.\r\nEnjoy!',
      image: '1544384070.jpg',
      tags: 'Breakfast,UnHealthy,BBQ',
      ingredients: [
        {
          name: 'Peanut Butter',
          measure: '1 cup',
          id: 2215,
        },
        {
          name: 'Sugar',
          measure: '1/2 cup',
          id: 2216,
        },
        {
          name: 'Egg',
          measure: '1',
          id: 2217,
        },
      ],
    },
    {
      id: 206,
      name: 'Pizza Express Margherita',
      category: 'Miscellaneous',
      instructions:
        '1 Preheat the oven to 230°C.\r\n\r\n2 Add the sugar and crumble the fresh yeast into warm water.\r\n\r\n3 Allow the mixture to stand for 10 – 15 minutes in a warm place (we find a windowsill on a sunny day works best) until froth develops on the surface.\r\n\r\n4 Sift the flour and salt into a large mixing bowl, make a well in the middle and pour in the yeast mixture and olive oil.\r\n\r\n5 Lightly flour your hands, and slowly mix the ingredients together until they bind.\r\n\r\n6 Generously dust your surface with flour.\r\n\r\n7 Throw down the dough and begin kneading for 10 minutes until smooth, silky and soft.\r\n\r\n8 Place in a lightly oiled, non-stick baking tray (we use a round one, but any shape will do!)\r\n\r\n9 Spread the passata on top making sure you go to the edge.\r\n\r\n10 Evenly place the mozzarella (or other cheese) on top, season with the oregano and black pepper, then drizzle with a little olive oil.\r\n\r\n11 Cook in the oven for 10 – 12 minutes until the cheese slightly colours.\r\n\r\n12 When ready, place the basil leaf on top and tuck in!',
      image: 'x0lk931587671540.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Water',
          measure: '150ml',
          id: 2218,
        },
        {
          name: 'Sugar',
          measure: '1 tsp',
          id: 2219,
        },
        {
          name: 'Yeast',
          measure: '15g',
          id: 2220,
        },
        {
          name: 'Plain Flour',
          measure: '225g',
          id: 2221,
        },
        {
          name: 'Salt',
          measure: '1 1/2 tsp',
          id: 2222,
        },
        {
          name: 'Olive Oil',
          measure: 'Drizzle',
          id: 2223,
        },
        {
          name: 'Passata',
          measure: '80g',
          id: 2224,
        },
        {
          name: 'Mozzarella',
          measure: '70g',
          id: 2225,
        },
        {
          name: 'Oregano',
          measure: 'Peeled and Sliced',
          id: 2226,
        },
        {
          name: 'Basil',
          measure: 'Leaves',
          id: 2227,
        },
        {
          name: 'Black Pepper',
          measure: 'Pinch',
          id: 2228,
        },
      ],
    },
    {
      id: 207,
      name: 'Paszteciki (Polish Pasties)',
      category: 'Beef',
      instructions:
        'Sift flour and salt into a large mixing bowl.\r\nUse a spoon to push the egg yolk through a fine sieve into the flour.\r\nAdd the raw egg and mix well.\r\nBeat in butter 1 tablespoon at a time.\r\nPlace dough on a floured surface and knead until smooth and elastic, then wrap in waxed paper and refrigerate until firm (at least 30 minutes).\r\nIn a heavy skillet, melt 2 tablespoons butter over medium heat; saute the onion and rutabaga until the onion is soft and transparent (5 minutes).\r\nPut the onions, rutabaga, and beef through a meat grinder twice if you have one, if not just chop them up as fine as possible.\r\nMelt the remaining 4 tablespoons butter over medium heat, and add the meat mixture.\r\nCook over low heat, stirring occasionally, until all of the liquid has evaporated and the mixture is thick enough to hold its shape.\r\nRemove from heat and let cool, then stir in 1 egg, and season with salt and pepper.\r\nPreheat oven to 350°F.\r\nOn a lightly floured surface, roll the dough out into a 13x8" rectangle (1/8" thick).\r\nSpoon the filling down the center of the rectangle lengthwise, leaving about an inch of space on each end.\r\nLightly brush the long sides with cold water, then fold one of the long sides over the filling and the other side over the top of that.\r\nBrush the short ends with cold water and fold them over the top, enclosing the filling.\r\nPlace pastry seam side down on a baking sheet and brush the top evenly with the remaining scrambled egg.\r\nBake in preheated oven until rich golden brown (30 minutes).\r\nSlice pastry diagonally into 1.5" long pieces and serve as an appetizer or with soup.',
      image: 'c9a3l31593261890.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Flour',
          measure: '1 cup',
          id: 2229,
        },
        {
          name: 'Salt',
          measure: '1/4 tsp',
          id: 2230,
        },
        {
          name: 'Egg',
          measure: '1 Yolk',
          id: 2231,
        },
        {
          name: 'Egg',
          measure: '1',
          id: 2232,
        },
        {
          name: 'Butter',
          measure: '5 tbs',
          id: 2233,
        },
        {
          name: 'Butter',
          measure: '6 tblsp',
          id: 2234,
        },
        {
          name: 'Onion',
          measure: '1/3 cup',
          id: 2235,
        },
        {
          name: 'Swede',
          measure: '1/2 cup',
          id: 2236,
        },
        {
          name: 'Beef Brisket',
          measure: '1/2 lb',
          id: 2237,
        },
        {
          name: 'Eggs',
          measure: '2 Beaten',
          id: 2238,
        },
        {
          name: 'Salt',
          measure: '1 tsp',
          id: 2239,
        },
        {
          name: 'Pepper',
          measure: '1/4 tsp',
          id: 2240,
        },
      ],
    },
    {
      id: 208,
      name: 'Pierogi (Polish Dumplings)',
      category: 'Side',
      instructions:
        'To prepare the sauerkraut filling, melt the butter in a skillet over medium heat. Stir in the onion, and cook until translucent, about 5 minutes. Add the drained sauerkraut and cook for an additional 5 minutes. Season to taste with salt and pepper, then remove to a plate to cool.\r\n\r\nFor the mashed potato filling, melt the butter in a skillet over medium heat. Stir in the onion, and cook until translucent, about 5 minutes. Stir into the mashed potatoes, and season with salt and white pepper.\r\n\r\nTo make the dough, beat together the eggs and sour cream until smooth. Sift together the flour, salt, and baking powder; stir into the sour cream mixture until dough comes together. Knead the dough on a lightly floured surface until firm and smooth. Divide the dough in half, then roll out one half to 1/8 inch thickness. Cut into 3 inch rounds using a biscuit cutter.\r\n\r\nPlace a small spoonful of the mashed potato filling into the center of each round. Moisten the edges with water, fold over, and press together with a fork to seal. Repeat procedure with the remaining dough and the sauerkraut filling.\r\n\r\nBring a large pot of lightly salted water to a boil. Add perogies and cook for 3 to 5 minutes or until pierogi float to the top. Remove with a slotted spoon.',
      image: '45xxr21593348847.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Butter',
          measure: '2 tbs',
          id: 2241,
        },
        {
          name: 'Chopped Onion',
          measure: '1/3 cup',
          id: 2242,
        },
        {
          name: 'Sauerkraut',
          measure: '1 1/2 cups',
          id: 2243,
        },
        {
          name: 'Butter',
          measure: '3 tbs',
          id: 2244,
        },
        {
          name: 'Chopped Onion',
          measure: '1/2 cup',
          id: 2245,
        },
        {
          name: 'Potatoes',
          measure: '2 cups',
          id: 2246,
        },
        {
          name: 'Eggs',
          measure: '3',
          id: 2247,
        },
        {
          name: 'Sour Cream',
          measure: '1 pot',
          id: 2248,
        },
        {
          name: 'Flour',
          measure: '3 cups',
          id: 2249,
        },
        {
          name: 'Salt',
          measure: '1/4 tsp',
          id: 2250,
        },
        {
          name: 'Baking Powder',
          measure: '1 tbs',
          id: 2251,
        },
      ],
    },
    {
      id: 209,
      name: 'Polskie Naleśniki (Polish Pancakes)',
      category: 'Dessert',
      instructions:
        'Add flour, eggs, milk, water, and salt in a large bowl then mix with a hand mixer until you have a smooth, lump-free batter.\r\nAt this point, mix in the butter or the vegetable oil. Alternatively, you can use them to grease the pan before frying each pancake.\r\nHeat a non-stick pan over medium heat, then pour in the batter, swirling the pan to help it spread.\r\nWhen the pancake starts pulling away a bit from the sides, and the top is no longer wet, flip it and cook shortly on the other side as well.\r\nTransfer to a plate. Cook the remaining batter until all used up.\r\nServe warm, with the filling of your choice.',
      image: '58bkyo1593350017.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Flour',
          measure: '1 cup',
          id: 2252,
        },
        {
          name: 'Eggs',
          measure: '2',
          id: 2253,
        },
        {
          name: 'Milk',
          measure: '1 cup',
          id: 2254,
        },
        {
          name: 'Water',
          measure: '3/4 cup',
          id: 2255,
        },
        {
          name: 'Salt',
          measure: 'Pinch',
          id: 2256,
        },
        {
          name: 'Sugar',
          measure: '1 tsp',
          id: 2257,
        },
        {
          name: 'Butter',
          measure: '3 tbs',
          id: 2258,
        },
      ],
    },
    {
      id: 210,
      name: 'Piri-piri chicken and slaw',
      category: 'Chicken',
      instructions:
        'STEP 1\r\n\r\nWhizz together all of the marinade ingredients in a small food processor. Rub the marinade onto the chicken and leave for 1 hour at room temperature.\r\n\r\nSTEP 2\r\n\r\nHeat the oven to 190C/fan 170C/gas 5. Put the chicken in a roasting tray and cook for 1 hour 20 minutes. Rest under loose foil for 20 minutes. While the chicken is resting, mix together the slaw ingredients and season. Serve the chicken with slaw, fries and condiments.',
      image: 'hglsbl1614346998.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Chicken',
          measure: '1.5kg',
          id: 2259,
        },
        {
          name: 'Red Chilli',
          measure: '3 chopped',
          id: 2260,
        },
        {
          name: 'Garlic',
          measure: '2 cloves',
          id: 2261,
        },
        {
          name: 'Ginger',
          measure: '1 tsp',
          id: 2262,
        },
        {
          name: 'Dried Oregano',
          measure: '1 tsp',
          id: 2263,
        },
        {
          name: 'Coriander',
          measure: '1 tsp',
          id: 2264,
        },
        {
          name: 'Paprika',
          measure: '1 tsp',
          id: 2265,
        },
        {
          name: 'Red Wine Vinegar',
          measure: '2 tbs',
          id: 2266,
        },
        {
          name: 'Oil',
          measure: '2 tbs',
          id: 2267,
        },
        {
          name: 'Red Onions',
          measure: '1 sliced',
          id: 2268,
        },
        {
          name: 'Carrots',
          measure: '2',
          id: 2269,
        },
        {
          name: 'Beetroot',
          measure: '1',
          id: 2270,
        },
        {
          name: 'Cabbage',
          measure: '4 leaves',
          id: 2271,
        },
        {
          name: 'Mayonnaise',
          measure: '2 tbs',
          id: 2272,
        },
        {
          name: 'Greek Yogurt',
          measure: '2 tbs',
          id: 2273,
        },
        {
          name: 'Red Wine Vinegar',
          measure: '2 tbs',
          id: 2274,
        },
        {
          name: 'Cumin Seeds',
          measure: '1 tsp',
          id: 2275,
        },
      ],
    },
    {
      id: 211,
      name: 'Portuguese prego with green piri-piri',
      category: 'Beef',
      instructions:
        'STEP 1\r\n\r\nRub the garlic over the steaks then put in a sandwich bag and tip in the olive oil, sherry vinegar and parsley stalks. Smoosh everything together, then use a rolling pin to bash the steaks a few times. Leave for 1-2 hours.\r\n\r\nSTEP 2\r\n\r\nTo make the sauce, put all the ingredients into a blender with 1 tbsp water and whizz until as smooth as possible. This will make more than you’ll need for the recipe but will keep for a week in an airtight jar.\r\n\r\nSTEP 3\r\n\r\nHeat a griddle or frying pan to high. Brush away the garlic and parsley stalks from the steaks and season well. Sear the steaks for 2 minutes on each side then rest on a plate. Put the ciabatta halves onto the plate, toasted-side down, to soak up any juices.\r\n\r\nSTEP 4\r\n\r\nSlice the steaks then stuff into the rolls with the green sauce and rocket.',
      image: 'ewcikl1614348364.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Garlic',
          measure: '1 clove',
          id: 2276,
        },
        {
          name: 'Beef Fillet',
          measure: '2 small',
          id: 2277,
        },
        {
          name: 'Olive Oil',
          measure: '2 tbs',
          id: 2278,
        },
        {
          name: 'Vinegar',
          measure: '1 tbs',
          id: 2279,
        },
        {
          name: 'Parsley',
          measure: 'Leaves',
          id: 2280,
        },
        {
          name: 'Ciabatta',
          measure: '2',
          id: 2281,
        },
        {
          name: 'Rocket',
          measure: '2 handfulls',
          id: 2282,
        },
        {
          name: 'Basil Leaves',
          measure: 'Small bunch',
          id: 2283,
        },
        {
          name: 'Parsley',
          measure: 'Small bunch',
          id: 2284,
        },
        {
          name: 'Jalapeno',
          measure: '1',
          id: 2285,
        },
        {
          name: 'Vinegar',
          measure: '1 tbs',
          id: 2286,
        },
        {
          name: 'Spring Onions',
          measure: '2 chopped',
          id: 2287,
        },
        {
          name: 'Garlic',
          measure: '1/2',
          id: 2288,
        },
        {
          name: 'Caster Sugar',
          measure: '1/2 tsp',
          id: 2289,
        },
      ],
    },
    {
      id: 212,
      name: 'Portuguese barbecued pork (Febras assadas)',
      category: 'Pork',
      instructions:
        'STEP 1\r\n\r\nCut the tenderloins into 5 equal-size pieces leaving the tail ends a little longer. Take a clear plastic bag and slip one of the pieces in. Bash it into an escalope the size of a side-plate with a rolling pin and repeat with the remaining pieces.\r\n\r\nSTEP 2\r\n\r\nPut the wine, paprika, some salt and pepper and the juice of ½ a lemon in a bowl and add the pork. Leave to marinate for 20-30 minutes, while you get your barbecue to the stage where the coals are glowing but there are no flames.\r\n\r\nSTEP 3\r\n\r\nTo make the chips, fill a basin with cool water and cut the potatoes into 3cm-thick chips. Soak them in the water for 5 minutes and then change the water. Leave for 5 more minutes. Drain and then pat dry on a towel or with kitchen paper.\r\n\r\nSTEP 4\r\n\r\nHeat the oil in a deep fryer or a deep heavy-based pan with a lid to 130C and lower the chips into the oil (in batches). Blanch for 8-10 minutes. Remove from the oil and drain well. Place on a tray to cool. Reheat the oil to 180C (make sure it’s hot or your chips will be soggy) and lower the basket of chips into the oil (again, do this in batches). Leave to cook for 2 minutes and then give them a little shake. Cook for another minute or so until they are well coloured and crisp to the touch. Drain well for a few minutes, tip into a bowl and sprinkle with sea salt.\r\n\r\nSTEP 5\r\n\r\nThe pork will cook quickly so do it in 2 batches. Take the pieces out of the marinade, rub them with oil, and drop them onto the barbecue (you could also use a chargrill). Cook for 1 minute on each side – they may flare up as you do so. This should really be enough time as they will keep on cooking. Take them off the barbecue and pile onto a plate. Repeat with the remaining batch.\r\n\r\nSTEP 6\r\n\r\nServe by piling a plate with chips, drop the pork on top of each pile and pouring the juices from the plate over so the chips take up the flavours. Top with a spoon of mayonnaise and a wedge of lemon.',
      image: 'cybyue1614349443.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Pork',
          measure: '2',
          id: 2290,
        },
        {
          name: 'White Wine',
          measure: '200ml',
          id: 2291,
        },
        {
          name: 'Paprika',
          measure: '1/2 tsp',
          id: 2292,
        },
        {
          name: 'Lemon',
          measure: '2',
          id: 2293,
        },
        {
          name: 'Lemon Juice',
          measure: '1/2',
          id: 2294,
        },
        {
          name: 'Olive Oil',
          measure: 'Dash',
          id: 2295,
        },
        {
          name: 'Mayonnaise',
          measure: 'To serve',
          id: 2296,
        },
        {
          name: 'Potatoes',
          measure: '1 kg',
          id: 2297,
        },
        {
          name: 'Vegetable Oil',
          measure: 'For frying',
          id: 2298,
        },
      ],
    },
    {
      id: 213,
      name: 'Portuguese fish stew (Caldeirada de peixe)',
      category: 'Seafood',
      instructions:
        'STEP 1\r\n\r\nHeat a drizzle of oil in a large, deep-sided frying pan, and fry the onion and pepper on a medium heat until softened but not browned. Finely chop the coriander stalks (keep the leaves for later), and add to the pan with the chilli and chopped garlic. Fry for another few minutes. Add the wine, saffron and bay leaf and let it simmer until reduced by half.\r\n\r\nSTEP 2\r\n\r\nAdd the potatoes, tomatoes, and 300ml water and bring to a gentle boil. Break up the tomatoes with a spoon on the side of the pan and simmer for 20-25 minutes until the potatoes are just tender, and the tomatoes have broken down.\r\n\r\nSTEP 3\r\n\r\nSeason well, then gently push the fish into the sauce, and arrange the squid, prawns, clams and mussels on the surface. Put the lid on and cook for 6-8 minutes until the mussel and clam shells have opened, the prawns are cooked and the fish is flaky. Toast the bread, rub lightly with the halved garlic clove and drizzle with olive oil. Serve the stew scatted with chopped coriander leaves, and the toasts for dunking.',
      image: 'do7zps1614349775.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Onions',
          measure: '2 finely chopped',
          id: 2299,
        },
        {
          name: 'Red Pepper',
          measure: '1 Diced',
          id: 2300,
        },
        {
          name: 'Coriander',
          measure: 'Small bunch',
          id: 2301,
        },
        {
          name: 'Red Chilli',
          measure: '1 small',
          id: 2302,
        },
        {
          name: 'Garlic',
          measure: '3 cloves',
          id: 2303,
        },
        {
          name: 'Dry White Wine',
          measure: '400ml',
          id: 2304,
        },
        {
          name: 'Saffron',
          measure: 'Pinch',
          id: 2305,
        },
        {
          name: 'Bay Leaf',
          measure: '1',
          id: 2306,
        },
        {
          name: 'Potatoes',
          measure: '300g',
          id: 2307,
        },
        {
          name: 'Plum Tomatoes',
          measure: '400g',
          id: 2308,
        },
        {
          name: 'Cod',
          measure: '600g',
          id: 2309,
        },
        {
          name: 'Squid',
          measure: '300g',
          id: 2310,
        },
        {
          name: 'Tiger Prawns',
          measure: '8',
          id: 2311,
        },
        {
          name: 'Clams',
          measure: '500g',
          id: 2312,
        },
        {
          name: 'Mussels',
          measure: '500g',
          id: 2313,
        },
        {
          name: 'Baguette',
          measure: '1 sliced',
          id: 2314,
        },
      ],
    },
    {
      id: 214,
      name: 'Portuguese custard tarts',
      category: 'Dessert',
      instructions:
        'STEP 1\r\nRoll the pastry\r\nMix the flour and icing sugar, and use this to dust the work surface. Roll the pastry out to make a 45 x 30cm rectangle. Roll up lengthways to create a long sausage shape.\r\n\r\nSTEP 2\r\nCutting pastry into rounds\r\nCut the pastry into 24 wheels, about 1-2cm thick.\r\n\r\nSTEP 3\r\nRoll out each pastry portion\r\nRoll each wheel lightly with the rolling pin to fit 2 x 12-hole non-stick fairy cake tins.\r\n\r\nSTEP 4\r\nPress pastry into the tin\r\nPress the pastry circles into the tins and mould into the tins to make thin cases. Chill until needed.\r\n\r\nSTEP 5\r\nMake the infused syrup\r\nHeat the oven to 220C/fan 200C/gas 7. Make a sugar syrup by bringing the sugar, 200ml water, lemon zest and cinnamon stick to the boil. Reduce until syrupy, allow to cool, then remove the cinnamon and lemon. Whisk the eggs, egg yolks and cornflour until smooth in another large pan.\r\n\r\nSTEP 6\r\nMaking custard\r\nHeat the milk and vanilla pod seeds in a separate pan until just below the boil. Gradually pour the hot milk over the eggs and cornflour, then cook on a low heat, continually whisking.\r\n\r\nSTEP 7\r\nAdd syrup to custard\r\nAdd the cooled sugar syrup to the custard and whisk until thickened slightly.\r\n\r\nSTEP 8\r\nPour custard into the tins\r\nPour the custard through a sieve. Pour into the pastry cases and bake for 15 minutes until the pastry is golden and the custard has darkened.\r\n\r\nSTEP 9\r\ncool and dust with icing sugar\r\nCool completely in the tins then sift over icing sugar and ground cinnamon to serve.\r\n\r\n\r\n\r\n ',
      image: 'vmz7gl1614350221.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Plain Flour',
          measure: '2 tbs',
          id: 2315,
        },
        {
          name: 'Icing Sugar',
          measure: '2 tbs',
          id: 2316,
        },
        {
          name: 'Puff Pastry',
          measure: '375g',
          id: 2317,
        },
        {
          name: 'Caster Sugar',
          measure: '250g',
          id: 2318,
        },
        {
          name: 'Lemon Zest',
          measure: '2 strips',
          id: 2319,
        },
        {
          name: 'Cinnamon',
          measure: '1 Stick',
          id: 2320,
        },
        {
          name: 'Eggs',
          measure: '2',
          id: 2321,
        },
        {
          name: 'Egg Yolks',
          measure: '4',
          id: 2322,
        },
        {
          name: 'Corn Flour',
          measure: '50g',
          id: 2323,
        },
        {
          name: 'Whole Milk',
          measure: '500ml',
          id: 2324,
        },
        {
          name: 'Vanilla',
          measure: 'Pod of',
          id: 2325,
        },
        {
          name: 'Cinnamon',
          measure: 'To serve',
          id: 2326,
        },
      ],
    },
    {
      id: 215,
      name: 'Potato Salad (Olivier Salad)',
      category: 'Vegetarian',
      instructions:
        'Cut the potatoes and carrots into small uniform cubes.\r\nPlace them in a large pot and fill with water.\r\nAdd salt and vinegar. Bring it to a boil over medium high heat, and then reduce the heat to medium and continue to cook until the potatoes are cooked through, about 15 minutes. Drain the potatoes and let it cool to room temperature.\r\nMeanwhile, cut the sausage and pickles into small cubes, and chop the green onions.\r\nCut the hard-boiled eggs into small cubes as well.\r\nIf using fresh dill, chop them as well.\r\nIn a large bowl, combine potatoes, carrots, sausage, pickles, peas and green onions.\r\nAdd mayo and dill and mix until well combined.\r\nSalt and pepper to taste. Cover with a plastic wrap and refrigerate for at least 1 hour before serving.',
      image: 'ebvuir1699013665.jpg',
      tags: 'salad',
      ingredients: [
        {
          name: 'Potatoes',
          measure: '4',
          id: 2327,
        },
        {
          name: 'Carrots',
          measure: '3',
          id: 2328,
        },
        {
          name: 'Salt',
          measure: '1 tbs',
          id: 2329,
        },
        {
          name: 'White Wine Vinegar',
          measure: '1/2 tbs',
          id: 2330,
        },
        {
          name: 'Eggs',
          measure: '4',
          id: 2331,
        },
        {
          name: 'Sausages',
          measure: '7 oz',
          id: 2332,
        },
        {
          name: 'Dill',
          measure: '4 oz',
          id: 2333,
        },
        {
          name: 'Peas',
          measure: '1 can',
          id: 2334,
        },
        {
          name: 'Onions',
          measure: '4',
          id: 2335,
        },
        {
          name: 'Mayonnaise',
          measure: '1 cup',
          id: 2336,
        },
      ],
    },
    {
      id: 216,
      name: 'Rigatoni with fennel sausage sauce',
      category: 'Lamb',
      instructions:
        'Heat a tablespoon of oil in a large saute pan for which you have a lid. Add the sausage pieces and fry on a medium-high heat for 10 minutes, stirring regularly, until golden-brown all over. Transfer the sausages to a plate, then add the onion and fennel to the hot pan and fry for 15 minutes, stirring once in a while, until soft and caramelised; if the pan goes a bit dry, add a teaspoon or so of extra oil. Stir in the paprika, garlic and half the fennel seeds, fry for two minutes more, then pour on the wine and boil for 30 seconds, to reduce by half. Add the tomatoes, sugar, 100ml water, the seared sausage and half a teaspoon of salt, cover and simmer for 30 minutes; remove the lid after 10 minutes, and cook until the sauce is thick and rich. Remove from the heat, stir through the olives and remaining fennel seeds and set aside until you’re ready to serve.\r\n\r\nBring a large pot of salted water to a boil, add the pasta and cook for 12-14 minutes (or according to the instructions on the packet), until al dente. Meanwhile, reheat the sauce. Drain the pasta, return it to the pot, stir in a tablespoon of oil, then divide between the bowls. \r\n\r\nPut all the pesto ingredients except the basil in the small bowl of a food processor. Add a tablespoon of water and blitz to a rough paste. Add the basil, then blitz until just combined (the pesto has a much better texture if the basil is not overblended).\r\n\r\nSpoon over the ragù and top with a spoonful of pesto. Finish with a sprinkling of chopped fennel fronds, if you have any, and serve at once.',
      image: 'qtqvys1468573168.jpg',
      tags: 'Pasta',
      ingredients: [
        {
          name: 'olive oil',
          measure: '2½ tbsp',
          id: 2337,
        },
        {
          name: 'Italian fennel sausages',
          measure: '6 cut into 1.5cm-thick slices',
          id: 2338,
        },
        {
          name: 'onion',
          measure: '1 large peeled and chopped',
          id: 2339,
        },
        {
          name: 'fennel bulb',
          measure:
            '1 trimmed and roughly chopped; reserve any fronds to garnish',
          id: 2340,
        },
        {
          name: 'smoky paprika',
          measure: '½ tsp',
          id: 2341,
        },
        {
          name: 'garlic',
          measure: '1 clove, peeled and sliced',
          id: 2342,
        },
        {
          name: 'fennel seeds',
          measure: '2 tsp lightly toasted and then gently crushed',
          id: 2343,
        },
        {
          name: 'red wine',
          measure: '100ml',
          id: 2344,
        },
        {
          name: 'chopped tomatoes',
          measure: '400g tinned',
          id: 2345,
        },
        {
          name: 'caster sugar',
          measure: '½ tsp',
          id: 2346,
        },
        {
          name: 'pitted black olives',
          measure: '50g cut in half lengthways',
          id: 2347,
        },
        {
          name: 'rigatoni',
          measure: '500g',
          id: 2348,
        },
        {
          name: 'pecorino',
          measure: '30g roughly crumbled into 0.5cm pieces',
          id: 2349,
        },
        {
          name: 'anchovy fillet',
          measure: '1  rinsed and patted dry',
          id: 2350,
        },
        {
          name: 'garlic',
          measure: '1 clove, peeled and crushed',
          id: 2351,
        },
        {
          name: 'olive oil',
          measure: '60ml',
          id: 2352,
        },
        {
          name: 'basil leaves',
          measure: '50g torn',
          id: 2353,
        },
      ],
    },
    {
      id: 217,
      name: 'Rocky Road Fudge',
      category: 'Dessert',
      instructions:
        'Line an 8-inch-square baking pan with wax paper or foil, and coat with non-stick spray.\r\nPour ½ cup of the miniature marshmallows into the bottom of the lined baking dish.\r\nIn a microwave-safe bowl, combine the chocolate chips and peanut butter. Microwave the chocolate mixture in 20-second intervals, stirring in between each interval, until the chocolate is melted.\r\nAdd the vanilla extract and stir well, until smooth.\r\nReserve 2 tablespoons of the chopped almonds or peanuts, and set aside.\r\nFold 1 ½ cups of the miniature marshmallows and the remaining chopped nuts into the chocolate mixture.\r\nTransfer the chocolate mixture into the prepared pan and spread into an even layer. Immediately top with the reserved chopped nuts and the mallow bits or additional miniature marshmallows, if using.\r\nRefrigerate for 4 hours, or until set.\r\nRemove the fudge and wax paper from the pan. Carefully peel all of wax paper from the fudge.\r\nCut the fudge into bite-sized pieces and serve.',
      image: 'vtxyxv1483567157.jpg',
      tags: 'Chocolate,Snack,Sweet,Baking',
      ingredients: [
        {
          name: 'Miniature Marshmallows',
          measure: '2 cups',
          id: 2354,
        },
        {
          name: 'Chocolate Chips',
          measure: '3 cups',
          id: 2355,
        },
        {
          name: 'Peanut Butter',
          measure: '½ cup',
          id: 2356,
        },
        {
          name: 'Vanilla Extract',
          measure: '1 tsp',
          id: 2357,
        },
        {
          name: 'Peanuts',
          measure: '1 ¼ cups',
          id: 2358,
        },
      ],
    },
    {
      id: 218,
      name: 'Recheado Masala Fish',
      category: 'Seafood',
      instructions:
        "Soak all the spices, ginger, garlic, tamarind pulp and kashmiri chilies except oil in vinegar.\r\nAdd sugar and salt.\r\nAlso add turmeric powder.\r\nCombine all nicely and marinate for 35-40 mins.\r\nGrind the mixture until soft and smooth. Add more vinegar if required but ensure the paste has to be thick so add vinegar accordingly. If the masala paste is thin then it would not stick to the fish.\r\nRinse the fish slit from the center and give some incision from the top. You could see the fish below for clarity.\r\nNow stuff the paste into the center and into the incision. Coat the entire fish with this paste. Marinate the fish for 30 mins.\r\nPlace oil in a shallow pan, once oil is quite hot shallow fry the stuffed mackerels.\r\nFry until golden brown from both sides\r\nServe the recheado mackerels hot with salad, lime wedges, rice and curry.\r\nNotes\r\n1. Ensure the masala paste is thick else the result won't be good.\r\n2. If you aren't able to find kashmiri chilies then use bedgi chilies or kashmiri red chili powder.\r\n3. You could use white vinegar or coconut vinegar.\r\n4. Any left over paste could be stored in the fridge for future use.\r\n5. Cinnamon could be avoided as it's a strong spice used generally for meat or chicken.",
      image: 'uwxusv1487344500.jpg',
      tags: 'Fish,Spicy',
      ingredients: [
        {
          name: 'Mackerel',
          measure: '4',
          id: 2359,
        },
        {
          name: 'Red Chili',
          measure: '18 dried',
          id: 2360,
        },
        {
          name: 'Ginger',
          measure: '1 inch',
          id: 2361,
        },
        {
          name: 'Garlic',
          measure: '8 cloves',
          id: 2362,
        },
        {
          name: 'Pepper',
          measure: '1.5 tsp',
          id: 2363,
        },
        {
          name: 'Cumin',
          measure: '1 tsp',
          id: 2364,
        },
        {
          name: 'Turmeric',
          measure: '½ tsp',
          id: 2365,
        },
        {
          name: 'Cinnamon stick',
          measure: '',
          id: 2366,
        },
        {
          name: 'Clove',
          measure: '4',
          id: 2367,
        },
        {
          name: 'Cardamom',
          measure: '2',
          id: 2368,
        },
        {
          name: 'Sugar',
          measure: '1 tbsp',
          id: 2369,
        },
        {
          name: 'Tamarind ball',
          measure: '2 marble sized',
          id: 2370,
        },
        {
          name: 'Vinegar',
          measure: '2.5 tbsp',
          id: 2371,
        },
        {
          name: 'Oil',
          measure: 'for frying',
          id: 2372,
        },
      ],
    },
    {
      id: 219,
      name: 'Ribollita',
      category: 'Vegetarian',
      instructions:
        'Put 2 tablespoons of the oil in a large pot over medium heat. When it’s hot, add onion, carrot, celery and garlic; sprinkle with salt and pepper and cook, stirring occasionally, until vegetables are soft, 5 to 10 minutes.\r\nHeat the oven to 500 degrees. Drain the beans; if they’re canned, rinse them as well. Add them to the pot along with tomatoes and their juices and stock, rosemary and thyme. Bring to a boil, then reduce heat so the soup bubbles steadily; cover and cook, stirring once or twice to break up the tomatoes, until the flavors meld, 15 to 20 minutes.\r\nFish out and discard rosemary and thyme stems, if you like, and stir in kale. Taste and adjust seasoning. Lay bread slices on top of the stew so they cover the top and overlap as little as possible. Scatter red onion slices over the top, drizzle with the remaining 3 tablespoons oil and sprinkle with Parmesan.\r\nPut the pot in the oven and bake until the bread, onions and cheese are browned and crisp, 10 to 15 minutes. (If your pot fits under the broiler, you can also brown the top there.) Divide the soup and bread among 4 bowls and serve.',
      image: 'xrrwpx1487347049.jpg',
      tags: 'Vegetarian',
      ingredients: [
        {
          name: 'Olive Oil',
          measure: '5 tablespoons',
          id: 2373,
        },
        {
          name: 'Onion',
          measure: '1 chopped',
          id: 2374,
        },
        {
          name: 'Carrot',
          measure: '1 chopped',
          id: 2375,
        },
        {
          name: 'Celery',
          measure: '1 stalk chopped',
          id: 2376,
        },
        {
          name: 'Garlic',
          measure: '1 tablespoon minced',
          id: 2377,
        },
        {
          name: 'Cannellini Beans',
          measure: '2 cups',
          id: 2378,
        },
        {
          name: 'Canned tomatoes',
          measure: '1',
          id: 2379,
        },
        {
          name: 'Water',
          measure: '4 cups',
          id: 2380,
        },
        {
          name: 'Rosemary',
          measure: '1 fresh sprig',
          id: 2381,
        },
        {
          name: 'Thyme',
          measure: '1 fresh sprig',
          id: 2382,
        },
        {
          name: 'Kale',
          measure: '1 pound chopped',
          id: 2383,
        },
        {
          name: 'Wholegrain Bread',
          measure: '4 thick slices',
          id: 2384,
        },
        {
          name: 'Red Onion',
          measure: '1 thinly sliced',
          id: 2385,
        },
        {
          name: 'Parmesan',
          measure: '½ cup freshly grated',
          id: 2386,
        },
      ],
    },
    {
      id: 220,
      name: 'Roasted Eggplant With Tahini, Pine Nuts, and Lentils',
      category: 'Vegetarian',
      instructions:
        '\r\nFor the Lentils: Adjust oven rack to center position and preheat oven to 450°F to prepare for roasting eggplant. Meanwhile, heat 2 tablespoons olive oil in a medium saucepan over medium heat until shimmering. Add carrots, celery, and onion and cook, stirring, until softened but not browned, about 4 minutes. Add garlic and cook, stirring, until fragrant, about 30 seconds. Add lentils, bay leaves, stock or water, and a pinch of salt. Bring to a simmer, cover with the lid partially ajar, and cook until lentils are tender, about 30 minutes. (Top up with water if lentils are at any point not fully submerged.) Remove lid, stir in vinegar, and reduce until lentils are moist but not soupy. Season to taste with salt and pepper, cover, and keep warm until ready to serve.\r\n\r\n2.\r\nFor the Eggplant: While lentils cook, cut each eggplant in half. Score flesh with the tip of a paring knife in a cross-hatch pattern at 1-inch intervals. Transfer to a foil-lined rimmed baking sheet, cut side up, and brush each eggplant half with 1 tablespoon oil, letting each brushstroke be fully absorbed before brushing with more. Season with salt and pepper. Place a rosemary sprig on top of each one. Transfer to oven and roast until completely tender and well charred, 25 to 35 minutes. Remove from oven and discard rosemary.\r\n\r\n3.\r\nTo Serve: Heat 2 tablespoons olive oil and pine nuts in a medium skillet set over medium heat. Cook, tossing nuts frequently, until golden brown and aromatic, about 4 minutes. Transfer to a bowl to halt cooking. Stir half of parsley and rosemary into lentils and transfer to a serving platter. Arrange eggplant halves on top. Spread a few tablespoons of tahini sauce over each eggplant half and sprinkle with pine nuts. Sprinkle with remaining parsley and rosemary, drizzle with additional olive oil, and serve.',
      image: 'ysqrus1487425681.jpg',
      tags: 'Vegetarian,Pulse,Nutty',
      ingredients: [
        {
          name: 'Olive Oil',
          measure: '2 tablespoons',
          id: 2387,
        },
        {
          name: 'Carrots',
          measure: '2 small cut into chunks',
          id: 2388,
        },
        {
          name: 'Celery',
          measure: '2 small stalks',
          id: 2389,
        },
        {
          name: 'Onion',
          measure: '1 medium finely diced',
          id: 2390,
        },
        {
          name: 'Garlic',
          measure: '6 medium cloves sliced',
          id: 2391,
        },
        {
          name: 'Brown Lentils',
          measure: '12 ounces (340g)',
          id: 2392,
        },
        {
          name: 'Bay Leaves',
          measure: '2',
          id: 2393,
        },
        {
          name: 'Water',
          measure: '4 cups',
          id: 2394,
        },
        {
          name: 'Salt',
          measure: 'Pinch',
          id: 2395,
        },
        {
          name: 'Apple Cider Vinegar',
          measure: '2 teaspoons (10ml)',
          id: 2396,
        },
        {
          name: 'Pepper',
          measure: 'Pinch',
          id: 2397,
        },
        {
          name: 'Egg Plants',
          measure: '2 large',
          id: 2398,
        },
        {
          name: 'Rosemary',
          measure: '4 sprigs',
          id: 2399,
        },
        {
          name: 'Pine nuts',
          measure: '1/4 cup',
          id: 2400,
        },
        {
          name: 'Parsley',
          measure: '2 tablespoons',
          id: 2401,
        },
      ],
    },
    {
      id: 221,
      name: 'Rock Cakes',
      category: 'Dessert',
      instructions:
        'Preheat oven to 180C/350F/Gas 4 and line a baking tray with baking parchment.\r\nMix the flour, sugar and baking powder in a bowl and rub in the cubed butter until the mixture looks like breadcrumbs, then mix in the dried fruit.\r\nIn a clean bowl, beat the egg and milk together with the vanilla extract.\r\nAdd the egg mixture to the dry ingredients and stir with a spoon until the mixture just comes together as a thick, lumpy dough. Add a teaspoon more milk if you really need it to make the mixture stick together.\r\nPlace golfball-sized spoons of the mixture onto the prepared baking tray. Leave space between them as they will flatten and spread out to double their size during baking.\r\nBake for 15-20 minutes, until golden-brown. Remove from the oven, allow to cool for a couple of minutes then turn them out onto a wire rack to cool.',
      image: 'tqrrsq1511723764.jpg',
      tags: 'Baking,Cake',
      ingredients: [
        {
          name: 'Self-raising Flour',
          measure: '225g',
          id: 2402,
        },
        {
          name: 'Caster Sugar',
          measure: '75g',
          id: 2403,
        },
        {
          name: 'Baking Powder',
          measure: '1 tsp',
          id: 2404,
        },
        {
          name: 'Butter',
          measure: '125g',
          id: 2405,
        },
        {
          name: 'Dried Fruit',
          measure: '150g',
          id: 2406,
        },
        {
          name: 'Eggs',
          measure: '1',
          id: 2407,
        },
        {
          name: 'Milk',
          measure: '1 tbs',
          id: 2408,
        },
        {
          name: 'Vanilla Extract',
          measure: '2 tsp',
          id: 2409,
        },
      ],
    },
    {
      id: 222,
      name: 'Ratatouille',
      category: 'Vegetarian',
      instructions:
        'Cut the aubergines in half lengthways. Place them on the board, cut side down, slice in half lengthways again and then across into 1.5cm chunks. Cut off the courgettes ends, then across into 1.5cm slices. Peel the peppers from stalk to bottom. Hold upright, cut around the stalk, then cut into 3 pieces. Cut away any membrane, then chop into bite-size chunks.\r\nScore a small cross on the base of each tomato, then put them into a heatproof bowl. Pour boiling water over the tomatoes, leave for 20 secs, then remove. Pour the water away, replace the tomatoes and cover with cold water. Leave to cool, then peel the skin away. Quarter the tomatoes, scrape away the seeds with a spoon, then roughly chop the flesh.\r\nSet a sauté pan over medium heat and when hot, pour in 2 tbsp olive oil. Brown the aubergines for 5 mins on each side until the pieces are soft. Set them aside and fry the courgettes in another tbsp oil for 5 mins, until golden on both sides. Repeat with the peppers. Don’t overcook the vegetables at this stage, as they have some more cooking left in the next step.\r\nTear up the basil leaves and set aside. Cook the onion in the pan for 5 mins. Add the garlic and fry for a further min. Stir in the vinegar and sugar, then tip in the tomatoes and half the basil. Return the vegetables to the pan with some salt and pepper and cook for 5 mins. Serve with basil.',
      image: 'wrpwuu1511786491.jpg',
      tags: 'Vegetables,SideDish',
      ingredients: [
        {
          name: 'Aubergine',
          measure: '2 large',
          id: 2410,
        },
        {
          name: 'Courgettes',
          measure: '4',
          id: 2411,
        },
        {
          name: 'Yellow Pepper',
          measure: '2',
          id: 2412,
        },
        {
          name: 'Tomato',
          measure: '4 large',
          id: 2413,
        },
        {
          name: 'Olive Oil',
          measure: '5 tbs',
          id: 2414,
        },
        {
          name: 'Basil',
          measure: 'Bunch',
          id: 2415,
        },
        {
          name: 'Onion',
          measure: '1 medium',
          id: 2416,
        },
        {
          name: 'Garlic Clove',
          measure: '3 finely chopped',
          id: 2417,
        },
        {
          name: 'Red Wine Vinegar',
          measure: '1 tsp',
          id: 2418,
        },
        {
          name: 'Sugar',
          measure: '1 tsp',
          id: 2419,
        },
      ],
    },
    {
      id: 223,
      name: 'Rappie Pie',
      category: 'Chicken',
      instructions:
        'Preheat oven to 400 degrees F (200 degrees C). Grease a 10x14x2-inch baking pan.\r\nHeat margarine in a skillet over medium heat; stir in onion. Cook and stir until onion has softened and turned translucent, about 5 minutes. Reduce heat to low and continue to cook and stir until onion is very tender and dark brown, about 40 minutes more.\r\nBring chicken broth to a boil in a large pot; stir in chicken breasts, reduce heat, and simmer until chicken is no longer pink at the center, about 20 minutes. Remove from heat. Remove chicken breasts to a plate using a slotted spoon; reserve broth.\r\nJuice potatoes with an electric juicer; place dry potato flesh into a bowl and discard juice. Stir salt and pepper into potatoes; stir in enough reserved broth to make the mixture the consistency of oatmeal. Set remaining broth aside.\r\nSpread half of potato mixture evenly into the prepared pan. Lay cooked chicken breast evenly over potatoes; scatter caramelized onion evenly over chicken. Spread remaining potato mixture over onions and chicken to cover.\r\nBake in the preheated oven until golden brown, about 1 hour. Reheat chicken broth; pour over individual servings as desired.',
      image: 'ruwpww1511817242.jpg',
      tags: 'Pie',
      ingredients: [
        {
          name: 'Butter',
          measure: '2 tbs',
          id: 2420,
        },
        {
          name: 'Onions',
          measure: '2 chopped',
          id: 2421,
        },
        {
          name: 'Chicken Stock',
          measure: '4 qt',
          id: 2422,
        },
        {
          name: 'Chicken Breast',
          measure: '1.5kg',
          id: 2423,
        },
        {
          name: 'Potatoes',
          measure: '4kg',
          id: 2424,
        },
        {
          name: 'Salt',
          measure: '2 tbs',
          id: 2425,
        },
        {
          name: 'Black Pepper',
          measure: '1tbsp',
          id: 2426,
        },
      ],
    },
    {
      id: 224,
      name: 'Red Peas Soup',
      category: 'Beef',
      instructions:
        'Wash and rinse the dried kidney beans.. then cover with water in a deep bowl. Remember as they soak they will expand to at least triple the size they were originally so add a lot of water to the bowl. Soak them overnight or for at least 2 hrs to make the cooking step go quicker. I tossed out the water they were soaked in after it did the job.\r\n\r\nHave your butcher cut the salted pigtail into 2 inch pieces as it will be very difficult to cut with an ordinary kitchen knife. Wash, then place a deep pot with water and bring to a boil. Cook for 20 minutes, then drain + rinse and repeat (boil again in water). The goal is to make the pieces of pig tails tender and to remove most of the salt it was cured in.\r\n\r\nTime to start the soup. Place everything in the pot (except the flour and potato), then cover with water and place on a high flame to bring to a boil. As it comes to a boil, skim off any scum/froth at the top and discard. Reduce the heat to a gentle boil and allow it to cook for 1 hr and 15 mins.. basically until the beans are tender and start falling apart.\r\n\r\nIt’s now time to add the potato (and Yams etc if you’re adding it) as well as the coconut milk and continue cooking for 15 minutes.\r\n\r\nNow is a good time to start making the basic dough for the spinner dumplings. Mix the flour and water (add a pinch of salt if you want) until you have a soft/smooth dough. allow it to rest for 5 minutes, then pinch of a tablespoon at a time and roll between your hands to form a cigarette shape.\r\n\r\nAdd them to the pot, stir well and continue cooking for another 15 minutes on a rolling boil.\r\n\r\nYou’ll notice that I didn’t add any salt to the pot as the remaining salt from the salted pigtails will be enough to properly season this dish. However you can taste and adjust accordingly. Lets recap the timing part of things so you’re not confused. Cook the base of the soup for 1 hr and 15 minute or until tender, then add the potatoes and cook for 15 minutes, then add the dumplings and cook for a further 15 minutes. Keep in mind that this soup will thicken quite a bit as it cools.\r\n\r\nWhile this is not a traditional recipe to any one specific island, versions of this soup (sometimes called stewed peas) can be found throughout the Caribbean, Latin America and Africa. A hearty bowl of this soup will surely give you the sleepies (some may call it ethnic fatigue). You can certainly freeze the leftovers and heat it up another day.',
      image: 'sqpqtp1515365614.jpg',
      tags: 'Soup,SideDish',
      ingredients: [
        {
          name: 'Kidney Beans',
          measure: '2 cups',
          id: 2427,
        },
        {
          name: 'Carrots',
          measure: '1 large',
          id: 2428,
        },
        {
          name: 'Spring Onions',
          measure: '2 chopped',
          id: 2429,
        },
        {
          name: 'Thyme',
          measure: '4 sprigs',
          id: 2430,
        },
        {
          name: 'Onion',
          measure: '1 Diced',
          id: 2431,
        },
        {
          name: 'Black Pepper',
          measure: '1/2 tsp',
          id: 2432,
        },
        {
          name: 'Red Pepper',
          measure: '2 chopped',
          id: 2433,
        },
        {
          name: 'Garlic Clove',
          measure: '4 Mashed',
          id: 2434,
        },
        {
          name: 'Allspice',
          measure: '1 tbs',
          id: 2435,
        },
        {
          name: 'Beef',
          measure: '2 Lbs',
          id: 2436,
        },
        {
          name: 'Water',
          measure: '2L',
          id: 2437,
        },
        {
          name: 'Potatoes',
          measure: '4',
          id: 2438,
        },
        {
          name: 'Plain Flour',
          measure: '1 cup',
          id: 2439,
        },
        {
          name: 'Water',
          measure: '1/4 cup',
          id: 2440,
        },
        {
          name: 'Coconut Milk',
          measure: '1 cup',
          id: 2441,
        },
      ],
    },
    {
      id: 225,
      name: 'Roast fennel and aubergine paella',
      category: 'Vegan',
      instructions:
        '1 Put the fennel, aubergine, pepper and courgette in a roasting tray. Add a glug of olive oil, season with salt and pepper and toss around to coat the veggies in the oil. Roast in the oven for 20 minutes, turning a couple of times until the veg are pretty much cooked through and turning golden.\r\n\r\n2 Meanwhile, heat a paella pan or large frying pan over a low– medium heat and add a glug of olive oil. Sauté the onion for 8–10 minutes until softened. Increase the heat to medium and stir in the rice, paprika and saffron. Cook for around 1 minute to start toasting the rice, then add the white wine. Reduce by about half before stirring in two-thirds of the stock. Reduce to a simmer and cook for 10 minutes without a lid, stirring a couple of times.\r\n\r\n3 Stir in the peas, add some seasoning, then gently mix in the roasted veg. Pour over the remaining stock, arrange the lemon wedges on top and cover with a lid or some aluminium foil. Cook for a further 10 minutes.\r\n\r\n4 To ensure you get the classic layer of toasted rice at the bottom of the pan, increase the heat to high until you hear a slight crackle. Remove from the heat and sit for 5 minutes before sprinkling over the parsley and serving.',
      image: '1520081754.jpg',
      tags: 'Vegan,Paella',
      ingredients: [
        {
          name: 'Baby Aubergine',
          measure: '6 small',
          id: 2442,
        },
        {
          name: 'Fennel',
          measure: '4 small',
          id: 2443,
        },
        {
          name: 'Red Pepper',
          measure: '1 thinly sliced',
          id: 2444,
        },
        {
          name: 'Courgettes',
          measure: '1 medium',
          id: 2445,
        },
        {
          name: 'Onion',
          measure: '1 finely chopped',
          id: 2446,
        },
        {
          name: 'Paella Rice',
          measure: '300g',
          id: 2447,
        },
        {
          name: 'Paprika',
          measure: '1 tsp',
          id: 2448,
        },
        {
          name: 'Saffron',
          measure: 'pinch',
          id: 2449,
        },
        {
          name: 'White Wine',
          measure: '200ml',
          id: 2450,
        },
        {
          name: 'Vegetable Stock',
          measure: '700ml',
          id: 2451,
        },
        {
          name: 'Frozen Peas',
          measure: '100g',
          id: 2452,
        },
        {
          name: 'Lemon',
          measure: '1 chopped',
          id: 2453,
        },
        {
          name: 'Parsley',
          measure: 'Handful',
          id: 2454,
        },
        {
          name: 'Salt',
          measure: 'pinch',
          id: 2455,
        },
        {
          name: 'Black Pepper',
          measure: 'pinch',
          id: 2456,
        },
      ],
    },
    {
      id: 226,
      name: 'Rosół (Polish Chicken Soup)',
      category: 'Chicken',
      instructions:
        'Add chicken to a large Dutch oven or stock pot \r\nCover with water\r\nBring to a boil and simmer for 2 to 2 1/2 hours, skimming any impurities off the top to insure a clear broth\r\nIf your pot is big enough, add the vegetables and spices for the last hour of the cooking time\r\nMy Dutch oven wasn’t big enough to hold everything, just the chicken and other bones filled the pot, so I cooked the meat/bones for the full cooking time, then removed them, and cooked the vegetables and spices separately\r\nStrain everything out of the broth\r\nBone the chicken, pulling the meat into large chunks\r\nSlice the carrots\r\nReturn the chicken and carrots to the broth\r\nCook noodles according to package instructions if you’re using them\r\nAdd noodles to bowl and then top with hot soup',
      image: 'lx1kkj1593349302.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Chicken Legs',
          measure: '4 Chopped',
          id: 2457,
        },
        {
          name: 'Onions',
          measure: '2 large',
          id: 2458,
        },
        {
          name: 'Carrots',
          measure: '5 chopped',
          id: 2459,
        },
        {
          name: 'Leek',
          measure: '1 chopped',
          id: 2460,
        },
        {
          name: 'Celery',
          measure: '1 small',
          id: 2461,
        },
        {
          name: 'Cabbage',
          measure: '1/4',
          id: 2462,
        },
        {
          name: 'Cloves',
          measure: '1 whole',
          id: 2463,
        },
        {
          name: 'Allspice',
          measure: '1tsp',
          id: 2464,
        },
        {
          name: 'Bay Leaf',
          measure: '2',
          id: 2465,
        },
        {
          name: 'Parsley',
          measure: '4 sprigs',
          id: 2466,
        },
        {
          name: 'Dill',
          measure: '4 sprigs',
          id: 2467,
        },
        {
          name: 'Pepper',
          measure: '1 tsp',
          id: 2468,
        },
        {
          name: 'Salt',
          measure: '1 tbs',
          id: 2469,
        },
      ],
    },
    {
      id: 227,
      name: 'Rogaliki (Polish Croissant Cookies)',
      category: 'Dessert',
      instructions:
        'In a medium bowl mix egg yolks, philly cheese and baking powder using a hand held mixer. Carefully start adding the flour. When the mixture will not be mixing well, and will look like wood chips, put away the blending mixer and using your hands knead the dough.\r\nCreate a roll and cover in foil and freeze for 15 minutes. At this time preheat the oven to 375.\r\nTake the dough out and separate into two. Roll and cut out 3 inch trangles.\r\nMake as many as you can and on centre of each put a small spoon of jam. Roll them into a croissant shape.\r\nPlace the croissants onto a greased cookie sheet, and bake for 10-12 minutes or until golden.\r\nRepeat with the rest of the dough.\r\nWhen you take them out, put aside and sprinkle with powdered sugar on top.\r\nThis makes about 3 batches of 20 cookies each.\r\nTotal count about 60 cookies.',
      image: '7mxnzz1593350801.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Butter',
          measure: '1 cup',
          id: 2470,
        },
        {
          name: 'Egg Yolks',
          measure: '3',
          id: 2471,
        },
        {
          name: 'Cream Cheese',
          measure: '8 oz',
          id: 2472,
        },
        {
          name: 'Baking Powder',
          measure: '1 tsp',
          id: 2473,
        },
        {
          name: 'Flour',
          measure: '3 cups',
          id: 2474,
        },
        {
          name: 'Jam',
          measure: '1 Jar',
          id: 2475,
        },
      ],
    },
    {
      id: 228,
      name: 'Roti john',
      category: 'Beef',
      instructions:
        'Mix all the ingredients in a bowl.\r\nHeat a pan or griddle with a little vegetable oil.\r\nPour the mixture onto the pan and place a piece of open-faced baguette on top.\r\nPress on the bread with a spatula and grill for 2 minutes.\r\nTurn the bread over to make it a little crispy.\r\nRemove from pan and cut the bread into small portions.\r\nAdd mayonnaise and/or Sambal before cutting the sandwich (optional).',
      image: 'hx335q1619789561.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Minced Beef',
          measure: '1/4 lb',
          id: 2476,
        },
        {
          name: 'Onion',
          measure: '1',
          id: 2477,
        },
        {
          name: 'Eggs',
          measure: '3',
          id: 2478,
        },
        {
          name: 'Chilli',
          measure: '1 tbs',
          id: 2479,
        },
        {
          name: 'Baguette',
          measure: '1/2',
          id: 2480,
        },
        {
          name: 'Salt',
          measure: 'To taste',
          id: 2481,
        },
        {
          name: 'Pepper',
          measure: 'To taste',
          id: 2482,
        },
        {
          name: 'Mayonnaise',
          measure: 'Top',
          id: 2483,
        },
      ],
    },
    {
      id: 229,
      name: 'Spaghetti Bolognese',
      category: 'Beef',
      instructions:
        'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins.\r\n\r\nStir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.\r\n\r\nMeanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.',
      image: 'sutysw1468247559.jpg',
      tags: 'Pasta,Meat',
      ingredients: [
        {
          name: 'onions',
          measure: '2',
          id: 2484,
        },
        {
          name: 'olive oil',
          measure: '1tbsp',
          id: 2485,
        },
        {
          name: 'garlic',
          measure: '1 clove',
          id: 2486,
        },
        {
          name: 'lean minced beef',
          measure: '500g',
          id: 2487,
        },
        {
          name: 'mushrooms',
          measure: '90g',
          id: 2488,
        },
        {
          name: 'dried oregano',
          measure: '1tsp',
          id: 2489,
        },
        {
          name: 'tomatoes',
          measure: '400g can',
          id: 2490,
        },
        {
          name: 'hot beef stock',
          measure: '300ml',
          id: 2491,
        },
        {
          name: 'tomato puree',
          measure: '1tbsp',
          id: 2492,
        },
        {
          name: 'worcestershire sauce',
          measure: '1tbsp',
          id: 2493,
        },
        {
          name: 'spaghetti',
          measure: '350g',
          id: 2494,
        },
        {
          name: 'parmesan',
          measure: 'Topping',
          id: 2495,
        },
      ],
    },
    {
      id: 230,
      name: 'Spicy Arrabiata Penne',
      category: 'Vegetarian',
      instructions:
        'Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.',
      image: 'ustsqw1468250014.jpg',
      tags: 'Pasta,Curry',
      ingredients: [
        {
          name: 'penne rigate',
          measure: '1 pound',
          id: 2496,
        },
        {
          name: 'olive oil',
          measure: '1/4 cup',
          id: 2497,
        },
        {
          name: 'garlic',
          measure: '3 cloves',
          id: 2498,
        },
        {
          name: 'chopped tomatoes',
          measure: '1 tin',
          id: 2499,
        },
        {
          name: 'red chilli flakes',
          measure: '1/2 teaspoon',
          id: 2500,
        },
        {
          name: 'italian seasoning',
          measure: '1/2 teaspoon',
          id: 2501,
        },
        {
          name: 'basil',
          measure: '6 leaves',
          id: 2502,
        },
        {
          name: 'Parmigiano-Reggiano',
          measure: 'sprinkling',
          id: 2503,
        },
      ],
    },
    {
      id: 231,
      name: 'Smoky Lentil Chili with Squash',
      category: 'Vegetarian',
      instructions:
        'Begin by roasting the squash. Slice it into thin crescents and drizzle with a little oil and sprinkle with sea salt. I added a fresh little sage I had in the fridge, but it’s unnecessary. Roast the squash a 205 C (400 F) for 20-30 minutes, flipping halfway through, until soft and golden. Let cool and chop into cubes.\r\nMeanwhile, rinse the lentils and cover them with water. Bring them to the boil then turn down to a simmer and let cook (uncovered) for 20-30 minutes, or until tender. Drain and set aside.\r\nWhile the lentils are cooking heat the 1 Tbsp. of oil on low in a medium pot. Add the onions and leeks and sauté for 5 or so minutes, or until they begin to soften. Add the garlic next along with the cumin and coriander, cooking for a few more minutes. Add the remaining spices – paprika, cinnamon, chilli, cocoa, Worcestershire sauce, salt, and oregano. Next add the can of tomatoes, the water or stock, and carrots. Let simmer, covered, for 20 minutes or until the veg is tender and the mixture has thickened up. You’ll need to check on the pot periodically for a stir and a top of of liquid if needed.\r\nAdd the lentils and chopped roasted squash. Let cook for 10 more minutes to heat through.\r\nServe with sliced jalapeno, lime wedges, cilantro, green onions, and cashew sour cream.\r\n\r\nSIMPLE CASHEW SOUR CREAM\r\n\r\n1 Cup Raw Unsalted Cashews\r\nPinch Sea Salt\r\n1 tsp. Apple Cider Vinegar\r\nWater\r\n\r\nBring some water to the boil, and use it to soak the cashews for at least four hours. Alternatively, you can use cold water and let the cashews soak overnight, but I’m forgetful/lazy, so often use the boil method which is much faster.\r\nAfter the cashews have soaked, drain them and add to a high speed blender. Begin to puree, slowly adding about 1/2 cup fresh water, until a creamy consistency is reached. You may need to add less or more water to reach the desired consistency.\r\nAdd a pinch of sea salt and vinegar (or lemon juice).',
      image: 'uwxqwy1483389553.jpg',
      tags: 'Pulse',
      ingredients: [
        {
          name: 'Olive Oil',
          measure: '1 tbls',
          id: 2504,
        },
        {
          name: 'Onion',
          measure: '1',
          id: 2505,
        },
        {
          name: 'Leek',
          measure: '1 chopped',
          id: 2506,
        },
        {
          name: 'Garlic',
          measure: '3 cloves',
          id: 2507,
        },
        {
          name: 'Cumin',
          measure: '4 tsp ground',
          id: 2508,
        },
        {
          name: 'Coriander',
          measure: '2 tsp ground',
          id: 2509,
        },
        {
          name: 'Smoked Paprika',
          measure: '1 tsp',
          id: 2510,
        },
        {
          name: 'Cinnamon',
          measure: '1/2 tsp',
          id: 2511,
        },
        {
          name: 'Chili Powder',
          measure: '1 tsp',
          id: 2512,
        },
        {
          name: 'Cocoa',
          measure: '1 tsp',
          id: 2513,
        },
        {
          name: 'Dried Oregano',
          measure: '1/2 tsp',
          id: 2514,
        },
        {
          name: 'Diced Tomatoes',
          measure: '1 can',
          id: 2515,
        },
        {
          name: 'Water',
          measure: '3 cups',
          id: 2516,
        },
        {
          name: 'Carrots',
          measure: '3 chopped',
          id: 2517,
        },
        {
          name: 'Brown Lentils',
          measure: '1 1/2 cups',
          id: 2518,
        },
        {
          name: 'Sea Salt',
          measure: '1 tsp',
          id: 2519,
        },
        {
          name: 'Squash',
          measure: '1 Small',
          id: 2520,
        },
        {
          name: 'Cashews',
          measure: '1 Cup',
          id: 2521,
        },
        {
          name: 'Apple Cider Vinegar',
          measure: '1 tsp',
          id: 2522,
        },
      ],
    },
    {
      id: 232,
      name: 'Sticky Toffee Pudding Ultimate',
      category: 'Dessert',
      instructions:
        'Stone and chop the dates quite small, put them in a bowl, then pour the boiling water over. Leave for about 30 mins until cool and well-soaked, then mash a bit with a fork. Stir in the vanilla extract. Butter and flour seven mini pudding tins (each about 200ml/7fl oz) and sit them on a baking sheet. Heat oven to 180C/fan 160C/gas 4.\r\nWhile the dates are soaking, make the puddings. Mix the flour and bicarbonate of soda together and beat the eggs in a separate bowl. Beat the butter and sugar together in a large bowl for a few mins until slightly creamy (the mixture will be grainy from the sugar). Add the eggs a little at a time, beating well between additions. Beat in the black treacle then, using a large metal spoon, gently fold in one-third of the flour, then half the milk, being careful not to overbeat. Repeat until all the flour and milk is used. Stir the soaked dates into the pudding batter. The mix may look a little curdled at this point and will be like a soft, thick batter. Spoon it evenly between the tins and bake for 20-25 mins, until risen and firm.\r\nMeanwhile, put the sugar and butter for the sauce in a medium saucepan with half the cream. Bring to the boil over a medium heat, stirring all the time, until the sugar has completely dissolved. Stir in the black treacle, turn up the heat slightly and let the mixture bubble away for 2-3 mins until it is a rich toffee colour, stirring occasionally to make sure it doesn’t burn. Take the pan off the heat and beat in the rest of the cream.\r\nRemove the puddings from the oven. Leave in the tins for a few mins, then loosen them well from the sides of the tins with a small palette knife before turning them out. You can serve them now with the sauce drizzled over, but they’ll be even stickier if left for a day or two coated in the sauce. To do this, pour about half the sauce into one or two ovenproof serving dishes. Sit the upturned puddings on the sauce, then pour the rest of the sauce over them. Cover with a loose tent of foil so that the sauce doesn’t smudge (no need to chill).\r\nWhen ready to serve, heat oven to 180C/fan 160C/gas 4. Warm the puddings through, still covered, for 15-20 mins or until the sauce is bubbling. Serve them on their own, or with cream or custard.',
      image: 'xrptpq1483909204.jpg',
      tags: 'Pudding,Desert,Cake,Dairy',
      ingredients: [
        {
          name: 'Medjool dates',
          measure: '225g',
          id: 2523,
        },
        {
          name: 'water',
          measure: '175ml Boiling',
          id: 2524,
        },
        {
          name: 'vanilla extract',
          measure: '1 tsp',
          id: 2525,
        },
        {
          name: 'self-raising flour',
          measure: '175g',
          id: 2526,
        },
        {
          name: 'bicarbonate of soda',
          measure: '1 tsp',
          id: 2527,
        },
        {
          name: 'eggs',
          measure: '2',
          id: 2528,
        },
        {
          name: 'butter',
          measure: '85g',
          id: 2529,
        },
        {
          name: 'demerara sugar',
          measure: '140g',
          id: 2530,
        },
        {
          name: 'black treacle',
          measure: '2 tbsp',
          id: 2531,
        },
        {
          name: 'milk',
          measure: '100ml',
          id: 2532,
        },
        {
          name: 'ice cream',
          measure: '1 scoop',
          id: 2533,
        },
        {
          name: 'muscovado sugar',
          measure: '175g',
          id: 2534,
        },
        {
          name: 'butter',
          measure: '50g',
          id: 2535,
        },
        {
          name: 'double cream',
          measure: '225ml',
          id: 2536,
        },
        {
          name: 'black treacle',
          measure: '1 tbsp',
          id: 2537,
        },
      ],
    },
    {
      id: 233,
      name: 'Spicy North African Potato Salad',
      category: 'Vegetarian',
      instructions:
        'Cook potatoes - place potatoes in a pot of cold water, and bring to the boil. Boil 20 minutes, or until potatoes are tender. You know they are cooked when you can stick a knife in them and the knife goes straight through.\r\nCombine harissa spice, olive oil, salt and pepper and lemon juice in a small bowl and whisk until combined.\r\nOnce potatoes are cooked, drain water and roughly chop potatoes in half.\r\nAdd harissa mix and spring onions/green onions to potatoes and stir.\r\nIn a large salad bowl, lay out arugula/rocket.\r\nTop with potato mix and toss.\r\nAdd fetta, mint and sprinkle over pine nuts.\r\nAdjust salt and pepper to taste.',
      image: 'urtwux1486983078.jpg',
      tags: 'Vegetarian,Spicy',
      ingredients: [
        {
          name: 'Small Potatoes',
          measure: '650g/1lb 8 oz',
          id: 2538,
        },
        {
          name: 'Harissa Spice',
          measure: '1 tsp',
          id: 2539,
        },
        {
          name: 'olive oil',
          measure: '2 tsp',
          id: 2540,
        },
        {
          name: 'Lemon',
          measure: 'juice of half',
          id: 2541,
        },
        {
          name: 'Spring onions',
          measure: '4',
          id: 2542,
        },
        {
          name: 'Rocket',
          measure: '150g/6oz',
          id: 2543,
        },
        {
          name: 'Feta',
          measure: '80g/3oz',
          id: 2544,
        },
        {
          name: 'Mint',
          measure: '20 chopped',
          id: 2545,
        },
        {
          name: 'Pine nuts',
          measure: '2 tablespoons',
          id: 2546,
        },
        {
          name: 'Salt',
          measure: 'Pinch',
          id: 2547,
        },
        {
          name: 'Pepper',
          measure: 'Pinch',
          id: 2548,
        },
      ],
    },
    {
      id: 234,
      name: 'Stovetop Eggplant With Harissa, Chickpeas, and Cumin Yogurt',
      category: 'Vegetarian',
      instructions:
        'Heat the oil in a 12-inch skillet over high heat until shimmering. Add the eggplants and lower the heat to medium. Season with salt and pepper as you rotate the eggplants, browning them on all sides. Continue to cook, turning regularly, until a fork inserted into the eggplant meets no resistance (you may have to stand them up on their fat end to finish cooking the thickest parts), about 20 minutes, lowering the heat and sprinkling water into the pan as necessary if the eggplants threaten to burn or smoke excessively.\r\n\r\n2.\r\nMix the harissa, chickpeas and tomatoes together, then add to the eggplants. Cook until the tomatoes have blistered and broken down, about 5 minutes more. Season with salt and pepper and add water as necessary to thin to a saucy consistency. Meanwhile, combine the yogurt and cumin in a serving bowl. Season with salt and pepper.\r\n\r\n3.\r\nTop the eggplant mixture with the parsley, drizzle with more extra virgin olive oil, and serve with the yogurt on the side.',
      image: 'yqwtvu1487426027.jpg',
      tags: 'Vegetarian',
      ingredients: [
        {
          name: 'Olive Oil',
          measure: '4 tablespoons',
          id: 2549,
        },
        {
          name: 'Egg Plants',
          measure: '6 small',
          id: 2550,
        },
        {
          name: 'Harissa',
          measure: '½ tablespoon',
          id: 2551,
        },
        {
          name: 'Chickpeas',
          measure: '1 can',
          id: 2552,
        },
        {
          name: 'Cherry Tomatoes',
          measure: '2 cups halved',
          id: 2553,
        },
        {
          name: 'Greek yogurt',
          measure: '1 1/2 cups',
          id: 2554,
        },
        {
          name: 'Ground cumin',
          measure: '1 tablespoon',
          id: 2555,
        },
        {
          name: 'Parsley',
          measure: '½ cup',
          id: 2556,
        },
      ],
    },
    {
      id: 235,
      name: 'Salmon Prawn Risotto',
      category: 'Seafood',
      instructions:
        'Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.\r\nAdd the rice and stir to coat all the grains in the butter\r\nAdd the wine and cook gently stirring until it is absorbed\r\nGradually add the hot stock, stirring until each addition is absorbed. Keep stirring until the rice is tender\r\nSeason with the lemon juice and zest, and pepper to taste. (there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through\r\nServe scattered with the Parmesan and seasonal vegetables.\r\nGrill the salmon and gently place onto the risotto with the prawns and asparagus',
      image: 'xxrxux1503070723.jpg',
      tags: 'Fish',
      ingredients: [
        {
          name: 'butter',
          measure: '50g/2oz',
          id: 2557,
        },
        {
          name: 'onion',
          measure: '1 finely chopped',
          id: 2558,
        },
        {
          name: 'rice',
          measure: '150g',
          id: 2559,
        },
        {
          name: 'white wine',
          measure: '125ml',
          id: 2560,
        },
        {
          name: 'vegetable stock',
          measure: '1 litre hot',
          id: 2561,
        },
        {
          name: 'lemon',
          measure: 'The juice and zest of one',
          id: 2562,
        },
        {
          name: 'King Prawns',
          measure: '240g large',
          id: 2563,
        },
        {
          name: 'salmon',
          measure: '150g',
          id: 2564,
        },
        {
          name: 'asparagus',
          measure: '100g tips blanched briefly in boiling water',
          id: 2565,
        },
        {
          name: 'black pepper',
          measure: 'ground',
          id: 2566,
        },
        {
          name: 'Parmesan',
          measure: '50g shavings',
          id: 2567,
        },
      ],
    },
    {
      id: 236,
      name: 'Salted Caramel Cheescake',
      category: 'Dessert',
      instructions:
        '1) Blitz the biscuits and the pretzels in a food processor and mix the biscuits with the melted butter. Spread on the bottom of an 8″/20cm Deep Springform Tin and press down firmly. Leave to set in the fridge whilst you make the rest!\r\n\r\n2) Using an electric mixer, I use my KitchenAid with the whisk attachment, whisk together the cream cheese, vanilla, and icing sugar until smooth and then add the caramel and whisk again until smooth and lump free – this could take a couple of minutes, I whisk it at half speed so not too quick or slow!\r\n\r\n3) Pour in the double cream & Salt flakes and continue to whisk for a couple of minutes until its very thick and mousse like (I mix it on a medium speed, level 6/10) – Now this could take up to 5 minutes depending on your mixer, but you seriously have to stick at it – it will hold itself completely when finished mixing (like a meringue does!) If you don’t mix it enough it will not set well enough, but don’t get impatient and whisk it really quick because that’ll make it split! Spread over the biscuit base and leave to set in the fridge overnight.\r\n\r\n4) Remove the Cheesecake from the tin carefully and decorate the cheesecake – I drizzled over some of the spare caramel, and then some Toffee Popcorn and more Pretzels!',
      image: 'xqrwyr1511133646.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Digestive Biscuits',
          measure: '250g',
          id: 2568,
        },
        {
          name: 'Pretzels',
          measure: '75g',
          id: 2569,
        },
        {
          name: 'Butter',
          measure: '135g',
          id: 2570,
        },
        {
          name: 'Cream Cheese',
          measure: '450g',
          id: 2571,
        },
        {
          name: 'Vanilla Extract',
          measure: '1tsp',
          id: 2572,
        },
        {
          name: 'Icing Sugar',
          measure: '100g',
          id: 2573,
        },
        {
          name: 'Caramel',
          measure: '150g',
          id: 2574,
        },
        {
          name: 'Sea Salt',
          measure: '1tsp',
          id: 2575,
        },
        {
          name: 'Double Cream',
          measure: '300ml',
          id: 2576,
        },
        {
          name: 'Caramel Sauce',
          measure: 'drizzle',
          id: 2577,
        },
        {
          name: 'Toffee Popcorn',
          measure: 'Top',
          id: 2578,
        },
        {
          name: 'Pretzels',
          measure: 'Top',
          id: 2579,
        },
      ],
    },
    {
      id: 237,
      name: 'Seafood fideuà',
      category: 'Seafood',
      instructions:
        'Boil the kettle. Empty the mussels into a colander and run under cold water. Throw away any with broken shells. Pick through the shells, tapping each one on the side of the sink – they should be closed or should slowly close when tapped – if they stay open, throw them away. If any of the shells still have barnacles or stringy beards attached, pull them off with a cutlery knife and rinse the shells well. Keep in the colander, covered with a cold, damp cloth, until you’re ready to cook. Peel the prawn shells on the body section only – leave the heads and tails intact. Score down the backs and pull out any gritty entrails. Chill until you’re ready to cook.\r\nPut the saffron in a small cup, cover with 50ml kettle-hot water and set aside for 10 mins. If using vermicelli, put in a bowl and crush to little pieces (about 1cm long) with your hands.\r\nHeat the oil in a large frying pan with at least a 3cm lip, or a 40cm paella pan. Add the onion and stir around the pan for 5 mins until soft. Add the garlic and cook for 1 min more, then tip in the vermicelli and cook for 5 mins, stirring from time to time, until the vermicelli is toasted brown. Stir in the paprika.\r\nKeeping the heat moderate, stir through the monkfish, squid and saffron with its water, seasoning well. Spread the ingredients out in an even layer, then pour over the hot stock and scatter the tomatoes on top. Bring to a simmer, then cover the whole dish with a tight-fitting lid (or foil). Turn the heat to medium and cook for 6 mins.\r\nUncover and stir to incorporate the dry top layer of pasta. Push the mussels into the pasta so the hinges are buried in the bottom of the dish, and they stand straight up. Arrange the prawns on top, cover tightly and cook for another 6 mins or until the mussels are open, the prawns are pink and the pasta is cooked through. Leave to simmer for another 2-3 mins to cook off most of the remaining liquid (leave a little in the pan to prevent the pasta from sticking together). Allow to sit for 2-3 mins, then squeeze over the lemon juice and arrange the wedges on top. Scatter with parsley before serving.',
      image: 'wqqvyq1511179730.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Mussels',
          measure: '400g',
          id: 2580,
        },
        {
          name: 'Prawns',
          measure: '8',
          id: 2581,
        },
        {
          name: 'Saffron',
          measure: '2 pinches',
          id: 2582,
        },
        {
          name: 'Vermicelli',
          measure: '350g',
          id: 2583,
        },
        {
          name: 'Olive Oil',
          measure: '5 tblsp',
          id: 2584,
        },
        {
          name: 'Onions',
          measure: '1 large',
          id: 2585,
        },
        {
          name: 'Garlic',
          measure: '3 cloves',
          id: 2586,
        },
        {
          name: 'Paprika',
          measure: '2 tbs',
          id: 2587,
        },
        {
          name: 'Monkfish',
          measure: '1 tail',
          id: 2588,
        },
        {
          name: 'Baby Squid',
          measure: '4',
          id: 2589,
        },
        {
          name: 'Fish Stock',
          measure: '650ml',
          id: 2590,
        },
        {
          name: 'Tomatoes',
          measure: '2 large',
          id: 2591,
        },
        {
          name: 'Lemon',
          measure: 'Juice of 1',
          id: 2592,
        },
        {
          name: 'Parsley',
          measure: 'Topping',
          id: 2593,
        },
      ],
    },
    {
      id: 238,
      name: 'Spinach & Ricotta Cannelloni',
      category: 'Vegetarian',
      instructions:
        'First make the tomato sauce. Heat the oil in a large pan and fry the garlic for 1 min. Add the sugar, vinegar, tomatoes and some seasoning and simmer for 20 mins, stirring occasionally, until thick. Add the basil and divide the sauce between 2 or more shallow ovenproof dishes (see Tips for freezing, below). Set aside. Make a sauce by beating the mascarpone with the milk until smooth, season, then set aside.\r\n\r\nPut the spinach in a large colander and pour over a kettle of boiling water to wilt it (you may need to do this in batches). When cool enough to handle squeeze out the excess water. Roughly chop the spinach and mix in a large bowl with 100g Parmesan and ricotta. Season well with salt, pepper and the nutmeg.\r\n\r\nHeat oven to 200C/180C fan/gas 6. Using a piping bag or plastic food bag with the corner snipped off, squeeze the filling into the cannelloni tubes. Lay the tubes, side by side, on top of the tomato sauce and spoon over the mascarpone sauce. Top with Parmesan and mozzarella. You can now freeze the cannelloni, uncooked, or you can cook it first and then freeze. Bake for 30-35 mins until golden and bubbling. Remove from oven and let stand for 5 mins before serving.',
      image: 'wspuvp1511303478.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Olive Oil',
          measure: '3 tbsp',
          id: 2594,
        },
        {
          name: 'Garlic',
          measure: '8 cloves chopped',
          id: 2595,
        },
        {
          name: 'Caster Sugar',
          measure: '3 tbsp',
          id: 2596,
        },
        {
          name: 'Red Wine Vinegar',
          measure: '2 tblsp',
          id: 2597,
        },
        {
          name: 'Chopped Tomatoes',
          measure: '3 400g Cans',
          id: 2598,
        },
        {
          name: 'Basil Leaves',
          measure: 'Bunch',
          id: 2599,
        },
        {
          name: 'Mascarpone',
          measure: '2 tubs',
          id: 2600,
        },
        {
          name: 'Milk',
          measure: '3 tbsp',
          id: 2601,
        },
        {
          name: 'Parmesan',
          measure: '85g',
          id: 2602,
        },
        {
          name: 'Mozzarella',
          measure: '2 sliced',
          id: 2603,
        },
        {
          name: 'Spinach',
          measure: '1kg',
          id: 2604,
        },
        {
          name: 'Parmesan',
          measure: '100g',
          id: 2605,
        },
        {
          name: 'Ricotta',
          measure: '3 tubs',
          id: 2606,
        },
        {
          name: 'Nutmeg',
          measure: 'pinch',
          id: 2607,
        },
        {
          name: 'Cannellini Beans',
          measure: '400g',
          id: 2608,
        },
      ],
    },
    {
      id: 239,
      name: 'Squash linguine',
      category: 'Vegetarian',
      instructions:
        'Heat oven to 200C/180C fan/gas 6. Put the squash and garlic on a baking tray and drizzle with the olive oil. Roast for 35-40 mins until soft. Season.\r\nCook the pasta according to pack instructions. Drain, reserving the water. Use a stick blender to whizz the squash with 400ml cooking water. Heat some oil in a frying pan, fry the sage until crisp, then drain on kitchen paper. Tip the pasta and sauce into the pan and warm through. Scatter with sage.',
      image: 'wxswxy1511452625.jpg',
      tags: 'Pasta,Light',
      ingredients: [
        {
          name: 'Butternut Squash',
          measure: '350g',
          id: 2609,
        },
        {
          name: 'Garlic',
          measure: '3 parts',
          id: 2610,
        },
        {
          name: 'Olive Oil',
          measure: '3 tbs',
          id: 2611,
        },
        {
          name: 'Linguine Pasta',
          measure: '350g',
          id: 2612,
        },
        {
          name: 'Sage',
          measure: 'Small bunch',
          id: 2613,
        },
      ],
    },
    {
      id: 240,
      name: 'Spanish Tortilla',
      category: 'Vegetarian',
      instructions:
        'Put a large non-stick frying pan on a low heat. Cook the onion slowly in the oil and butter until soft but not brown – this should take about 15 mins. Add the potatoes, cover the pan and cook for a further 15-20 mins, stirring occasionally to make sure they fry evenly.\r\nWhen the potatoes are soft and the onion is shiny, crush 2 garlic cloves and stir in, followed by the beaten eggs.\r\nPut the lid back on the pan and leave the tortilla to cook gently. After 20 mins, the edges and base should be golden, the top set but the middle still a little wobbly. To turn it over, slide it onto a plate and put another plate on top, turn the whole thing over and slide it back into the pan to finish cooking. Once cooked, transfer to a plate and serve the tortilla warm or cold, scattered with the chopped parsley.\r\nTo accompany, take slices of warmed baguette, stab all over with a fork and rub with the remaining garlic, pile on grated tomatoes and season with sea salt and a drizzle of olive oil.',
      image: 'quuxsx1511476154.jpg',
      tags: 'Egg,Light',
      ingredients: [
        {
          name: 'Onion',
          measure: '1 sliced',
          id: 2614,
        },
        {
          name: 'Olive Oil',
          measure: '4 tbsp',
          id: 2615,
        },
        {
          name: 'Butter',
          measure: '25g',
          id: 2616,
        },
        {
          name: 'Potatoes',
          measure: '400g',
          id: 2617,
        },
        {
          name: 'Garlic',
          measure: '6 cloves',
          id: 2618,
        },
        {
          name: 'Eggs',
          measure: '8',
          id: 2619,
        },
        {
          name: 'Parsley',
          measure: 'Handful',
          id: 2620,
        },
        {
          name: 'Baguette',
          measure: '1',
          id: 2621,
        },
        {
          name: 'Vine Tomatoes',
          measure: '4',
          id: 2622,
        },
        {
          name: 'Olive Oil',
          measure: 'drizzle',
          id: 2623,
        },
      ],
    },
    {
      id: 241,
      name: 'Steak and Kidney Pie',
      category: 'Beef',
      instructions:
        'Preheat the oven to 220C/425F/Gas 7\r\nHeat the vegetable oil in a large frying pan, and brown the beef all over. (You may need to do this in batches.) Set aside, then brown the kidneys on both sides in the same pan. Add the onions and cook for 3-4 minutes.\r\nReturn the beef to the pan, sprinkle flour over and coat the meat and onions\r\nAdd the stock to the pan, stir well and bring to the boil.\r\nTurn the heat down and simmer for 1½ hours without a lid. If the liquid evaporates too much, add more stock.\r\nRemove from the heat. Add salt, pepper and Worcestershire sauce and allow to cool completely. Place the cooked meat mixture into a pie dish.\r\nRoll out the pastry to 5mm/¼in thick and 5cm/2in larger than the dish you are using.\r\nUsing a rolling pin, lift the pastry and place it over the top of the pie dish. Trim and crimp the edges with your fingers and thumb.\r\nBrush the surface with the beaten egg mixture and bake for 30-40 minutes until golden-brown and puffed.\r\nServe with creamy mash and steamed vegetables to soak up the gravy.',
      image: 'qysyss1511558054.jpg',
      tags: 'Pie',
      ingredients: [
        {
          name: 'Puff Pastry',
          measure: '300g',
          id: 2624,
        },
        {
          name: 'Egg White',
          measure: 'Beaten',
          id: 2625,
        },
        {
          name: 'Egg Yolks',
          measure: 'Beaten',
          id: 2626,
        },
        {
          name: 'Vegetable Oil',
          measure: '2 tbs',
          id: 2627,
        },
        {
          name: 'Beef',
          measure: '70 ml',
          id: 2628,
        },
        {
          name: 'Lamb Kidney',
          measure: '200g',
          id: 2629,
        },
        {
          name: 'Onions',
          measure: '2 chopped',
          id: 2630,
        },
        {
          name: 'Plain Flour',
          measure: '30g',
          id: 2631,
        },
        {
          name: 'Beef Stock',
          measure: '85 ml',
          id: 2632,
        },
        {
          name: 'Salt',
          measure: 'pinch',
          id: 2633,
        },
        {
          name: 'Pepper',
          measure: 'pinch',
          id: 2634,
        },
        {
          name: 'Worcestershire Sauce',
          measure: 'Dash',
          id: 2635,
        },
      ],
    },
    {
      id: 242,
      name: 'Sticky Toffee Pudding',
      category: 'Dessert',
      instructions:
        'Preheat the oven to 180C/160C Fan/Gas 4. Butter a wide shallow 1.7-litre/3-pint ovenproof dish.\r\nPut the butter, sugar, eggs, flour, baking powder, bicarbonate of soda and treacle into a mixing bowl. Beat using an electric handheld whisk for about 30 seconds or until combined. Pour in the milk gradually and whisk again until smooth. Pour into the prepared dish. Bake for 35–40 minutes or until well risen and springy in the centre.\r\nTo make the sauce, put all the ingredients into a saucepan and stir over a low heat until the sugar has dissolved and the butter has melted. Bring to the boil, stirring for a minute.\r\nTo serve, pour half the sauce over the pudding in the baking dish. Serve with the cream or ice cream.',
      image: 'xqqqtu1511637379.jpg',
      tags: 'Pudding,Cake,Desert',
      ingredients: [
        {
          name: 'Butter',
          measure: '100g',
          id: 2636,
        },
        {
          name: 'Muscovado Sugar',
          measure: '175g',
          id: 2637,
        },
        {
          name: 'Eggs',
          measure: '2 large',
          id: 2638,
        },
        {
          name: 'Self-raising Flour',
          measure: '225g',
          id: 2639,
        },
        {
          name: 'Baking Powder',
          measure: '1 tsp',
          id: 2640,
        },
        {
          name: 'Bicarbonate Of Soda',
          measure: '1 tsp',
          id: 2641,
        },
        {
          name: 'Black Treacle',
          measure: '3 tbs',
          id: 2642,
        },
        {
          name: 'Milk',
          measure: '275ml',
          id: 2643,
        },
        {
          name: 'Double Cream',
          measure: 'to serve',
          id: 2644,
        },
        {
          name: 'Butter',
          measure: '100g',
          id: 2645,
        },
        {
          name: 'Muscovado Sugar',
          measure: '125g',
          id: 2646,
        },
        {
          name: 'Black Treacle',
          measure: '1 tbs',
          id: 2647,
        },
        {
          name: 'Double Cream',
          measure: '300ml',
          id: 2648,
        },
        {
          name: 'Vanilla Extract',
          measure: '1 tsp',
          id: 2649,
        },
      ],
    },
    {
      id: 243,
      name: 'Spotted Dick',
      category: 'Dessert',
      instructions:
        'Put the flour and salt in a bowl. Add the suet, currants, sugar, lemon and orange zest.\r\nPour in 150ml milk and mix to a firm but moist dough, adding the extra milk if necessary.\r\nShape into a fat roll about 20cm long. Place on a large rectangle of baking parchment. Wrap loosely to allow for the pudding to rise and tie the ends with string like a Christmas cracker.\r\nPlace a steamer over a large pan of boiling water, add the pudding to the steamer, cover and steam for 1 1/2 hours. Top up the pan with water from time to time.\r\nRemove from the steamer and allow to cool slightly before unwrapping. Serve sliced with custard.',
      image: 'xqvyqr1511638875.jpg',
      tags: 'Fruity,Pudding,Desert',
      ingredients: [
        {
          name: 'Self-raising Flour',
          measure: '250g',
          id: 2650,
        },
        {
          name: 'Salt',
          measure: 'pinch',
          id: 2651,
        },
        {
          name: 'Suet',
          measure: '125g',
          id: 2652,
        },
        {
          name: 'Currants',
          measure: '175g',
          id: 2653,
        },
        {
          name: 'Caster Sugar',
          measure: '80g',
          id: 2654,
        },
        {
          name: 'Lemon',
          measure: 'Zest of 1',
          id: 2655,
        },
        {
          name: 'Orange',
          measure: 'Zest of 1',
          id: 2656,
        },
        {
          name: 'Milk',
          measure: '150ml',
          id: 2657,
        },
        {
          name: 'Custard',
          measure: 'to serve',
          id: 2658,
        },
      ],
    },
    {
      id: 244,
      name: 'Summer Pudding',
      category: 'Dessert',
      instructions:
        'Bring out the juices: Wash fruit and gently dry on kitchen paper – keep strawberries separate. Put sugar and 3 tbsp water into a large pan. Gently heat until sugar dissolves – stir a few times. Bring to a boil for 1 min, then tip in the fruit (not strawberries). Cook for 3 mins over a low heat, stirring 2-3 times. The fruit will be softened, mostly intact and surrounded by dark red juice. Put a sieve over a bowl and tip in the fruit and juice.\r\nLine the bowl with cling film and prepare the bread: Line the 1.25-litre basin with cling film as this will help you to turn out the pudding. Overlap two pieces of cling film in the middle of the bowl as it’s easier than trying to get one sheet to stick to all of the curves. Let the edges overhang by about 15cm. Cut the crusts off the bread. Cut 4 pieces of bread in half, a little on an angle, to give 2 lopsided rectangles per piece. Cut 2 slices into 4 triangles each and leave the final piece whole.\r\nBuild the pud: Dip the whole piece of bread into the juice for a few secs just to coat. Push this into the bottom of the basin. Now dip the wonky rectangular pieces one at a time and press around the basin’s sides so that they fit together neatly, alternately placing wide and narrow ends up. If you can’t quite fit the last piece of bread in it doesn’t matter, just trim into a triangle, dip in juice and slot in. Now spoon in the softened fruit, adding the strawberries here and there as you go.\r\nLet flavours mingle then serve: Dip the bread triangles in juice and place on top – trim off overhang with scissors. Keep leftover juice for later. Bring cling film up and loosely seal. Put a side plate on top and weight down with cans. Chill for 6 hrs or overnight. To serve, open out cling film then put a serving plate upside-down on top and flip over. serve with leftover juice, any extra berries and cream.',
      image: 'rsqwus1511640214.jpg',
      tags: 'Summer',
      ingredients: [
        {
          name: 'Strawberries',
          measure: '300g',
          id: 2659,
        },
        {
          name: 'Blackberries',
          measure: '250g',
          id: 2660,
        },
        {
          name: 'Redcurrants',
          measure: '100g',
          id: 2661,
        },
        {
          name: 'Raspberries',
          measure: '500g',
          id: 2662,
        },
        {
          name: 'Caster Sugar',
          measure: '175g',
          id: 2663,
        },
        {
          name: 'Bread',
          measure: '7 Slices',
          id: 2664,
        },
      ],
    },
    {
      id: 245,
      name: 'Summer Pistou',
      category: 'Vegetarian',
      instructions:
        'Heat the oil in a large pan and fry the leeks and courgette for 5 mins to soften. Pour in the stock, add three-quarters of the haricot beans with the green beans, half the tomatoes, and simmer for 5-8 mins until the vegetables are tender.\r\nMeanwhile, blitz the remaining beans and tomatoes, the garlic and basil in a food processor (or in a bowl with a stick blender) until smooth, then stir in the Parmesan. Stir the sauce into the soup, cook for 1 min, then ladle half into bowls or pour into a flask for a packed lunch. Chill the remainder. Will keep for a couple of days.',
      image: 'rqtxvr1511792990.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Rapeseed Oil',
          measure: '1 tbs',
          id: 2665,
        },
        {
          name: 'Leek',
          measure: '2 finely chopped',
          id: 2666,
        },
        {
          name: 'Courgettes',
          measure: '1 large',
          id: 2667,
        },
        {
          name: 'Vegetable Stock',
          measure: '1L',
          id: 2668,
        },
        {
          name: 'Cannellini Beans',
          measure: '400g',
          id: 2669,
        },
        {
          name: 'Green Beans',
          measure: '200g',
          id: 2670,
        },
        {
          name: 'Tomatoes',
          measure: '3 chopped',
          id: 2671,
        },
        {
          name: 'Garlic Clove',
          measure: '3 chopped',
          id: 2672,
        },
        {
          name: 'Basil',
          measure: 'Small pack',
          id: 2673,
        },
        {
          name: 'Parmesan',
          measure: '40g',
          id: 2674,
        },
      ],
    },
    {
      id: 246,
      name: 'Split Pea Soup',
      category: 'Side',
      instructions:
        'Put the gammon in a very large pan with 2 litres water and bring to the boil. Remove from the heat and drain off the water – this helps to get rid of some of the saltiness. Recover with 2 litres cold water and bring to the boil again. Put everything but the frozen peas into the pan and bring to the boil. Reduce to a simmer and cook for 1½-2½ hrs, topping up the water as and when you need to, to a similar level it started at. As the ham cooks and softens, you can halve it if you want, so it is all submerged under the liquid. When the ham is tender enough to pull into shreds, it is ready.\r\nLift out the ham, peel off and discard the skin. While it is still hot (wear a clean pair of rubber gloves), shred the meat. Remove bay from the soup and stir in the frozen peas. Simmer for 1 min, then blend until smooth. Add a splash of water if too thick, and return to the pan to heat through if it has cooled, or if you are making ahead.\r\nWhen you are ready to serve, mix the hot soup with most of the ham – gently reheat if made ahead. Serve in bowls with the remaining ham scattered on top, and eat with crusty bread and butter.',
      image: 'xxtsvx1511814083.jpg',
      tags: 'Soup,Warm',
      ingredients: [
        {
          name: 'Ham',
          measure: '1kg',
          id: 2675,
        },
        {
          name: 'Peas',
          measure: '200g (soaked overnight)',
          id: 2676,
        },
        {
          name: 'Onions',
          measure: '2 chopped',
          id: 2677,
        },
        {
          name: 'Carrots',
          measure: '2 chopped',
          id: 2678,
        },
        {
          name: 'Bay Leaves',
          measure: '2',
          id: 2679,
        },
        {
          name: 'Celery',
          measure: '1 chopped',
          id: 2680,
        },
        {
          name: 'Frozen Peas',
          measure: '300g',
          id: 2681,
        },
        {
          name: 'Bread',
          measure: 'to serve',
          id: 2682,
        },
      ],
    },
    {
      id: 247,
      name: 'Sugar Pie',
      category: 'Dessert',
      instructions:
        'Preheat oven to 350 degrees F (175 degrees C). Grease a 9-inch pie dish.\r\nPlace the brown sugar and butter in a mixing bowl, and beat them together with an electric mixer until creamy and very well combined, without lumps. Beat in eggs, one at a time, incorporating the first egg before adding the next one. Add the vanilla extract and salt; beat the flour in, a little at a time, and then the milk, making a creamy batter. Pour the batter into the prepared pie dish.\r\nBake in the preheated oven for 35 minutes; remove pie, and cover the rim with aluminum foil to prevent burning. Return to oven, and bake until the middle sets and the top forms a crusty layer, about 15 more minutes. Let the pie cool to room temperature, then refrigerate for at least 1 hour before serving.',
      image: 'yrstur1511816601.jpg',
      tags: 'Pie,Desert',
      ingredients: [
        {
          name: 'Brown Sugar',
          measure: '2 cups',
          id: 2683,
        },
        {
          name: 'Butter',
          measure: '¼ cup',
          id: 2684,
        },
        {
          name: 'Eggs',
          measure: '2',
          id: 2685,
        },
        {
          name: 'Vanilla Extract',
          measure: '1 tsp',
          id: 2686,
        },
        {
          name: 'Salt',
          measure: '1 tsp',
          id: 2687,
        },
        {
          name: 'Plain Flour',
          measure: '½ cup',
          id: 2688,
        },
        {
          name: 'Milk',
          measure: '1 1/2 cups',
          id: 2689,
        },
      ],
    },
    {
      id: 248,
      name: 'Steak Diane',
      category: 'Beef',
      instructions:
        'Heat oil in a 12" skillet over medium-high heat. Season steaks with salt and pepper, and add to skillet; cook, turning once, until browned on both sides and cooked to desired doneness, about 4 to 5 minutes for medium-rare. Transfer steaks to a plate, and set aside.\r\nReturn skillet to high heat, and add stock; cook until reduced until to 1⁄2 cup, about 10 minutes. Pour into a bowl, and set aside. Return skillet to heat, and add butter; add garlic and shallots, and cook, stirring, until soft, about 2 minutes. Add mushrooms, and cook, stirring, until they release any liquid and it evaporates and mushrooms begin to brown, about 2 minutes. Add cognac, and light with a match to flambée; cook until flame dies down. Stir in reserved stock, cream, Dijon, Worcestershire, and hot sauce, and then return steaks to skillet; cook, turning in sauce, until warmed through and sauce is thickened, about 4 minutes. Transfer steak to serving plates and stir parsley and chives into sauce; pour sauce over steaks to serve.',
      image: 'vussxq1511882648.jpg',
      tags: 'DateNight,Expensive,Meat,MainMeal,Cheasy',
      ingredients: [
        {
          name: 'Canola Oil',
          measure: '2 tbs',
          id: 2690,
        },
        {
          name: 'Beef Fillet',
          measure: '4',
          id: 2691,
        },
        {
          name: 'Beef Stock',
          measure: '1 1/2 cup',
          id: 2692,
        },
        {
          name: 'Butter',
          measure: '2 tbs',
          id: 2693,
        },
        {
          name: 'Garlic',
          measure: '2 cloves minced',
          id: 2694,
        },
        {
          name: 'Challots',
          measure: '1 medium finely diced',
          id: 2695,
        },
        {
          name: 'Mushrooms',
          measure: '4 oz',
          id: 2696,
        },
        {
          name: 'Brandy',
          measure: '¼ cup',
          id: 2697,
        },
        {
          name: 'Heavy Cream',
          measure: '¼ cup',
          id: 2698,
        },
        {
          name: 'Dijon Mustard',
          measure: '1 tbs',
          id: 2699,
        },
        {
          name: 'Worcestershire Sauce',
          measure: '1 tbs',
          id: 2700,
        },
        {
          name: 'Tabasco Sauce',
          measure: 'Dash',
          id: 2701,
        },
        {
          name: 'Parsley',
          measure: '1 tbs minced',
          id: 2702,
        },
        {
          name: 'Chives',
          measure: '1 tbs minced',
          id: 2703,
        },
        {
          name: 'Salt',
          measure: 'to taste',
          id: 2704,
        },
        {
          name: 'Pepper',
          measure: 'to taste',
          id: 2705,
        },
      ],
    },
    {
      id: 249,
      name: 'Saltfish and Ackee',
      category: 'Seafood',
      instructions:
        'For the saltfish, soak the salt cod overnight, changing the water a couple of times.\r\nDrain, then put the cod in a large pan of fresh water and bring to the boil. Drain again, add fresh water and bring to the boil again.\r\nSimmer for about five minutes, or until cooked through, then drain and flake the fish into large pieces. Discard any skin or bones.\r\nFor the dumplings, mix the flour and suet with a pinch of salt and 250ml/9fl oz water to make a dough.\r\nWrap the mixture in clingfilm and leave in the fridge to rest.\r\nOpen the can of ackee, drain and rinse, then set aside.\r\nHeat a tablespoon of olive oil in a pan and fry the onion until softened but not brown.\r\nAdd the spices, seasoning, pepper sauce and sliced peppers and continue to fry until the peppers are tender.\r\nAdd the chopped tomatoes, then the salt cod and mix together. Lastly stir in the ackee very gently and leave to simmer until ready to serve.\r\nWhen you’re almost ready to eat, heat about 1cm/½in vegetable oil in a frying pan and heat until just smoking.\r\nShape the dumpling mix into plum-size balls and shallow-fry until golden-brown. (CAUTION: hot oil can be dangerous. Do not leave the pan unattended.)\r\nDrain the dumplings on kitchen paper and serve with the saltfish and ackee.',
      image: 'vytypy1511883765.jpg',
      tags: 'Speciality',
      ingredients: [
        {
          name: 'Salt Cod',
          measure: '450g',
          id: 2706,
        },
        {
          name: 'Ackee',
          measure: '400g',
          id: 2707,
        },
        {
          name: 'Onion',
          measure: '1 chopped',
          id: 2708,
        },
        {
          name: 'Paprika',
          measure: '1 tsp',
          id: 2709,
        },
        {
          name: 'Curry Powder',
          measure: '2 tsp',
          id: 2710,
        },
        {
          name: 'Jerusalem Artichokes',
          measure: '2 tsp',
          id: 2711,
        },
        {
          name: 'Hotsauce',
          measure: '1 tsp',
          id: 2712,
        },
        {
          name: 'Red Pepper',
          measure: '1 sliced',
          id: 2713,
        },
        {
          name: 'Yellow Pepper',
          measure: '1 sliced',
          id: 2714,
        },
        {
          name: 'Tomatoes',
          measure: '200g',
          id: 2715,
        },
        {
          name: 'Salt',
          measure: 'to taste',
          id: 2716,
        },
        {
          name: 'Pepper',
          measure: 'to taste',
          id: 2717,
        },
        {
          name: 'Self-raising Flour',
          measure: '250g',
          id: 2718,
        },
        {
          name: 'Suet',
          measure: '30g',
          id: 2719,
        },
        {
          name: 'Salt',
          measure: 'pinch',
          id: 2720,
        },
        {
          name: 'Olive Oil',
          measure: 'for frying',
          id: 2721,
        },
      ],
    },
    {
      id: 250,
      name: 'Sweet and Sour Pork',
      category: 'Pork',
      instructions:
        'Preparation\r\n1. Crack the egg into a bowl. Separate the egg white and yolk.\r\n\r\nSweet and Sour Pork\r\n2. Slice the pork tenderloin into strips.\r\n\r\n3. Prepare the marinade using a pinch of salt, one teaspoon of starch, two teaspoons of light soy sauce, and an egg white.\r\n\r\n4. Marinade the pork strips for about 20 minutes.\r\n\r\n5. Put the remaining starch in a bowl. Add some water and vinegar to make a starchy sauce.\r\n\r\nSweet and Sour Pork\r\nCooking Instructions\r\n1. Pour the cooking oil into a wok and heat to 190°C (375°F). Add the marinated pork strips and fry them until they turn brown. Remove the cooked pork from the wok and place on a plate.\r\n\r\n2. Leave some oil in the wok. Put the tomato sauce and white sugar into the wok, and heat until the oil and sauce are fully combined.\r\n\r\n3. Add some water to the wok and thoroughly heat the sweet and sour sauce before adding the pork strips to it.\r\n\r\n4. Pour in the starchy sauce. Stir-fry all the ingredients until the pork and sauce are thoroughly mixed together.\r\n\r\n5. Serve on a plate and add some coriander for decoration.',
      image: '1529442316.jpg',
      tags: 'Sweet',
      ingredients: [
        {
          name: 'Pork',
          measure: '200g',
          id: 2722,
        },
        {
          name: 'Egg',
          measure: '1',
          id: 2723,
        },
        {
          name: 'Water',
          measure: 'Dash',
          id: 2724,
        },
        {
          name: 'Salt',
          measure: '1/2 tsp',
          id: 2725,
        },
        {
          name: 'Sugar',
          measure: '1 tsp',
          id: 2726,
        },
        {
          name: 'Soy Sauce',
          measure: '10g',
          id: 2727,
        },
        {
          name: 'Starch',
          measure: '10g',
          id: 2728,
        },
        {
          name: 'Tomato Puree',
          measure: '30g',
          id: 2729,
        },
        {
          name: 'Vinegar',
          measure: '10g',
          id: 2730,
        },
        {
          name: 'Coriander',
          measure: 'Dash',
          id: 2731,
        },
      ],
    },
    {
      id: 251,
      name: 'Szechuan Beef',
      category: 'Beef',
      instructions:
        "STEP 1 - MARINATING THE BEEF\r\nIn a bowl, add the beef, salt, sesame seed oil, white pepper, egg white, 2 Tablespoon of corn starch and 1 Tablespoon of oil.\r\nSTEP 2 - STIR FRY\r\nFirst Cook the beef by adding 2 Tablespoon of oil until the beef is golden brown.\r\nSet the beef aside\r\nIn a wok add 1 Tablespoon of oil, minced ginger, minced garlic and stir-fry for few seconds.\r\nNext add all of the vegetables and then add sherry cooking wine and 1 cup of water.\r\nTo make the sauce add oyster sauce, hot pepper sauce, and sugar.\r\nadd the cooked beef and 1 spoon of soy sauce\r\nTo thicken the sauce, whisk together 1 Tablespoon of cornstarch and 2 Tablespoon of water in a bowl and slowly add to your stir-fry until it's the right thickness.",
      image: '1529443236.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Beef',
          measure: '1/2 lb',
          id: 2732,
        },
        {
          name: 'Salt',
          measure: '1/2 tsp',
          id: 2733,
        },
        {
          name: 'Sesame Seed Oil',
          measure: '1 tsp',
          id: 2734,
        },
        {
          name: 'Pepper',
          measure: '1 pinch',
          id: 2735,
        },
        {
          name: 'Egg White',
          measure: '1',
          id: 2736,
        },
        {
          name: 'Starch',
          measure: '3 tbs',
          id: 2737,
        },
        {
          name: 'Oil',
          measure: '4 tbs',
          id: 2738,
        },
        {
          name: 'Ginger',
          measure: '1 tsp',
          id: 2739,
        },
        {
          name: 'Garlic',
          measure: '1 tsp',
          id: 2740,
        },
        {
          name: 'Onion',
          measure: '3/4 cup',
          id: 2741,
        },
        {
          name: 'Carrots',
          measure: '1/2 cup',
          id: 2742,
        },
        {
          name: 'Green Pepper',
          measure: '3/4 cup',
          id: 2743,
        },
        {
          name: 'Celery',
          measure: '1 cup',
          id: 2744,
        },
        {
          name: 'Mushrooms',
          measure: '1 cup',
          id: 2745,
        },
        {
          name: 'Cooking wine',
          measure: '1 tbs',
          id: 2746,
        },
        {
          name: 'Water',
          measure: '1 cup',
          id: 2747,
        },
        {
          name: 'Oyster Sauce',
          measure: '1 tbs',
          id: 2748,
        },
        {
          name: 'Hotsauce',
          measure: '1/2 tsp',
          id: 2749,
        },
        {
          name: 'Sugar',
          measure: '1 tsp',
          id: 2750,
        },
        {
          name: 'Soy Sauce',
          measure: '1 tbs',
          id: 2751,
        },
      ],
    },
    {
      id: 252,
      name: 'Shrimp Chow Fun',
      category: 'Seafood',
      instructions:
        "STEP 1 - SOAK THE RICE NOODLES\r\nSoak the rice noodles overnight untill they are soft\r\nSTEP 2 - BOIL THE RICE NOODLES\r\nBoil the noodles for 10-15 minutes and then rinse with cold water to stop the cooking process of the noodles.\r\nSTEP 3 -MARINATING THE SHRIMP\r\nIn a bowl add the shrimp, egg, 1 pinch of white pepper, 1 Teaspoon of sesame seed oil, 1 Tablespoon corn starch and 1 tablespoon of oil\r\nMix together well\r\nSTEP 4 - STIR FRY\r\nIn a wok add 2 Tablespoons of oil, shrimp and stir fry them until it is golden brown\r\nSet the shrimp aside\r\nAdd 1 Tablespoon of oil to the work and then add minced garlic, ginger and all of the vegetables.\r\nAdd the noodles to the wok\r\nNext add sherry cooking wine, oyster sauce, sugar, vinegar, sesame seed oil, 1 pinch white pepper, and soy sauce\r\nAdd back in the shrimp\r\nTo thicken the sauce, whisk together 1 Tablespoon of corn starch and 2 Tablespoon of water in a bowl and slowly add to your stir-fry until it's the right thickness.",
      image: '1529445434.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Rice Stick Noodles',
          measure: '1/2 bag',
          id: 2752,
        },
        {
          name: 'Prawns',
          measure: '8 oz',
          id: 2753,
        },
        {
          name: 'Egg',
          measure: '1/2',
          id: 2754,
        },
        {
          name: 'Pepper',
          measure: 'pinch',
          id: 2755,
        },
        {
          name: 'Sesame Seed Oil',
          measure: '2 tsp',
          id: 2756,
        },
        {
          name: 'Cornstarch',
          measure: '2 tbs',
          id: 2757,
        },
        {
          name: 'Oil',
          measure: '4 tbs',
          id: 2758,
        },
        {
          name: 'Minced Garlic',
          measure: '1 tsp',
          id: 2759,
        },
        {
          name: 'Ginger',
          measure: '1 tsp',
          id: 2760,
        },
        {
          name: 'Onion',
          measure: '1/2 cup',
          id: 2761,
        },
        {
          name: 'Bean Sprouts',
          measure: '1 cup',
          id: 2762,
        },
        {
          name: 'Spring Onions',
          measure: '1/2 cup',
          id: 2763,
        },
        {
          name: 'Cooking wine',
          measure: '1 tbs',
          id: 2764,
        },
        {
          name: 'Oyster Sauce',
          measure: '1 tbs',
          id: 2765,
        },
        {
          name: 'Sugar',
          measure: '1/2 tbs',
          id: 2766,
        },
        {
          name: 'Vinegar',
          measure: '1/2 tbs',
          id: 2767,
        },
        {
          name: 'Soy Sauce',
          measure: '1 tbs',
          id: 2768,
        },
      ],
    },
    {
      id: 253,
      name: 'Salmon Avocado Salad',
      category: 'Seafood',
      instructions:
        'Season the salmon, then rub with oil. Mix the dressing ingredients together. Halve, stone, peel and slice the avocados. Halve and quarter the cucumber lengthways, then cut into slices. Divide salad, avocado and cucumber between four plates, then drizzle with half the dressing.\r\n\r\nHeat a non-stick pan. Add the salmon and fry for 3-4 mins on each side until crisp but still moist inside. Put a salmon fillet on top of each salad and drizzle over the remaining dressing. Serve warm.',
      image: '1549542994.jpg',
      tags: 'Paleo,Keto,LowCarbs,Salad,Alcoholic,Halloween,',
      ingredients: [
        {
          name: 'Salmon',
          measure: '400g',
          id: 2769,
        },
        {
          name: 'Avocado',
          measure: '3',
          id: 2770,
        },
        {
          name: 'Cucumber',
          measure: '1',
          id: 2771,
        },
        {
          name: 'Spinach',
          measure: '400g',
          id: 2772,
        },
        {
          name: 'Mint',
          measure: '4 tbs',
          id: 2773,
        },
        {
          name: 'Lime',
          measure: 'zest and juice of 1',
          id: 2774,
        },
        {
          name: 'Honey',
          measure: '2 tsp',
          id: 2775,
        },
        {
          name: 'Olive Oil',
          measure: '3 tbs',
          id: 2776,
        },
      ],
    },
    {
      id: 254,
      name: 'Salmon Eggs Eggs Benedict',
      category: 'Breakfast',
      instructions:
        'First make the Hollandaise sauce. Put the lemon juice and vinegar in a small bowl, add the egg yolks and whisk with a balloon whisk until light and frothy. Place the bowl over a pan of simmering water and whisk until mixture thickens. Gradually add the butter, whisking constantly until thick – if it looks like it might be splitting, then whisk off the heat for a few mins. Season and keep warm.\r\n\r\nTo poach the eggs, bring a large pan of water to the boil and add the vinegar. Lower the heat so that the water is simmering gently. Stir the water so you have a slight whirlpool, then slide in the eggs one by one. Cook each for about 4 mins, then remove with a slotted spoon.\r\n\r\nLightly toast and butter the muffins, then put a couple of slices of salmon on each half. Top each with an egg, spoon over some Hollandaise and garnish with chopped chives.',
      image: '1550440197.jpg',
      tags: 'Bun,Brunch',
      ingredients: [
        {
          name: 'Eggs',
          measure: '4',
          id: 2777,
        },
        {
          name: 'White Wine Vinegar',
          measure: '2 tbs',
          id: 2778,
        },
        {
          name: 'English Muffins',
          measure: '2',
          id: 2779,
        },
        {
          name: 'Butter',
          measure: 'To serve',
          id: 2780,
        },
        {
          name: 'Smoked Salmon',
          measure: '8 slices',
          id: 2781,
        },
        {
          name: 'Lemon Juice',
          measure: '2 tsp',
          id: 2782,
        },
        {
          name: 'White Wine Vinegar',
          measure: '2 tsp',
          id: 2783,
        },
        {
          name: 'Egg',
          measure: '3 Yolkes',
          id: 2784,
        },
        {
          name: 'Unsalted Butter',
          measure: '125g',
          id: 2785,
        },
      ],
    },
    {
      id: 255,
      name: 'Shakshuka',
      category: 'Vegetarian',
      instructions:
        'Heat the oil in a frying pan that has a lid, then soften the onions, chilli, garlic and coriander stalks for 5 mins until soft. Stir in the tomatoes and sugar, then bubble for 8-10 mins until thick. Can be frozen for 1 month.\r\n\r\nUsing the back of a large spoon, make 4 dips in the sauce, then crack an egg into each one. Put a lid on the pan, then cook over a low heat for 6-8 mins, until the eggs are done to your liking. Scatter with the coriander leaves and serve with crusty bread.',
      image: 'g373701551450225.jpg',
      tags: 'Egg,Brunch,Breakfast',
      ingredients: [
        {
          name: 'Olive Oil',
          measure: '1 tbs',
          id: 2786,
        },
        {
          name: 'Red Onions',
          measure: '2 chopped',
          id: 2787,
        },
        {
          name: 'Red Chilli',
          measure: '1 finely chopped',
          id: 2788,
        },
        {
          name: 'Garlic',
          measure: '1 clove',
          id: 2789,
        },
        {
          name: 'Coriander',
          measure: 'Chopped',
          id: 2790,
        },
        {
          name: 'Cherry Tomatoes',
          measure: '800g',
          id: 2791,
        },
        {
          name: 'Caster Sugar',
          measure: '1 tbs',
          id: 2792,
        },
        {
          name: 'Eggs',
          measure: '4',
          id: 2793,
        },
        {
          name: 'Feta',
          measure: 'Spinkling',
          id: 2794,
        },
      ],
    },
    {
      id: 256,
      name: 'Smoked Haddock Kedgeree',
      category: 'Breakfast',
      instructions:
        'Melt 50g butter in a large saucepan (about 20cm across), add 1 finely chopped medium onion and cook gently over a medium heat for 5 minutes, until softened but not browned.\r\n\r\nStir in 3 split cardamom pods, ¼ tsp turmeric, 1 small cinnamon stick and 2 bay leaves, then cook for 1 minute.\r\n\r\nTip in 450g basmati rice and stir until it is all well coated in the spicy butter.\r\n\r\nPour in 1 litre chicken or fish stock, add ½ teaspoon salt and bring to the boil, stir once to release any rice from the bottom of the pan. Cover with a close-fitting lid, reduce the heat to low and leave to cook very gently for 12 minutes.\r\n\r\nMeanwhile, bring some water to the boil in a large shallow pan. Add 750g un-dyed smoked haddock fillet and simmer for 4 minutes, until the fish is just cooked. Lift it out onto a plate and leave until cool enough to handle.\r\n\r\nHard-boil 3 eggs for 8 minutes.\r\n\r\nFlake the fish, discarding any skin and bones. Drain the eggs, cool slightly, then peel and chop. \r\n\r\nUncover the rice and remove the bay leaves, cinnamon stick and cardamom pods if you wish to. Gently fork in the fish and the chopped eggs, cover again and return to the heat for 2-3 minutes, or until the fish has heated through.\r\n\r\nGently stir in almost all the 3 tbsp chopped fresh parsley, and season with a little salt and black pepper to taste. Serve scattered with the remaining parsley and garnished with 1 lemon, cut into wedges.',
      image: '1550441275.jpg',
      tags: 'Brunch,Fish,Fusion',
      ingredients: [
        {
          name: 'Butter',
          measure: '50g',
          id: 2795,
        },
        {
          name: 'Onion',
          measure: '1 chopped',
          id: 2796,
        },
        {
          name: 'Cardamom',
          measure: '3 Pods',
          id: 2797,
        },
        {
          name: 'Turmeric',
          measure: '1/4 tsp',
          id: 2798,
        },
        {
          name: 'Cinnamon Stick',
          measure: '1 small',
          id: 2799,
        },
        {
          name: 'Bay Leaf',
          measure: 'Sprigs of fresh',
          id: 2800,
        },
        {
          name: 'Basmati Rice',
          measure: '450g',
          id: 2801,
        },
        {
          name: 'Chicken Stock',
          measure: '1 Litre',
          id: 2802,
        },
        {
          name: 'Smoked Haddock',
          measure: '750g',
          id: 2803,
        },
        {
          name: 'Eggs',
          measure: '3',
          id: 2804,
        },
        {
          name: 'Parsley',
          measure: '3 tblsp chopped',
          id: 2805,
        },
        {
          name: 'Lemon',
          measure: '1 chopped',
          id: 2806,
        },
      ],
    },
    {
      id: 257,
      name: 'Stamppot',
      category: 'Pork',
      instructions:
        "\r\nWash and peel the potatoes and cut into similarly sized pieces for even cooking.\r\n\r\nIn a large soup pot, boil the potatoes and the bay leaves in salted water for 20 minutes. Discard the bay leaves.\r\n\r\nIf you're not using a bag of ready-cut curly kale, wash the bunches thoroughly under cool running water to get rid of all soil—you wouldn't want that gritty texture in your finished dish. Trim any coarse stems and discard any brown leaves. With a sharp knife, cut the curly kale into thin strips.\r\n\r\nPeel and chop the shallots.\r\n\r\nIn a frying pan or skillet, melt 1 tbsp. of butter and saute the shallots for a few minutes before adding the curly kale and 2 tbsp. of water. Season and cook for about 10 minutes, or until tender.\r\n\r\nWarm the milk on the stove or in the microwave.\r\n\r\nDrain, shake and dry the potatoes with kitchen towels before mashing with a potato masher or ricer. Working quickly, add the warm milk and the remaining butter. Season to taste with nutmeg, salt, and pepper. \r\n\r\nMix the cooked curly kale through the cooked mashed potato mixture.\r\n\r\nTop with slices of the smoked sausage and serve hot with your favorite mustard or gravy.\r\n\r\nServe and enjoy!",
      image: 'hyarod1565090529.jpg',
      tags: 'Savory,Breakfast',
      ingredients: [
        {
          name: 'Potatoes',
          measure: '1.5kg',
          id: 2807,
        },
        {
          name: 'Bay Leaf',
          measure: '2 leaves',
          id: 2808,
        },
        {
          name: 'Shallots',
          measure: '2',
          id: 2809,
        },
        {
          name: 'Butter',
          measure: '3 tbs',
          id: 2810,
        },
        {
          name: 'Kale',
          measure: '750g',
          id: 2811,
        },
        {
          name: 'Sausages',
          measure: '2',
          id: 2812,
        },
        {
          name: 'Milk',
          measure: '500ml',
          id: 2813,
        },
        {
          name: 'Nutmeg',
          measure: 'Grated',
          id: 2814,
        },
        {
          name: 'Salt',
          measure: 'Pinch',
          id: 2815,
        },
        {
          name: 'Pepper',
          measure: 'Pinch',
          id: 2816,
        },
      ],
    },
    {
      id: 258,
      name: 'Snert (Dutch Split Pea Soup)',
      category: 'Side',
      instructions:
        'Gather the ingredients.\r\n\r\nIn a large soup pot, bring water, split peas, pork belly or bacon, pork chop, and bouillon cube to a boil. Reduce the heat to a simmer, cover and let cook for 45 minutes, stirring occasionally and skimming off any foam that rises to the top. \r\n\r\nRemove the pork chop, debone, and thinly slice the meat. Set aside.\r\n\r\nAdd the celery, carrots, potato, onion, leek, and celeriac to the soup. Return to the boil, reduce the heat to a simmer and let cook, uncovered, for another 30 minutes, adding a little extra water if the ingredients start to stick to the bottom of the pot.\r\n\r\nAdd the smoked sausage for the last 15 minutes of cooking time. When the vegetables are tender, remove the bacon and smoked sausage, slice thinly and set aside.\r\n\r\nIf you prefer a smooth consistency, purée the soup with a stick blender. Season to taste with salt and pepper. Add the meat back to the soup, setting some slices of rookworst aside.\r\n\r\nServe in heated bowls or soup plates, garnished with slices of rookworst and chopped celery leaf.\r\n\r\nEnjoy!',
      image: '9ptx0a1565090843.jpg',
      tags: 'Soup,Cake',
      ingredients: [
        {
          name: 'Water',
          measure: '2L',
          id: 2817,
        },
        {
          name: 'Peas',
          measure: '300g',
          id: 2818,
        },
        {
          name: 'Pork',
          measure: '100g',
          id: 2819,
        },
        {
          name: 'Vegetable Stock Cube',
          measure: '1',
          id: 2820,
        },
        {
          name: 'Celery',
          measure: '2',
          id: 2821,
        },
        {
          name: 'Carrots',
          measure: '2',
          id: 2822,
        },
        {
          name: 'Potatoes',
          measure: '1 large',
          id: 2823,
        },
        {
          name: 'Onion',
          measure: '1 small',
          id: 2824,
        },
        {
          name: 'Leek',
          measure: '1 small',
          id: 2825,
        },
        {
          name: 'Celeriac',
          measure: '1 cup',
          id: 2826,
        },
        {
          name: 'Sausages',
          measure: '1 pound',
          id: 2827,
        },
      ],
    },
    {
      id: 259,
      name: 'Spaghetti alla Carbonara',
      category: 'Pasta',
      instructions:
        'STEP 1\r\nPut a large saucepan of water on to boil.\r\n\r\nSTEP 2\r\nFinely chop the 100g pancetta, having first removed any rind. Finely grate 50g pecorino cheese and 50g parmesan and mix them together.\r\n\r\nSTEP 3\r\nBeat the 3 large eggs in a medium bowl and season with a little freshly grated black pepper. Set everything aside.\r\n\r\nSTEP 4\r\nAdd 1 tsp salt to the boiling water, add 350g spaghetti and when the water comes back to the boil, cook at a constant simmer, covered, for 10 minutes or until al dente (just cooked).\r\n\r\nSTEP 5\r\nSquash 2 peeled plump garlic cloves with the blade of a knife, just to bruise it.\r\n\r\nSTEP 6\r\nWhile the spaghetti is cooking, fry the pancetta with the garlic. Drop 50g unsalted butter into a large frying pan or wok and, as soon as the butter has melted, tip in the pancetta and garlic.\r\n\r\nSTEP 7\r\nLeave to cook on a medium heat for about 5 minutes, stirring often, until the pancetta is golden and crisp. The garlic has now imparted its flavour, so take it out with a slotted spoon and discard.\r\n\r\nSTEP 8\r\nKeep the heat under the pancetta on low. When the pasta is ready, lift it from the water with a pasta fork or tongs and put it in the frying pan with the pancetta. Don’t worry if a little water drops in the pan as well (you want this to happen) and don’t throw the pasta water away yet.\r\n\r\nSTEP 9\r\nMix most of the cheese in with the eggs, keeping a small handful back for sprinkling over later.\r\n\r\nSTEP 10\r\nTake the pan of spaghetti and pancetta off the heat. Now quickly pour in the eggs and cheese. Using the tongs or a long fork, lift up the spaghetti so it mixes easily with the egg mixture, which thickens but doesn’t scramble, and everything is coated.\r\n\r\nSTEP 11\r\nAdd extra pasta cooking water to keep it saucy (several tablespoons should do it). You don’t want it wet, just moist. Season with a little salt, if needed.\r\n\r\nSTEP 12\r\nUse a long-pronged fork to twist the pasta on to the serving plate or bowl. Serve immediately with a little sprinkling of the remaining cheese and a grating of black pepper. If the dish does get a little dry before serving, splash in some more hot pasta water and the glossy sauciness will be revived.',
      image: 'llcbn01574260722.jpg',
      tags: 'Pasta,BBQ,Breakfast',
      ingredients: [
        {
          name: 'Spaghetti',
          measure: '320g',
          id: 2828,
        },
        {
          name: 'Egg Yolks',
          measure: '6',
          id: 2829,
        },
        {
          name: 'Salt',
          measure: 'As required',
          id: 2830,
        },
        {
          name: 'Bacon',
          measure: '150g',
          id: 2831,
        },
        {
          name: 'Pecorino',
          measure: '50g',
          id: 2832,
        },
        {
          name: 'Black Pepper',
          measure: 'As required',
          id: 2833,
        },
      ],
    },
    {
      id: 260,
      name: 'Soy-Glazed Meatloaves with Wasabi Mashed Potatoes & Roasted Carrots',
      category: 'Beef',
      instructions:
        "1. Preheat oven to 425 degrees. Wash and dry all produce. Dice potatoes into 1/2-inch pieces. Trim, peel, and cut carrots on a diagonal into 1/2-inch-thick pieces. Trim and thinly slice scallions, separating whites from greens; finely chop whites. Peel and finely chop garlic.\r\n\r\n2. In a medium bowl, soak bread with 2 TBSP water (4 TBSP for 4 servings); break up with your hands until pasty. Stir in beef, sriracha, scallion whites, half the garlic, salt (we used 3/4 tsp kosher salt; 11/2 tsp for 4), and pepper. Form into two 1-inch-tall loaves (four loaves for 4). Place on one side of a baking sheet. Toss carrots on empty side of same sheet with a drizzle of oil, salt, and pepper. (For 4, spread meatloaves out across whole sheet and add carrots to a second sheet.) Bake for 20 minutes (we'll glaze the meatloaves then).\r\n\r\n3. Meanwhile, place potatoes in a medium pot with enough salted water to cover by 2 inches. Bring to a boil and cook until very\r\ntender, 12-15 minutes. Reserve 1/2 cup potato cooking liquid, then drain. While potatoes cook, in a small bowl, combine soy sauce, garlic powder, 1/4 cup ketchup (1/2 cup for 4 servings), and 2 tsp sugar (4 tsp for 4).\r\n\r\n4. Once meatloaves and carrots have baked 20 minutes, remove from oven. Spoon half the ketchup glaze over meatloaves (save\r\nthe rest for serving); return to oven until carrots are browned and tender, meatloaves are cooked through, and glaze is tacky, 4-5 minutes more.\r\n\r\n5. Meanwhile, melt 2 TBSP butter (4 TBSP for 4 servings) in pot used for potatoes over medium heat. Add remaining garlic and cook\r\nuntil fragrant, 30 seconds. Add potatoes and 1/4 tsp wasabi. Mash, adding splashes of reserved potato cooking liquid as necessary until smooth. Season with salt and pepper. (If you like things spicy, stir in more wasabi!)\r\n\r\n6. Divide meatloaves, mashed potatoes, and roasted carrots between plates. Sprinkle with scallion greens and serve with remaining ketchup glaze on the side for dipping.",
      image: 'o2wb6p1581005243.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Potatoes',
          measure: '5',
          id: 2834,
        },
        {
          name: 'Carrots',
          measure: '12 ounces',
          id: 2835,
        },
        {
          name: 'Scallions',
          measure: '1',
          id: 2836,
        },
        {
          name: 'Garlic',
          measure: '2 cloves',
          id: 2837,
        },
        {
          name: 'Bread',
          measure: '1 Slice',
          id: 2838,
        },
        {
          name: 'Garlic Powder',
          measure: '1',
          id: 2839,
        },
        {
          name: 'Soy Sauce',
          measure: '2',
          id: 2840,
        },
        {
          name: 'Ground Beef',
          measure: '1',
          id: 2841,
        },
        {
          name: 'Vegetable Oil',
          measure: '1 tsp',
          id: 2842,
        },
        {
          name: 'Sugar',
          measure: '2 tsp',
          id: 2843,
        },
        {
          name: 'Butter',
          measure: '2 tbsp',
          id: 2844,
        },
      ],
    },
    {
      id: 261,
      name: 'Skillet Apple Pork Chops with Roasted Sweet Potatoes & Zucchini',
      category: 'Pork',
      instructions:
        "\r\nServes 2\r\n\r\n\r\n1. \r\n\r\nAdjust racks to top and middle positions and preheat oven to 450 degrees. Wash and dry all produce. Dice sweet potatoes into 1/2-inch pieces. Toss on a baking sheet with a drizzle of oil, salt, and pepper. Roast on top rack for 12 minutes (we'll roast the zucchini then). \r\n\r\n\r\n2. \r\n\r\nMeanwhile, halve and core apple; thinly slice into half-moons. Peel and finely chop garlic. Quarter lemon. Trim and halve zucchini lengthwise; cut crosswise into 1/2-inch-thick half-moons. Toss on a second baking sheet with a drizzle of oil and a pinch of salt and pepper. Set aside. \r\n\r\n\r\n3. \r\n\r\nPat pork dry with paper towels and season all over with salt and pepper. Heat a drizzle of oil in a large pan over medium-high heat. Add pork and cook until browned and cooked through, 4-5 minutes per side. Turn off heat; transfer to a plate. \r\n\r\n\r\n4. \r\n\r\nOnce sweet potatoes have roasted 12 minutes, transfer baking sheet with zucchini to middle rack and continue roasting until both veggies are browned and softened, 12-15 minutes more. \r\n\r\n\r\n5. \r\n\r\nMeanwhile, melt 1 TBSP butter (2 TBSP for 4 servings) in pan used for pork over medium-high heat. Add apple and season with salt and pepper. Cook, scraping up any browned bits from bottom of pan, until apple is slightly softened, 2-3 minutes. Add garlic; cook until fragrant, 30 seconds. Add 1/z cup water (3/4 cup for 4), stock concentrate, and 11/2 tsp sugar (3 tsp for 4). Cook, stirring, until sauce has thickened and apple is very tender, 3-5 minutes. Season with salt and pepper. \r\n\r\n\r\n6. \r\n\r\nRemove pan with apple from heat; stir in 1 TBSP butter (2 TBSP for 4 servings) and a squeeze of lemon juice. Divide pork, zucchini, and sweet potatoes between plates. Top pork with glazed apple sauce. Top zucchini with a squeeze of lemon juice. ",
      image: 'h3ijwo1581013377.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Potatoes',
          measure: '2',
          id: 2845,
        },
        {
          name: 'Apples',
          measure: '1',
          id: 2846,
        },
        {
          name: 'Garlic',
          measure: '2 cloves',
          id: 2847,
        },
        {
          name: 'Lemon',
          measure: '1',
          id: 2848,
        },
        {
          name: 'Pork',
          measure: '2',
          id: 2849,
        },
        {
          name: 'Zucchini',
          measure: '1',
          id: 2850,
        },
        {
          name: 'Chicken Stock',
          measure: '1',
          id: 2851,
        },
        {
          name: 'Vegetable Oil',
          measure: '1 tbsp',
          id: 2852,
        },
        {
          name: 'Sugar',
          measure: '1 1/2 tsp',
          id: 2853,
        },
        {
          name: 'Butter',
          measure: '2 tbsp',
          id: 2854,
        },
      ],
    },
    {
      id: 262,
      name: 'Strawberry Rhubarb Pie',
      category: 'Dessert',
      instructions:
        "Pie Crust:  In a food processor, place the flour, salt, and sugar and process until combined. Add the butter and process until the mixture resembles coarse\r\n\r\nmeal (about 15 seconds). Pour 1/4 cup (60 ml) water in a slow, steady stream, through the feed tube until the dough just holds together when pinched. If necessary, add more water. Do not process more than 30 seconds.\r\nTurn the dough onto your work surface and gather into a ball. Divide the dough in half, flattening each half into a disk, cover with plastic wrap, and refrigerate for about one hour before using. This will chill the butter and relax the gluten in the flour. \r\n\r\nAfter the dough has chilled sufficiently, remove one portion of the dough from the fridge and place it on a lightly floured surface.  Roll the pastry into a 12 inch (30 cm) circle. (To prevent the pastry from sticking to the counter and to ensure uniform thickness, keep lifting up and turning the pastry a quarter turn as you roll (always roll from the center of the pastry outwards).)  Fold the dough in half and gently transfer to a 9 inch (23 cm) pie pan. Brush off any excess flour and trim any overhanging pastry to an edge of 1/2 inch (1.5 cm). Refrigerate the pastry, covered with plastic wrap, while you make the filling. \r\n\r\nRemove the second round of pastry and roll it into a 13 inch (30 cm) circle. Using a pastry wheel or pizza cutter, cut the pastry into about 3/4 inch (2 cm) strips. Place the strips of pastry on a parchment paper-lined baking sheet, cover with plastic wrap, and place in the refrigerator for about 10 minutes. \r\n\r\nMake the Strawberry Rhubarb Filling: Place the cut strawberries and rhubarb in a large bowl. In a small bowl mix together the cornstarch, sugar, and ground cinnamon. \r\n\r\nRemove the chilled pie crust from the fridge. Sprinkle about 2 tablespoons of the sugar mixture over the bottom of the pastry crust. Add the remaining sugar mixture to the strawberries and rhubarb and gently toss to combine. Pour the fruit mixture into the prepared pie shell. Sprinkle the fruit with about 1 teaspoon of lemon juice and dot with 2 tablespoons of butter.\r\n\r\nRemove the lattice pastry from the refrigerator and, starting at the center with the longest strips and working outwards, place half the strips, spacing about 1 inch (2.5 cm) apart, on top of the filling. (Use the shortest pastry strips at the outer edges.) Then, gently fold back, about halfway, every other strip of pastry. Take another strip of pastry and place it perpendicular on top of the first strips of pastry. Unfold the bottom strips of pastry and then fold back the strips that weren't folded back the first time. Lay another strip of pastry perpendicular on top of the filling and then continue with the remaining strips. Trim the edges of the pastry strips, leaving a 1 inch (2.5 cm) overhang. Seal the edges of the pastry strips by folding them under the bottom pastry crust and flute the edges of the pastry. Brush the lattice pastry with milk and sprinkle with a little sugar. Cover and place in the refrigerator while you preheat the oven to 400 degrees F (205 degrees C) and place the oven rack in the lower third of the oven. Put a baking sheet, lined with aluminum foil, on the oven rack (to catch any spills.)\r\n\r\nPlace the pie plate on the hot baking sheet and bake the pie for about 35 minutes and then, if the edges of the pie are browning too much, cover with a foil ring. Continue to bake the pie for about another 10 minutes or until the crust is a golden brown color and the fruit juices begin to bubble.\r\n\r\nRemove the pie from the oven and place on a wire rack to cool for several hours. Serve at room temperature with softly whipped cream or vanilla ice cream. Leftovers can be stored in the refrigerator for about 3 days. Reheat before serving. This pie can be frozen.\r\n\r\nMakes one 9 inch (23 cm) pie.",
      image: '178z5o1585514569.jpg',
      tags: 'Pudding,Pie,Baking,Fruity,Glazed',
      ingredients: [
        {
          name: 'Flour',
          measure: '350g',
          id: 2855,
        },
        {
          name: 'Salt',
          measure: '1 tsp',
          id: 2856,
        },
        {
          name: 'Sugar',
          measure: '2 tbs',
          id: 2857,
        },
        {
          name: 'Butter',
          measure: '1 cup',
          id: 2858,
        },
        {
          name: 'Water',
          measure: '1/2 cup',
          id: 2859,
        },
        {
          name: 'Rhubarb',
          measure: '450g',
          id: 2860,
        },
        {
          name: 'Strawberries',
          measure: '450g',
          id: 2861,
        },
        {
          name: 'Cornstarch',
          measure: '3 tbs',
          id: 2862,
        },
        {
          name: 'Sugar',
          measure: '150g',
          id: 2863,
        },
        {
          name: 'Cinnamon',
          measure: '1/4 tsp',
          id: 2864,
        },
        {
          name: 'Lemon Juice',
          measure: '1 tsp',
          id: 2865,
        },
        {
          name: 'Unsalted Butter',
          measure: '2 tbs',
          id: 2866,
        },
        {
          name: 'Milk',
          measure: '2 tbs',
          id: 2867,
        },
        {
          name: 'Sugar',
          measure: 'Spinkling',
          id: 2868,
        },
      ],
    },
    {
      id: 263,
      name: 'Stuffed Lamb Tomatoes',
      category: 'Lamb',
      instructions:
        'Heat oven to 180C/160C fan/gas 4. Slice the tops off the tomatoes and reserve. Scoop out most of the pulp with a teaspoon, being careful not to break the skin. Finely chop the pulp, and keep any juices. Sprinkle the insides of the tomatoes with a little sugar to take away the acidity, then place them on a baking tray.\r\n\r\nHeat 2 tbsp olive oil in a large frying pan, add the onion and garlic, then gently cook for about 10 mins until soft but not coloured. Add the lamb, cinnamon and tomato purée, turn up the heat, then fry until the meat is browned. Add the tomato pulp and juice, the rice and the stock. Season generously. Bring to the boil, then simmer for 15 mins or until the rice is tender and the liquid has been absorbed. Set aside to cool a little, then stir in the herbs.\r\n\r\nStuff the tomatoes up to the brim, top tomatoes with their lids, drizzle with 2 tbsp more olive oil, sprinkle 3 tbsp water into the tray, then bake for 35 mins. Serve with salad and crusty bread, hot or cold.',
      image: 'u55lbp1585564013.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Tomatoes',
          measure: '4 large',
          id: 2869,
        },
        {
          name: 'Sugar',
          measure: 'Pinch',
          id: 2870,
        },
        {
          name: 'Olive Oil',
          measure: '4 tbs',
          id: 2871,
        },
        {
          name: 'Onion',
          measure: '1 chopped',
          id: 2872,
        },
        {
          name: 'Garlic Clove',
          measure: '2 finely chopped',
          id: 2873,
        },
        {
          name: 'Lamb',
          measure: '200g',
          id: 2874,
        },
        {
          name: 'Cinnamon',
          measure: '1 tbs',
          id: 2875,
        },
        {
          name: 'Tomato Puree',
          measure: '2 tbs chopped',
          id: 2876,
        },
        {
          name: 'Rice',
          measure: '50g',
          id: 2877,
        },
        {
          name: 'Chicken Stock',
          measure: '100ml',
          id: 2878,
        },
        {
          name: 'Dill',
          measure: '4 tbs',
          id: 2879,
        },
        {
          name: 'Chopped Parsley',
          measure: '2 tbs',
          id: 2880,
        },
        {
          name: 'Mint',
          measure: '1 tbs',
          id: 2881,
        },
      ],
    },
    {
      id: 264,
      name: 'Sledz w Oleju (Polish Herrings)',
      category: 'Seafood',
      instructions:
        'Soak herring in cold water for at least 1 hour. If very salty, repeat, changing the water each time.\r\n\r\nDrain thoroughly and slice herring into bite-size pieces.\r\n\r\nPlace in a jar large enough to accommodate the pieces and cover with oil, allspice, peppercorns, and bay leaf. Close the jar.\r\n\r\nRefrigerate for 2 to 3 days before eating. This will keep refrigerated up to 2 weeks.\r\n\r\nServe with finely chopped onion or onion slices, lemon, and parsley or dill.',
      image: '7ttta31593350374.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Herring',
          measure: '8',
          id: 2882,
        },
        {
          name: 'Onion',
          measure: '1 sliced',
          id: 2883,
        },
        {
          name: 'Olive Oil',
          measure: '1/2 cup',
          id: 2884,
        },
        {
          name: 'Allspice',
          measure: '1 tsp',
          id: 2885,
        },
        {
          name: 'Pepper',
          measure: '1 tsp',
          id: 2886,
        },
        {
          name: 'Bay Leaf',
          measure: '1',
          id: 2887,
        },
      ],
    },
    {
      id: 265,
      name: 'Shawarma',
      category: 'Chicken',
      instructions:
        'Combine the marinade ingredients in a large ziplock bag (or bowl).\r\nAdd the chicken and use your hands to make sure each piece is coated. If using a ziplock bag, I find it convenient to close the bag then massage the bag to disperse the rub all over each chicken piece.\r\nMarinate overnight or up to 24 hours.\r\nCombine the Yoghurt Sauce ingredients in a bowl and mix. Cover and put in the fridge until required (it will last for 3 days in the fridge).\r\nHeat grill/BBQ (or large heavy based pan on stove) on medium high. You should not need to oil it because the marinade has oil in it and also thigh fillets have fat. But if you are worried then oil your hotplate/grill. (See notes for baking)\r\nPlace chicken on the grill and cook the first side for 4 to 5 minutes until nicely charred, then turn and cook the other side for 3 to 4 minutes (the 2nd side takes less time).\r\nRemove chicken from the grill and cover loosely with foil. Set aside to rest for 5 minutes.\r\nTO SERVE\r\nSlice chicken and pile onto platter alongside flatbreads, Salad and the Yoghurt Sauce.\r\nTo make a wrap, get a piece of flatbread and smear with Yoghurt Sauce. Top with a bit of lettuce and tomato and Chicken Shawarma. Roll up and enjoy!',
      image: 'kcv6hj1598733479.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Chicken Thighs',
          measure: '1 kg',
          id: 2888,
        },
        {
          name: 'Coriander',
          measure: '1 tbs',
          id: 2889,
        },
        {
          name: 'Cumin',
          measure: '1 tbs',
          id: 2890,
        },
        {
          name: 'Cardamom',
          measure: '1 tbs',
          id: 2891,
        },
        {
          name: 'Cayenne Pepper',
          measure: '1 tsp',
          id: 2892,
        },
        {
          name: 'Paprika',
          measure: '2 tsp',
          id: 2893,
        },
        {
          name: 'Lemon Juice',
          measure: '2 tbs',
          id: 2894,
        },
        {
          name: 'Olive Oil',
          measure: '3 tbs',
          id: 2895,
        },
        {
          name: 'Greek Yogurt',
          measure: '1 cup',
          id: 2896,
        },
        {
          name: 'Garlic Clove',
          measure: '1',
          id: 2897,
        },
        {
          name: 'Cumin',
          measure: '1 tsp',
          id: 2898,
        },
        {
          name: 'Lemon Juice',
          measure: 'Splash',
          id: 2899,
        },
        {
          name: 'Lettuce',
          measure: 'Sliced',
          id: 2900,
        },
        {
          name: 'Tomato',
          measure: 'Sliced',
          id: 2901,
        },
        {
          name: 'Pita Bread',
          measure: '6',
          id: 2902,
        },
      ],
    },
    {
      id: 266,
      name: 'Spring onion and prawn empanadas',
      category: 'Seafood',
      instructions:
        'STEP 1\r\n\r\nTo make the dough, rub the butter into the flour and then add the egg white and half the yolk (keep the rest), vinegar, a pinch of salt and enough cold water to make a soft dough. Knead on a floured surface until smooth and then wrap and rest for 30 minutes.\r\n\r\nSTEP 2\r\n\r\nHeat the oven to 180c/fan 160c/gas 4. Trim the green ends of the spring onions and then finely slice the rest. Heat a little oil in a pan and fry them gently until soft but not browned. Add the chilli and garlic, stir and then add the prawns and cook until they are opaque. Season well. Scoop out the prawns and bubble the juices until they thicken, then add back the prawns.\r\n\r\nSTEP 3\r\n\r\nDivide the empanada dough into eight balls and roll out to thin circles on a floured surface. Put some filling on one half of the dough, sprinkle the feta on top and fold the other half over. Trim the edge and then fold and crimp the dough together so the empanada is tightly sealed, put it on an oiled baking sheet either on its side or sitting on its un-crimped edge like a cornish pasty. Repeat with the remaining dough and mixture. Mix the leftover egg yolk with a splash of water and brush the top of the empanadas.\r\n\r\nSTEP 4\r\n\r\nBake for 30 minutes or until golden and slightly crisp around the edges.',
      image: '1c5oso1614347493.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Spring Onions',
          measure: '1  bunch',
          id: 2903,
        },
        {
          name: 'Olive Oil',
          measure: 'Dash',
          id: 2904,
        },
        {
          name: 'Red Chilli',
          measure: '1 finely sliced',
          id: 2905,
        },
        {
          name: 'Garlic',
          measure: '1 clove',
          id: 2906,
        },
        {
          name: 'Prawns',
          measure: '350g',
          id: 2907,
        },
        {
          name: 'Feta',
          measure: '75g',
          id: 2908,
        },
        {
          name: 'Butter',
          measure: '15g',
          id: 2909,
        },
        {
          name: 'Plain Flour',
          measure: '250g',
          id: 2910,
        },
        {
          name: 'Egg',
          measure: '1 Seperated',
          id: 2911,
        },
        {
          name: 'White Wine Vinegar',
          measure: '1/2 tsp',
          id: 2912,
        },
      ],
    },
    {
      id: 267,
      name: 'Seri muka kuih',
      category: 'Dessert',
      instructions:
        'Soak glutinous rice with water for at least 1 ½ hours prior to using. Drain.\r\nPrepare a 9-inch round or square cake pan and spray with cooking spray or line with plastic wrap.\r\nMix coconut milk, water, salt and the rice. Pour it into cake pan, topped with the pandan knots.\r\nSteam for 30 minutes.\r\nAfter 30 minutes, fluff up the rice and remove pandan knots. Then, using a greased spatula, flatten the steamed rice. Make sure there are no holes/air bubbles and gaps in the rice, especially the sides.\r\nSteam for another 10 minutes.\r\n\r\nCombine pandan juice, coconut milk, all purpose flour, cornflour, and sugar. Mix well.\r\nAdd eggs and whisk well then strain into a medium sized metal bowl or pot.\r\nPlace pandan mixture over simmering water (double boiler or bain-marie)\r\nStir continuously and cook till custard starts to thicken. (15 minutes)\r\nPour pandan custard into glutinous rice layer, give it a little tap (for air bubbles) and continue to steam for 30 minutes.\r\nRemove kuih seri muka from the steamer and allow to cool completely before cutting into rectangles or diamond shapes.',
      image: '6ut2og1619790195.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Rice',
          measure: '400g',
          id: 2913,
        },
        {
          name: 'Coconut Milk',
          measure: '150ml',
          id: 2914,
        },
        {
          name: 'Water',
          measure: '100ml',
          id: 2915,
        },
        {
          name: 'Salt',
          measure: '1 tsp',
          id: 2916,
        },
        {
          name: 'Corn Flour',
          measure: '5 tbs',
          id: 2917,
        },
        {
          name: 'Flour',
          measure: '3 tbs',
          id: 2918,
        },
        {
          name: 'Eggs',
          measure: '3',
          id: 2919,
        },
        {
          name: 'Coconut Cream',
          measure: '200ml',
          id: 2920,
        },
        {
          name: 'Sugar',
          measure: '140g',
          id: 2921,
        },
      ],
    },
    {
      id: 268,
      name: 'Sushi',
      category: 'Seafood',
      instructions:
        'STEP 1\r\nTO MAKE SUSHI ROLLS: Pat out some rice. Lay a nori sheet on the mat, shiny-side down. Dip your hands in the vinegared water, then pat handfuls of rice on top in a 1cm thick layer, leaving the furthest edge from you clear.\r\n\r\nSTEP 2\r\nSpread over some Japanese mayonnaise. Use a spoon to spread out a thin layer of mayonnaise down the middle of the rice.\r\n\r\nSTEP 3\r\nAdd the filling. Get your child to top the mayonnaise with a line of their favourite fillings – here we’ve used tuna and cucumber.\r\n\r\nSTEP 4\r\nRoll it up. Lift the edge of the mat over the rice, applying a little pressure to keep everything in a tight roll.\r\n\r\nSTEP 5\r\nStick down the sides like a stamp. When you get to the edge without any rice, brush with a little water and continue to roll into a tight roll.\r\n\r\nSTEP 6\r\nWrap in cling film. Remove the mat and roll tightly in cling film before a grown-up cuts the sushi into thick slices, then unravel the cling film.\r\n\r\nSTEP 7\r\nTO MAKE PRESSED SUSHI: Layer over some smoked salmon. Line a loaf tin with cling film, then place a thin layer of smoked salmon inside on top of the cling film.\r\n\r\nSTEP 8\r\nCover with rice and press down. Press about 3cm of rice over the fish, fold the cling film over and press down as much as you can, using another tin if you have one.\r\n\r\nSTEP 9\r\nTip it out like a sandcastle. Turn block of sushi onto a chopping board. Get a grown-up to cut into fingers, then remove the cling film.\r\n\r\nSTEP 10\r\nTO MAKE SUSHI BALLS: Choose your topping. Get a small square of cling film and place a topping, like half a prawn or a small piece of smoked salmon, on it. Use damp hands to roll walnut-sized balls of rice and place on the topping.\r\n\r\nSTEP 11\r\nMake into tight balls. Bring the corners of the cling film together and tighten into balls by twisting it up, then unwrap and serve.',
      image: 'g046bb1663960946.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Sushi Rice',
          measure: '300ml',
          id: 2922,
        },
        {
          name: 'Rice wine',
          measure: '100ml',
          id: 2923,
        },
        {
          name: 'Caster Sugar',
          measure: '2 tbs',
          id: 2924,
        },
        {
          name: 'Mayonnaise',
          measure: '3 tbs',
          id: 2925,
        },
        {
          name: 'Rice wine',
          measure: '1 tbs',
          id: 2926,
        },
        {
          name: 'Soy Sauce',
          measure: '1 tbs',
          id: 2927,
        },
        {
          name: 'Cucumber',
          measure: '1',
          id: 2928,
        },
      ],
    },
    {
      id: 269,
      name: 'Stuffed Bell Peppers with Quinoa and Black Beans',
      category: 'Vegetarian',
      instructions:
        '1. Preheat your oven to 375°F (190°C). Lightly grease a 9x13-inch baking dish or a similar-sized casserole dish.\r\n2. Place the bell pepper halves in the prepared baking dish, cut side up. Bake for 15-20 minutes, or until slightly softened.\r\n3. While the bell peppers are baking, prepare the filling. In a large skillet, heat the olive oil over medium heat. Add the chopped onion, and cook for 3-4 minutes, until softened. Add the garlic, and cook for another 1 minute, until fragrant.\r\n4. Stir in the cooked quinoa, black beans, corn, diced tomatoes, ground cumin, chili powder, smoked paprika, salt, and pepper. Cook for 5-7 minutes, until heated through. Remove the skillet from heat, and stir in 1 cup of the shredded cheese, if using.\r\n5. Remove the bell peppers from the oven, and carefully stuff each pepper half with the quinoa and black bean mixture. Top the stuffed peppers with the remaining 1/2 cup of shredded cheese, if using.\r\n6. Return the stuffed peppers to the oven, and bake for another 15-20 minutes, until the cheese is melted and the peppers are tender.\r\n7. Remove from the oven, and allow the stuffed peppers to cool for 5 minutes before serving. Garnish with fresh chopped cilantro.',
      image: 'b66myb1683207208.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Green Pepper',
          measure: '4 whole',
          id: 2929,
        },
        {
          name: 'Olive Oil',
          measure: '1 tablespoon',
          id: 2930,
        },
        {
          name: 'Onion',
          measure: '1 small finely diced',
          id: 2931,
        },
        {
          name: 'Garlic',
          measure: '2 cloves minced',
          id: 2932,
        },
        {
          name: 'Quinoa',
          measure: '1 cups',
          id: 2933,
        },
        {
          name: 'Black Beans',
          measure: '1 can',
          id: 2934,
        },
        {
          name: 'Sweetcorn',
          measure: '1 cup',
          id: 2935,
        },
        {
          name: 'Diced Tomatoes',
          measure: '1 can',
          id: 2936,
        },
        {
          name: 'Cumin',
          measure: '1 teaspoon',
          id: 2937,
        },
        {
          name: 'Chili Powder',
          measure: '½ tsp',
          id: 2938,
        },
        {
          name: 'Smoked Paprika',
          measure: '½ tsp',
          id: 2939,
        },
        {
          name: 'Salt',
          measure: 'To taste',
          id: 2940,
        },
        {
          name: 'Pepper',
          measure: 'To taste',
          id: 2941,
        },
        {
          name: 'Shredded Mexican Cheese',
          measure: '1 1/2 cup',
          id: 2942,
        },
        {
          name: 'Cilantro',
          measure: 'Chopped',
          id: 2943,
        },
      ],
    },
    {
      id: 270,
      name: 'Strawberries Romanoff',
      category: 'Dessert',
      instructions:
        'In a medium bowl, combine hulled and quartered strawberries, 4 Tbsp sugar and 4 Tbsp liqueur, stir to combine then cover and refrigerate at least 1 hour and up to 2 hours, stirring once or twice.\r\n\r\nTwo photos of cut strawberries in a bowl with one having sugar being added to the bowl Two photos of cut up strawberries for Strawberry Romanoff \r\n\r\nJust before serving, in a large mixing bowl, combine 1 cup cold heavy cream and 1/4 cup powdered sugar, and beat with an electric mixer until stiff peaks form. Using a spatula, fold in 1/4 cup sour cream just until well blended.\r\n\r\nTo serve, stir strawberries then divide between 6 serving glasses or bowls. You can spoon a little syrup over the berries if you like. You can also use this syrup to soak a cake. Spoon cream over strawberries, dividing evenly. You can also use an ice cream scoop with trigger release for a nice rounded puff of cream. Serve right away or chill and enjoy within 2 hours of assembly.\r\n\r\n',
      image: 'oe8rg51699014028.jpg',
      tags: 'fruity',
      ingredients: [
        {
          name: 'Strawberries',
          measure: '2 pint',
          id: 2944,
        },
        {
          name: 'Sugar',
          measure: '4 tbs',
          id: 2945,
        },
        {
          name: 'Grand Marnier',
          measure: '4 tbs',
          id: 2946,
        },
        {
          name: 'Cream',
          measure: '1 cup',
          id: 2947,
        },
        {
          name: 'Sour Cream',
          measure: '1/4 cup',
          id: 2948,
        },
      ],
    },
    {
      id: 271,
      name: 'Teriyaki Chicken Casserole',
      category: 'Chicken',
      instructions:
        'Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\r\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.\r\nPlace the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.\r\n*Meanwhile, steam or cook the vegetables according to package directions.\r\nAdd the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!',
      image: 'wvpsxx1468256321.jpg',
      tags: 'Meat,Casserole',
      ingredients: [
        {
          name: 'soy sauce',
          measure: '3/4 cup',
          id: 2949,
        },
        {
          name: 'water',
          measure: '1/2 cup',
          id: 2950,
        },
        {
          name: 'brown sugar',
          measure: '1/4 cup',
          id: 2951,
        },
        {
          name: 'ground ginger',
          measure: '1/2 teaspoon',
          id: 2952,
        },
        {
          name: 'minced garlic',
          measure: '1/2 teaspoon',
          id: 2953,
        },
        {
          name: 'cornstarch',
          measure: '4 Tablespoons',
          id: 2954,
        },
        {
          name: 'chicken breasts',
          measure: '2',
          id: 2955,
        },
        {
          name: 'stir-fry vegetables',
          measure: '1 (12 oz.)',
          id: 2956,
        },
        {
          name: 'brown rice',
          measure: '3 cups',
          id: 2957,
        },
      ],
    },
    {
      id: 272,
      name: 'Tandoori chicken',
      category: 'Chicken',
      instructions:
        'Mix the lemon juice with the paprika and red onions in a large shallow dish. Slash each chicken thigh three times, then turn them in the juice and set aside for 10 mins.\r\nMix all of the marinade ingredients together and pour over the chicken. Give everything a good mix, then cover and chill for at least 1 hr. This can be done up to a day in advance.\r\nHeat the grill. Lift the chicken pieces onto a rack over a baking tray. Brush over a little oil and grill for 8 mins on each side or until lightly charred and completely cooked through.',
      image: 'qptpvt1487339892.jpg',
      tags: 'Spicy,Meat',
      ingredients: [
        {
          name: 'lemons',
          measure: '2 Juice',
          id: 2958,
        },
        {
          name: 'paprika',
          measure: '4 tsp',
          id: 2959,
        },
        {
          name: 'red onions',
          measure: '2 finely chopped',
          id: 2960,
        },
        {
          name: 'chicken thighs',
          measure: '16 skinnless',
          id: 2961,
        },
        {
          name: 'vegetable oil',
          measure: 'For brushing',
          id: 2962,
        },
        {
          name: 'Greek yogurt',
          measure: '300ml',
          id: 2963,
        },
        {
          name: 'ginger',
          measure: 'large piece',
          id: 2964,
        },
        {
          name: 'garlic clove',
          measure: '4',
          id: 2965,
        },
        {
          name: 'garam masala',
          measure: '¾ tsp',
          id: 2966,
        },
        {
          name: 'ground cumin',
          measure: '¾ tsp',
          id: 2967,
        },
        {
          name: 'chilli powder',
          measure: '½ tsp',
          id: 2968,
        },
        {
          name: 'turmeric',
          measure: '¼ tsp',
          id: 2969,
        },
      ],
    },
    {
      id: 273,
      name: 'Thai Green Curry',
      category: 'Chicken',
      instructions:
        'Put the potatoes in a pan of boiling water and cook for 5 minutes. Throw in the beans and cook for a further 3 minutes, by which time both should be just tender but not too soft. Drain and put to one side.\r\nIn a wok or large frying pan, heat the oil until very hot, then drop in the garlic and cook until golden, this should take only a few seconds. Don’t let it go very dark or it will spoil the taste. Spoon in the curry paste and stir it around for a few seconds to begin to cook the spices and release all the flavours. Next, pour in the coconut milk and let it come to a bubble.\r\nStir in the fish sauce and sugar, then the pieces of chicken. Turn the heat down to a simmer and cook, covered, for about 8 minutes until the chicken is cooked.\r\nTip in the potatoes and beans and let them warm through in the hot coconut milk, then add a lovely citrussy flavour by stirring in the shredded lime leaves (or lime zest). The basil leaves go in next, but only leave them briefly on the heat or they will quickly lose their brightness. Scatter with the lime garnish and serve immediately with boiled rice.',
      image: 'sstssx1487349585.jpg',
      tags: 'Curry,Mild',
      ingredients: [
        {
          name: 'potatoes',
          measure: '225g new',
          id: 2970,
        },
        {
          name: 'green beans',
          measure: '100g',
          id: 2971,
        },
        {
          name: 'sunflower oil',
          measure: '1 tbsp',
          id: 2972,
        },
        {
          name: 'garlic',
          measure: '1 clove',
          id: 2973,
        },
        {
          name: 'Thai green curry paste',
          measure: '4 tsp',
          id: 2974,
        },
        {
          name: 'coconut milk',
          measure: '400ml',
          id: 2975,
        },
        {
          name: 'Thai fish sauce',
          measure: '2 tsp',
          id: 2976,
        },
        {
          name: 'Sugar',
          measure: '1 tsp',
          id: 2977,
        },
        {
          name: 'Chicken',
          measure: '450g boneless',
          id: 2978,
        },
        {
          name: 'lime',
          measure: '2 fresh kaffir leaves',
          id: 2979,
        },
        {
          name: 'basil',
          measure: 'handfull',
          id: 2980,
        },
        {
          name: 'Rice',
          measure: 'Boiled',
          id: 2981,
        },
      ],
    },
    {
      id: 274,
      name: 'Toad In The Hole',
      category: 'Pork',
      instructions:
        'Preheat the oven to 200°C/fan180°C/gas 6. fry sausages in a non-stick pan until browned.\r\nDrizzle vegetable oil in a 30cm x 25cm x 6cm deep roasting tray and heat in the oven for 5 minutes.\r\nPut the plain flour in a bowl, crack in the medium free-range eggs, then stir in the grated horseradish. Gradually beat in the semi-skimmed milk. Season.\r\nPut the sausages into the hot roasting tray and pour over the batter. Top with cherry tomatoes on the vine and cook for 30 minutes until puffed and golden.',
      image: 'ytuvwr1503070420.jpg',
      tags: null,
      ingredients: [
        {
          name: 'sausages',
          measure: '8',
          id: 2982,
        },
        {
          name: 'vegetable oil',
          measure: '3 tbsp',
          id: 2983,
        },
        {
          name: 'plain flour',
          measure: '100g',
          id: 2984,
        },
        {
          name: 'eggs',
          measure: '2 medium',
          id: 2985,
        },
        {
          name: 'horseradish',
          measure: '1 tbsp grated',
          id: 2986,
        },
        {
          name: 'milk',
          measure: '225ml',
          id: 2987,
        },
        {
          name: 'cherry tomatoes',
          measure: '200g',
          id: 2988,
        },
      ],
    },
    {
      id: 275,
      name: 'Turkey Meatloaf',
      category: 'Miscellaneous',
      instructions:
        'Heat oven to 180C/160C fan/gas 4. Heat the oil in a large frying pan and cook the onion for 8-10 mins until softened. Add the garlic, Worcestershire sauce and 2 tsp tomato purée, and stir until combined. Set aside to cool.\r\n\r\nPut the turkey mince, egg, breadcrumbs and cooled onion mix in a large bowl and season well. Mix everything to combine, then shape into a rectangular loaf and place in a large roasting tin. Spread 2 tbsp barbecue sauce over the meatloaf and bake for 30 mins.\r\n\r\nMeanwhile, drain 1 can of beans only, then pour both cans into a large bowl. Add the remaining barbecue sauce and tomato purée. Season and set aside.\r\n\r\nWhen the meatloaf has had its initial cooking time, scatter the beans around the outside and bake for 15 mins more until the meatloaf is cooked through and the beans are piping hot. Scatter over the parsley and serve the meatloaf in slices.',
      image: 'ypuxtw1511297463.jpg',
      tags: 'Alcoholic',
      ingredients: [
        {
          name: 'Olive Oil',
          measure: '1 tblsp',
          id: 2989,
        },
        {
          name: 'Onion',
          measure: '1 large',
          id: 2990,
        },
        {
          name: 'Garlic',
          measure: '1 clove peeled crushed',
          id: 2991,
        },
        {
          name: 'Worcestershire Sauce',
          measure: '2 tblsp',
          id: 2992,
        },
        {
          name: 'Tomato Puree',
          measure: '3 tsp',
          id: 2993,
        },
        {
          name: 'Turkey Mince',
          measure: '500g',
          id: 2994,
        },
        {
          name: 'Eggs',
          measure: '1 large',
          id: 2995,
        },
        {
          name: 'Breadcrumbs',
          measure: '85g',
          id: 2996,
        },
        {
          name: 'Barbeque Sauce',
          measure: '2 tblsp',
          id: 2997,
        },
        {
          name: 'Cannellini Beans',
          measure: '800g',
          id: 2998,
        },
        {
          name: 'Parsley',
          measure: '2 tblsp',
          id: 2999,
        },
      ],
    },
    {
      id: 276,
      name: 'Tuna Nicoise',
      category: 'Seafood',
      instructions:
        'Heat oven to 200C/fan 180C/gas 6. Toss the potatoes with 2 tsp oil and some seasoning. Tip onto a large baking tray, then roast for 20 mins, stirring halfway, until crisp, golden and cooked through.\r\nMeanwhile, put eggs in a small pan of water, bring to the boil, then simmer for 8-10 mins, depending on how you like them cooked. Plunge into a bowl of cold water to cool for a few mins. Peel away the shells, then cut into halves.\r\nIn a large salad bowl, whisk together the remaining oil, red wine vinegar, capers and chopped tomatoes. Season, tip in the onion, spinach, tuna and potatoes, then gently toss together. Top with the eggs, then serve straight away.',
      image: 'yypwwq1511304979.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Potatoes',
          measure: '450g',
          id: 3000,
        },
        {
          name: 'Olive Oil',
          measure: '2 tblsp',
          id: 3001,
        },
        {
          name: 'Eggs',
          measure: '4',
          id: 3002,
        },
        {
          name: 'Red Wine Vinegar',
          measure: '1 tbls',
          id: 3003,
        },
        {
          name: 'Capers',
          measure: '2 tblsp',
          id: 3004,
        },
        {
          name: 'Sunflower Oil',
          measure: '50g',
          id: 3005,
        },
        {
          name: 'Red Onions',
          measure: '½',
          id: 3006,
        },
        {
          name: 'Spinach',
          measure: '100g',
          id: 3007,
        },
        {
          name: 'Tuna',
          measure: '400g',
          id: 3008,
        },
      ],
    },
    {
      id: 277,
      name: 'Tahini Lentils',
      category: 'Vegetarian',
      instructions:
        'In a jug, mix the tahini with the zest and juice of the lemon and 50ml of cold water to make a runny dressing. Season to taste, then set aside.\r\nHeat the oil in a wok or large frying pan over a medium-high heat. Add the red onion, along with a pinch of salt, and fry for 2 mins until starting to soften and colour. Add the garlic, pepper, green beans and courgette and fry for 5 min, stirring frequently.\r\nTip in the kale, lentils and the tahini dressing. Keep the pan on the heat for a couple of mins, stirring everything together until the kale is wilted and it’s all coated in the creamy dressing.',
      image: 'vpxyqt1511464175.jpg',
      tags: 'Pulse',
      ingredients: [
        {
          name: 'Tahini',
          measure: '50g',
          id: 3009,
        },
        {
          name: 'Lemon',
          measure: 'zest and juice of 1',
          id: 3010,
        },
        {
          name: 'Olive Oil',
          measure: '2 tblsp',
          id: 3011,
        },
        {
          name: 'Red Onions',
          measure: '1 chopped',
          id: 3012,
        },
        {
          name: 'Garlic',
          measure: '1 clove peeled crushed',
          id: 3013,
        },
        {
          name: 'Yellow Pepper',
          measure: '1 thinly sliced',
          id: 3014,
        },
        {
          name: 'Green Beans',
          measure: '200g',
          id: 3015,
        },
        {
          name: 'Courgettes',
          measure: '1 sliced',
          id: 3016,
        },
        {
          name: 'Kale',
          measure: '100g shredded',
          id: 3017,
        },
        {
          name: 'Lentils',
          measure: '250g pack',
          id: 3018,
        },
      ],
    },
    {
      id: 278,
      name: 'Three Fish Pie',
      category: 'Seafood',
      instructions:
        'Preheat the oven to 200C/400F/Gas 6 (180C fan).\r\nPut the potatoes into a saucepan of cold salted water. Bring up to the boil and simmer until completely tender. Drain well and then mash with the butter and milk. Add pepper and taste to check the seasoning. Add salt and more pepper if necessary.\r\nFor the fish filling, melt the butter in a saucepan, add the leeks and stir over the heat. Cover with a lid and simmer gently for 10 minutes, or until soft. Measure the flour into a small bowl. Add the wine and whisk together until smooth.\r\nAdd the milk to the leeks, bring to the boil and then add the wine mixture. Stir briskly until thickened. Season and add the parsley and fish. Stir over the heat for two minutes, then spoon into an ovenproof casserole. Scatter over the eggs. Allow to cool until firm.\r\nSpoon the mashed potatoes over the fish mixture and mark with a fork. Sprinkle with cheese.\r\nBake for 30-40 minutes, or until lightly golden-brown on top and bubbling around the edges.',
      image: 'spswqs1511558697.jpg',
      tags: 'Fish,Seafood,Dairy,Pie',
      ingredients: [
        {
          name: 'Potatoes',
          measure: '1kg',
          id: 3019,
        },
        {
          name: 'Butter',
          measure: 'Knob',
          id: 3020,
        },
        {
          name: 'Milk',
          measure: 'Dash',
          id: 3021,
        },
        {
          name: 'Gruyère',
          measure: '50g',
          id: 3022,
        },
        {
          name: 'Butter',
          measure: '75g',
          id: 3023,
        },
        {
          name: 'Leek',
          measure: '2 sliced',
          id: 3024,
        },
        {
          name: 'Plain Flour',
          measure: '75g',
          id: 3025,
        },
        {
          name: 'White Wine',
          measure: '150ml',
          id: 3026,
        },
        {
          name: 'Milk',
          measure: '568ml',
          id: 3027,
        },
        {
          name: 'Parsley',
          measure: '2 tbs chopped',
          id: 3028,
        },
        {
          name: 'Salmon',
          measure: '250g',
          id: 3029,
        },
        {
          name: 'Haddock',
          measure: '250g',
          id: 3030,
        },
        {
          name: 'Smoked Haddock',
          measure: '250g',
          id: 3031,
        },
        {
          name: 'Eggs',
          measure: '6',
          id: 3032,
        },
      ],
    },
    {
      id: 279,
      name: 'Treacle Tart',
      category: 'Dessert',
      instructions:
        'First make the short crust pastry: measure the flour into a large bowl and rub in the butter with your fingertips until the mixture resembles fine breadcrumbs (alternatively, this can be done in a food processor). Add about three tablespoons of cold water and mix to a firm dough, wrap in cling film and chill in the fridge for about 20 minutes.\r\nPreheat the oven to 200C/400F/Gas 6 and put a heavy baking tray in the oven to heat up. Grease a deep 18cm/7in loose-bottomed fluted flan tin with butter.\r\nRemove about 150g/5½oz of pastry from the main ball and set aside for the lattice top.\r\nRoll the rest of the pastry out thinly on a lightly floured work surface and line the prepared flan tin with the pastry.\r\nPrick the base with a fork, to stop the base rising up during baking.\r\nPlace the reserved pastry for the lattice top on cling film and roll out thinly. Egg wash the pastry and set aside to chill in the fridge (the cling film makes it easier to move about). Do not cut into strips at this stage. Do not egg wash the strips once they are on the tart as it will drip into the treacle mixture.\r\nTo make the filling, heat the syrup gently in a large pan but do not boil.\r\nOnce melted, add the breadcrumbs, lemon juice and zest to the syrup. (You can add less lemon if you would prefer less citrus taste.) If the mixture looks runny, add a few more breadcrumbs.\r\nPour the syrup mixture into the lined tin and level the surface.\r\nRemove the reserved pastry from the fridge and cut into long strips, 1cm/½in wide. Make sure they are all longer than the edges of the tart tin.\r\nEgg wash the edge of the pastry in the tin, and start to make the woven laying lattice pattern over the mixture, leave the strips hanging over the edge of the tin.\r\nOnce the lattice is in place, use the tin edge to cut off the strips by pressing down with your hands, creating a neat finish.\r\nBake on the pre-heated baking tray in the hot oven for about 10 minutes until the pastry has started to colour, and then reduce the oven temperature to 180C/350F/Gas 4. If at this stage the lattice seems to be getting too dark brown, cover the tart with tin foil.\r\nBake for a further 25-30 minutes until the pastry is golden-brown and the filling set.\r\nRemove the tart from the oven and leave to firm up in the tin. Serve warm or cold.',
      image: 'wprvrw1511641295.jpg',
      tags: 'Tart',
      ingredients: [
        {
          name: 'Plain Flour',
          measure: '250g',
          id: 3033,
        },
        {
          name: 'Butter',
          measure: '135g',
          id: 3034,
        },
        {
          name: 'Golden Syrup',
          measure: '400g',
          id: 3035,
        },
        {
          name: 'Breadcrumbs',
          measure: '150g',
          id: 3036,
        },
        {
          name: 'Lemons',
          measure: 'Zest of 2',
          id: 3037,
        },
        {
          name: 'Eggs',
          measure: '1 beaten',
          id: 3038,
        },
      ],
    },
    {
      id: 280,
      name: 'Tarte Tatin',
      category: 'Dessert',
      instructions:
        'Roll the pastry to a 3mm-thick round on a lightly floured surface and cut a 24cm circle, using a plate as a guide. Lightly prick all over with a fork, wrap in cling film on a baking sheet and freeze while preparing the apples.\r\nHeat oven to 180C/160C fan/gas 4. Peel, quarter and core the apples. Put the sugar in a flameproof 20cm ceramic Tatin dish or a 20cm ovenproof heavy-based frying pan and place over a medium-high heat. Cook the sugar for 5-7 mins to a dark amber caramel syrup that’s starting to smoke, then turn off the heat and stir in the 60g diced chilled butter.\r\nTo assemble the Tarte Tatin, arrange the apple quarters very tightly in a circle around the edge of the dish first, rounded-side down, then fill in the middle in a similar fashion. Gently press with your hands to ensure there are no gaps. Brush the fruit with the melted butter.\r\nBake in the oven for 30 mins, then remove and place the disc of frozen puff pastry on top – it will quickly defrost. Tuck the edges down the inside of the dish and, with a knife, prick a few holes in the pastry to allow steam to escape. Bake for a further 40-45 mins until the pastry is golden brown and crisp.\r\nAllow to cool to room temperature for 1 hr before running a knife around the edge of the dish and inverting it onto a large serving plate that is deep enough to contain the juices. Serve with crème fraîche or vanilla ice cream.',
      image: 'ryspuw1511786688.jpg',
      tags: 'Treat,Tart,Desert,DinnerParty',
      ingredients: [
        {
          name: 'Puff Pastry',
          measure: '300g',
          id: 3039,
        },
        {
          name: 'Plain Flour',
          measure: 'Dusting',
          id: 3040,
        },
        {
          name: 'Braeburn Apples',
          measure: '6',
          id: 3041,
        },
        {
          name: 'Caster Sugar',
          measure: '100g',
          id: 3042,
        },
        {
          name: 'Butter',
          measure: '85g',
          id: 3043,
        },
        {
          name: 'Creme Fraiche',
          measure: 'to serve',
          id: 3044,
        },
      ],
    },
    {
      id: 281,
      name: 'Three-cheese souffles',
      category: 'Miscellaneous',
      instructions:
        'Heat oven to 200C/180C fan/ gas 6 and butter 4 small (about 200ml) ramekins. Sprinkle the Parmesan into the ramekins, turning until all sides are covered. Place the milk and bay leaves in a large saucepan over a gentle heat and bring to the boil. Turn off the heat and leave to infuse for 15 mins.\r\nDiscard the bay leaves, add the butter and flour, and return to a low heat. Very gently simmer, stirring continuously with a balloon whisk, for about 6 mins until you get a smooth, thick white sauce. Make sure that you get right into the corners of the pan to stop the sauce from catching or becoming lumpy.\r\nOnce thickened, transfer the sauce to a large bowl and stir in the mustard powder, cayenne pepper, Gruyère and egg yolks until fully combined.\r\nIn a spotlessly clean bowl and with a clean whisk, beat the egg whites just until peaks begin to form.\r\nCarefully fold the egg whites into the cheese sauce in three stages making sure you fold, rather than stir, to keep the egg whites light and airy. Fill the prepared ramekins with the soufflé mix.\r\nTop each soufflé with a slice of goat’s cheese, then place on a baking tray. Bake for 20-25 mins or until springy and well risen but cooked through.\r\nLeave to cool, then run a knife around the edge of each dish and remove the soufflés. If preparing in advance, place soufflés upside down (for neat presentation), on a tray. Cover tray in cling film. Chill for a few days or freeze for up to 1 month.\r\nWhen ready to re-bake, heat oven to 200C/180C fan/gas 6. Place the upside-down soufflés in a shallow baking dish, top with the remaining goat’s cheese slices and pour over the cream (this stops them from drying out when baked for the second time). Cook for 8-10 mins until golden. Serve immediately alongside some simply dressed salad.',
      image: 'sxwquu1511793428.jpg',
      tags: 'Baking',
      ingredients: [
        {
          name: 'Butter',
          measure: '50g',
          id: 3045,
        },
        {
          name: 'Parmesan',
          measure: '25g',
          id: 3046,
        },
        {
          name: 'Milk',
          measure: '300ml',
          id: 3047,
        },
        {
          name: 'Bay Leaves',
          measure: '2',
          id: 3048,
        },
        {
          name: 'Plain Flour',
          measure: '5 tbs',
          id: 3049,
        },
        {
          name: 'English Mustard',
          measure: '½ tsp',
          id: 3050,
        },
        {
          name: 'Cayenne Pepper',
          measure: 'Pod of',
          id: 3051,
        },
        {
          name: 'Gruyère',
          measure: '140g',
          id: 3052,
        },
        {
          name: 'Eggs',
          measure: '3',
          id: 3053,
        },
        {
          name: 'Goats Cheese',
          measure: '8 slices',
          id: 3054,
        },
        {
          name: 'Double Cream',
          measure: '150ml',
          id: 3055,
        },
        {
          name: 'Spinach',
          measure: 'to serve',
          id: 3056,
        },
      ],
    },
    {
      id: 282,
      name: 'Tourtiere',
      category: 'Pork',
      instructions:
        'Heat oven to 200C/180C fan/gas 6. Boil the potato until tender, drain and mash, then leave to cool. Heat the oil in a non-stick pan, add the mince and onion and quickly fry until browned. Add the garlic, spices, stock, plenty of pepper and a little salt and mix well. Remove from the heat, stir into the potato and leave to cool.\r\nRoll out half the pastry and line the base of a 20-23cm pie plate or flan tin. Fill with the pork mixture and brush the edges of the pastry with water. Roll out the remaining dough and cover the pie. Press the edges of the pastry to seal, trimming off the excess. Prick the top of the pastry case to allow steam to escape and glaze the top with the beaten egg.\r\nBake for 30 mins until the pastry is crisp and golden. Serve cut into wedges with a crisp green salad. Leftovers are good cold for lunch the next day, served with a selection of pickles.',
      image: 'ytpstt1511814614.jpg',
      tags: 'Pie,MainMeal,BBQ,Cake',
      ingredients: [
        {
          name: 'Potatoes',
          measure: '1 medium',
          id: 3057,
        },
        {
          name: 'Sunflower Oil',
          measure: '1 tsp',
          id: 3058,
        },
        {
          name: 'Minced Pork',
          measure: '500g',
          id: 3059,
        },
        {
          name: 'Onion',
          measure: '1 finely chopped',
          id: 3060,
        },
        {
          name: 'Garlic Clove',
          measure: '1 finely chopped',
          id: 3061,
        },
        {
          name: 'Cinnamon',
          measure: '¼ tsp',
          id: 3062,
        },
        {
          name: 'Allspice',
          measure: '¼ tsp',
          id: 3063,
        },
        {
          name: 'Nutmeg',
          measure: '¼ tsp',
          id: 3064,
        },
        {
          name: 'Vegetable Stock',
          measure: '100ml',
          id: 3065,
        },
        {
          name: 'Shortcrust Pastry',
          measure: '400g',
          id: 3066,
        },
        {
          name: 'Egg',
          measure: 'To Glaze',
          id: 3067,
        },
      ],
    },
    {
      id: 283,
      name: 'Timbits',
      category: 'Dessert',
      instructions:
        'Sift together dry ingredients.\r\nMix together wet ingredients and incorporate into dry. Stir until smooth.\r\nDrop by teaspoonfuls(no bigger) into hot oil (365 degrees, no hotter), turning after a few moments until golden brown on all sides.\r\nRemove and drain.\r\nRoll in cinnamon sugar while still warm and serve.',
      image: 'txsupu1511815755.jpg',
      tags: 'Snack,Treat',
      ingredients: [
        {
          name: 'Flour',
          measure: '2 cups',
          id: 3068,
        },
        {
          name: 'Sugar',
          measure: '1/3 cup',
          id: 3069,
        },
        {
          name: 'Baking Powder',
          measure: '3 tsp',
          id: 3070,
        },
        {
          name: 'Salt',
          measure: '½ tsp',
          id: 3071,
        },
        {
          name: 'Egg',
          measure: '1 beaten',
          id: 3072,
        },
        {
          name: 'Milk',
          measure: '¾ cup',
          id: 3073,
        },
        {
          name: 'Oil',
          measure: '3 tbs',
          id: 3074,
        },
        {
          name: 'Oil',
          measure: 'for frying',
          id: 3075,
        },
        {
          name: 'Icing Sugar',
          measure: 'garnish',
          id: 3076,
        },
      ],
    },
    {
      id: 284,
      name: 'Tunisian Orange Cake',
      category: 'Dessert',
      instructions:
        'Preheat oven to 190 C / Gas 5. Grease a 23cm round springform tin.\r\nCut off the hard bits from the top and bottom of the orange. Slice the orange and remove all seeds. Puree the orange with its peel in a food processor. Add one third of the sugar and the olive oil and continue to mix until well combined.\r\nSieve together flour and baking powder.\r\nBeat the eggs and the remaining sugar with an electric hand mixer for at least five minutes until very fluffy. Fold in half of the flour mixture, then the orange and the vanilla, then fold in the remaining flour. Mix well but not for too long.\r\nPour cake mixture into prepared tin and smooth out. Bake in preheated oven for 20 minutes. Reduce the oven temperature to 160 C / Gas 2 and bake again for 30 minutes Bake until the cake is golden brown and a skewer comes out clean. Cool on a wire cake rack.',
      image: 'y4jpgq1560459207.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Orange',
          measure: '1 large',
          id: 3077,
        },
        {
          name: 'Caster Sugar',
          measure: '300g',
          id: 3078,
        },
        {
          name: 'Olive Oil',
          measure: '75 ml',
          id: 3079,
        },
        {
          name: 'Flour',
          measure: '280g',
          id: 3080,
        },
        {
          name: 'Baking Powder',
          measure: '1 tbs',
          id: 3081,
        },
        {
          name: 'Eggs',
          measure: '4 large',
          id: 3082,
        },
        {
          name: 'Vanilla Extract',
          measure: '2 tsp',
          id: 3083,
        },
      ],
    },
    {
      id: 285,
      name: 'Tunisian Lamb Soup',
      category: 'Lamb',
      instructions:
        'Add the lamb to a casserole and cook over high heat. When browned, remove from the heat and set aside.\r\nKeep a tablespoon of fat in the casserole and discard the rest. Reduce to medium heat then add the garlic, onion and spinach and cook until the onion is translucent and the spinach wilted or about 5 minutes.\r\nReturn the lamb to the casserole with the onion-spinach mixture, add the tomato puree, cumin, harissa, chicken, chickpeas, lemon juice, salt and pepper in the pan. Simmer over low heat for about 20 minutes.\r\nAdd the pasta and cook for 15 minutes or until pasta is cooked.',
      image: 't8mn9g1560460231.jpg',
      tags: 'Soup',
      ingredients: [
        {
          name: 'Lamb Mince',
          measure: '500g',
          id: 3084,
        },
        {
          name: 'Garlic',
          measure: '2 cloves minced',
          id: 3085,
        },
        {
          name: 'Onion',
          measure: '1',
          id: 3086,
        },
        {
          name: 'Spinach',
          measure: '300g',
          id: 3087,
        },
        {
          name: 'Tomato Puree',
          measure: '3 tbs',
          id: 3088,
        },
        {
          name: 'Cumin',
          measure: '1 tbs',
          id: 3089,
        },
        {
          name: 'Chicken Stock',
          measure: '1 Litre',
          id: 3090,
        },
        {
          name: 'Harissa Spice',
          measure: '3 tsp',
          id: 3091,
        },
        {
          name: 'Chickpeas',
          measure: '400g',
          id: 3092,
        },
        {
          name: 'Lemon Juice',
          measure: '1/2',
          id: 3093,
        },
        {
          name: 'Macaroni',
          measure: '150g',
          id: 3094,
        },
        {
          name: 'Salt',
          measure: 'Pinch',
          id: 3095,
        },
        {
          name: 'Pepper',
          measure: 'Pinch',
          id: 3096,
        },
      ],
    },
    {
      id: 286,
      name: 'Tuna and Egg Briks',
      category: 'Seafood',
      instructions:
        'Heat 2 tsp of the oil in a large saucepan and cook the spring onions over a low heat for 3 minutes or until beginning to soften. Add the spinach, cover with a tight-fitting lid and cook for a further 2–3 minutes or until tender and wilted, stirring once or twice. Tip the mixture into a sieve or colander and leave to drain and cool.\r\nUsing a saucer as a guide, cut out 24 rounds about 12.5 cm (5 in) in diameter from the filo pastry, cutting 6 rounds from each sheet. Stack the filo rounds in a pile, then cover with cling film to prevent them from drying out.\r\nWhen the spinach mixture is cool, squeeze out as much excess liquid as possible, then transfer to a bowl. Add the tuna, eggs, hot pepper sauce, and salt and pepper to taste. Mix well.\r\nPreheat the oven to 200°C (400°F, gas mark 6). Take one filo round and very lightly brush with some of the remaining oil. Top with a second round and brush with a little oil, then place a third round on top and brush with oil.\r\nPlace a heaped tbsp of the filling in the middle of the round, then fold the pastry over to make a half-moon shape. Fold in the edges, twisting them to seal, and place on a non-stick baking sheet. Repeat with the remaining pastry and filling to make 8 briks in all.\r\nLightly brush the briks with the remaining oil. Bake for 12–15 minutes or until the pastry is crisp and golden brown.\r\nMeanwhile, combine the tomatoes and cucumber in a bowl and sprinkle with the lemon juice and seasoning to taste. Serve the briks hot with this salad and the chutney.',
      image: '2dsltq1560461468.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Olive Oil',
          measure: '2 tbs',
          id: 3097,
        },
        {
          name: 'Spring Onions',
          measure: '8',
          id: 3098,
        },
        {
          name: 'Spinach',
          measure: '200g',
          id: 3099,
        },
        {
          name: 'Filo Pastry',
          measure: '4',
          id: 3100,
        },
        {
          name: 'Tuna',
          measure: '1 can',
          id: 3101,
        },
        {
          name: 'Eggs',
          measure: '2',
          id: 3102,
        },
        {
          name: 'Hotsauce',
          measure: 'Dash',
          id: 3103,
        },
        {
          name: 'Tomatoes',
          measure: '4 Chopped',
          id: 3104,
        },
        {
          name: 'Cucumber',
          measure: '1/4',
          id: 3105,
        },
        {
          name: 'Lemon Juice',
          measure: '1 tbs',
          id: 3106,
        },
        {
          name: 'Apricot Jam',
          measure: '4 tbs',
          id: 3107,
        },
      ],
    },
    {
      id: 287,
      name: 'Tamiya',
      category: 'Vegetarian',
      instructions:
        'oak the beans in water to cover overnight.Drain. If skinless beans are unavailable, rub to loosen the skins, then discard the skins. Pat the beans dry with a towel.\r\nGrind the beans in a food mill or meat grinder.If neither appliance is available, process them in a food processor but only until the beans form a paste. (If blended too smoothly, the batter tends to fall apart during cooking.) Add the scallions, garlic, cilantro, cumin, baking powder, cayenne, salt, pepper, and coriander, if using.  Refrigerate for at least 30 minutes.\r\nShape the bean mixture into 1-inch balls.Flatten slightly and coat with flour.\r\nHeat at least 1½-inches of oil over medium heat to 365 degrees.\r\nFry the patties in batches, turning once, until golden brown on all sides, about 5 minutes.Remove with a wire mesh skimmer or slotted spoon. Serve as part of a meze or in pita bread with tomato-cucumber salad and tahina sauce.',
      image: 'n3xxd91598732796.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Broad Beans',
          measure: '3 cups',
          id: 3108,
        },
        {
          name: 'Spring Onions',
          measure: '6',
          id: 3109,
        },
        {
          name: 'Garlic Clove',
          measure: '4',
          id: 3110,
        },
        {
          name: 'Parsley',
          measure: '1/4 cup',
          id: 3111,
        },
        {
          name: 'Cumin',
          measure: '2 tsp',
          id: 3112,
        },
        {
          name: 'Baking Powder',
          measure: '1 tsp',
          id: 3113,
        },
        {
          name: 'Cayenne Pepper',
          measure: '1/2 tsp',
          id: 3114,
        },
        {
          name: 'Flour',
          measure: 'Spinkling',
          id: 3115,
        },
        {
          name: 'Vegetable Oil',
          measure: 'As required',
          id: 3116,
        },
      ],
    },
    {
      id: 288,
      name: 'Tonkatsu pork',
      category: 'Pork',
      instructions:
        'STEP 1\r\nRemove the large piece of fat on the edge of each pork loin, then bash each of the loins between two pieces of baking parchment until around 1cm in thickness – you can do this using a meat tenderiser or a rolling pin. Once bashed, use your hands to reshape the meat to its original shape and thickness – this step will ensure the meat is as succulent as possible.\r\n\r\nSTEP 2\r\nPut the flour, eggs and panko breadcrumbs into three separate wide-rimmed bowls. Season the meat, then dip first in the flour, followed by the eggs, then the breadcrumbs.\r\n\r\nSTEP 3\r\nIn a large frying or sauté pan, add enough oil to come 2cm up the side of the pan. Heat the oil to 180C – if you don’t have a thermometer, drop a bit of panko into the oil and if it sinks a little then starts to fry, the oil is ready. Add two pork chops and cook for 1 min 30 secs on each side, then remove and leave to rest on a wire rack for 5 mins. Repeat with the remaining pork chops.\r\n\r\nSTEP 4\r\nWhile the pork is resting, make the sauce by whisking the ingredients together, adding a splash of water if it’s particularly thick. Slice the tonkatsu and serve drizzled with the sauce.',
      image: 'lwsnkl1604181187.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Pork Chops',
          measure: '4',
          id: 3117,
        },
        {
          name: 'Flour',
          measure: '100g',
          id: 3118,
        },
        {
          name: 'Eggs',
          measure: '2 Beaten',
          id: 3119,
        },
        {
          name: 'Breadcrumbs',
          measure: '100g',
          id: 3120,
        },
        {
          name: 'Vegetable Oil',
          measure: 'Fry',
          id: 3121,
        },
        {
          name: 'Tomato Ketchup',
          measure: '2 tbs',
          id: 3122,
        },
        {
          name: 'Worcestershire Sauce',
          measure: '2 tbs',
          id: 3123,
        },
        {
          name: 'Oyster Sauce',
          measure: '1 tbs',
          id: 3124,
        },
        {
          name: 'Caster Sugar',
          measure: '2 tblsp',
          id: 3125,
        },
      ],
    },
    {
      id: 289,
      name: 'Traditional Croatian Goulash',
      category: 'Beef',
      instructions:
        'Clean the meat from the veins if there are some and cut it into smaller pieces, 3 × 3 cm. Marinate the meat in the mustard and spices and let it sit in the refrigerator for one hour\r\nHeat one tablespoon of pork fat or vegetable oil in a pot and fry the meat on all sides until it gets browned. Once the meat is cooked, transfer it to a plate and add another tablespoon of fat to the pot\r\nCut the onions very fine, peel the carrots and shred it using a grater. Cook the onions and carrots over low heat for 15 minutes. You can salt the vegetables a little to make them soften faster\r\nOnce the vegetables have browned and become slightly mushy, add the meat and bay leaves and garlic. Pour over with wine and simmer for 10-15 minutes to allow the alcohol to evaporate. Now is the right time to add 2/3 the amount of liquid\r\nCover the pot and cook over low heat for an hour, stirring occasionally. After the first hour, pour over the rest of the water or stock and cook for another 30-45 minutes\r\nAllow the stew to cool slightly and serve it with a sprinkle of chopped parsley and few slices of fresh hot pepper if you like to spice it up a bit\r\nSlice ​​some fresh bread, season the salad and simply enjoying these wonderful flavors',
      image: 'n1hcou1628770088.jpg',
      tags: 'Soup',
      ingredients: [
        {
          name: 'Beef',
          measure: '500g',
          id: 3126,
        },
        {
          name: 'Onions',
          measure: '2 chopped',
          id: 3127,
        },
        {
          name: 'Carrots',
          measure: '2 chopped',
          id: 3128,
        },
        {
          name: 'Garlic',
          measure: '2 cloves',
          id: 3129,
        },
        {
          name: 'Bay Leaf',
          measure: '2',
          id: 3130,
        },
        {
          name: 'Red Wine',
          measure: '200ml',
          id: 3131,
        },
        {
          name: 'Water',
          measure: '2 Litres',
          id: 3132,
        },
        {
          name: 'Mustard',
          measure: '3 tbs',
          id: 3133,
        },
        {
          name: 'Salt',
          measure: '1tbsp',
          id: 3134,
        },
        {
          name: 'Pepper',
          measure: '1/2 tsp',
          id: 3135,
        },
        {
          name: 'Paprika',
          measure: '1/2 tsp',
          id: 3136,
        },
        {
          name: 'Vegetable Oil',
          measure: '2 tbs',
          id: 3137,
        },
      ],
    },
    {
      id: 290,
      name: 'Tortang Talong',
      category: 'Vegetarian',
      instructions:
        '0.\tGrill the eggplant until the color of skin turns almost black\r\n1.\tLet the eggplant cool for a while then peel off the skin. Set aside.\r\n2.\tCrack the eggs and place in a bowl\r\n3.\tAdd salt and beat\r\n4.\tPlace the eggplant on a flat surface and flatten using a fork.\r\n5.\tDip the flattened eggplant in the beaten egg mixture\r\n6.\tHeat the pan and pour the cooking oil\r\n7.\tFry the eggplant (that was dipped in the beaten mixture). Make sure that both sides are cooked. Frying time will take you about 3 to 4 minutes per side on medium heat. \r\n',
      image: 'va668f1683209318.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Egg Plants',
          measure: '4',
          id: 3138,
        },
        {
          name: 'Eggs',
          measure: '2',
          id: 3139,
        },
        {
          name: 'Salt',
          measure: '1 tsp',
          id: 3140,
        },
        {
          name: 'Olive Oil',
          measure: '4 tsp',
          id: 3141,
        },
      ],
    },
    {
      id: 291,
      name: 'Vegan Lasagna',
      category: 'Vegan',
      instructions:
        '1) Preheat oven to 180 degrees celcius. \r\n2) Boil vegetables for 5-7 minutes, until soft. Add lentils and bring to a gentle simmer, adding a stock cube if desired. Continue cooking and stirring until the lentils are soft, which should take about 20 minutes. \r\n3) Blanch spinach leaves for a few minutes in a pan, before removing and setting aside. \r\n4) Top up the pan with water and cook the lasagne sheets. When cooked, drain and set aside.\r\n5) To make the sauce, melt the butter and add the flour, then gradually add the soya milk along with the mustard and the vinegar. Cook and stir until smooth and then assemble the lasagne as desired in a baking dish. \r\n6) Bake in the preheated oven for about 25 minutes.',
      image: 'rvxxuy1468312893.jpg',
      tags: 'Vegan,Pasta',
      ingredients: [
        {
          name: 'green red lentils',
          measure: '1 cups',
          id: 3142,
        },
        {
          name: 'carrot',
          measure: '1',
          id: 3143,
        },
        {
          name: 'onion',
          measure: '1',
          id: 3144,
        },
        {
          name: 'zucchini',
          measure: '1 small',
          id: 3145,
        },
        {
          name: 'coriander',
          measure: 'sprinking',
          id: 3146,
        },
        {
          name: 'spinach',
          measure: '150g',
          id: 3147,
        },
        {
          name: 'lasagne sheets',
          measure: '10',
          id: 3148,
        },
        {
          name: 'vegan butter',
          measure: '35g',
          id: 3149,
        },
        {
          name: 'flour',
          measure: '4 tablespoons',
          id: 3150,
        },
        {
          name: 'soya milk',
          measure: '300ml',
          id: 3151,
        },
        {
          name: 'mustard',
          measure: '1.5 teaspoons',
          id: 3152,
        },
        {
          name: 'vinegar',
          measure: '1 teaspoon',
          id: 3153,
        },
      ],
    },
    {
      id: 292,
      name: 'Vegan Chocolate Cake',
      category: 'Vegan',
      instructions:
        'Simply mix all dry ingredients with wet ingredients and blend altogether. Bake for 45 min on 180 degrees. Decorate with some melted vegan chocolate ',
      image: 'qxutws1486978099.jpg',
      tags: 'Vegan,Chocolate,Cake',
      ingredients: [
        {
          name: 'self raising flour',
          measure: '1 1/4 cup',
          id: 3154,
        },
        {
          name: 'coco sugar',
          measure: '1/2 cup',
          id: 3155,
        },
        {
          name: 'cacao',
          measure: '1/3 cup raw',
          id: 3156,
        },
        {
          name: 'baking powder',
          measure: '1 tsp',
          id: 3157,
        },
        {
          name: 'flax eggs',
          measure: '2',
          id: 3158,
        },
        {
          name: 'almond milk',
          measure: '1/2 cup',
          id: 3159,
        },
        {
          name: 'vanilla',
          measure: '1 tsp',
          id: 3160,
        },
        {
          name: 'water',
          measure: '1/2 cup boiling',
          id: 3161,
        },
      ],
    },
    {
      id: 293,
      name: 'Vietnamese Grilled Pork (bun-thit-nuong)',
      category: 'Pork',
      instructions:
        'Slice the uncooked pork thinly, about ⅛". It helps to slightly freeze it (optional).\r\nMince garlic and shallots. Mix in a bowl with sugar, fish sauce, thick soy sauce, pepper, and oil until sugar dissolves.\r\nMarinate the meat for 1 hour, or overnight for better results.\r\nBake the pork at 375F for 10-15 minutes or until about 80% cooked. Finish cooking by broiling in the oven until a nice golden brown color develops, flipping the pieces midway.\r\nAssemble your bowl with veggies, noodles, and garnish. Many like to mix the whole bowl up and pour the fish sauce on top, but I like to make individual bites and sauce it slowly.',
      image: 'qqwypw1504642429.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Pork',
          measure: '1.5 pounds sliced',
          id: 3162,
        },
        {
          name: 'Rice Vermicelli',
          measure: '1 package thin',
          id: 3163,
        },
        {
          name: 'Egg Rolls',
          measure: '4-6',
          id: 3164,
        },
        {
          name: 'Challots',
          measure: '3 tablespoons minced',
          id: 3165,
        },
        {
          name: 'Garlic',
          measure: '1.5 tablespoons minced garlic',
          id: 3166,
        },
        {
          name: 'Sugar',
          measure: '¼ cup',
          id: 3167,
        },
        {
          name: 'Fish Sauce',
          measure: '1 tablespoon',
          id: 3168,
        },
        {
          name: 'Soy sauce',
          measure: '½ tablespoon thick',
          id: 3169,
        },
        {
          name: 'Pepper',
          measure: '½ tablespoon',
          id: 3170,
        },
        {
          name: 'Olive Oil',
          measure: '3 tablespoons',
          id: 3171,
        },
        {
          name: 'Cucumber',
          measure: 'Sliced',
          id: 3172,
        },
        {
          name: 'Mint',
          measure: 'Leaves',
          id: 3173,
        },
        {
          name: 'Peanuts',
          measure: 'Crushed',
          id: 3174,
        },
      ],
    },
    {
      id: 294,
      name: 'Venetian Duck Ragu',
      category: 'Pasta',
      instructions:
        'Heat the oil in a large pan. Add the duck legs and brown on all sides for about 10 mins. Remove to a plate and set aside. Add the onions to the pan and cook for 5 mins until softened. Add the garlic and cook for a further 1 min, then stir in the cinnamon and flour and cook for a further min. Return the duck to the pan, add the wine, tomatoes, stock, herbs, sugar and seasoning. Bring to a simmer, then lower the heat, cover with a lid and cook for 2 hrs, stirring every now and then.\r\nCarefully lift the duck legs out of the sauce and place on a plate – they will be very tender so try not to lose any of the meat. Pull off and discard the fat, then shred the meat with 2 forks and discard the bones. Add the meat back to the sauce with the milk and simmer, uncovered, for a further 10-15 mins while you cook the pasta.\r\nCook the pasta following pack instructions, then drain, reserving a cup of the pasta water, and add the pasta to the ragu. Stir to coat all the pasta in the sauce and cook for 1 min more, adding a splash of cooking liquid if it looks dry. Serve with grated Parmesan, if you like.',
      image: 'qvrwpt1511181864.jpg',
      tags: null,
      ingredients: [
        {
          name: 'Olive Oil',
          measure: '1 tbls',
          id: 3175,
        },
        {
          name: 'Duck Legs',
          measure: '4',
          id: 3176,
        },
        {
          name: 'Onions',
          measure: '2 finely chopped',
          id: 3177,
        },
        {
          name: 'Garlic',
          measure: '2 cloves minced',
          id: 3178,
        },
        {
          name: 'Cinnamon',
          measure: '2 tsp ground',
          id: 3179,
        },
        {
          name: 'Plain Flour',
          measure: '2 tsp',
          id: 3180,
        },
        {
          name: 'Red Wine',
          measure: '250ml',
          id: 3181,
        },
        {
          name: 'Chopped Tomatoes',
          measure: '800g',
          id: 3182,
        },
        {
          name: 'Chicken Stock Cube',
          measure: '1',
          id: 3183,
        },
        {
          name: 'Rosemary',
          measure: '3 sprigs',
          id: 3184,
        },
        {
          name: 'Bay Leaves',
          measure: '2',
          id: 3185,
        },
        {
          name: 'Sugar',
          measure: '1 tsp',
          id: 3186,
        },
        {
          name: 'Milk',
          measure: '2 tbs',
          id: 3187,
        },
        {
          name: 'Paccheri Pasta',
          measure: '600g',
          id: 3188,
        },
        {
          name: 'Parmesan Cheese',
          measure: 'Grated',
          id: 3189,
        },
      ],
    },
    {
      id: 295,
      name: 'Vegetarian Casserole',
      category: 'Vegetarian',
      instructions:
        'Heat the oil in a large, heavy-based pan. Add the onions and cook gently for 5 – 10 mins until softened.\r\nAdd the garlic, spices, dried thyme, carrots, celery and peppers and cook for 5 minutes.\r\nAdd the tomatoes, stock, courgettes and fresh thyme and cook for 20 - 25 minutes.\r\nTake out the thyme sprigs. Stir in the lentils and bring back to a simmer. Serve with wild and white basmati rice, mash or quinoa.',
      image: 'vptwyt1511450962.jpg',
      tags: 'Casserole,Vegetarian',
      ingredients: [
        {
          name: 'Rapeseed Oil',
          measure: '1',
          id: 3190,
        },
        {
          name: 'Onion',
          measure: '1',
          id: 3191,
        },
        {
          name: 'Garlic',
          measure: '3 cloves',
          id: 3192,
        },
        {
          name: 'Paprika',
          measure: '1 tsp',
          id: 3193,
        },
        {
          name: 'Cumin',
          measure: '½ tsp',
          id: 3194,
        },
        {
          name: 'Thyme',
          measure: '1 tblsp',
          id: 3195,
        },
        {
          name: 'Carrots',
          measure: '3 Medium',
          id: 3196,
        },
        {
          name: 'Celery',
          measure: '2 small stalks',
          id: 3197,
        },
        {
          name: 'Red Pepper',
          measure: '1',
          id: 3198,
        },
        {
          name: 'Yellow Pepper',
          measure: '1',
          id: 3199,
        },
        {
          name: 'Tomato',
          measure: '2 x 400g tins',
          id: 3200,
        },
        {
          name: 'Vegetable Stock Cube',
          measure: '250ml',
          id: 3201,
        },
        {
          name: 'Courgettes',
          measure: '2 sliced',
          id: 3202,
        },
        {
          name: 'Thyme',
          measure: '2 sprigs',
          id: 3203,
        },
        {
          name: 'Lentils',
          measure: '250g',
          id: 3204,
        },
      ],
    },
    {
      id: 296,
      name: 'Vegetarian Chilli',
      category: 'Vegetarian',
      instructions:
        'Heat oven to 200C/180C fan/ gas 6. Cook the vegetables in a casserole dish for 15 mins. Tip in the beans and tomatoes, season, and cook for another 10-15 mins until piping hot. Heat the pouch in the microwave on High for 1 min and serve with the chilli.',
      image: 'wqurxy1511453156.jpg',
      tags: 'Chilli',
      ingredients: [
        {
          name: 'Roasted Vegetables',
          measure: '400g',
          id: 3205,
        },
        {
          name: 'Kidney Beans',
          measure: '1 can',
          id: 3206,
        },
        {
          name: 'Chopped Tomatoes',
          measure: '1 can',
          id: 3207,
        },
        {
          name: 'Mixed Grain',
          measure: '1 Packet',
          id: 3208,
        },
      ],
    },
    {
      id: 297,
      name: "Vegetable Shepherd's Pie",
      category: 'Beef',
      instructions:
        'Add Ingredients:\r\n\r\n12 cups chopped mixed vegetables\r\n1   cup chopped fresh mushrooms \r\n1   cup pearl onions\r\n\r\nTOPPING:\r\n\r\nPreheat oven to 450°. Bake potatoes on a foil-lined baking sheet until tender, about 45 minutes. Let cool slightly, then peel. Press potatoes through a ricer, food mill, or colander into a large bowl. Add butter; stir until well blended. Stir in milk. Season to taste with salt.\r\n\r\nFILLING:\r\n\r\nSoak dried porcini in 3 cups hot water; set aside. Combine lentils, 1 garlic clove, 1 tsp. salt, and 4 cups water in a medium saucepan. Bring to a boil; reduce heat and simmer, stirring occasionally, until lentils are tender but not mushy, 15–20 minutes. Drain lentils and discard garlic.\r\n\r\nHeat 3 Tbsp. oil in a large heavy pot over medium heat. Add onions and cook, stirring occasionally, until soft, about 12 minutes. Add chopped garlic and cook for 1 minute. Stir in tomato paste. Cook, stirring constantly, until tomato paste is caramelized, 2–3 minutes.\r\n\r\nAdd bay leaves and wine; stir, scraping up any browned bits. Stir in porcini, slowly pouring porcini soaking liquid into pan but leaving any sediment behind. Bring to a simmer and cook until liquid is reduced by half, about 10 minutes. Stir in broth and cook, stirring occasionally, until reduced by half, about 45 minutes.\r\n\r\nStrain mixture into a large saucepan and bring to a boil; discard solids in strainer. Stir cornstarch and 2 Tbsp. water in a small bowl to dissolve. Add cornstarch mixture; simmer until thickened, about 5 minutes. Whisk in miso. Season sauce with salt and pepper. Set aside.\r\n\r\nPreheat oven to 450°. Toss vegetables and pearl onions with remaining 2 Tbsp. oil, 5 garlic cloves, and rosemary sprigs in a large bowl; season with salt and pepper. Divide between 2 rimmed baking sheets. Roast, stirring once, until tender, 20–25 minutes. Transfer garlic cloves to a small bowl; mash well with a fork and stir into sauce. Discard rosemary. DO AHEAD: Lentils, sauce, and vegetables can be made 1 day ahead. Cover separately; chill.\r\nArrange lentils in an even layer in a 3-qt. baking dish; set dish on a foil-lined rimmed baking sheet. Toss roasted vegetables with fresh mushrooms and chopped herbs; layer on top of lentils. Pour sauce over vegetables. Spoon potato mixture evenly over.\r\n\r\nBake until browned and bubbly, about 30 minutes. Let stand for 15 minutes before serving.',
      image: 'w8umt11583268117.jpg',
      tags: 'Alcoholic',
      ingredients: [
        {
          name: 'Potatoes',
          measure: '3 Lbs',
          id: 3209,
        },
        {
          name: 'Small Potatoes',
          measure: '3 Lbs',
          id: 3210,
        },
        {
          name: 'Salted Butter',
          measure: '1/2 cup',
          id: 3211,
        },
        {
          name: 'Mushrooms',
          measure: '1 oz',
          id: 3212,
        },
        {
          name: 'Brown Lentils',
          measure: '3/4 cup',
          id: 3213,
        },
        {
          name: 'Garlic',
          measure: '6 cloves',
          id: 3214,
        },
        {
          name: 'Kosher Salt',
          measure: '1 tsp',
          id: 3215,
        },
        {
          name: 'Onion',
          measure: '3 cups',
          id: 3216,
        },
        {
          name: 'Tomato Puree',
          measure: '2 tbsp',
          id: 3217,
        },
        {
          name: 'Bay Leaves',
          measure: '',
          id: 3218,
        },
        {
          name: 'Olive Oil',
          measure: '',
          id: 3219,
        },
        {
          name: 'Dry White Wine',
          measure: '2 cups',
          id: 3220,
        },
        {
          name: 'Vegetable Stock',
          measure: '8 cups',
          id: 3221,
        },
        {
          name: 'Cornstarch',
          measure: '2 tbsp',
          id: 3222,
        },
        {
          name: 'Soy Sauce',
          measure: '2 tsp',
          id: 3223,
        },
        {
          name: 'Rosemary',
          measure: '2 sprigs',
          id: 3224,
        },
        {
          name: 'Parsley',
          measure: '',
          id: 3225,
        },
        {
          name: 'Sage',
          measure: '',
          id: 3226,
        },
        {
          name: 'Chives',
          measure: '',
          id: 3227,
        },
      ],
    },
    {
      id: 298,
      name: 'White chocolate creme brulee',
      category: 'Dessert',
      instructions:
        'Heat the cream, chocolate and vanilla pod in a pan until the chocolate has melted. Take off the heat and allow to infuse for 10 mins, scraping the pod seeds into the cream. If using the vanilla extract, add straight away. Heat oven to 160C/fan 140C/gas 3.\r\nBeat yolks and sugar until pale. stir in the chocolate cream. Strain into a jug and pour into ramekins. Place in a deep roasting tray and pour boiling water halfway up the sides. Bake for 15-20 mins until just set with a wobbly centre. Chill in the fridge for at least 4 hrs.\r\nTo serve, sprinkle some sugar on top of the brûlées and caramelise with a blowtorch or briefly under a hot grill. Leave caramel to harden, then serve.',
      image: 'uryqru1511798039.jpg',
      tags: 'Desert,DinnerParty,Pudding',
      ingredients: [
        {
          name: 'Double Cream',
          measure: '568ml',
          id: 3228,
        },
        {
          name: 'White Chocolate Chips',
          measure: '100g',
          id: 3229,
        },
        {
          name: 'Vanilla',
          measure: 'Pod of',
          id: 3230,
        },
        {
          name: 'Egg Yolks',
          measure: '6',
          id: 3231,
        },
        {
          name: 'Caster Sugar',
          measure: '2 tbs',
          id: 3232,
        },
        {
          name: 'Caster Sugar',
          measure: 'Top',
          id: 3233,
        },
      ],
    },
    {
      id: 299,
      name: 'Wontons',
      category: 'Pork',
      instructions:
        'Combine pork, garlic, ginger, soy sauce, sesame oil, and vegetables in a bowl.\r\nSeparate wonton skins.\r\nPlace a heaping teaspoon of filling in the center of the wonton.\r\nBrush water on 2 borders of the skin, covering 1/4 inch from the edge.\r\nFold skin over to form a triangle, sealing edges.\r\nPinch the two long outside points together.\r\nHeat oil to 450 degrees and fry 4 to 5 at a time until golden.\r\nDrain and serve with sauce.',
      image: '1525876468.jpg',
      tags: 'MainMeal',
      ingredients: [
        {
          name: 'Pork',
          measure: '1lb',
          id: 3234,
        },
        {
          name: 'Garlic Clove',
          measure: '3 chopped',
          id: 3235,
        },
        {
          name: 'Ginger',
          measure: '1 tsp',
          id: 3236,
        },
        {
          name: 'Soy Sauce',
          measure: '1 tbs',
          id: 3237,
        },
        {
          name: 'Sesame Seed Oil',
          measure: '1 tsp',
          id: 3238,
        },
        {
          name: 'Carrots',
          measure: '3 finely chopped',
          id: 3239,
        },
        {
          name: 'Celery',
          measure: '3 finely chopped',
          id: 3240,
        },
        {
          name: 'Spring Onions',
          measure: '6 chopped',
          id: 3241,
        },
        {
          name: 'Wonton Skin',
          measure: '1 Packet',
          id: 3242,
        },
        {
          name: 'Oil',
          measure: 'Fry',
          id: 3243,
        },
        {
          name: 'Water',
          measure: 'Bottle',
          id: 3244,
        },
      ],
    },
    {
      id: 300,
      name: 'Walnut Roll Gužvara',
      category: 'Dessert',
      instructions:
        'Mix all the ingredients for the dough together and knead well. Cover the dough and put to rise until doubled in size which should take about 2 hours. Knock back the dough and knead lightly.\r\n\r\nDivide the dough into two equal pieces; roll each piece into an oblong about 12 inches by 8 inches. Mix the filling ingredients together and divide between the dough, spreading over each piece. Roll up the oblongs as tightly as possible to give two 12 inch sausages. Place these side by side, touching each other, on a greased baking sheet. Cover and leave to rise for about 40 minutes. Heat oven to 200ºC (425ºF). Bake for 30-35 minutes until well risen and golden brown. Bread should sound hollow when the base is tapped.\r\n\r\nRemove from oven and brush the hot bread top with milk. Sift with a generous covering of icing sugar.',
      image: 'u9l7k81628771647.jpg',
      tags: 'Nutty',
      ingredients: [
        {
          name: 'Flour',
          measure: '450g',
          id: 3245,
        },
        {
          name: 'Caster Sugar',
          measure: '55g',
          id: 3246,
        },
        {
          name: 'Yeast',
          measure: '2 parts',
          id: 3247,
        },
        {
          name: 'Salt',
          measure: '1/2 tsp',
          id: 3248,
        },
        {
          name: 'Milk',
          measure: '6 oz',
          id: 3249,
        },
        {
          name: 'Eggs',
          measure: '2 Beaten',
          id: 3250,
        },
        {
          name: 'Butter',
          measure: '30g',
          id: 3251,
        },
        {
          name: 'Walnuts',
          measure: '140g',
          id: 3252,
        },
        {
          name: 'Butter',
          measure: '85g',
          id: 3253,
        },
        {
          name: 'Brown Sugar',
          measure: '85g',
          id: 3254,
        },
        {
          name: 'Cinnamon',
          measure: '1 tsp',
          id: 3255,
        },
        {
          name: 'Milk',
          measure: 'To Glaze',
          id: 3256,
        },
        {
          name: 'Icing Sugar',
          measure: 'To Glaze',
          id: 3257,
        },
      ],
    },
    {
      id: 301,
      name: 'Yaki Udon',
      category: 'Vegetarian',
      instructions:
        'Boil some water in a large saucepan. Add 250ml cold water and the udon noodles. (As they are so thick, adding cold water helps them to cook a little bit slower so the middle cooks through). If using frozen or fresh noodles, cook for 2 mins or until al dente; dried will take longer, about 5-6 mins. Drain and leave in the colander.\r\nHeat 1 tbsp of the oil, add the onion and cabbage and sauté for 5 mins until softened. Add the mushrooms and some spring onions, and sauté for 1 more min. Pour in the remaining sesame oil and the noodles. If using cold noodles, let them heat through before adding the ingredients for the sauce – otherwise tip in straight away and keep stir-frying until sticky and piping hot. Sprinkle with the remaining spring onions.',
      image: 'wrustq1511475474.jpg',
      tags: 'LowCalorie',
      ingredients: [
        {
          name: 'Udon Noodles',
          measure: '250g',
          id: 3258,
        },
        {
          name: 'Sesame Seed Oil',
          measure: '2 tbs',
          id: 3259,
        },
        {
          name: 'Onion',
          measure: '1 sliced',
          id: 3260,
        },
        {
          name: 'Cabbage',
          measure: '0.25',
          id: 3261,
        },
        {
          name: 'Shiitake Mushrooms',
          measure: '10',
          id: 3262,
        },
        {
          name: 'Spring Onions',
          measure: '4',
          id: 3263,
        },
        {
          name: 'Mirin',
          measure: '4 tbsp',
          id: 3264,
        },
        {
          name: 'Soy Sauce',
          measure: '2 tbs',
          id: 3265,
        },
        {
          name: 'Caster Sugar',
          measure: '1 tblsp',
          id: 3266,
        },
        {
          name: 'Worcestershire Sauce',
          measure: '1 tblsp',
          id: 3267,
        },
      ],
    },
  ]);
}
