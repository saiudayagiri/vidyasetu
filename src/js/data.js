// Curriculum data for VidyaSetu - High Depth Version (Enriched with Allen Notes)
export const curriculumData = {
  classes: {
    "6": {
      name: "Class 6",
      tagline: "Foundation & Curiosity",
      theme: "linear-gradient(135deg, #FF6B6B, #FF8E53)",
      subjects: {
        science: {
          name: "Science",
          icon: "🧪",
          chapters: [
            {
              id: "6s-1",
              title: "The Wonderful World of Science",
              topics: [
                {
                  id: "6s-1-1",
                  title: "1. What is Science? The Scientific Method",
                  lab: { type: "scientific-method-sim" },
                  theory: {
                    intro: "As human beings, we have always been curious about our surroundings. Science is a way of thinking, observing and doing things to understand the world we live in and to uncover the secrets of the universe. The most important thing for learning science is 'Curiosity' — asking questions and trying to find out how things work.",
                    sections: [
                      {
                        heading: "1. Science is Everywhere",
                        text: "Whether it is studying tiny grains of sand or massive mountains, there is always something new to discover. Science is like a giant, unending jigsaw puzzle — every new discovery adds a piece to the puzzle. Sometimes we find that a piece has been put in the wrong place and needs to be moved; new discoveries often change our understanding of the world.\n\nAs you go through this book, you will explore many different topics: the diversity of life on Earth, the food we eat, the water we drink (and its different states), the materials all around us, magnets, measuring things, temperature, separating mixtures, living creatures and their characteristics, natural resources, and even what lies beyond Earth in outer space!"
                      },
                      {
                        heading: "2. The Scientific Method",
                        text: "Science is not just about memorising facts. It is about following a step-by-step process to find answers to our questions:\n\n1. **Observe** something that we find interesting or do not understand.\n2. This observation makes us **wonder** and think of a **question** about it.\n3. We make a **guess** (hypothesis) — a possible answer to that question.\n4. We **test** this guess through experiments or more observations.\n5. We **analyse** the results to see if it actually answers our question.\n\n**Worked Example:** Suppose your pen stops writing.\n• Observation: The pen isn't writing.\n• Question: Why did my pen stop writing?\n• Guess (Hypothesis): Maybe the ink has finished.\n• Test: Open the pen and check the ink refill.\n• Analyse: If the ink refill is empty, your guess was correct! If it isn't empty, you make a *new* guess (perhaps the ink dried up) and test that instead."
                      },
                      {
                        heading: "3. Anyone Can Think Like a Scientist",
                        text: "Scientists are people who follow the scientific method to solve problems or discover new things. But anyone who follows the scientific method is working like a scientist!\n\n• A cook wondering why the dal spilled out of the cooker (was there too much water?) is using the scientific method.\n• A bicycle repair person trying to find out why a tyre is flat (from where did the air leak?) is using the scientific method.\n• An electrician trying to find why a bulb is not working (is it the bulb or the switch?) is using the scientific method.\n\nScience is rarely done alone — scientists across the world often work together in large teams. If you cannot find an answer yourself, ask your friends to help you out. It is always more fun to discover things together!"
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Think Like a Scientist: Solve a Mystery",
                      objective: "To practice applying the 5 steps of the scientific method to a real, everyday problem — just like the pen example.",
                      materials: ["A notebook", "A pen or pencil", "A curious mind!"],
                      steps: [
                        "Think of something in your daily life that puzzled you recently (e.g., why the milk turned sour, why a plant didn't grow, why a light bulb stopped working).",
                        "Write down your OBSERVATION — what exactly did you notice?",
                        "Write down the QUESTION this observation raised in your mind.",
                        "Write down your best GUESS (hypothesis) for why this happened.",
                        "Think of a simple TEST or additional observation that could check if your guess is correct.",
                        "Write down what you would expect to find if your guess is correct, and what you'd do next if it isn't."
                      ],
                      observation: "You have just walked through the same 5 steps — observe, question, guess, test, analyse — that scientists use every day. Notice that you didn't need a laboratory or fancy equipment; you only needed curiosity and a systematic approach."
                    }
                  ],
                  quiz: [
                    {
                      question: "What is the first step of the scientific method?",
                      options: ["Testing a guess", "Observing something interesting or puzzling", "Writing a conclusion", "Asking a scientist for the answer"],
                      answer: 1,
                      explanation: "The scientific method always begins with an observation — noticing something interesting or something we don't understand — which then leads to a question."
                    },
                    {
                      question: "In the pen example, what was the very first guess (hypothesis) for why the pen stopped writing?",
                      options: ["The nib was bent", "The ink had finished", "The pen was too old", "The paper was wet"],
                      answer: 1,
                      explanation: "The first, most obvious guess was that the ink had finished. This was then tested by opening the pen and checking the refill."
                    },
                    {
                      question: "If you test your hypothesis and find it was WRONG (e.g., the ink refill wasn't actually empty), what should you do next?",
                      options: ["Give up trying to find the answer", "Make a new guess and test that instead", "Assume the pen is broken forever", "Ignore the observation"],
                      answer: 1,
                      explanation: "The scientific method is a cycle — if a guess doesn't hold up, you form a new hypothesis (e.g., the ink dried up) and test it. This is exactly how real scientific investigation works."
                    },
                    {
                      question: "Who can use the scientific method?",
                      options: ["Only professional scientists in laboratories", "Only school students", "Anyone — a cook, an electrician, a bicycle repair person, or you!", "Only people with special equipment"],
                      answer: 2,
                      explanation: "Anyone who observes, questions, guesses, tests, and analyses is working like a scientist — whether it's a cook checking why the dal spilled, or an electrician diagnosing a bulb."
                    },
                    {
                      question: "Why is science often compared to a 'giant, unending jigsaw puzzle'?",
                      options: ["Because science is confusing and has no order", "Because every new discovery adds a piece, and sometimes pieces need to be moved as understanding improves", "Because scientists literally solve puzzles for fun", "Because there is only one correct answer in science"],
                      answer: 1,
                      explanation: "Each new scientific discovery adds to our understanding (like a puzzle piece), and sometimes new evidence shows that an earlier idea was wrong and needs to be corrected — just like moving a puzzle piece to its right place."
                    }
                  ]
                }
              ]
            },
            {
              id: "6s-2",
              title: "Diversity in the Living World",
              topics: [
                {
                  id: "6s-2-1",
                  title: "1. Grouping Plants",
                  lab: { type: "plant-grouping-sim" },
                  theory: {
                    intro: "We are surrounded by a huge variety of plants and animals — this variety is called biodiversity. Grouping (arranging things based on common features) makes it easier to study and understand this diversity.",
                    sections: [
                      {
                        heading: "1. Herbs, Shrubs and Trees",
                        text: "Plants can be grouped by their height and the nature of their stem:\n\n• **Trees:** Grow really tall, with hard, thick, brown, woody stems. Branches typically start higher up on the stem. Example: Mango.\n• **Shrubs:** Not as tall as trees. Have many brown, woody stems that branch very close to the ground; hard but thinner than a tree's stem. Example: Rose.\n• **Herbs:** Typically small, with soft, green, tender stems. Example: Tomato.\n\nSome plants with weak stems need support to climb — these are **climbers**. Some creep along the ground — these are **creepers**."
                      },
                      {
                        heading: "2. Leaf Venation",
                        text: "The pattern of veins (thin lines) on a leaf is called **venation**.\n\n• **Reticulate venation:** A net-like pattern of veins on both sides of a thick middle vein. Example: Hibiscus.\n• **Parallel venation:** Veins run parallel to each other. Example: Banana, grasses."
                      },
                      {
                        heading: "3. Types of Roots",
                        text: "• **Taproot:** One main root with small side roots arising from it. Example: Mustard, hibiscus, chickpea (chana).\n• **Fibrous root:** A bunch of similar-sized thin roots arising from the base of the stem (no single main root). Example: Grass, wheat, lemongrass."
                      },
                      {
                        heading: "4. Monocots and Dicots — Putting It Together",
                        text: "Soaking seeds like chickpea and maize in water reveals their inner structure. Chickpea splits into two parts, each called a **cotyledon**. Maize has just one thin cotyledon.\n\n• **Dicotyledons (dicots):** Seeds with two cotyledons (e.g., chickpea). Dicots typically have **reticulate venation** and a **taproot** system.\n• **Monocotyledons (monocots):** Seeds with one cotyledon (e.g., maize). Monocots typically have **parallel venation** and a **fibrous root** system.\n\nSo venation, root type, and cotyledon number are all connected — knowing one often tells you the other two!"
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Let us Compare: Dicot vs Monocot Seeds",
                      objective: "To observe the internal structure of dicot and monocot seeds and relate it to root type and leaf venation.",
                      materials: ["A few chickpea (chana) seeds", "A few maize seeds", "A bowl of water", "A plate"],
                      steps: [
                        "Soak the chickpea and maize seeds in water for two to three days.",
                        "Remove the seed coat of a soaked chickpea seed carefully.",
                        "Observe whether the chickpea splits into two equal parts.",
                        "Now examine a soaked maize seed — try to see if it splits the same way.",
                        "Compare: how many parts (cotyledons) does each seed have?"
                      ],
                      observation: "The chickpea splits into two cotyledons (it is a dicot), while the maize seed has only one thin cotyledon (it is a monocot). Dicots like chickpea have reticulate leaf venation and taproots; monocots like maize have parallel venation and fibrous roots."
                    }
                  ],
                  quiz: [
                    {
                      question: "A rose plant has hard, woody stems that branch close to the ground, and is shorter than a mango tree. What type of plant is it?",
                      options: ["Herb", "Shrub", "Tree", "Creeper"],
                      answer: 1,
                      explanation: "Shrubs have hard, woody stems that branch close to the ground, unlike trees (which branch higher up) or herbs (which have soft, green stems)."
                    },
                    {
                      question: "Hibiscus leaves show a net-like pattern of veins, while banana leaves show veins running parallel to each other. What are these two venation patterns called respectively?",
                      options: ["Parallel and reticulate", "Reticulate and parallel", "Fibrous and taproot", "Monocot and dicot"],
                      answer: 1,
                      explanation: "A net-like vein pattern is called reticulate venation (hibiscus); veins running parallel to each other is parallel venation (banana)."
                    },
                    {
                      question: "Wheat and kidney beans have different types of roots and leaf venation. Based on the general pattern, which is most likely true?",
                      options: ["Wheat has a taproot and reticulate venation; kidney bean has fibrous roots and parallel venation", "Wheat has fibrous roots and parallel venation; kidney bean has a taproot and reticulate venation", "Both have identical roots and venation", "Neither has roots"],
                      answer: 1,
                      explanation: "Wheat is a monocot — fibrous roots and parallel venation. Kidney bean is a dicot — taproot and reticulate venation."
                    },
                    {
                      question: "A radish that grows underground, like a carrot, is an example of which type of root?",
                      options: ["Fibrous root", "Taproot", "Aerial root", "It has no root"],
                      answer: 1,
                      explanation: "Radish has a single thickened main root growing downward, which is a taproot — similar to mustard, hibiscus, and chickpea."
                    },
                    {
                      question: "A seed splits into two equal parts when soaked in water. What can you conclude about the plant it belongs to?",
                      options: ["It is a monocot with parallel venation and fibrous roots", "It is a dicot with reticulate venation and a taproot", "It cannot be a flowering plant", "It will definitely be a tree"],
                      answer: 1,
                      explanation: "Splitting into two parts means it has two cotyledons — a dicot. Dicots typically have reticulate leaf venation and a taproot system."
                    }
                  ]
                },
                {
                  id: "6s-2-2",
                  title: "2. Grouping Animals, Habitats & Adaptations",
                  lab: { type: "camel-adaptation-sim" },
                  theory: {
                    intro: "Just like plants, animals differ significantly from one another. We can group them by how they move, where they live, and the special features that help them survive in their surroundings.",
                    sections: [
                      {
                        heading: "1. How Animals Move",
                        text: "Different animals use different body parts to move:\n\n• **Ant:** Walks using legs.\n• **Goat:** Walks and jumps using legs.\n• **Pigeon / Housefly:** Walk using legs, and fly using wings.\n• **Fish:** Swims using fins.\n\nAnimals can fly, run, crawl, walk, hop, or jump — grouping by movement type and body part used is one way to study animal diversity."
                      },
                      {
                        heading: "2. Habitats: Terrestrial and Aquatic",
                        text: "The place where a plant or animal lives is called its **habitat**. A habitat provides food, water, air, and shelter needed for survival.\n\n• **Terrestrial habitats:** On land — e.g., forests, deserts, grasslands, mountains.\n• **Aquatic habitats:** In water — e.g., ponds, lakes, rivers, oceans.\n• **Amphibians:** Animals like frogs that can live in water AND on land."
                      },
                      {
                        heading: "3. Adaptations to the Environment",
                        text: "The special features that help plants and animals survive in a particular region are called **adaptations**.\n\n**Camels — Hot vs Cold Desert:**\n• Hot desert camel (Rajasthan): Long legs with wide hooves (walk on sand without sinking), ONE hump (stores food), doesn't sweat and excretes very little water (survives without drinking for days).\n• Cold desert camel (Ladakh): Shorter legs (better for mountainous terrain), TWO humps (which shrink in winter as stored food is used), long hair from head to neck (survives cold).\n\n**Plants:**\n• Cactus in deserts has thick, fleshy stems that store water.\n• Deodar trees in snowy mountains are conical with sloping branches, letting snow slide off easily.\n• Rhododendrons are shorter with smaller leaves on windy mountain tops, but taller in more sheltered mountain areas.\n• Fish have streamlined bodies that help them swim efficiently in water."
                      },
                      {
                        heading: "4. Protecting Biodiversity",
                        text: "When a habitat is damaged, plants and animals lose their homes, food, and resources — leading to loss of biodiversity.\n\n**Conservation efforts in India:**\n• **Project Tiger** (1973): Protects the declining Bengal Tiger population.\n• **Cheetah Reintroduction Project** (2022): Restores the Cheetah population in India.\n• Habitats of the **Great Indian Bustard** have been declared Protected Areas in Gujarat, Rajasthan and Maharashtra.\n• **Sacred groves:** Undisturbed forest patches protected by local communities, home to many plants, animals, and medicinal plants — a community-protected treasure of biodiversity."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Let us Group: Sorting Animals by Habitat",
                      objective: "To practice grouping animals as terrestrial, aquatic, or both (amphibians) based on their habitat.",
                      materials: ["Notebook", "Pen", "A list of animals: Horse, Dolphin, Frog, Sheep, Crocodile, Squirrel, Whale, Earthworm, Pigeon, Tortoise"],
                      steps: [
                        "Draw three columns labelled 'Aquatic (A)', 'Both (C)', and 'Terrestrial (B)'.",
                        "For each animal in the list, think about where it actually lives and breathes.",
                        "Place Dolphin and Whale under Aquatic — they live fully in water.",
                        "Place Horse, Sheep, Squirrel, Earthworm and Pigeon under Terrestrial — they live on land.",
                        "Place Frog, Crocodile and Tortoise under Both — they can live in water and on land.",
                        "Discuss with a friend: why do some animals need both habitats?"
                      ],
                      observation: "Animals that live in both water and land (like frogs, crocodiles, and tortoises) show us that habitats aren't always a strict either/or — some species are adapted to move between them."
                    }
                  ],
                  quiz: [
                    {
                      question: "A fish uses its fins to swim, while a goat uses its legs to walk and jump. What does this tell us?",
                      options: ["All animals move the same way", "Different animals use different body parts for movement, suited to their habitat", "Fish and goats are the same type of animal", "Legs are better than fins in every situation"],
                      answer: 1,
                      explanation: "Animals move using body parts suited to where they live — fins work well in water, legs work well on land."
                    },
                    {
                      question: "Which of these animals is an amphibian — able to live in both aquatic and terrestrial habitats?",
                      options: ["Whale", "Squirrel", "Frog", "Pigeon"],
                      answer: 2,
                      explanation: "Frogs are amphibians — they can live in water as well as on land, unlike whales (fully aquatic) or squirrels and pigeons (fully terrestrial)."
                    },
                    {
                      question: "Why does the hot-desert camel have wide hooves and long legs, while the cold-desert camel has shorter legs?",
                      options: ["It's random — there's no reason", "Wide hooves help walk on sand without sinking; shorter legs suit rocky mountainous cold-desert terrain", "Cold-desert camels are simply younger", "Long legs help camels run faster only"],
                      answer: 1,
                      explanation: "These are adaptations to each region: wide hooves spread the camel's weight so it doesn't sink into sand, while shorter legs are more stable on the rocky terrain of cold mountain deserts."
                    },
                    {
                      question: "Why are deodar trees in snowy mountains conical in shape with sloping branches?",
                      options: ["To look attractive", "To let snow slide off the branches easily, preventing damage", "To attract more sunlight", "To grow faster than other trees"],
                      answer: 1,
                      explanation: "The conical shape and sloping branches of deodar trees let accumulated snow slide off easily, which is an adaptation to survive frequent snowfall."
                    },
                    {
                      question: "What is the term for special features that help a plant or animal survive in its particular region?",
                      options: ["Habitat", "Biodiversity", "Adaptation", "Venation"],
                      answer: 2,
                      explanation: "Adaptations are the special features (like a camel's hooves or a deodar's shape) that enable a plant or animal to survive in its specific environment."
                    },
                    {
                      question: "Project Tiger, the Cheetah Reintroduction Project, and protecting Great Indian Bustard habitats are all examples of:",
                      options: ["Ways to increase tourism only", "Efforts to conserve India's biodiversity", "Types of animal movement", "Types of plant grouping"],
                      answer: 1,
                      explanation: "These are government conservation initiatives aimed at protecting endangered species and their habitats, helping preserve India's biodiversity."
                    }
                  ]
                }
              ]
            },
            {
              id: "6s-3",
              title: "Mindful Eating: A Path to a Healthy Body",
              topics: [
                {
                  id: "6s-3-1",
                  title: "1. Food Components & Nutrients",
                  theory: {
                    intro: "People across India eat wonderfully diverse food — the traditional food of any state usually reflects the crops grown locally, along with taste preferences, culture and traditions. But whatever the dish, food gives our body the components it needs to work, grow, and stay well. These components are called nutrients.",
                    sections: [
                      {
                        heading: "1. Energy-Giving Foods: Carbohydrates & Fats",
                        text: "**Carbohydrates:** A primary source of energy. Glucose (found in glucose water that marathon runners drink for instant energy) is a carbohydrate — so is common sugar. Sources: cereals (wheat, rice, maize), vegetables (potato, sweet potato), fruits (banana, pineapple, mango).\n\n**Fats:** A source of stored energy — this is why laddoos rich in ghee and nuts are a traditional winter food, helping keep the body warm. Sources: ghee, oils, nuts (groundnuts, walnuts, almonds), seeds (pumpkin, sunflower).\n\nCarbohydrates and fats are called **energy-giving foods**."
                      },
                      {
                        heading: "2. Body-Building Foods: Proteins",
                        text: "Proteins help in the **growth and repair** of our body — sportspersons need extra protein to build muscle. Sources: plant-based (pulses, beans, peas, nuts, soya bean) and animal-based (milk, paneer, egg, fish, meat). Edible mushrooms are also a good source of protein.\n\nProteins are called **body-building foods**."
                      },
                      {
                        heading: "3. Protective Foods: Vitamins & Minerals",
                        text: "Vitamins and minerals protect the body from disease — even though needed in small amounts, they are essential.\n\n| Nutrient | Function | Sources | Deficiency Disease | Symptoms |\n|---|---|---|---|---|\n| Vitamin A | Keeps eyes & skin healthy | Papaya, carrot, mango, milk | Night blindness | Poor vision in darkness |\n| Vitamin B1 | Body functions | Legumes, nuts, whole grains | Beriberi | Swelling, tingling in feet/hands |\n| Vitamin C | Fights disease | Amla, guava, orange, lemon | Scurvy | Bleeding gums, slow wound healing |\n| Vitamin D | Bone/teeth health | Sunlight, milk, fish, eggs | Rickets | Soft, bent bones |\n| Calcium | Bones & teeth | Milk, curd, paneer | Bone/tooth decay | Weak bones, tooth decay |\n| Iodine | Physical & mental activity | Seaweed, iodised salt | Goitre | Swelling at front of neck |\n| Iron | Component of blood | Green leafy vegetables, beetroot | Anaemia | Weakness, shortness of breath |\n\n**Historical case:** In 1746, physician James Lind found that sailors with scurvy (bleeding, swollen gums) recovered after eating lemons and oranges — showing Vitamin C cures scurvy. Similarly, iodised salt (common salt + iodine) was introduced in India after goitre symptoms were traced to iodine-deficient soil in the Himalayan region and Northern plains."
                      },
                      {
                        heading: "4. Roughage and Water",
                        text: "**Dietary fibres (roughage):** Provided mainly by plant products (green leafy vegetables, fruits, whole grains, pulses, nuts). Roughage does not provide any nutrients, but it helps the body get rid of undigested food and ensures smooth passage of stools.\n\n**Water:** Helps the body absorb nutrients from food, and removes waste through sweat and urine. We should drink enough water regularly to stay healthy.\n\nNote: some nutrients like Vitamin C can be lost during cooking (high heat) or even while washing cut/peeled vegetables — though thorough washing before eating is still essential."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Let us Conduct a Survey: Spotting Deficiency Symptoms",
                      objective: "To correlate symptoms of vitamin/mineral deficiency with diet, under a teacher's guidance.",
                      materials: ["The vitamin/mineral chart from this chapter", "Notebook", "Pen"],
                      steps: [
                        "Study the functions, sources, deficiency diseases and symptoms of Vitamin A, B1, C, D, Calcium, Iodine and Iron.",
                        "With a teacher's guidance, observe if anyone around you shows symptoms listed in the chart (e.g., poor vision in dim light, bleeding gums, weak bones).",
                        "Try to correlate the symptom with a possible deficiency — for example, bleeding gums may suggest low Vitamin C intake.",
                        "Suggest a dietary change that could help (e.g., adding citrus fruits for Vitamin C).",
                        "Always suggest that the person consult a doctor for proper advice — never self-diagnose or treat."
                      ],
                      observation: "Many common health symptoms trace back to a missing nutrient in the diet. A small, consistent addition of the right food (like citrus fruits, green leafy vegetables, or milk) can often prevent these deficiency diseases entirely."
                    }
                  ],
                  quiz: [
                    {
                      question: "Which vitamin deficiency causes scurvy (bleeding gums, slow wound healing)?",
                      options: ["Vitamin A", "Vitamin B1", "Vitamin C", "Vitamin D"],
                      answer: 2,
                      explanation: "Scurvy is caused by Vitamin C deficiency. Citrus fruits like lemons, oranges, amla and guava are rich sources of Vitamin C and can cure/prevent it."
                    },
                    {
                      question: "A person has difficulty seeing in the dark (night blindness). Which nutrient are they most likely deficient in?",
                      options: ["Vitamin A", "Iodine", "Iron", "Calcium"],
                      answer: 0,
                      explanation: "Vitamin A keeps the eyes healthy. Its deficiency causes night blindness, and in severe cases, complete loss of vision. Sources include papaya, carrot, mango, and milk."
                    },
                    {
                      question: "Swelling at the front of the neck (goitre) is a symptom of deficiency of which mineral?",
                      options: ["Iron", "Calcium", "Iodine", "Vitamin D"],
                      answer: 2,
                      explanation: "Goitre is caused by iodine deficiency. This is why common salt is often fortified with iodine to make iodised salt."
                    },
                    {
                      question: "Why are carbohydrates and fats called 'energy-giving foods', while proteins are called 'body-building foods'?",
                      options: ["Carbs/fats fuel our activities and energy needs; proteins support growth and repair of body tissue", "There's no real difference between them", "Only fats give energy; carbs and proteins do the same job", "Proteins provide more energy than fats"],
                      answer: 0,
                      explanation: "Carbohydrates and fats are broken down to release energy for our activities. Proteins, on the other hand, are used to build and repair body tissues — hence 'body-building foods'."
                    },
                    {
                      question: "Why is roughage (dietary fibre) important, even though it provides no nutrients?",
                      options: ["It has no real use and can be skipped", "It helps the body get rid of undigested food and ensures smooth passage of stools", "It is actually a type of protein", "It replaces the need for water"],
                      answer: 1,
                      explanation: "Roughage doesn't provide nutrients, but it plays an essential role in digestion by helping move undigested food through the digestive system smoothly."
                    }
                  ]
                },
                {
                  id: "6s-3-2",
                  title: "2. Testing Food for Nutrients",
                  lab: { type: "food-test-sim" },
                  theory: {
                    intro: "Some nutrients — starch, fat, and protein — can be detected using simple tests. Others need a well-equipped laboratory. Let's explore how these simple food tests work.",
                    sections: [
                      {
                        heading: "1. Test for Starch (Iodine Test)",
                        text: "**Method:** Put 2-3 drops of diluted iodine solution on a small piece of the food item.\n\n**Result:** If the food turns **blue-black**, it confirms the presence of **starch** (a type of carbohydrate). Example: potato and boiled rice turn blue-black; cucumber does not."
                      },
                      {
                        heading: "2. Test for Fat (Paper Patch Test)",
                        text: "**Method:** Wrap the food item in a piece of paper, press it (without tearing), and let it dry if needed.\n\n**Result:** If the food contains **fat**, it leaves an **oily/translucent patch** on the paper — hold the paper up to light and it will faintly shine through. Example: butter, coconut, and peanuts leave an oily patch."
                      },
                      {
                        heading: "3. Test for Protein (Copper Sulfate Test)",
                        text: "**Method (to be demonstrated by a teacher, using care with chemicals):** Make a paste of the food, add water, then add 2-3 drops of copper sulfate solution followed by about 10 drops of caustic soda solution. Shake and let it stand.\n\n**Result:** If the mixture turns **violet**, it confirms the presence of **protein**. Example: soya bean, peas, and peanuts test positive.\n\n**Safety:** These chemicals are harmful — never touch, taste, or smell them directly. If any chemical spills on skin, wash immediately with water."
                      },
                      {
                        heading: "4. Foods Can Contain Multiple Nutrients",
                        text: "Testing shows that many foods aren't 'pure' single-nutrient sources — for example, **peanuts test positive for both fat AND protein**. This is an important reason to actually *test* foods rather than assume their composition from appearance alone."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Let us Investigate: Starch Test",
                      objective: "To test various food items for the presence of starch using iodine solution.",
                      materials: ["A slice of potato", "A slice of cucumber", "Boiled rice", "Bread", "Dilute iodine solution", "Dropper", "A plate"],
                      steps: [
                        "Place a small piece of each food item on a separate part of the plate.",
                        "Using a dropper, add 2-3 drops of dilute iodine solution onto each food item.",
                        "Observe carefully — does the colour of the food change?",
                        "Note which items turn blue-black and which do not.",
                        "Record your results: blue-black = starch present; no colour change = starch absent (or very little)."
                      ],
                      observation: "The potato, boiled rice, and bread turn blue-black, confirming they contain starch. The cucumber shows little to no colour change, showing it has very little starch."
                    }
                  ],
                  quiz: [
                    {
                      question: "A slice of potato turns blue-black when a few drops of dilute iodine solution are added. What does this indicate?",
                      options: ["The potato contains fat", "The potato contains starch", "The potato contains protein", "The potato is spoiled"],
                      answer: 1,
                      explanation: "A blue-black colour change with iodine solution is the standard test confirming the presence of starch, a type of carbohydrate."
                    },
                    {
                      question: "A food item is wrapped in paper and pressed. After drying, an oily patch appears that lets light shine through faintly. What does this test show?",
                      options: ["Presence of starch", "Presence of protein", "Presence of fat", "Presence of vitamins"],
                      answer: 2,
                      explanation: "An oily/translucent patch on paper is the classic test for fat — since fat leaves a greasy mark that light can pass through, unlike water."
                    },
                    {
                      question: "In the protein test, copper sulfate solution and caustic soda are added to a food paste. What colour change confirms the presence of protein?",
                      options: ["Blue-black", "Violet", "Bright red", "No colour change"],
                      answer: 1,
                      explanation: "A violet colour appearing in the mixture confirms the presence of protein. This test must always be demonstrated carefully by a teacher due to the chemicals involved."
                    },
                    {
                      question: "Peanuts test positive for BOTH the fat test and the protein test. What does this tell us about food composition?",
                      options: ["Peanuts are a fake food item", "A single food item can contain more than one nutrient", "The tests must be wrong", "Peanuts only contain fat, not protein"],
                      answer: 1,
                      explanation: "This shows that real foods often contain multiple nutrients simultaneously — peanuts are a good source of both fat and protein, which is exactly why testing (not assuming) is important."
                    }
                  ]
                },
                {
                  id: "6s-3-3",
                  title: "3. Balanced Diet, Junk Food & Food Miles",
                  theory: {
                    intro: "Now that we know what nutrients are and how to detect them, how do we combine them into a healthy way of eating — and why does it matter where our food comes from?",
                    sections: [
                      {
                        heading: "1. What is a Balanced Diet?",
                        text: "Nutrient requirements vary by age, gender, physical activity, health status and lifestyle — a growing child and a grandparent don't need identical diets.\n\nA **balanced diet** is one that has all essential nutrients, roughage, and water in the right amounts needed for proper growth and development of the body."
                      },
                      {
                        heading: "2. Junk Food",
                        text: "Comparing nutrition labels (per 100g) tells a clear story:\n\n| | Potato Wafers | Roasted Chana |\n|---|---|---|\n| Energy | 536 kcal | 355 kcal |\n| Fats | 35.0 g | 6.26 g |\n| Carbohydrates | 53.0 g | 58.58 g |\n| Proteins | 7.0 g | 18.64 g |\n| Dietary Fibre | 4.8 g | 16.8 g |\n\nFoods like potato wafers, candy bars, and carbonated drinks are high in calories (from sugar and fat) but very low in protein, minerals, vitamins, and fibre. These are called **junk foods**. Eating them frequently is unhealthy and can cause obesity and related health problems.\n\nBetween the two foods above, roasted chana is clearly the better choice — far more protein and fibre, much less fat, for fewer calories."
                      },
                      {
                        heading: "3. Millets: Nutrition-Rich Cereals",
                        text: "Jowar, bajra, ragi, and sanwa are native Indian crops known as **millets**. They are small-sized grains that have been part of the Indian diet for centuries, and can be grown in diverse climatic conditions.\n\nMillets are excellent sources of vitamins, minerals (iron, calcium), and dietary fibre — earning them the name **nutri-cereals**. They contribute significantly to a balanced diet."
                      },
                      {
                        heading: "4. Food Miles: From Farm to Our Plate",
                        text: "Food travels a long journey before reaching our plate: growing → threshing/winnowing → storage → grinding/packing → transport to retail → our plate.\n\nThe total distance a food item travels from producer to consumer is called its **food miles**. Reducing food miles (by eating locally grown food) helps:\n• Cut down transport cost and pollution\n• Support local farmers\n• Keep food fresher and healthier\n\nWe should also avoid wasting food, remembering the effort farmers and communities put into growing and delivering it — take only as much as you can consume."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Let us Compare: Reading Nutrition Labels",
                      objective: "To compare the nutritional information of a packaged snack and a healthier alternative, and identify junk food.",
                      materials: ["A packet of potato wafers (or its label)", "A packet of roasted chana (or its label)", "Notebook"],
                      steps: [
                        "Note down the Energy, Fats, Carbohydrates, Proteins and Dietary Fibre values (per 100g) for both foods.",
                        "Compare the fat content of both foods — which is higher?",
                        "Compare the protein and fibre content — which food gives you more for the same 100g?",
                        "Based on these values, decide which food is the healthier, more balanced choice.",
                        "Discuss: why do you think the less healthy option is called 'junk food'?"
                      ],
                      observation: "Potato wafers have far more fat (35g vs 6.26g) and calories, but much less protein and fibre than roasted chana. This is exactly the profile of a 'junk food' — high calories from fat/sugar, low in the nutrients that actually help the body."
                    }
                  ],
                  quiz: [
                    {
                      question: "What is a 'balanced diet'?",
                      options: ["A diet consisting only of proteins", "A diet with all essential nutrients, roughage, and water in the right amounts for the body's needs", "The exact same diet for every person regardless of age", "A diet with zero fat content"],
                      answer: 1,
                      explanation: "A balanced diet provides the right amounts of carbohydrates, proteins, fats, vitamins, minerals, roughage and water needed for proper growth and development — and this can vary by age, activity level and health status."
                    },
                    {
                      question: "Comparing labels: Potato wafers have 536 kcal and 35g fat per 100g; roasted chana has 355 kcal and 6.26g fat, but more protein and fibre. Which is the healthier choice, and why?",
                      options: ["Potato wafers, because they have more energy", "Roasted chana, because it has less fat, fewer calories, and more protein and fibre", "Both are equally healthy", "Neither is a real food"],
                      answer: 1,
                      explanation: "Roasted chana provides more protein (18.64g vs 7g) and far more fibre (16.8g vs 4.8g), with much less fat and fewer calories — making it the healthier, more balanced option."
                    },
                    {
                      question: "What are jowar, bajra, ragi and sanwa collectively known as, due to their rich vitamin, mineral and fibre content?",
                      options: ["Junk foods", "Millets (nutri-cereals)", "Dairy products", "Artificial foods"],
                      answer: 1,
                      explanation: "These native Indian grains are called millets, or 'nutri-cereals', because of how rich they are in vitamins, minerals like iron and calcium, and dietary fibre."
                    },
                    {
                      question: "What are 'food miles'?",
                      options: ["The number of dishes made from one food item", "The total distance a food item travels from the producer/farm to the consumer's plate", "The number of nutrients in a food", "The weight of food transported"],
                      answer: 1,
                      explanation: "Food miles refer to the distance food travels from where it's grown to where it's eaten. Reducing food miles cuts pollution and transport costs, supports local farmers, and keeps food fresher."
                    }
                  ]
                }
              ]
            },
            {
              id: "6s-4",
              title: "Exploring Magnets",
              topics: [
                {
                  id: "6s-4-1",
                  title: "1. Magnetic Materials & Poles of a Magnet",
                  lab: { type: "magnet-explorer-sim" },
                  theory: {
                    intro: "Sailors in olden days used naturally occurring magnets, called lodestones, to find directions when stars weren't visible. Today we have artificial magnets made from iron and other materials, found in pencil boxes, fridge doors, and school science labs — in shapes like bar magnets, U-shaped magnets, and ring magnets.",
                    sections: [
                      {
                        heading: "1. Magnetic and Non-magnetic Materials",
                        text: "Bringing a magnet near different objects shows that some stick to it and some don't.\n\n• **Magnetic materials:** Attracted towards a magnet. Iron is a magnetic material — nickel and cobalt are two other magnetic metals.\n• **Non-magnetic materials:** NOT attracted towards a magnet. Examples: wood, plastic, glass, rubber, most other metals.\n\nThis simple test — bringing a magnet near an object — is how we classify materials as magnetic or non-magnetic."
                      },
                      {
                        heading: "2. Poles of a Magnet",
                        text: "Sprinkling iron filings over a bar magnet shows that maximum filings stick near the two ends, with very few sticking to the middle. These ends are called the **poles** of the magnet — the **North pole** and the **South pole**.\n\n**Key fact:** A magnet can never have a single pole. If you break a magnet into smaller pieces, North and South poles always exist in pairs — even in the smallest piece. A lone North pole or lone South pole cannot exist."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Let us Explore: Testing Materials with a Magnet",
                      objective: "To identify which everyday objects are attracted to a magnet (magnetic) and which are not (non-magnetic).",
                      materials: ["A bar magnet", "A pencil (wood)", "An eraser (rubber)", "A safety pin (iron)", "A coin", "A plastic scale", "A steel spoon"],
                      steps: [
                        "Before testing, PREDICT which objects you think will stick to the magnet. Write down your prediction for each.",
                        "Hold the magnet in your hand and bring it near each object, one at a time.",
                        "Observe carefully whether the object sticks to the magnet or not.",
                        "Record your actual observation next to your prediction for each object.",
                        "Compare — was your prediction correct for all objects?"
                      ],
                      observation: "The safety pin and steel spoon (containing iron) stick to the magnet — these are magnetic materials. The pencil, eraser, coin (if made of non-magnetic metal), and plastic scale do not stick — these are non-magnetic materials."
                    }
                  ],
                  quiz: [
                    {
                      question: "Which of these metals is attracted to a magnet (i.e., is a magnetic material)?",
                      options: ["Iron", "Aluminium foil (typically)", "Gold", "Wood ash"],
                      answer: 0,
                      explanation: "Iron is a magnetic material and is strongly attracted to magnets. Nickel and cobalt are the other two commonly known magnetic metals."
                    },
                    {
                      question: "When you sprinkle iron filings on a sheet of paper and place a bar magnet under it, where do most of the filings stick?",
                      options: ["Spread evenly across the whole magnet", "Mostly near the two ends (poles) of the magnet", "Only in the exact middle of the magnet", "They don't stick at all"],
                      answer: 1,
                      explanation: "Iron filings cluster most densely near the two ends of a bar magnet, showing that the magnetic force is strongest at the poles."
                    },
                    {
                      question: "If you break a bar magnet into three smaller pieces, what happens to its North and South poles?",
                      options: ["Only the original two end-pieces will have poles; the middle piece has none", "Each smaller piece becomes its own complete magnet with both a North and South pole", "All the poles are destroyed", "Only North poles remain"],
                      answer: 1,
                      explanation: "North and South poles always exist in pairs. Breaking a magnet doesn't isolate a single pole — each new piece becomes its own smaller magnet, complete with both a North and a South pole."
                    },
                    {
                      question: "A single North pole (with no South pole anywhere) can be created by breaking a magnet in just the right place. True or False?",
                      options: ["True", "False — poles always exist in pairs, no matter how small the piece", "True, but only for U-shaped magnets", "True, but only in a laboratory"],
                      answer: 1,
                      explanation: "It is impossible to obtain a magnet with a single, isolated pole. Every piece of a broken magnet still has both a North and a South pole."
                    }
                  ]
                },
                {
                  id: "6s-4-2",
                  title: "2. Finding Directions with a Compass",
                  theory: {
                    intro: "Long before satellite navigation, sailors and travellers relied on a freely suspended magnet to find their way. This simple but powerful idea is the basis of the magnetic compass.",
                    sections: [
                      {
                        heading: "1. A Freely Suspended Magnet Points North-South",
                        text: "If you suspend a bar magnet from a thread at its middle and let it rotate freely, it always comes to rest along the **North-South direction** — no matter how many times you spin it and let it settle again.\n\nThe end pointing North is called the **North-seeking pole (North pole)**; the end pointing South is the **South-seeking pole (South pole)**.\n\n**Why does this happen?** The Earth itself behaves like a giant magnet! This is also a test to check if something is a magnet — repeat the experiment with a plain iron bar (not magnetised), and it will settle in ANY random direction, not consistently North-South."
                      },
                      {
                        heading: "2. The Magnetic Compass",
                        text: "A **magnetic compass** is a small circular box with a transparent cover, containing a magnetised needle balanced on a pin so it can rotate freely. The end that points North is usually painted red. Below the needle is a dial marked with directions.\n\n**How to use it:** Place the compass down and wait for the needle to settle in the North-South direction. Then gently rotate the compass box until the North-South marks on the dial line up with the needle — now all directions at that spot match the dial."
                      },
                      {
                        heading: "3. Making Your Own Compass",
                        text: "You can make a simple magnetic compass: rub one pole of a strong magnet repeatedly along an iron sewing needle in the same direction (30-40 times) to magnetise it. Pass the magnetised needle through a small piece of cork, and float the cork in a bowl of water. Once it stops moving, the needle will point North-South — your homemade compass!\n\n**Historical note:** Long before the modern compass, Indian sailors used a device called the **matsya-yantra** (or machchh-yantra) — a magnetised, fish-shaped iron piece floating in a vessel of oil — for navigation at sea."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Let us Construct: Make Your Own Magnetic Compass",
                      objective: "To build a simple working magnetic compass using a magnetised needle floating on water.",
                      materials: ["A cork piece", "An iron sewing needle", "A permanent bar magnet", "A glass bowl", "Water"],
                      steps: [
                        "Place the iron sewing needle on a table. Keep one pole of the magnet at one end of the needle.",
                        "Slowly move the magnet along the length of the needle to the other end, then lift it away (don't drag it back over the needle).",
                        "Bring the same pole back to the same starting end of the needle and repeat the same one-directional stroke. Repeat this 30-40 times.",
                        "Test if the needle is magnetised by bringing it near iron filings or steel pins — they should be attracted to it.",
                        "Pass the magnetised needle through the cork horizontally, then float the cork in a bowl of water so the needle stays above the water's surface.",
                        "Wait for the needle to stop moving, and note which direction each end points. Rotate the cork and repeat — do the ends always settle in the same direction?"
                      ],
                      observation: "After settling, the needle consistently points in the same North-South direction every time, no matter how you rotate the cork to start — confirming you've built a working magnetic compass!"
                    }
                  ],
                  quiz: [
                    {
                      question: "A bar magnet is freely suspended by a thread and allowed to rotate. In which direction does it eventually come to rest?",
                      options: ["East-West", "North-South", "A different random direction each time", "It keeps spinning forever"],
                      answer: 1,
                      explanation: "A freely suspended magnet always settles along the North-South direction, because the Earth itself behaves like a giant magnet."
                    },
                    {
                      question: "You repeat the 'freely suspended' experiment with a plain iron bar (not a magnet) instead of a bar magnet. What do you observe?",
                      options: ["It also settles North-South every time", "It settles in a random direction, not consistently North-South", "It spins forever without stopping", "It becomes a magnet instantly"],
                      answer: 1,
                      explanation: "An unmagnetised iron bar has no consistent poles, so it will come to rest in any random direction — this is actually a valid way to TEST whether an object is a magnet or not."
                    },
                    {
                      question: "What historical navigation device did Indian sailors use, consisting of a magnetised fish-shaped iron piece floating in oil?",
                      options: ["Magnetic compass box", "Matsya-yantra (machchh-yantra)", "Lodestone map", "Iron filing chart"],
                      answer: 1,
                      explanation: "The matsya-yantra (or machchh-yantra) was an early Indian navigational device — a magnetised, fish-shaped iron piece kept floating in a vessel of oil, used long before the modern compass box."
                    }
                  ]
                },
                {
                  id: "6s-4-3",
                  title: "3. Attraction, Repulsion & the Magnetic Effect",
                  lab: { type: "magnet-explorer-sim" },
                  theory: {
                    intro: "Bringing two magnets near each other reveals one of the most fun and useful properties of magnets — and gives us a reliable way to tell a magnet apart from a plain piece of iron.",
                    sections: [
                      {
                        heading: "1. Like Poles Repel, Unlike Poles Attract",
                        text: "When two magnets are brought close:\n• **Unlike poles** (North-South) **attract** each other.\n• **Like poles** (North-North or South-South) **repel** each other.\n\nThis is the single most useful rule for predicting how two magnets will behave."
                      },
                      {
                        heading: "2. Identifying a Real Magnet (Using Repulsion)",
                        text: "If you repeat the attraction/repulsion test using a plain iron bar in place of one magnet, you'll find that BOTH ends of the iron bar are attracted to BOTH poles of the magnet — an iron bar never repels.\n\nThis gives us a reliable test: **only a real magnet will show repulsion** with another magnet. A plain piece of iron will only ever be attracted, never repelled. This is actually a more reliable test for 'is this a magnet?' than simple attraction, since both iron AND magnets are attracted to a magnet's poles."
                      },
                      {
                        heading: "3. The Magnetic Effect Passes Through Non-magnetic Materials",
                        text: "If you place a sheet of wood, cardboard, plastic, or glass between a magnet and a compass needle, the needle still deflects almost exactly as before — there is no appreciable change.\n\n**Conclusion:** The magnetic effect of a magnet can act through (pass through) non-magnetic materials."
                      },
                      {
                        heading: "4. Taking Care of Magnets",
                        text: "Magnets can lose their magnetism if mistreated. To keep magnets strong:\n• Store magnets in pairs with **unlike poles on the same side**, with a piece of soft iron placed across the ends.\n• Do **not** heat, drop, or hammer a magnet.\n• Keep magnets away from mobile phones and remote controls, which can be affected by strong magnetic fields."
                      }
                    ]
                  },
                  quiz: [
                    {
                      question: "You bring the North pole of magnet B near the North pole of magnet A. What happens?",
                      options: ["They attract each other", "They repel each other", "Nothing happens at all", "They both lose their magnetism"],
                      answer: 1,
                      explanation: "Like poles (North-North or South-South) always repel each other. Only unlike poles (North-South) attract."
                    },
                    {
                      question: "How can you reliably tell whether an unmarked metal bar is a real magnet or just a plain iron bar, using another magnet?",
                      options: ["Check if it's attracted to the magnet — both would show attraction, so this alone isn't reliable; check if it REPELS the magnet at some orientation — only a real magnet will do this", "Weigh the bar — magnets always weigh more", "Heat the bar and see if it melts", "There is no way to tell them apart"],
                      answer: 0,
                      explanation: "Both iron and magnets are attracted to a magnet, so attraction alone doesn't prove it's a magnet. But a plain iron bar will NEVER repel a magnet, while a real magnet will repel it at the like-pole orientation. Testing for repulsion is the reliable method."
                    },
                    {
                      question: "A sheet of glass is placed between a bar magnet and a compass needle. What happens to the needle's deflection?",
                      options: ["The needle stops deflecting completely", "The needle still deflects almost the same as without the glass — the magnetic effect passes through", "The needle deflects in the opposite direction", "The glass becomes magnetic"],
                      answer: 1,
                      explanation: "Non-magnetic materials like glass, wood, cardboard, and plastic do not block the magnetic effect — the compass needle deflects about the same whether or not the sheet is in between."
                    },
                    {
                      question: "How should magnets be stored to keep them from losing their magnetism?",
                      options: ["Near a mobile phone for easy access", "In pairs with unlike poles on the same side, with a piece of soft iron across the ends", "Heated slightly to 'activate' them", "Dropped occasionally to 'reset' them"],
                      answer: 1,
                      explanation: "Magnets should be stored in pairs with unlike poles together (with soft iron pieces bridging the ends), and should never be heated, dropped, or hammered, as these can weaken their magnetism."
                    }
                  ]
                }
              ]
            },
            {
              id: "6s-5",
              title: "Measurement of Length and Motion",
              topics: [
                {
                  id: "6s-5-1",
                  title: "1. Measuring Length: Units & Correct Method",
                  lab: { type: "ruler-measure-sim" },
                  theory: {
                    intro: "Long ago, people measured length using body parts — a handspan (balisht), the length of an arm, a stride, or a foot. But when five friends measured the same table using their own handspans, they each got a different number! This showed why we need a standard unit of measurement that gives the same result no matter who measures.",
                    sections: [
                      {
                        heading: "1. Why We Need Standard Units",
                        text: "A measurement always has two parts: a **number** and a **unit** (e.g., '13 handspans'). But body-based units like handspan, arm's length, or footstep differ from person to person, so they cannot be used for reliable communication.\n\nIndia has a rich history of measurement systems — angula (finger width), dhanusa, and yojana are ancient units still referenced today; angula is still used by traditional carpenters and tailors."
                      },
                      {
                        heading: "2. SI Units of Length",
                        text: "The world adopted a common standard called the **International System of Units (SI units)**. The SI unit of length is the **metre (m)**.\n\n• **1 km (kilometre) = 1000 m** — used for large distances.\n• **1 m = 100 cm (centimetre)**\n• **1 cm = 10 mm (millimetre)** — used for very small lengths.\n\nSo: 1 mm = 0.1 cm. (An old, still-used non-SI unit is the inch: 1 inch = 2.54 cm.)"
                      },
                      {
                        heading: "3. The Correct Way to Measure Length",
                        text: "**Placing the scale:** Place the scale in direct contact with the object, along its length (not at an angle).\n\n**Eye position:** Your eye must be positioned directly above the point being read (not at an angle) — looking at a scale from the side gives an incorrect reading.\n\n**Using a scale with a broken end:** If the '0' mark is broken or unclear, use any other full mark (e.g., the 1.0 cm mark) as your starting point, then SUBTRACT that starting reading from the ending reading. Example: start reading = 1.0 cm, end reading = 10.4 cm → actual length = 10.4 − 1.0 = **9.4 cm**."
                      },
                      {
                        heading: "4. Measuring a Curved Line",
                        text: "A straight ruler can't directly measure a curved path (like decorative string lights along an arch). Instead: lay a flexible thread carefully along the curved path, mark where it ends, then straighten the thread and measure its length with a metre scale."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Let us Measure: Everyday Objects",
                      objective: "To correctly measure the lengths of small objects using a scale, and to record measurements with proper units.",
                      materials: ["A metre scale or 15-cm scale", "A comb", "A pen", "A pencil", "An eraser"],
                      steps: [
                        "Place the scale in direct contact with the object, aligned along its length.",
                        "Position your eye directly above the point on the scale you are reading — not at an angle.",
                        "Note the reading at both ends of the object.",
                        "If using a scale with a worn/broken zero end, subtract the starting reading from the ending reading.",
                        "Record each length with its correct unit (e.g., '8.5 cm', not just '8.5').",
                        "Compare your measurements with a classmate's — are they the same or slightly different? Discuss why."
                      ],
                      observation: "Measuring the same object twice, or comparing with a friend, usually gives very close (though sometimes not perfectly identical) results — much more consistent than using handspans, which shows why standard units and careful technique matter."
                    }
                  ],
                  quiz: [
                    {
                      question: "Five friends measure the same table using their own handspans and get different numbers (13, 14, etc.). Why?",
                      options: ["The table changed size between measurements", "Handspans differ in size from person to person", "They counted incorrectly on purpose", "Tables cannot be measured with handspans at all"],
                      answer: 1,
                      explanation: "Since everyone's handspan is a different size, using it as a measuring unit gives different results for different people — this is exactly why standard units like the metre were adopted."
                    },
                    {
                      question: "What is the SI unit of length, and what is its symbol?",
                      options: ["Centimetre (cm)", "Metre (m)", "Kilometre (km)", "Inch (in)"],
                      answer: 1,
                      explanation: "The metre (symbol: m) is the SI (International System of Units) unit of length. Other units like km, cm, and mm are related to it (1 km = 1000 m, 1 m = 100 cm)."
                    },
                    {
                      question: "A scale has a broken zero end. You start your reading at the 1.0 cm mark and the object ends at the 10.4 cm mark. What is the actual length of the object?",
                      options: ["10.4 cm", "11.4 cm", "9.4 cm", "1.0 cm"],
                      answer: 2,
                      explanation: "With a broken-end scale, subtract the starting reading from the ending reading: 10.4 cm − 1.0 cm = 9.4 cm."
                    },
                    {
                      question: "What is the correct eye position while reading the length of an object against a scale?",
                      options: ["From the side, at an angle", "Directly above the point being read", "It doesn't matter where your eye is", "Below the scale, looking upward"],
                      answer: 1,
                      explanation: "The eye must be positioned directly above the point on the scale being read. Viewing from an angle causes a reading error."
                    },
                    {
                      question: "How would you measure the length of a curved string of decorative lights along an arch?",
                      options: ["It's impossible to measure a curved length", "Lay a flexible thread along the curve, mark its length, then straighten and measure it with a scale", "Estimate it by eye only", "Use a kilometre stone"],
                      answer: 1,
                      explanation: "For curved lines, a thread is laid along the curved path, then straightened out and measured against a metre scale — this converts a curved measurement into a straight-line one."
                    }
                  ]
                },
                {
                  id: "6s-5-2",
                  title: "2. Reference Points & Types of Motion",
                  lab: { type: "motion-type-sim" },
                  theory: {
                    intro: "Are the passengers on a moving bus at rest, or in motion? The surprising answer is: it depends on what you compare them to. This is the idea of a reference point.",
                    sections: [
                      {
                        heading: "1. Reference Points",
                        text: "When distance or position is stated with respect to a fixed object or point, that point is called a **reference point**. For example, kilometre stones along a highway show distance to a city like Delhi — here, Delhi is the reference point.\n\nWithout a shared reference point, two people can both be 'correct' but seem to disagree — e.g., one person says the garden is 'closer' than school (measuring from their own house), while another says school is closer (measuring from a different house). Using the same reference point (like the bus stand) for both resolves the confusion."
                      },
                      {
                        heading: "2. What is Motion?",
                        text: "An object is said to be **in motion** if its position changes with respect to a reference point over time. If its position does NOT change with respect to the reference point, it is said to be **at rest**.\n\n**Motion depends on the reference point you choose!** Passengers seated on a moving bus are at rest with respect to the bus itself (their position relative to their seat doesn't change), but they are in motion with respect to a building outside the bus (their position relative to the building keeps changing)."
                      },
                      {
                        heading: "3. Types of Motion",
                        text: "• **Linear motion:** Movement along a straight line. Example: an eraser dropped from a height, an orange falling from a tree, a pushed box sliding straight.\n• **Circular motion:** Movement along a circular path. Example: a stone whirled on a string, a merry-go-round.\n• **Oscillatory motion:** Movement to and fro about a fixed position. Example: a swing moving back and forth, a plucked metal strip vibrating up and down.\n• **Periodic motion:** Any motion that repeats its path after a fixed interval of time. Both circular motion (repeating the same circular path) and oscillatory motion (repeating the to-and-fro path) are periodic in nature."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Let us Explore: Motion or Rest?",
                      objective: "To practice identifying whether everyday objects are in motion or at rest, and to justify the reasoning.",
                      materials: ["Notebook", "Pen", "A view of your surroundings (classroom, playground, or street)"],
                      steps: [
                        "List five objects around you that appear to be in motion, and five that appear to be at rest.",
                        "For each object, write a brief justification: what reference point are you using to decide?",
                        "Pick one object (like a tree) and think: could it be 'in motion' from a different reference point (e.g., viewed from a moving car)?",
                        "Discuss with a classmate: do you agree on which objects are moving?",
                        "Conclude: why is a reference point essential for deciding if something is in motion?"
                      ],
                      observation: "Whether an object is 'in motion' or 'at rest' isn't a fixed, absolute fact — it always depends on the reference point chosen. The same object can be at rest with respect to one reference point and in motion with respect to another."
                    }
                  ],
                  quiz: [
                    {
                      question: "A kilometre stone reads 'Delhi 70 km'. What is the reference point in this situation?",
                      options: ["The kilometre stone itself", "Delhi", "The number 70", "The road"],
                      answer: 1,
                      explanation: "Delhi is the fixed point that the distance is measured with respect to — making it the reference point in this situation."
                    },
                    {
                      question: "Passengers are seated on a moving bus. With respect to the bus itself, are they at rest or in motion?",
                      options: ["In motion, because the bus is moving", "At rest, because their position doesn't change relative to their seats", "Impossible to determine", "Both at rest and in motion at the same time, with no explanation"],
                      answer: 1,
                      explanation: "Since the passengers' positions do not change relative to the bus (their reference point here), they are at rest with respect to the bus — even though they'd be considered in motion relative to a building outside."
                    },
                    {
                      question: "A box is pushed and slides along a straight path on the floor. What type of motion is this?",
                      options: ["Circular motion", "Oscillatory motion", "Linear motion", "Periodic motion only"],
                      answer: 2,
                      explanation: "Movement along a straight line is called linear motion — like a pushed box, a dropped object falling straight down, or a falling orange."
                    },
                    {
                      question: "A plucked metal strip vibrates up and down repeatedly about a fixed position. What type(s) of motion does this show?",
                      options: ["Only linear motion", "Only circular motion", "Oscillatory motion, and it is also periodic", "None of these — it's not a real type of motion"],
                      answer: 2,
                      explanation: "Moving to-and-fro about a fixed position is oscillatory motion. Since it repeats after a fixed time interval, oscillatory motion is also periodic in nature (as is circular motion)."
                    },
                    {
                      question: "Is an object 'in motion' or 'at rest' an absolute, fixed fact about the object?",
                      options: ["Yes, an object is always either definitely moving or definitely at rest", "No — it depends entirely on which reference point you choose", "Only scientists can determine this", "Motion and rest are the same thing"],
                      answer: 1,
                      explanation: "Whether something is in motion or at rest always depends on the chosen reference point — the same object can be 'at rest' relative to one reference point and 'in motion' relative to another."
                    }
                  ]
                }
              ]
            },
            {
              id: "6s-6",
              title: "Materials Around Us",
              topics: [
                {
                  id: "6s-6-1",
                  title: "1. Grouping Materials: Appearance & Hardness",
                  theory: {
                    intro: "Any substance used to create an object is called a material — paper, wood, cloth, glass, metal, plastic, and clay are all materials. Objects around us are made of a huge variety of materials, and often the SAME object can be made from different materials (a tumbler can be steel, plastic, glass, or clay), while a SINGLE material (like plastic) can be used to make many different objects.",
                    sections: [
                      {
                        heading: "1. Classification of Materials",
                        text: "Arranging objects into groups based on a common property is called **classification**. We can classify objects/materials by shape, colour, hardness, shine, or the material they're made of.\n\n**Choosing a material for a purpose:** The material used to make an object depends on the object's purpose. A tumbler needs to hold water, so cloth (which lets water through) wouldn't work. A cricket ball and tennis ball are made of different materials because they need different bounce, weight and texture for their specific sport."
                      },
                      {
                        heading: "2. Lustre: Shiny or Dull?",
                        text: "Materials with shiny surfaces are called **lustrous**. Lustrous materials are usually metals — iron, copper, zinc, aluminium, gold. Metals can lose their lustre and look dull due to the effect of air and moisture (so lustre is often most visible on a freshly cut surface).\n\nMaterials without a shiny surface are called **non-lustrous** — paper, wood, rubber, jute.\n\n**Caution:** Not everything that shines is a metal — surfaces can be made shiny with polish, wax, or a plastic coating, as the saying goes: 'All that glitters is not gold.'"
                      },
                      {
                        heading: "3. Hardness: Hard or Soft?",
                        text: "Materials that are difficult to compress or scratch are **hard** (e.g., stone, iron). Materials that compress or scratch easily are **soft** (e.g., an eraser, sponge, cloth).\n\n**Hardness is relative:** rubber is harder than sponge, but softer than iron — there's no single fixed line between 'hard' and 'soft'; it depends on what you're comparing it to."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Let us Classify: Grouping Objects by Property",
                      objective: "To practice classifying everyday objects using different properties like shape, colour, material, lustre, or hardness.",
                      materials: ["5-6 small everyday objects (e.g., a key, an eraser, a coin, a pencil, a stone, a piece of cloth)", "Notebook"],
                      steps: [
                        "Lay out all the objects in front of you.",
                        "Group them by ONE property first — for example, by colour.",
                        "Now regroup the SAME objects using a different property — for example, by whether they are lustrous or non-lustrous.",
                        "Try a third grouping — hard vs soft.",
                        "Notice: did the groups change each time you picked a different property?",
                        "Discuss with a friend — did they choose the same property as you first? Why might people group the same objects differently?"
                      ],
                      observation: "The same set of objects can be validly classified in many different ways depending on which property you choose — there's no single 'correct' classification, only the one most useful for your purpose."
                    }
                  ],
                  quiz: [
                    {
                      question: "A tumbler needs to hold water, so it cannot easily be made of cloth. What does this tell us about choosing materials?",
                      options: ["Materials are chosen randomly for objects", "The material chosen for an object depends on its properties and the purpose the object serves", "All materials work equally well for all purposes", "Only expensive materials can hold water"],
                      answer: 1,
                      explanation: "Cloth lets water pass through, so it cannot serve a water-holding purpose. We select materials based on properties (like being watertight) that match what the object needs to do."
                    },
                    {
                      question: "Which of these best describes a 'lustrous' material?",
                      options: ["A material that is soft and squishy", "A material with a shiny surface, usually a metal", "A material you can see through clearly", "A material that dissolves in water"],
                      answer: 1,
                      explanation: "Lustrous materials have shiny surfaces — this property is typically shown by metals like iron, copper, and gold, though not everything shiny is a metal (some materials are coated or polished to look shiny)."
                    },
                    {
                      question: "Rubber is harder than sponge, but softer than iron. What does this tell us about hardness?",
                      options: ["Rubber's hardness is a fixed, absolute value", "Hardness is a relative property — something can be 'hard' compared to one material and 'soft' compared to another", "Rubber is actually the hardest material known", "Hardness cannot be compared between materials"],
                      answer: 1,
                      explanation: "Hardness is relative — there's no single absolute scale. Rubber sits 'in between' sponge and iron in terms of hardness, showing that hard/soft descriptions depend on what you're comparing."
                    },
                    {
                      question: "A shiny plastic-coated object turns out not to be a metal at all. What does this teach us about lustre?",
                      options: ["All shiny materials are metals, no exceptions", "Shine can be added artificially through coating or polishing, so lustre alone doesn't prove something is a metal", "Plastic is always a type of metal", "Lustre is not a real property of materials"],
                      answer: 1,
                      explanation: "As the saying goes, 'all that glitters is not gold' — materials can be coated with plastic, wax, or polish to look shiny without actually being metals."
                    }
                  ]
                },
                {
                  id: "6s-6-2",
                  title: "2. Transparency, Solubility, Mass & Volume",
                  lab: { type: "material-explorer-sim" },
                  theory: {
                    intro: "Beyond lustre and hardness, materials have several other properties that determine how we can use them — whether we can see through them, whether they dissolve in water, and how much space and mass they have.",
                    sections: [
                      {
                        heading: "1. Transparent, Translucent and Opaque",
                        text: "• **Transparent:** Materials through which things can be seen clearly. Examples: glass, water, air, cellophane paper.\n• **Translucent:** Materials through which objects can be seen, but not clearly (hazy). Examples: butter paper, frosted glass.\n• **Opaque:** Materials through which you cannot see at all. Examples: wood, cardboard, most metals."
                      },
                      {
                        heading: "2. Soluble and Insoluble in Water",
                        text: "When a material completely disappears/mixes into water on stirring, it is said to **dissolve** in water — it is **soluble** (e.g., sugar, salt). When a material does NOT mix in and remains visible even after stirring for a long time, it is **insoluble** (e.g., sand, chalk powder, sawdust).\n\nSome liquids (like oil) don't mix with water and form a separate layer instead. Some gases dissolve in water too — oxygen dissolving in water is vital for aquatic animals and plants to survive.\n\n**Real-world use:** ORS (Oral Rehydration Solution) works by dissolving sugar and salt in water — homemade ORS is 6 teaspoons of sugar + half a teaspoon of salt in 1 litre of boiled and cooled water."
                      },
                      {
                        heading: "3. Mass: How Heavy or Light?",
                        text: "Weighing identical cups filled with water, sand, and pebbles shows they can weigh different amounts. This heaviness/lightness is measured as **mass** — an object with more mass is heavier, one with less mass is lighter.\n\nSI units of mass: **gram (g)** and **kilogram (kg)**. (In everyday language, 'weight' is often used loosely to mean mass.)"
                      },
                      {
                        heading: "4. Volume: Space Occupied",
                        text: "Two identical tumblers filled with different amounts of water show different water levels — this is because the **volume** (space occupied) of water in each is different, even though the tumblers have the same capacity.\n\nSI-related units of volume: **litre (L)** and **millilitre (mL)**. The formal SI unit is cubic metre (m³), where **1 m³ = 1000 L**. Bottles labelled '500 mL' or '1 L' are telling you the volume of liquid inside."
                      },
                      {
                        heading: "5. What is Matter?",
                        text: "**Mass** and **volume** are two properties possessed by ALL materials. Anything that occupies space (has volume) AND has mass is called **matter**.\n\nWater, sand, pebbles, a cup, air — all of these are matter. Materials are simply types of matter used to make objects."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Let us Explore: Soluble or Insoluble?",
                      objective: "To predict and test whether common substances dissolve in water.",
                      materials: ["5 glass tumblers filled two-thirds with water", "Sugar", "Salt", "Chalk powder", "Sand", "Sawdust", "A spoon"],
                      steps: [
                        "Before testing, PREDICT for each substance whether it will disappear (dissolve) in water or not.",
                        "Put a teaspoon of sugar in the first tumbler, salt in the second, chalk powder in the third, sand in the fourth, and sawdust in the fifth.",
                        "Stir each well with a spoon.",
                        "Wait a few minutes and observe each tumbler carefully.",
                        "Record whether each substance disappeared (soluble) or remained visible (insoluble).",
                        "Compare your predictions with your actual observations — were you right every time?"
                      ],
                      observation: "Sugar and salt dissolve completely and disappear into the water (soluble). Chalk powder, sand, and sawdust remain visible even after thorough stirring — they do not dissolve (insoluble)."
                    }
                  ],
                  quiz: [
                    {
                      question: "You can see clearly through a glass window, but only see a hazy shape through frosted glass, and cannot see anything through a wooden door. Classify these three materials.",
                      options: ["Glass window = opaque, frosted glass = transparent, wood = translucent", "Glass window = transparent, frosted glass = translucent, wood = opaque", "All three are transparent", "All three are opaque"],
                      answer: 1,
                      explanation: "Transparent materials (glass) let you see clearly through them. Translucent materials (frosted glass) let some light through but not a clear image. Opaque materials (wood) block vision completely."
                    },
                    {
                      question: "Sugar and salt disappear when stirred into water, but sand and chalk powder do not. What does this show?",
                      options: ["Sugar and salt are soluble in water; sand and chalk powder are insoluble", "Sugar and salt are insoluble; sand and chalk powder are soluble", "All four substances are soluble", "None of these substances interact with water"],
                      answer: 0,
                      explanation: "Materials that dissolve completely (like sugar and salt) are called soluble. Materials that remain visible after stirring (like sand and chalk powder) are insoluble."
                    },
                    {
                      question: "Two identical tumblers are filled with different amounts of water, so the water levels differ. What property explains this difference?",
                      options: ["Mass", "Lustre", "Volume — the space occupied by the water differs", "Hardness"],
                      answer: 2,
                      explanation: "Volume is the space occupied by matter. Even though the tumblers have the same capacity, different amounts of water occupy different amounts of space (volume) within them."
                    },
                    {
                      question: "What two properties, possessed by ALL materials, define something as 'matter'?",
                      options: ["Colour and shape", "Mass and volume (has mass and occupies space)", "Lustre and hardness", "Solubility and transparency"],
                      answer: 1,
                      explanation: "Anything that has mass and occupies space (has volume) is called matter. Every material — water, sand, air, a cup — is a form of matter because it has both these properties."
                    },
                    {
                      question: "What are the SI-related units for mass and volume mentioned in this chapter?",
                      options: ["Mass: metre; Volume: gram", "Mass: gram/kilogram; Volume: litre/millilitre", "Mass: litre; Volume: kilogram", "Mass and volume use the same units"],
                      answer: 1,
                      explanation: "Mass is measured in grams (g) and kilograms (kg). Volume is measured in litres (L) and millilitres (mL), with the formal SI unit being cubic metre (m³), where 1 m³ = 1000 L."
                    }
                  ]
                }
              ]
            },
            {
              id: "6s-7",
              title: "Temperature and its Measurement",
              topics: [
                {
                  id: "6s-7-1",
                  title: "1. Hot or Cold? Temperature & Its Scales",
                  lab: { type: "thermometer-reader-sim" },
                  theory: {
                    intro: "\"Wrong measurements are worse than no measurements at all.\" — Anna Mani. When Phiban's brother Lambok felt feverish, she didn't just rely on touching his forehead — she used a thermometer to be sure. Why can't we always trust our sense of touch?",
                    sections: [
                      {
                        heading: "1. Why Touch Alone Isn't Reliable",
                        text: "If you dip your right hand in warm water and your left hand in ice-cold water for a couple of minutes, then place BOTH hands in the same tap water, something strange happens: your right hand feels the tap water as cool, while your left hand feels the SAME water as warm!\n\nThis shows that our sense of touch cannot always correctly judge how hot or cold something really is — we need a reliable, objective measurement instead."
                      },
                      {
                        heading: "2. Temperature and Thermometers",
                        text: "A reliable measure of the hotness or coldness of a body is its **temperature**. A hotter body has a higher temperature than a colder body. A device that measures temperature is called a **thermometer**.\n\nThere are two common kinds: **clinical thermometers** (measure human body temperature) and **laboratory thermometers** (used for many other purposes, like measuring water temperature)."
                      },
                      {
                        heading: "3. Clinical Thermometers & Normal Body Temperature",
                        text: "Modern **digital clinical thermometers** run on batteries and use heat sensors — safer than old mercury thermometers, which are toxic if broken. **Infrared (non-contact) thermometers** can measure temperature without touching the body at all — useful during disease outbreaks to reduce spreading risk.\n\nThe normal temperature of a healthy human body is taken as **37.0 °C** — but this is an average; a healthy person's normal temperature can vary slightly based on age, time of day, and activity level. Human body temperature normally stays between 35 °C and 42 °C."
                      },
                      {
                        heading: "4. Three Temperature Scales",
                        text: "• **Celsius scale:** Unit is degree Celsius (°C). Most commonly used.\n• **Fahrenheit scale:** Unit is degree Fahrenheit (°F). 37.0 °C = 98.6 °F. Not used much in scientific work anymore.\n• **Kelvin scale:** Unit is kelvin (K) — no degree symbol used with K. This is the **SI unit of temperature**.\n\n**Conversion formula:** Temperature in Kelvin = Temperature in Celsius + 273.15"
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Let us Investigate: Can Touch Be Fooled?",
                      objective: "To demonstrate that the sense of touch is not a reliable way to judge temperature.",
                      materials: ["3 large containers labelled A, B, C", "Warm water", "Tap water (room temperature)", "Ice-cold water"],
                      steps: [
                        "Pour warm water in container A, tap water in container B, and ice-cold water in container C.",
                        "Predict: what will you feel if you dip your right hand in A and left hand in C for 1-2 minutes, then place both hands in B?",
                        "Dip your right hand in A and left hand in C. Wait 1-2 minutes.",
                        "Now place both hands simultaneously into container B (tap water).",
                        "Note what each hand feels — is the SAME water in B perceived differently by each hand?",
                        "Compare your observation to your prediction."
                      ],
                      observation: "Even though both hands are in the exact same water (container B), the right hand (coming from warm water A) feels B as cool, while the left hand (coming from cold water C) feels the SAME water B as warm. This proves touch alone cannot reliably measure temperature."
                    }
                  ],
                  quiz: [
                    {
                      question: "You dip your right hand in warm water and left hand in ice-cold water, then place both in the same tap water. What do you feel?",
                      options: ["Both hands feel exactly the same temperature", "The right hand feels the water as cool, the left hand feels the SAME water as warm", "Both hands feel nothing", "The water actually changes temperature for each hand"],
                      answer: 1,
                      explanation: "This classic activity shows that our sense of touch is relative and unreliable — the same water feels different depending on what temperature your hand was at just before, which is why we need thermometers for accurate measurement."
                    },
                    {
                      question: "What is the normal temperature of a healthy human body, and is it exactly the same for every person?",
                      options: ["Exactly 37.0°C for every single person, with zero variation", "About 37.0°C on average, but it can vary slightly by age, time of day and activity level", "Exactly 98.6°C for everyone", "There is no such thing as 'normal' body temperature"],
                      answer: 1,
                      explanation: "37.0°C is the average normal temperature across many healthy people — an individual's own normal temperature can be slightly different and still be perfectly healthy."
                    },
                    {
                      question: "What is the SI unit of temperature, and what is special about how its symbol is written?",
                      options: ["Degree Celsius (°C) — always with the degree symbol", "Kelvin (K) — written without a degree symbol", "Degree Fahrenheit (°F)", "There is no SI unit for temperature"],
                      answer: 1,
                      explanation: "Kelvin (K) is the SI unit of temperature. Unlike °C and °F, the kelvin symbol is written without a degree sign."
                    },
                    {
                      question: "Convert 24°C to Kelvin using the formula: Temperature in Kelvin = Temperature in Celsius + 273.15",
                      options: ["24 K", "297.15 K", "249.15 K", "273.15 K"],
                      answer: 1,
                      explanation: "24 + 273.15 = 297.15 K."
                    },
                    {
                      question: "Why are digital clinical thermometers now preferred over old mercury thermometers?",
                      options: ["Digital thermometers are cheaper to manufacture only", "Mercury is toxic and hard to safely dispose of if the thermometer breaks; digital thermometers avoid this risk", "Mercury thermometers give inaccurate readings", "There is no real difference between them"],
                      answer: 1,
                      explanation: "Mercury is an extremely toxic substance, making broken mercury thermometers a health hazard. Digital thermometers, using heat sensors, avoid this danger and are also easier to read."
                    }
                  ]
                },
                {
                  id: "6s-7-2",
                  title: "2. Laboratory Thermometers & Correct Measurement",
                  theory: {
                    intro: "Clinical thermometers can't measure boiling water or ice — their range is too narrow. For a wider range of temperatures, we use laboratory thermometers, and there's a precise, correct way to use them.",
                    sections: [
                      {
                        heading: "1. The Laboratory Thermometer",
                        text: "A laboratory thermometer is a long, narrow, sealed glass tube with a liquid-filled bulb at one end. The liquid (usually coloured alcohol or mercury) rises or falls in the tube with temperature changes, against a marked Celsius scale.\n\nA typical laboratory thermometer has a **range** of −10 °C to 110 °C — always check the specific range of the thermometer you're using, since this can vary."
                      },
                      {
                        heading: "2. Finding the Least Count (Smallest Readable Value)",
                        text: "To find the smallest value a thermometer can measure:\n1. Find the temperature difference between two big/labelled marks (e.g., between 0°C and 10°C = 10°C difference).\n2. Count the number of small divisions between those two big marks (e.g., 10 divisions).\n3. Divide: smallest value = 10°C ÷ 10 divisions = **1°C per small division**.\n\nDifferent thermometers can have different ranges and different least counts — always check before using one."
                      },
                      {
                        heading: "3. The Correct Way to Measure Temperature",
                        text: "• The thermometer's bulb should **not touch** the bottom or sides of the container.\n• Hold the thermometer **vertically** — not tilted.\n• **Read the temperature while the bulb is still immersed** in the liquid — the reading starts falling as soon as you take it out.\n• Your eye must be **directly in line** with the level of the liquid column being read.\n\nWhen a group of students measured the same boiling water but got slightly different readings (97.8°C to 98.1°C), the likely reason was that not everyone followed the correct measurement method exactly."
                      },
                      {
                        heading: "4. Constant Temperatures & Air Temperature",
                        text: "The temperature of water remains constant while it is boiling, and the temperature of ice remains constant while it is melting — even though heat is still being applied/absorbed.\n\n**Air temperature:** Wall-mounted thermometers give an approximate room temperature. Weather reports mention the day's maximum and minimum air temperatures, which vary daily because weather depends on many factors."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Let us Measure: Temperature of Warm Water",
                      objective: "To correctly measure the temperature of warm water using a laboratory thermometer.",
                      materials: ["A laboratory thermometer", "A beaker of warm water"],
                      steps: [
                        "Dip the thermometer into the warm water so that the bulb is fully immersed, without touching the bottom or sides of the beaker.",
                        "Hold the thermometer vertically, not tilted.",
                        "Watch the liquid column rise. Wait until it stops rising (but don't wait too long, or the water will cool).",
                        "With your eye directly in line with the liquid level, read the temperature WHILE the bulb is still immersed.",
                        "Record your reading and compare it with a classmate's reading of the same water.",
                        "Notice: what happens to the reading if you lift the thermometer out of the water before reading it?"
                      ],
                      observation: "The liquid column begins to fall as soon as the thermometer is removed from the water — proving that a laboratory thermometer must always be read WHILE still immersed in the liquid being measured."
                    }
                  ],
                  quiz: [
                    {
                      question: "A laboratory thermometer shows 0°C and 10°C as its two nearest big marks, with 10 small divisions between them. What is the smallest value (least count) this thermometer can read?",
                      options: ["10°C", "1°C", "0.1°C", "100°C"],
                      answer: 1,
                      explanation: "Least count = temperature difference ÷ number of divisions = 10°C ÷ 10 = 1°C per small division."
                    },
                    {
                      question: "Why can't a clinical thermometer be used to measure the temperature of boiling water?",
                      options: ["Clinical thermometers only work on humans by law", "The temperature of boiling water is outside the measuring range of a clinical thermometer", "Boiling water has no temperature", "Clinical thermometers break in water"],
                      answer: 1,
                      explanation: "Clinical thermometers have a narrow range suited to human body temperature (roughly 35-42°C), far below the ~100°C of boiling water — so they simply cannot measure it."
                    },
                    {
                      question: "Several students measure the same beaker of boiling water and get slightly different readings (97.8°C to 98.1°C). What is the most likely explanation?",
                      options: ["The water's true temperature keeps randomly changing", "Not everyone followed the correct thermometer reading procedure (eye level, immersion, etc.) precisely", "Boiling water doesn't have one fixed temperature", "Their thermometers were different models entirely"],
                      answer: 1,
                      explanation: "Small differences like this usually come from technique — eye not level with the liquid column, reading after removing the bulb, or a tilted thermometer — rather than the water's actual temperature changing."
                    },
                    {
                      question: "What happens to the temperature of water while it is boiling, and to ice while it is melting?",
                      options: ["Both keep rising steadily with no limit", "Both remain constant during the process, even though heat is being applied/absorbed", "Both drop to 0°C immediately", "There is no fixed pattern"],
                      answer: 1,
                      explanation: "The temperature of boiling water stays constant while boiling, and the temperature of melting ice stays constant while melting — a key property used in defining fixed points on temperature scales."
                    },
                    {
                      question: "What is the correct eye position when reading a laboratory thermometer's liquid column?",
                      options: ["From above, looking down", "Directly in line with the level of the liquid column", "From below, looking up", "Eye position doesn't matter for thermometers"],
                      answer: 1,
                      explanation: "Just like with a length-measuring scale, your eye must be directly in line with the reading you're taking — viewing from an angle causes an incorrect reading."
                    }
                  ]
                }
              ]
            },
            {
              id: "6s-8",
              title: "A Journey through States of Water",
              topics: [
                {
                  id: "6s-8-1",
                  title: "1. Evaporation & Condensation",
                  theory: {
                    intro: "Ice feels hard and can be held; water flows and cannot. Are they different substances, or the same one? Putting an ice cube in a cup and leaving it on the table answers this: it turns into water. Ice and water are simply two different forms — or states — of the very same substance.",
                    sections: [
                      {
                        heading: "1. Water's Disappearing Act: Evaporation",
                        text: "Water puddles disappear after rain; water on a hot pan vanishes while making dosa; wet clothes and a mopped floor dry up. Where does the water go?\n\nThe water is converting into an invisible gaseous state called **water vapour**. (Steam looks visible because it contains tiny water droplets, but water vapour itself is invisible.) The process of conversion of water into its vapour state is called **evaporation**.\n\nEvaporation happens continuously, even at room temperature — it's why sweat on our body, wet clothes, and mopped floors all eventually dry."
                      },
                      {
                        heading: "2. Water's Mysterious Appearance: Condensation",
                        text: "Add ice cubes to cold water in a glass tumbler, and soon water droplets appear on the OUTSIDE of the glass. Where do they come from? (It's not the tumbler leaking — marking the water level shows it doesn't drop, while droplets keep collecting outside!)\n\nThe water vapour that is always present in the air (its amount is called **humidity**) turns into liquid droplets when it touches a cold surface. This is why dew drops form on plants (more often in the cool morning), and why water collects on the underside of a plate covering a boiling pot.\n\nThe process of conversion of water vapour into its liquid state is called **condensation**."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Let us Measure: Does Water Really Condense on a Cold Glass?",
                      objective: "To gather evidence that water droplets appearing outside a cold tumbler come from condensation, not from the tumbler leaking.",
                      materials: ["A glass tumbler", "Cold water with ice cubes", "A permanent marker or tape", "A digital weighing balance (optional)"],
                      steps: [
                        "Fill the tumbler with cold water and a few ice cubes. Mark the water level on the outside with a marker or tape.",
                        "Leave it undisturbed for several minutes.",
                        "Observe: has the water level inside dropped below your mark?",
                        "Observe the outside of the tumbler: are water droplets forming and growing?",
                        "If you have a weighing balance, weigh the tumbler every 5 minutes for 30 minutes and record any change.",
                        "Conclude: if the inside water level hasn't changed, but droplets keep appearing outside and the total weight increases, where must that water be coming from?"
                      ],
                      observation: "The water level inside the tumbler does NOT drop, but droplets keep forming and growing on the outside, and the tumbler's total weight increases over time. This proves the extra water isn't leaking from inside — it's condensing from water vapour in the surrounding air onto the cold surface."
                    }
                  ],
                  quiz: [
                    {
                      question: "An ice cube is left in a cup on a table and turns into water. What does this tell us about ice and water?",
                      options: ["They are completely different, unrelated substances", "They are two different states (forms) of the same substance", "Ice is a type of water vapour", "Water cannot exist without ice"],
                      answer: 1,
                      explanation: "Ice and water are the same substance in different states. This is confirmed by the fact that ice simply turns into water when left out — no new substance is created."
                    },
                    {
                      question: "Water sprinkled on a hot pan while making dosa disappears. What is this process called?",
                      options: ["Condensation", "Freezing", "Evaporation", "Melting"],
                      answer: 2,
                      explanation: "The conversion of water into its invisible vapour state is called evaporation — this is what happens to the water on the hot pan."
                    },
                    {
                      question: "Water droplets form on the OUTSIDE of a glass tumbler filled with ice water, even though the water level inside doesn't drop. What explains this?",
                      options: ["The glass is leaking very slowly", "Water vapour from the air is condensing on the cold outer surface of the tumbler", "The ice cubes are teleporting outside", "This cannot actually happen"],
                      answer: 1,
                      explanation: "Since the inside water level stays the same, the droplets can't be from leaking. They form because water vapour in the surrounding air condenses (turns to liquid) when it touches the cold glass surface."
                    },
                    {
                      question: "Why do dew drops often appear on plants in the early morning?",
                      options: ['Plants "sweat" water at night', "Cool morning surfaces cause water vapour in the air to condense into droplets", "It secretly rained overnight every time", "Dew is unrelated to water vapour"],
                      answer: 1,
                      explanation: "Morning surfaces are often cooler, causing water vapour in the air to condense into visible dew droplets — the same process seen on a cold glass tumbler."
                    },
                    {
                      question: "What is 'humidity'?",
                      options: ["The temperature of water", "The amount of water vapour present in the air", "A type of cloud", "The speed of evaporation"],
                      answer: 1,
                      explanation: "Humidity refers to the amount of water vapour in the air — higher humidity means more water vapour is present."
                    }
                  ]
                },
                {
                  id: "6s-8-2",
                  title: "2. Properties of States & Changing States",
                  lab: { type: "water-state-change-sim" },
                  theory: {
                    intro: "Water exists in three states: solid (ice), liquid (water), and gas (water vapour). Each state behaves very differently — and we can convert water between these states by heating or cooling it.",
                    sections: [
                      {
                        heading: "1. Comparing the Three States",
                        text: "• **Ice (solid):** Keeps a fixed shape regardless of its container. Does not flow. Does not spread.\n• **Water (liquid):** Has no fixed shape — takes the shape of its container, but its VOLUME stays constant. It flows, and it spreads while keeping the same volume.\n• **Water vapour (gas):** Has no fixed shape and spreads out to fill the ENTIRE available space. Present in the air around us at all times, even though invisible.\n\nOther substances show these same three states too — for example, wax, oil, and ghee can all exist as solids or liquids depending on temperature."
                      },
                      {
                        heading: "2. Changing States: Melting, Freezing, Evaporation, Condensation",
                        text: "To change ice → water, or water → water vapour, we must **supply heat**.\nTo change water vapour → water, or water → ice, we must **remove heat (cool it)**.\n\n• **Melting:** Solid → Liquid (e.g., ice melting to water, or candle wax melting when heated).\n• **Freezing:** Liquid → Solid (e.g., water freezing to ice in a freezer, or liquid coconut oil solidifying in winter).\n• **Evaporation:** Liquid → Gas (needs heat).\n• **Condensation:** Gas → Liquid (needs cooling).\n\nThese four processes connect all three states of water (and many other substances) in a repeating cycle."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Let us Identify: Comparing Ice, Water and Water Vapour",
                      objective: "To directly compare the shape, flow, and spreading behaviour of the three states of water.",
                      materials: ["An ice cube", "Two containers of different shapes", "A little water", "A clean flat surface"],
                      steps: [
                        "Place the ice cube in one container, then move it to a container of a different shape. Does the ice cube's shape change?",
                        "Pour water from one container into a different-shaped one. Does the water take the new container's shape?",
                        "Pour a little water onto a clean, flat surface. Observe how it spreads.",
                        "Think about water vapour (e.g., steam from a kettle, or invisible vapour in air) — how does it spread compared to liquid water?",
                        "Record your observations for shape, flow, and spread for all three states."
                      ],
                      observation: "Ice keeps its shape no matter which container it's in. Water takes the shape of whatever container holds it and flows/spreads while keeping the same volume. Water vapour spreads out to fill all the space available to it, with no fixed shape or volume."
                    }
                  ],
                  quiz: [
                    {
                      question: "An ice cube is moved from one container to a very differently-shaped container. What happens to its shape?",
                      options: ["It immediately takes the new container's shape", "It keeps its own fixed shape, regardless of the container", "It disappears", "It turns into gas"],
                      answer: 1,
                      explanation: "Solids like ice have a fixed shape that does not change based on the container — unlike liquids, which take the shape of their container."
                    },
                    {
                      question: "Water is poured from a round bowl into a tall, narrow bottle. What stays the same, and what changes?",
                      options: ["Both shape and volume stay the same", "The shape changes to match the bottle, but the volume of water stays the same", "The volume changes, but the shape stays the same", "Both the shape and volume change randomly"],
                      answer: 1,
                      explanation: "Liquids take the shape of their container (so the water's shape changes), but the total amount (volume) of water remains constant regardless of the container's shape."
                    },
                    {
                      question: "To convert ice into water, or water into water vapour, what must be done?",
                      options: ["Remove heat (cool it)", "Supply heat (heat it up)", "Nothing needs to be done — it happens randomly", "Add more water"],
                      answer: 1,
                      explanation: "Melting (solid→liquid) and evaporation (liquid→gas) both require heat to be supplied to the substance."
                    },
                    {
                      question: "What is the process called when liquid water is cooled and turns into solid ice?",
                      options: ["Melting", "Evaporation", "Freezing", "Condensation"],
                      answer: 2,
                      explanation: "Freezing is the conversion of a liquid into a solid state — like water turning into ice in a freezer."
                    },
                    {
                      question: "Besides water, which everyday substance is mentioned as another example that changes between solid and liquid states?",
                      options: ["Air", "Wax (like a candle)", "Sunlight", "Sound"],
                      answer: 1,
                      explanation: "Candle wax is a classic example — it melts into a liquid when heated and can be cooled back into a solid, just like water and ice."
                    }
                  ]
                },
                {
                  id: "6s-8-3",
                  title: "3. Evaporation Speed, Cooling Effect & the Water Cycle",
                  theory: {
                    intro: "Why does spread-out water on a plate evaporate faster than the same amount in a bottle cap? Why does an earthen matka keep water cooler than a steel pot? And how do clouds actually form? All three questions connect back to evaporation and condensation.",
                    sections: [
                      {
                        heading: "1. What Affects Evaporation Speed?",
                        text: "• **Surface area:** Water spread on a plate (larger exposed area) evaporates faster than the same amount in a bottle cap (smaller exposed area).\n• **Sunlight/heat:** Water evaporates faster in sunlight than in shade — this is why clothes dry faster on a hot, sunny day.\n• **Wind:** Water evaporates faster with more air movement — clothes dry faster on a windy day.\n• **Humidity:** When the air already has a lot of water vapour (high humidity, like on a rainy day), evaporation slows down — clothes dry more slowly on rainy/humid days."
                      },
                      {
                        heading: "2. The Cooling Effect of Evaporation",
                        text: "Water stored in an earthen pot (matka) feels cooler than water in a steel pot. This is because water slowly seeps through the porous earthen surface and evaporates from the outside — and evaporation has a **cooling effect**.\n\nMore examples: sweat evaporating from our skin cools our body (this is why a fan makes us feel cooler — it speeds up sweat evaporation); sprinkling water on a floor or roof cools it in summer; rubbing sanitiser on hands feels cool as it evaporates.\n\nA **pot-in-pot cooler** (two earthen pots with wet sand between them) uses this same cooling effect — as water evaporates from the wet sand, it cools the inner pot, keeping food fresh without electricity."
                      },
                      {
                        heading: "3. How Clouds Give Us Rain: The Water Cycle",
                        text: "Water vapour (lighter than air) rises into the atmosphere. As air rises higher, it gets cooler and cooler. At a certain height, the water vapour cools enough to **condense** into tiny droplets — usually forming around tiny dust particles. These droplets float together as **clouds**.\n\nAs more droplets join together, they form bigger, heavier drops that eventually fall as **rain** (or, under special conditions, as hail or snow).\n\n**The Water Cycle:** Water from oceans and the Earth's surface evaporates into the atmosphere as vapour, condenses into clouds, and returns as rain/hail/snow, eventually flowing back into oceans, rivers, and groundwater — a continuous circulation of water."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Let us Investigate: What Makes Water Evaporate Faster?",
                      objective: "To test how exposed surface area affects the speed of evaporation.",
                      materials: ["A small bottle cap", "A plate", "Water (or hand sanitiser)", "A clock or timer"],
                      steps: [
                        "Pour the same amount of water into the bottle cap and onto the plate (the plate spreads it over a much larger area).",
                        "Place both near each other, under the same conditions.",
                        "Check both every few minutes and note when each one has completely evaporated.",
                        "Compare the two times — which evaporated faster?",
                        "Discuss: why would a larger exposed surface area speed up evaporation?"
                      ],
                      observation: "The water on the plate (larger exposed surface area) evaporates noticeably faster than the same amount of water in the bottle cap (smaller exposed area) — showing that greater surface area speeds up evaporation."
                    }
                  ],
                  quiz: [
                    {
                      question: "The same amount of water is placed in a bottle cap and spread out on a plate. Which evaporates faster, and why?",
                      options: ["The bottle cap, because it's smaller", "The plate, because it has a larger surface area exposed to air", "Both evaporate at exactly the same speed", "Neither will evaporate at all"],
                      answer: 1,
                      explanation: "A larger exposed surface area allows more water molecules to escape into the air at once, so evaporation happens faster from the plate."
                    },
                    {
                      question: "Why do clothes dry faster on a windy day compared to a still day?",
                      options: ["Wind makes clothes heavier", "Increased air movement speeds up evaporation", "Wind cools the clothes so they don't need to dry", "There is no real difference"],
                      answer: 1,
                      explanation: "More air movement carries away the water vapour near the cloth's surface faster, allowing more evaporation to occur — speeding up drying."
                    },
                    {
                      question: "Water stored in an earthen matka feels cooler than water in a steel pot. Why?",
                      options: ["Earthen pots are naturally colder material", "Water seeps through the porous earthen surface and evaporates, which has a cooling effect", "Steel pots heat up the water", "This is purely imaginary and doesn't really happen"],
                      answer: 1,
                      explanation: "The porous earthen material lets a little water seep out and evaporate from the surface. Evaporation absorbs heat from its surroundings, cooling the water inside — steel doesn't allow this seeping/evaporation."
                    },
                    {
                      question: "How do clouds form, according to the water cycle?",
                      options: ["Water vapour rises, cools at height, and condenses into droplets around dust particles, which float together as clouds", "Clouds are made of solid ice that never changes", "Clouds have nothing to do with water vapour", "Clouds form only over oceans"],
                      answer: 0,
                      explanation: "As water vapour rises into the atmosphere it cools, condensing into tiny droplets (often around dust particles) that float together, forming clouds — which eventually produce rain when droplets combine and grow heavy enough to fall."
                    },
                    {
                      question: "Why does clothing dry more slowly on a rainy/humid day?",
                      options: ["Rain physically prevents clothes from drying by adding water to them only", "The air already contains a lot of water vapour (high humidity), which slows further evaporation", "The temperature is always freezing on rainy days", "Clothes never dry on rainy days at all"],
                      answer: 1,
                      explanation: "When humidity is high, the air is already close to holding as much water vapour as it can, so evaporation from wet clothes happens much more slowly."
                    }
                  ]
                }
              ]
            },
            {
              id: "6s-9",
              title: "Methods of Separation in Everyday Life",
              topics: [
                {
                  id: "6s-9-1",
                  title: "1. Handpicking, Winnowing, Threshing & Sieving",
                  lab: { type: "separation-method-sim" },
                  theory: {
                    intro: "Malli and Valli's summer trip across India — visiting grandparents in Haryana, Ahmedabad, Puducherry, Bhopal, and Shillong — showed them how many different, clever methods people use every day to separate mixtures. When two or more substances are mixed, we can separate them based on differences like size, weight, or how they respond to wind, water, or magnets.",
                    sections: [
                      {
                        heading: "1. Handpicking",
                        text: "**Handpicking** is picking out unwanted particles from a mixture by hand — based on differences in size, colour, or shape. Example: removing small stones and husk from wheat/rice, or picking whole black peppers out of pulao.\n\nThis method works well only when the particles to be removed are present in small quantities and are easy to identify and pick out."
                      },
                      {
                        heading: "2. Threshing",
                        text: "**Threshing** is the process of separating grains from harvested stalks — traditionally done by beating the stalks on a wooden log (or using a machine called a thresher, which can thresh and winnow at the same time)."
                      },
                      {
                        heading: "3. Winnowing",
                        text: "After threshing, grains are still mixed with husk. Rubbing roasted peanuts between your palms loosens the skin — and blowing air separates the light skins (blown away) from the heavier peanuts (which stay).\n\n**Winnowing** is the method of separating heavier and lighter components of a mixture using wind or by blowing air. Farmers traditionally use a **soop** (bamboo tray), tossing threshed grain into the wind — the husk blows away while the heavier grains fall straight down.\n\nWinnowing does NOT work in a closed room with no air movement — it depends entirely on wind or moving air."
                      },
                      {
                        heading: "4. Sieving",
                        text: "To remove bran or small stones from flour, we use a **sieve**. **Sieving** lets fine particles pass through the sieve's holes while bigger particles (bran, small stones) are held back.\n\nSieving works only when the components of a solid-solid mixture have different particle sizes — and only if the sieve's holes are smaller than the bigger particles (sieves are also used at construction sites to separate pebbles/stones from sand)."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Let us Explore: Separating Peanut Skins by Winnowing",
                      objective: "To observe how blowing air can separate lighter and heavier components of a mixture.",
                      materials: ["A handful of roasted peanuts (with skins on)"],
                      steps: [
                        "Rub the roasted peanuts between your palms to loosen their skins.",
                        "Try to separate the loose skins from the peanuts by hand — is this easy or slow?",
                        "Now gently blow air across the mixture (or toss it gently in open air).",
                        "Observe which component is blown away and which stays close by.",
                        "Relate this to how farmers use a soop (bamboo tray) to winnow grain in the wind."
                      ],
                      observation: "The lighter peanut skins are blown away by the air, while the heavier peanuts fall close by or stay in place — demonstrating winnowing, the same principle farmers use with a soop to separate husk from grain."
                    }
                  ],
                  quiz: [
                    {
                      question: "Malli picks out whole black peppers from his pulao by hand, one by one. What separation method is this?",
                      options: ["Winnowing", "Sieving", "Handpicking", "Threshing"],
                      answer: 2,
                      explanation: "Picking out particles from a mixture by hand — based on differences like size, colour or shape — is called handpicking."
                    },
                    {
                      question: "Farmers beat harvested wheat stalks on a wooden log to separate the grains. What is this process called?",
                      options: ["Threshing", "Winnowing", "Sieving", "Decantation"],
                      answer: 0,
                      explanation: "Threshing is the process of separating grains from the stalks they grow on, traditionally done by beating the stalks."
                    },
                    {
                      question: "A farmer tosses threshed grain into the air using a bamboo tray (soop). What separates, and why?",
                      options: ["Nothing separates without water", "The lighter husk is blown away by the wind while the heavier grains fall straight down", "The heavier grains are blown away", "This only works with a machine, never by hand"],
                      answer: 1,
                      explanation: "This is winnowing — using wind or blown air to separate heavier and lighter components. The husk, being lighter, is carried away by the wind, while the heavier grains fall close by."
                    },
                    {
                      question: "Valli tries to winnow rice husk in a closed room with no air movement. What happens?",
                      options: ["It works even better indoors", "It doesn't work well — winnowing needs wind or moving air to carry away the lighter component", "The husk turns into grain", "Sieving happens automatically instead"],
                      answer: 1,
                      explanation: "Winnowing depends entirely on air movement to blow away the lighter component. Without wind or blown air, the heavier and lighter particles won't separate."
                    },
                    {
                      question: "Wheat flour contains some bran and small stones. Which method correctly separates fine flour from these bigger particles?",
                      options: ["Winnowing", "Sieving — flour passes through the holes, bigger particles stay on top", "Handpicking only", "Filtration"],
                      answer: 1,
                      explanation: "Sieving is ideal when mixture components differ in particle size — fine flour passes through the sieve's holes while bigger bran/stone particles are held back."
                    }
                  ]
                },
                {
                  id: "6s-9-2",
                  title: "2. Sedimentation, Filtration, Evaporation & Magnetic Separation",
                  lab: { type: "separation-method-sim" },
                  theory: {
                    intro: "Beyond dry-mixture methods, we also need ways to separate substances mixed in liquids, dissolved in water, or mixed with magnetic materials — as Malli and Valli discovered over tea, muddy river water, salt-making, and a carpenter's dropped nails.",
                    sections: [
                      {
                        heading: "1. Sedimentation & Decantation",
                        text: "Leaving tea undisturbed lets the heavier tea leaves settle at the bottom — this settling of a heavier insoluble component at the bottom of a liquid is called **sedimentation**.\n\nGently pouring off the liquid (leaving the settled solid behind) is called **decantation**. This method is also used for washing rice and pulses. However, decantation does NOT completely separate all the solid particles — some very fine bits may still escape with the poured liquid."
                      },
                      {
                        heading: "2. Filtration",
                        text: "Pouring tea through a strainer collects the tea leaves in the strainer while the liquid tea passes through — this is **filtration**, using a filter with small holes/pores.\n\nA piece of cloth can act as a simple filter (with pores between woven threads). For finer particles (like mud in muddy water), a **filter paper** (folded into a cone and placed in a funnel) has even smaller pores. The mud collected on the filter paper is called the **residue**; the clear liquid that passes through is called the **filtrate**. Other filter materials include cotton, charcoal, and sand — the right choice depends on the size of particles to be removed."
                      },
                      {
                        heading: "3. Evaporation",
                        text: "To get salt back from a salt solution, heat it in a container (like a china dish) until all the water boils away — this is **evaporation**. What remains behind is the solid salt.\n\nThis is also how salt is traditionally obtained from seawater: seawater is kept in shallow pits under sunlight, and over days the water evaporates, leaving the salt mixture behind. Note: evaporation gets you back the salt, but the water itself is lost as vapour — it doesn't recover both substances separately."
                      },
                      {
                        heading: "4. Churning & Magnetic Separation",
                        text: "**Churning** curd with a mathni (churner) separates butter (which is lighter and floats to the top) from buttermilk (left behind).\n\n**Magnetic separation** uses a magnet to separate magnetic substances (like iron) from non-magnetic ones — such as picking iron nails out of sawdust with a magnet. Industries use large magnets fitted to cranes to separate scrap iron from waste for recycling."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Let us Experiment: Filtering Muddy Water",
                      objective: "To separate mud from water using filtration with a filter paper cone.",
                      materials: ["Filter paper", "A funnel", "A conical flask or glass", "Muddy water", "A tripod stand (or something to hold the funnel)"],
                      steps: [
                        "Fold the filter paper: once in half, then again, to form a cone shape.",
                        "Open the cone slightly and place it inside the funnel.",
                        "Set the funnel over the conical flask (or glass).",
                        "Slowly pour the muddy water into the filter paper cone.",
                        "Watch what collects in the flask below, and what remains in the filter paper.",
                        "Identify: which part is the 'residue' and which is the 'filtrate'?"
                      ],
                      observation: "The mud particles are too large to pass through the filter paper's tiny pores, so they stay behind as residue in the paper cone, while clear water (the filtrate) passes through and collects in the flask below."
                    }
                  ],
                  quiz: [
                    {
                      question: "Tea is left undisturbed, and the tea leaves settle to the bottom of the pot. What is this settling process called?",
                      options: ["Filtration", "Sedimentation", "Winnowing", "Churning"],
                      answer: 1,
                      explanation: "Sedimentation is the settling of a heavier insoluble component at the bottom of a liquid — like tea leaves settling in a pot of tea."
                    },
                    {
                      question: "After tea leaves settle, the tea is gently poured off into a cup, leaving the leaves behind. What is THIS process called, and is it 100% effective?",
                      options: ["Decantation; yes, it removes 100% of the tea leaves", "Decantation; no, some fine tea leaf bits can still escape with the poured liquid", "Filtration; completely effective", "Evaporation; not effective at all"],
                      answer: 1,
                      explanation: "Pouring off the liquid while leaving the settled solid behind is decantation. It is convenient but not perfect — some fine particles can still escape with the liquid, unlike filtration."
                    },
                    {
                      question: "In filtering muddy water through filter paper, what are the two results called?",
                      options: ["Solid and liquid", "Residue (mud left on paper) and filtrate (clear water that passes through)", "Sediment and decant", "Husk and grain"],
                      answer: 1,
                      explanation: "The material left behind on the filter (mud) is called the residue, and the liquid that passes through (clear water) is called the filtrate."
                    },
                    {
                      question: "To get back solid salt from a salt solution, what method is used, and what happens to the water?",
                      options: ["Filtration; the water is collected separately", "Evaporation (heating until water boils away); the water is lost as vapour, not recovered separately", "Winnowing; nothing happens to the water", "Magnetic separation; the water turns solid"],
                      answer: 1,
                      explanation: "Heating the salt solution evaporates the water completely, leaving solid salt behind — but the water itself escapes as vapour and isn't collected as liquid water in this basic process."
                    },
                    {
                      question: "A carpenter accidentally drops iron nails into sawdust. What is the quickest, most efficient way to separate them?",
                      options: ["Sieving, since sawdust and nails are different sizes", "Winnowing, using wind", "Magnetic separation — moving a magnet through the mixture attracts the iron nails", "Evaporation"],
                      answer: 2,
                      explanation: "Since iron is a magnetic material and sawdust is not, moving a magnet through the mixture quickly and efficiently attracts and removes all the iron nails — this is magnetic separation."
                    }
                  ]
                }
              ]
            },
            {
              id: "6s-10",
              title: "Living Creatures: Exploring their Characteristics",
              topics: [
                {
                  id: "6s-10-1",
                  title: "1. What Sets the Living Apart from the Non-living?",
                  theory: {
                    intro: "A snail's shell looks completely still, yet it's part of a living creature's body. A car can move on its own power, yet it isn't alive. How do we really tell living beings apart from non-living things?",
                    sections: [
                      {
                        heading: "1. Movement, Growth & Nutrition",
                        text: "**Movement:** Most animals move from place to place. Plants don't move location, but they DO show movement — flowers open, insectivorous plants like **Drosera** trap insects by moving their sticky, hair-like projections inward, and climbers wind around supports.\n\n**Growth:** You can't wear the clothes you wore four years ago — you've grown. Plants and all living beings grow too.\n\n**Nutrition:** Living beings need food for growth and development."
                      },
                      {
                        heading: "2. Respiration, Excretion & Response to Stimuli",
                        text: "**Respiration:** Breathing (inhaling and exhaling air) is part of respiration. Plants respire too — through tiny pores called **stomata** on leaf surfaces.\n\n**Excretion:** Removal of waste products from the body. Sweat (water + salts) and urine are excretion products in animals. Plants excrete excess water and minerals as small droplets on leaves (e.g., grass, roses).\n\n**Response to stimuli:** A stimulus is anything that prompts a living being to respond — like stepping on a thorn or touching a hot cup. Plants respond too: the **touch-me-not (mimosa/chhui-mui)** plant folds its leaves when touched, and amla tree leaves fold together after sunset."
                      },
                      {
                        heading: "3. Reproduction & Death",
                        text: "**Reproduction:** All living beings reproduce — producing new ones of their own kind. This is necessary for the continuity of life. (You've seen young ones of cats and dogs — but never a 'young one' of a pencil or a chair!)\n\n**Death:** When a living being can no longer show these characteristics, despite having all the resources (food, air, water) it needs, it is said to be dead.\n\n**Putting it together:** All living beings move, need food, grow, respire, excrete, respond to stimuli, reproduce, and eventually die. If something is missing even ONE of these characteristics across the board, it's non-living."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Let us Record: Living or Non-living?",
                      objective: "To practice identifying everyday objects as living or non-living, with clear reasoning.",
                      materials: ["Notebook", "Pen", "Things around you: a pencil, a book, a pigeon (or any bird/insect), a car, a plant"],
                      steps: [
                        "List 5-6 objects/beings around you.",
                        "For each, first write your GUESS: living or non-living.",
                        "Write your reason for the guess.",
                        "Check your guess against the 8 characteristics of living beings (movement, growth, nutrition, respiration, excretion, response to stimuli, reproduction, death).",
                        "Correct your answer if needed, and write the correct reasoning.",
                        "Discuss: was there any object where you and a friend disagreed? Why?"
                      ],
                      observation: "Objects that show ALL the characteristics of life (like a pigeon or a plant) are living, while objects that lack these characteristics entirely (like a pencil or car, even though a car can move) are non-living — movement alone is not enough to prove something is alive."
                    }
                  ],
                  quiz: [
                    {
                      question: "A car can move on its own power (using its engine). Does this mean a car is a living thing?",
                      options: ["Yes, because it moves", "No — movement alone isn't enough; a car doesn't grow, respire, excrete, reproduce, or show the other characteristics of life", "Yes, because it needs fuel like living beings need food", "It depends on the car's model"],
                      answer: 1,
                      explanation: "Movement is one characteristic of living beings, but a car lacks ALL the other essential characteristics (growth, respiration, excretion, reproduction, etc.), so it is non-living despite being able to move."
                    },
                    {
                      question: "A touch-me-not (mimosa) plant folds its leaves when touched. What characteristic of living beings does this demonstrate?",
                      options: ["Excretion", "Response to stimuli", "Reproduction", "Respiration"],
                      answer: 1,
                      explanation: "Touch is the stimulus, and folding the leaves is the plant's response — demonstrating that plants, like all living beings, respond to stimuli."
                    },
                    {
                      question: "What are stomata, and what do they do?",
                      options: ["Roots that absorb water", "Tiny pores on leaf surfaces that help plants take air in and out for respiration", "Flowers that attract insects", "Seeds of a plant"],
                      answer: 1,
                      explanation: "Stomata are tiny pores on the surface of leaves that allow plants to exchange gases with the air — this is how plants respire, even without lungs."
                    },
                    {
                      question: "Why do plants excrete excess water and minerals as droplets on their leaves (seen on grass and roses)?",
                      options: ["Plants never excrete anything", "This is how plants remove waste products from their body, just as animals excrete sweat and urine", "It's just rainwater sitting on the leaves", "Only animals can excrete, not plants"],
                      answer: 1,
                      explanation: "Excretion — removing waste products — is a characteristic shown by ALL living beings, including plants, which release excess water and minerals through their leaves."
                    },
                    {
                      question: "A living being is said to be 'dead' when:",
                      options: ["It stops moving even for a second", "It cannot show the characteristics of life anymore, even when food, air and water are available", "It grows very slowly", "It doesn't reproduce for one day"],
                      answer: 1,
                      explanation: "Death is when a living being is no longer able to exhibit the essential characteristics of life, despite all necessary resources being available."
                    }
                  ]
                },
                {
                  id: "6s-10-2",
                  title: "2. Seed Germination & Growth in Plants",
                  lab: { type: "germination-conditions-sim" },
                  theory: {
                    intro: "A seed sitting in a packet doesn't grow — but plant it under the right conditions, and it sprouts into a seedling. What exactly does a seed need to germinate?",
                    sections: [
                      {
                        heading: "1. Testing Germination Conditions",
                        text: "Four identical pots (A, B, C, D) of bean seeds were kept under different conditions for 15 days:\n• **Pot A:** No water, direct sunlight → seeds do NOT germinate (no water).\n• **Pot B:** Excess water (waterlogged), direct sunlight → seeds do NOT germinate (roots need air, which excess water blocks out).\n• **Pot C:** Moist soil, complete darkness → seeds DO germinate (bean seeds don't need light to germinate).\n• **Pot D:** Moist soil, direct sunlight → seeds DO germinate.\n\n**Conclusion:** Germination needs the right amount of water and air — but NOT necessarily light. (Note: while bean seeds germinate fine in the dark, some other flowering plants like Coleus and Petunia actually NEED light to germinate, while others like Calendula and Zinnia need darkness — so this can vary by plant species.)"
                      },
                      {
                        heading: "2. Why Water and Air Matter",
                        text: "**Water:** Softens the seed's outer covering (the **seed coat**), allowing the tiny **embryo** inside to develop into a plant.\n\n**Air:** Seeds need air, found in the spaces between soil particles, for germination. These same spaces also let roots grow through the soil easily.\n\n**Light/dark:** For most seeds (including bean seeds), light is not essential for germination itself — but sunlight IS needed for the seedling's growth after it germinates."
                      },
                      {
                        heading: "3. Growth Direction: Roots Down, Shoots Up",
                        text: "Germinated seedlings were tested in three setups:\n• **Upright:** Root grows downward, shoot grows upward (as expected).\n• **Inverted (upside down):** The root BENDS and still grows downward; the shoot BENDS and still grows upward.\n• **Light from only one direction:** The shoot grows/bends TOWARD the light, while the root still continues growing straight downward.\n\n**Conclusion:** Shoots always grow upward and bend toward light; roots always grow downward — regardless of how the seed/seedling itself is oriented."
                      },
                      {
                        heading: "4. The Life Cycle of a Plant",
                        text: "A bean plant's life cycle: **Seed** → **Germination** (seedling with root & shoot) → **Leaves appear** → **Flowers appear** → **Fruit appears** (a pod containing new seeds) → the plant eventually dies, but its seeds start the cycle again.\n\nThis complete journey — from seed to plant to new seeds — is called the **life cycle of a plant**."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Let us Design: Testing What Seeds Need to Germinate",
                      objective: "To test how water, air and light affect whether bean seeds germinate.",
                      materials: ["4 identical pots with garden soil", "16 bean seeds (4 per pot)", "Water", "A sunny spot", "A dark spot/cupboard"],
                      steps: [
                        "Sow 4 bean seeds in each of the 4 pots.",
                        "Pot A: Do not water at all. Keep in direct sunlight.",
                        "Pot B: Add excess water regularly so water always sits above the soil. Keep in direct sunlight.",
                        "Pot C: Keep soil just moist (moderate water). Keep in a dark location.",
                        "Pot D: Keep soil just moist (moderate water). Keep in direct sunlight.",
                        "Before observing, predict which pots will show germination.",
                        "Check daily for 7-10 days and record when (and if) each pot's seeds germinate."
                      ],
                      observation: "Pots C and D (moist soil, whether dark or in sunlight) show germination, while Pot A (no water) and Pot B (waterlogged, no air for roots) do not — proving that the right amount of water and air are essential for germination, while light is not strictly necessary for bean seeds."
                    }
                  ],
                  quiz: [
                    {
                      question: "Pot A (no water, sunlight) and Pot B (excess waterlogged soil, sunlight) both fail to germinate bean seeds. What does this tell us?",
                      options: ["Sunlight prevents germination", "Both too little water AND too much water (which blocks air) prevent germination — the right amount of water and air are both needed", "Bean seeds never germinate", "Only Pot A fails; Pot B succeeds"],
                      answer: 1,
                      explanation: "Pot A fails from lack of water; Pot B fails because waterlogging blocks the air seeds need from the soil. Both show that germination needs a BALANCE — adequate but not excessive water, and available air."
                    },
                    {
                      question: "Pot C (moist soil, complete darkness) shows successful germination of bean seeds. What does this show?",
                      options: ["Bean seeds need darkness to germinate and can never germinate in light", "Light is not essential for bean seeds to germinate", "This pot's seeds are somehow different from other pots", "Darkness prevents germination"],
                      answer: 1,
                      explanation: "Since bean seeds germinate successfully in complete darkness (as long as water and air are available), this shows that light is not a necessary condition for bean seed germination, though it varies for other plant species."
                    },
                    {
                      question: "A germinated seedling is placed upside-down (inverted). What happens to its root and shoot over time?",
                      options: ["Both keep growing in their original (now wrong) directions forever", "The root bends and grows downward again; the shoot bends and grows upward again", "The plant dies immediately", "The root becomes a shoot and vice versa"],
                      answer: 1,
                      explanation: "Regardless of the seedling's orientation, the root always bends to grow downward and the shoot always bends to grow upward — a reliable pattern seen in the inverted-plant experiment."
                    },
                    {
                      question: "A seedling receives sunlight from only one direction (through a small hole). What happens to its shoot?",
                      options: ["The shoot grows away from the light", "The shoot grows/bends toward the direction of the light, while the root still grows straight down", "The shoot stops growing completely", "Nothing changes compared to all-direction light"],
                      answer: 1,
                      explanation: "When light comes from only one direction, the shoot bends and grows toward that light source, while the root is unaffected and continues growing straight downward."
                    },
                    {
                      question: "What is the correct order of stages in a bean plant's life cycle?",
                      options: ["Flower → Seed → Fruit → Germination", "Seed → Germination → Leaves → Flowers → Fruit (with new seeds)", "Fruit → Flower → Seed → Germination → Leaves", "Germination → Seed → Fruit → Flower"],
                      answer: 1,
                      explanation: "The life cycle proceeds: seed germinates into a seedling, which grows leaves, then flowers, then fruit containing new seeds — and those seeds can start the cycle again."
                    }
                  ]
                },
                {
                  id: "6s-10-3",
                  title: "3. Life Cycles of Animals: Mosquito & Frog",
                  lab: { type: "animal-life-cycle-sim" },
                  theory: {
                    intro: "Just like plants, animals go through dramatic changes during their lives — a mosquito's egg looks nothing like the buzzing adult it becomes, and a frog spends its early life looking (and swimming) like a fish!",
                    sections: [
                      {
                        heading: "1. Life Cycle of a Mosquito",
                        text: "Mosquitoes pass through **four stages**: **Egg → Larva → Pupa → Adult**.\n\n• Eggs are laid directly on or near stagnant water.\n• The egg develops into a **larva** — a worm-like creature living in water.\n• The larva grows into a **pupa** — a distinct stage, differently shaped from the larva.\n• The pupa transforms into an **adult mosquito**, which rests briefly on the water surface before flying away (adult mosquitoes survive 10-15 days).\n\n**Why avoid stagnant water?** Mosquito larvae and pupae live in water but need air to breathe — they repeatedly come to the surface for air. This is why removing stagnant water (in coolers, pots, containers) prevents mosquito breeding. (A thin layer of kerosene oil on water works similarly — it blocks larvae/pupae from reaching air, killing them.)\n\nThe silk moth follows a similar 4-stage cycle (egg→larva→pupa→adult) — its larvae spin the very fibres used to make silk fabric."
                      },
                      {
                        heading: "2. Life Cycle of a Frog",
                        text: "A frog's life cycle also has **four main stages**: **Egg (spawn) → Tadpole → Froglet → Adult frog**.\n\n• Frog eggs are laid in a jelly-like cluster called **spawn**, found floating near pond edges.\n• The spawn develops into a **tadpole** — first with a tail and no legs, swimming like a fish; later, hind legs appear while the tail remains.\n• The tadpole becomes a **froglet** — it starts developing legs fully, loses much of its tail, and begins spending time on land as well as water.\n• Finally, it becomes a fully developed **adult frog** — living both in water and on land, with strong legs for jumping, and no tail.\n\nThis shows how a habitat can change across life stages: fully aquatic (egg, tadpole) to both aquatic and terrestrial (froglet, adult)."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Let us Analyse: Sequencing Life Cycle Stages",
                      objective: "To determine the correct order of life cycle stages through careful observation, without relying on memorised facts alone.",
                      materials: ["A container of pond/puddle water containing mosquito larvae and pupae (collected safely, with adult supervision)", "Two separate observation containers", "Notebook"],
                      steps: [
                        "Separate a few larvae and pupae into two different containers with the same water.",
                        "Observe both containers daily without disturbing them.",
                        "Note which creatures change into a different form first, and what that new form looks like.",
                        "If larvae change into pupae, that confirms larva comes before pupa in the sequence (not the reverse).",
                        "Keep watching until an adult mosquito appears — note which container/stage it emerged from.",
                        "Record the full sequence you observed: egg → ? → ? → adult."
                      ],
                      observation: "Careful, patient observation (not just memorising the answer) shows that larvae transform into pupae, and pupae later transform into adult mosquitoes — confirming the sequence egg → larva → pupa → adult."
                    }
                  ],
                  quiz: [
                    {
                      question: "What are the four stages of a mosquito's life cycle, in the correct order?",
                      options: ["Larva → Egg → Adult → Pupa", "Egg → Larva → Pupa → Adult", "Pupa → Larva → Egg → Adult", "Adult → Egg → Larva → Pupa"],
                      answer: 1,
                      explanation: "A mosquito's life cycle proceeds: egg → larva → pupa → adult. The adult mosquito then lays new eggs on or near water, continuing the cycle."
                    },
                    {
                      question: "Why is removing stagnant water an effective way to prevent mosquito breeding?",
                      options: ["Mosquitoes dislike the smell of stagnant water", "Mosquito eggs, larvae and pupae all develop in water, so removing standing water removes their breeding grounds", "Stagnant water makes mosquitoes fly away", "It has no real effect on mosquito populations"],
                      answer: 1,
                      explanation: "Mosquitoes lay eggs on or near water, and both larvae and pupae live in water — removing stagnant water removes the environment these stages need to survive and develop."
                    },
                    {
                      question: "Why do mosquito larvae and pupae repeatedly rise to the surface of the water?",
                      options: ["To lay eggs", "They live in water but need air to respire (breathe)", "To escape from fish", "They are searching for food only"],
                      answer: 1,
                      explanation: "Even though larvae and pupae live in water, they still need to breathe air, so they must come to the surface repeatedly — which is why a layer of kerosene oil (blocking their access to air) kills them."
                    },
                    {
                      question: "What is 'spawn' in the context of a frog's life cycle?",
                      options: ["The adult frog", "A jelly-like cluster of frog eggs found near pond edges", "The tadpole's tail", "A type of pond plant"],
                      answer: 1,
                      explanation: "Spawn is the jelly-like cluster of eggs laid by a frog, often seen floating at the edges of ponds or attached to water plants — the very first stage of the frog life cycle."
                    },
                    {
                      question: "How does a frog's habitat change across its life cycle stages?",
                      options: ["It stays exactly the same at every stage", "Early stages (egg, tadpole) are fully aquatic; later stages (froglet, adult) live both in water and on land", "It starts on land and moves to water only as an adult", "Frogs never live in water at any stage"],
                      answer: 1,
                      explanation: "Frog eggs and tadpoles live entirely in water, but as tadpoles become froglets and then adults, they gradually gain the ability to live on land as well as in water."
                    }
                  ]
                }
              ]
            },
            {
              id: "6s-11",
              title: "Nature's Treasures",
              topics: [
                {
                  id: "6s-11-1",
                  title: "1. Air & Water: Essential Treasures",
                  theory: {
                    intro: "Bhoomi and Surya's visit to their Ajji's village near the Western Ghats reveals how much we depend on nature's treasures — fresh air, fertile soil, sunlight, and water — for survival and comfort. We are all part of nature.",
                    sections: [
                      {
                        heading: "1. Air: Composition & Wind",
                        text: "We can survive without food or water for a few days, but not without oxygen for even a few minutes — this shows how essential air is.\n\n**Composition of air (by volume):**\n• Nitrogen: 78%\n• Oxygen: 21%\n• Argon, carbon dioxide and other gases: 1%\n\n**Wind** is moving air — sometimes blowing fast (storms), sometimes gently (breeze). A **firki** (paper pinwheel) rotates when wind blows on it. A **windmill** works the same way, at a larger scale — used to run flour mills, pull up water from wells, or generate electricity. India has several windmill farms, including Muppandal (Tamil Nadu), Jaisalmer (Rajasthan), and Brahmanvel (Maharashtra)."
                      },
                      {
                        heading: "2. Water: Uses, Scarcity & Conservation",
                        text: "Water is used for drinking, cooking, bathing, washing, growing crops, and industry. Water covers about two-thirds of Earth's surface, but MOST of it (oceans and seas) is **saline** (salty) — unfit for most uses. Usable **freshwater** is found in ice sheets, snow, rivers, lakes, and underground — but only a small fraction of it is easily accessible.\n\n**Conserving water:** Turning off taps when not in use, fixing leaks, recycling water, and **rainwater harvesting** (collecting and storing rainwater for later use) all help. Traditional Indian stepwells — called **Bawadi** (Rajasthan) or **Vav** (Gujarat) — are an age-old water harvesting system, storing both rainwater and water seeping in from nearby lakes and rivers.\n\nPolluting water (dumping waste/trash into rivers and lakes) makes it unfit for consumption — we must conserve water AND keep it clean. World Water Day is observed on 22nd March every year."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Let us Find Out: Where Is Water Wasted at Home?",
                      objective: "To identify everyday activities where water is wasted, and find ways to reduce that wastage.",
                      materials: ["Notebook", "Pen"],
                      steps: [
                        "List daily activities that use water: hand washing, washing clothes, washing utensils, taking a shower, cooking, gardening, brushing teeth.",
                        "For each activity, observe and note HOW water might be wasted (e.g., leaving the tap running).",
                        "For each, suggest one specific way to reduce the wastage.",
                        "Discuss with your family: which of these changes could you start doing today?",
                        "Conclude: what is the single biggest source of water wastage in your home?"
                      ],
                      observation: "Simple habits — like turning off the tap while brushing teeth or soaping hands, and fixing leaking taps — can save a surprisingly large amount of water every single day."
                    }
                  ],
                  quiz: [
                    {
                      question: "Out of 100 parts of air, approximately how many parts are oxygen?",
                      options: ["78", "21", "1", "50"],
                      answer: 1,
                      explanation: "Air is approximately 78% nitrogen, 21% oxygen, and 1% argon, carbon dioxide and other gases."
                    },
                    {
                      question: "Why can we survive for days without food, but only minutes without air?",
                      options: ["Air has no real importance to the body", "Our body needs a continuous supply of oxygen from the air to function; food can be stored and used gradually", "Food is more important than air", "This is not actually true"],
                      answer: 1,
                      explanation: "Oxygen is needed continuously by the body's cells for their functions, and cannot be stored the way food energy can — so a lack of oxygen for even a few minutes is critical."
                    },
                    {
                      question: "Most of Earth's water is found in oceans and seas. Why can't we use this water directly for drinking or farming?",
                      options: ["It is too cold", "It is saline (salty), which is unfit for domestic, agricultural and industrial use", "It is illegal to use ocean water", "Ocean water has no water in it at all"],
                      answer: 1,
                      explanation: "Ocean and sea water is saline (salty). We need freshwater — found in rivers, lakes, ice, and underground — for drinking, farming and most other uses."
                    },
                    {
                      question: "What is 'rainwater harvesting'?",
                      options: ["Throwing rainwater away quickly", "Collecting and storing rainwater for later use, a practice including traditional stepwells like Bawadi and Vav", "A method of causing rain", "Using only ocean water"],
                      answer: 1,
                      explanation: "Rainwater harvesting means collecting and storing rainwater (in tanks, or traditional stepwells like Bawadi in Rajasthan or Vav in Gujarat) so it can be used later, helping conserve water."
                    },
                    {
                      question: "A firki (paper pinwheel) spins when wind blows on it. What is the larger-scale version of this idea, used to generate electricity?",
                      options: ["A solar panel", "A windmill", "A water tank", "A stepwell"],
                      answer: 1,
                      explanation: "A windmill works on the same principle as a firki — wind rotates its wings/blades — but at a much larger scale, used to run flour mills, pull water from wells, or generate electricity."
                    }
                  ]
                },
                {
                  id: "6s-11-2",
                  title: "2. Sun, Forests, Soil & Rocks",
                  theory: {
                    intro: "The Sun, forests, soil and rocks might seem like separate topics, but they're deeply connected — the Sun powers nearly all life, forests protect and enrich soil, and soil itself forms from rocks broken down over immense stretches of time.",
                    sections: [
                      {
                        heading: "1. Energy from the Sun",
                        text: "The Sun is the main source of energy on Earth. Plants use sunlight to make food; animals eat plants (or other animals) and get energy that ultimately traces back to the Sun. (A cow grazing in the sun isn't directly absorbing solar energy — it's getting energy from the grass, which itself needed sunlight to grow.)\n\nWe use solar energy directly via **solar panels** (convert sunlight to electricity), **solar cookers**, and **solar water heaters**. Sun's heat is also used simply to dry clothes, grains, and foods like chillies and mangoes."
                      },
                      {
                        heading: "2. Forests",
                        text: "Forests are large areas with dense growth of plants — a natural home providing food and shelter to countless wild animals, birds and insects. Every species depends on others for survival (biodiversity ensures food for all).\n\nForest cover has been decreasing due to large-scale tree-cutting. Since regrowing a forest takes many years, we must use forests responsibly. **Van Mahotsav** is a week-long tree-planting festival held every July. The **Chipko movement** (started in Uttarakhand in the early 1970s) saw local women hug trees to physically protect them from being cut down.\n\nFallen leaves decay and enrich soil with nutrients — new plants use this enriched soil to grow. This natural recycling is part of why forests keep soil healthy."
                      },
                      {
                        heading: "3. Soil, Rocks and Minerals",
                        text: "**Soil** forms from the disintegration (breaking apart) of rocks by the Sun, water and living organisms — over thousands of years. Different soils suit different purposes (growing specific plants, or making bricks). Earthworms naturally help loosen and turn the soil.\n\n**Rocks** are used in construction (houses, roads, dams), roofing (slate), and bricks (laterite). Humans have made tools from rocks (hand axes, arrowheads) for thousands of years. It takes thousands to millions of years for rocks to form — so we must use them responsibly.\n\n**Minerals** are what rocks are made of. Important metals — aluminium, gold, copper, iron — are extracted from minerals, and used in everything from jewellery to airplanes to mobile phones (which contain about a dozen different minerals, including gold, silver, copper and cobalt)."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Let us Investigate: Comparing Soil Samples",
                      objective: "To observe differences between soil samples collected from different locations.",
                      materials: ["Soil samples from 3-4 different locations (farm, garden, roadside, forest — with care/adult supervision)", "A magnifying lens (if available)", "Notebook"],
                      steps: [
                        "Before observing, guess what each soil sample might contain.",
                        "Observe each sample with your naked eye — note its colour and texture (touch each sample; wash hands afterward).",
                        "If you have a magnifying lens, observe each sample again more closely.",
                        "Compare your guesses to your actual observations.",
                        "Compare the different soil samples with each other — are they all the same colour and texture?"
                      ],
                      observation: "Soil samples from different locations usually differ in colour, texture, and the materials found in them (small pebbles, roots, tiny organisms) — because soil composition depends on the rocks it formed from and the organic matter present at that location."
                    }
                  ],
                  quiz: [
                    {
                      question: "A cow is grazing on grass in the sunlight. Where does the cow ultimately get its energy from?",
                      options: ["Directly from the Sun's rays hitting its body", "From the grass, which itself needed sunlight to grow and make food", "From the soil only", "Cows don't need energy"],
                      answer: 1,
                      explanation: "The cow eats grass, and the grass made its food using sunlight (through photosynthesis). So the cow's energy traces back to the Sun indirectly, through the grass — not by directly absorbing sunlight itself."
                    },
                    {
                      question: "What was the Chipko movement, and how did it protect forests?",
                      options: ["A government logging program", "A movement (starting in Uttarakhand in the early 1970s) where local women hugged trees to physically prevent them from being cut down", "A type of solar panel", "A festival for planting new trees only"],
                      answer: 1,
                      explanation: "The Chipko movement was a grassroots protection effort where people, especially local women, hugged trees to stop loggers from felling them — 'chipko' means 'to stick/cling' in Hindi."
                    },
                    {
                      question: "How is soil formed?",
                      options: ["It falls from the sky", "By the disintegration (breaking apart) of rocks through the action of the Sun, water and living organisms over thousands of years", "It is manufactured in factories", "Soil has always existed unchanged"],
                      answer: 1,
                      explanation: "Soil forms gradually as rocks break down due to weathering by sun, water, and living organisms — a process that takes an extremely long time."
                    },
                    {
                      question: "What are rocks made up of, and what important materials can be extracted from them?",
                      options: ["Rocks are made of water; nothing can be extracted", "Rocks are made of minerals, from which metals like aluminium, gold, copper and iron are extracted", "Rocks are made of plastic", "Rocks contain no useful materials"],
                      answer: 1,
                      explanation: "Rocks are composed of minerals. Important metals such as aluminium, gold, copper, and iron are extracted from these minerals for use in countless products, from jewellery to electronics."
                    },
                    {
                      question: "Why do fallen leaves in a forest matter for soil health?",
                      options: ["They have no effect on soil", "They decay and enrich the soil with nutrients that new plants can use to grow — a form of natural recycling", "They make the soil unusable", "They turn into rocks"],
                      answer: 1,
                      explanation: "Decaying leaves add nutrients back into the soil, which new plants then use to grow — this natural recycling process helps keep forest soil fertile."
                    }
                  ]
                },
                {
                  id: "6s-11-3",
                  title: "3. Fossil Fuels & Renewable vs Non-renewable Resources",
                  lab: { type: "resource-sorter-sim" },
                  theory: {
                    intro: "Not all of nature's treasures are equal in one important way: some can be renewed naturally within our lifetimes, while others took millions of years to form and, once used up, are gone for good.",
                    sections: [
                      {
                        heading: "1. Fossil Fuels",
                        text: "**Petroleum, natural gas, and coal** are together called **fossil fuels**. They formed from the remains of microorganisms and plants buried deep inside the Earth over millions of years.\n\n• **Petroleum** gives us petrol, diesel, and kerosene — the most common vehicle fuels.\n• **Natural gas** is used for cooking, generating electricity, and (as CNG) as a cleaner vehicle fuel.\n• **Coal** is mainly used to produce electricity.\n\nBurning fossil fuels produces smoke and carbon dioxide, causing air pollution. Since fossil fuels exist in limited quantities and take millions of years to form, we risk running out if we don't conserve them — e.g., by walking/cycling for nearby trips or using public transport."
                      },
                      {
                        heading: "2. Natural Resources vs Human-Made Resources",
                        text: "Things we get directly from nature — air, water, sunlight, forests, soil, rocks, minerals, fossil fuels — are called **natural resources**. Things people build FROM natural resources (electric bulbs, furniture, solar panels, bicycles) are called **human-made resources**."
                      },
                      {
                        heading: "3. Renewable vs Non-renewable Resources",
                        text: "**Renewable resources:** Get renewed, replenished, or restored by nature within a reasonable amount of time. Examples: air, water, forests (a fallen fruit's seeds grow into new trees within years, and air/water cycle continuously).\n\n**Non-renewable resources:** Take an extremely long time to form (often millions of years), exist in limited quantities, and get exhausted once used — they are NOT replenished within a reasonable time. Examples: minerals, soil (soil formation itself takes thousands of years), rocks, coal, petroleum, and natural gas.\n\n**Why this matters:** We can use renewable resources more freely (though still wisely), but non-renewable resources must be conserved carefully since using them up means they're gone for a very long time — possibly forever, from a human timescale."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Let us Conduct a Survey: Vehicles and Their Fuels",
                      objective: "To identify the different types of fuels used by vehicles in your neighbourhood, and connect this to fossil fuel use.",
                      materials: ["Notebook", "Pen", "A safe spot to observe passing vehicles"],
                      steps: [
                        "Observe vehicles in your neighbourhood over a short period.",
                        "For each vehicle, note its type (car, bus, two-wheeler, auto-rickshaw, etc.) and, if you can find out, what fuel it uses (petrol, diesel, CNG, electric).",
                        "Tally which fuel type is most common in your survey.",
                        "Discuss: which of these fuels are fossil fuels? Which are cleaner alternatives?",
                        "Suggest one way you or your family could reduce fossil fuel use for short trips."
                      ],
                      observation: "Petrol and diesel (both from petroleum, a fossil fuel) are usually the most common vehicle fuels, though CNG and electric vehicles are increasingly common cleaner alternatives."
                    }
                  ],
                  quiz: [
                    {
                      question: "Petroleum, natural gas and coal are together known as:",
                      options: ["Renewable resources", "Fossil fuels", "Human-made resources", "Minerals only"],
                      answer: 1,
                      explanation: "Petroleum, natural gas, and coal are collectively called fossil fuels — formed over millions of years from the buried remains of ancient microorganisms and plants."
                    },
                    {
                      question: "Why must we conserve fossil fuels, even though they are extremely useful?",
                      options: ["They are actually harmful and should never be used", "They exist in limited quantities and take millions of years to form, so they can't be replenished once used up", "They are replenished every year automatically", "There is no real need to conserve them"],
                      answer: 1,
                      explanation: "Since fossil fuels take millions of years to form and exist in limited quantities, using them faster than they can ever be replenished means we risk running out — hence the need for conservation."
                    },
                    {
                      question: "Which of these is classified as a RENEWABLE natural resource?",
                      options: ["Coal", "Petroleum", "Forests (which regrow and regenerate over time)", "Minerals"],
                      answer: 2,
                      explanation: "Forests are renewable — they can regrow and regenerate within a reasonable time (though we must still manage them responsibly). Coal, petroleum, and minerals are non-renewable, taking millions of years to form."
                    },
                    {
                      question: "Why is soil classified as a NON-renewable resource, even though it seems to be all around us?",
                      options: ["Soil doesn't really exist", "Soil formation (from rock disintegration) takes thousands of years, so it isn't replenished within a reasonable human timeframe once degraded or lost", "Soil is actually renewable and regenerates instantly", "Soil is a human-made resource"],
                      answer: 1,
                      explanation: "Even though soil seems abundant, it forms extremely slowly (thousands of years from rock breakdown), so meaningful amounts cannot be 'renewed' on a human timescale once lost — making it non-renewable."
                    },
                    {
                      question: "A bicycle is made using metal, rubber and other materials extracted from nature. How would you classify a finished bicycle?",
                      options: ["A natural resource", "A human-made resource, created from natural resources", "A fossil fuel", "A renewable resource only"],
                      answer: 1,
                      explanation: "The bicycle itself is a human-made resource — built by people using natural resources (metals, rubber, etc.) as raw materials."
                    }
                  ]
                }
              ]
            },
            {
              id: "6s-12",
              title: "Beyond Earth",
              topics: [
                {
                  id: "6s-12-1",
                  title: "1. Stars, Constellations & the Night Sky",
                  lab: { type: "constellation-viewer-sim" },
                  theory: {
                    intro: "On a clear night, away from city lights, the sky reveals thousands of stars. Since ancient times, people have noticed that certain groups of stars seem to form patterns — and used these patterns to tell stories, find directions, and mark the seasons.",
                    sections: [
                      {
                        heading: "What Are Stars?",
                        text: "Stars are objects that shine with their own light. Some stars appear bright and others appear dim, depending on how big they are, how hot they are, and how far away they are from us."
                      },
                      {
                        heading: "Constellations: Patterns in the Sky",
                        text: "Long ago, when watching the stars was a favourite pastime, ancient people noticed that some groups of stars seemed to form patterns resembling animals, objects, or characters from their stories. Different cultures gave these patterns different names based on their own stories. These imaginary shapes helped people recognise stars in the sky.\n\nRecognising star patterns was also a useful skill for navigation — before the invention of the magnetic compass, sailors and travellers used star patterns to find directions at sea or on land. It is still used as a backup method in emergencies today.\n\nIn earlier times, a group of stars forming a pattern was called a constellation. Today, the term constellation refers to a defined region of the sky (which usually includes such a pattern). Since different cultures marked constellation boundaries differently, the International Astronomical Union (IAU) officially defined 88 constellations in the early twentieth century, dividing the entire sky into 88 regions."
                      },
                      {
                        heading: "Orion, Canis Major and Taurus",
                        text: "The constellation Orion is often pictured as a hunter, with three stars in a row representing his belt — the easiest way to identify it. Orion is imagined to be followed by his dog, the constellation Canis Major, while battling the bull, Taurus. Canis Major contains Sirius, the brightest star in the entire night sky.\n\nIn Indian astronomy, the term nakṣhatra denotes a star or group of stars — for example, Ārdrā (the star Betelgeuse in Orion) and Kṛittikā (the star cluster Pleiades in Taurus). Aldebaran, another star in Taurus, is known as Rohiṇī."
                      },
                      {
                        heading: "The Big Dipper, Little Dipper and the Pole Star",
                        text: "Two well-known patterns are the Big Dipper and the Little Dipper. The Big Dipper lies in the constellation Ursa Major (called Saptaṛiṣhi in India), while the Little Dipper lies in Ursa Minor. The Pole Star (Polaris, or Dhruva tārā in India) is part of the Little Dipper.\n\nThe Pole Star appears to stay almost stationary in the North direction all night, which makes it very useful for locating North in the Northern Hemisphere — though it cannot be seen from the Southern Hemisphere. Many communities across India have their own regional stories about these stars: some tribes of Central India see the four stars of the Big Dipper's rectangle as a 'grandmother's cot' being carried off by three thieves (the remaining three stars), while fishermen along the Konkan coast imagine the same stars as a boat."
                      },
                      {
                        heading: "Night Sky Watching",
                        text: "The night sky is best viewed from open, dark areas, away from lights, tall buildings and trees. In big cities, light pollution — the presence of excessive artificial light at night — along with smoke and dust, makes it hard to see more than a few stars. Light pollution is increasing sharply worldwide, reducing our ability to study the night sky, which is why some regions have set up protected 'dark sky reserves' for research.\n\nApps like Sky Map and Stellarium can help identify stars, constellations and planets visible from your location on any given night. Always go night-sky watching with an adult, and allow about half an hour for your eyes to adjust to the darkness before you start observing."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Activity 12.2 & 12.3: Let Us Try to Locate",
                      objective: "To locate the Big Dipper, the Pole Star, and the constellation Orion with its bright star Sirius in the real night sky.",
                      materials: ["A clear night sky (or a sky-mapping app)", "An adult companion", "A notebook to record observations"],
                      steps: [
                        "During summer, around 9 p.m., look towards the northern part of the sky and identify the Big Dipper.",
                        "Once you find the Big Dipper, locate the two stars at the end of its 'cup'. Imagine a straight line through them, continuing towards the north.",
                        "At about five times the distance between those two stars, this imaginary line leads to a star that is not very bright — this is the Pole Star.",
                        "Between December and April, after sunset, look for three bright stars in a short straight line — this is the belt of Orion, the easiest way to spot the constellation.",
                        "Once you find Orion, imagine a line through its three belt stars and follow it towards the east — this line leads to Sirius, the brightest star in the night sky."
                      ],
                      observation: "The Pole Star stays in almost the same spot in the sky throughout the night, while Orion and Sirius are visible only during certain months and shift position as the night progresses."
                    }
                  ],
                  quiz: [
                    {
                      question: "What makes stars visible to us in the night sky?",
                      options: ["They reflect sunlight, like planets do", "They shine with their own light", "They reflect light from the Moon", "They are lit up by street lights on Earth"],
                      answer: 1,
                      explanation: "Unlike planets and moons (which shine by reflecting sunlight), stars shine with their own light."
                    },
                    {
                      question: "Which constellation contains Sirius, the brightest star in the night sky?",
                      options: ["Orion", "Taurus", "Canis Major", "Ursa Minor"],
                      answer: 2,
                      explanation: "Sirius lies in the constellation Canis Major, which is imagined as Orion's hunting dog."
                    },
                    {
                      question: "Why is the Pole Star especially useful for finding direction at night?",
                      options: ["It is the brightest star in the sky", "It appears nearly stationary in the North direction throughout the night", "It only appears in constellations near the equator", "It changes colour depending on the season"],
                      answer: 1,
                      explanation: "The Pole Star appears to stay almost fixed in the North, unlike other stars which appear to move across the sky — making it a reliable guide for locating North in the Northern Hemisphere."
                    },
                    {
                      question: "What is light pollution, and how does it affect stargazing?",
                      options: ["Pollution caused by sunlight during the day", "Excessive artificial light at night, which reduces the number of stars visible in the sky", "A type of pollution that changes the colour of stars", "Light emitted by comets that blocks starlight"],
                      answer: 1,
                      explanation: "Light pollution is the presence of excessive artificial light at night. Along with smoke and dust, it is why fewer stars are visible from big cities than from villages or dark-sky areas."
                    },
                    {
                      question: "In Indian astronomy, Kṛittikā refers to which star pattern from Fig. 12.3?",
                      options: ["The star Sirius in Canis Major", "The star cluster Pleiades in Taurus", "The Pole Star in Ursa Minor", "The three belt stars of Orion"],
                      answer: 1,
                      explanation: "Kṛittikā is the Indian name for the star cluster Pleiades, found within the constellation Taurus."
                    }
                  ]
                },
                {
                  id: "6s-12-2",
                  title: "2. Our Solar System: The Sun and Planets",
                  lab: { type: "solar-system-explorer-sim" },
                  theory: {
                    intro: "The Sun, the planets, and many smaller objects together make up our Solar System. Most of these objects revolve around the Sun, which is by far the largest and most important source of energy among them.",
                    sections: [
                      {
                        heading: "The Sun — Our Nearest Star",
                        text: "The Sun is a star — the one closest to us. It is an extremely hot, spherical ball of gases that gives out a huge amount of energy, which is why it glows so brightly. The Sun produces the heat and light that make it the main source of energy on Earth.\n\nThe Sun is about 100 times bigger than the Earth in diameter, yet it looks small because it is so far away — about 150 million km, a distance also called one astronomical unit (au). In India, the Sun has long been worshipped as Sūrya. Sunlight provides the temperature that makes life possible, helps plants grow, and drives climate, seasons, weather, and the water cycle — all essential for sustaining life on Earth."
                      },
                      {
                        heading: "Revolution and Rotation",
                        text: "A planet is a large, nearly spherical object that revolves around the Sun. Our Earth is a planet — it takes nearly one year to complete one revolution around the Sun. While revolving around the Sun, the Earth is also rotating about its own axis, completing one full rotation in about 24 hours, which we call a day."
                      },
                      {
                        heading: "The Eight Planets",
                        text: "In order of increasing distance from the Sun, the eight planets are: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune. The inner four planets — Mercury, Venus, Earth and Mars — are smaller, with solid, rocky surfaces. The outer four — Jupiter, Saturn, Uranus and Neptune — are much larger, made mostly of gas and ice, and have large, flat, ring-like structures of dust and rocky material around them.\n\nFrom ancient times, India has used its own names for the planets visible to the naked eye: Budha (Mercury), Śhukra (Venus), Pṛithvī (Earth), Mangala (Mars), Bṛihaspati or Guru (Jupiter), and Śhani (Saturn)."
                      },
                      {
                        heading: "Special Planet Facts",
                        text: "Venus shines brightly at dawn and dusk and is commonly called the Morning Star or Evening Star, even though it is not actually a star — it is the brightest object in our sky after the Sun and the Moon. Mars is called the Red Planet because its soil is reddish in colour. Earth, much of whose surface is covered in water, appears blue from space and is therefore called the Blue Planet.\n\nPlanets generally get colder the farther they are from the Sun, but an atmosphere can trap heat and change this — which is why Venus is hotter than Mercury, even though Venus is farther from the Sun."
                      },
                      {
                        heading: "Pluto and Dwarf Planets",
                        text: "Beyond Neptune lies an object called Pluto, which also revolves around the Sun and is smaller than Earth's Moon. When discovered, Pluto was called a planet. But after more similar small objects were found, the International Astronomical Union (IAU) redefined the requirements for being called a 'planet' in 2006. Under this new definition, Pluto and similar smaller objects are now called dwarf planets."
                      },
                      {
                        heading: "Spotting Planets in the Sky",
                        text: "Venus is the easiest planet to identify — after the Sun and Moon, it is the brightest object in the sky. Mercury, Mars, Jupiter and Saturn can also be seen with the naked eye, appearing as shining dots much like stars. One way to tell them apart: stars appear to twinkle a lot, while planets do not. Binoculars and telescopes let us see these and other dimmer objects brighter, larger, and in more detail."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Activity 12.4: Let Us Try to Identify",
                      objective: "To locate the planet Venus in the sky and practise distinguishing planets from stars.",
                      materials: ["A sky-mapping app (like Sky Map or Stellarium)", "A clear view of the eastern or western horizon", "A notebook to record observations"],
                      steps: [
                        "With the help of an app, find out whether Venus can currently be seen at dawn or at dusk.",
                        "If viewing at dawn, look for Venus near the Eastern direction before sunrise.",
                        "If viewing at dusk, look for Venus near the Western direction just after sunset.",
                        "Watch the object you believe is Venus for a few minutes — does it twinkle like the surrounding stars, or does it shine with a steady light?"
                      ],
                      observation: "Venus shines steadily without twinkling, which is one of the ways we can tell it apart from the true stars around it."
                    }
                  ],
                  quiz: [
                    {
                      question: "What is the correct order of the planets, starting from the one closest to the Sun?",
                      options: ["Venus, Mercury, Earth, Mars, Jupiter, Saturn, Uranus, Neptune", "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune", "Mercury, Earth, Venus, Mars, Saturn, Jupiter, Neptune, Uranus", "Mercury, Venus, Mars, Earth, Jupiter, Saturn, Neptune, Uranus"],
                      answer: 1,
                      explanation: "In order of increasing distance from the Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune."
                    },
                    {
                      question: "Why does Mars appear reddish in colour, earning it the nickname 'the Red Planet'?",
                      options: ["It is closest to the Sun and gets scorched", "Its soil is reddish in colour", "It is covered in red-coloured ice", "It reflects red light from Jupiter"],
                      answer: 1,
                      explanation: "Mars looks red because the soil covering its surface is reddish in colour."
                    },
                    {
                      question: "Why is Earth sometimes called the 'Blue Planet'?",
                      options: ["Because its atmosphere is blue-coloured gas", "Because a large portion of its surface is covered with water, making it appear blue from space", "Because it is the coldest planet", "Because it is farthest from the Sun"],
                      answer: 1,
                      explanation: "Earth's surface is largely covered by water, which makes it appear blue when viewed from space."
                    },
                    {
                      question: "Venus is farther from the Sun than Mercury, yet Venus is hotter. What explains this?",
                      options: ["Venus is actually closer to the Sun than Mercury", "Venus's atmosphere traps heat, significantly raising its temperature", "Mercury has a thicker atmosphere that cools it down", "Venus produces its own heat like a star"],
                      answer: 1,
                      explanation: "The presence of an atmosphere can trap heat and significantly change a planet's temperature — this is why Venus is hotter than Mercury despite being farther from the Sun."
                    },
                    {
                      question: "What happened to Pluto's classification in 2006?",
                      options: ["It was discovered for the first time", "The IAU redefined what counts as a 'planet', and Pluto was reclassified as a dwarf planet", "It was found to be a moon of Neptune", "It was renamed as the ninth planet"],
                      answer: 1,
                      explanation: "In 2006, after finding more small objects similar to Pluto, the International Astronomical Union (IAU) redefined the criteria for a 'planet' — under the new definition, Pluto and similar objects became known as dwarf planets."
                    }
                  ]
                },
                {
                  id: "6s-12-3",
                  title: "3. Moons, Asteroids, Comets & the Milky Way",
                  theory: {
                    intro: "Besides the Sun and the eight planets, our Solar System is home to many other objects — moons circling planets, rocky asteroids, icy comets with long tails — and our entire Solar System is just a tiny part of a vast galaxy called the Milky Way.",
                    sections: [
                      {
                        heading: "Natural Satellites (Moons)",
                        text: "Objects that move around planets are commonly called satellites; moons are the natural satellites of planets. Earth has one Moon, Mars has two moons, while Jupiter, Saturn, Uranus and Neptune each have a large number of moons. In general, any object that moves around a much larger object can be called a satellite — in that broader sense, Earth itself can be considered a satellite of the Sun."
                      },
                      {
                        heading: "Earth's Moon",
                        text: "The Moon, Earth's natural satellite, is our nearest neighbour in space, about 3,84,000 km away. It takes about 27 days to complete one revolution around the Earth, and is roughly a quarter the size of Earth in diameter. Unlike Earth, the Moon has hardly any atmosphere.\n\nThe Moon's surface shows circular, bowl-like structures called craters, formed mostly by asteroids or rocks from space striking its surface. Since the Moon has no atmosphere, water or life, these craters remain unchanged on its surface for a very long time."
                      },
                      {
                        heading: "India and the Moon: The Chandrayaan Missions",
                        text: "India has launched three Chandrayaan missions to study the Moon. Chandrayaan-1 was launched in 2008, and Chandrayaan-2 in 2019. Chandrayaan-3, launched in July 2023, saw its Vikram lander carrying the Pragyan rover soft-land successfully near the Moon's south pole on 23 August 2023 — making India the first country in the world to achieve a landing near this little-explored region. To mark this achievement, the Government of India declared 23 August as 'National Space Day'. A fourth mission, Chandrayaan-4, is being planned, aiming to bring back soil and rock samples from the Moon."
                      },
                      {
                        heading: "Asteroids",
                        text: "Many small, rocky, irregularly shaped objects called asteroids revolve around the Sun, mostly in a region between Mars and Jupiter known as the asteroid belt. Asteroids range in size from about 10 metres to about 500 km, and occasionally some pass very close to the Earth."
                      },
                      {
                        heading: "Comets",
                        text: "Comets are visitors from the outer regions of the Solar System, made up of dust, gases, rocks and ice, with distinctive long tails. As a comet approaches the Sun, its frozen material starts to evaporate, and this evaporating material forms its tail. Comets appear dim and become invisible to the naked eye as they move away from the Sun.\n\nOne famous example, Halley's Comet, reappears roughly every 76 years — it was last seen in 1986. In Sanskrit, a comet is called Dhūmaketu; various tribal languages in India call it Pucchya-Taro ('star with a tail') or Zendya-Taro ('star like a flag'). Comets were once feared as omens of bad luck, but we now understand them simply as icy-rocky visitors passing close to the Sun."
                      },
                      {
                        heading: "The Milky Way Galaxy and the Universe",
                        text: "On a moonless night, viewed from a dark location, one can see a faint band of light stretching across the sky — this is our home galaxy, the Milky Way Galaxy, or Ākāśha Gangā. A galaxy contains millions to billions of stars, and our entire Solar System is just one part of the Milky Way Galaxy.\n\nBeyond the Milky Way lie countless other galaxies, together forming what we call the Universe. Scientists searching for life beyond Earth look mainly at exoplanets — planets discovered revolving around other stars in our galaxy. So far, no evidence of life elsewhere has been found, but the search continues."
                      }
                    ]
                  },
                  quiz: [
                    {
                      question: "About how long does the Moon take to complete one revolution around the Earth?",
                      options: ["24 hours", "About 27 days", "About 1 year", "76 years"],
                      answer: 1,
                      explanation: "The Moon takes about 27 days to complete one revolution around the Earth."
                    },
                    {
                      question: "What historic achievement did India's Chandrayaan-3 mission accomplish on 23 August 2023?",
                      options: ["It was the first mission ever to reach the Moon", "Its Vikram lander became the first in the world to soft-land near the Moon's south pole", "It brought back Moon rock samples to Earth", "It discovered water on Mars"],
                      answer: 1,
                      explanation: "Chandrayaan-3's Vikram lander, carrying the Pragyan rover, soft-landed near the Moon's south pole on 23 August 2023 — making India the first country to achieve this. The date is now celebrated as India's National Space Day."
                    },
                    {
                      question: "Where is the asteroid belt located?",
                      options: ["Between the Sun and Mercury", "Between Mars and Jupiter", "Beyond Neptune", "Between the Earth and the Moon"],
                      answer: 1,
                      explanation: "Most asteroids revolve around the Sun in a region between the orbits of Mars and Jupiter, called the asteroid belt."
                    },
                    {
                      question: "Why does a comet develop a glowing tail as it approaches the Sun?",
                      options: ["It catches fire from the Sun's heat", "Its frozen material (ice) starts to evaporate, and this evaporating material forms the tail", "It collides with asteroids near the Sun", "Sunlight is reflected off its rocky core"],
                      answer: 1,
                      explanation: "As a comet nears the Sun, the frozen material within it evaporates, and this evaporating material streams away to form the comet's tail."
                    },
                    {
                      question: "What is the Milky Way, and where does our Solar System fit into it?",
                      options: ["It is a cloud of dust; our Solar System is just outside it", "It is our home galaxy, containing millions to billions of stars, and our Solar System is one small part of it", "It is another name for our Solar System", "It is a comet that passes Earth every 76 years"],
                      answer: 1,
                      explanation: "The Milky Way is our home galaxy — a collection of millions to billions of stars — and our entire Solar System is just a small part of it."
                    }
                  ]
                }
              ]
            }
          ]
        },
        mathematics: {
          name: "Mathematics",
          icon: "📐",
          chapters: [
            {
              id: "6m-6",
              title: "Perimeter and Area",
              topics: [
                {
                  id: "6m-6-1",
                  title: "1. Perimeter of Rectangles, Squares & Triangles",
                  theory: {
                    intro: "The perimeter of any closed plane figure is the distance covered along its boundary when you go around it once. For a polygon — a closed figure made of straight line segments — the perimeter is simply the sum of the lengths of all its sides.",
                    sections: [
                      {
                        heading: "Perimeter of a Rectangle",
                        text: "Consider a rectangle ABCD with length 12 cm and breadth 8 cm. Its perimeter is the sum of all four sides: AB + BC + CD + DA. Since opposite sides of a rectangle are always equal (AB = CD and AD = BC), this becomes AB + BC + AB + BC = 2 × AB + 2 × BC = 2 × (length + breadth).\n\nSo, Perimeter of a rectangle = 2 × (length + breadth). For our example: 2 × (12 cm + 8 cm) = 2 × 20 cm = 40 cm."
                      },
                      {
                        heading: "Perimeter of a Square",
                        text: "Debojeet wants to put coloured tape all around a square photo frame of side 1 m. Since all four sides of a square are equal, instead of adding each side separately, we can simply multiply the length of one side by 4.\n\nPerimeter of a square = 4 × length of a side. For Debojeet's frame: 4 × 1 m = 4 m of tape is needed."
                      },
                      {
                        heading: "Perimeter of a Triangle",
                        text: "The perimeter of a triangle is simply the sum of the lengths of its three sides. For a triangle with sides 4 cm, 5 cm and 7 cm, the perimeter = 4 + 5 + 7 = 16 cm.\n\nFor an equilateral triangle (all three sides equal), Perimeter = AB + BC + AC = AB + AB + AB = 3 × length of one side."
                      },
                      {
                        heading: "Perimeter of a Regular Polygon",
                        text: "A regular polygon has all sides and all angles equal (like a square or an equilateral triangle). In general, Perimeter of a regular polygon = number of sides × length of one side."
                      },
                      {
                        heading: "Real-Life Examples",
                        text: "Akshi wants to put lace all around a rectangular tablecloth 3 m long and 2 m wide. The lace needed = perimeter = 2 × (3 + 2) = 10 m.\n\nUsha takes three rounds of a square park of side 75 m. Distance in one round = 4 × 75 = 300 m, so in three rounds she covers 3 × 300 = 900 m.\n\nA farmer fences a rectangular field (length 230 m, breadth 160 m) with 3 rounds of rope. One round = 2 × (230 + 160) = 780 m, so 3 rounds need 3 × 780 = 2340 m of rope."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Matha Pachchi! Akshi and Toshi's Running Tracks",
                      objective: "To compare distances covered on two different rectangular tracks by using perimeter, and to decide who ran farther.",
                      materials: ["The track diagram (outer track 70 m × 40 m for Akshi, inner track 60 m × 30 m for Toshi)", "Paper and pencil for calculation"],
                      steps: [
                        "Akshi runs along the outer rectangular track (length 70 m, breadth 40 m) and completes 5 rounds.",
                        "Toshi runs along the inner rectangular track (length 60 m, breadth 30 m) and completes 7 rounds.",
                        "Find the perimeter of Akshi's track: 2 × (70 + 40) = 220 m per round.",
                        "Find the perimeter of Toshi's track: 2 × (60 + 30) = 180 m per round.",
                        "Multiply each perimeter by the number of rounds: Akshi covers 220 × 5 = 1100 m; Toshi covers 180 × 7 = 1260 m.",
                        "Compare the two total distances to see who ran farther."
                      ],
                      observation: "Even though Toshi's track is smaller, running more rounds (7 versus 5) means Toshi actually covers a longer total distance (1260 m) than Akshi (1100 m)."
                    }
                  ],
                  quiz: [
                    {
                      question: "What is the perimeter of a rectangle with length 12 cm and breadth 8 cm?",
                      options: ["20 cm", "40 cm", "96 cm", "48 cm"],
                      answer: 1,
                      explanation: "Perimeter = 2 × (length + breadth) = 2 × (12 + 8) = 2 × 20 = 40 cm."
                    },
                    {
                      question: "Debojeet wants tape all around a square photo frame of side 1 m. How much tape does he need?",
                      options: ["1 m", "2 m", "4 m", "8 m"],
                      answer: 2,
                      explanation: "Perimeter of a square = 4 × side = 4 × 1 m = 4 m."
                    },
                    {
                      question: "What would be the cost of fencing a rectangular park (length 150 m, breadth 120 m) if the fence costs ₹40 per metre?",
                      options: ["₹10,800", "₹21,600", "₹18,000", "₹5,400"],
                      answer: 1,
                      explanation: "Perimeter = 2 × (150 + 120) = 540 m. Cost = 540 × ₹40 = ₹21,600."
                    },
                    {
                      question: "What is the perimeter of an equilateral triangle with each side measuring 12 cm?",
                      options: ["12 cm", "24 cm", "36 cm", "48 cm"],
                      answer: 2,
                      explanation: "Perimeter of an equilateral triangle = 3 × side = 3 × 12 = 36 cm."
                    },
                    {
                      question: "In the Akshi–Toshi running track activity, who covered the longer total distance, and why?",
                      options: ["Akshi, because her track has a larger perimeter", "Toshi, because although her track is smaller, she ran more rounds (7 vs 5), covering 1260 m vs Akshi's 1100 m", "Both covered exactly the same distance", "Akshi, because she ran more rounds"],
                      answer: 1,
                      explanation: "Akshi's 220 m track × 5 rounds = 1100 m, while Toshi's 180 m track × 7 rounds = 1260 m — so Toshi ran farther overall."
                    }
                  ]
                },
                {
                  id: "6m-6-2",
                  title: "2. Area of Rectangles & Squares",
                  lab: { type: "rectangle-perimeter-area-sim" },
                  theory: {
                    intro: "The amount of region enclosed by a closed figure is called its area. Area is measured in square units (like square metres or square centimetres), and for rectangles and squares it can be calculated directly using simple formulas.",
                    sections: [
                      {
                        heading: "Area of a Rectangle and a Square",
                        text: "Area of a rectangle = length × width. Area of a square = side × side (since all sides of a square are equal). For example, a floor 5 m long and 4 m wide has an area of 5 × 4 = 20 sq m."
                      },
                      {
                        heading: "Real-Life Examples: Subtracting Areas",
                        text: "A square carpet of side 3 m (area = 3 × 3 = 9 sq m) is laid on a 5 m × 4 m floor (area 20 sq m). The area of the floor NOT covered by carpet = 20 − 9 = 11 sq m.\n\nFour square flower beds, each of side 4 m (area 16 sq m each, so 4 × 16 = 64 sq m total), sit in the corners of a 12 m × 10 m plot of land (area 120 sq m). The remaining area = 120 − 64 = 56 sq m."
                      },
                      {
                        heading: "Estimating Area Using a Grid",
                        text: "For irregular shapes, we can estimate area using squared (graph) paper, where each small square = 1 sq unit. The conventions are: a full square counts as 1 sq unit; ignore portions smaller than half a square; if more than half a square is covered, count it as a full 1 sq unit; if exactly half a square is covered, count it as ½ sq unit."
                      },
                      {
                        heading: "Why Squares (Not Circles) Are Used to Measure Area",
                        text: "Squares can be packed together with no gaps, tiling a region perfectly. Circles, however, cannot be packed tightly — there are always gaps between them, no matter how they are arranged. This makes squares (or other shapes that tile perfectly, like triangles and rectangles) far more accurate and reliable units for measuring area than circles."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Let's Explore: Rectangles with Area 24 Square Units",
                      objective: "To discover the relationship between the shape of a rectangle and its perimeter, when the area is held constant.",
                      materials: ["Squared grid paper (1 square = 1 square unit)", "Pencil"],
                      steps: [
                        "On grid paper, find as many rectangles as possible with whole-number length and breadth whose area is exactly 24 square units (e.g., 1 × 24, 2 × 12, 3 × 8, 4 × 6).",
                        "For each rectangle, calculate its perimeter using Perimeter = 2 × (length + breadth).",
                        "1 × 24 → perimeter = 2 × 25 = 50 units. 2 × 12 → perimeter = 2 × 14 = 28 units. 3 × 8 → perimeter = 2 × 11 = 22 units. 4 × 6 → perimeter = 2 × 10 = 20 units.",
                        "Compare all the perimeters you calculated to find which rectangle has the greatest and which has the least perimeter."
                      ],
                      observation: "Among rectangles with the same area, the most elongated shape (1 × 24) has the greatest perimeter (50 units), while the most square-like shape (4 × 6) has the least perimeter (20 units)."
                    }
                  ],
                  quiz: [
                    {
                      question: "A 5 m × 4 m floor has a 3 m × 3 m square carpet laid on it. What is the area of the floor NOT covered by the carpet?",
                      options: ["9 sq m", "11 sq m", "20 sq m", "6 sq m"],
                      answer: 1,
                      explanation: "Floor area = 5 × 4 = 20 sq m. Carpet area = 3 × 3 = 9 sq m. Uncovered area = 20 − 9 = 11 sq m."
                    },
                    {
                      question: "What is the cost of tiling a rectangular plot 500 m long and 200 m wide, at the rate of ₹8 per hundred square metres?",
                      options: ["₹800", "₹8,000", "₹80,000", "₹100"],
                      answer: 1,
                      explanation: "Area = 500 × 200 = 100,000 sq m = 1000 hundred-sq-m units. Cost = 1000 × ₹8 = ₹8,000."
                    },
                    {
                      question: "On squared grid paper, when exactly half of a small square is covered by a shape, how much area should it be counted as?",
                      options: ["0 sq units (ignored)", "1 sq unit (rounded up)", "½ sq unit", "2 sq units"],
                      answer: 2,
                      explanation: "The convention is: if exactly half a square is covered, count its area as ½ sq unit."
                    },
                    {
                      question: "Why are circles a poor choice of shape for measuring area accurately, compared to squares?",
                      options: ["Circles are too large", "Circles cannot be packed together without leaving gaps, unlike squares which tile perfectly", "Circles have no area", "Circles are more expensive to draw"],
                      answer: 1,
                      explanation: "Squares tile a region with no gaps, while circles packed together always leave small gaps between them — making squares far more accurate units for area."
                    },
                    {
                      question: "Among rectangles with a fixed area of 24 square units, which shape has the SMALLEST perimeter?",
                      options: ["1 × 24 (very elongated)", "2 × 12", "3 × 8", "4 × 6 (closest to a square)"],
                      answer: 3,
                      explanation: "The 4 × 6 rectangle, being closest in shape to a square, has the smallest perimeter (20 units) among all whole-number rectangles of area 24."
                    }
                  ]
                },
                {
                  id: "6m-6-3",
                  title: "3. Area of a Triangle",
                  lab: { type: "triangle-half-rectangle-sim" },
                  theory: {
                    intro: "There is a beautiful and simple relationship between the area of a rectangle and the area of a triangle formed from it — understanding this relationship helps us find the area of any triangle.",
                    sections: [
                      {
                        heading: "Cutting a Rectangle Along Its Diagonal",
                        text: "If you draw a rectangle and cut it along one of its diagonals, you get two triangles. These two triangles overlap each other exactly when placed on top of one another — meaning they have the exact same area. Since together they make up the whole rectangle, each triangle's area = half the area of the rectangle. This works for any rectangle, including a square."
                      },
                      {
                        heading: "A More General Triangle: Splitting into Two Right Triangles",
                        text: "Consider a rectangle ABCD, with E marked on side DC and F marked on side AB, so that triangle ABE has its third vertex E on the top side. This triangle can be split into two smaller right triangles, AEF and BEF, using the perpendicular EF.\n\nThe area of triangle AEF is half of rectangle AFED, and the area of triangle BEF is half of rectangle BFEC. Adding these: Area of triangle ABE = half of AFED + half of BFEC = half of the sum of the two rectangles = half of the area of the whole rectangle ABCD.\n\nSo even for this differently-shaped triangle, its area again turns out to be exactly half of the rectangle's area."
                      },
                      {
                        heading: "Finding Areas of Irregular Figures",
                        text: "Complex or irregular shapes can often be split into simpler pieces — rectangles and triangles — whose areas we already know how to calculate. By finding the area of each piece and adding them together, we can find the total area of the irregular figure."
                      },
                      {
                        heading: "Tangram: Comparing Areas by Shape",
                        text: "In a tangram (a square cut into 7 pieces), placing shapes over each other reveals relationships: for example, Shapes A and B may have the same area, and Shape D may be exactly covered by Shapes C and E together, meaning D has twice the area of C or of E. Comparing shapes this way — without measuring — is a powerful way to understand area relationships."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Cut and Compare: Rectangle to Triangles",
                      objective: "To verify, using paper cutting, that a rectangle's diagonal always divides it into two triangles of exactly equal area.",
                      materials: ["A rectangular piece of paper", "A ruler", "Scissors"],
                      steps: [
                        "Draw a rectangle on a piece of paper and draw one of its diagonals.",
                        "Cut the rectangle along the diagonal to get two triangles.",
                        "Place one triangle exactly on top of the other and check whether they overlap perfectly.",
                        "Repeat with a rectangle of different dimensions, and also try it with a square.",
                        "In each case, note that the two triangles always overlap exactly, confirming they have equal area."
                      ],
                      observation: "No matter the rectangle's dimensions, its diagonal always splits it into two triangles of exactly equal area — each being exactly half of the rectangle's total area."
                    }
                  ],
                  quiz: [
                    {
                      question: "If a rectangle is cut along its diagonal, what is true of the two triangles formed?",
                      options: ["They have different areas", "They have exactly equal areas, each half of the rectangle's area", "Only one of them is a valid triangle", "Their areas depend on which diagonal is chosen"],
                      answer: 1,
                      explanation: "A rectangle's diagonal always divides it into two triangles of exactly equal area, each equal to half of the rectangle's total area."
                    },
                    {
                      question: "A rectangle ABCD has an area of 60 sq cm. What is the area of triangle BAD, formed by one of its diagonals?",
                      options: ["60 sq cm", "15 sq cm", "30 sq cm", "120 sq cm"],
                      answer: 2,
                      explanation: "The triangle formed by a rectangle's diagonal has half the rectangle's area: 60 ÷ 2 = 30 sq cm."
                    },
                    {
                      question: "In the tangram, if Shape D can be exactly covered using Shapes C and E together, and C and E have equal area, how does D's area compare to C's?",
                      options: ["D is half of C", "D is equal to C", "D is twice the area of C", "D is four times the area of C"],
                      answer: 2,
                      explanation: "Since D is exactly covered by C and E together (and C = E in area), D's area equals C + E = 2 × C — twice the area of C."
                    },
                    {
                      question: "What strategy does the chapter recommend for finding the area of an irregular, complex figure on grid paper?",
                      options: ["Only estimate it by eye", "Split it into simpler pieces like rectangles and triangles, find each piece's area, then add them", "It cannot be done", "Measure only the longest side"],
                      answer: 1,
                      explanation: "Irregular figures can be broken down into rectangles and triangles whose areas are calculated separately and then summed for the total area."
                    },
                    {
                      question: "In triangle ABE split into two right triangles AEF and BEF using rectangles AFED and BFEC, what is the area of triangle ABE in relation to rectangle ABCD?",
                      options: ["Equal to the full area of ABCD", "One-quarter of the area of ABCD", "Half of the area of ABCD", "Twice the area of ABCD"],
                      answer: 2,
                      explanation: "Since triangle AEF is half of rectangle AFED and triangle BEF is half of rectangle BFEC, their sum (triangle ABE) is half of the combined rectangle ABCD."
                    }
                  ]
                }
              ]
            },
            {
              id: "6m-7",
              title: "Fractions",
              topics: [
                {
                  id: "6m-7-1",
                  title: "1. Fractional Units & Fractions as Equal Shares",
                  lab: { type: "fraction-strip-sim" },
                  theory: {
                    intro: "When a whole number of things are shared equally among some number of people, fractions tell us how much each share is. Understanding these 'fractional units' is the foundation for everything else we do with fractions.",
                    sections: [
                      {
                        heading: "What Is a Fractional Unit?",
                        text: "When one whole is divided into several equal parts, each part is called a fractional unit (also called a 'unit fraction'). These include 1/2, 1/3, 1/4, 1/5, 1/6, ..., 1/10, ..., 1/50, ..., 1/100, and so on.\n\nA common mistake is to think that a bigger denominator always means a bigger fraction — but it is the opposite! If one roti is shared among 5 children, each gets 1/5; if shared among 9 children, each gets only 1/9. Since sharing with more people means a smaller share, 1/9 < 1/5. In general, the more parts a whole is divided into, the smaller each fractional unit becomes."
                      },
                      {
                        heading: "Fractions as Parts of a Whole",
                        text: "A whole chikki can be divided into 6 equal parts in different ways — even though the pieces may look different in shape, all the 1/6 pieces are exactly the same size. This is because the fractional unit depends only on how many equal parts the whole is divided into, not on the particular shape of each piece.\n\nWe can also combine fractional units: if a chikki is broken into 2 pieces and the bigger piece contains 3 pieces of 1/4 chikki, then that bigger piece measures 3/4 chikki."
                      },
                      {
                        heading: "Measuring Using Fractional Units",
                        text: "Take a strip of paper considered as 1 unit long. Folding it in half creates two 1/2 pieces. Folding it in half again creates four 1/4 pieces, and so on. We can describe any fractional quantity by counting how many fractional units make it up: for example, 3 times 1/4 = 3/4, and 8 times 1/8 = 8/8 = 1 (a whole).\n\nReading a fraction like 3/4 as '3 times 1/4' helps us understand its size, because it clearly shows the fractional unit (1/4) and how many such units (3) there are. In a fraction such as 5/6, 5 is called the numerator and 6 is called the denominator."
                      },
                      {
                        heading: "Knowledge from the Past",
                        text: "Fractions have been used and named in India since ancient times. In the Rig Veda, the fraction 3/4 is referred to as tri-pada — which has the same meaning as words for 3/4 used in Indian languages even today, such as 'teen paav' in colloquial Hindi and 'mukkaal' in Tamil."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Paper Strip Folding: Building Fractional Units",
                      objective: "To physically create halves, quarters and eighths by folding a paper strip, and to see how fractional units combine to build up larger fractions.",
                      materials: ["A long strip of paper", "A pencil"],
                      steps: [
                        "Take a strip of paper and consider its full length as '1 unit'.",
                        "Fold the strip in half, then open it up. Mark the crease — it divides the strip into two 1/2 pieces.",
                        "Fold the strip in half again (now into quarters), then open it up. Mark all the creases as 1/4, 2/4, and 3/4.",
                        "Fold it in half one more time (now into eighths), then open it up and mark all eight parts.",
                        "For each marked point, write out how many times the fractional unit 1/8 it represents (e.g., the 3rd crease from the start is '3 times 1/8 = 3/8')."
                      ],
                      observation: "Each additional fold doubles the number of equal parts (2, then 4, then 8), and the size of each fractional unit gets smaller — but larger fractions can still be built by counting multiple fractional units together (e.g., 4 times 1/8 = 4/8, which is the same length as 1/2)."
                    }
                  ],
                  quiz: [
                    {
                      question: "Three guavas of roughly the same size together weigh 1 kg. What does each guava roughly weigh?",
                      options: ["1/2 kg", "1/3 kg", "1/4 kg", "3 kg"],
                      answer: 1,
                      explanation: "If 1 kg is shared equally among 3 guavas of the same size, each guava weighs 1/3 kg."
                    },
                    {
                      question: "Which fraction is greater: 1/5 or 1/9?",
                      options: ["1/9, because 9 is bigger than 5", "1/5, because sharing among fewer people gives a bigger share", "They are equal", "It cannot be determined"],
                      answer: 1,
                      explanation: "When a whole is shared among more people, each share gets smaller. Since 9 > 5, sharing among 9 gives a smaller share, so 1/5 > 1/9."
                    },
                    {
                      question: "A chikki is divided into 6 equal parts in two different ways, creating differently-shaped pieces. Are the resulting 1/6 pieces the same size?",
                      options: ["No, since they look different", "Yes, all 1/6 pieces are exactly the same size, regardless of shape", "Only some of them are equal", "It depends on the chikki's flavour"],
                      answer: 1,
                      explanation: "The fractional unit 1/6 depends only on dividing the whole into 6 equal parts — all such pieces have the same size, even if their shapes differ."
                    },
                    {
                      question: "What was a fraction called in ancient India, in Sanskrit, and what did the word mean?",
                      options: ["'Ganita', meaning 'calculation'", "'Bhinna', meaning 'broken' (also called bhaga or ansha, meaning 'part')", "'Sankhya', meaning 'number'", "'Rekha', meaning 'line'"],
                      answer: 1,
                      explanation: "A fraction was called bhinna in Sanskrit, meaning 'broken', and was also called bhaga or ansha, meaning 'part' or 'piece'."
                    },
                    {
                      question: "Why does reading 3/4 as '3 times 1/4' help us understand the fraction's size?",
                      options: ["It doesn't help at all", "It clearly shows the fractional unit (1/4) being used and how many of them (3) make up the fraction", "It changes the value of the fraction", "It only works for fractions less than 1"],
                      answer: 1,
                      explanation: "Reading a fraction as 'so many times' its fractional unit makes explicit both the size of each unit and the count of units, making the overall size of the fraction easier to picture."
                    }
                  ]
                },
                {
                  id: "6m-7-2",
                  title: "2. Fractions on the Number Line & Mixed Numbers",
                  theory: {
                    intro: "Fractions are not only parts of a whole — they can also be marked as points on a number line, just like whole numbers. This lets us see clearly which fractions are less than 1, and which are greater than 1.",
                    sections: [
                      {
                        heading: "Marking Fraction Lengths on a Number Line",
                        text: "The distance between 0 and 1 on a number line is one unit long. If this unit length is divided into equal parts — say, 5 equal parts — then each part has length 1/5. So a line from 0 up to the second mark has length 2/5, and so on. This same idea works no matter how many equal parts the unit is divided into: thirds, fifths, eighths, tenths, and so forth."
                      },
                      {
                        heading: "Fractions Greater Than One",
                        text: "Marking fractions on the number line shows that some lengths are less than 1 unit, while others are more than 1 unit. In every fraction less than 1, the numerator is smaller than the denominator; in every fraction greater than 1, the numerator is larger than the denominator.\n\nFractions like 3/2, 5/2, and 7/2 are all greater than 1 unit. We can see how many whole units they contain: 3/2 = 1/2 + 1/2 + 1/2 = 1 + 1/2, and 5/2 = 1/2 × 5 = 2 + 1/2."
                      },
                      {
                        heading: "Writing Fractions as Mixed Numbers",
                        text: "A fraction greater than 1 can be rewritten showing its whole-number part separately from its fractional part. For example, 8/3 = 2 + 2/3, which is written as the mixed number 2⅔ (read as 'two and two-thirds'). A mixed number (or mixed fraction) always contains a whole number part and a fractional part that is less than 1."
                      },
                      {
                        heading: "Writing Mixed Numbers as Fractions",
                        text: "A mixed number can also be converted back into a single (improper) fraction. For example, 3 + 1/4 means 1 + 1 + 1 + 1/4. Since 1 = 1/4 + 1/4 + 1/4 + 1/4, adding three such wholes plus the extra 1/4 gives (4 × 1/4) + (4 × 1/4) + (4 × 1/4) + 1/4 = 13/4."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Marking Fraction Lengths on a Number Line",
                      objective: "To practise dividing a unit length into equal parts and marking specific fractions accurately on a number line.",
                      materials: ["Ruler", "Pencil", "Paper with a drawn number line from 0 to 2"],
                      steps: [
                        "Draw a number line from 0 to 2, and divide the space between 0 and 1 into 10 equal parts using a ruler.",
                        "Mark the point at 1/10 (the first small division after 0).",
                        "Mark the point at 3/10 (three small divisions after 0).",
                        "Mark the point at 4/5 — remember that 4/5 is the same as 8/10, so count 8 small divisions after 0.",
                        "Compare the three marked points: which is closest to 0, and which is closest to 1?"
                      ],
                      observation: "1/10 is closest to 0, followed by 3/10, and then 4/5 (= 8/10) is closest to 1 — showing how equivalent fractions like 4/5 and 8/10 land at exactly the same point on the number line."
                    }
                  ],
                  quiz: [
                    {
                      question: "How many whole units are there in the fraction 7/2?",
                      options: ["2", "3", "7", "3.5, which rounds to 4"],
                      answer: 1,
                      explanation: "7/2 = 3 + 1/2, so it contains 3 whole units (with 1/2 left over)."
                    },
                    {
                      question: "Write 9/2 as a mixed number.",
                      options: ["4 1/2", "4 1/9", "9 1/2", "2 1/9"],
                      answer: 0,
                      explanation: "9/2 = 8/2 + 1/2 = 4 + 1/2 = 4½."
                    },
                    {
                      question: "Can every fraction greater than 1 be written as a mixed number with a nonzero fractional part?",
                      options: ["Yes, always", "No — some fractions greater than 1, like 8/4 = 2, work out to an exact whole number with no fractional part left", "No fraction greater than 1 can be a mixed number", "Only fractions with an even denominator can"],
                      answer: 1,
                      explanation: "While most fractions greater than 1 have a leftover fractional part, some, like 8/4 = 2, divide out exactly to a whole number with nothing left over."
                    },
                    {
                      question: "Write the mixed number 3⅓ as a single (improper) fraction.",
                      options: ["9/3", "10/3", "13/3", "4/3"],
                      answer: 1,
                      explanation: "3⅓ = 3 + 1/3 = 9/3 + 1/3 = 10/3."
                    },
                    {
                      question: "On the number line, which point is farther from 0: 3/10 or 4/5?",
                      options: ["3/10", "4/5, since 4/5 equals 8/10, which is farther from 0 than 3/10", "They are the same distance from 0", "Neither can be placed on a number line"],
                      answer: 1,
                      explanation: "4/5 = 8/10, which is much farther along the number line from 0 than 3/10 is."
                    }
                  ]
                },
                {
                  id: "6m-7-3",
                  title: "3. Equivalent Fractions & Lowest Terms",
                  theory: {
                    intro: "Different-looking fractions can sometimes represent exactly the same amount. Fractions like 1/2, 2/4, and 4/8 are called equivalent fractions — they denote the same length or share, just expressed using different fractional units.",
                    sections: [
                      {
                        heading: "Discovering Equivalent Fractions with a Fraction Wall",
                        text: "Using paper strips folded into halves, quarters and eighths, we can see that the length 1/2 is exactly the same as the length 2/4, which is exactly the same as the length 4/8. So 1/2 = 2/4 = 4/8 — these are all equivalent fractions.\n\nTo get an equivalent fraction, multiply (or divide) both the numerator and the denominator by the same number. For example, 2/3 = (2×2)/(3×2) = 4/6 = (2×3)/(3×3) = 6/9, and so on."
                      },
                      {
                        heading: "Equivalent Fractions Through Equal Shares",
                        text: "If 1 roti is divided equally between 2 children, each gets 1/2. If 2 rotis are divided equally among 4 children, each again gets 1/2 (since 2/4 = 1/2). If 3 rotis are divided equally among 6 children, each again gets 1/2 (since 3/6 = 1/2). Fractions where the shares work out equal like this are called equivalent fractions."
                      },
                      {
                        heading: "Expressing a Fraction in Lowest Terms",
                        text: "A fraction is in lowest terms (or simplest form) when its numerator and denominator share no common factor other than 1. Any fraction can be reduced to lowest terms by dividing both numerator and denominator by their highest common factor (HCF). For example, 16/20: both 16 and 20 are divisible by 4, giving 16÷4 / 20÷4 = 4/5, which is in lowest terms since 4 and 5 share no common factor besides 1."
                      },
                      {
                        heading: "Comparing Fractions Using Equivalent Forms",
                        text: "To compare two fractions like 3/4 and 7/10, convert both to equivalent fractions with the same denominator. Since 40 is a common multiple of 4 and 10: 3/4 = 30/40 and 7/10 = 28/40. Since 30/40 > 28/40, we conclude 3/4 > 7/10."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Building a Fraction Wall",
                      objective: "To construct a hands-on 'fraction wall' from paper strips and use it to visually discover pairs of equivalent fractions.",
                      materials: ["Several equal-length paper strips", "Scissors", "A pencil and ruler"],
                      steps: [
                        "Keep one strip whole, to represent '1 unit'.",
                        "Fold or mark a second strip into 2 equal parts (halves), a third strip into 3 equal parts (thirds), and so on, up to a strip divided into 10 equal parts (tenths).",
                        "Line up all the strips on top of one another, aligned at the left edge, to build a 'fraction wall'.",
                        "Look down the wall for places where marks from different strips line up exactly — for example, does the 1/2 mark line up with any mark on the fourths strip? The sixths strip? The tenths strip?",
                        "Record every pair of equivalent fractions you find this way."
                      ],
                      observation: "The 1/2 mark lines up exactly with 2/4, 3/6, 4/8, and 5/10 — confirming that 1/2 = 2/4 = 3/6 = 4/8 = 5/10, all equivalent fractions."
                    }
                  ],
                  quiz: [
                    {
                      question: "Are 3/6, 4/8, and 5/10 equivalent fractions? Why?",
                      options: ["No, they all have different values", "Yes — on a fraction wall, they all line up at exactly the same length, equal to 1/2", "Only 3/6 and 4/8 are equivalent", "It cannot be determined without measuring"],
                      answer: 1,
                      explanation: "3/6, 4/8, and 5/10 all simplify to 1/2, so they are all equivalent fractions representing the same length."
                    },
                    {
                      question: "Express 16/20 in its lowest terms.",
                      options: ["8/10", "4/5", "2/5", "16/20 is already in lowest terms"],
                      answer: 1,
                      explanation: "The HCF of 16 and 20 is 4. Dividing both by 4 gives 16÷4 / 20÷4 = 4/5, which has no common factor other than 1."
                    },
                    {
                      question: "To compare the fractions 3/4 and 7/10, which common denominator can be used, based on the product of the denominators?",
                      options: ["14", "20", "40", "4"],
                      answer: 2,
                      explanation: "The product of 4 and 10 is 40, which can be used as a common denominator: 3/4 = 30/40 and 7/10 = 28/40."
                    },
                    {
                      question: "What is 2/6 expressed in its simplest form?",
                      options: ["1/3", "1/6", "2/3", "4/12"],
                      answer: 0,
                      explanation: "The HCF of 2 and 6 is 2. Dividing both by 2 gives 2÷2 / 6÷2 = 1/3."
                    },
                    {
                      question: "A fraction is said to be in 'lowest terms' when...",
                      options: ["its numerator is 1", "its numerator and denominator have no common factor other than 1", "its denominator is a prime number", "it is greater than 1"],
                      answer: 1,
                      explanation: "A fraction is in lowest terms (simplest form) exactly when its numerator and denominator share no common factor besides 1."
                    }
                  ]
                },
                {
                  id: "6m-7-4",
                  title: "4. Adding & Subtracting Fractions (Brahmagupta's Method)",
                  lab: { type: "fraction-addition-sim" },
                  theory: {
                    intro: "Adding and subtracting fractions with different denominators requires a systematic method — one first described in complete generality by the Indian mathematician Brahmagupta in his Brāhma-sphuṭa-siddhānta, in the year 628 CE.",
                    sections: [
                      {
                        heading: "Adding Fractions with the Same Denominator",
                        text: "When two fractions share the same fractional unit (denominator), adding them is simple: just add the numerators and keep the same denominator. For example, 2/5 + 1/5 = 3/5, since both fractions are counted in units of 1/5."
                      },
                      {
                        heading: "Brahmagupta's Method for Adding Fractions with Different Denominators",
                        text: "To add fractions with different denominators, first convert them into equivalent fractions sharing a common denominator (for example, the product of the two denominators). Then add the numerators of these equivalent fractions, keeping the common denominator. Finally, simplify the result to lowest terms if needed.\n\nExample: 1/4 + 1/3. The common denominator is 4 × 3 = 12. So 1/4 = 3/12 and 1/3 = 4/12. Adding: 3/12 + 4/12 = 7/12."
                      },
                      {
                        heading: "Brahmagupta's Method for Subtracting Fractions",
                        text: "Subtraction works the same way: convert both fractions to a common denominator, then subtract the numerators. Example: 3/4 − 2/3. Common denominator = 4 × 3 = 12, so 3/4 = 9/12 and 2/3 = 8/12. Subtracting: 9/12 − 8/12 = 1/12."
                      },
                      {
                        heading: "A Pinch of History",
                        text: "The way we write fractions today, globally, originated in India — seen as early as the Bakshali manuscript (around 300 CE). Brahmagupta's rules in 628 CE were the first general, explicit rules for adding and subtracting (and even multiplying and dividing) any fractions. These methods travelled to the Arab world and then to Europe over the following centuries, eventually spreading worldwide. Other ancient cultures such as the Egyptians mostly used only unit fractions (fractions with numerator 1), writing more general fractions as sums of unit fractions — now called 'Egyptian fractions'."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Rahim's Paint Mixing Problem",
                      objective: "To apply Brahmagupta's method to a real-world addition-of-fractions problem.",
                      materials: ["Paper and pencil"],
                      steps: [
                        "Rahim mixes 2/3 litres of yellow paint with 3/4 litres of blue paint to make green paint.",
                        "Find the common denominator: 3 × 4 = 12.",
                        "Convert each fraction: 2/3 = 8/12, and 3/4 = 9/12.",
                        "Add the equivalent fractions: 8/12 + 9/12 = 17/12.",
                        "Convert the improper fraction 17/12 to a mixed number: 17/12 = 1 + 5/12 = 1 5/12 litres."
                      ],
                      observation: "Rahim ends up with 1 5/12 litres of green paint in total — more than 1 full litre, since 2/3 + 3/4 adds up to more than 1."
                    }
                  ],
                  quiz: [
                    {
                      question: "Using Brahmagupta's method, what is 1/4 + 1/3?",
                      options: ["2/7", "7/12", "1/12", "4/7"],
                      answer: 1,
                      explanation: "Common denominator = 4 × 3 = 12. So 1/4 = 3/12 and 1/3 = 4/12. Adding: 3/12 + 4/12 = 7/12."
                    },
                    {
                      question: "What is 3/4 − 2/3?",
                      options: ["1/1", "1/12", "5/12", "1/7"],
                      answer: 1,
                      explanation: "Common denominator = 4 × 3 = 12. So 3/4 = 9/12 and 2/3 = 8/12. Subtracting: 9/12 − 8/12 = 1/12."
                    },
                    {
                      question: "Rahim mixes 2/3 litre of yellow paint with 3/4 litre of blue paint. How much green paint does he have in total?",
                      options: ["5/7 litre", "1 5/12 litres", "17/12 litres only (not a mixed number)", "1 litre exactly"],
                      answer: 1,
                      explanation: "2/3 + 3/4 = 8/12 + 9/12 = 17/12, which as a mixed number is 1 5/12 litres."
                    },
                    {
                      question: "What is the first step in Brahmagupta's method for adding two fractions with different denominators?",
                      options: ["Add the numerators directly, ignoring the denominators", "Convert both fractions into equivalent fractions with a common denominator", "Multiply the two fractions together", "Round both fractions to the nearest whole number"],
                      answer: 1,
                      explanation: "Brahmagupta's method begins by converting the fractions to a common denominator (such as the product of the two denominators) before adding or subtracting."
                    },
                    {
                      question: "According to Brahmagupta's rules, what is the result of subtracting a number from itself (e.g., 2/5 − 2/5)?",
                      options: ["The number itself", "Zero", "One", "It is undefined"],
                      answer: 1,
                      explanation: "Brahmagupta stated that subtracting a number from itself always gives zero — this holds for fractions just as it does for whole numbers."
                    }
                  ]
                }
              ]
            },
            {
              id: "6m-8",
              title: "Playing with Constructions",
              topics: [
                {
                  id: "6m-8-1",
                  title: "1. The Compass: Circles & Curves",
                  lab: { type: "compass-circle-sim" },
                  theory: {
                    intro: "A curve is any shape that can be drawn on paper with a pencil — including straight lines, circles, and all sorts of wavy or irregular figures. Among these, the compass is the perfect tool for drawing one very special kind of curve: the circle.",
                    sections: [
                      {
                        heading: "What Is a Curve?",
                        text: "Curves include straight lines, circles, and other freeform figures — open shapes like a wavy line, or closed shapes like an irregular blob. Anything you can trace with a pencil in one continuous motion counts as a curve."
                      },
                      {
                        heading: "Using a Compass to Draw a Circle",
                        text: "Mark a point P. Now imagine marking every possible point that is exactly 4 cm away from P, in every direction — the shape traced out is a perfect circle. A compass lets us draw this exactly: open the compass against a ruler until the distance between its tip and pencil is 4 cm, place the tip firmly at P, and — keeping the tip fixed — rotate the pencil all the way around to trace the full circle."
                      },
                      {
                        heading: "Centre and Radius",
                        text: "The fixed point (P) is called the centre of the circle. The distance between the centre and any point on the circle is called the radius. Every single point on a circle is exactly the same distance (the radius) from the centre — that is what makes it a circle."
                      },
                      {
                        heading: "Constructing Artwork with a Compass",
                        text: "Once comfortable with a compass, you can recreate artwork made of circles and arcs — like a simple figure of 'A Person' (a circular head atop a curved body), a 'Wavy Wave' (built from half-circles along a central line), or a pair of eyes. The key challenge each time is figuring out where to place the compass's tip and what radius to use so the curve appears in exactly the right place."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Marking All Points at a Fixed Distance",
                      objective: "To compare manual estimation with a compass's precision when marking every point a fixed distance from a centre.",
                      materials: ["Notebook", "Pencil", "Ruler", "Compass"],
                      steps: [
                        "Mark a point P in your notebook.",
                        "Try to mark, just by estimating, as many points as possible that are exactly 4 cm away from P, in different directions.",
                        "Now open a compass to exactly 4 cm, checking the width against a ruler.",
                        "Place the compass's tip at P and, keeping the tip fixed in place, rotate the pencil end all the way around to draw the full curve.",
                        "Compare the compass-drawn curve to your hand-marked points from step 2."
                      ],
                      observation: "The compass traces a perfect circle — the true, complete set of every point exactly 4 cm from P — while manually marking points by estimation can only ever approximate a few scattered points on that same circle."
                    }
                  ],
                  quiz: [
                    {
                      question: "What shape do you get when you mark every point that is the same fixed distance from one central point?",
                      options: ["A square", "A circle", "A triangle", "A straight line"],
                      answer: 1,
                      explanation: "Marking all points equidistant from a single centre point always produces a circle."
                    },
                    {
                      question: "What is the 'radius' of a circle?",
                      options: ["The distance all the way around the circle", "The distance between the centre and any point on the circle", "The widest possible line across the circle", "The area enclosed by the circle"],
                      answer: 1,
                      explanation: "The radius is the distance between the centre of the circle and any point lying on the circle itself."
                    },
                    {
                      question: "What is the key rule for using a compass to draw a circle correctly?",
                      options: ["Move both the tip and the pencil together", "Keep the tip fixed at the centre and rotate only the pencil around it", "Press down very hard on the paper", "Draw freehand without opening the compass"],
                      answer: 1,
                      explanation: "The compass's tip must stay fixed at the centre point while only the pencil end moves around it, tracing the circle."
                    },
                    {
                      question: "Which of the following count as 'curves' in this chapter's sense?",
                      options: ["Only circles", "Only straight lines", "Straight lines, circles, and other closed or open freeform shapes drawn with a pencil", "Only shapes with sharp corners"],
                      answer: 2,
                      explanation: "A curve is any shape — straight, circular, wavy, closed, or open — that can be traced on paper with a pencil."
                    },
                    {
                      question: "In the 'Wavy Wave' construction, each hump of the wave is drawn using what shape?",
                      options: ["A full circle", "A half circle", "A square", "A straight diagonal line"],
                      answer: 1,
                      explanation: "Each hump of the wavy wave figure is constructed as a half circle using the compass."
                    }
                  ]
                },
                {
                  id: "6m-8-2",
                  title: "2. Constructing Squares & Rectangles",
                  theory: {
                    intro: "Squares and rectangles are defined by simple rules about their sides and angles — and once we know these rules, we can construct them precisely using just a ruler, a protractor, and a compass.",
                    sections: [
                      {
                        heading: "Properties of Rectangles and Squares",
                        text: "A rectangle satisfies two properties: (R1) opposite sides are equal in length, and (R2) all angles measure 90°. A square satisfies two similar properties: (S1) all four sides are equal in length, and (S2) all angles measure 90°. A square is therefore a special rectangle where all four sides happen to be equal, not just the opposite pairs."
                      },
                      {
                        heading: "Naming Rectangles Correctly",
                        text: "A rectangle ABCD can also be validly named BCDA, CDAB, DABC, ADCB, DCBA, CBAD, or BADC — because in each of these, the corners still occur in order of travel around the shape. However, it cannot be named ABDC or ACBD, since these skip around the corners out of order."
                      },
                      {
                        heading: "Rotated Squares and Rectangles",
                        text: "If a square piece of paper is rotated, does it stop being a square? No — rotating a shape does not change any of its side lengths or angles. Since the rotated shape still has all equal sides and all 90° angles, it remains a square. By the same reasoning, a rotated rectangle is still a rectangle."
                      },
                      {
                        heading: "Constructing a Square Step by Step",
                        text: "To construct a square PQRS with side 6 cm: (1) Draw base PQ = 6 cm using a ruler. (2) Construct a line perpendicular to PQ through P. (3) On this perpendicular, mark point S so that PS = 6 cm, using a ruler or a compass. (4) Construct a line perpendicular to PQ through Q. (5) Using a compass opened to 6 cm, mark point R on this second perpendicular. (6) Join R and S to complete the square PQRS — check that all four sides measure 6 cm and all four angles are 90°."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Constructing a Square of Side 6 cm",
                      objective: "To construct an accurate square using a ruler, protractor (or set square), and compass, and verify both of its defining properties.",
                      materials: ["Ruler", "Protractor or set square", "Compass", "Pencil", "Plain paper"],
                      steps: [
                        "Draw a base line segment PQ of length 6 cm using a ruler.",
                        "At point P, construct a line perpendicular to PQ (using a protractor to mark 90°, or a set square).",
                        "Open the compass to 6 cm and, with the tip at P, mark point S where the compass arc crosses the perpendicular line — so that PS = 6 cm.",
                        "At point Q, construct another line perpendicular to PQ.",
                        "With the compass still opened to 6 cm, place the tip at Q and mark point R where the arc crosses this second perpendicular.",
                        "Join points R and S with a ruler to complete the square PQRS.",
                        "Verify: measure all four sides (should all read 6 cm) and check all four angles with a protractor (should all read 90°)."
                      ],
                      observation: "The completed figure PQRS satisfies both square properties — all four sides measure exactly 6 cm, and all four angles measure exactly 90°."
                    }
                  ],
                  quiz: [
                    {
                      question: "What are the two defining properties of a rectangle?",
                      options: ["All sides equal; all angles 90°", "Opposite sides equal; all angles 90°", "All sides equal; opposite angles equal", "Diagonals equal; one pair of sides parallel"],
                      answer: 1,
                      explanation: "A rectangle satisfies: (R1) opposite sides are equal in length, and (R2) all angles measure 90°."
                    },
                    {
                      question: "For a rectangle ABCD, which of the following is NOT a valid alternative name for it?",
                      options: ["BCDA", "DCBA", "ACBD", "CDAB"],
                      answer: 2,
                      explanation: "A valid name must list corners in order of travel around the rectangle. 'ACBD' skips around out of order and is not valid, unlike BCDA, DCBA, or CDAB."
                    },
                    {
                      question: "If a square piece of paper is physically rotated, does it remain a square?",
                      options: ["No, rotating changes its shape into a rhombus", "Yes — rotation does not change side lengths or angles, so all square properties still hold", "It becomes a rectangle instead", "Only if rotated by exactly 180°"],
                      answer: 1,
                      explanation: "Rotating a square doesn't alter its side lengths or its angles, so a rotated square still satisfies both square properties and remains a square."
                    },
                    {
                      question: "When constructing square PQRS of side 6 cm, after drawing perpendiculars at P and Q, how is point S located on the first perpendicular?",
                      options: ["By guessing its position", "Using a ruler or compass to mark a point exactly 6 cm from P along the perpendicular", "By drawing a diagonal first", "It cannot be located without a protractor"],
                      answer: 1,
                      explanation: "Point S is marked on the perpendicular through P at a distance of exactly 6 cm from P, using either a ruler or a compass opened to 6 cm."
                    },
                    {
                      question: "What are the two defining properties of a square?",
                      options: ["Opposite sides equal; opposite angles equal", "All sides equal; all angles 90°", "All angles equal; diagonals unequal", "Two pairs of parallel sides only"],
                      answer: 1,
                      explanation: "A square satisfies: (S1) all four sides are equal in length, and (S2) all four angles measure 90°."
                    }
                  ]
                },
                {
                  id: "6m-8-3",
                  title: "3. Diagonals & Points Equidistant from Two Points",
                  lab: { type: "equidistant-arcs-sim" },
                  theory: {
                    intro: "A diagonal joins two opposite corners of a rectangle or square, and exploring diagonals reveals useful facts — including a clever compass technique for finding a point that is a fixed distance away from two other points at once, without any trial and error.",
                    sections: [
                      {
                        heading: "Diagonals of a Rectangle",
                        text: "In rectangle PQRS, the lines PR and QS (joining opposite corners) are called diagonals. In any rectangle, both diagonals are always equal in length. Each diagonal also divides a pair of opposite corner angles into two smaller angles."
                      },
                      {
                        heading: "Diagonals of a Square",
                        text: "In a general rectangle, a diagonal usually splits each corner angle into two unequal parts (for instance, 60° and 30°). But in a square specifically, a diagonal always splits each 90° corner angle into two exactly equal halves of 45° each — this special equal-splitting only happens when the rectangle's adjacent sides are equal, i.e., when it is a square."
                      },
                      {
                        heading: "Constructing a Rectangle from a Side and a Diagonal",
                        text: "Suppose you know one side of a rectangle (say, DC = 5 cm) and the length of a diagonal (say, 7 cm), and need to find the unknown corner B. Instead of using a ruler and trial and error, draw a circle of radius 7 cm centred at D. The point where this circle crosses the perpendicular line through C is exactly the required corner B — found precisely, with no guessing."
                      },
                      {
                        heading: "Finding a Point Equidistant from Two Given Points",
                        text: "To find a point that must be a certain fixed distance from TWO given points at once (for example, when constructing the peaked roof of a house shape, where the peak A must be exactly 5 cm from both B and C), draw an arc of that radius centred at the first point, then another arc of the same radius centred at the second point. The point where the two arcs cross is exactly the point you need — it lies on both arcs, so it is that fixed distance from both original points."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Constructing the Peaked-Roof House",
                      objective: "To use the two-arc intersection technique to precisely locate a point equidistant from two other points, completing a peaked-roof 'house' figure.",
                      materials: ["Ruler", "Compass", "Pencil", "Plain paper"],
                      steps: [
                        "Construct the square base of the house, with points B and C marking the top two corners, 5 cm apart.",
                        "Open the compass to 5 cm. With the tip at B, draw an arc above the line BC.",
                        "Without changing the compass width, place the tip at C and draw a second arc above the line BC.",
                        "Mark the point A where the two arcs cross — this point is exactly 5 cm from both B and C.",
                        "Join A to B and A to C with straight lines using a ruler, completing the triangular peaked roof."
                      ],
                      observation: "Point A, found at the intersection of the two arcs, is guaranteed to be exactly 5 cm from both B and C simultaneously — precisely locating the peak of the roof without any trial and error."
                    }
                  ],
                  quiz: [
                    {
                      question: "In any rectangle, how do the lengths of its two diagonals compare to each other?",
                      options: ["They are always equal", "One is always longer than the other", "They are equal only in a square", "It depends on the angles"],
                      answer: 0,
                      explanation: "In every rectangle (including squares, which are special rectangles), both diagonals are always equal in length."
                    },
                    {
                      question: "In a square, what two angles does a diagonal divide each 90° corner into?",
                      options: ["60° and 30°", "45° and 45°", "70° and 20°", "90° and 0°"],
                      answer: 1,
                      explanation: "A square's diagonal always splits each 90° corner angle into two exactly equal halves of 45° each."
                    },
                    {
                      question: "To construct a rectangle given one side and a diagonal length, what shape do you draw (centred at a known corner, with radius equal to the diagonal) to precisely locate the unknown corner?",
                      options: ["A straight line", "A circle (or arc) of radius equal to the diagonal length", "A square", "A perpendicular bisector only"],
                      answer: 1,
                      explanation: "Drawing a circle of radius equal to the diagonal, centred at the known corner, lets you find exactly where the unknown corner lies — at the point where this circle crosses the perpendicular line."
                    },
                    {
                      question: "In the 'House' construction, how is the roof peak point A located so that it is exactly 5 cm from both B and C?",
                      options: ["By measuring with a ruler and adjusting until it looks right", "By drawing two arcs of radius 5 cm — one centred at B, one at C — and marking where they intersect", "By drawing a single circle centred at the midpoint of BC", "It cannot be found precisely without trial and error"],
                      answer: 1,
                      explanation: "The intersection of two arcs (radius 5 cm each, centred at B and at C respectively) is guaranteed to be exactly 5 cm from both points — precise and free of trial and error."
                    },
                    {
                      question: "For which shape does a diagonal always divide EVERY corner angle into two exactly equal halves (like 45° and 45°)?",
                      options: ["Any rectangle", "Only a square", "Only a very long, thin rectangle", "No quadrilateral can do this"],
                      answer: 1,
                      explanation: "Only in a square (where adjacent sides are equal) does a diagonal split every corner angle into two exactly equal halves; in a general rectangle, the split is usually into two unequal angles."
                    }
                  ]
                }
              ]
            },
            {
              id: "6m-9",
              title: "Symmetry",
              topics: [
                {
                  id: "6m-9-1",
                  title: "1. Line of Symmetry & Reflection",
                  lab: { type: "punch-hole-symmetry-sim" },
                  theory: {
                    intro: "Many beautiful patterns — flowers, rangolis, butterflies — have parts that repeat in a definite way. This repetition is called symmetry, and one of the simplest kinds is line symmetry, found by folding a figure in half.",
                    sections: [
                      {
                        heading: "What Is a Line of Symmetry?",
                        text: "If a figure is folded along a certain line and the two halves match up exactly — covering each other completely — that line is called a line of symmetry. A blue triangle folded along its centre line produces two 'mirror halves' that overlap perfectly. But not every figure has such a line: four connected puzzle pieces folded down the middle may NOT match up, meaning that line is not a line of symmetry for that figure."
                      },
                      {
                        heading: "Figures with Multiple Lines of Symmetry",
                        text: "A square doesn't have just one line of symmetry — folding a square piece of paper vertically, then horizontally, then along each diagonal, shows that a square actually has 4 different lines of symmetry altogether."
                      },
                      {
                        heading: "Rectangles vs Squares: What About the Diagonal?",
                        text: "We know a square's diagonal is a line of symmetry. But is a non-square rectangle's diagonal also a line of symmetry? Folding a rectangular piece of paper along its diagonal shows that the two triangular halves do NOT overlap exactly — so, unlike a square, a general rectangle's diagonal is NOT a line of symmetry."
                      },
                      {
                        heading: "Reflection",
                        text: "Folding a figure along a line of symmetry can also be described as reflecting one half onto the other. In a square ABCD with a vertical line of symmetry, reflecting the right side (containing corners B and C) sends those points exactly onto the positions of the left-side corners (A and D). A figure with one or more lines of symmetry is said to have reflection symmetry."
                      },
                      {
                        heading: "Generating Symmetric Shapes",
                        text: "Symmetric patterns can be created in playful ways: dropping ink on one half of a folded paper and pressing the halves together (an 'ink blot'); folding paper and cutting a shape along the fold, then unfolding it; or punching holes through folded paper and observing the mirrored pattern that appears when unfolded."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "The Punching Game",
                      objective: "To discover, through hands-on folding and hole-punching, how a fold line acts as a line of symmetry for the resulting pattern of holes.",
                      materials: ["A square sheet of paper", "A hole punch (or a pencil to poke small holes)"],
                      steps: [
                        "Fold a square sheet of paper in half — choose a vertical, horizontal, or diagonal fold.",
                        "While the paper is still folded, punch a hole anywhere through both layers at once.",
                        "Unfold the paper and observe where the hole(s) now appear.",
                        "Identify the fold line, and check that the two holes are positioned as exact mirror images of each other across that line.",
                        "Repeat with different fold directions and hole positions to create a variety of symmetric patterns."
                      ],
                      observation: "Punching a single hole through folded paper always produces two holes once unfolded — positioned as exact mirror images of one another across the fold line, which is the figure's line of symmetry."
                    }
                  ],
                  quiz: [
                    {
                      question: "What does it mean for a line to be a 'line of symmetry' of a figure?",
                      options: ["The line passes through the centre of the figure", "Folding the figure along that line makes the two halves overlap exactly", "The line divides the figure into two equal areas, regardless of shape", "Every figure has exactly one line of symmetry"],
                      answer: 1,
                      explanation: "A line of symmetry is a line along which folding the figure causes its two halves to overlap completely and exactly."
                    },
                    {
                      question: "Is the diagonal of a NON-square rectangle a line of symmetry?",
                      options: ["Yes, always", "No — folding along the diagonal of a general rectangle does not make the two triangular halves overlap exactly", "Only if the rectangle is very long and thin", "Only for one of the two diagonals"],
                      answer: 1,
                      explanation: "Unlike a square, a general rectangle's diagonal does not divide it into two overlapping halves, so it is not a line of symmetry."
                    },
                    {
                      question: "How many lines of symmetry does a square have in total?",
                      options: ["1", "2", "4", "8"],
                      answer: 2,
                      explanation: "A square has 4 lines of symmetry: one vertical, one horizontal, and two diagonals."
                    },
                    {
                      question: "When a square is reflected along its vertical line of symmetry, what happens to the points on the right side?",
                      options: ["They disappear", "They land exactly on the corresponding points on the left side", "They move to the top of the square", "Nothing changes"],
                      answer: 1,
                      explanation: "Reflecting along a line of symmetry maps each point on one side exactly onto a corresponding point on the other side."
                    },
                    {
                      question: "When you punch a single hole through paper folded once and then unfold it, how many holes typically appear, and why?",
                      options: ["Just one, unchanged", "Two — the original hole and its mirror-image reflection across the fold line", "Four, one in each corner", "It depends on the paper's colour"],
                      answer: 1,
                      explanation: "Punching through both folded layers creates two holes once unfolded — one at the original position, and one at its mirror-image position across the fold (the line of symmetry)."
                    }
                  ]
                },
                {
                  id: "6m-9-2",
                  title: "2. Rotational Symmetry & Angles of Symmetry",
                  lab: { type: "rotational-symmetry-sim" },
                  theory: {
                    intro: "Not every symmetric figure has a line of symmetry. A paper windmill looks symmetrical, yet folding it in half never makes the two sides overlap — its symmetry comes from a completely different kind of transformation: rotation.",
                    sections: [
                      {
                        heading: "What Is Rotational Symmetry?",
                        text: "A paper windmill has no line of symmetry — folding it never makes the two halves overlap. But if you rotate it by 90° about the point at its centre, the windmill looks exactly the same as before. We say the windmill has rotational symmetry. The fixed point about which the figure is rotated is called the centre of rotation."
                      },
                      {
                        heading: "Angle of Symmetry",
                        text: "An angle through which a figure can be rotated so that it looks exactly the same as before is called an angle of rotational symmetry (or simply, an angle of symmetry). For the windmill, the angles of symmetry are 90°, 180°, 270°, and 360°. Since rotating ANY figure by a full 360° always brings it back to its starting position, 360° is always an angle of symmetry for every figure."
                      },
                      {
                        heading: "Radial-Arm Figures",
                        text: "A figure made of evenly-spaced 'radial arms' extending from a central point shows a clear pattern: if there are n arms spaced equally apart, the figure has exactly n angles of symmetry, each a multiple of (360° ÷ n). For example, 3 evenly-spaced arms give angles of symmetry at 120°, 240°, and 360°; 4 evenly-spaced arms (like the windmill) give 90°, 180°, 270°, and 360°."
                      },
                      {
                        heading: "The Circle's Special Symmetry",
                        text: "The circle is the most symmetric figure of all. Rotating a circle by ANY angle about its centre leaves it looking exactly the same — so every single angle is an angle of symmetry for a circle. In addition, every diameter of a circle is a line of symmetry, giving a circle infinitely many lines of symmetry as well."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Building and Testing a Pinwheel's Rotational Symmetry",
                      objective: "To construct a radial-arm pinwheel figure and verify its angles of symmetry by physically rotating a cut-out copy over the original.",
                      materials: ["Two sheets of paper", "A pencil, ruler and protractor", "Scissors"],
                      steps: [
                        "Choose a number of arms (for example, 3), and draw a radial-arm figure on paper with the arms spaced evenly at 360° ÷ 3 = 120° apart.",
                        "Trace an identical copy of the figure onto a second sheet, and cut it out.",
                        "Place the cutout exactly on top of the original drawing, aligned at the shared centre point.",
                        "Slowly rotate the cutout around the centre, checking at each point whether it lines up exactly with the original drawing underneath.",
                        "Record every angle (between 0° and 360°) at which the cutout lines up exactly with the original."
                      ],
                      observation: "For a figure with 3 evenly-spaced arms, the cutout lines up exactly with the original at 120°, 240°, and 360° of rotation — confirming these three angles are its angles of symmetry."
                    }
                  ],
                  quiz: [
                    {
                      question: "What is the 'centre of rotation' of a figure?",
                      options: ["The heaviest point of the figure", "The fixed point about which the figure is rotated", "Any point on the figure's boundary", "The point farthest from the edge"],
                      answer: 1,
                      explanation: "The centre of rotation is the fixed point around which a figure is rotated when checking for rotational symmetry."
                    },
                    {
                      question: "Why does a windmill NOT have a line of symmetry, even though it clearly has rotational symmetry?",
                      options: ["It does have a line of symmetry too", "Folding the windmill in half never makes its two sides overlap exactly, even though rotating it by 90° does look the same", "It has no symmetry of any kind", "Rotational and line symmetry are always the same thing"],
                      answer: 1,
                      explanation: "The windmill's two halves never overlap when folded (no line of symmetry), but the whole figure looks unchanged after a 90° rotation (rotational symmetry) — these are two independent properties."
                    },
                    {
                      question: "Is 360° always an angle of symmetry for any figure whatsoever?",
                      options: ["No, only for circles", "Yes — a full 360° rotation always returns any figure to its exact starting position", "Only for figures with radial arms", "Only if the figure also has a line of symmetry"],
                      answer: 1,
                      explanation: "Rotating any figure by a complete 360° turn always brings it back to exactly where it started, so 360° is always an angle of symmetry."
                    },
                    {
                      question: "A radial-arm figure has 5 arms, evenly spaced. What are its 5 angles of symmetry?",
                      options: ["90°, 180°, 270°, 360°, 450°", "72°, 144°, 216°, 288°, 360°", "60°, 120°, 180°, 240°, 360°", "36°, 72°, 108°, 144°, 360°"],
                      answer: 1,
                      explanation: "With 5 evenly-spaced arms, each angle of symmetry is a multiple of 360° ÷ 5 = 72°, giving 72°, 144°, 216°, 288°, and 360°."
                    },
                    {
                      question: "How many angles of symmetry does a circle have?",
                      options: ["Only 360°", "Exactly 4", "Every possible angle — infinitely many", "None, since a circle has no rotational symmetry"],
                      answer: 2,
                      explanation: "A circle looks exactly the same after being rotated by ANY angle about its centre, so it has infinitely many angles of symmetry — every angle works."
                    }
                  ]
                }
              ]
            },
            {
              id: "6m-10",
              title: "The Other Side of Zero (Integers)",
              topics: [
                {
                  id: "6m-10-1",
                  title: "1. Positive & Negative Numbers: Bela's Building of Fun",
                  lab: { type: "integer-lift-sim" },
                  theory: {
                    intro: "The counting numbers 1, 2, 3, ... and zero were only the beginning. Are there numbers that come before 0, less than 0? Bela's multi-storied 'Building of Fun', with floors both above AND below the ground, gives us a perfect way to picture these new numbers.",
                    sections: [
                      {
                        heading: "The Lift and Its Buttons",
                        text: "A lift in the Building of Fun has two buttons: '+' to go up a floor, and '−' to go down a floor. Pressing '+' three times is written as +3, and pressing '−' four times is written as −4. Pressing '+' once moves you up 1 floor; pressing '−' once moves you down 1 floor."
                      },
                      {
                        heading: "Numbering the Floors",
                        text: "The entrance, at ground level, is called Floor 0. Floors above ground are numbered with positive numbers (+1, +2, +3, ...) — reached by pressing '+' that many times from the ground floor. Floors below ground are numbered with negative numbers (−1, −2, −3, ...) — reached by pressing '−' that many times. A number written with a '+' sign is a positive number; one written with a '−' sign is a negative number. Zero itself is neither positive nor negative."
                      },
                      {
                        heading: "Addition as Movement",
                        text: "We can describe any lift trip as: Starting Floor + Movement = Target Floor. For example, starting at the Food Court (Floor +1) and pressing +2 lands you at (+1) + (+2) = +3, the Book Store."
                      },
                      {
                        heading: "Combining Button Presses",
                        text: "Gurmit, in the Toy Store, wanted to go down 2 floors, but pressed '+' twice by mistake, then quickly pressed '−' three times to correct it. The combined movement is (+2) + (−3) = −1 — he ends up 1 floor below where he started, showing that combining button presses is itself a form of addition."
                      },
                      {
                        heading: "Inverses",
                        text: "If you press +3 and then press −3, you return to exactly where you started: (+3) + (−3) = 0. We call −3 the inverse of +3 (and, likewise, +3 is the inverse of −3). Every number has an inverse that, when added to it, gives zero."
                      },
                      {
                        heading: "Comparing Numbers Using Floors",
                        text: "A higher floor always corresponds to a greater number: Floor +4 is higher than Floor +3, so +4 > +3. All negative-numbered floors lie below Floor 0, so every negative number is less than 0; all positive-numbered floors lie above Floor 0, so every positive number is greater than 0. Between two negative floors, the one 'more negative' is actually lower — so −4 < −3."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Gurmit's Mix-Up in the Toy Store",
                      objective: "To see that combining several button presses (movements) in the lift is itself an act of addition of integers.",
                      materials: ["Paper and pencil to track the lift's movements"],
                      steps: [
                        "Gurmit is in the Toy Store and wants to move down 2 floors.",
                        "By mistake, he presses the '+' button twice — a movement of (+2).",
                        "Realising his error, he presses the '−' button three times — a movement of (−3).",
                        "Combine the two movements by adding them: (+2) + (−3) = −1.",
                        "Conclude: since the net movement is −1, Gurmit ends up exactly 1 floor below the Toy Store."
                      ],
                      observation: "Combining button presses works exactly like adding integers: (+2) + (−3) = −1, a net movement of just 1 floor down, even though 5 total button presses were made."
                    }
                  ],
                  quiz: [
                    {
                      question: "In Bela's Building of Fun, what is the floor number of the entrance ('Welcome Hall')?",
                      options: ["Floor +1", "Floor 0", "Floor −1", "It has no floor number"],
                      answer: 1,
                      explanation: "The ground-level entrance is called Floor 0 — the reference point from which all other floors are numbered."
                    },
                    {
                      question: "What do we call a number written with a '+' sign in front of it, like +3?",
                      options: ["A negative number", "A positive number", "A zero number", "An inverse number"],
                      answer: 1,
                      explanation: "A number with a '+' sign in front, such as +3, is called a positive number."
                    },
                    {
                      question: "Gurmit presses '+' twice, then '−' three times. What is the combined (net) movement?",
                      options: ["(+2) + (−3) = +5", "(+2) + (−3) = −1", "(+2) + (−3) = −5", "(+2) + (−3) = +1"],
                      answer: 1,
                      explanation: "Adding the two movements: (+2) + (−3) = −1, a net movement of 1 floor down."
                    },
                    {
                      question: "What is the inverse of +3, and what happens when you add a number to its inverse?",
                      options: ["The inverse is +3 itself; adding gives +6", "The inverse is −3; adding a number to its inverse always gives 0", "The inverse is 0; adding gives +3", "Numbers do not have inverses"],
                      answer: 1,
                      explanation: "The inverse of +3 is −3, since (+3) + (−3) = 0 — adding any number to its inverse always results in zero."
                    },
                    {
                      question: "Between Floor −4 and Floor −3, which is lower, and how would you write this comparison?",
                      options: ["Floor −3 is lower, so −3 < −4", "Floor −4 is lower, so −4 < −3", "They are the same floor", "Negative floors cannot be compared"],
                      answer: 1,
                      explanation: "Floor −4 is below Floor −3 (further from the ground), so −4 < −3."
                    }
                  ]
                },
                {
                  id: "6m-10-2",
                  title: "2. Subtraction as Movement & Working with Larger Integers",
                  theory: {
                    intro: "Just as addition tells us the result of a lift movement, subtraction tells us exactly what movement (button press) is needed to get from one floor to another — and the very same idea scales up to enormous integers, using a mine shaft or an 'infinite lift'.",
                    sections: [
                      {
                        heading: "Subtraction as Finding the Missing Movement",
                        text: "We can write: Target Floor − Starting Floor = Movement needed. For example, going from the Art Centre (+2) to the Sports Centre (+5) requires pressing +3, so (+5) − (+2) = +3."
                      },
                      {
                        heading: "Worked Examples",
                        text: "If the Target Floor is −1 and the Starting Floor is −2, you need to press +1 (one floor up), so (−1) − (−2) = (+1). If the Target Floor is −1 and the Starting Floor is +3, you need to press −4 (four floors down), so (−1) − (+3) = (−4)."
                      },
                      {
                        heading: "Adding and Subtracting Larger Integers: The Mine Shaft",
                        text: "The same rules work at a much bigger scale in a mine shaft, where levels are marked in metres above (positive) or below (negative) the ground. Starting Level + Movement = Target Level, and Target Level − Starting Level = Movement needed. For example, (+40) + (+60) = +100, and (+40) − (−50) = +90."
                      },
                      {
                        heading: "The Infinite Lift and the Number Line",
                        text: "Imagining a lift that extends forever upward and downward from Level 0 — an 'infinite lift' — starts to look a lot like a number line. In fact, if you rotate this infinite lift by 90°, it becomes exactly the number line: negative numbers to the left of 0, positive numbers to the right, with smaller numbers always to the left of bigger numbers."
                      },
                      {
                        heading: "Converting Subtraction to Addition",
                        text: "Any subtraction can always be rewritten as an addition: the number being subtracted is replaced by its inverse and then added instead. For example, (+7) − (+5) = (+7) + (−5), and (+6) − (−9) = (+6) + (+9). This trick works for any pair of integers, no exceptions."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Finding Movements to Reach Floor −5",
                      objective: "To practise using subtraction to find the movement needed to reach the same target floor from several different starting floors.",
                      materials: ["Paper and pencil"],
                      steps: [
                        "Choose several different starting floors, such as +2, +1, and −2.",
                        "For each starting floor, calculate the movement needed to reach Floor −5 using: Target Floor − Starting Floor = Movement.",
                        "Starting at +2: movement = (−5) − (+2) = −7, so (+2) + (−7) = −5.",
                        "Starting at +1: movement = (−5) − (+1) = −6, so (+1) + (−6) = −5.",
                        "Starting at −2: movement = (−5) − (−2) = −3, so (−2) + (−3) = −5.",
                        "Compare all three results — what pattern do you notice about the size of the movement needed as the starting floor gets higher?"
                      ],
                      observation: "The higher the starting floor, the larger (more negative) the downward movement needed to reach the same target floor of −5."
                    }
                  ],
                  quiz: [
                    {
                      question: "If the Target Floor is +5 and the Starting Floor is +2, what movement (button press) is needed?",
                      options: ["+7", "+3", "−3", "+2"],
                      answer: 1,
                      explanation: "Target Floor − Starting Floor = Movement: (+5) − (+2) = +3."
                    },
                    {
                      question: "Using the mine shaft rules, what is (+40) − (−50)?",
                      options: ["−10", "+10", "+90", "−90"],
                      answer: 2,
                      explanation: "(+40) − (−50) = (+40) + (+50) = +90."
                    },
                    {
                      question: "When the 'infinite lift' is rotated by 90°, what does it essentially become?",
                      options: ["A circle", "A number line", "A mine shaft", "A different lift entirely"],
                      answer: 1,
                      explanation: "Rotating the infinite lift by 90° turns it into exactly the number line, with negative numbers to the left of 0 and positive numbers to the right."
                    },
                    {
                      question: "Convert the subtraction (+7) − (+5) into an equivalent addition statement.",
                      options: ["(+7) + (+5)", "(+7) + (−5)", "(−7) + (+5)", "(−7) + (−5)"],
                      answer: 1,
                      explanation: "Subtracting a number is the same as adding its inverse: (+7) − (+5) = (+7) + (−5)."
                    },
                    {
                      question: "Starting at Floor +2, what movement is needed to reach Floor −5?",
                      options: ["+7", "−3", "−7", "+3"],
                      answer: 2,
                      explanation: "Target Floor − Starting Floor = Movement: (−5) − (+2) = −7."
                    }
                  ]
                },
                {
                  id: "6m-10-3",
                  title: "3. The Token Model: Adding & Subtracting with Tokens",
                  lab: { type: "token-zero-pair-sim" },
                  theory: {
                    intro: "Positive (green) and negative (red) tokens give us a completely hands-on way to add and subtract integers — built entirely around one simple idea: a 'zero pair'.",
                    sections: [
                      {
                        heading: "What Is a Zero Pair?",
                        text: "A positive token and a negative token together are called a zero pair, because their combined value is exactly zero — they cancel each other out. This matches pressing '+' once and then '−' once in the lift: the two presses cancel, leaving you back where you started."
                      },
                      {
                        heading: "Adding with Tokens",
                        text: "To add two integers with tokens, lay out the positive tokens for one and the negative tokens for the other, then cancel out every possible zero pair. Whatever tokens remain give the answer. For example, to add +5 and −8: lay out 5 positive and 8 negative tokens, cancel 5 zero pairs, and 3 negative tokens remain — so (+5) + (−8) = −3."
                      },
                      {
                        heading: "Subtracting with Tokens",
                        text: "To subtract using tokens, start by laying out tokens for the first number, then try to remove the required number of tokens of the matching type. If there aren't enough tokens of that type, add extra zero pairs first (since a zero pair never changes the overall value), and then remove what's needed."
                      },
                      {
                        heading: "Worked Subtraction Examples",
                        text: "(+5) − (+4): remove 4 positive tokens from 5 positive tokens, leaving +1. (−7) − (−5): remove 5 negative tokens from 7 negative tokens, leaving −2. (+5) − (+6): there are not enough positive tokens to remove 6, so first add one zero pair (making 6 positives and 1 negative), then remove 6 positives, leaving −1. (+4) − (−6): there are no negative tokens to remove, so add 6 zero pairs first (making 10 positives and 6 negatives), then remove the 6 negatives, leaving +10."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Modelling the Lift Attendant's Pocket of Tokens",
                      objective: "To use the token model to determine a lift attendant's final floor after a mix of '+' and '−' button presses.",
                      materials: ["Green counters or tokens (for '+')", "Red counters or tokens (for '−')"],
                      steps: [
                        "Imagine the lift attendant starts with an empty pocket at Floor 0.",
                        "Every time '+' is pressed, one green (positive) token goes into the pocket; every time '−' is pressed, one red (negative) token goes in.",
                        "After some time, the pocket contains 5 positive tokens and 3 negative tokens.",
                        "Cancel out matching zero pairs: 3 positive tokens cancel with the 3 negative tokens, leaving 2 positive tokens.",
                        "Conclude the attendant's current floor from the remaining tokens."
                      ],
                      observation: "(+5) + (−3) = +2 — after cancelling the zero pairs, 2 positive tokens remain, so the attendant is on Floor +2."
                    }
                  ],
                  quiz: [
                    {
                      question: "What is a 'zero pair' in the token model?",
                      options: ["Two positive tokens together", "Two negative tokens together", "One positive token and one negative token together, with a combined value of zero", "An empty pocket with no tokens"],
                      answer: 2,
                      explanation: "A zero pair consists of one positive and one negative token, which together cancel out to a value of zero."
                    },
                    {
                      question: "Using tokens, what is (+5) + (−8)?",
                      options: ["+13", "−13", "+3", "−3"],
                      answer: 3,
                      explanation: "Laying out 5 positive and 8 negative tokens and cancelling 5 zero pairs leaves 3 negative tokens: (+5) + (−8) = −3."
                    },
                    {
                      question: "To compute (+5) − (+6) using tokens, why must you first add a zero pair?",
                      options: ["To make the picture look neater", "Because there are only 5 positive tokens, not enough to remove 6 of them — so an extra zero pair is added first, without changing the total value", "Zero pairs are always required before any subtraction", "Because 6 is larger than 5, subtraction is impossible without this step"],
                      answer: 1,
                      explanation: "With only 5 positive tokens available, removing 6 is impossible without first adding a zero pair (which doesn't change the total value), giving enough positive tokens to remove."
                    },
                    {
                      question: "Using tokens, what is (−7) − (−5)?",
                      options: ["−12", "−2", "+2", "+12"],
                      answer: 1,
                      explanation: "Removing 5 negative tokens from 7 negative tokens leaves 2 negative tokens: (−7) − (−5) = −2."
                    },
                    {
                      question: "A lift attendant's pocket contains 5 positive tokens and 3 negative tokens. What floor does this represent?",
                      options: ["Floor +8", "Floor +5", "Floor +2", "Floor −2"],
                      answer: 2,
                      explanation: "The 3 negative tokens cancel 3 of the 5 positive tokens as zero pairs, leaving 2 positive tokens: (+5) + (−3) = +2, so the attendant is on Floor +2."
                    }
                  ]
                },
                {
                  id: "6m-10-4",
                  title: "4. Integers in Real Life & A Pinch of History",
                  theory: {
                    intro: "Integers show up far beyond lifts and mine shafts — in bank accounts, in geography, and in the temperatures we feel every day. And their story goes back over 1,300 years, to a mathematician in India named Brahmagupta.",
                    sections: [
                      {
                        heading: "Credits and Debits in Banking",
                        text: "A bank balance can be thought of using integers: 'credits' (money deposited) act like positive numbers, and 'debits' (money withdrawn or spent) act like negative numbers. Some banks even allow a balance to temporarily go negative — though they may charge extra 'interest' or a 'fee' for this. In general, it's best to try to maintain a positive balance."
                      },
                      {
                        heading: "Geographical Cross-Sections",
                        text: "Heights of geographical features are measured from 'sea level', taken as 0 m. Heights above sea level (like mountains) are positive numbers; depths below sea level (like the ocean floor) are negative numbers. Mount Everest, the highest point on Earth, stands at about +8,848 m. The Challenger Deep in the Mariana Trench, one of the lowest known points on Earth, lies at about −10,994 m."
                      },
                      {
                        heading: "Temperature",
                        text: "Temperature is measured in degrees Celsius (°C), where 0°C marks the freezing point of water. Some places in India — such as Leh in Ladakh — regularly experience temperatures below 0°C during winter, requiring negative numbers to describe just how cold it gets."
                      },
                      {
                        heading: "A Pinch of History: Brahmagupta's Rules",
                        text: "India has a long history with negative numbers: Kautilya's Arthaśhāstra (around 300 BCE) discussed credit and debit, including the idea of a negative balance, and the Bakśhālī manuscript (around 300 CE) explicitly used negative numbers in accounting. It was Brahmagupta, in his Brāhma-sphuṭa-siddhānta of 628 CE, who first gave complete, general rules for adding and subtracting positive numbers, negative numbers, and zero — treating all of them as equally valid numbers. These ideas travelled to the Arab world by the 9th century and reached Europe by the 13th century — though some European mathematicians, like Lazare Carnot in the 18th century, still dismissively called negative numbers 'absurd'."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Reading a Geographical Cross-Section",
                      objective: "To practise reading positive and negative heights from a geographical cross-section diagram, using sea level as the zero reference.",
                      materials: ["A geographical cross-section diagram with labelled points and a height-in-metres axis"],
                      steps: [
                        "Examine a cross-section diagram with several labelled points (such as A through G) plotted against a height axis, with 'sea level' marked as 0.",
                        "For each labelled point, read off its approximate height: positive if above the sea-level line, negative if below it.",
                        "List all the points in decreasing order of height, from highest to lowest.",
                        "Identify which point is the overall highest and which is the overall lowest in the diagram.",
                        "Compare the diagram's extremes to real Earth records: Mount Everest at about +8,848 m (highest point), and the Challenger Deep at about −10,994 m (one of the lowest known points)."
                      ],
                      observation: "Points above the sea-level line always have positive heights, and points below it always have negative heights — the greater the depth below sea level, the more negative the number."
                    }
                  ],
                  quiz: [
                    {
                      question: "In banking, what do 'credits' and 'debits' correspond to, in terms of positive and negative numbers?",
                      options: ["Credits are negative, debits are positive", "Credits are positive numbers (deposits), debits are negative numbers (withdrawals/payments)", "Both credits and debits are always positive", "Credits and debits are unrelated to integers"],
                      answer: 1,
                      explanation: "Credits (money added to an account) act like positive numbers, while debits (money taken out) act like negative numbers."
                    },
                    {
                      question: "What is used as the 'zero' reference point when measuring geographical heights and depths?",
                      options: ["The centre of the Earth", "Sea level", "The highest mountain peak", "The equator"],
                      answer: 1,
                      explanation: "Sea level (0 m) is the standard reference point: heights above it are positive, and depths below it are negative."
                    },
                    {
                      question: "What is the approximate height of Mount Everest above sea level?",
                      options: ["+1,000 m", "+8,848 m", "+108 m", "−8,848 m"],
                      answer: 1,
                      explanation: "Mount Everest, the highest point on Earth, stands at approximately +8,848 m above sea level."
                    },
                    {
                      question: "In which historical Indian text did Brahmagupta first give complete, general rules for adding and subtracting positive numbers, negative numbers, and zero?",
                      options: ["The Arthaśhāstra", "The Bakśhālī manuscript", "The Brāhma-sphuṭa-siddhānta (628 CE)", "The Rig Veda"],
                      answer: 2,
                      explanation: "Brahmagupta's Brāhma-sphuṭa-siddhānta, written in 628 CE, was the first text to give complete, general rules covering positive numbers, negative numbers, and zero together."
                    },
                    {
                      question: "What temperature, in degrees Celsius, marks the freezing point of water — the natural 'zero' for everyday temperature measurement?",
                      options: ["100°C", "37°C", "0°C", "−273°C"],
                      answer: 2,
                      explanation: "0°C is defined as the freezing point of water, serving as the reference point for the Celsius temperature scale."
                    }
                  ]
                }
              ]
            }
          ]
        },
        social_science: { name: "Social Science", icon: "🌍", chapters: [] },
        english: { name: "English", icon: "📚", chapters: [] }
      }
    },
    "7": {
      name: "Class 7",
      tagline: "Exploring & Investigating",
      theme: "linear-gradient(135deg, #4facfe, #00f2fe)",
      subjects: {
        science: { name: "Science", icon: "🧪", chapters: [] },
        mathematics: {
          name: "Mathematics",
          icon: "📐",
          chapters: [
            {
              id: "7m-4",
              title: "Expressions Using Letter-Numbers",
              topics: [
                {
                  id: "7m-4-1",
                  title: "1. Letter-Numbers & Algebraic Expressions",
                  lab: { type: "matchstick-pattern-sim" },
                  theory: {
                    intro: "Algebra gives us a concise, shorthand way to express mathematical relationships and patterns — one that also helps us understand and explain why those patterns hold true.",
                    sections: [
                      {
                        heading: "Shabnam and Aftab's Ages",
                        text: "Shabnam is 3 years older than Aftab. Instead of writing the phrase 'Aftab's age' every time, we use a letter — say a — to stand for it, and s for Shabnam's age. The relationship 'Shabnam's age = Aftab's age + 3' becomes the short expression s = a + 3. If Aftab's age is 23, then s = 23 + 3 = 26.\n\nLetters like a and s that stand for numbers are called letter-numbers, and expressions containing them, like a + 3, are called algebraic expressions. Working backwards, since Aftab is 3 years younger than Shabnam, the expression for Aftab's age is a = s − 3."
                      },
                      {
                        heading: "Parthiv's Matchstick L's",
                        text: "Parthiv makes a repeating pattern by placing L-shapes next to each other, using 2 matchsticks per L. To make 5 L's needs 5 × 2 sticks, to make 45 L's needs 45 × 2 sticks. In general, if n stands for the number of L's, the number of matchsticks needed is the algebraic expression 2 × n."
                      },
                      {
                        heading: "Ketaki's Coconut-Jaggery Laddus",
                        text: "Ketaki sells coconuts at ₹35 each and jaggery at ₹60 per kg. If 'c' stands for the number of coconuts and 'j' for the kilograms of jaggery, the cost of coconuts is c × 35 and the cost of jaggery is j × 60. The total amount to be paid is the algebraic expression c × 35 + j × 60 — for different values of c and j, this expression takes different values."
                      },
                      {
                        heading: "Formulas: Perimeter of a Square",
                        text: "The perimeter of a square is 4 times its side length, written as the expression 4 × q, where q is the sidelength. Mathematical relations expressed this concise way, using letter-numbers, are often called formulas."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Finding the Matchstick Formula",
                      objective: "To discover, by building and counting, the algebraic formula connecting the number of L-shapes to the number of matchsticks needed.",
                      materials: ["A box of matchsticks (or drawn L-shapes on paper)"],
                      steps: [
                        "Build (or draw) 1 L-shape using matchsticks and count how many sticks it uses.",
                        "Build 2 L-shapes side by side and count the total sticks used.",
                        "Build 3 L-shapes side by side and count the total sticks used.",
                        "Notice the pattern: the number of sticks is always 2 times the number of L's.",
                        "Without building 45 L's, use the formula 2 × n to predict how many sticks would be needed."
                      ],
                      observation: "The formula 2 × n correctly predicts 90 matchsticks for 45 L's — the algebraic expression lets us answer instantly, without needing to build or count anything."
                    }
                  ],
                  quiz: [
                    {
                      question: "If Aftab's age is represented by the letter-number 'a', and Shabnam is always 3 years older, what is the algebraic expression for Shabnam's age?",
                      options: ["a − 3", "a + 3", "3a", "a ÷ 3"],
                      answer: 1,
                      explanation: "Since Shabnam is 3 years older than Aftab, her age is Aftab's age plus 3, written as the expression a + 3."
                    },
                    {
                      question: "Using s = a + 3, if Aftab's age (a) is 23, what is Shabnam's age (s)?",
                      options: ["20", "23", "26", "69"],
                      answer: 2,
                      explanation: "Substituting a = 23 into the expression: s = 23 + 3 = 26."
                    },
                    {
                      question: "Parthiv makes matchstick L's, using 2 matchsticks per L. What algebraic expression gives the number of matchsticks needed for n L's?",
                      options: ["n + 2", "2 × n", "n ÷ 2", "2 + n + 2"],
                      answer: 1,
                      explanation: "Since each L uses 2 matchsticks, the total for n L's is the expression 2 × n."
                    },
                    {
                      question: "Ketaki sells coconuts at ₹35 each and jaggery at ₹60 per kg. What is the algebraic expression for the total cost of 'c' coconuts and 'j' kg of jaggery?",
                      options: ["c + j", "35 + 60", "c × 35 + j × 60", "(c + j) × 35"],
                      answer: 2,
                      explanation: "The cost of coconuts is c × 35 and the cost of jaggery is j × 60; the total is their sum: c × 35 + j × 60."
                    },
                    {
                      question: "What is the formula for the perimeter of a square with sidelength q?",
                      options: ["q + q", "4 × q", "q × q", "2 × q"],
                      answer: 1,
                      explanation: "A square has 4 equal sides, so its perimeter is 4 times its sidelength: 4 × q."
                    }
                  ]
                },
                {
                  id: "7m-4-2",
                  title: "2. Revisiting Arithmetic & Omitting the Multiplication Sign",
                  theory: {
                    intro: "Before working further with algebraic expressions, it helps to revisit how we simplify ordinary arithmetic expressions — using swapping, grouping, and brackets — and to learn a useful shorthand: dropping the multiplication sign.",
                    sections: [
                      {
                        heading: "Swapping and Grouping",
                        text: "Terms of an expression can be added in any order (swapping) and combined in convenient groups (grouping) without changing the value. For example, 83 + 28 − 13 + 32 can be regrouped as (83 + 28) + (−13 + 32) = 70 + 60 = 130, which is easier to compute than working strictly left to right."
                      },
                      {
                        heading: "Brackets with a Negative Sign",
                        text: "An expression like 68 − (18 + 13) can be evaluated by solving the bracket first — 68 − 31 = 37 — or by removing the bracket and distributing the negative sign: 68 + (−18) + (−13) = 50 + (−13) = 37. Both methods give the same answer."
                      },
                      {
                        heading: "Evaluating Algebraic Expressions",
                        text: "An algebraic expression takes a number value when its letter-numbers are replaced by numbers. For example, in a + 3, replacing a with 23 gives the value 26. Substituting values into expressions like this lets us answer real questions using our formulas."
                      },
                      {
                        heading: "Omitting the Multiplication Sign",
                        text: "As a standard shorthand, 4 × n is written as 4n — the number is written first, followed by the letter, with the multiplication sign dropped entirely. So 7k at k = 4 gives 7 × 4 = 28, and the expression 5m + 3 at m = 2 gives 5 × 2 + 3 = 13."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Mind the Mistake, Mend the Mistake",
                      objective: "To spot and correct errors in substituting values into algebraic expressions, sharpening care with negative signs and brackets.",
                      materials: ["Paper and pencil"],
                      steps: [
                        "Check the claim: 'If a = −4, then 10 − a = 6.' Substitute carefully: 10 − (−4) = 10 + 4 = 14, not 6 — the mistake was not correctly handling the double negative.",
                        "Check the claim: 'If d = 6, then 3d = 36.' Substitute: 3 × 6 = 18, not 36 — the mistake was likely doubling instead of tripling.",
                        "Check the claim: 'If m = −6, then 3(m + 1) = 19.' Substitute: 3 × (−6 + 1) = 3 × (−5) = −15, not 19.",
                        "For each corrected card, write out the substitution step-by-step to avoid sign errors.",
                        "Compare your corrected values with a partner's to confirm the mistakes are properly mended."
                      ],
                      observation: "Most errors came from mishandling negative signs during substitution — writing out each substitution as an explicit sum of terms (as taught in this chapter) helps avoid these mistakes."
                    }
                  ],
                  quiz: [
                    {
                      question: "Evaluate 23 − 10 × 2 by writing it as a sum of terms.",
                      options: ["26", "3", "6", "16"],
                      answer: 1,
                      explanation: "23 − 10 × 2 = 23 + (−10 × 2) = 23 + (−20) = 3."
                    },
                    {
                      question: "What is the value of the expression 5m + 3 when m = 2?",
                      options: ["10", "11", "13", "25"],
                      answer: 2,
                      explanation: "5m + 3 means 5 × m + 3. At m = 2: 5 × 2 + 3 = 10 + 3 = 13."
                    },
                    {
                      question: "If a = −4, what is the correct value of 10 − a?",
                      options: ["6", "14", "−6", "−14"],
                      answer: 1,
                      explanation: "10 − a = 10 − (−4) = 10 + 4 = 14. The common mistake is to forget that subtracting a negative number means adding."
                    },
                    {
                      question: "Why is 4 × n typically written as 4n in algebra?",
                      options: ["Because n must always equal 4", "As a standard shorthand: the number is written first, followed by the letter, dropping the multiplication sign", "Because 4n means 4 + n", "It is not standard; both must always be written the same way"],
                      answer: 1,
                      explanation: "As a shorthand convention, we omit the multiplication sign between a number and a letter-number, writing the number first: 4 × n becomes 4n."
                    },
                    {
                      question: "If d = 6, what is the correct value of the expression 3d?",
                      options: ["9", "18", "36", "63"],
                      answer: 1,
                      explanation: "3d means 3 × d. At d = 6: 3 × 6 = 18."
                    }
                  ]
                },
                {
                  id: "7m-4-3",
                  title: "3. Simplifying Algebraic Expressions",
                  theory: {
                    intro: "Algebraic expressions can often be rewritten in a shorter, simpler form without changing their value — a skill that becomes essential as expressions grow more complex.",
                    sections: [
                      {
                        heading: "Perimeter of a Rectangle",
                        text: "For a rectangle with length l and breadth b, the perimeter is p = l + b + l + b. Since terms can be added in any order, this becomes l + l + b + b = 2l + 2b. Both expressions (l + b + l + b and 2l + 2b) are equal — they take the same value whenever l and b are replaced by numbers. We call 2l + 2b the simplified form of l + b + l + b."
                      },
                      {
                        heading: "Like and Unlike Terms",
                        text: "In the expression 5c + 3c + 10c, all three terms involve the same letter-number, c — such terms are called like terms, and they can be combined using the distributive property: 5 × c + 3 × c + 10 × c = (5 + 3 + 10) × c = 18c. In contrast, terms like 18c and 11d are unlike terms (different letter-numbers) and cannot be combined any further — the expression 18c + 11d is already in its simplest form."
                      },
                      {
                        heading: "The Rectangle-Splitting View of Distribution",
                        text: "A big rectangle split into two smaller ones of widths 4 and 3 (both height v) has area 4v + 3v by adding the parts, or 7v by using the combined width directly — showing 4v + 3v = 7v. Similarly, splitting a rectangle of length 12 into parts 4 and (12 − 4) gives 12n − 4n = 8n either way."
                      },
                      {
                        heading: "Simplifying with Brackets: The Chair and Table Example",
                        text: "A shop charges ₹40 per chair and ₹75 per table to rent, returning ₹6 per chair and ₹10 per table when returned. For x chairs and y tables, the total amount actually paid is (40x + 75y) − (6x + 10y). Removing the brackets: 40x + 75y − 6x − 10y. Grouping like terms: (40 − 6)x + (75 − 10)y = 34x + 65y."
                      },
                      {
                        heading: "Charu's Quiz Scores",
                        text: "Charu's scores across three quiz rounds are 7p − 3q, 8p − 4q, and 6p − 2q, where p is the score for a correct answer and q is the penalty for a wrong one. Her total score is their sum: (7p − 3q) + (8p − 4q) + (6p − 2q). Removing brackets and grouping like terms: (7 + 8 + 6)p + (−3 − 4 − 2)q = 21p − 9q."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Simplifying the Shop Rental Expression",
                      objective: "To simplify a real algebraic expression involving brackets, by removing brackets and grouping like terms.",
                      materials: ["Paper and pencil"],
                      steps: [
                        "A shop charges ₹40 per chair and ₹75 per table to rent, and returns ₹6 per chair and ₹10 per table when they are returned.",
                        "For x chairs and y tables, write the total amount paid at the start: 40x + 75y.",
                        "Write the total amount returned: 6x + 10y.",
                        "Write the total amount actually paid as (40x + 75y) − (6x + 10y), then remove the brackets: 40x + 75y − 6x − 10y.",
                        "Group the like terms together: (40 − 6)x + (75 − 10)y, and simplify to get the final answer: 34x + 65y."
                      ],
                      observation: "The simplified expression 34x + 65y gives the actual net amount paid in rupees directly — without needing to separately track amounts paid and returned every time."
                    }
                  ],
                  quiz: [
                    {
                      question: "Simplify the expression l + b + l + b.",
                      options: ["lb", "2l + 2b", "l + b", "2(l + b + l + b)"],
                      answer: 1,
                      explanation: "Since terms can be added in any order: l + l + b + b = 2l + 2b."
                    },
                    {
                      question: "Simplify the expression 5c + 3c + 10c.",
                      options: ["15c", "18c", "18", "5 + 3 + 10 + c"],
                      answer: 1,
                      explanation: "These are like terms (all involve c), so by the distributive property: (5 + 3 + 10)c = 18c."
                    },
                    {
                      question: "Can the expression 18c + 11d be simplified any further? Why or why not?",
                      options: ["Yes, to 29cd", "No — c and d are unlike terms (different letter-numbers), so they cannot be combined", "Yes, to 29(c + d)", "Yes, to 198cd"],
                      answer: 1,
                      explanation: "18c and 11d are unlike terms since they involve different letter-numbers, so the expression is already in its simplest form."
                    },
                    {
                      question: "Simplify the expression (40x + 75y) − (6x + 10y).",
                      options: ["34x + 65y", "46x + 85y", "34x + 85y", "46x + 65y"],
                      answer: 0,
                      explanation: "Removing brackets: 40x + 75y − 6x − 10y. Grouping like terms: (40−6)x + (75−10)y = 34x + 65y."
                    },
                    {
                      question: "Charu's three quiz-round scores are 7p − 3q, 8p − 4q, and 6p − 2q. What is her total simplified score?",
                      options: ["21p − 9q", "21p + 9q", "21pq", "9p − 21q"],
                      answer: 0,
                      explanation: "Adding and grouping like terms: (7+8+6)p + (−3−4−2)q = 21p − 9q."
                    }
                  ]
                },
                {
                  id: "7m-4-4",
                  title: "4. Discovering Patterns: Number Machines, Calendars & Matchsticks",
                  lab: { type: "formula-machine-sim" },
                  theory: {
                    intro: "Algebraic expressions are powerful tools for uncovering hidden patterns and relationships — and even for proving that a pattern will always hold, no matter how far it's extended.",
                    sections: [
                      {
                        heading: "Formula Detective: Number Machines",
                        text: "A 'number machine' takes two input numbers and performs the same operations on them every time to produce an output. Given several input-output pairs, we can detect the hidden formula. For example, a machine that always outputs 'two times the first number minus the second' follows the formula 2a − b: for inputs 5 and 2, the output is 2×5−2 = 8."
                      },
                      {
                        heading: "Somjit's Saree Border Pattern",
                        text: "In a repeating 6-design pattern along a saree border, Design C appears at every position that is a multiple of 3 (position 3n for the nth time), Design B appears one position before each of these (position 3n − 1), and Design A two positions before (position 3n − 2). Given any position number, dividing it by 3 and checking the remainder (0, 1, or 2) tells us instantly which design appears there — without checking every position from the start."
                      },
                      {
                        heading: "Patterns in a Calendar",
                        text: "In any 2×2 block of dates in a calendar, the two diagonal sums are always equal. If the top-left date is called 'a', the other three dates are a+1 (right), a+7 (below), and a+8 (diagonal). Both diagonal sums — a + (a+8) and (a+1) + (a+7) — simplify to 2a + 8, proving the sums must always be equal, for every possible 2×2 block, without needing to check each one individually."
                      },
                      {
                        heading: "Matchstick Triangle Patterns",
                        text: "In a growing pattern where each step adds one more triangle sharing a side with the last, Step 1 needs 3 matchsticks, and each further step adds 2 more. The formula for the number of matchsticks at Step y is 3 + 2×(y−1), which simplifies to 2y + 1. This can be checked a different way too: at Step y, there are y horizontal matchsticks and y+1 diagonal ones, and y + (y+1) also equals 2y + 1."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Verifying the Calendar Diagonal Trick",
                      objective: "To verify, using algebra, that the two diagonal sums of any 2×2 block of calendar dates are always equal.",
                      materials: ["A calendar page", "Paper and pencil"],
                      steps: [
                        "Pick any 2×2 block of 4 dates from a calendar month, and call the top-left date 'a'.",
                        "Write the other three dates in terms of a: the date to the right is a+1, the date below is a+7, and the diagonal date is a+8.",
                        "Compute the first diagonal sum: a + (a+8).",
                        "Compute the second diagonal sum: (a+1) + (a+7).",
                        "Simplify both sums and confirm they are equal — then repeat with a different 2×2 block to confirm the pattern always holds."
                      ],
                      observation: "Both diagonal sums always simplify to 2a + 8, proving algebraically that this pattern holds for every possible 2×2 block in any calendar, not just the ones we happened to check."
                    }
                  ],
                  quiz: [
                    {
                      question: "A number machine follows the formula 2a − b. What is its output for inputs a = 5, b = 2?",
                      options: ["3", "7", "8", "12"],
                      answer: 2,
                      explanation: "2a − b at a=5, b=2: 2×5 − 2 = 10 − 2 = 8."
                    },
                    {
                      question: "In Somjit's saree border pattern, Design C appears at every position that is a multiple of 3. At what position does Design C appear for the 10th time?",
                      options: ["10", "13", "30", "27"],
                      answer: 2,
                      explanation: "Design C's nth appearance is at position 3n. For n=10: 3×10 = 30."
                    },
                    {
                      question: "In a calendar's 2×2 block with top-left date 'a', what does the diagonal sum a + (a+8) simplify to?",
                      options: ["2a", "2a + 8", "a + 8", "8a"],
                      answer: 1,
                      explanation: "a + (a+8) = a + a + 8 = 2a + 8."
                    },
                    {
                      question: "Using the matchstick triangle formula 2y + 1, how many matchsticks are needed at Step 10?",
                      options: ["19", "20", "21", "30"],
                      answer: 2,
                      explanation: "2y + 1 at y=10: 2×10 + 1 = 21."
                    },
                    {
                      question: "Position 122 leaves a remainder of 2 when divided by 3. According to the saree border pattern's rule, which design appears there?",
                      options: ["Design A", "Design B", "Design C", "None of them"],
                      answer: 1,
                      explanation: "Based on the position-to-design mapping in the pattern, a remainder of 2 on division by 3 corresponds to Design B."
                    }
                  ]
                }
              ]
            },
            {
              id: "7m-5",
              title: "Parallel and Intersecting Lines",
              topics: [
                {
                  id: "7m-5-1",
                  title: "1. Intersecting Lines: Linear Pairs & Vertically Opposite Angles",
                  lab: { type: "intersecting-lines-angle-sim" },
                  theory: {
                    intro: "When a pair of lines meet at a single point on a plane surface, we say the lines intersect. Intersecting lines always create four angles with a beautiful, predictable relationship between them.",
                    sections: [
                      {
                        heading: "Intersecting Lines Form Four Angles",
                        text: "When two lines intersect, four angles are formed at the point of intersection, labelled a, b, c and d going around. Adjacent angles like ∠a and ∠b, which together form a straight line, are called a linear pair — and a linear pair always adds up to 180°."
                      },
                      {
                        heading: "Vertically Opposite Angles",
                        text: "Opposite angles like ∠b and ∠d, formed by two intersecting lines, are called vertically opposite angles — and they are always equal to each other. We can prove this without measuring: since ∠a + ∠b = 180° and ∠a + ∠d = 180° (both being linear pairs with ∠a), it follows that ∠b = ∠d. Similarly, ∠a and ∠c must be equal. Such a logical justification is called a proof in mathematics."
                      },
                      {
                        heading: "Why Measurements May Not Match Exactly",
                        text: "When measuring angles with a protractor in real life, linear pairs may not add up to exactly 180°, and vertically opposite angles may not be perfectly equal. This happens due to measurement errors or the unavoidable thickness of drawn lines — geometry deals with 'ideal' lines that have no thickness at all. Even so, real measurements come out very close to the predicted values, which is why geometry is so useful in fields like physics, art, engineering and architecture."
                      },
                      {
                        heading: "Perpendicular Lines",
                        text: "If two intersecting lines form four EQUAL angles, each angle must be a right angle (90°) — since all four angles must add up to 360°, and equal angles summing to 360° must each be 90°. Such lines are called perpendicular lines."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Measuring Angles at an Intersection",
                      objective: "To measure the four angles formed by two intersecting lines and discover the linear pair and vertically opposite angle relationships firsthand.",
                      materials: ["Plain paper", "Ruler", "Protractor"],
                      steps: [
                        "Draw two lines on a plain sheet of paper so that they intersect at a point, forming four angles — label them a, b, c and d going around.",
                        "Measure all four angles carefully using a protractor.",
                        "Check: does ∠a + ∠b equal 180°? Does ∠b + ∠c equal 180°?",
                        "Check: is ∠a equal to ∠c? Is ∠b equal to ∠d?",
                        "Repeat with three more pairs of intersecting lines drawn at different angles, and confirm the same patterns hold each time."
                      ],
                      observation: "In every case, adjacent angles (linear pairs) add up to 180°, and opposite angles (vertically opposite angles) are equal — confirming this always holds, regardless of how the lines are drawn."
                    }
                  ],
                  quiz: [
                    {
                      question: "When two lines intersect, what is true about a 'linear pair' of angles formed?",
                      options: ["They are always equal to each other", "They always add up to 180°", "They always add up to 90°", "One is always double the other"],
                      answer: 1,
                      explanation: "A linear pair consists of two adjacent angles that together form a straight line, so they always add up to 180°."
                    },
                    {
                      question: "In Fig. 5.2, if ∠a is 120°, what is ∠c (the angle vertically opposite to ∠a)?",
                      options: ["60°", "90°", "120°", "180°"],
                      answer: 2,
                      explanation: "Vertically opposite angles are always equal, so ∠c = ∠a = 120°."
                    },
                    {
                      question: "Why might measured angles not add up to exactly 180° in a real linear pair, even though geometry predicts they should?",
                      options: ["The rule is sometimes false", "Measurement errors and the unavoidable thickness of drawn lines cause small discrepancies from the 'ideal' geometric prediction", "Linear pairs only work for angles less than 90°", "Protractors cannot measure angles above 90°"],
                      answer: 1,
                      explanation: "Geometry deals with ideal, thickness-less lines; real drawn lines have thickness and measurements have small errors, so results come close to but may not exactly match the predicted 180°."
                    },
                    {
                      question: "If two intersecting lines form four angles that are all equal to each other, what must each angle measure?",
                      options: ["45°", "60°", "90°", "180°"],
                      answer: 2,
                      explanation: "Since the four angles must add up to 360° and are all equal, each one must be 360° ÷ 4 = 90° — making the lines perpendicular."
                    },
                    {
                      question: "What justification method did we use to prove that vertically opposite angles are always equal, without measuring them?",
                      options: ["Guessing based on a picture", "Using linear pairs: since ∠a+∠b=180° and ∠a+∠d=180° (both linear pairs with ∠a), ∠b must equal ∠d", "Using a protractor on every possible angle", "Assuming it without any reasoning"],
                      answer: 1,
                      explanation: "By reasoning that both ∠b and ∠d form a linear pair (summing to 180°) with the same angle ∠a, we can conclude ∠b = ∠d — this logical justification is called a proof."
                    }
                  ]
                },
                {
                  id: "7m-5-2",
                  title: "2. Parallel Lines & Paper Folding",
                  theory: {
                    intro: "Not all lines on a plane meet each other. Lines that never meet, no matter how far they're extended, are called parallel lines — and folding a sheet of paper is a wonderfully hands-on way to discover them.",
                    sections: [
                      {
                        heading: "Describing How Lines Meet",
                        text: "Line segments can meet at a point, an endpoint, or the midpoint, and lines can intersect at a single point. When examining figures, we describe the relationship precisely — for example, 'line segments FG and FH meet at the endpoint F at an angle of 115.3°.'"
                      },
                      {
                        heading: "Parallel Lines Defined",
                        text: "Parallel lines are a pair of lines that lie on the same plane and do not meet, however far they are extended at both ends. Piano keys, bench slats, and railway-sleeper-style patterns are everyday examples of parallel lines. It is important that the lines lie on the same plane — a line drawn on a table and a line drawn on a wall may never meet, but that alone doesn't make them parallel."
                      },
                      {
                        heading: "Discovering Parallel & Perpendicular Lines by Folding Paper",
                        text: "In a square sheet of paper, the opposite edges are parallel to each other, while the adjacent edges are perpendicular to each other (they meet at a point, forming right angles). Folding the sheet in half horizontally creates a new line parallel to the top and bottom edges — three parallel lines in total. Folding it in half again creates five parallel lines, and one more fold creates nine — following the pattern 2ⁿ + 1, where n is the number of folds. A vertical fold creates a line perpendicular to all the horizontal fold lines."
                      },
                      {
                        heading: "Notations for Parallel and Perpendicular Lines",
                        text: "In mathematics, a single arrowhead (>) marks a set of parallel lines; a second set of parallel lines in the same figure is marked with a double arrowhead, and so on. Perpendicular lines are marked with a small square at the angle between them, indicating a 90° angle."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Discovering Parallel Lines Through Paper Folding",
                      objective: "To discover how repeated folding of a square sheet of paper generates more and more parallel lines, following a predictable pattern.",
                      materials: ["A square sheet of paper (a sheet of newspaper works well)"],
                      steps: [
                        "Examine a square sheet of paper: notice the opposite edges are parallel, and the adjacent edges are perpendicular, meeting at right angles.",
                        "Fold the sheet in half horizontally. A new crease line is formed — count the parallel lines now visible (the top edge, the new crease, and the bottom edge): 3 in total.",
                        "Fold the already-folded sheet in half horizontally once more. Count the parallel lines now: 5 in total.",
                        "Fold it one more time and count again: 9 lines in total. Notice the pattern: 3, 5, 9 — each new fold roughly doubles the previous count minus one, following 2ⁿ + 1 for n folds.",
                        "Make a vertical fold in the original square sheet, and observe that this new line is perpendicular to all the horizontal fold lines."
                      ],
                      observation: "Each additional horizontal fold doubles the number of sections, adding one new parallel crease each time the sheet is unfolded, following the pattern 2ⁿ + 1 parallel lines for n folds."
                    }
                  ],
                  quiz: [
                    {
                      question: "What is the defining property of a pair of parallel lines?",
                      options: ["They always intersect at exactly one point", "They lie on the same plane and never meet, however far they are extended", "They are always the same length", "They always form a 90° angle with each other"],
                      answer: 1,
                      explanation: "Parallel lines are lines on the same plane that never meet, no matter how far they are extended in either direction."
                    },
                    {
                      question: "Why is it NOT correct to say a line drawn on a table and a line drawn on the wall (which never meet) are parallel?",
                      options: ["They are actually always parallel", "Parallel lines must lie on the same plane — lines on different surfaces (like a table and a wall) don't qualify even if they never meet", "Lines on tables can never be measured", "Only vertical lines can be parallel"],
                      answer: 1,
                      explanation: "The definition of parallel lines requires both lines to lie on the same plane; lines on two different surfaces don't meet this requirement, regardless of whether they'd ever intersect."
                    },
                    {
                      question: "If you fold a square sheet of paper in half horizontally twice (2 folds total), how many parallel lines do you see, following the pattern 2ⁿ + 1?",
                      options: ["3", "4", "5", "9"],
                      answer: 2,
                      explanation: "For n = 2 folds: 2² + 1 = 4 + 1 = 5 parallel lines."
                    },
                    {
                      question: "What does a small square symbol drawn at the angle between two lines in a figure indicate?",
                      options: ["The lines are parallel", "The lines are perpendicular (meeting at a 90° angle)", "The lines are the same length", "The lines do not actually meet"],
                      answer: 1,
                      explanation: "A small square drawn at the angle between two lines is the standard notation indicating a right angle (90°), i.e., that the lines are perpendicular."
                    },
                    {
                      question: "What does a double arrowhead (>>) marked on a set of lines in a figure indicate?",
                      options: ["That those lines are perpendicular to all other lines", "That those lines form a second set of parallel lines, distinct from a first set marked with single arrowheads", "That those lines are the longest in the figure", "That those lines intersect at exactly two points"],
                      answer: 1,
                      explanation: "When a figure has more than one set of parallel lines, each set gets its own distinct arrowhead notation — a single arrow for the first set, a double arrow for the second, and so on."
                    }
                  ]
                },
                {
                  id: "7m-5-3",
                  title: "3. Transversals, Corresponding & Alternate Angles",
                  lab: { type: "transversal-angle-sim" },
                  theory: {
                    intro: "When a single line crosses a pair of other lines, it is called a transversal — and the angles it creates reveal a powerful test for whether the two lines are parallel.",
                    sections: [
                      {
                        heading: "Transversals and Their Eight Angles",
                        text: "When line t crosses two other lines l and m, it is called a transversal, and 8 angles are formed in total — 4 at each crossing point. Since vertically opposite angles at each crossing are equal, there are at most 4 distinct angle measures among all 8 angles."
                      },
                      {
                        heading: "Corresponding Angles",
                        text: "The transversal creates two sets of 4 angles — one set where it crosses line l, and one where it crosses line m. Angles that occupy matching positions in each set (for example, both in the 'upper-right' position) are called corresponding angles."
                      },
                      {
                        heading: "Corresponding Angles and Parallel Lines",
                        text: "When the corresponding angles formed by a transversal on a pair of lines are equal to each other, the lines are parallel. Conversely, when a transversal crosses a pair of parallel lines, its corresponding angles are always equal. This works both ways — equality of corresponding angles is both necessary and sufficient for two lines to be parallel. When lines are NOT parallel, their corresponding angles formed by any transversal can never be equal."
                      },
                      {
                        heading: "Alternate Angles",
                        text: "The alternate angle of a given angle can be found by first finding its corresponding angle, then finding that angle's vertically opposite angle. Since corresponding angles are equal (for parallel lines) and vertically opposite angles are always equal, it follows that alternate angles formed by a transversal on a pair of parallel lines are always equal to each other too."
                      },
                      {
                        heading: "Interior Angles",
                        text: "Two angles that lie between the pair of lines, on the same side of the transversal, are called interior angles on the same side. When a transversal crosses a pair of parallel lines, these interior angles on the same side always add up to 180°."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Drawing a Transversal to Create Parallel Lines",
                      objective: "To construct a pair of lines that are parallel to each other, using the principle that equal corresponding angles guarantee parallel lines.",
                      materials: ["Ruler", "Protractor", "Tracing paper (optional)"],
                      steps: [
                        "Draw a line l and a transversal t intersecting it at point X. Measure the angle ∠a formed (say, 60°).",
                        "Mark a point Y further along the transversal t.",
                        "At point Y, draw a new line m such that the angle it makes with the transversal (in the same corresponding position as ∠a) also measures 60°. Use a protractor or tracing paper to copy the angle exactly.",
                        "Observe that lines l and m now appear parallel to each other.",
                        "Verify using a protractor that all four pairs of corresponding angles formed by the transversal on l and m are indeed equal."
                      ],
                      observation: "Because the corresponding angles at X and Y are equal (both 60°), lines l and m are guaranteed to be parallel — this is a reliable, measurement-based method for constructing parallel lines."
                    }
                  ],
                  quiz: [
                    {
                      question: "When a transversal crosses two lines, how many angles are formed in total, and what is the maximum number of distinct angle measures among them?",
                      options: ["4 angles total, 2 distinct measures", "8 angles total, 4 distinct measures", "8 angles total, 8 distinct measures", "6 angles total, 3 distinct measures"],
                      answer: 1,
                      explanation: "A transversal crossing two lines creates 8 angles total (4 at each intersection), but since vertically opposite angles are equal at each crossing, there are at most 4 distinct angle measures."
                    },
                    {
                      question: "If the corresponding angles formed by a transversal on two lines are equal to each other, what can we conclude about the two lines?",
                      options: ["They must be perpendicular", "They must be parallel", "They must intersect within the figure", "Nothing can be concluded"],
                      answer: 1,
                      explanation: "Equal corresponding angles is both a necessary and sufficient condition for two lines to be parallel."
                    },
                    {
                      question: "How can you find the alternate angle of a given angle formed by a transversal?",
                      options: ["It is always exactly 90° from the given angle", "First find its corresponding angle, then find that angle's vertically opposite angle", "It is always equal to the given angle's linear pair", "Alternate angles cannot be found using corresponding or vertically opposite angles"],
                      answer: 1,
                      explanation: "The alternate angle is found by taking the corresponding angle of the given angle, and then taking the vertically opposite angle of that."
                    },
                    {
                      question: "When a transversal crosses a pair of NON-parallel lines, what is true of the corresponding angles?",
                      options: ["They are always equal, just like with parallel lines", "They can never be equal to each other", "They always add up to 180°", "They are always exactly double each other"],
                      answer: 1,
                      explanation: "Corresponding angles formed by a transversal on non-parallel lines can never be equal — equal corresponding angles specifically indicate that lines ARE parallel."
                    },
                    {
                      question: "When a transversal crosses a pair of parallel lines, what is true of the interior angles on the same side of the transversal?",
                      options: ["They are always equal to each other", "They always add up to 180°", "They always add up to 90°", "One is always exactly twice the other"],
                      answer: 1,
                      explanation: "The interior angles on the same side of the transversal, formed with a pair of parallel lines, always add up to 180°."
                    }
                  ]
                },
                {
                  id: "7m-5-4",
                  title: "4. Drawing Parallel Lines & Solving with Interior Angles",
                  theory: {
                    intro: "Using a ruler and set square, we can draw parallel lines precisely — and using everything we've learned about corresponding, alternate and interior angles, we can solve for unknown angles in complex figures.",
                    sections: [
                      {
                        heading: "Drawing Parallel Lines with a Set Square",
                        text: "Draw a line l with a ruler, then slide a set square along the ruler to draw two lines perpendicular to l at different points. Since both new lines make the same 90° angle with l (acting as a transversal), and corresponding angles are equal, these two lines must be parallel to each other — giving a reliable method for drawing parallel lines using just a ruler and set square."
                      },
                      {
                        heading: "Drawing a Line Parallel to a Given Line Through a Point",
                        text: "To draw a line through a point A that is parallel to a line l, using paper folding: first fold a perpendicular to l that passes through A (call this crease t), then fold a second perpendicular to t that also passes through A (call this line m). Since both l and m are perpendicular to the same line t, they must be parallel to each other."
                      },
                      {
                        heading: "Worked Example: Finding Multiple Angles",
                        text: "In a figure where parallel lines l and m are crossed by transversal t, if one angle (say ∠6) is 135°, we can find every other angle: angles corresponding or vertically opposite to ∠6 are also 135°, while their linear pair partners are each 180° − 135° = 45°. This chain of reasoning — corresponding angles, vertically opposite angles, and linear pairs — lets us find all 8 angles from just one given value."
                      },
                      {
                        heading: "Worked Example: Checking if Lines are Parallel",
                        text: "If ∠a is 120° and ∠f is 70° in a figure with transversal t crossing lines l and m, we can check whether l and m are parallel: since ∠a and ∠b form a linear pair, ∠b = 180° − 120° = 60°. Since ∠b is the corresponding angle of ∠f, and 60° ≠ 70°, the corresponding angles are NOT equal — so lines l and m are NOT parallel."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Drawing Two Parallel Lines Using a Set Square",
                      objective: "To construct a pair of parallel lines using a ruler and set square, relying on the fact that equal corresponding (right) angles guarantee parallel lines.",
                      materials: ["Ruler", "Set square", "Pencil"],
                      steps: [
                        "Draw a straight line l using a ruler.",
                        "Place the set square so one of its right-angle edges rests against line l, and draw a line along its other edge — this new line is perpendicular to l.",
                        "Slide the set square along the ruler to a new position on line l, and draw a second perpendicular line there.",
                        "Observe that both new lines make the same 90° angle with line l (line l acting as their shared transversal).",
                        "Conclude, using the corresponding-angles rule, that the two new perpendicular lines must be parallel to each other — verify this using a ruler by checking they stay the same distance apart."
                      ],
                      observation: "Since both constructed lines form equal 90° corresponding angles with line l, they must be parallel — this is a reliable, practical method for drawing parallel lines with basic geometry tools."
                    }
                  ],
                  quiz: [
                    {
                      question: "Using a ruler and set square, why are two lines drawn perpendicular to the same line l guaranteed to be parallel to each other?",
                      options: ["Because perpendicular lines are always parallel to each other", "Because both lines form equal (90°) corresponding angles with line l, which guarantees they are parallel", "Because a ruler can only draw parallel lines", "This method does not actually guarantee parallel lines"],
                      answer: 1,
                      explanation: "Since both lines make the same 90° angle with l (acting as a transversal), their corresponding angles are equal — which is the guarantee that the two lines are parallel."
                    },
                    {
                      question: "To fold a line through point A parallel to a given line l, what two folds are needed?",
                      options: ["Just one diagonal fold through A", "First fold a perpendicular to l through A (call it t), then fold a perpendicular to t through A", "Fold the paper in half twice in any direction", "This cannot be done using paper folding"],
                      answer: 1,
                      explanation: "Folding a perpendicular to l through A gives line t; folding a perpendicular to t through A gives a new line that must be parallel to l, since both are perpendicular to the same line t."
                    },
                    {
                      question: "In a figure with parallel lines l and m crossed by transversal t, if ∠6 is 135°, what is the angle forming a linear pair with ∠6?",
                      options: ["135°", "45°", "90°", "180°"],
                      answer: 1,
                      explanation: "A linear pair always adds up to 180°, so the angle paired with ∠6 is 180° − 135° = 45°."
                    },
                    {
                      question: "In a figure with lines l and m crossed by transversal t, ∠a is 120° and ∠f is 70°. Are lines l and m parallel?",
                      options: ["Yes, since 120° and 70° are both given", "No — since ∠a's linear pair (∠b = 60°) is the corresponding angle of ∠f (70°), and 60° ≠ 70°, the lines are not parallel", "Yes, since all transversal angles are always parallel", "Cannot be determined from this information"],
                      answer: 1,
                      explanation: "∠b = 180° − 120° = 60°, which should equal ∠f (its corresponding angle) if the lines were parallel — but 60° ≠ 70°, so l and m are not parallel."
                    },
                    {
                      question: "What is the minimum information needed to find every one of the 8 angles formed by a transversal crossing two PARALLEL lines?",
                      options: ["All 8 angles must be measured separately", "Just one of the 8 angles — the rest follow from corresponding, vertically opposite, and linear pair relationships", "Only the angles at one of the two intersection points can ever be found", "It is impossible to find all 8 from just one angle"],
                      answer: 1,
                      explanation: "Given parallel lines, knowing just one angle lets us find all others using corresponding angles, vertically opposite angles, and linear pairs in a chain of reasoning."
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "8": {
      name: "Class 8",
      tagline: "Analysis & Understanding",
      theme: "linear-gradient(135deg, #43e97b, #38f9d7)",
      subjects: {
        science: {
          name: "Science",
          icon: "🧪",
          chapters: [
            {
              id: "8s-1",
              title: "Cell - Structure and Functions",
              topics: [
                {
                  id: "8s-1-1",
                  title: "Plant Cell vs Animal Cell",
                  theory: {
                    intro: "A cell is the fundamental structural and functional unit of all living organisms. While both plant and animal cells share common structures, they have critical differences due to their different modes of life.",
                    sections: [
                      {
                        heading: "Cell Wall - The Plant Armor",
                        text: "Plant cells have an outer rigid boundary called the cell wall made of cellulose, which surrounds the cell membrane. It provides shape, rigidity, and protection against high wind speed, temperature variations, and atmospheric moisture. Animal cells completely lack a cell wall."
                      },
                      {
                        heading: "Plastids & Chloroplasts",
                        text: "Plants manufacture their own food via photosynthesis. For this, they possess green plastids called chloroplasts, which contain chlorophyll. Animal cells do not have plastids."
                      }
                    ]
                  },
                  slides: [
                    { title: "What is a Cell?", bullets: ["Discovered by Robert Hooke in 1665 using a simple cork.", "The building block of life — just like bricks make a building."] },
                    { title: "Key Differences: Cell Wall", bullets: ["Plant Cells have a rigid outer Cell Wall (protection + support).", "Animal Cells do NOT have a Cell Wall."] }
                  ],
                  activities: [
                    {
                      title: "Observing Onion Peel Cells",
                      objective: "To prepare a slide of onion peel and observe plant cells under a microscope.",
                      materials: ["Onion", "Slide & Coverslip", "Safranin stain / Iodine", "Microscope"],
                      steps: [
                        "Peel a small thin transparent membrane from the inner side of an onion peel using forceps.",
                        "Place this peel on a glass slide with a drop of water.",
                        "Add a drop of Safranin stain, place a coverslip, and observe under low power."
                      ],
                      observation: "Rectangular compartment-like cells are visible. The cell wall is prominent, and a dark nucleus is seen located near the periphery."
                    }
                  ],
                  quiz: [
                    {
                      question: "Which of the following is present in a plant cell but absent in an animal cell?",
                      options: ["Cell Membrane", "Mitochondria", "Cell Wall", "Nucleus"],
                      answer: 2,
                      explanation: "The Cell Wall is an additional protective cover present only in plant cells."
                    }
                  ]
                }
              ]
            }
          ]
        },
        mathematics: { name: "Mathematics", icon: "📐", chapters: [] }
      }
    },
    "9": {
      name: "Class 9",
      tagline: "Critical Thinking & Concepts",
      theme: "linear-gradient(135deg, #f6d365, #fda085)",
      subjects: {
        science: { name: "Science", icon: "🧪", chapters: [] },
        mathematics: { name: "Mathematics", icon: "📐", chapters: [] }
      }
    },
    "10": {
      name: "Class 10",
      tagline: "Board Excellence & Application",
      theme: "linear-gradient(135deg, #b1f4cf, #9890e3)",
      subjects: {
        science: {
          name: "Science",
          icon: "🧪",
          chapters: [
{
  id: "10s-1",
  title: "Chemical Reactions and Equations",
  topics: [
    {
      id: "10s-1-1",
      title: "1. Chemical Equations & Balancing",
      lab: { type: "chemistry-balancer" },
      theory: {
        intro: "Whenever a chemical change occurs, we can say that a chemical reaction has taken place. Food getting digested, iron rusting, or magnesium burning in air are all chemical reactions.",
        sections: [
          {
            heading: "1. Writing a Chemical Equation",
            text: "A chemical equation is the symbolic representation of a chemical reaction. \n• **Reactants** are written on the left-hand side (LHS) with a plus sign (+) between them.\n• **Products** are written on the right-hand side (RHS) with a plus sign (+) between them.\n• An arrow (→) points towards the products, showing the direction of the reaction.\nExample: Magnesium + Oxygen → Magnesium oxide\n(Mg + O₂ → MgO)"
          },
          {
            heading: "2. Balanced Chemical Equations",
            text: "According to the Law of Conservation of Mass, mass can neither be created nor destroyed in a chemical reaction. The total mass of the elements present in the products must be equal to the total mass of the elements present in the reactants. Thus, the number of atoms of each element remains the same, before and after a chemical reaction.\n\n**Balancing a Skeleton Equation:**\nConsider: Fe + H₂O → Fe₃O₄ + H₂\nStep 1: Balance the element with the maximum number of atoms. Here, Oxygen has 4 atoms on the RHS, but only 1 on the LHS. Multiply H₂O by 4: Fe + 4H₂O → Fe₃O₄ + H₂\nStep 2: Balance Hydrogen. 8 H atoms on LHS. Multiply H₂ on RHS by 4: Fe + 4H₂O → Fe₃O₄ + 4H₂\nStep 3: Balance Iron. 3 Fe atoms on RHS. Multiply Fe on LHS by 3: **3Fe + 4H₂O → Fe₃O₄ + 4H₂**\nThis is a balanced equation."
          },
          {
            heading: "3. Writing Physical States",
            text: "To make a chemical equation more informative, the physical states of the reactants and products are mentioned along with their chemical formulae.\n• (s) = Solid\n• (l) = Liquid\n• (g) = Gas\n• (aq) = Aqueous (solution in water)\n\nExample: 3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)"
          }
        ]
      },
      quiz: [
        {
          question: "Which of the following represents a correctly balanced chemical equation?",
          options: [
            "Mg + O₂ → MgO",
            "2Mg + O₂ → 2MgO",
            "Mg + 2O₂ → MgO₂",
            "2Mg + O → 2MgO"
          ],
          answer: 1,
          explanation: "2Mg + O₂ → 2MgO has 2 Magnesium atoms and 2 Oxygen atoms on both the LHS and RHS."
        },
        {
          question: "The notation (aq) in a chemical equation stands for:",
          options: ["Aqua", "Aqueous solution", "Solid", "Gas"],
          answer: 1,
          explanation: "(aq) means the reactant or product is present as a solution in water (aqueous)."
        }
      ]
    },
    {
      id: "10s-1-2",
      title: "2. Types of Chemical Reactions",
      lab: { type: "chemistry-reactions" },
      theory: {
        intro: "During a chemical reaction, atoms of one element do not change into those of another element. Instead, reactions involve the breaking and making of bonds between atoms to produce new substances. There are several main types.",
        sections: [
          {
            heading: "1. Combination Reaction",
            text: "A reaction in which a single product is formed from two or more reactants is known as a combination reaction.\n**A + B → AB**\n\nExample: Calcium oxide reacts vigorously with water to produce slaked lime (calcium hydroxide) releasing a large amount of heat.\nCaO(s) + H₂O(l) → Ca(OH)₂(aq) + Heat\n\n*Note on Exothermic Reactions:* Reactions in which heat is released along with the formation of products are called exothermic chemical reactions (e.g. burning of natural gas, respiration)."
          },
          {
            heading: "2. Decomposition Reaction",
            text: "A reaction in which a single reactant breaks down to give simpler products. It is the opposite of combination.\n**AB → A + B**\nDecomposition requires energy in the form of heat, light, or electricity (Endothermic).\n\n• **Thermal Decomposition:** Heating limestone (CaCO₃) to give quick lime (CaO) and carbon dioxide (CO₂).\nCaCO₃(s) + Heat → CaO(s) + CO₂(g)\n\n• **Electrolytic Decomposition:** Passing electricity through water to get Hydrogen and Oxygen.\n2H₂O(l) + Electricity → 2H₂(g) + O₂(g)\n\n• **Photolytic Decomposition:** Silver chloride turns grey in sunlight. Used in black and white photography.\n2AgCl(s) + Sunlight → 2Ag(s) + Cl₂(g)"
          },
          {
            heading: "3. Displacement Reaction",
            text: "A reaction in which a more reactive element displaces a less reactive element from its compound.\n**A + BC → AC + B**\n\nExample: Iron nails placed in copper sulphate solution. Iron is more reactive than copper, so it displaces copper, turning the blue solution light green.\nFe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)"
          },
          {
            heading: "4. Double Displacement Reaction",
            text: "A reaction in which there is an exchange of ions between the reactants.\n**AB + CD → AD + CB**\n\nExample: Mixing solutions of sodium sulphate and barium chloride forms a white precipitate of barium sulphate.\nNa₂SO₄(aq) + BaCl₂(aq) → BaSO₄(s)↓ + 2NaCl(aq)\nAny reaction that produces a precipitate can be called a precipitation reaction."
          },
          {
            heading: "5. Oxidation and Reduction (Redox)",
            text: "• **Oxidation:** The addition of oxygen to a substance or the removal of hydrogen from a substance.\n• **Reduction:** The addition of hydrogen to a substance or the removal of oxygen from a substance.\n\nReactions where oxidation and reduction occur simultaneously are called **Redox reactions**.\nExample: CuO + H₂ → Cu + H₂O\nHere, Copper oxide is losing oxygen (reduced to Cu), and Hydrogen is gaining oxygen (oxidised to H₂O)."
          }
        ]
      },
      quiz: [
        {
          question: "The reaction 2H₂O(l) → 2H₂(g) + O₂(g) under the influence of electricity is an example of a:",
          options: [
            "Combination reaction",
            "Displacement reaction",
            "Decomposition reaction",
            "Double displacement reaction"
          ],
          answer: 2,
          explanation: "A single reactant (water) breaks down into two simpler products (hydrogen and oxygen) when energy is supplied. This is electrolytic decomposition."
        },
        {
          question: "In the reaction: ZnO + C → Zn + CO, which substance is getting reduced?",
          options: ["C", "ZnO", "Zn", "CO"],
          answer: 1,
          explanation: "Zinc oxide (ZnO) loses oxygen to become Zn. Therefore, ZnO is reduced. (Carbon gains oxygen, so it is oxidised)."
        }
      ]
    },
    {
      id: "10s-1-3",
      title: "3. Effects of Oxidation in Everyday Life",
        lab: { type: "corrosion" },
      theory: {
        intro: "Oxidation reactions are not just laboratory phenomena; they occur all around us, often with damaging effects.",
        sections: [
          {
            heading: "1. Corrosion",
            text: "When a metal is attacked by substances around it such as moisture, acids, etc., it is said to corrode and this process is called corrosion.\n\n• **Rusting of Iron:** Iron articles are shiny when new, but get coated with a reddish brown powder (rust) when left for some time.\n• **Other examples:** The black coating on silver (silver sulphide) and the green coating on copper (basic copper carbonate) are other examples of corrosion.\n\nCorrosion causes damage to car bodies, bridges, iron railings, ships and to all objects made of metals, specially those of iron. It is a serious problem costing huge amounts of money to replace damaged iron."
          },
          {
            heading: "2. Rancidity",
            text: "Have you ever tasted or smelt the fat/oil containing food materials left for a long time?\nWhen fats and oils are oxidised, they become rancid and their smell and taste change.\n\n**Prevention of Rancidity:**\n• Adding antioxidants to foods containing fats and oils.\n• Keeping food in air tight containers helps to slow down oxidation.\n• Flushing bags of chips with gas such as nitrogen to prevent the chips from getting oxidised."
          }
        ]
      },
      quiz: [
        {
          question: "Why do chips manufacturers flush bags of chips with nitrogen gas?",
          options: [
            "To make the chips taste better",
            "To prevent the chips from getting oxidised and becoming rancid",
            "To increase the weight of the packet",
            "Nitrogen is cheaper than air"
          ],
          answer: 1,
          explanation: "Nitrogen is an inert gas that prevents the fats and oils in the chips from reacting with oxygen (oxidising), thereby preventing rancidity."
        }
      ]
    }
  ]
},
{
              id: "10s-3",
              title: "Acids, Bases and Salts",
              topics: [
                {
                  id: "10s-3-1",
                  title: "1. Acids & Bases in Laboratory",
                  lab: { type: "ph-litmus" },
                  lab: { type: "ph-litmus" },
                  theory: {
                    intro: "Acids and bases are fundamental chemical families that shape our environment. In this lesson, we cover indicators, olfactory characteristics, reactions with metals, and metal carbonates/hydrogencarbonates.",
                    sections: [
                      {
                        heading: "Acid-Base Indicators: Natural, Synthetic, and Olfactory",
                        text: "To test if a substance is an acid or base, we use indicators:\n1. **Natural Indicators**: Litmus solution (extracted from Lichen, purple color naturally), Turmeric (turns red-brown with base), Red Cabbage juice.\n2. **Synthetic Indicators**: Phenolphthalein (colorless in acid, deep pink in base) and Methyl Orange (red in acid, yellow in base).\n3. **Olfactory Indicators**: Substances whose odor changes in acidic or basic media. Onion, Vanilla extract, and Clove oil retain their smell in acid, but lose it completely in basic solutions.\n\nBelow is a comparison of indicator color responses:\n| Indicator | Color in Acid | Color in Base |\n| :--- | :--- | :--- |\n| **Blue Litmus** | Red | Blue (No change) |\n| **Red Litmus** | Red (No change) | Blue |\n| **Phenolphthalein** | Colorless | Pink |\n| **Methyl Orange** | Red | Yellow |"
                      },
                      {
                        heading: "Reaction of Acids & Bases with Metals",
                        text: "Acids react with active metals (like Zn, Mg, Fe) to form a salt and release Hydrogen gas:\n**Acid + Metal → Salt + Hydrogen gas↑**\n• Example: Zn(s) + H2SO4(aq) → ZnSO4(aq) + H2(g)↑.\nBases also react with certain amphoteric metals (like Zinc, Aluminium) to form complex salts and release Hydrogen gas:\n**Base + Metal → Salt + Hydrogen gas↑**\n• Example: 2NaOH(aq) + Zn(s) + Heat → Na2ZnO2(s) (Sodium Zincate) + H2(g)↑.\n\nObserve this gas collection layout:\n<svg viewBox='0 0 450 140' style='max-width:380px; margin: 1.5rem auto; display:block;' xmlns='http://www.w3.org/2000/svg'>\n  <rect x='10' y='110' width='430' height='10' fill='var(--border-color)'/>\n  <!-- test tube -->\n  <rect x='80' y='30' width='30' height='70' rx='15' fill='none' stroke='var(--text-muted)' stroke-width='2' />\n  <rect x='81' y='70' width='28' height='28' fill='rgba(59, 130, 246, 0.2)' rx='5'/>\n  <!-- zinc granules -->\n  <circle cx='88' cy='90' r='4' fill='grey'/>\n  <circle cx='96' cy='92' r='4' fill='grey'/>\n  <circle cx='102' cy='88' r='4' fill='grey'/>\n  <!-- delivery tube -->\n  <path d='M95,40 L95,20 L250,20 L250,90' fill='none' stroke='var(--text-muted)' stroke-width='3'/>\n  <!-- trough -->\n  <rect x='210' y='80' width='80' height='30' fill='rgba(16, 185, 129, 0.2)' stroke='var(--secondary-color)' stroke-width='2'/>\n  <!-- bubbles -->\n  <circle cx='250' cy='70' r='5' fill='none' stroke='var(--accent-color)' stroke-width='1.5'/>\n  <circle cx='250' cy='50' r='6' fill='none' stroke='var(--accent-color)' stroke-width='1.5'/>\n  <text x='130' y='55' fill='var(--text-normal)' font-size='12' font-family='system-ui'>H₂ Gas transfer</text>\n  <text x='130' y='75' fill='var(--text-muted)' font-size='10' font-family='system-ui'>Zn + H₂SO₄ → ZnSO₄ + H₂↑</text>\n</svg>"
                      },
                      {
                        heading: "Reaction of Acids with Metal Carbonates & Hydrogencarbonates",
                        text: "Acids react with metal carbonates (e.g. Na2CO3) and hydrogencarbonates (e.g. NaHCO3) to produce salt, water, and Carbon Dioxide gas:\n**Metal Carbonate + Acid → Salt + Water + Carbon Dioxide gas↑**\n• Example 1: Na2CO3(s) + 2HCl(aq) → 2NaCl(aq) + H2O(l) + CO2(g)↑.\n• Example 2: NaHCO3(s) + HCl(aq) → NaCl(aq) + H2O(l) + CO2(g)↑.\n\n*Testing CO2 gas*: When CO2 is passed through clear Lime Water [Ca(OH)2], it turns milky due to the formation of a white precipitate of Calcium Carbonate:\n**Ca(OH)2(aq) (Lime Water) + CO2(g) → CaCO3(s)↓ (White ppt) + H2O(l)**\nIf excess CO2 is passed, milkiness disappears because soluble Calcium Hydrogencarbonate is formed:\n**CaCO3(s) + H2O(l) + CO2(g) (excess) → Ca(HCO3)2(aq) (Soluble)**"
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Activity 2.3: Testing Hydrogen Gas from Zinc in Acid",
                      objective: "To demonstrate the reaction of metal with acid and identify Hydrogen gas.",
                      materials: ["Zinc granules", "Dilute Sulphuric acid (H2SO4)", "Test tube", "Delivery tube", "Soap solution in a trough", "Candle"],
                      steps: [
                        "Set up a test tube containing zinc granules and add dilute H2SO4.",
                        "Fit the tube with a cork and delivery tube. Pass the gas into soap solution.",
                        "Bring a burning candle near the bubbles rising from the soap solution."
                      ],
                      observation: "Gas bubbles form in the soap solution. When a candle is brought near a bubble, it bursts with a 'pop' sound, confirming the presence of Hydrogen gas (H2↑)."
                    }
                  ],
                  quiz: [
                    {
                      question: "Which of the following indicators turns pink in a basic solution?",
                      options: ["Methyl Orange", "Phenolphthalein", "Litmus", "Turmeric"],
                      answer: 1,
                      explanation: "Phenolphthalein is synthetic and colorless in acidic/neutral solutions, but turns deep pink in basic solutions."
                    },
                    {
                      question: "What is the product formed when carbon dioxide is passed through lime water?",
                      options: ["Calcium Chloride", "Calcium Carbonate", "Calcium Oxide", "Calcium Bicarbonate"],
                      answer: 1,
                      explanation: "Lime water Ca(OH)2 reacts with CO2 to precipitate Calcium Carbonate (CaCO3), which makes the solution turn milky."
                    }
                  ]
                },
                {
                  id: "10s-3-2",
                  title: "2. Common Ion Behaviors & Neutralization",
                  lab: { type: "neutralization-titration" },
                  lab: { type: "neutralization-titration" },
                  theory: {
                    intro: "What makes an acid an acid? This lesson details common ion behaviors, dilution safety rules, and the neutralization reaction.",
                    sections: [
                      {
                        heading: "What do all Acids and Bases have in Common?",
                        text: "All acids release Hydronium ions (H3O+ or H+) in the presence of water, which are responsible for their acidic behavior. Dry HCl gas does not change litmus color because ions cannot dissociate without water!\n**HCl + H2O → H3O+ + Cl-**\nSimilarly, all bases (alkalis are bases soluble in water) produce Hydroxide ions (OH-) in water:\n**NaOH(s) + H2O → Na+(aq) + OH-(aq)**\nThese ions conduct electricity, which is why aqueous acid solutions glow bulbs, while glucose and alcohol solutions (which do not dissociate into ions) do not."
                      },
                      {
                        heading: "The Exothermic Danger of Dilution",
                        text: "Mixing an acid or base with water is a highly **exothermic reaction** (releases heat). \n> [!CAUTION]\n> **Dilution Safety Rule**\n> Always add **Acid slowly to Water** with constant stirring. **NEVER add Water directly to concentrated Acid**. If water is poured on concentrated acid, the sudden heat generated causes the mixture to splash out, causing severe acid burns, and may break the glass container."
                      },
                      {
                        heading: "The Neutralization Reaction",
                        text: "When an acid reacts with a base, they neutralize each other's effects to form salt and water:\n**Acid + Base → Salt + Water**\nIn terms of ionic behavior, the H+ ions of the acid combine with the OH- ions of the base to form water:\n**H+(aq) + OH-(aq) → H2O(l)**\n• Example: HCl(aq) + NaOH(aq) → NaCl(aq) + H2O(l)."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Activity 2.10: Temperature Rise during Acid Dilution",
                      objective: "To demonstrate the exothermic nature of mixing acid and water.",
                      materials: ["Concentrated Sulphuric Acid (H2SO4)", "Water in a beaker", "Thermometer"],
                      steps: [
                        "Take 10 mL of water in a beaker. Measure initial temperature.",
                        "Add a few drops of concentrated H2SO4 slowly down the side of the beaker while swirling.",
                        "Measure the temperature again. Touch the base of the beaker."
                      ],
                      observation: "The temperature rises significantly, and the bottom of the beaker feels hot. This confirms that dilution of acid is an exothermic process."
                    }
                  ],
                  quiz: [
                    {
                      question: "Why does dry HCl gas not change the color of dry blue litmus paper?",
                      options: [
                        "Dry HCl is a basic gas",
                        "Litmus paper only reacts with liquids",
                        "Hydrogen ions can only dissociate and show acidity in the presence of water",
                        "HCl is not an acid"
                      ],
                      answer: 2,
                      explanation: "HCl gas only dissociates into H+ (or H3O+) ions in the presence of moisture/water. Without water, it cannot show acidic behavior."
                    },
                    {
                      question: "What is the correct procedure for diluting concentrated acid?",
                      options: [
                        "Pour water rapidly into the acid container",
                        "Add acid slowly to water with constant stirring",
                        "Mix both together in equal volumes at once",
                        "Heat the acid before adding water"
                      ],
                      answer: 1,
                      explanation: "Always add acid slowly to water to distribute the heat generated safely. Adding water to concentrated acid can cause dangerous splashing."
                    }
                  ]
                },
                {
                  id: "10s-3-3",
                  title: "3. The pH Scale & Importance",
                  lab: { type: "ph-litmus" },
                  theory: {
                    intro: "How do we measure the strength of acids and bases? We use the pH scale, which measures hydrogen ion concentration in real-world environments.",
                    sections: [
                      {
                        heading: "The pH Scale (0 to 14)",
                        text: "The strength of an acid or base is measured on the **pH scale** (p stands for *potenz* in German, meaning power; H stands for Hydrogen ion concentration). It ranges from 0 to 14:\n• **pH < 7**: Acidic solution (higher H+ concentration). Lower pH indicates stronger acid.\n• **pH = 7**: Neutral solution (pure water, NaCl solution).\n• **pH > 7**: Basic/Alkaline solution (higher OH- concentration). Higher pH indicates stronger base.\n\nUniversal indicator is a mixture of organic dyes that shows a gradient of colors at different pH values (Red at pH 1-2, Green at pH 7, Violet/Purple at pH 13-14)."
                      },
                      {
                        heading: "Significance of pH in Daily Life",
                        text: "1. **pH in Human Body**: Our body functions best within a narrow pH range of 7.0 to 7.8. Aquatic life is threatened if acid rain drops river water pH below 5.6.\n2. **Digestive System**: The stomach produces Hydrochloric Acid (pH 1.5 - 2.0) to digest food. Overeating causes indigestion, releasing excess acid. To cure this, we take **Antacids** (mild bases like Magnesium Hydroxide - Milk of Magnesia) to neutralize it.\n3. **Tooth Decay**: Starts when mouth pH falls below 5.5. Tooth enamel (made of Calcium Hydroxyapatite, the hardest substance in the body) is corroded by acids produced by bacteria breaking down sugar. Clean with basic toothpaste!\n4. **Chemical Self-Defense**: Honey-bee stings inject formic acid (use baking soda for relief). Nettle leaves inject methanoic acid, causing burning pain (use dock plant leaves to neutralize)."
                      },
                      {
                        heading: "Table of Naturally Occurring Acids",
                        text: "| Natural Source | Acid Present |\n| :--- | :--- |\n| **Vinegar** | Acetic acid |\n| **Orange / Lemon** | Citric acid |\n| **Tamarind** | Tartaric acid |\n| **Tomato** | Oxalic acid |\n| **Sour Milk (Curd)** | Lactic acid |\n| **Ant / Nettle Sting** | Methanoic acid |"
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Activity 2.11: Testing pH of Daily Substances",
                      objective: "To estimate the pH of common household items using universal pH paper.",
                      materials: ["Saliva", "Lemon juice", "Tomato juice", "Tap water", "Sodium hydroxide solution", "Dilute HCl", "Universal pH paper"],
                      steps: [
                        "Place drops of each solution on strips of universal pH paper.",
                        "Compare the resulting color with the standard pH color chart.",
                        "Record values and classify as acidic, basic, or neutral."
                      ],
                      observation: "Lemon juice turns red-orange (pH ~2.2), tap water turns green (pH ~7.0), and NaOH turns violet-blue (pH ~13-14)."
                    }
                  ],
                  quiz: [
                    {
                      question: "Which of the following holds a pH value of less than 7?",
                      options: ["Blood", "Milk of Magnesia", "Lemon Juice", "Sodium Hydroxide"],
                      answer: 2,
                      explanation: "Lemon juice contains citric acid and is acidic (pH ~2.2). Blood is slightly basic (pH 7.4), Milk of Magnesia is basic (pH 10), and NaOH is strongly basic (pH 14)."
                    },
                    {
                      question: "Tooth decay begins when the pH of the mouth falls below:",
                      options: ["7.0", "5.5", "8.5", "3.0"],
                      answer: 1,
                      explanation: "Acids from food sugars corrode the calcium hydroxyapatite enamel when pH falls below 5.5."
                    }
                  ]
                },
                {
                  id: "10s-3-4",
                  title: "4. Chemicals from Common Salt",
                  lab: { type: "salt-chemicals" },
                  theory: {
                    intro: "Sodium Chloride (Common Salt) is a vital raw material for chemical industries. Here, we cover the Chlor-alkali process, bleaching powder, baking soda, washing soda, and Plaster of Paris.",
                    sections: [
                      {
                        heading: "1. The Chlor-Alkali Process",
                        text: "When electricity is passed through an aqueous solution of Sodium Chloride (**Brine**), it decomposes to form Sodium Hydroxide. The process is named after its products: chlor for chlorine and alkali for sodium hydroxide:\n**2NaCl(aq) + 2H2O(l) + Electricity → 2NaOH(aq) + Cl2(g)↑ [at Anode] + H2(g)↑ [at Cathode]**\n• Chlorine: used for water disinfection, PVC, CFCs.\n• Hydrogen: used as fuel, margarine, ammonia production.\n• Sodium Hydroxide: soap, paper making, refining petroleum.\n\nBelow is the cell schematic showing electrodes:\n<svg viewBox='0 0 500 160' style='max-width:420px; margin: 1.5rem auto; display:block;' xmlns='http://www.w3.org/2000/svg'>\n  <rect x='50' y='20' width='400' height='120' rx='5' fill='none' stroke='var(--border-color)' stroke-width='2'/>\n  <!-- Membrane -->\n  <line x1='250' y1='20' x2='250' y2='140' stroke='var(--text-muted)' stroke-dasharray='5,5' stroke-width='2'/>\n  <!-- Anode -->\n  <rect x='130' y='40' width='20' height='80' fill='grey' stroke='black'/>\n  <text x='135' y='85' fill='white' font-size='12' font-weight='bold'>+</text>\n  <!-- Cathode -->\n  <rect x='350' y='40' width='20' height='80' fill='grey' stroke='black'/>\n  <text x='355' y='85' fill='white' font-size='12' font-weight='bold'>-</text>\n  <text x='110' y='135' fill='var(--text-muted)' font-size='10'>Anode (Cl₂↑)</text>\n  <text x='330' y='135' fill='var(--text-muted)' font-size='10'>Cathode (H₂↑)</text>\n  <text x='210' y='15' fill='var(--text-normal)' font-size='11'>Porous Membrane</text>\n</svg>"
                      },
                      {
                        heading: "2. Bleaching Powder & Baking Soda",
                        text: "• **Bleaching Powder [Ca(OCl)2]**: Prepared by passing chlorine gas over dry slaked lime:\n**Ca(OH)2 + Cl2 → Ca(OCl)2 + H2O**\nUsed for bleaching cotton, wood pulp, and sterilizing drinking water.\n• **Baking Soda [NaHCO3 - Sodium Hydrogencarbonate]**: Prepared using the Solvay process: reacting brine, ammonia, carbon dioxide, and water:\n**NaCl + H2O + CO2 + NH3 → NH4Cl (Ammonium chloride) + NaHCO3**\nWhen heated during cooking, it releases CO2 gas, which makes dough rise, leaving spongy bread/cakes:\n**2NaHCO3 + Heat → Na2CO3 + H2O + CO2↑**"
                      },
                      {
                        heading: "3. Washing Soda & Plaster of Paris (POP)",
                        text: "• **Washing Soda [Na2CO3 · 10H2O]**: Sodium carbonate recrystallized with 10 water molecules (water of crystallization). Removes permanent hardness of water.\n• **Plaster of Paris [CaSO4 · 1/2 H2O - Calcium Sulphate Hemihydrate]**: Prepared by heating Gypsum (CaSO4 · 2H2O) at 373 K. If heated above this, it loses all water and becomes 'dead burnt plaster'. When mixed with water, it rehydrates back into a hard mass of Gypsum:\n**CaSO4 · 1/2 H2O + 1.5H2O → CaSO4 · 2H2O (Gypsum)**"
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Activity 2.15: Rehydrating Plaster of Paris",
                      objective: "To demonstrate water of crystallization and rehydration.",
                      materials: ["Plaster of Paris powder", "Water", "Molding dish", "Dry test tube"],
                      steps: [
                        "Mix Plaster of Paris with a small amount of water to form a paste.",
                        "Pour into a mold and leave undisturbed for 15-20 minutes.",
                        "Observe changes in hardness."
                      ],
                      observation: "The paste heats up slightly and solidifies into a hard, rigid plaster. This is due to re-crystallization into Gypsum."
                    }
                  ],
                  quiz: [
                    {
                      question: "Which chemical compound is known as Plaster of Paris?",
                      options: ["CaSO4 · 2H2O", "CaSO4 · 1/2 H2O", "CaCO3", "Ca(OH)2"],
                      answer: 1,
                      explanation: "POP is Calcium Sulphate Hemihydrate (CaSO4 · 1/2 H2O). The dihydrate form is Gypsum."
                    },
                    {
                      question: "What gas is released at the Anode during the Chlor-alkali process?",
                      options: ["Hydrogen gas", "Oxygen gas", "Chlorine gas", "Carbon Dioxide gas"],
                      answer: 2,
                      explanation: "Chlorine gas (Cl2↑) carries a negative charge in solution and is released at the positive Anode electrode."
                    }
                  ]
                }
              ]
            },
{
              id: "10s-4",
              title: "Metals and Non-metals",
              topics: [
                {
                  id: "10s-4-1",
                  title: "1. Physical Properties & Exceptions",
                  lab: { type: "conductivity-circuit" },
                  lab: { type: "conductivity-circuit" },
                  theory: {
                    intro: "Elements are grouped into metals or non-metals on the basis of physical traits. In this lesson, we study lustre, malleability, ductility, conductivity, and their critical chemical exceptions.",
                    sections: [
                      {
                        heading: "Physical Properties of Metals vs. Non-metals",
                        text: "• **Metallic Lustre**: Metals have a shining surface in their pure state (e.g. gold, silver).\n• **Hardness**: Metals are generally hard (hardness varies by metal). Non-metals are soft (except Diamond).\n• **Malleability**: Metals can be beaten into thin sheets using a hammer (Gold and Silver are most malleable).\n• **Ductility**: Metals can be drawn into thin wires (1g of Gold can be stretched into a 2 km wire!).\n• **Thermal & Electrical Conductivity**: Metals are excellent conductors (Silver and Copper are best; Lead and Mercury are poor). Wires carrying current are coated with PVC (polyvinylchloride) or rubber to prevent shocks. Non-metals are insulators.\n• **Sonority**: Metals produce a ringing sound when struck (sonorous)."
                      },
                      {
                        heading: "Critical Chemistry Exceptions",
                        text: "We cannot group elements by physical properties alone due to exceptions:\n1. **State**: All metals are solid at room temperature except **Mercury**, which is a liquid.\n2. **Melting Point**: Metals have high melting points, but **Gallium** and **Caesium** have such low melting points that they will melt if kept on your palm!\n3. **Lustre**: Non-metals are dull, but **Iodine** is a non-metal that is lustrous.\n4. **Allotropy**: Carbon is a non-metal that exists in multiple forms (Allotropes). **Diamond** is the hardest natural substance known with a very high melting point, while **Graphite** is an excellent conductor of electricity!\n5. **Hardness**: Alkali metals (**Lithium, Sodium, Potassium**) are so soft they can be cut easily with a kitchen knife."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Activity 3.6: Testing Electrical Conductivity",
                      objective: "To demonstrate that metals conduct electricity while non-metals do not.",
                      materials: ["A battery", "A bulb", "Connecting wires", "Crocodile clips", "Iron nail", "Coal (carbon) piece"],
                      steps: [
                        "Set up an electric circuit containing a battery, bulb, and two open terminals with clips.",
                        "Insert the iron nail between the clips and observe if the bulb glows.",
                        "Remove the nail and insert the piece of coal. Observe."
                      ],
                      observation: "The bulb glows brightly when the iron nail completes the circuit, but does not glow for the coal piece, demonstrating that metals conduct electricity."
                    }
                  ],
                  quiz: [
                    {
                      question: "Which of the following metals exists as a liquid at room temperature?",
                      options: ["Sodium", "Mercury", "Gallium", "Caesium"],
                      answer: 1,
                      explanation: "Mercury (Hg) is the only metal that is liquid at room temperature. Gallium/Caesium melt at body temperature, but are solid at room temperature."
                    },
                    {
                      question: "Which non-metal is lustrous (shiny)?",
                      options: ["Sulphur", "Phosphorus", "Iodine", "Carbon"],
                      answer: 2,
                      explanation: "Iodine is a non-metal that forms shiny violet-grey crystals, showing metallic lustre."
                    }
                  ]
                },
                {
                  id: "10s-4-2",
                  title: "2. Chemical Reactions of Metals",
                  lab: { type: "metal-elemental-reactions" },
                  theory: {
                    intro: "How do metals behave chemically? This lesson details metal oxide formations, reaction with water/steam, reactions with acids, and displacement rules.",
                    sections: [
                      {
                        heading: "1. Reaction of Metals with Oxygen (Air)",
                        text: "Almost all metals combine with oxygen to form metal oxides, which are basic in nature:\n**Metal + Oxygen → Metal Oxide**\n• Example 1: 2Cu + O2 → 2CuO (Black copper oxide).\n• Example 2: 4Al + 3O2 → 2Al2O3 (Aluminium oxide).\n\n**Amphoteric Oxides**: Metal oxides that react with both acids and bases to produce salt and water:\n*Aluminium Oxide with Acid*: Al2O3 + 6HCl → 2AlCl3 + 3H2O\n*Aluminium Oxide with Base*: Al2O3 + 2NaOH → 2NaAlO2 (Sodium Aluminate) + H2O\n\n*Storage of Na/K*: Potassium and Sodium react violently with oxygen, catching fire instantly in the open. They are kept submerged in **Kerosene oil** to prevent accidental fires."
                      },
                      {
                        heading: "2. Reaction of Metals with Water & Steam",
                        text: "Metals react with water to produce metal oxide and hydrogen. Soluble oxides dissolve to form metal hydroxides:\n**Metal + Water → Metal Oxide + Hydrogen**\n**Metal Oxide + Water → Metal Hydroxide**\n• Sodium/Potassium: React violently with cold water, releasing hydrogen which catches fire instantly (exothermic).\n• Calcium: Reacts less violently. It starts floating because bubbles of H2 gas stick to the metal surface!\n• Magnesium: Does not react with cold water; reacts with hot water and floats.\n• Aluminium, Iron, Zinc: React only with **Steam** to form metal oxides:\n**2Al(s) + 3H2O(g) → Al2O3(s) + 3H2(g)↑**\n**3Fe(s) + 4H2O(g) → Fe3O4(s) + 4H2(g)↑**\n• Lead, Copper, Silver, Gold: Do not react with water or steam at all."
                      },
                      {
                        heading: "3. Reaction of Metals with Acids & Aqua Regia",
                        text: "Metals react with dilute acids to give salt and hydrogen gas:\n**Metal + Dilute Acid → Salt + Hydrogen gas↑**\n*Nitric Acid Exception*: Hydrogen gas is NOT evolved when metals react with HNO3. It is a strong oxidizing agent; it oxidizes the H2 gas produced into water (H2O) and itself gets reduced to nitrogen oxides (N2O, NO, NO2). However, Magnesium (Mg) and Manganese (Mn) react with *very dilute* HNO3 to evolve H2 gas.\n\n**Aqua Regia** (Latin for 'royal water'): A freshly prepared mixture of concentrated Hydrochloric Acid and concentrated Nitric Acid in a **3:1 ratio**. It is a highly corrosive, fuming liquid that can dissolve gold and platinum, which neither acid can do alone!"
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Activity 3.10: Action of Steam on metals",
                      objective: "To demonstrate the reaction of metals (like Fe, Al) with steam.",
                      materials: ["Glass tube", "Metal sample (Iron wire)", "Glass-wool soaked in water", "Burner", "Delivery tube", "Water trough", "Test tube"],
                      steps: [
                        "Place glass-wool soaked in water at the end of the glass tube.",
                        "Place the metal sample in the middle of the tube.",
                        "Heat the metal sample while heating the glass-wool to generate steam.",
                        "Pass evolved gas through water and test with a flame."
                      ],
                      observation: "Steam passes over the red-hot metal. Hydrogen gas is collected over water, and the metal is oxidized into black Fe3O4."
                    }
                  ],
                  quiz: [
                    {
                      question: "Which metal oxide is amphoteric in nature?",
                      options: ["Sodium Oxide", "Calcium Oxide", "Aluminium Oxide", "Copper Oxide"],
                      answer: 2,
                      explanation: "Aluminium Oxide (Al2O3) and Zinc Oxide (ZnO) are amphoteric, reacting with both acids and bases."
                    },
                    {
                      question: "What is the ratio of concentrated HCl to concentrated HNO3 in Aqua Regia?",
                      options: ["1:3", "3:1", "1:1", "2:3"],
                      answer: 1,
                      explanation: "Aqua Regia is a mixture of concentrated HCl and concentrated HNO3 in a 3:1 ratio."
                    }
                  ]
                },
                {
                  id: "10s-4-3",
                  title: "3. Reactivity Series & Ionic Bonding",
                  lab: { type: "metal-reactivity" },
                  theory: {
                    intro: "Why do metals display different reactivities? This lesson covers the displacement reactivity series, electron transfer mechanisms, and the properties of ionic salts.",
                    sections: [
                      {
                        heading: "The Metal Reactivity Series",
                        text: "By performing displacement reactions where a more reactive metal displaces a less reactive one from its salt solution (Metal A + Salt of B → Salt of A + Metal B), scientists arranged metals in decreasing reactivity:\n1. **K (Potassium)** - Most reactive\n2. **Na (Sodium)**\n3. **Ca (Calcium)**\n4. **Mg (Magnesium)**\n5. **Al (Aluminium)**\n6. **Zn (Zinc)**\n7. **Fe (Iron)**\n8. **Pb (Lead)**\n9. **[H] (Hydrogen)**\n10. **Cu (Copper)**\n11. **Hg (Mercury)**\n12. **Ag (Silver)**\n13. **Au (Gold)** - Least reactive"
                      },
                      {
                        heading: "Formation of Ionic (Electrovalent) Compounds",
                        text: "Reactions occur when atoms try to attain a stable octet (completely filled outer shell):\n1. **Sodium Chloride (NaCl)**: Sodium (2,8,1) has 1 valence electron in its M shell. It transfers this electron to Chlorine (2,8,7), which needs 1 electron to complete its octet. This creates Na+ and Cl- ions, which are held together by strong electrostatic forces of attraction:\n   **Na (2,8,1) → Na+ (2,8) + e-**\n   **Cl (2,8,7) + e- → Cl- (2,8,8)**\n2. **Magnesium Chloride (MgCl2)**: Magnesium (2,8,2) transfers two valence electrons to two chlorine atoms, forming Mg2+ and two Cl- ions."
                      },
                      {
                        heading: "General Properties of Ionic Compounds",
                        text: "• **Physical Nature**: Solid and hard due to strong electrostatic attraction. They are brittle and break when pressure is applied.\n• **Melting and Boiling Points**: Extremely high melting and boiling points (e.g. NaCl melts at 1074 K). Breaking the strong inter-ionic bonds requires massive thermal energy!\n• **Solubility**: Soluble in polar solvents like water, but insoluble in organic solvents like kerosene or petrol.\n• **Conduction of Electricity**: Ionic compounds do NOT conduct electricity in the solid state because ions are fixed in a rigid crystal structure. However, they conduct electricity in the **molten state** or **aqueous solution** because the ions are free to move toward electrodes."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Activity 3.12: Metal Displacement Reactivity",
                      objective: "To demonstrate metal displacement reactions and verify relative reactivities.",
                      materials: ["Copper wire", "Iron nail", "Iron Sulphate solution", "Copper Sulphate solution", "Two test tubes"],
                      steps: [
                        "Put the copper wire in the test tube with Iron Sulphate solution.",
                        "Put the iron nail in the test tube with Copper Sulphate solution.",
                        "Observe both tubes after 20 minutes."
                      ],
                      observation: "A displacement reaction occurs in the tube with the iron nail and copper sulphate (blue turns green, brown copper deposits on iron). No reaction occurs in the tube with copper and iron sulphate, proving Iron is more reactive than Copper."
                    }
                  ],
                  quiz: [
                    {
                      question: "Which of the following properties is NOT characteristic of ionic compounds?",
                      options: [
                        "High melting and boiling points",
                        "Solubility in water",
                        "Conduction of electricity in solid state",
                        "Brittleness"
                      ],
                      answer: 2,
                      explanation: "Ionic compounds cannot conduct electricity in the solid state because their ions are held in fixed positions. They only conduct in molten or aqueous states."
                    },
                    {
                      question: "Which metal is unable to displace hydrogen from dilute acids?",
                      options: ["Zinc", "Iron", "Copper", "Magnesium"],
                      answer: 2,
                      explanation: "Copper is lower than Hydrogen in the reactivity series, meaning it cannot reduce hydrogen ions to release Hydrogen gas."
                    }
                  ]
                },
                {
                  id: "10s-4-4",
                  title: "4. Metallurgy & Corrosion",
                  lab: { type: "metallurgy-corrosion" },
                  theory: {
                    intro: "How do we extract pure metals from the earth, and how do we protect them from natural decay? This lesson covers metallurgy steps, refining, and corrosion protection.",
                    sections: [
                      {
                        heading: "1. Extraction of Metals (Metallurgy)",
                        text: "Ores mined from the earth contain sand and soil impurities called **Gangue**, which must be removed first. Extraction processes depend on reactivity:\n• **Low Reactivity Metals**: Heated in air alone. E.g., Cinnabar (HgS) is roasted to HgO, then decomposed to liquid Mercury: \n  **2HgS + 3O2 + Heat → 2HgO + 2SO2**\n  **2HgO + Heat → 2Hg(l) + O2(g)**\n• **Medium Reactivity Metals**: Exist as sulphides or carbonates. \n  1. **Roasting** (heating strongly in excess air for sulphide ores): 2ZnS + 3O2 + Heat → 2ZnO + 2SO2\n  2. **Calcination** (heating strongly in limited air for carbonate ores): ZnCO3 + Heat → ZnO + CO2\n  3. **Reduction**: Zinc oxide is reduced using Carbon (coke): ZnO + C → Zn + CO.\n• **Thermit Reaction**: Reduction using active metals like Aluminium. The reaction is highly exothermic, yielding molten metal. Used to join railway tracks: Fe2O3(s) + 2Al(s) → 2Fe(l) [molten] + Al2O3(s) + Heat."
                      },
                      {
                        heading: "2. Electrolytic Reduction & Refining",
                        text: "• **Electrolytic Reduction**: Highly reactive metals (Na, Ca, Mg, Al) have a greater affinity for oxygen than carbon. They are extracted by electrolysis of their molten chlorides. Na+ is reduced at the cathode, and Cl- is oxidized at the anode.\n• **Electrolytic Refining of Copper**: Impure copper is made the Anode (+), and a thin sheet of pure copper is made the Cathode (-). The electrolyte is acidified CuSO4 solution. On passing current, copper ions transfer from the anode to deposit on the cathode. Soluble impurities go into solution, while insoluble impurities settle below the anode as **Anode Mud**."
                      },
                      {
                        heading: "3. Corrosion & Prevention",
                        text: "Corrosion is the gradual destruction of metals by environmental gases and moisture:\n• **Iron (Rusting)**: Reddish-brown flaky hydrated ferric oxide (Fe2O3 · xH2O).\n• **Silver**: Turns black due to reaction with sulphur in air, forming Silver Sulphide (Ag2S).\n• **Copper**: Gains a green coat of basic copper carbonate [CuCO3 · Cu(OH)2].\n\n**Prevention Methods**:\n1. Painting, greasing, or oiling.\n2. **Galvanisation**: Coating steel or iron with a thin protective layer of **Zinc**. The zinc protects the iron even if the coating is scratched (sacrificial protection).\n3. **Alloying**: Mixing a metal with other elements to change its properties. E.g., pure iron is soft, but adding 0.05% carbon makes it hard. Stainless steel (Iron + Nickel + Chromium) does not rust. Brass (Cu + Zn), Bronze (Cu + Sn), and Solder (Pb + Sn, low melting point for welding)."
                      }
                    ]
                  },
                  activities: [
                    {
                      title: "Activity 3.14: Investigating Conditions for Rusting",
                      objective: "To demonstrate that both oxygen and moisture are required for iron to rust.",
                      materials: ["Three test tubes", "Clean iron nails", "Boiled distilled water", "Oil", "Anhydrous Calcium Chloride", "Rubber stoppers"],
                      steps: [
                        "Tube A: Place nails in contact with ordinary tap water and air.",
                        "Tube B: Place nails in boiled distilled water (no dissolved air) and cover with a layer of oil (stops air entry).",
                        "Tube C: Place nails in a tube containing anhydrous calcium chloride (drying agent) to absorb all moisture."
                      ],
                      observation: "After a few days, nails in Tube A rust heavily. Nails in Tube B and Tube C do not rust at all, showing that both air (oxygen) and moisture are essential for rusting."
                    }
                  ],
                  quiz: [
                    {
                      question: "Which of the following processes is used to extract Sodium from molten Sodium Chloride?",
                      options: ["Reduction with carbon", "Calcination", "Roasting", "Electrolytic reduction"],
                      answer: 3,
                      explanation: "Sodium is highly reactive and cannot be reduced by carbon. It is extracted by electrolytic reduction (electrolysis) of molten NaCl."
                    },
                    {
                      question: "Galvanisation is a method of protecting iron by coating it with a thin layer of:",
                      options: ["Copper", "Zinc", "Tin", "Aluminium"],
                      answer: 1,
                      explanation: "Galvanisation uses a coating of Zinc (Zn) to protect iron from corrosion."
                    }
                  ]
                }
              ]
            },
{
    id: "10s-5",
    title: "Carbon and its Compounds",
    topics: [
      {
        id: "10s-5-1",
        title: "1. Covalent Bonding & Versatile Nature of Carbon",
        lab: { type: "molecule-builder" },
        theory: {
          intro: "Carbon is an element of immense significance — food, clothes, medicines, books, and all living structures are carbon-based. Despite being only 0.02% of Earth's crust and 0.03% of the atmosphere (as CO2), carbon forms millions of known compounds, far outnumbering compounds of all other elements combined.",
          sections: [
            {
              heading: "1. Covalent Bonding in Carbon",
              text: "Carbon (atomic number 6) has 4 valence electrons. To attain noble gas configuration, it would need to gain or lose 4 electrons — both extremely difficult:\n• Gaining 4 electrons to form C4- would mean 6 protons holding 10 electrons — very unstable.\n• Losing 4 electrons to form C4+ would require enormous energy.\n\n**Solution: Sharing electrons (Covalent Bonding)**\nCarbon shares its 4 valence electrons with other atoms. The shared pair belongs to both atoms, allowing both to attain noble gas configuration.\n\n**Types of Covalent Bonds:**\n• **Single Bond**: One shared pair of electrons (e.g., H2, Cl2, CH4). Represented by a single line (—).\n• **Double Bond**: Two shared pairs (e.g., O2, C2H4 ethene). Represented by (=).\n• **Triple Bond**: Three shared pairs (e.g., N2, C2H2 ethyne). Represented by (≡).\n\n**Properties of Covalent Compounds:**\n• Low melting and boiling points (weak intermolecular forces).\n• Poor conductors of electricity (no ions formed).\n• Generally insoluble in water, soluble in organic solvents."
            },
            {
              heading: "2. Allotropes of Carbon",
              text: "Carbon exists in different physical forms (allotropes) with widely varying properties but identical chemical properties:\n\n**Diamond:**\n• Each carbon bonded to 4 others in a rigid 3D tetrahedral structure.\n• Hardest natural substance known.\n• Does NOT conduct electricity (no free electrons).\n• Very high melting point.\n• Used in cutting/drilling tools, jewellery.\n\n**Graphite:**\n• Each carbon bonded to 3 others in flat hexagonal layers.\n• Layers held by weak van der Waals forces — smooth and slippery.\n• Excellent conductor of electricity (one free electron per carbon atom moves between layers).\n• Used in pencils, lubricants, electrodes.\n\n**Fullerenes (C60 Buckminsterfullerene):**\n• 60 carbon atoms arranged in a hollow sphere (like a football/soccer ball).\n• Named after architect Buckminster Fuller (geodesic dome designer).\n• Used in nanotechnology and drug delivery research."
            },
            {
              heading: "3. Versatile Nature of Carbon: Catenation & Tetravalency",
              text: "Two unique properties make carbon form millions of compounds:\n\n**A. Catenation:**\nCarbon's unique ability to form strong bonds with other carbon atoms, creating:\n• Long straight chains (e.g., C20H42)\n• Branched chains\n• Rings/Cyclic structures (e.g., cyclohexane C6H12, benzene C6H6)\n• Chains with single, double, or triple bonds.\nThe C—C bond is exceptionally strong and stable. Silicon can catenate too, but only up to 7-8 atoms and those compounds are very reactive.\n\n**B. Tetravalency:**\nWith valency 4, carbon bonds with four other atoms simultaneously. It forms strong bonds with H, O, N, S, Cl and many other elements. Carbon's small atomic size allows the nucleus to hold shared electron pairs tightly, making these bonds very strong.\n\n**Saturated Compounds:** Contain only single bonds between carbon atoms (e.g., ethane C2H6). Less reactive.\n**Unsaturated Compounds:** Contain double or triple bonds (e.g., ethene C2H4, ethyne C2H2). More reactive."
            },
            {
              heading: "4. Hydrocarbons, Functional Groups & Homologous Series",
              text: "**Hydrocarbons:** Compounds containing only carbon and hydrogen.\n• **Alkanes** (saturated): CnH2n+2 (methane CH4, ethane C2H6, propane C3H8, butane C4H10)\n• **Alkenes** (unsaturated, double bond): CnH2n (ethene C2H4, propene C3H6)\n• **Alkynes** (unsaturated, triple bond): CnH2n-2 (ethyne C2H2, propyne C3H4)\n\n**Structural Isomers:** Compounds with the same molecular formula but different structural arrangements. Example: Butane (C4H10) has two isomers — n-butane (straight chain) and isobutane (branched).\n\n**Functional Groups:** Heteroatoms (O, N, S, Cl, Br) or groups containing them that replace hydrogen and determine the chemical properties of the compound, regardless of chain length.\n| Functional Group | Class | Suffix/Prefix |\n|---|---|---|\n| —OH | Alcohol | -ol |\n| —CHO | Aldehyde | -al |\n| —C=O (in chain) | Ketone | -one |\n| —COOH | Carboxylic Acid | -oic acid |\n| —Cl, —Br | Haloalkane | chloro-/bromo- |\n\n**Homologous Series:** A series of compounds with the same functional group, where successive members differ by —CH2— unit (14 u molecular mass difference). Members show a gradation in physical properties but identical chemical properties."
            }
          ]
        },
        activities: [
          {
            title: "Activity 4.2: Homologous Series of Alcohols",
            objective: "To demonstrate the concept of a homologous series.",
            materials: ["Pen", "Paper", "Molecular models (optional)"],
            steps: [
              "Write the formulae of methanol (CH3OH), ethanol (C2H5OH), propanol (C3H7OH), and butanol (C4H9OH).",
              "Calculate the difference in molecular formulae between successive members.",
              "Calculate the difference in molecular masses (C=12u, H=1u, O=16u).",
              "Observe the pattern."
            ],
            observation: "Each successive member differs by —CH2— (14u). All have the —OH functional group and similar chemical properties, confirming they form a homologous series."
          }
        ],
        quiz: [
          {
            question: "What is the unique ability of carbon to form bonds with other carbon atoms called?",
            options: ["Tetravalency", "Catenation", "Isomerism", "Polymerisation"],
            answer: 1,
            explanation: "Catenation is carbon's unique ability to form strong bonds with other carbon atoms, creating long chains, branched chains, and rings."
          },
          {
            question: "Which allotrope of carbon is an excellent conductor of electricity?",
            options: ["Diamond", "Fullerene", "Graphite", "Charcoal"],
            answer: 2,
            explanation: "In graphite, each carbon is bonded to only 3 others (not 4), leaving one free electron per atom that can move between layers, enabling electrical conductivity."
          },
          {
            question: "The general formula for alkenes is:",
            options: ["CnH2n+2", "CnH2n", "CnH2n-2", "CnH2n+1"],
            answer: 1,
            explanation: "Alkenes have the general formula CnH2n (e.g., ethene C2H4, propene C3H6). Alkanes are CnH2n+2 and alkynes are CnH2n-2."
          }
        ]
      },
      {
        id: "10s-5-2",
        title: "2. Chemical Properties, Ethanol, Ethanoic Acid & Soaps",
        lab: { type: "micelle" },
        theory: {
          intro: "Carbon compounds undergo several important chemical reactions. In this lesson, we study combustion, oxidation, addition and substitution reactions, the properties of two commercially critical compounds — ethanol and ethanoic acid — and the chemistry of soaps and detergents.",
          sections: [
            {
              heading: "1. Chemical Properties of Carbon Compounds",
              text: "**A. Combustion:**\nCarbon and its compounds burn in oxygen to produce CO2, H2O, heat and light.\n• C + O2 -> CO2 + Heat + Light\n• CH4 + 2O2 -> CO2 + 2H2O + Heat + Light\n\nSaturated hydrocarbons burn with a clean blue flame. Unsaturated hydrocarbons burn with a yellow, sooty flame.\n\n**B. Oxidation (Controlled):**\nAlcohols converted to carboxylic acids using oxidising agents like alkaline KMnO4 or acidified K2Cr2O7.\nCH3CH2OH + [O] -> CH3COOH\n\n**C. Addition Reaction:**\nUnsaturated hydrocarbons add hydrogen in the presence of Ni or Pd catalyst to form saturated compounds. Example: Vegetable oil + H2 -> Vanaspati ghee (Hydrogenation).\n\n**D. Substitution Reaction:**\nIn sunlight, chlorine replaces hydrogen atoms in saturated hydrocarbons.\nCH4 + Cl2 -> CH3Cl + HCl (in sunlight)"
            },
            {
              heading: "2. Properties of Ethanol (C2H5OH)",
              text: "Ethanol is a liquid at room temperature (BP = 351 K). Active ingredient in alcoholic drinks, a good solvent, miscible with water in all proportions.\n\n**Key Reactions:**\n• **With Sodium:** 2Na + 2C2H5OH -> 2C2H5ONa (Sodium ethoxide) + H2. Hydrogen gas evolved.\n• **Dehydration:** Heating with excess conc. H2SO4 at 443 K removes water to give ethene: C2H5OH -> C2H4 + H2O.\n\n**Dangers:** Methanol (CH3OH) is extremely toxic — even small quantities cause blindness and death. Denatured alcohol = industrial ethanol + methanol + blue dye."
            },
            {
              heading: "3. Properties of Ethanoic Acid (CH3COOH)",
              text: "Ethanoic acid (acetic acid) has MP 290 K. Pure form = glacial acetic acid. 5-8% solution in water = vinegar. It is a weak acid (partially ionised).\n\n**Key Reactions:**\n• **Esterification:** CH3COOH + C2H5OH -> CH3COOC2H5 (Ester) + H2O. Esters have sweet/fruity smells.\n• **Saponification:** Ester + NaOH -> Alcohol + Sodium salt of carboxylic acid. Basis of soap-making.\n• **With Base:** CH3COOH + NaOH -> CH3COONa + H2O.\n• **With Carbonates:** 2CH3COOH + Na2CO3 -> 2CH3COONa + H2O + CO2. CO2 turns lime water milky."
            },
            {
              heading: "4. Soaps and Detergents",
              text: "**Soap molecules** are sodium/potassium salts of long-chain carboxylic acids with two distinct ends:\n• **Hydrophilic (ionic) end** — attracts water.\n• **Hydrophobic (hydrocarbon) end** — attracts oil/grease.\n\n**Cleaning Mechanism (Micelle Formation):** Hydrophobic tails embed into oil droplet, hydrophilic heads face outward into water. This spherical structure (micelle) traps oil and is washed away.\n\n**Hard Water Problem:** Ca2+/Mg2+ ions react with soap to form insoluble scum, wasting soap.\n\n**Detergents:** Synthetic cleaning agents whose calcium/magnesium salts are soluble. Work in both hard and soft water but are non-biodegradable."
            }
          ]
        },
        activities: [
          {
            title: "Activity 4.8: Esterification Reaction",
            objective: "To prepare an ester from ethanol and ethanoic acid.",
            materials: ["1 mL ethanol", "1 mL glacial acetic acid", "Conc. sulphuric acid (drops)", "Test tube", "Water bath", "Beaker with water"],
            steps: [
              "Mix ethanol, glacial acetic acid and a few drops of conc. H2SO4 in a test tube.",
              "Warm gently in a water bath for at least 5 minutes.",
              "Pour the mixture into the beaker containing water.",
              "Smell the resulting mixture."
            ],
            observation: "A sweet, fruity smell is observed — this is the ester (ethyl ethanoate). The ester forms an oily layer on the water surface."
          }
        ],
        quiz: [
          {
            question: "Hydrogenation of vegetable oils using a nickel catalyst is an example of:",
            options: ["Substitution reaction", "Combustion reaction", "Addition reaction", "Oxidation reaction"],
            answer: 2,
            explanation: "Hydrogen is added across the double bonds of unsaturated vegetable oils to convert them into saturated fats. This is a classic addition reaction."
          },
          {
            question: "Soap does not work well in hard water because:",
            options: ["Hard water is too cold for soap", "Soap reacts with Ca2+/Mg2+ ions to form insoluble scum", "Hard water contains excess soap", "Soap molecules break down in hard water"],
            answer: 1,
            explanation: "Hard water contains dissolved Ca2+ and Mg2+ ions that react with soap to form insoluble precipitates (scum), making soap ineffective."
          }
        ]
      }
    ]
  },
{
    id: "10s-6",
    title: "Life Processes",
    topics: [
      {
        id: "10s-6-1",
        title: "1. Nutrition: Autotrophic & Heterotrophic",
        lab: { type: "photosynthesis" },
        theory: {
          intro: "All living organisms perform certain basic functions to maintain life — nutrition, respiration, transportation, and excretion. These are collectively called life processes. In this lesson, we focus on nutrition — how organisms obtain energy from food.",
          sections: [
            {
              heading: "1. Autotrophic Nutrition (Photosynthesis)",
              text: "Organisms that synthesize their own food from simple inorganic substances (CO2 and H2O) using light energy are called autotrophs.\n\n**Photosynthesis Equation:**\n6CO2 + 6H2O + Light Energy (Chlorophyll) -> C6H12O6 + 6O2\n\n**Events in Photosynthesis:**\n1. Absorption of light by chlorophyll.\n2. Conversion of light energy to chemical energy; splitting of water molecules (photolysis): 2H2O -> 2H2 + O2.\n3. Carbon fixation: CO2 is reduced to carbohydrates using the hydrogen from step 2.\n\n**Stomata — Gas Exchange in Leaves:**\n• Tiny pores on leaf surfaces flanked by two kidney-shaped guard cells.\n• Guard cells regulate opening/closing of stomatal pores.\n• When turgid (swollen with water): Stoma opens -> CO2 enters, O2 exits.\n• When flaccid: Stoma closes -> prevents water loss.\n• Desert plants take up CO2 at night when stomata open to reduce water loss."
            },
            {
              heading: "2. Heterotrophic Nutrition",
              text: "Organisms that cannot make their own food depend on other organisms (heterotrophs).\n\n**Types:**\n• **Holozoic:** Ingestion of whole food -> digestion -> absorption -> assimilation -> egestion. (Humans, Amoeba)\n• **Saprophytic:** Feeding on dead/decaying organic matter by secreting enzymes externally. (Fungi)\n• **Parasitic:** Deriving nutrition from a living host organism. (Cuscuta, tapeworm)\n\n**Nutrition in Amoeba:** Uses pseudopodia to engulf food (phagocytosis).\n**Nutrition in Paramecium:** Uses cilia to sweep food into oral groove."
            },
            {
              heading: "3. Human Digestive System",
              text: "**1. Mouth (Buccal Cavity):**\n• Teeth physically break down food (mastication).\n• Salivary amylase breaks down starch -> maltose.\n\n**2. Oesophagus:** Peristalsis pushes food to stomach.\n\n**3. Stomach:**\n• HCl acid (creates acidic pH ~2, kills bacteria).\n• Pepsin breaks down proteins -> peptides.\n• Mucus protects stomach lining from acid.\n\n**4. Small Intestine (~6.5m):**\n• Receives bile (liver — emulsifies fats) and pancreatic juice (trypsin, lipase, amylase).\n• Intestinal juice completes digestion.\n• Villi — finger-like projections — enormously increase surface area for absorption. Each villus has a network of blood capillaries.\n\n**5. Large Intestine:** Absorbs water and remaining minerals. Undigested residue eliminated via anus."
            }
          ]
        },
        activities: [
          {
            title: "Activity 6.1: Testing Starch in a Leaf",
            objective: "To show that photosynthesis produces starch and requires sunlight.",
            materials: ["A potted plant", "Black paper", "Clips", "Iodine solution", "Ethanol", "Water bath"],
            steps: [
              "Keep a potted plant in darkness for 72 hours to destarch leaves.",
              "Clip black paper on both sides of a leaf, keep in sunlight for 6 hours.",
              "Pluck the leaf, boil in ethanol to remove chlorophyll.",
              "Wash and add iodine solution."
            ],
            observation: "Exposed part turns blue-black (starch present). Covered part does NOT. Proves sunlight is essential for photosynthesis."
          }
        ],
        quiz: [
          {
            question: "Which enzyme in saliva breaks down starch?",
            options: ["Pepsin", "Lipase", "Salivary amylase", "Trypsin"],
            answer: 2,
            explanation: "Salivary amylase (ptyalin) breaks down starch into maltose in the mouth."
          },
          {
            question: "Amoeba captures food using:",
            options: ["Cilia", "Tentacles", "Pseudopodia", "Oral groove"],
            answer: 2,
            explanation: "Amoeba uses pseudopodia (false feet) to surround and engulf food particles (phagocytosis)."
          }
        ]
      },
      {
        id: "10s-6-2",
        title: "2. Respiration, Transportation & Excretion",
        lab: { type: "heart-circulation" },
        theory: {
          intro: "After obtaining food through nutrition, organisms need to break it down to release energy (respiration), transport substances throughout the body (circulation), and remove metabolic waste products (excretion).",
          sections: [
            {
              heading: "1. Respiration",
              text: "**Step 1: Glycolysis (in Cytoplasm):**\nGlucose (6C) -> 2 Pyruvate (3C) + 2 ATP\n\n**A. Aerobic Respiration (With O2 — in Mitochondria):**\nPyruvate + O2 -> CO2 + H2O + 36 ATP. Total yield: ~38 ATP per glucose molecule.\n\n**B. Anaerobic Respiration (Without O2):**\n• In Yeast (Fermentation): Pyruvate -> Ethanol + CO2 + 2 ATP.\n• In Human Muscles: Pyruvate -> Lactic acid + 2 ATP. Causes muscle cramps.\n\n**Human Respiratory System:**\nPath: Nostrils -> Nasal cavity -> Pharynx -> Larynx -> Trachea -> Bronchi -> Bronchioles -> Alveoli.\n\n**Alveoli:** ~300 million in each lung (~100 m2 surface area). Thin-walled, surrounded by dense capillary network. O2 diffuses into blood (binds haemoglobin). CO2 diffuses out."
            },
            {
              heading: "2. Transportation in Humans",
              text: "**Heart — 4 chambers:** 2 Atria (receiving) + 2 Ventricles (pumping).\n• Right side handles deoxygenated blood. Left side handles oxygenated blood.\n• Septum prevents mixing. Valves prevent backflow.\n\n**Double Circulation:**\n1. Pulmonary: Heart -> Lungs -> Heart (oxygenation)\n2. Systemic: Heart -> Body -> Heart (oxygen delivery)\n\n**Blood Components:** Plasma (liquid), RBCs (haemoglobin, carry O2), WBCs (immune defence), Platelets (clotting).\n\n**Blood Pressure:** Measured as systolic/diastolic (e.g., 120/80 mmHg). High BP = hypertension.\n\n**Lymph:** Plasma that leaks into intercellular spaces. Carries digested fats from intestine. Lymph nodes filter pathogens."
            },
            {
              heading: "3. Transportation in Plants",
              text: "**Xylem — Water & Mineral Transport (Upward):**\n• Made of dead cells forming hollow tubes.\n• Transpiration Pull: Water evaporation from leaf stomata creates suction that pulls water upward.\n\n**Phloem — Food Transport (Bidirectional — Translocation):**\n• Made of living cells: sieve tubes and companion cells.\n• Transports dissolved sugars from leaves (source) to all parts (sink).\n• Uses ATP energy to load sucrose into sieve tubes."
            },
            {
              heading: "4. Excretion",
              text: "**Kidneys:** Main excretory organs. Each contains ~1 million nephrons.\n\n**Nephron Structure:** Bowman's Capsule (enclosing glomerulus) -> PCT -> Loop of Henle -> DCT -> Collecting Duct.\n\n**Urine Formation:**\n1. Glomerular Filtration: Blood filtered under high pressure. Small molecules pass; proteins/blood cells stay.\n2. Tubular Reabsorption: Useful substances (glucose, most water) reabsorbed.\n3. Tubular Secretion: Additional waste secreted into tubules.\n\n**Dialysis:** Artificial kidney for kidney failure. Blood filtered through cellulose tubes in dialysing fluid.\n\n**Excretion in Plants:** Store waste in cellular vacuoles, shed leaves, secrete resins/gums, excrete O2 and CO2 through stomata."
            }
          ]
        },
        quiz: [
          {
            question: "During anaerobic respiration in yeast, the end products are:",
            options: ["CO2 and Water", "Ethanol and CO2", "Lactic acid and CO2", "Ethanol and Water"],
            answer: 1,
            explanation: "Yeast undergoes fermentation: Glucose -> Ethanol + CO2 + 2 ATP."
          },
          {
            question: "The functional unit of the kidney is:",
            options: ["Neuron", "Nephron", "Alveolus", "Villus"],
            answer: 1,
            explanation: "The nephron is the structural and functional unit of the kidney. Each kidney contains about 1 million nephrons."
          },
          {
            question: "Which blood vessel carries oxygenated blood from the lungs to the heart?",
            options: ["Pulmonary artery", "Aorta", "Vena cava", "Pulmonary vein"],
            answer: 3,
            explanation: "Pulmonary veins carry oxygenated blood from the lungs to the left atrium. This is the only vein that carries oxygenated blood."
          }
        ]
      }
    ]
  },
{
    id: "10s-7",
    title: "Control and Coordination",
    topics: [
      {
        id: "10s-7-1",
        title: "1. Nervous System & Reflex Action",
        lab: { type: "reflex-arc" },
        theory: {
          intro: "Living organisms must respond to environmental changes. Control and coordination in animals is achieved by the nervous system (fast, precise) and the endocrine system (slow, long-lasting). Plants use only chemical coordination (hormones).",
          sections: [
            {
              heading: "1. The Neuron",
              text: "A neuron is the fundamental unit of the nervous system.\n\n**Structure:**\n• **Dendrites:** Short projections that receive nerve impulses.\n• **Cell Body:** Contains nucleus and organelles.\n• **Axon:** Long fibre carrying impulses away from cell body. Can be up to 1 metre long.\n• **Myelin Sheath:** Insulating fatty layer on axon, speeds up transmission.\n• **Axon Terminals:** Release neurotransmitters at synapse.\n\n**Nerve Impulse Transmission:**\n1. Chemical reaction at dendrite tip creates electrical impulse.\n2. Impulse travels: dendrite -> cell body -> axon -> axon terminal.\n3. At synapse (gap between neurons), neurotransmitters released.\n4. Chemicals diffuse across gap, trigger new impulse in next neuron."
            },
            {
              heading: "2. Reflex Actions and Reflex Arc",
              text: "A reflex action is a sudden, involuntary, rapid response without conscious thinking. Examples: pulling hand from hot object, blinking, sneezing, knee-jerk.\n\n**The Reflex Arc:**\n1. Receptor (sense organ) detects stimulus.\n2. Sensory Neuron carries impulse to spinal cord.\n3. Relay Neuron in spinal cord processes and connects.\n4. Motor Neuron carries response to effector.\n5. Effector (muscle/gland) carries out response.\n\nThe brain is informed for awareness and learning, but the reflex completes before brain processes it."
            },
            {
              heading: "3. The Human Brain",
              text: "Protected by cranium, meninges, and cerebrospinal fluid.\n\n**A. Forebrain — Cerebrum:**\n• Largest part. Divided into left/right hemispheres. Highly folded.\n• Functions: Thinking, intelligence, memory, reasoning, emotions.\n• Contains centres for hunger, thirst, body temperature regulation.\n\n**B. Midbrain:**\n• Controls involuntary reflex actions related to sight and hearing.\n\n**C. Hindbrain:**\n• **Cerebellum:** Balance, posture, precision of voluntary movements.\n• **Medulla Oblongata:** Vital involuntary actions — breathing, heartbeat, blood pressure, swallowing, vomiting.\n• **Pons:** Relays signals between cerebrum and cerebellum."
            }
          ]
        },
        quiz: [
          {
            question: "The gap between two neurons is called a:",
            options: ["Dendrite", "Axon terminal", "Synapse", "Myelin sheath"],
            answer: 2,
            explanation: "The synapse is the tiny gap between the axon terminal of one neuron and the dendrite of the next."
          },
          {
            question: "Which part of the brain controls balance and posture?",
            options: ["Cerebrum", "Medulla oblongata", "Cerebellum", "Pons"],
            answer: 2,
            explanation: "The cerebellum is responsible for body balance, posture, and coordinating precise voluntary movements."
          }
        ]
      },
      {
        id: "10s-7-2",
        title: "2. Chemical Coordination: Hormones in Animals & Plants",
        lab: { type: "hormone-feedback" },
        theory: {
          intro: "The endocrine system uses chemical messengers called hormones for slower, longer-lasting coordination. Plants rely entirely on hormones for coordination.",
          sections: [
            {
              heading: "1. Hormones in Animals (Endocrine System)",
              text: "Hormones are chemical substances secreted by endocrine glands (ductless) directly into the bloodstream.\n\n**Major Endocrine Glands:**\n• **Pituitary (Master gland):** Growth Hormone. Excess -> Gigantism. Deficiency -> Dwarfism.\n• **Thyroid:** Thyroxine. Regulates metabolism. Requires iodine. Deficiency -> Goitre.\n• **Pancreas:** Insulin (lowers blood sugar) & Glucagon (raises blood sugar). Insulin deficiency -> Diabetes mellitus.\n• **Adrenal:** Adrenaline. Fight-or-flight response. Increases heart rate, blood pressure.\n• **Testes:** Testosterone. Male secondary sexual characteristics.\n• **Ovaries:** Estrogen & Progesterone. Female secondary sexual characteristics.\n\n**Feedback Mechanism:** Hormone levels regulated by feedback loops to maintain homeostasis."
            },
            {
              heading: "2. Hormones in Plants (Phytohormones)",
              text: "**A. Auxins:** Promote cell elongation. Cause bending toward light (phototropism).\n**B. Gibberellins:** Promote stem elongation, seed germination, flowering.\n**C. Cytokinins:** Promote cell division. Delay ageing of leaves.\n**D. Abscisic Acid (ABA):** Stress hormone. Inhibits growth. Promotes stomatal closure during drought. Promotes leaf fall.\n**E. Ethylene:** Gaseous hormone. Promotes fruit ripening.\n\n**Plant Tropisms:**\n• Phototropism: Growth toward/away from light.\n• Geotropism: Growth toward/away from gravity.\n• Hydrotropism: Root growth toward water.\n• Chemotropism: Pollen tube growth toward ovule.\n• Thigmotropism: Growth in response to touch (tendrils)."
            }
          ]
        },
        quiz: [
          {
            question: "Which hormone is responsible for the 'fight or flight' response?",
            options: ["Thyroxine", "Insulin", "Adrenaline", "Growth Hormone"],
            answer: 2,
            explanation: "Adrenaline prepares the body for emergency situations by increasing heart rate, blood pressure, and energy supply to muscles."
          },
          {
            question: "Iodine deficiency can cause:",
            options: ["Diabetes", "Dwarfism", "Goitre", "Gigantism"],
            answer: 2,
            explanation: "Iodine is essential for thyroxine synthesis. Deficiency leads to thyroid enlargement (goitre)."
          },
          {
            question: "Which plant hormone promotes fruit ripening?",
            options: ["Auxin", "Gibberellin", "Cytokinin", "Ethylene"],
            answer: 3,
            explanation: "Ethylene is a gaseous plant hormone that promotes fruit ripening."
          }
        ]
      }
    ]
  },
{
    id: "10s-8",
    title: "How do Organisms Reproduce?",
    topics: [
      {
        id: "10s-8-1",
        title: "1. Asexual Reproduction & Sexual Reproduction in Plants",
        lab: { type: "cell-division" },
        theory: {
          intro: "Reproduction is the process by which organisms produce new individuals. It involves the creation of DNA copies and additional cellular structures, ensuring species continuation while introducing variation for evolution.",
          sections: [
            {
              heading: "1. Modes of Asexual Reproduction",
              text: "Asexual reproduction involves a single parent; offspring are genetically identical (clones).\n\n**A. Fission:**\n• Binary Fission: Organism splits into two. (Amoeba, Bacteria, Leishmania)\n• Multiple Fission: Nucleus divides into many. (Plasmodium)\n\n**B. Fragmentation:** Organism breaks into fragments, each growing into new individual. (Spirogyra)\n\n**C. Regeneration:** Re-growth from a cut piece using specialised cells. (Hydra, Planaria)\n\n**D. Budding:** Outgrowth develops on parent, then detaches. (Hydra, Yeast)\n\n**E. Vegetative Propagation:** New plants from vegetative parts. Potato (tuber), Bryophyllum (leaf buds), Rose (stem cuttings).\n• Tissue Culture: Plant cells grown in nutrient medium under sterile conditions.\n\n**F. Spore Formation:** Thick-walled spores survive harsh conditions. (Rhizopus/bread mould)"
            },
            {
              heading: "2. Sexual Reproduction in Flowering Plants",
              text: "Involves two parents and fusion of male and female gametes to form a zygote.\n\n**The Flower:**\n• **Sepals:** Protect flower bud.\n• **Petals:** Attract pollinators.\n• **Stamens (Male):** Anther produces pollen grains on filament.\n• **Carpel/Pistil (Female):** Stigma (sticky top), Style (tube), Ovary (contains ovules with egg cells).\n\n**Unisexual flowers:** Either stamens or carpel (Papaya, Watermelon).\n**Bisexual:** Both (Hibiscus, Mustard).\n\n**Pollination:** Transfer of pollen from anther to stigma.\n**Fertilization:** Pollen germinates on stigma, grows pollen tube. Male gamete fuses with egg -> Zygote.\n\n**Post-Fertilization:** Zygote -> Embryo. Ovule -> Seed. Ovary -> Fruit."
            }
          ]
        },
        quiz: [
          {
            question: "Vegetative propagation in Bryophyllum occurs through:",
            options: ["Stem cuttings", "Root tubers", "Leaf buds (notches on leaf margins)", "Runners"],
            answer: 2,
            explanation: "Bryophyllum has adventitious buds on the notches of its leaf margins that develop into new plantlets."
          },
          {
            question: "After fertilization, the ovule develops into a:",
            options: ["Fruit", "Seed", "Embryo", "Pollen tube"],
            answer: 1,
            explanation: "The ovule develops into a seed. The ovary develops into a fruit."
          }
        ]
      },
      {
        id: "10s-8-2",
        title: "2. Human Reproduction & Reproductive Health",
        lab: { type: "menstrual-cycle" },
        theory: {
          intro: "Human beings reproduce sexually. The onset of puberty marks the beginning of sexual maturity.",
          sections: [
            {
              heading: "1. Male Reproductive System",
              text: "• **Testes:** Located in scrotum (2-3C below body temp). Produce sperm and testosterone.\n• **Epididymis:** Stores and matures sperm.\n• **Vas Deferens:** Tubes carrying sperm toward urethra.\n• **Seminal Vesicles & Prostate:** Produce seminal fluid. Sperm + seminal fluid = semen.\n• **Urethra & Penis:** Delivery of semen."
            },
            {
              heading: "2. Female Reproductive System",
              text: "• **Ovaries:** Produce eggs and hormones (estrogen, progesterone). One egg released every ~28 days.\n• **Fallopian Tubes:** Fertilization occurs here.\n• **Uterus:** Embryo implants and develops. Inner lining (endometrium) thickens each month.\n• **Cervix & Vagina:** Birth canal.\n\n**Menstrual Cycle (~28 days):**\nDays 1-5: Menstruation (unfertilized egg, lining shed).\nDays 6-13: Lining regenerates, new egg matures.\nDay 14: Ovulation.\nDays 15-28: Lining thickens. If fertilized, embryo implants. If not, cycle repeats."
            },
            {
              heading: "3. Contraception & Reproductive Health",
              text: "**Barrier Methods:** Condoms (also protect against STDs), Diaphragm.\n**Chemical Methods:** Oral pills (prevent ovulation), Copper-T (IUD).\n**Surgical Methods:** Vasectomy (male), Tubectomy (female).\n\n**STDs:** Bacterial (Gonorrhoea, Syphilis — treatable). Viral (HIV/AIDS — no cure). Prevention: Condoms, avoiding multiple partners."
            }
          ]
        },
        quiz: [
          {
            question: "Where does fertilization occur in the human female reproductive system?",
            options: ["Uterus", "Ovary", "Fallopian tube", "Vagina"],
            answer: 2,
            explanation: "Fertilization occurs in the fallopian tube. The zygote then travels to the uterus for implantation."
          },
          {
            question: "Which contraceptive method also protects against STDs?",
            options: ["Oral pills", "Copper-T", "Condoms", "Tubectomy"],
            answer: 2,
            explanation: "Condoms are the only contraceptive method that provides a physical barrier against STDs."
          }
        ]
      }
    ]
  },
{
    id: "10s-9",
    title: "Heredity",
    topics: [
      {
        id: "10s-9-1",
        title: "1. Mendel's Laws of Inheritance & Sex Determination",
        lab: { type: "punnett-square" },
        theory: {
          intro: "Reproduction gives rise to individuals that are similar to their parents, but subtly different. Heredity is the study of how traits and characteristics are reliably passed from one generation to the next, and how new variations accumulate along the way. The rules governing inheritance were worked out by Gregor Johann Mendel through experiments on garden peas.",
          sections: [
            {
              heading: "1. Accumulation of Variation During Reproduction",
              text: "Every round of reproduction introduces small variations, and these variations are passed on to the next generation along with the differences already inherited. Over many generations, this builds up (accumulates) into significant diversity.\n\n**Asexual reproduction:** Only one parent is involved, so variations arise mainly from minor inaccuracies during DNA copying. Successive generations of a single bacterium remain very similar to each other — very little variation (e.g. a field of sugarcane, grown from cuttings, shows very little variation between plants).\n\n**Sexual reproduction:** Because two parents contribute DNA, far greater diversity is generated in each generation than is possible through DNA-copying errors alone.\n\n**Variation and survival:** Not all variations have an equal chance of surviving. Depending on the environment, some variants have an advantage — e.g. bacteria that can withstand heat survive better during a heat wave. Environmental factors 'select' which variants persist, and a variation that arose earlier has had more generations to spread, so it tends to be more widespread in the population than one that arose recently."
            },
            {
              heading: "2. Inherited Traits",
              text: "A child bears all the basic features of a human being, yet does not look exactly like its parents — human populations show a great deal of variation in individual traits.\n\n**Example — Earlobes:** Some people have free earlobes (hanging loose) while others have attached earlobes (joined directly to the head). This is a simple inherited trait that can be traced from parents to children within a family, similar to the traits Mendel studied in pea plants."
            },
            {
              heading: "3. Mendel's Experiments",
              text: "Mendel chose garden peas for contrasting pairs of characters (round/wrinkled seeds, tall/short plants, violet/white flowers), their short generation time, and their self-pollination capability — which let him control crosses precisely and count offspring of each type across generations.\n\n**Key Terms:**\n• **Gene:** Unit of inheritance; segment of DNA.\n• **Alleles:** Different forms of same gene (e.g., T for tall, t for dwarf).\n• **Dominant:** Expresses in heterozygous state (T).\n• **Recessive:** Expresses only when homozygous (tt).\n• **Genotype:** Genetic makeup (TT, Tt, tt).\n• **Phenotype:** Observable trait (Tall or Dwarf)."
            },
            {
              heading: "4. Monohybrid Cross",
              text: "Cross: Pure Tall (TT) x Pure Dwarf (tt)\n\nF1: All Tall (Tt) — Tall is dominant. Since no 'medium-height' plants appear, only one parental trait is expressed, not a blend.\n\nF2 (Tt x Tt), obtained by self-pollinating F1 plants:\n| | T | t |\n|---|---|---|\n| T | TT | Tt |\n| t | Tt | tt |\n\nGenotypic ratio: 1 TT : 2 Tt : 1 tt\nPhenotypic ratio: 3 Tall : 1 Dwarf\n\nThe reappearance of the short trait in F2 (which was hidden, not lost, in F1) shows that both tallness and shortness were inherited by the F1 plants, though only tallness was expressed.\n\n**Law of Segregation:** Each organism has two alleles per trait. During gamete formation, alleles segregate so each gamete carries only one."
            },
            {
              heading: "5. Dihybrid Cross",
              text: "Cross: Round-Yellow (RRYY) x Wrinkled-Green (rryy)\nF1: All Round-Yellow (RrYy) — round and yellow are the dominant traits.\nF2 Phenotypic ratio: 9 Round-Yellow : 3 Round-Green : 3 Wrinkled-Yellow : 1 Wrinkled-Green.\n\nThe appearance of two new combinations in F2 (Round-Green and Wrinkled-Yellow, not seen in either original parent) shows that the seed-shape trait and the seed-colour trait are inherited independently of each other.\n\n**Law of Independent Assortment:** Alleles of different genes segregate independently during gamete formation."
            },
            {
              heading: "6. How do these Traits get Expressed?",
              text: "Genes work by carrying the information to make specific proteins. Many traits are controlled indirectly — through enzymes that regulate a biological process.\n\n**Example — Plant height:** Height depends on a plant hormone. The amount of hormone made depends on how efficiently an enzyme carries out the reaction that produces it.\n• If the gene for that enzyme works efficiently → more hormone is made → the plant grows tall.\n• If the gene has an alteration that makes the enzyme less efficient → less hormone is made → the plant stays short.\n\nSo genes control traits by controlling the proteins/enzymes that drive the underlying biological processes — not by acting on the trait directly.\n\n**Why chromosomes matter:** Since both parents contribute equally to the DNA of the progeny, every individual has two full sets of genes — one from each parent — organised into pairs of chromosomes. Each germ cell (sperm or egg) receives only one chromosome from each pair (which may be of either maternal or paternal origin). This is what allows two separate traits, like seed shape and seed colour, to be inherited independently of each other, as seen in the dihybrid cross."
            },
            {
              heading: "7. Sex Determination",
              text: "Different species determine sex differently — some (like certain reptiles) rely entirely on the temperature at which fertilised eggs develop; in humans, sex is largely genetically determined.\n\nHumans: 22 pairs of autosomes (matched in both sexes) + 1 pair of sex chromosomes (the only mismatched pair).\nFemales: XX (a perfect pair). Males: XY (X paired with a shorter Y).\n\n• Every child inherits an X chromosome from the mother, regardless of sex.\n• X-bearing sperm + egg → XX → Female\n• Y-bearing sperm + egg → XY → Male\n\nSince the mother always contributes X, the sex of the child is determined entirely by which chromosome (X or Y) the father's sperm carries — a 50:50 chance each pregnancy."
            }
          ]
        },
        quiz: [
          {
            question: "In Mendel's monohybrid cross, the phenotypic ratio in F2 is:",
            options: ["1:1", "1:2:1", "3:1", "9:3:3:1"],
            answer: 2,
            explanation: "In a monohybrid cross (Tt x Tt), 3/4 show dominant trait and 1/4 recessive, giving 3:1."
          },
          {
            question: "The sex of a child is determined by:",
            options: ["Mother's chromosome", "Father's chromosome", "Mother's nutrition", "Environmental factors"],
            answer: 1,
            explanation: "Sex is determined by whether the father's sperm carries X (female) or Y (male) chromosome."
          },
          {
            question: "A tall, violet-flowered pea plant is crossed with a short, white-flowered plant. All progeny bore violet flowers, but almost half of them were short. The genetic make-up of the tall parent is most likely:",
            options: ["TTWW", "TTww", "TtWW", "TtWw"],
            answer: 2,
            explanation: "All progeny are violet, so the tall parent must be homozygous WW for flower colour (a Ww parent crossed with ww would give some white offspring). Almost half the progeny are short, so the tall parent must be heterozygous Tt (Tt × tt gives ~1:1 tall:short). Together this gives TtWW."
          },
          {
            question: "A study finds that children with light-coloured eyes usually have parents with light-coloured eyes. Does this alone prove that light eye colour is a recessive trait?",
            options: ["Yes, resemblance to parents always means recessive", "Yes, because light colours are always recessive", "No — both dominant and recessive traits can show parent-offspring resemblance; more crosses are needed to determine dominance", "No, because eye colour is not inherited at all"],
            answer: 2,
            explanation: "Resemblance between parents and offspring doesn't by itself reveal whether a trait is dominant or recessive — a dominant trait present in both parents would also be inherited by their children. Determining dominance requires tracking the trait across crosses (e.g., whether it can 'skip' a generation)."
          },
          {
            question: "In an asexually reproducing population, trait A is found in 10% of individuals and trait B is found in 60%. Which trait most likely arose earlier?",
            options: ["Trait A, because rare traits are always the oldest", "Trait B, because it has had more generations to accumulate and spread", "Neither — frequency has no connection to when a trait arose", "Trait A, because natural selection always favours newer variations"],
            answer: 1,
            explanation: "A variation that arose earlier has had more successive generations to be passed on and spread through the population, so it tends to become more common over time — making trait B's higher frequency consistent with an earlier origin."
          },
          {
            question: "How do genes ultimately control a visible trait such as plant height?",
            options: ["Genes physically stretch the plant's cells", "Genes code for proteins/enzymes that control processes (like hormone production) which in turn produce the trait", "Genes have no real effect on physical traits", "Height is controlled only by soil and water, not genes"],
            answer: 1,
            explanation: "Genes carry information to make proteins. For plant height, a gene's efficiency affects how much of a growth hormone an enzyme produces — more hormone means a taller plant. Genes act indirectly, through the proteins/enzymes they encode."
          }
        ]
      }
    ]
  },
{
    id: "10s-9b", // Will be mapped to Ch 9
    title: "Light – Reflection and Refraction",
    topics: [
      {
        id: "10s-9b-1",
        title: "1. Reflection of Light & Spherical Mirrors",
        lab: { type: "mirror" },
        theory: {
          intro: "Light makes things visible to us. In this lesson, we study the reflection of light by spherical mirrors and the rules for image formation by them.",
          sections: [
            {
              heading: "1. Laws of Reflection",
              text: "• The angle of incidence is equal to the angle of reflection (∠i = ∠r).\n• The incident ray, the normal at the point of incidence, and the reflected ray all lie in the same plane.\nThese laws apply to all types of reflecting surfaces, including spherical ones."
            },
            {
              heading: "2. Spherical Mirrors",
              text: "Mirrors whose reflecting surfaces are spherical.\n• **Concave Mirror:** Reflecting surface is curved inwards (faces the centre of the sphere). Acts as a converging mirror.\n• **Convex Mirror:** Reflecting surface is curved outwards. Acts as a diverging mirror.\n\n**Important Terms:**\n• **Pole (P):** The centre of the reflecting surface.\n• **Centre of Curvature (C):** The centre of the sphere of which the mirror is a part.\n• **Radius of Curvature (R):** The radius of that sphere.\n• **Principal Axis:** Straight line passing through the pole and centre of curvature.\n• **Principal Focus (F):** The point on the principal axis where rays parallel to the axis converge (concave) or appear to diverge from (convex).\n• **Focal Length (f):** Distance between pole and focus. **R = 2f**."
            },
            {
              heading: "3. Image Formation by Spherical Mirrors",
              text: "**Concave Mirror:**\nCan form real/inverted and virtual/erect images depending on object position.\n• Object at infinity -> Image at F (Point sized, Real).\n• Object beyond C -> Image between F and C (Diminished, Real).\n• Object at C -> Image at C (Same size, Real).\n• Object between C and F -> Image beyond C (Enlarged, Real).\n• Object at F -> Image at infinity (Highly enlarged, Real).\n• Object between P and F -> Image behind mirror (Enlarged, Virtual, Erect). Used in shaving mirrors and dentist mirrors.\n\n**Convex Mirror:**\nAlways forms virtual, erect, and diminished images regardless of object position.\nUsed as rear-view mirrors in vehicles because they give a wider field of view and always produce an erect image."
            },
            {
              heading: "4. Mirror Formula & Magnification",
              text: "**Mirror Formula:**\n1/v + 1/u = 1/f\nWhere:\n• v = image distance\n• u = object distance\n• f = focal length\n\n**Magnification (m):**\nm = Height of image (h') / Height of object (h) = -v/u\n• If m is negative, image is real and inverted.\n• If m is positive, image is virtual and erect."
            }
          ]
        },
        quiz: [
          {
            question: "The mirror used by a dentist to examine teeth is:",
            options: ["Plane mirror", "Convex mirror", "Concave mirror", "None of these"],
            answer: 2,
            explanation: "Dentists use concave mirrors because when the tooth is between the pole and focus, it forms an enlarged, erect, and virtual image."
          },
          {
            question: "For a spherical mirror, the relationship between radius of curvature (R) and focal length (f) is:",
            options: ["R = f", "R = 2f", "R = f/2", "R = 4f"],
            answer: 1,
            explanation: "The radius of curvature is twice the focal length (R = 2f)."
          }
        ]
      },
      {
        id: "10s-9b-2",
        title: "2. Refraction of Light & Lenses",
        lab: { type: "refraction" },
        theory: {
          intro: "When light travels obliquely from one transparent medium to another, its direction changes. This bending of light is called refraction.",
          sections: [
            {
              heading: "1. Refraction of Light",
              text: "Refraction occurs due to the change in the speed of light as it enters a different medium.\n• When light travels from a **rarer** to a **denser** medium (e.g., air to glass), it bends **towards** the normal.\n• When light travels from a **denser** to a **rarer** medium (e.g., glass to air), it bends **away from** the normal.\n\n**Laws of Refraction:**\n1. The incident ray, the refracted ray, and the normal at the point of incidence all lie in the same plane.\n2. **Snell's Law:** The ratio of sine of angle of incidence to the sine of angle of refraction is a constant for a given pair of media and given colour of light.\nsin i / sin r = constant (Refractive Index)"
            },
            {
              heading: "2. Refractive Index",
              text: "The absolute refractive index (n) of a medium is the ratio of the speed of light in vacuum (c) to the speed of light in the medium (v).\n**n = c / v**\n• Light travels fastest in vacuum (3 × 10^8 m/s).\n• The refractive index of glass is ~1.5. This means light travels 1.5 times slower in glass than in vacuum.\n• A medium with a higher refractive index is optically denser."
            },
            {
              heading: "3. Spherical Lenses",
              text: "A transparent material bound by two surfaces, of which at least one is spherical.\n• **Convex Lens:** Thicker at the middle, thinner at edges. Converging lens.\n• **Concave Lens:** Thicker at edges, thinner at middle. Diverging lens.\n\n**Image Formation by Convex Lens:**\nSimilar to concave mirror. Forms real and inverted images mostly. When object is between optical centre and principal focus, it forms an enlarged, virtual, and erect image (used as a magnifying glass).\n\n**Image Formation by Concave Lens:**\nSimilar to convex mirror. Always forms a virtual, erect, and diminished image."
            },
            {
              heading: "4. Lens Formula & Power of Lens",
              text: "**Lens Formula:**\n1/v - 1/u = 1/f\n\n**Magnification (m):**\nm = v/u\n\n**Power of a Lens (P):**\nThe degree of convergence or divergence of light rays achieved by a lens.\n**P = 1 / f (in meters)**\n• SI unit of Power is **Dioptre (D)**.\n• Power of a convex lens is positive.\n• Power of a concave lens is negative.\nExample: A lens of focal length 0.5 m has a power of P = 1/0.5 = +2 D."
            }
          ]
        },
        quiz: [
          {
            question: "When a light ray passes from air into glass, it bends:",
            options: ["Towards the normal", "Away from the normal", "Does not bend", "Reflects back"],
            answer: 0,
            explanation: "When light travels from an optically rarer medium (air) to an optically denser medium (glass), it slows down and bends towards the normal."
          },
          {
            question: "The power of a lens is +2.0 D. Its focal length is:",
            options: ["+2.0 m", "+0.5 m", "-0.5 m", "+50 m"],
            answer: 1,
            explanation: "Power P = 1/f. So f = 1/P = 1/2.0 = 0.5 m (or 50 cm)."
          }
        ]
      }
    ]
  },
{
    id: "10s-10",
    title: "The Human Eye and the Colourful World",
    topics: [
      {
        id: "10s-10-1",
        title: "1. The Human Eye & Defects of Vision",
        lab: { type: "lens" },
        theory: {
          intro: "The human eye is a natural optical instrument that works on refraction of light through a convex lens. We study its structure, vision mechanism, common defects and their correction.",
          sections: [
            {
              heading: "1. Structure of the Human Eye",
              text: "• **Cornea:** Transparent curved front surface. Maximum refraction (~2/3 of total bending).\n• **Iris:** Colored muscular diaphragm. Controls pupil size.\n• **Pupil:** Central opening. Dilates in dim light, constricts in bright light.\n• **Crystalline Lens:** Biconvex, flexible. Fine-focuses light onto retina. Curvature changed by ciliary muscles.\n• **Retina:** Light-sensitive screen. Rods (dim light, no color). Cones (bright light, color — R, G, B).\n• **Optic Nerve:** Carries signals to brain.\n• **Blind Spot:** No photoreceptors. Images here not perceived."
            },
            {
              heading: "2. Accommodation & Defects of Vision",
              text: "**Power of Accommodation:** Eye lens adjusts focal length to focus at different distances.\n• Near Point: 25 cm (D). Far Point: Infinity.\n\n**A. Myopia (Near-sightedness):**\n• Distant objects blurry. Image forms in front of retina.\n• Cause: Eyeball too long OR lens too curved.\n• Correction: Concave lens.\n\n**B. Hypermetropia (Far-sightedness):**\n• Nearby objects blurry. Image forms behind retina.\n• Cause: Eyeball too short OR lens too flat.\n• Correction: Convex lens.\n\n**C. Presbyopia (Old-age sight):**\n• Both near and far vision impaired. Ciliary muscles weaken.\n• Correction: Bifocal lenses."
            }
          ]
        },
        quiz: [
          {
            question: "Myopia is corrected using a:",
            options: ["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"],
            answer: 1,
            explanation: "A concave (diverging) lens corrects myopia by diverging incoming rays so they converge on the retina."
          },
          {
            question: "The least distance of distinct vision for a normal eye is:",
            options: ["10 cm", "15 cm", "25 cm", "50 cm"],
            answer: 2,
            explanation: "The near point for a normal eye is 25 cm."
          }
        ]
      },
      {
        id: "10s-10-2",
        title: "2. Refraction Through Prism & Atmospheric Phenomena",
        lab: { type: "prism-dispersion" },
        theory: {
          intro: "White light is a mixture of seven colours. A prism separates them, and atmospheric phenomena like rainbows, blue sky, and red sunsets are natural demonstrations of optical phenomena.",
          sections: [
            {
              heading: "1. Dispersion of Light",
              text: "White light through a glass prism splits into VIBGYOR spectrum.\n• Violet (shortest wavelength) bends most. Red (longest) bends least.\n• This separation is called dispersion.\n• Newton showed two inverted prisms recombine the spectrum into white light."
            },
            {
              heading: "2. Atmospheric Phenomena",
              text: "**Twinkling of Stars:** Atmospheric refraction through varying air layers causes apparent position/brightness fluctuation. Planets don't twinkle (extended sources).\n\n**Advanced Sunrise/Delayed Sunset:** Atmospheric refraction makes Sun visible ~2 min before actual sunrise and ~2 min after actual sunset."
            },
            {
              heading: "3. Scattering of Light",
              text: "**Rayleigh Scattering:** For particles much smaller than wavelength: Scattering proportional to 1/wavelength^4.\n\n**Blue Sky:** Blue light scattered ~10x more than red by air molecules. Scattered blue reaches eyes from all directions.\n\n**Red Sun at Sunrise/Sunset:** Light travels through maximum atmosphere. Blue scattered away; only red/orange reaches us.\n\n**Tyndall Effect:** Scattering by colloidal particles. Light beam visible in dusty room, fog, milk-water solution."
            }
          ]
        },
        quiz: [
          {
            question: "The splitting of white light into its component colours is called:",
            options: ["Reflection", "Refraction", "Dispersion", "Diffraction"],
            answer: 2,
            explanation: "Dispersion is splitting white light into VIBGYOR when passing through a prism."
          },
          {
            question: "The sky appears blue because:",
            options: ["The sea reflects blue", "Blue light is scattered most by atmospheric particles", "The Sun emits mainly blue light", "Ozone is blue"],
            answer: 1,
            explanation: "Atmospheric gas molecules scatter shorter wavelengths (blue) much more than longer wavelengths (Rayleigh scattering)."
          }
        ]
      }
    ]
  },
{
    id: "10s-11",
    title: "Electricity",
    topics: [
      {
        id: "10s-11-1",
        title: "1. Electric Current, Potential Difference & Ohm's Law",
        lab: { type: "ohms-law" },
        theory: {
          intro: "Electricity powers our modern world. We study electric current, potential difference, resistance, and Ohm's Law.",
          sections: [
            {
              heading: "1. Electric Current & Potential Difference",
              text: "**Electric Current (I):** Rate of flow of charge. I = Q/t. SI unit: Ampere (A). 1A = 1C/s.\nAmmeter: Connected in series.\n\n**Potential Difference (V):** Work done per unit charge. V = W/Q. SI unit: Volt (V). 1V = 1J/C.\nVoltmeter: Connected in parallel."
            },
            {
              heading: "2. Ohm's Law",
              text: "At constant temperature: V = IR.\nV-I graph for ohmic conductor = straight line through origin. Slope = Resistance."
            },
            {
              heading: "3. Resistance & Factors",
              text: "R = rho * l / A\n• R proportional to length (l).\n• R inversely proportional to cross-sectional area (A).\n• rho (resistivity) depends on material.\n\nMetals: Low resistivity. Alloys (Nichrome, Manganin): Higher — used in heating elements."
            },
            {
              heading: "4. Combination of Resistors",
              text: "**Series:** Rs = R1 + R2 + R3. Same current through all. If one fails, circuit breaks.\n**Parallel:** 1/Rp = 1/R1 + 1/R2 + 1/R3. Same voltage across all. If one fails, others work. Used in household wiring."
            }
          ]
        },
        quiz: [
          {
            question: "If resistance is 10 ohm and potential difference is 20 V, the current is:",
            options: ["0.5 A", "2 A", "200 A", "30 A"],
            answer: 1,
            explanation: "I = V/R = 20/10 = 2 A."
          },
          {
            question: "Three resistors of 2, 3, and 6 ohm in parallel give equivalent resistance:",
            options: ["11 ohm", "1 ohm", "0.5 ohm", "6 ohm"],
            answer: 1,
            explanation: "1/Rp = 1/2 + 1/3 + 1/6 = 6/6 = 1. So Rp = 1 ohm."
          }
        ]
      },
      {
        id: "10s-11-2",
        title: "2. Heating Effects of Current & Electric Power",
        lab: { type: "electric-power" },
        theory: {
          intro: "Current through resistance produces heat. This has many practical applications.",
          sections: [
            {
              heading: "1. Joule's Law of Heating",
              text: "H = I^2 * R * t\n\nApplications: Electric heater, iron, toaster (nichrome wire). Electric bulb (tungsten filament). Electric fuse (low melting point alloy — melts on overcurrent).\n\nNichrome: High resistivity, high melting point, doesn't oxidize easily."
            },
            {
              heading: "2. Electric Power & Bills",
              text: "P = VI = I^2R = V^2/R. SI unit: Watt (W).\n\n**Commercial unit:** 1 kWh = 1 Unit = 3.6 x 10^6 J.\n\nExample: 100 W bulb x 10 hr/day x 30 days = 30 kWh = 30 Units. At Rs 5/unit = Rs 150."
            }
          ]
        },
        quiz: [
          {
            question: "The commercial unit of electrical energy is:",
            options: ["Watt", "Joule", "Kilowatt-hour (kWh)", "Ampere-hour"],
            answer: 2,
            explanation: "1 kWh = 1 Unit = 3.6 x 10^6 Joules."
          },
          {
            question: "An electric iron draws 5 A from 220 V. Power consumed is:",
            options: ["44 W", "1100 W", "225 W", "1000 W"],
            answer: 1,
            explanation: "P = VI = 220 x 5 = 1100 W."
          }
        ]
      }
    ]
  },
{
    id: "10s-12",
    title: "Magnetic Effects of Electric Current",
    topics: [
      {
        id: "10s-12-1",
        title: "1. Magnetic Fields, Electromagnets & Force on Conductors",
        lab: { type: "magnetic-field" },
        theory: {
          intro: "Oersted discovered (1820) that current-carrying conductors produce magnetic fields. This led to electric motors, generators, and countless electromagnetic devices.",
          sections: [
            {
              heading: "1. Magnetic Field Lines",
              text: "• Direction: Outside magnet, N to S. Inside, S to N. Lines never cross. Closer lines = stronger field.\n\n**Oersted's Experiment:** Compass needle near current-carrying wire deflects. Reversing current reverses deflection."
            },
            {
              heading: "2. Field Patterns & Electromagnets",
              text: "**Straight Wire:** Concentric circles. Right-Hand Thumb Rule.\n**Circular Loop:** Strong, nearly uniform field at center.\n**Solenoid:** Uniform field inside (like bar magnet). Weak outside. With soft iron core = electromagnet.\n\nElectromagnets: Can be turned on/off, strength adjustable, polarity reversible."
            },
            {
              heading: "3. Force on Current-Carrying Conductor & Electric Motor",
              text: "**Fleming's Left-Hand Rule (Motor Rule):**\n• Forefinger: Field. Middle finger: Current. Thumb: Force/Motion.\n\n**Electric Motor:** Converts electrical to mechanical energy. Coil between magnets. Split ring commutator reverses current every half rotation for continuous rotation."
            }
          ]
        },
        quiz: [
          {
            question: "Fleming's Left-Hand Rule determines direction of:",
            options: ["Induced current", "Magnetic field around wire", "Force on current-carrying conductor in magnetic field", "Potential difference"],
            answer: 2,
            explanation: "Fleming's Left-Hand Rule determines the direction of force on a current-carrying conductor in a magnetic field."
          }
        ]
      },
      {
        id: "10s-12-2",
        title: "2. Electromagnetic Induction & Domestic Circuits",
        lab: { type: "faraday-induction" },
        theory: {
          intro: "Faraday showed in 1831 that changing magnetic fields induce electric current — the principle behind generators that power our civilization.",
          sections: [
            {
              heading: "1. Electromagnetic Induction",
              text: "Current induced when there is relative motion between magnet and conductor.\n\n**Fleming's Right-Hand Rule (Generator Rule):**\n• Forefinger: Field. Thumb: Motion. Middle finger: Induced Current."
            },
            {
              heading: "2. Electric Generator",
              text: "Converts mechanical to electrical energy.\n• AC Generator: Uses slip rings. Produces alternating current. India: 50 Hz.\n• DC Generator: Uses split ring commutator. Produces direct current.\n\nAC advantage: Easily stepped up/down using transformers for efficient transmission."
            },
            {
              heading: "3. Domestic Electric Circuits",
              text: "**Three Wires:**\n• Live (Red): High potential ~220V.\n• Neutral (Black): ~0V.\n• Earth (Green): Safety wire to ground.\n\nAll appliances in parallel (full 220V, independent operation). Main fuse/MCB protects. Separate circuits for lighting (5A) and heavy appliances (15A).\n\n**Hazards:** Short circuit (live touches neutral — excessive current). Overloading (too many appliances). Earthing protects against metal body touching live wire."
            }
          ]
        },
        quiz: [
          {
            question: "The frequency of AC supply in India is:",
            options: ["25 Hz", "50 Hz", "60 Hz", "100 Hz"],
            answer: 1,
            explanation: "Standard AC frequency in India is 50 Hz (100 direction changes per second)."
          },
          {
            question: "The earth wire is connected to:",
            options: ["Live wire inside appliance", "Metallic body/casing of appliance", "Neutral wire at meter", "Fuse box only"],
            answer: 1,
            explanation: "Earth wire connects to the metallic body, providing a safe path for current to ground if live wire accidentally touches."
          }
        ]
      }
    ]
  },
{
    id: "10s-13",
    title: "Our Environment",
    topics: [
      {
        id: "10s-13-1",
        title: "1. Ecosystems, Food Chains & Environmental Issues",
        lab: { type: "food-web" },
        theory: {
          intro: "We are part of the environment. Understanding ecosystems and environmental challenges is crucial for sustainable living.",
          sections: [
            {
              heading: "1. Ecosystem Components",
              text: "**Abiotic:** Temperature, rainfall, wind, soil, minerals, light, water.\n**Biotic:**\n• Producers (Autotrophs): Green plants — make food via photosynthesis.\n• Consumers: Primary (herbivores), Secondary (carnivores), Tertiary (top carnivores).\n• Decomposers: Bacteria and fungi — break down dead organisms, recycle nutrients."
            },
            {
              heading: "2. Food Chains, Food Webs & 10% Law",
              text: "**Food Chain:** Linear sequence of energy transfer.\nExample: Grass -> Grasshopper -> Frog -> Snake -> Hawk\n\n**10% Law (Lindeman):** Only 10% of energy at one trophic level transfers to the next. 90% used in life processes or lost as heat.\n\nExample: Producers 10,000 J -> Primary 1,000 J -> Secondary 100 J -> Tertiary 10 J.\n\n**Biological Magnification:** Non-biodegradable chemicals (DDT, mercury) accumulate and concentrate at higher trophic levels. Top predators get highest toxic doses."
            },
            {
              heading: "3. Ozone Layer Depletion",
              text: "**Ozone (O3):** In stratosphere. Absorbs harmful UV radiation.\n\n**CFCs** (from refrigerators, ACs, aerosols) release chlorine atoms that destroy ozone in chain reactions. Each Cl atom destroys ~100,000 O3 molecules.\n\n**Montreal Protocol (1987):** International agreement to phase out CFCs. Ozone layer slowly recovering."
            },
            {
              heading: "4. Waste Management",
              text: "**Biodegradable:** Can be decomposed by bacteria/fungi. (Food waste, paper, cotton, cattle dung). Disposal: Composting, biogas.\n\n**Non-Biodegradable:** Cannot be decomposed. Persist for decades/centuries. (Plastics, polythene, glass, pesticides). Cause soil/water pollution, biomagnification.\n\n**The 3 Rs:** Reduce (use less), Reuse (use again), Recycle (process into new products)."
            }
          ]
        },
        quiz: [
          {
            question: "According to the 10% law, if producers have 10,000 J, energy available to secondary consumers is:",
            options: ["1,000 J", "100 J", "10 J", "1 J"],
            answer: 1,
            explanation: "10% of 10,000 = 1,000 J to primary consumers. 10% of 1,000 = 100 J to secondary consumers."
          },
          {
            question: "Which causes ozone layer depletion?",
            options: ["Carbon dioxide", "Sulphur dioxide", "Chlorofluorocarbons (CFCs)", "Nitrogen oxide"],
            answer: 2,
            explanation: "CFCs release chlorine atoms in the stratosphere that catalytically destroy ozone molecules."
          },
          {
            question: "Which is biodegradable?",
            options: ["DDT", "Polythene bag", "Cattle dung", "Aluminium can"],
            answer: 2,
            explanation: "Cattle dung is biodegradable — decomposed by bacteria/fungi into simpler substances."
          }
        ]
      }
    ]
  }
        ]
        },
        mathematics: { name: "Mathematics", icon: "📐", chapters: [

  // CHAPTER 1: REAL NUMBERS
  {
    id: "10m-1",
    title: "Real Numbers",
    topics: [
      {
        id: "10m-1-1",
        title: "1. The Fundamental Theorem of Arithmetic",
        lab: { type: "prime-factor" },
        theory: {
          intro: "Real numbers consist of rational and irrational numbers. In this chapter, we explore the properties of positive integers, specifically focusing on the Fundamental Theorem of Arithmetic and its applications.",
          sections: [
            {
              heading: "1. The Fundamental Theorem of Arithmetic",
              text: "Every composite number can be expressed (factorised) as a product of primes, and this factorisation is **unique**, apart from the order in which the prime factors occur.\n\nFor example:\n210 = 2 × 3 × 5 × 7\nNo matter how we factorise 210, we will always end up with these exact prime numbers. We usually write them in ascending order: 2 × 3 × 5 × 7.\n\nWhen prime factors repeat, we use exponents:\n32760 = 2 × 2 × 2 × 3 × 3 × 5 × 7 × 13 = 2³ × 3² × 5 × 7 × 13."
            },
            {
              heading: "2. HCF and LCM using Prime Factorisation",
              text: "The Fundamental Theorem allows us to easily find the Highest Common Factor (HCF) and Least Common Multiple (LCM) of two or more numbers.\n\n**HCF:** Product of the smallest power of each common prime factor in the numbers.\n**LCM:** Product of the greatest power of each prime factor involved in the numbers.\n\nExample: Find HCF and LCM of 6 and 20.\n• 6 = 2¹ × 3¹\n• 20 = 2² × 5¹\n**HCF(6, 20)** = 2¹ = 2 (Smallest power of common factor 2)\n**LCM(6, 20)** = 2² × 3¹ × 5¹ = 4 × 3 × 5 = 60 (Greatest power of all prime factors)\n\n**Important Property:**\nFor any two positive integers a and b:\n**HCF(a, b) × LCM(a, b) = a × b**\n(Note: This property is true ONLY for two numbers, not for three or more.)"
            }
          ]
        },
        quiz: [
          {
            question: "The HCF of 96 and 404 is 4. What is their LCM?",
            options: ["9696", "9090", "9494", "4040"],
            answer: 0,
            explanation: "Using the formula HCF × LCM = a × b:\n4 × LCM = 96 × 404\nLCM = (96 × 404) / 4 = 96 × 101 = 9696."
          },
          {
            question: "According to the Fundamental Theorem of Arithmetic, every composite number can be uniquely expressed as a product of:",
            options: ["Odd numbers", "Even numbers", "Prime numbers", "Rational numbers"],
            answer: 2,
            explanation: "Every composite number can be expressed uniquely as a product of prime numbers, apart from their order."
          },
          {
            question: "Can 6ⁿ end with the digit 0, for any natural number n?",
            options: ["Yes, when n is even", "Yes, when n is a multiple of 5", "No, never", "Yes, for all n"],
            answer: 2,
            explanation: "6ⁿ = 2ⁿ × 3ⁿ. For a number to end in 0, its prime factorisation must include both 2 and 5. Since 6ⁿ's only prime factors are 2 and 3 (never 5), it can never end in 0."
          },
          {
            question: "Sonia takes 18 minutes and Ravi takes 12 minutes to drive one round of a circular track, starting together from the same point. After how many minutes will they next meet at the starting point?",
            options: ["30 minutes", "36 minutes", "6 minutes", "216 minutes"],
            answer: 1,
            explanation: "They meet again at the starting point after a time equal to the LCM of 18 and 12. 18 = 2×3², 12 = 2²×3, so LCM = 2²×3² = 36 minutes."
          },
          {
            question: "Find the HCF and LCM of 6, 72 and 120 using prime factorisation (6 = 2×3, 72 = 2³×3², 120 = 2³×3×5).",
            options: ["HCF = 6, LCM = 360", "HCF = 12, LCM = 180", "HCF = 6, LCM = 720", "HCF = 2, LCM = 360"],
            answer: 0,
            explanation: "HCF uses the smallest power of each common factor: 2¹×3¹ = 6. LCM uses the greatest power of every prime involved: 2³×3²×5¹ = 360."
          }
        ]
      },
      {
        id: "10m-1-2",
        title: "2. Revisiting Irrational Numbers",
        lab: { type: "prime-factor" },
        theory: {
          intro: "An irrational number cannot be written in the form p/q, where p and q are integers and q ≠ 0. We will rigorously prove the irrationality of numbers like √2, √3, and √5 using a method called 'proof by contradiction'.",
          sections: [
            {
              heading: "1. A Crucial Theorem",
              text: "Before proving irrationality, we need this theorem:\n**Theorem:** Let *p* be a prime number. If *p* divides *a²*, then *p* divides *a*, where *a* is a positive integer.\n\nExample: 3 is prime. 3 divides 81 (which is 9²). Therefore, 3 must also divide 9."
            },
            {
              heading: "2. Proof by Contradiction: √2 is Irrational",
              text: "**Step 1: Assume the opposite.** Let us assume √2 is rational.\nThen, √2 = a/b, where a and b are integers, b ≠ 0, and a, b are coprime (no common factors other than 1).\n\n**Step 2: Rearrange and square.**\nb√2 = a\nSquaring both sides:\n2b² = a²  --- (Equation 1)\n\n**Step 3: Apply the theorem.**\nSince 2b² = a², this means 2 divides a². By our theorem, 2 must also divide a.\nSo, we can write a = 2c for some integer c.\n\n**Step 4: Substitute back.**\nSubstitute a = 2c into Equation 1:\n2b² = (2c)²\n2b² = 4c²\nb² = 2c²\nThis means 2 divides b², so 2 must also divide b.\n\n**Step 5: The Contradiction.**\nWe found that 2 divides both a and b. This contradicts our initial assumption that a and b are coprime! \nSince our assumption led to a contradiction, the assumption that √2 is rational must be false.\nTherefore, √2 is irrational."
            },
            {
              heading: "3. Operations with Irrational Numbers",
              text: "• The sum or difference of a rational and an irrational number is irrational (e.g., 2 + √3 is irrational).\n• The product and quotient of a non-zero rational and an irrational number is irrational (e.g., 3√2 and 5/√7 are irrational)."
            }
          ]
        },
        quiz: [
          {
            question: "Which of the following is true if a prime number 'p' divides 'a²'?",
            options: ["p divides a", "a divides p", "p = a", "p divides a³ but not a"],
            answer: 0,
            explanation: "According to the fundamental theorem, if a prime p divides a², it must also divide a."
          },
          {
            question: "Is the number 5 - √3 rational or irrational?",
            options: ["Rational", "Irrational", "Integer", "Whole number"],
            answer: 1,
            explanation: "The difference between a rational number (5) and an irrational number (√3) is always irrational."
          },
          {
            question: "Is 1/√2 rational or irrational?",
            options: ["Rational", "Irrational", "It's an integer", "Cannot be determined"],
            answer: 1,
            explanation: "If 1/√2 were rational, then its reciprocal √2 would also be rational (the reciprocal of a rational number is rational). But √2 is irrational, so 1/√2 must be irrational too."
          },
          {
            question: "Is 3 + 2√5 rational or irrational?",
            options: ["Rational", "Irrational", "A whole number", "Cannot be determined"],
            answer: 1,
            explanation: "If 3 + 2√5 were rational, then (that value - 3)/2 = √5 would also be rational, contradicting the proven irrationality of √5. So 3 + 2√5 is irrational."
          }
        ]
      }
    ]
  },

  // CHAPTER 2: POLYNOMIALS
  {
    id: "10m-2",
    title: "Polynomials",
    topics: [
      {
        id: "10m-2-1",
        title: "1. Geometrical Meaning of Zeroes",
        lab: { type: "polynomial-graph" },
        theory: {
          intro: "In Class IX, you learned about polynomials in one variable and their degrees. A polynomial p(x) of degree n has at most n zeroes. In this section, we will see what the zeroes of a polynomial mean geometrically.",
          sections: [
            {
              heading: "1. What is a Zero of a Polynomial?",
              text: "A real number 'k' is a zero of a polynomial p(x) if p(k) = 0.\nFor a linear polynomial ax + b, the zero is x = -b/a."
            },
            {
              heading: "2. Geometrical Meaning",
              text: "Geometrically, the zeroes of a polynomial p(x) are precisely the **x-coordinates of the points where the graph of y = p(x) intersects the x-axis**.\n\n**A. Linear Polynomial (Degree 1): y = ax + b**\nThe graph is a straight line. It intersects the x-axis at exactly one point: (-b/a, 0). Thus, a linear polynomial has exactly 1 zero.\n\n**B. Quadratic Polynomial (Degree 2): y = ax² + bx + c**\nThe graph is a U-shaped curve called a **parabola**.\n• Opens upwards (∪) if a > 0.\n• Opens downwards (∩) if a < 0.\nThe parabola can intersect the x-axis at:\n• Two distinct points (2 zeroes).\n• Exactly one point / touches the axis (1 zero / two equal zeroes).\n• No points (0 real zeroes).\nThus, a quadratic polynomial has **at most 2 zeroes**.\n\n**C. Cubic Polynomial (Degree 3): y = ax³ + bx² + cx + d**\nThe graph can intersect the x-axis at 1, 2, or 3 points. Thus, a cubic polynomial has **at most 3 zeroes**.\n\n**General Rule:** A polynomial of degree n has at most n zeroes."
            }
          ]
        },
        quiz: [
          {
            question: "Geometrically, the zeroes of a polynomial p(x) correspond to:",
            options: [
              "The y-intercepts of the graph y = p(x)",
              "The x-coordinates of the points where the graph intersects the x-axis",
              "The maximum points of the graph",
              "The origin"
            ],
            answer: 1,
            explanation: "At the x-axis, y = 0. Therefore, the x-coordinates where the graph y=p(x) crosses the x-axis are the values of x for which p(x) = 0 (the zeroes)."
          },
          {
            question: "What is the maximum number of zeroes a polynomial of degree 4 can have?",
            options: ["1", "2", "3", "4"],
            answer: 3,
            explanation: "A polynomial of degree n can have at most n zeroes. So, a degree 4 polynomial has at most 4 zeroes."
          },
          {
            question: "The graph of y = p(x) touches the x-axis at exactly one point (without crossing it). How many zeroes does p(x) have?",
            options: ["Zero zeroes", "One zero (two equal zeroes)", "Two distinct zeroes", "Cannot be determined"],
            answer: 1,
            explanation: "When a parabola just touches the x-axis at one point, that point represents one zero, which is actually a repeated (double) zero of the quadratic."
          },
          {
            question: "If the graph of y = p(x) does not intersect the x-axis at all, what can you conclude?",
            options: ["p(x) has exactly 1 zero", "p(x) has exactly 2 zeroes", "p(x) has no real zeroes", "p(x) is not a valid polynomial"],
            answer: 2,
            explanation: "If the parabola lies entirely above or entirely below the x-axis, it never crosses y = 0, so the polynomial has no real zeroes."
          }
        ]
      },
      {
        id: "10m-2-2",
        title: "2. Relationship between Zeroes and Coefficients",
        lab: { type: "polynomial-graph" },
        theory: {
          intro: "Is there a relationship between the zeroes of a polynomial and its coefficients? Yes, and it allows us to analyze polynomials without graphing them.",
          sections: [
            {
              heading: "1. For a Quadratic Polynomial",
              text: "Let α (alpha) and β (beta) be the two zeroes of the quadratic polynomial:\np(x) = ax² + bx + c, where a ≠ 0.\n\nThere is a direct relationship between the zeroes and the coefficients a, b, c:\n\n**1. Sum of Zeroes:**\nα + β = -b / a = -(Coefficient of x) / (Coefficient of x²)\n\n**2. Product of Zeroes:**\nαβ = c / a = (Constant term) / (Coefficient of x²)\n\n**Example:** Find the zeroes of x² + 7x + 10 and verify the relationship.\nFactorising by splitting the middle term: \nx² + 5x + 2x + 10 = x(x+5) + 2(x+5) = (x+2)(x+5).\nZeroes are α = -2 and β = -5.\nSum = -2 + (-5) = -7. Formula: -b/a = -7/1 = -7. (Verified!)\nProduct = (-2) × (-5) = 10. Formula: c/a = 10/1 = 10. (Verified!)"
            },
            {
              heading: "2. Forming a Polynomial from Zeroes",
              text: "If you are given the sum (S) and product (P) of the zeroes, you can form the quadratic polynomial as:\n**p(x) = k[x² - (Sum of zeroes)x + (Product of zeroes)]**\nwhere k is any non-zero real constant.\np(x) = k[x² - Sx + P]"
            },
            {
              heading: "3. Zeroes and Coefficients of a Cubic Polynomial",
              text: "A similar (though richer) relationship holds for a cubic polynomial p(x) = ax³ + bx² + cx + d, with zeroes α, β and γ (gamma):\n\n**Sum of zeroes:** α + β + γ = -b/a\n**Sum of products of zeroes taken two at a time:** αβ + βγ + αγ = c/a\n**Product of zeroes:** αβγ = -d/a\n\n**Example:** For p(x) = 2x³ - 5x² - 14x + 8, the zeroes are 4, -2 and 1/2.\n• Sum = 4 + (-2) + 1/2 = 5/2. Formula: -b/a = -(-5)/2 = 5/2 ✓\n• Sum of products two at a time = (4)(-2) + (-2)(1/2) + (4)(1/2) = -8 - 1 + 2 = -7. Formula: c/a = -14/2 = -7 ✓\n• Product = 4 × (-2) × 1/2 = -4. Formula: -d/a = -8/2 = -4 ✓"
            }
          ]
        },
        quiz: [
          {
            question: "For the polynomial p(x) = 2x² - 8x + 6, what is the sum of its zeroes?",
            options: ["4", "-4", "3", "-3"],
            answer: 0,
            explanation: "Sum of zeroes = -b/a = -(-8)/2 = 8/2 = 4."
          },
          {
            question: "Find a quadratic polynomial, the sum and product of whose zeroes are -3 and 2, respectively.",
            options: ["x² - 3x + 2", "x² + 3x + 2", "x² - 3x - 2", "x² + 2x - 3"],
            answer: 1,
            explanation: "The polynomial is k(x² - (Sum)x + Product). Here Sum = -3, Product = 2. So, x² - (-3)x + 2 = x² + 3x + 2."
          },
          {
            question: "Find the zeroes of x² - 2x - 8 and verify the sum/product relationship.",
            options: ["Zeroes are 4 and -2; sum = 2 = -b/a", "Zeroes are 2 and -4; sum = -2", "Zeroes are 4 and 2; sum = 6", "Zeroes are -4 and -2; sum = -6"],
            answer: 0,
            explanation: "x² - 2x - 8 = (x-4)(x+2), so zeroes are 4 and -2. Sum = 2 = -(-2)/1 = -b/a. Product = -8 = -8/1 = c/a. Both check out."
          },
          {
            question: "For the cubic polynomial p(x) = ax³ + bx² + cx + d with zeroes α, β, γ, what does αβ + βγ + αγ equal?",
            options: ["-b/a", "c/a", "-d/a", "b/a"],
            answer: 1,
            explanation: "The sum of the products of the zeroes taken two at a time equals c/a (the ratio of the coefficient of x to the coefficient of x³)."
          },
          {
            question: "A cubic polynomial 2x³ - 5x² - 14x + 8 has zeroes 4, -2 and 1/2. What is the product of its zeroes, and does it match -d/a?",
            options: ["-4, matching -d/a = -8/2 = -4", "4, matching d/a", "-8, matching -d", "8, matching d/a"],
            answer: 0,
            explanation: "Product = 4 × (-2) × (1/2) = -4. Using the formula -d/a = -(8)/2 = -4 — they match."
          }
        ]
      }
    ]
  },

  // CHAPTER 3: PAIR OF LINEAR EQUATIONS IN TWO VARIABLES
  {
    id: "10m-3",
    title: "Pair of Linear Equations in Two Variables",
    topics: [
      {
        id: "10m-3-1",
        title: "1. Graphical Method of Solution",
        lab: { type: "linear-equations" },
        theory: {
          intro: "An equation of the form ax + by + c = 0 (where a, b ≠ 0) is a linear equation in two variables. A pair of such equations forms a system. In this section, we study how to solve them graphically.",
          sections: [
            {
              heading: "1. Graphical Representation",
              text: "The graph of a linear equation in two variables is a straight line. Therefore, a pair of linear equations will be represented by two straight lines on a graph.\n\nGiven two equations:\n1) a₁x + b₁y + c₁ = 0\n2) a₂x + b₂y + c₂ = 0\n\nThere are only three possibilities for these two lines in a plane:\n1. **Intersecting Lines:** They intersect at exactly one point. This point is the **unique solution** to the system. The system is **consistent**.\n2. **Parallel Lines:** They never intersect. The system has **no solution**. The system is **inconsistent**.\n3. **Coincident Lines:** The two lines lie exactly on top of each other. The system has **infinitely many solutions**. The system is **dependent and consistent**."
            },
            {
              heading: "2. Comparing Ratios (Algebraic Check)",
              text: "We can predict the nature of the lines and solutions just by comparing the ratios of their coefficients (a₁/a₂, b₁/b₂, c₁/c₂):\n\n**1. Intersecting Lines (Unique Solution):**\nIf **a₁/a₂ ≠ b₁/b₂**\n\n**2. Coincident Lines (Infinitely Many Solutions):**\nIf **a₁/a₂ = b₁/b₂ = c₁/c₂**\n\n**3. Parallel Lines (No Solution):**\nIf **a₁/a₂ = b₁/b₂ ≠ c₁/c₂**\n\nExample: \nx - 2y = 0\n3x + 4y - 20 = 0\na₁/a₂ = 1/3, b₁/b₂ = -2/4 = -1/2. Since 1/3 ≠ -1/2, the lines intersect at one point."
            }
          ]
        },
        quiz: [
          {
            question: "The pair of equations 5x - 4y + 8 = 0 and 7x + 6y - 9 = 0 represent lines which are:",
            options: ["Parallel", "Coincident", "Intersecting at exactly one point", "None of these"],
            answer: 2,
            explanation: "a₁/a₂ = 5/7 and b₁/b₂ = -4/6 = -2/3. Since 5/7 ≠ -2/3, the lines intersect at exactly one point."
          },
          {
            question: "A pair of linear equations is inconsistent if:",
            options: ["It has a unique solution", "It has no solution", "It has infinitely many solutions", "a₁/a₂ ≠ b₁/b₂"],
            answer: 1,
            explanation: "An inconsistent system is one that has no solutions (the lines are parallel)."
          },
          {
            question: "For the pair 6x - 3y + 10 = 0 and 2x - y + 9 = 0, what do the ratios tell us?",
            options: ["Intersecting lines, unique solution", "Coincident lines, infinite solutions", "Parallel lines, no solution", "Cannot be determined"],
            answer: 2,
            explanation: "a₁/a₂ = 6/2 = 3, b₁/b₂ = -3/-1 = 3, c₁/c₂ = 10/9 ≈ 1.11. Since a₁/a₂ = b₁/b₂ but ≠ c₁/c₂, the lines are parallel — no solution."
          },
          {
            question: "10 students took part in a quiz. If the number of girls is 4 more than the number of boys, and there are 10 students total, how many boys and girls took part?",
            options: ["3 boys, 7 girls", "4 boys, 6 girls", "5 boys, 5 girls", "6 boys, 4 girls"],
            answer: 0,
            explanation: "Let boys = x, girls = y. x + y = 10 and y = x + 4. Substituting: x + (x+4) = 10, so 2x = 6, x = 3. Then y = 7."
          }
        ]
      },
      {
        id: "10m-3-2",
        title: "2. Algebraic Methods: Substitution & Elimination",
        lab: { type: "linear-equations" },
        theory: {
          intro: "Graphical methods can be imprecise if the coordinates are non-integers (like 1.33, 4.67). Algebraic methods provide exact answers. We will cover Substitution and Elimination methods.",
          sections: [
            {
              heading: "1. Substitution Method",
              text: "In this method, we express one variable in terms of the other from one equation and substitute it into the second equation.\n\n**Steps:**\n1. Pick one equation and solve it for one variable (say, y) in terms of the other (x).\n2. Substitute this expression for y into the *other* equation. This gives a linear equation in one variable (x).\n3. Solve the new equation to find the value of x.\n4. Substitute the value of x back into the expression from Step 1 to find y.\n\n**Example:** \n1) 7x - 15y = 2\n2) x + 2y = 3\n\nFrom (2), x = 3 - 2y.\nSubstitute in (1): 7(3 - 2y) - 15y = 2\n21 - 14y - 15y = 2 → 21 - 29y = 2 → 29y = 19 → y = 19/29.\nThen x = 3 - 2(19/29) = (87 - 38)/29 = 49/29."
            },
            {
              heading: "2. Elimination Method",
              text: "This method involves eliminating one variable by making its coefficients equal in both equations and then adding or subtracting the equations.\n\n**Steps:**\n1. Multiply one or both equations by suitable non-zero constants to make the coefficients of one variable (either x or y) numerically equal.\n2. Add or subtract the new equations to eliminate that variable.\n3. Solve the resulting equation for the remaining variable.\n4. Substitute this value into any of the original equations to find the value of the eliminated variable.\n\n**Example:**\n1) 3x + 4y = 10\n2) 2x - 2y = 2\n\nMultiply (2) by 2 to make y's coefficients equal:\n1) 3x + 4y = 10\n2*) 4x - 4y = 4\nAdd the equations: (3x+4x) + (4y-4y) = 10+4 → 7x = 14 → x = 2.\nSubstitute x=2 in (1): 3(2) + 4y = 10 → 6 + 4y = 10 → 4y = 4 → y = 1."
            }
          ]
        },
        quiz: [
          {
            question: "Using elimination method to solve: x + y = 5 and 2x - 3y = 4, what is the value of x?",
            options: ["19/5", "6/5", "5", "3"],
            answer: 0,
            explanation: "Multiply first equation by 3: 3x + 3y = 15. Add to second equation: 2x - 3y = 4. Result: 5x = 19 -> x = 19/5."
          },
          {
            question: "The ratio of incomes of two people is 9:7 and the ratio of their expenditures is 4:3. If each saves ₹2000/month, find their monthly incomes using the elimination method.",
            options: ["₹18,000 and ₹14,000", "₹9,000 and ₹7,000", "₹20,000 and ₹15,000", "₹16,000 and ₹12,000"],
            answer: 0,
            explanation: "Let incomes be 9x and 7x, expenditures 4y and 3y. Then 9x-4y=2000 and 7x-3y=2000. Multiplying to equalise y's coefficients and subtracting gives x=2000, so incomes are 9(2000)=₹18,000 and 7(2000)=₹14,000."
          },
          {
            question: "The sum of a two-digit number and the number obtained by reversing its digits is 66. The digits differ by 2. Using the elimination method, which numbers satisfy this?",
            options: ["42 or 24", "51 or 15", "60 or 6", "33 or 33"],
            answer: 0,
            explanation: "Let the digits be x (tens) and y (units): (10x+y)+(10y+x)=66 gives x+y=6. With x-y=2 (or y-x=2), elimination gives x=4,y=2 (number 42) or x=2,y=4 (number 24)."
          },
          {
            question: "When solving 2x + 3y = 8 and 4x + 6y = 7 by elimination, what happens?",
            options: ["Unique solution x=1, y=2", "You get 0 = 9, a false statement — no solution", "Infinitely many solutions", "You get 0 = 0"],
            answer: 1,
            explanation: "Multiplying the first equation by 2 gives 4x+6y=16. Subtracting the second equation (4x+6y=7) gives 0=9, which is false — so the pair of equations has no solution (the lines are parallel)."
          }
        ]
      }
    ]
  },

  // CHAPTER 4: QUADRATIC EQUATIONS
  {
    id: "10m-4",
    title: "Quadratic Equations",
    topics: [
      {
        id: "10m-4-1",
        title: "1. Solving by Factorisation & Quadratic Formula",
        lab: { type: "polynomial-graph" },
        theory: {
          intro: "A quadratic equation in the variable x is an equation of the form ax² + bx + c = 0, where a, b, c are real numbers, a ≠ 0. It is widely used in physics, engineering, and geometry.",
          sections: [
            {
              heading: "1. Solving by Factorisation",
              text: "If we can factorise the quadratic polynomial ax² + bx + c into a product of two linear factors, then the roots of the quadratic equation can be found by equating each factor to zero.\n\n**Method of Splitting the Middle Term:**\nTo solve ax² + bx + c = 0, we split the middle term 'bx' into two terms whose sum is 'b' and whose product is 'ac'.\n\n**Example:** Solve 2x² - 5x + 3 = 0\nWe need two numbers that sum to -5 and multiply to (2×3) = 6. The numbers are -2 and -3.\n2x² - 2x - 3x + 3 = 0\n2x(x - 1) - 3(x - 1) = 0\n(2x - 3)(x - 1) = 0\nSo, 2x - 3 = 0 or x - 1 = 0.\nRoots are x = 3/2 and x = 1."
            },
            {
              heading: "2. The Quadratic Formula",
              text: "Not all quadratic equations can be easily factorised. The quadratic formula provides a direct way to find the roots of ANY quadratic equation ax² + bx + c = 0.\n\n**Formula:**\nx = [ -b ± √(b² - 4ac) ] / 2a\n\nThe symbol '±' (plus or minus) indicates that there are two solutions: one using + and one using -.\n\nThe term inside the square root, **b² - 4ac**, is called the **Discriminant (D)**. It determines the nature of the roots."
            }
          ]
        },
        quiz: [
          {
            question: "The roots of the equation x² - 3x - 10 = 0 are:",
            options: ["5, -2", "-5, 2", "5, 2", "-5, -2"],
            answer: 0,
            explanation: "x² - 3x - 10 = 0 -> x² - 5x + 2x - 10 = 0 -> x(x-5) + 2(x-5) = 0 -> (x+2)(x-5) = 0. So x = -2 and x = 5."
          },
          {
            question: "In the quadratic formula, what is the expression (b² - 4ac) called?",
            options: ["Denominator", "Discriminant", "Determinant", "Difference"],
            answer: 1,
            explanation: "It is called the Discriminant because it discriminates (distinguishes) the nature of the roots."
          },
          {
            question: "Find two numbers whose sum is 27 and product is 182.",
            options: ["13 and 14", "12 and 15", "10 and 17", "11 and 16"],
            answer: 0,
            explanation: "If one number is x, the other is 27-x, and x(27-x)=182 gives x²-27x+182=0. Discriminant = 729-728=1, so x=(27±1)/2 = 14 or 13."
          },
          {
            question: "A rectangular hall has a carpet area of 300 m², with its length one metre more than twice its breadth. Using the quadratic formula on 2x² + x - 300 = 0, find the breadth.",
            options: ["12 m", "25 m", "-12.5 m", "15 m"],
            answer: 0,
            explanation: "x = [-1 ± √(1+2400)]/4 = [-1 ± 49]/4, giving x = 12 or x = -12.5. Since breadth can't be negative, breadth = 12 m (and length = 2(12)+1 = 25 m)."
          }
        ]
      },
      {
        id: "10m-4-2",
        title: "2. Nature of Roots",
        lab: { type: "polynomial-graph" },
        theory: {
          intro: "The discriminant (D = b² - 4ac) tells us exactly what kind of roots a quadratic equation will have, without even solving it.",
          sections: [
            {
              heading: "Nature of Roots based on Discriminant",
              text: "For the quadratic equation ax² + bx + c = 0, the discriminant is **D = b² - 4ac**.\n\nThere are three cases:\n\n**1. D > 0 (Positive): Two distinct real roots.**\nThe roots are real and different. The parabola intersects the x-axis at two distinct points.\nRoots = [ -b + √D ] / 2a AND [ -b - √D ] / 2a\n\n**2. D = 0 (Zero): Two equal real roots (or one repeated root).**\nThe roots are real and exactly the same. The parabola just touches the x-axis at one point.\nRoots = -b / 2a and -b / 2a.\n\n**3. D < 0 (Negative): No real roots.**\nThe square root of a negative number is not a real number. The roots are imaginary/complex. The parabola does not touch or intersect the x-axis at all."
            },
            {
              heading: "Example",
              text: "Find the discriminant of 2x² - 4x + 3 = 0 and find the nature of its roots.\nHere a=2, b=-4, c=3.\nD = b² - 4ac\nD = (-4)² - 4(2)(3)\nD = 16 - 24 = -8.\nSince D < 0, the given equation has **no real roots**."
            }
          ]
        },
        quiz: [
          {
            question: "If a quadratic equation has two equal real roots, then its discriminant is:",
            options: ["Greater than 0", "Less than 0", "Equal to 0", "1"],
            answer: 2,
            explanation: "When D = 0, the ±√D part becomes 0, leaving only one unique value: -b/2a. Thus the equation has two equal real roots."
          },
          {
            question: "A rectangular mango grove has length twice its breadth, and its area must be 800 m². Is this possible?",
            options: ["Yes — breadth = 20 m, length = 40 m", "No — the discriminant is negative", "Yes, but only with negative dimensions", "No, area equations are never quadratic"],
            answer: 0,
            explanation: "Let breadth = x, length = 2x. Then 2x² = 800, so x² = 400, x = 20 (rejecting -20 since breadth can't be negative). So breadth = 20 m, length = 40 m — this is possible."
          },
          {
            question: "Two friends' ages sum to 20 years. Four years ago, the product of their ages was 48. Is this situation possible?",
            options: ["Yes, they are 12 and 8 years old", "Yes, they are 10 and 10 years old", "No — the discriminant is negative, so no real ages satisfy this", "Yes, they are 16 and 4 years old"],
            answer: 2,
            explanation: "Let ages be x and (20-x). Four years ago: (x-4)(16-x) = 48 leads to x² - 20x + 112 = 0. Discriminant = 400 - 448 = -48 < 0. Since there are no real roots, this situation is impossible."
          },
          {
            question: "Find the discriminant of 3x² - 4√3x + 4 = 0 and describe the nature of its roots.",
            options: ["D = 0; two equal real roots", "D > 0; two distinct real roots", "D < 0; no real roots", "D = 48; two distinct roots"],
            answer: 0,
            explanation: "D = (4√3)² - 4(3)(4) = 48 - 48 = 0. Since D = 0, the equation has two equal real roots, both equal to -b/2a = 4√3/6 = 2√3/3 ≈ 1.15."
          }
        ]
      }
    ]
  },

  // CHAPTER 5: ARITHMETIC PROGRESSIONS
  {
    id: "10m-5",
    title: "Arithmetic Progressions",
    topics: [
      {
        id: "10m-5-1",
        title: "1. nth Term of an AP",
        lab: { type: "ap-visualizer" },
        theory: {
          intro: "Patterns are everywhere in nature and math. An Arithmetic Progression (AP) is a specific type of number pattern where the gap between consecutive terms is always the same.",
          sections: [
            {
              heading: "1. What is an Arithmetic Progression?",
              text: "An arithmetic progression is a list of numbers in which each term is obtained by adding a fixed number to the preceding term (except the first term).\n\nThis fixed number is called the **common difference (d)** of the AP. Remember, 'd' can be positive, negative, or zero.\n\nGeneral form of an AP:\n**a, a+d, a+2d, a+3d, ...**\nWhere 'a' is the first term, and 'd' is the common difference."
            },
            {
              heading: "2. The nth Term of an AP",
              text: "If you want to find the 100th term of an AP, you don't need to write out all 100 terms. We have a formula for the nth term (an):\n\n**an = a + (n - 1)d**\n\nWhere:\n• an = the nth term\n• a = the first term\n• n = the position of the term (e.g., 100)\n• d = the common difference\n\n**Example:** Find the 10th term of the AP: 2, 7, 12, ...\nHere, a = 2. d = 7 - 2 = 5. n = 10.\na₁₀ = 2 + (10 - 1)5 = 2 + 9(5) = 2 + 45 = 47."
            }
          ]
        },
        quiz: [
          {
            question: "What is the 30th term of the AP: 10, 7, 4, ...?",
            options: ["97", "-77", "-87", "87"],
            answer: 1,
            explanation: "Here a = 10, d = 7 - 10 = -3. \na₃₀ = a + 29d = 10 + 29(-3) = 10 - 87 = -77."
          },
          {
            question: "Which term of the AP 21, 18, 15, ... is -81? Is 0 ever a term of this AP?",
            options: ["35th term is -81; yes, the 8th term is 0", "34th term is -81; no, 0 is never a term", "35th term is -81; no, 0 is never a term", "36th term is -81; yes, the 7th term is 0"],
            answer: 0,
            explanation: "a=21, d=-3. Solving -81 = 21+(n-1)(-3) gives n=35. Solving 0 = 21+(n-1)(-3) gives n=8 — a valid positive integer, so yes, the 8th term is 0."
          },
          {
            question: "The cost of digging a well is ₹150 for the first metre and rises by ₹50 for each subsequent metre. Does this form an AP?",
            options: ["Yes, with a=150 and d=50", "No, the costs don't increase uniformly", "Yes, but only for the first 5 metres", "No, this is a geometric progression"],
            answer: 0,
            explanation: "Each metre's cost is a fixed amount (₹50) more than the previous one's, so the costs 150, 200, 250, 300, ... form an AP with first term 150 and common difference 50."
          }
        ]
      },
      {
        id: "10m-5-2",
        title: "2. Sum of First n Terms of an AP",
        lab: { type: "ap-visualizer" },
        theory: {
          intro: "Legend has it that a young Carl Friedrich Gauss was asked by his teacher to add all numbers from 1 to 100, hoping to keep him busy. Gauss did it in seconds using the principle of the sum of an AP!",
          sections: [
            {
              heading: "1. Formula for the Sum of an AP",
              text: "The sum of the first n terms of an AP (denoted as Sn) is given by:\n\n**Sn = (n/2) × [2a + (n - 1)d]**\n\nWhere:\n• Sn = Sum of n terms\n• n = number of terms\n• a = first term\n• d = common difference\n\nThere is a second, very useful form of this formula if you already know the last term (l = an):\n**Sn = (n/2) × (a + l)**"
            },
            {
              heading: "2. Example Calculation",
              text: "Find the sum of the first 22 terms of the AP: 8, 3, -2, ...\nHere, a = 8, d = 3 - 8 = -5, n = 22.\n\nSn = (n/2) × [2a + (n - 1)d]\nS₂₂ = (22/2) × [2(8) + (22 - 1)(-5)]\nS₂₂ = 11 × [16 + 21(-5)]\nS₂₂ = 11 × [16 - 105]\nS₂₂ = 11 × (-89) = -979.\n\n**Relationship between nth term and Sum:**\nThe nth term can also be found if we know the sums:\n**an = Sn - S(n-1)**"
            }
          ]
        },
        quiz: [
          {
            question: "What is the sum of the first 100 positive integers (1 + 2 + 3 + ... + 100)?",
            options: ["5000", "5050", "1000", "5500"],
            answer: 1,
            explanation: "Here a = 1, l = 100, n = 100. Sn = (n/2)(a + l) = (100/2)(1 + 100) = 50 × 101 = 5050."
          },
          {
            question: "If the sum of the first 14 terms of an AP is 1050 and its first term is 10, find the 20th term.",
            options: ["200", "150", "190", "210"],
            answer: 0,
            explanation: "S₁₄ = (14/2)[2(10)+13d] = 1050 gives 7(20+13d)=1050, so 20+13d=150, d=10. Then a₂₀ = 10 + 19(10) = 200."
          },
          {
            question: "Shakila put ₹100 in her daughter's money box on her 1st birthday and increased it by ₹50 each year. How much money will be in the box by the 21st birthday?",
            options: ["₹12,600", "₹10,500", "₹2,100", "₹21,000"],
            answer: 0,
            explanation: "This is the sum of an AP with a=100, d=50, n=21. S₂₁ = (21/2)[2(100)+20(50)] = (21/2)(1200) = 12,600."
          }
        ]
      }
    ]
  },

  // CHAPTER 6: TRIANGLES
  {
    id: "10m-6",
    title: "Triangles",
    topics: [
      {
        id: "10m-6-1",
        title: "1. Similarity of Triangles & BPT",
        lab: { type: "triangle-similarity" },
        theory: {
          intro: "In Class IX, we studied congruent triangles (same shape and same size). In this chapter, we study similar triangles (same shape, but not necessarily the same size). This has applications in measuring heights of mountains and distances to stars.",
          sections: [
            {
              heading: "1. Similar Figures",
              text: "Two polygons of the same number of sides are similar if:\n1. Their corresponding angles are equal, AND\n2. Their corresponding sides are in the same ratio (or proportion).\n\nAll circles are similar. All squares are similar. All equilateral triangles are similar."
            },
            {
              heading: "2. Basic Proportionality Theorem (Thales Theorem)",
              text: "**Theorem (BPT):** If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.\n\nIn ΔABC, if line DE is parallel to BC (with D on AB and E on AC), then:\n**AD / DB = AE / EC**\n\n**Converse of BPT:** If a line divides any two sides of a triangle in the same ratio, then the line is parallel to the third side."
            }
          ]
        },
        quiz: [
          {
            question: "If all corresponding angles of two polygons are equal, are they necessarily similar?",
            options: ["Yes, always", "No, their corresponding sides must also be proportional", "Only for triangles", "Only for squares"],
            answer: 1,
            explanation: "For polygons with more than 3 sides, equal angles are not enough (e.g., a square and a rectangle have equal angles, but are not similar). Both conditions must be met."
          },
          {
            question: "E and F are points on sides PQ and PR of ΔPQR, with PE=4 cm, QE=4.5 cm, PF=8 cm, RF=9 cm. Is EF parallel to QR?",
            options: ["Yes, since PE/QE = PF/RF = 8/9", "No, the ratios are unequal", "Cannot be determined", "Only if PQR is equilateral"],
            answer: 0,
            explanation: "PE/QE = 4/4.5 = 8/9, and PF/RF = 8/9. Since the ratios are equal, by the converse of the Basic Proportionality Theorem, EF is parallel to QR."
          },
          {
            question: "A line is drawn through the midpoint of one side of a triangle, parallel to another side. What happens to the third side?",
            options: ["It gets trisected", "It gets bisected (cut into two equal halves)", "Nothing — the line doesn't reach the third side", "It becomes perpendicular to the line"],
            answer: 1,
            explanation: "By the Basic Proportionality Theorem, since the line is parallel to one side and passes through the midpoint of another, it must divide the third side in the ratio 1:1 — i.e., it bisects it."
          }
        ]
      },
      {
        id: "10m-6-2",
        title: "2. Criteria for Similarity of Triangles",
        lab: { type: "triangle-similarity" },
        theory: {
          intro: "Just like congruence criteria (SSS, SAS, ASA), there are specific criteria to prove that two triangles are similar without checking all angles and sides.",
          sections: [
            {
              heading: "1. AAA (Angle-Angle-Angle) Similarity Criterion",
              text: "If in two triangles, corresponding angles are equal, then their corresponding sides are in the same ratio and hence the two triangles are similar.\n*Note:* If two angles of one triangle are equal to two angles of another, the third angles must be equal (angle sum property). This leads to the simpler **AA Similarity Criterion**."
            },
            {
              heading: "2. SSS (Side-Side-Side) Similarity Criterion",
              text: "If in two triangles, sides of one triangle are proportional to the sides of the other triangle, then their corresponding angles are equal and hence the two triangles are similar."
            },
            {
              heading: "3. SAS (Side-Angle-Side) Similarity Criterion",
              text: "If one angle of a triangle is equal to one angle of the other triangle and the sides including these angles are proportional, then the two triangles are similar."
            }
          ]
        },
        quiz: [
          {
            question: "Which of these is one of the three MAIN criteria taught for proving similarity of triangles?",
            options: ["ASA", "AA", "RHS", "SSA"],
            answer: 1,
            explanation: "The three main similarity criteria are AA, SSS, and SAS. RHS is primarily a congruence criterion — the textbook only mentions an 'RHS similarity criterion' as a bonus note for right triangles, not as one of the core criteria."
          },
          {
            question: "If two angles of one triangle are respectively equal to two angles of another triangle, what can you conclude about the third angles, and about the triangles?",
            options: ["The third angles may differ; triangles are unrelated", "The third angles must also be equal (angle sum property), so the triangles are similar by AA", "The triangles are congruent, not just similar", "Nothing can be concluded"],
            answer: 1,
            explanation: "By the angle sum property, if two pairs of angles match, the third pair must match too (180° - the other two). This gives the AA similarity criterion, which is really just a simplified way of stating AAA."
          },
          {
            question: "In two triangles, if corresponding sides are proportional (say all in ratio 2:3), what can you conclude?",
            options: ["The triangles are congruent", "The triangles are similar by the SSS similarity criterion", "The triangles are neither similar nor congruent", "Only one pair of angles is equal"],
            answer: 1,
            explanation: "The SSS similarity criterion states that if the corresponding sides of two triangles are all in the same ratio, then their corresponding angles are equal and the triangles are similar."
          }
        ]
      }
    ]
  },

  // CHAPTER 7: COORDINATE GEOMETRY
  {
    id: "10m-7",
    title: "Coordinate Geometry",
    topics: [
      {
        id: "10m-7-1",
        title: "1. Distance Formula & Section Formula",
        lab: { type: "coordinate-geo" },
        theory: {
          intro: "Coordinate geometry bridges algebra and geometry. It allows us to represent geometric figures using numbers and equations on a Cartesian plane.",
          sections: [
            {
              heading: "1. The Distance Formula",
              text: "How do we find the distance between two points P(x₁, y₁) and Q(x₂, y₂) on a graph? We use the Distance Formula, which is derived directly from Pythagoras' Theorem.\n\n**d = √[ (x₂ - x₁)² + (y₂ - y₁)² ]**\n\nThe distance of a point P(x, y) from the origin O(0,0) is given by:\n**d = √(x² + y²)**"
            },
            {
              heading: "2. The Section Formula",
              text: "Suppose point P(x, y) divides the line segment joining the points A(x₁, y₁) and B(x₂, y₂) internally in the ratio m₁ : m₂. The coordinates of P are given by the Section Formula:\n\n**x = (m₁x₂ + m₂x₁) / (m₁ + m₂)**\n**y = (m₁y₂ + m₂y₁) / (m₁ + m₂)**\n\n**Midpoint Formula:**\nIf P is the exact midpoint, the ratio is 1:1. The formula simplifies to:\nx = (x₁ + x₂) / 2\ny = (y₁ + y₂) / 2"
            }
          ]
        },
        quiz: [
          {
            question: "The distance of the point P(2, 3) from the x-axis is:",
            options: ["2", "3", "1", "5"],
            answer: 1,
            explanation: "The distance of any point (x, y) from the x-axis is its y-coordinate. Hence, the distance is 3."
          },
          {
            question: "Find the coordinates of the midpoint of the line segment joining (4, -2) and (8, 6).",
            options: ["(2, 4)", "(6, 2)", "(12, 4)", "(4, 8)"],
            answer: 1,
            explanation: "x = (4 + 8)/2 = 6. y = (-2 + 6)/2 = 2. So the midpoint is (6, 2)."
          },
          {
            question: "Do the points P(3,2), Q(-2,-3) and R(2,3) form a triangle? If so, what type?",
            options: ["Yes, a right triangle (right angle at P)", "No, they are collinear", "Yes, an equilateral triangle", "Yes, but not a right triangle"],
            answer: 0,
            explanation: "PQ = √50 ≈ 7.07, QR = √52 ≈ 7.21, PR = √2 ≈ 1.41. Since PQ² + PR² = 50 + 2 = 52 = QR², by the converse of Pythagoras theorem, the angle at P is 90° — a right triangle."
          },
          {
            question: "Find the coordinates of the point which divides the line segment joining (4, -3) and (8, 5) internally in the ratio 3:1.",
            options: ["(7, 3)", "(6, 1)", "(5, -1)", "(8, 5)"],
            answer: 0,
            explanation: "Using the section formula: x = [3(8)+1(4)]/(3+1) = 28/4 = 7. y = [3(5)+1(-3)]/(3+1) = 12/4 = 3. So the point is (7, 3)."
          },
          {
            question: "Find a point on the y-axis which is equidistant from A(6, 5) and B(-4, 3).",
            options: ["(0, 9)", "(0, 4)", "(0, 5)", "(0, -9)"],
            answer: 0,
            explanation: "A point on the y-axis is (0,y). Setting distance to A equal to distance to B: 36+25+y²-10y = 16+9+y²-6y, which simplifies to 4y=36, so y=9. The point is (0, 9)."
          }
        ]
      }
    ]
  }
,

  // CHAPTER 8: INTRODUCTION TO TRIGONOMETRY
  {
    id: "10m-8",
    title: "Introduction to Trigonometry",
    topics: [
      {
        id: "10m-8-1",
        title: "1. Trigonometric Ratios",
        lab: { type: "trig-ratios" },
        theory: {
          intro: "The word 'trigonometry' comes from Greek words meaning 'measuring the sides of a triangle'. It is the study of relationships between the sides and angles of a right-angled triangle.",
          sections: [
            {
              heading: "1. The Trigonometric Ratios",
              text: "For a right-angled triangle ABC (right-angled at B), with reference to angle A (let's call it θ), the sides are:\n• **Hypotenuse (AC):** Longest side, opposite the right angle.\n• **Side opposite to angle A (BC):** Perpendicular.\n• **Side adjacent to angle A (AB):** Base.\n\nThe six trigonometric ratios are:\n1. **sine (sin A)** = Opposite / Hypotenuse = BC / AC\n2. **cosine (cos A)** = Adjacent / Hypotenuse = AB / AC\n3. **tangent (tan A)** = Opposite / Adjacent = BC / AB\n\nThe reciprocals are:\n4. **cosecant (cosec A)** = 1 / sin A = Hypotenuse / Opposite\n5. **secant (sec A)** = 1 / cos A = Hypotenuse / Adjacent\n6. **cotangent (cot A)** = 1 / tan A = Adjacent / Opposite\n\n**Important Relation:**\ntan A = sin A / cos A\ncot A = cos A / sin A"
            },
            {
              heading: "2. Trigonometric Ratios of Some Specific Angles",
              text: "The values of trig ratios for standard angles (0°, 30°, 45°, 60°, 90°) are frequently used.\n\n**For 30° and 60°:**\n• sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3\n• sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3\n\n**For 45°:**\n• sin 45° = 1/√2, cos 45° = 1/√2, tan 45° = 1\n\n**For 0° and 90°:**\n• sin 0° = 0, cos 0° = 1, tan 0° = 0\n• sin 90° = 1, cos 90° = 0, tan 90° = Not defined"
            }
          ]
        },
        quiz: [
          {
            question: "In a right triangle, if sin A = 3/5, what is cos A?",
            options: ["4/5", "5/3", "3/4", "5/4"],
            answer: 0,
            explanation: "Opposite = 3, Hypotenuse = 5. Using Pythagoras theorem, Adjacent² = 5² - 3² = 16 -> Adjacent = 4. So cos A = Adjacent/Hypotenuse = 4/5."
          },
          {
            question: "What is the value of tan 45°?",
            options: ["0", "1/2", "1", "Not defined"],
            answer: 2,
            explanation: "tan 45° = sin 45° / cos 45° = (1/√2) / (1/√2) = 1."
          },
          {
            question: "What is the value of 2tan30° / (1 + tan²30°)?",
            options: ["sin 60°", "cos 60°", "tan 60°", "sin 30°"],
            answer: 0,
            explanation: "tan30° = 1/√3. Substituting: 2(1/√3)/(1+1/3) = (2/√3)/(4/3) = 6/(4√3) = √3/2, which equals sin 60°."
          },
          {
            question: "sin 2A = 2 sin A is true when A equals:",
            options: ["0°", "30°", "45°", "60°"],
            answer: 0,
            explanation: "Testing each: at A=0°, sin(0°)=0=2sin(0°) — true. At A=30°, sin60°≈0.866 but 2sin30°=1 — not equal. So only A=0° satisfies the equation."
          }
        ]
      },
      {
        id: "10m-8-2",
        title: "2. Trigonometric Identities",
        lab: { type: "trig-ratios" },
        theory: {
          intro: "An equation involving trigonometric ratios of an angle is called a trigonometric identity if it is true for all values of the angle(s) involved.",
          sections: [
            {
              heading: "Fundamental Trigonometric Identities",
              text: "The most important identities, derived from the Pythagoras theorem, are:\n\n1. **sin² A + cos² A = 1**\n   (Valid for 0° ≤ A ≤ 90°)\n\n2. **1 + tan² A = sec² A**\n   (Valid for 0° ≤ A < 90°. Not defined at 90° because tan 90° and sec 90° are not defined)\n\n3. **1 + cot² A = cosec² A**\n   (Valid for 0° < A ≤ 90°. Not defined at 0° because cot 0° and cosec 0° are not defined)\n\nThese identities can be rearranged. For example, sin² A = 1 - cos² A, or sec² A - tan² A = 1."
            }
          ]
        },
        quiz: [
          {
            question: "What is the value of 9 sec² A - 9 tan² A?",
            options: ["1", "9", "8", "0"],
            answer: 1,
            explanation: "9 sec² A - 9 tan² A = 9(sec² A - tan² A). Since 1 + tan² A = sec² A, we have sec² A - tan² A = 1. So 9(1) = 9."
          },
          {
            question: "If tan A = 1/√3, what is the value of cos A (using the identity sec²A = 1 + tan²A)?",
            options: ["√3/2", "1/2", "1/√3", "2/√3"],
            answer: 0,
            explanation: "sec²A = 1 + 1/3 = 4/3, so sec A = 2/√3, giving cos A = √3/2."
          },
          {
            question: "How can cos A be expressed purely in terms of sin A?",
            options: ["cos A = √(1 - sin²A)", "cos A = 1 - sin A", "cos A = sin A - 1", "cos A = 1/sin A"],
            answer: 0,
            explanation: "From the identity sin²A + cos²A = 1, we get cos²A = 1 - sin²A, so cos A = √(1 - sin²A)."
          }
        ]
      }
    ]
  },

  // CHAPTER 9: SOME APPLICATIONS OF TRIGONOMETRY
  {
    id: "10m-9",
    title: "Some Applications of Trigonometry",
    topics: [
      {
        id: "10m-9-1",
        title: "1. Heights and Distances",
        lab: { type: "heights-distances" },
        theory: {
          intro: "Trigonometry was invented to calculate distances to stars and planets. Today, it is used in geography, navigation, and engineering. We can find the height of a building or a tree without actually measuring it.",
          sections: [
            {
              heading: "1. Line of Sight",
              text: "The line of sight is the line drawn from the eye of an observer to the point in the object viewed by the observer."
            },
            {
              heading: "2. Angle of Elevation",
              text: "The angle of elevation of the point viewed is the angle formed by the line of sight with the horizontal when the point being viewed is **above** the horizontal level (i.e., when we raise our head to look at the object)."
            },
            {
              heading: "3. Angle of Depression",
              text: "The angle of depression of a point on the object being viewed is the angle formed by the line of sight with the horizontal when the point is **below** the horizontal level (i.e., when we lower our head to look at the object)."
            },
            {
              heading: "4. Method for Solving Height & Distance Problems",
              text: "To find an unknown height or distance:\n1. **Draw a simple diagram** representing the problem — mark the known angle(s), known length(s), and label the unknown side.\n2. **Identify the right triangle** formed by the line of sight, the horizontal, and the vertical object.\n3. **Choose the correct trigonometric ratio** — the one that relates the side you know to the side you want to find (usually tan or cot, since most problems involve the side opposite and the side adjacent to the angle).\n4. **Solve the equation** for the unknown.\n5. If the observer's own height is given, remember to **add it** to the height found above eye-level to get the total height (as with the chimney example).\n\n**Worked Example:** A tower stands on level ground. From a point 15 m from its foot, the angle of elevation of the top is 60°. Find the height.\n• tan 60° = height/15\n• √3 = height/15\n• height = 15√3 ≈ 25.98 m"
            }
          ]
        },
        quiz: [
          {
            question: "An observer 1.5m tall is 28.5m away from a chimney. The angle of elevation of the top of the chimney from her eyes is 45°. What is the height of the chimney?",
            options: ["30 m", "28.5 m", "31.5 m", "15 m"],
            answer: 0,
            explanation: "tan 45° = height_above_eye / 28.5 -> 1 = height_above_eye / 28.5 -> height_above_eye = 28.5m. Total height = 28.5 + observer height(1.5) = 30m."
          },
          {
            question: "A circus artist climbs a 20 m long rope, tightly stretched from the top of a vertical pole to the ground, making an angle of 30° with the ground. Find the height of the pole.",
            options: ["10 m", "20 m", "10√3 m", "5 m"],
            answer: 0,
            explanation: "sin 30° = height/20, so height = 20 × sin 30° = 20 × 0.5 = 10 m."
          },
          {
            question: "The angle of elevation of the top of a tower from a point 30 m away from its foot is 30°. Find the height of the tower.",
            options: ["30 m", "30√3 m", "10√3 m", "15 m"],
            answer: 2,
            explanation: "tan 30° = height/30, so height = 30 × tan 30° = 30/√3 = 10√3 ≈ 17.32 m."
          },
          {
            question: "A kite is flying at a height of 60 m. The string, with no slack, makes a 60° angle with the ground. Find the length of the string.",
            options: ["60 m", "40√3 m", "30√3 m", "120 m"],
            answer: 1,
            explanation: "sin 60° = 60/string length, so length = 60/sin 60° = 60 ÷ (√3/2) = 120/√3 = 40√3 ≈ 69.28 m."
          },
          {
            question: "The shadow of a tower is 40 m longer when the sun's altitude is 30° than when it is 60°. What is the height of the tower?",
            options: ["20 m", "40 m", "20√3 m", "40√3 m"],
            answer: 2,
            explanation: "If h is the height and x the shorter shadow, tan 60° = h/x gives h = x√3. tan 30° = h/(x+40) gives x√3·√3 = x + 40, so 3x = x + 40, x = 20. Then h = 20√3 m."
          }
        ]
      }
    ]
  },

  // CHAPTER 10: CIRCLES
  {
    id: "10m-10",
    title: "Circles",
    topics: [
      {
        id: "10m-10-1",
        title: "1. Tangents to a Circle",
        lab: { type: "tangent-circle" },
        theory: {
          intro: "In earlier classes, you studied circles and terms like chord, segment, and arc. We will now study the line that touches a circle at just one point: the tangent.",
          sections: [
            {
              heading: "1. Tangent and Point of Contact",
              text: "A **tangent** to a circle is a line that intersects the circle at only one point. The common point of the tangent and the circle is called the **point of contact**.\n• There is only one tangent at a point of the circle.\n• The tangent to a circle is a special case of the secant, when the two end points of its corresponding chord coincide."
            },
            {
              heading: "2. Theorem 10.1: Tangent is perpendicular to Radius",
              text: "**Theorem:** The tangent at any point of a circle is perpendicular to the radius through the point of contact.\nThis means if line XY is tangent to the circle at point P, and OP is the radius, then OP ⊥ XY."
            },
            {
              heading: "3. Number of Tangents from a Point",
              text: "• **Case 1:** Point inside the circle -> 0 tangents.\n• **Case 2:** Point on the circle -> 1 tangent.\n• **Case 3:** Point outside the circle -> Exactly 2 tangents can be drawn.\n\n**Theorem 10.2:** The lengths of tangents drawn from an external point to a circle are equal. (If tangents from point P touch the circle at A and B, then PA = PB)."
            }
          ]
        },
        quiz: [
          {
            question: "How many parallel tangents can a circle have at the most?",
            options: ["1", "2", "3", "Infinite"],
            answer: 1,
            explanation: "A circle can have at most two parallel tangents (they touch the circle at opposite ends of a diameter)."
          },
          {
            question: "A tangent PQ at a point P of a circle of radius 5 cm meets a line through the centre O at a point Q so that OQ = 12 cm. Length PQ is:",
            options: ["12 cm", "13 cm", "8.5 cm", "√119 cm"],
            answer: 3,
            explanation: "Since OP ⊥ PQ, ΔOPQ is a right triangle at P. PQ² = OQ² - OP² = 12² - 5² = 144 - 25 = 119. So PQ = √119 cm."
          },
          {
            question: "From a point Q, the length of the tangent to a circle is 24 cm and the distance of Q from the centre is 25 cm. The radius of the circle is:",
            options: ["7 cm", "12 cm", "15 cm", "24.5 cm"],
            answer: 0,
            explanation: "The tangent is perpendicular to the radius at the point of contact, so radius² = 25² - 24² = 625 - 576 = 49. Radius = 7 cm."
          },
          {
            question: "TP and TQ are tangents to a circle with centre O, and ∠POQ = 110°. What is ∠PTQ?",
            options: ["60°", "70°", "80°", "90°"],
            answer: 1,
            explanation: "OPTQ has right angles at P and Q (radius ⊥ tangent), and its angles sum to 360°. So ∠PTQ = 360° - 90° - 90° - 110° = 70°."
          },
          {
            question: "Tangents PA and PB from a point P to a circle with centre O are inclined to each other at an angle of 80°. What is ∠POA?",
            options: ["40°", "50°", "60°", "80°"],
            answer: 1,
            explanation: "OP bisects ∠APB, so ∠OPA = 40°. In right triangle OPA (right angle at A), ∠POA = 90° - 40° = 50°."
          },
          {
            question: "The length of a tangent from a point A, at a distance of 5 cm from the centre of a circle, is 4 cm. What is the radius of the circle?",
            options: ["1 cm", "3 cm", "4 cm", "9 cm"],
            answer: 1,
            explanation: "radius² = 5² - 4² = 25 - 16 = 9, so radius = 3 cm."
          }
        ]
      }
    ]
  },

  // CHAPTER 11: AREAS RELATED TO CIRCLES
  {
    id: "10m-11",
    title: "Areas Related to Circles",
    topics: [
      {
        id: "10m-11-1",
        title: "1. Areas of Sector and Segment",
        lab: { type: "sector-segment" },
        theory: {
          intro: "You know the formula for the area of a circle (πr²). What if you only want the area of a slice of the circle (like a pizza slice)? This is called a sector.",
          sections: [
            {
              heading: "1. Sector of a Circle",
              text: "A **sector** is the region enclosed by two radii and the corresponding arc. A pizza slice is a minor sector.\n\n**Area of a Sector:**\nIf the angle of the sector at the centre is θ (in degrees) and the radius is r:\n**Area of Sector = (θ/360) × πr²**\n\n**Length of an Arc:**\nThe length of the arc bounding the sector is a fraction of the total circumference (2πr):\n**Length of Arc = (θ/360) × 2πr**"
            },
            {
              heading: "2. Segment of a Circle",
              text: "A **segment** is the region bounded by a chord and the corresponding arc.\n\n**Area of a Segment:**\nTo find the area of a minor segment, you find the area of the corresponding sector, and subtract the area of the triangle formed by the radii and the chord.\n**Area of Segment = Area of the corresponding Sector - Area of the corresponding Triangle**"
            }
          ]
        },
        quiz: [
          {
            question: "What is the area of a sector of a circle with radius 6 cm if angle of the sector is 60°?",
            options: ["36π cm²", "6π cm²", "12π cm²", "18π cm²"],
            answer: 1,
            explanation: "Area = (60/360) × π × (6)² = (1/6) × 36π = 6π cm²."
          },
          {
            question: "Find the area of a quadrant of a circle whose circumference is 22 cm. (Use π = 22/7)",
            options: ["9.625 cm²", "38.5 cm²", "19.25 cm²", "4.8 cm²"],
            answer: 0,
            explanation: "2πr = 22 gives r = 3.5 cm. A quadrant is a sector of angle 90°, so area = (90/360) × (22/7) × 3.5² = (1/4) × 38.5 = 9.625 cm²."
          },
          {
            question: "The minute hand of a clock is 14 cm long. What area does it sweep in 5 minutes? (Use π = 22/7)",
            options: ["25.67 cm²", "51.33 cm²", "102.67 cm²", "14 cm²"],
            answer: 1,
            explanation: "In 5 minutes the minute hand turns through (5/60) × 360° = 30°. Area = (30/360) × (22/7) × 14² = (1/12) × 616 = 51.33 cm²."
          },
          {
            question: "A chord of a circle of radius 10 cm subtends a right angle (90°) at the centre. Find the area of the minor segment. (Use π = 3.14)",
            options: ["28.5 cm²", "50 cm²", "78.5 cm²", "21.5 cm²"],
            answer: 0,
            explanation: "Area of sector (90°) = (90/360) × 3.14 × 100 = 78.5 cm². Area of the right-angled triangle = (1/2) × 10 × 10 = 50 cm². Minor segment = 78.5 - 50 = 28.5 cm²."
          },
          {
            question: "OAPB is the minor sector of a circle with centre O and angle ∠AOB. What is the angle of the corresponding major sector OAQB?",
            options: ["∠AOB", "180° - ∠AOB", "360° - ∠AOB", "90° - ∠AOB"],
            answer: 2,
            explanation: "The minor and major sectors together make the full circle (360°), so the major sector's angle is 360° - ∠AOB."
          }
        ]
      }
    ]
  },

  // CHAPTER 12: SURFACE AREAS AND VOLUMES
  {
    id: "10m-12",
    title: "Surface Areas and Volumes",
    topics: [
      {
        id: "10m-12-1",
        title: "1. Combinations of Solids",
        lab: { type: "solid-combination" },
        theory: {
          intro: "In daily life, we often see objects that are combinations of two or more basic shapes, like a test tube (cylinder + hemisphere) or a circus tent (cylinder + cone).",
          sections: [
            {
              heading: "1. Surface Area of a Combination of Solids",
              text: "To find the total surface area of a combined solid, we add the **Curved Surface Areas (CSA)** of the visible parts. We DO NOT add their total surface areas, because the parts where they are joined are hidden inside the solid.\n\nExample: A capsule is a cylinder with two hemispheres stuck to each of its ends. \nTotal Surface Area of capsule = CSA of left hemisphere + CSA of cylinder + CSA of right hemisphere."
            },
            {
              heading: "2. Volume of a Combination of Solids",
              text: "Unlike surface area, the volume of a solid formed by combining basic solids is simply the **sum of the volumes of the individual basic solids**.\n\nExample: Volume of the capsule = Volume of cylinder + 2 × Volume of hemisphere."
            }
          ]
        },
        quiz: [
          {
            question: "A solid is in the shape of a cone standing on a hemisphere with both their radii being equal to 1 cm and the height of the cone is equal to its radius. What is the volume of the solid in terms of π?",
            options: ["π cm³", "2π cm³", "3π cm³", "π/3 cm³"],
            answer: 0,
            explanation: "Volume = Volume of cone + Volume of hemisphere = (1/3)πr²h + (2/3)πr³. Since r=1 and h=1, Volume = (1/3)π(1)²(1) + (2/3)π(1)³ = π/3 + 2π/3 = 3π/3 = π cm³."
          },
          {
            question: "2 cubes, each of volume 64 cm³, are joined end to end. What is the surface area of the resulting cuboid?",
            options: ["160 cm²", "192 cm²", "128 cm²", "256 cm²"],
            answer: 0,
            explanation: "Each cube has edge = ∛64 = 4 cm. Joining two 4×4×4 cubes end to end gives an 8×4×4 cuboid. Surface area = 2(lb + bh + hl) = 2(8×4 + 4×4 + 4×8) = 2(32+16+32) = 160 cm²."
          },
          {
            question: "A toy is a cone of radius 3.5 cm mounted on a hemisphere of the same radius. The total height of the toy is 15.5 cm. What is its total surface area? (Use π = 22/7)",
            options: ["214.5 cm²", "137.5 cm²", "77 cm²", "192.5 cm²"],
            answer: 0,
            explanation: "Cone height = 15.5 - 3.5 = 12 cm, so slant height l = √(3.5² + 12²) = √156.25 = 12.5 cm. CSA of cone = πrl = (22/7)×3.5×12.5 = 137.5 cm². CSA of hemisphere = 2πr² = 77 cm². Total = 137.5 + 77 = 214.5 cm²."
          },
          {
            question: "True or False: The total surface area of a solid formed by joining two basic solids (like a cone on a hemisphere) is the sum of their individual total surface areas.",
            options: ["True", "False — you add only the curved surfaces that remain visible", "True, only for cones and cylinders", "False — you must subtract both flat faces"],
            answer: 1,
            explanation: "Where the two solids are joined, their flat faces disappear inside the combined solid. So we add only the curved surface areas (and any other faces still exposed), never the full individual total surface areas."
          }
        ]
      }
    ]
  },

  // CHAPTER 13: STATISTICS
  {
    id: "10m-13",
    title: "Statistics",
    topics: [
      {
        id: "10m-13-1",
        title: "1. Mean, Mode and Median of Grouped Data",
        lab: { type: "statistics-histogram" },
        theory: {
          intro: "We have learned to calculate the central tendencies (Mean, Mode, Median) for ungrouped raw data. Now we learn to calculate them for large, grouped frequency distributions.",
          sections: [
            {
              heading: "1. Mean of Grouped Data",
              text: "There are three methods:\n1. **Direct Method:** x̄ = Σfᵢxᵢ / Σfᵢ (where xᵢ is the class mark or midpoint of the class interval).\n2. **Assumed Mean Method:** x̄ = a + (Σfᵢdᵢ / Σfᵢ), where a is the assumed mean and dᵢ = xᵢ - a.\n3. **Step-deviation Method:** x̄ = a + (Σfᵢuᵢ / Σfᵢ) × h, where uᵢ = (xᵢ - a)/h, and h is the class size."
            },
            {
              heading: "2. Mode of Grouped Data",
              text: "Mode is the value inside the modal class (the class with the highest frequency). \nFormula:\n**Mode = l + [ (f₁ - f₀) / (2f₁ - f₀ - f₂) ] × h**\nWhere:\n• l = lower limit of the modal class\n• h = size of the class interval\n• f₁ = frequency of the modal class\n• f₀ = frequency of the class preceding the modal class\n• f₂ = frequency of the class succeeding the modal class."
            },
            {
              heading: "3. Cumulative Frequency",
              text: "The **cumulative frequency** of a class is the frequency obtained by adding the frequencies of all the classes preceding (or, for the 'more than' type, following) that class.\n\n**Less than type:** upper limits of the classes are listed, and the cumulative frequency shows how many observations lie below each upper limit.\n**More than type:** lower limits of the classes are listed, and the cumulative frequency shows how many observations are at or above each lower limit.\n\nThis running total is essential for locating the **median class** — the class whose cumulative frequency first becomes greater than (and nearest to) n/2."
            },
            {
              heading: "4. Median of Grouped Data",
              text: "To find the median, we first find the cumulative frequencies and locate the median class (the class whose cumulative frequency is greater than and nearest to n/2).\nFormula:\n**Median = l + [ (n/2 - cf) / f ] × h**\nWhere:\n• l = lower limit of median class\n• n = number of observations\n• cf = cumulative frequency of class preceding the median class\n• f = frequency of median class\n• h = class size"
            }
          ]
        },
        quiz: [
          {
            question: "The empirical relationship between the three measures of central tendency is:",
            options: [
              "3 Median = Mode + 2 Mean",
              "2 Median = Mode + 3 Mean",
              "Mode = 3 Median - 2 Mean",
              "Both A and C"
            ],
            answer: 3,
            explanation: "The empirical formula is 3 Median = Mode + 2 Mean. This can be rearranged as Mode = 3 Median - 2 Mean. So both A and C are correct."
          },
          {
            question: "In the assumed mean method, x̄ = a + (Σfᵢdᵢ/Σfᵢ), what does dᵢ represent?",
            options: ["The class frequency", "xᵢ - a, the deviation of each class mark from the assumed mean", "The class size h", "xᵢ/a"],
            answer: 1,
            explanation: "dᵢ is defined as dᵢ = xᵢ - a, the deviation of each class mark xᵢ from the assumed mean a."
          },
          {
            question: "A family-size survey gives modal class 3-5 with f₁ = 8, f₀ = 7, f₂ = 2, and class size h = 2. What is the mode?",
            options: ["3.286", "4.0", "3.5", "5.0"],
            answer: 0,
            explanation: "Mode = l + [(f₁-f₀)/(2f₁-f₀-f₂)] × h = 3 + [(8-7)/(16-7-2)] × 2 = 3 + (1/7)×2 = 3.286."
          },
          {
            question: "The step-deviation method for finding the mean is most convenient to apply when:",
            options: ["The frequencies are all equal", "All the deviations dᵢ share a common factor", "There is only one class interval", "The mean is already known"],
            answer: 1,
            explanation: "The step-deviation method divides each deviation dᵢ by a common class-size factor h to get smaller numbers uᵢ = (xᵢ-a)/h — this is only a simplification when the dᵢ's share that common factor."
          },
          {
            question: "For 51 girls' heights, the median class is 145-150 with l=145, cf=11, f=18, h=5, and n/2=25.5. What is the median height?",
            options: ["149.03 cm", "145 cm", "150 cm", "147.5 cm"],
            answer: 0,
            explanation: "Median = l + [(n/2 - cf)/f] × h = 145 + [(25.5-11)/18] × 5 = 145 + 4.03 = 149.03 cm."
          }
        ]
      }
    ]
  },

  // CHAPTER 14: PROBABILITY
  {
    id: "10m-14",
    title: "Probability",
    topics: [
      {
        id: "10m-14-1",
        title: "1. Theoretical Probability",
        lab: { type: "probability-sim" },
        theory: {
          intro: "Probability is the measure of uncertainty. The theoretical probability of an event attempts to predict its chance of occurring based on logic, without conducting an actual experiment.",
          sections: [
            {
              heading: "1. Theoretical Probability Formula",
              text: "The theoretical probability P(E) of an event E, written as P(E), is defined as:\n\n**P(E) = (Number of outcomes favourable to E) / (Number of all possible outcomes of the experiment)**\n\nThis assumes all outcomes are equally likely (e.g., a fair coin, an unbiased die)."
            },
            {
              heading: "2. Important Properties of Probability",
              text: "• For any event E, **0 ≤ P(E) ≤ 1**. Probability can never be negative or greater than 1.\n• An event having only one outcome of the experiment is called an elementary event. The sum of the probabilities of all the elementary events of an experiment is 1.\n• **Impossible Event:** An event that cannot happen has a probability of 0.\n• **Sure/Certain Event:** An event that is certain to happen has a probability of 1.\n• **Complementary Events:** The probability of an event NOT happening, denoted by P(not E) or P(Ē), is given by:\n  **P(Ē) = 1 - P(E)**"
            }
          ]
        },
        quiz: [
          {
            question: "Which of the following cannot be the probability of an event?",
            options: ["2/3", "-1.5", "15%", "0.7"],
            answer: 1,
            explanation: "Probability must be between 0 and 1 inclusive. It cannot be negative."
          },
          {
            question: "If P(E) = 0.05, what is the probability of 'not E'?",
            options: ["0.95", "0.05", "1.05", "0.90"],
            answer: 0,
            explanation: "P(not E) = 1 - P(E) = 1 - 0.05 = 0.95."
          },
          {
            question: "A bag contains lemon-flavoured candies only. Malini takes out one candy without looking. What is the probability that she takes out an orange-flavoured candy?",
            options: ["0", "1", "1/2", "Cannot be determined"],
            answer: 0,
            explanation: "Since the bag has no orange-flavoured candies at all, this is an impossible event, so its probability is 0."
          },
          {
            question: "Two coins are tossed simultaneously. What is the probability of getting at least one head?",
            options: ["1/3", "1/2", "3/4", "1/4"],
            answer: 2,
            explanation: "The equally likely outcomes are (H,H), (H,T), (T,H), (T,T) — 4 total. 'At least one head' is favoured by 3 of them: (H,H), (H,T), (T,H). So P = 3/4. (Note: treating 'two heads, two tails, one of each' as 3 equally likely outcomes is incorrect — they are not equally likely.)"
          },
          {
            question: "One card is drawn from a well-shuffled deck of 52 playing cards. What is the probability that it is an ace?",
            options: ["1/13", "1/52", "4/13", "1/4"],
            answer: 0,
            explanation: "There are 4 aces in a deck of 52 cards, so P(ace) = 4/52 = 1/13."
          },
          {
            question: "A die is thrown once. What is the probability of getting an odd number?",
            options: ["1/6", "1/3", "1/2", "2/3"],
            answer: 2,
            explanation: "The odd numbers on a die are 1, 3, 5 — 3 out of 6 equally likely outcomes. P = 3/6 = 1/2."
          }
        ]
      }
    ]
  }

        ] }
      }
    },
    "11": {
      name: "Class 11",
      tagline: "Career Pathways & Specialization",
      theme: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
      isHighSchool: true,
      streams: {
        science: {
          name: "Science Stream",
          icon: "🔬",
          subjects: {
            physics: {
              name: "Physics",
              icon: "🌌",
              chapters: [
                {
                  id: "11p-1",
                  title: "Units and Measurements",
                  topics: [
                    {
                      id: "11p-1-1",
                      title: "Dimensional Analysis",
                      theory: {
                        intro: "Dimensional analysis is a tool to check relations among physical quantities. Every physical quantity can be expressed in terms of basic dimensions: Mass [M], Length [L], Time [T], etc.",
                        sections: [
                          {
                            heading: "What are Dimensions?",
                            text: "The dimensions of a physical quantity are the powers to which the base quantities are raised to represent that quantity. For example, Speed = Distance / Time = [L] / [T] = [M^0 L T^-1]."
                          }
                        ]
                      },
                      slides: [
                        { title: "Dimensions of Physical Quantities", bullets: ["7 base dimensions represented by square brackets [].", "Mass: [M], Length: [L], Time: [T]."] }
                      ],
                      activities: [
                        {
                          title: "Deducing Pendulum Formula",
                          objective: "Use dimensions to check physical constants.",
                          materials: ["Pen", "Paper"],
                          steps: [
                            "Assume T = k * l^a * g^b",
                            "Match dimensions on LHS and RHS."
                          ],
                          observation: "Time period formula T ∝ sqrt(l/g) is successfully verified."
                        }
                      ],
                      quiz: [
                        {
                          question: "What are the dimensions of Force?",
                          options: ["[M L T^-1]", "[M L T^-2]", "[M L^2 T^-2]"],
                          answer: 1,
                          explanation: "Force = mass * acceleration = [M L T^-2]."
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
        }
      }
    },
    "12": {
      name: "Class 12",
      tagline: "Career Launchpad & Deep Exploration",
      theme: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
      isHighSchool: true,
      streams: {
        science: {
          name: "Science Stream",
          icon: "🔬",
          subjects: {
            physics: {
              name: "Physics",
              icon: "🌌",
              chapters: [
                {
                  id: "12p-1",
                  title: "Electric Charges and Fields",
                  topics: [
                    {
                      id: "12p-1-1",
                      title: "Coulomb's Law",
                      theory: {
                        intro: "Coulomb's Law describes the force of interaction between two stationary point charges.",
                        sections: [
                          {
                            heading: "Statement",
                            text: "F = k * (|q1 * q2|) / r^2. In vacuum, k ≈ 9 × 10^9 N m^2 C^-2."
                          }
                        ]
                      },
                      slides: [
                        { title: "Coulomb's Law", bullets: ["F is proportional to product of charges.", "F is inversely proportional to square of distance."] }
                      ],
                      activities: [
                        {
                          title: "Electrostatic Comb experiment",
                          objective: "Demonstrate static charge using dry comb.",
                          materials: ["Comb", "Paper bits", "Dry hair"],
                          steps: [
                            "Rub comb in dry hair.",
                            "Bring comb close to dry paper bits."
                          ],
                          observation: "Paper bits jump and stick to comb."
                        }
                      ],
                      quiz: [
                        {
                          question: "If distance between two charges is doubled, electrostatic force is:",
                          options: ["Doubled", "Halved", "Quartered"],
                          answer: 2,
                          explanation: "Force is inversely proportional to square of distance, so it is reduced to 1/4."
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
        }
      }
    }
  }
};
