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
              title: "Components of Food",
              topics: [
                {
                  id: "6s-1-1",
                  title: "Nutrients in Food",
                  theory: {
                    intro: "Food is the basic fuel of our life. It contains essential components that our body needs to grow, repair, and function properly. These components are called nutrients.",
                    sections: [
                      {
                        heading: "Major Nutrients",
                        text: "The main nutrients in our food are Carbohydrates, Proteins, Fats, Vitamins, and Minerals. In addition, food also contains dietary fibres and water."
                      },
                      {
                        heading: "Carbohydrates & Fats (Energy Givers)",
                        text: "Carbohydrates (found in wheat, rice, potatoes) and Fats (found in butter, oil, nuts) provide energy to our body. Fats provide much more energy as compared to the same amount of carbohydrates."
                      },
                      {
                        heading: "Proteins (Body Builders)",
                        text: "Proteins are needed for the growth and repair of our body. Foods containing proteins are often called 'body building foods' (e.g., milk, eggs, pulses, fish)."
                      }
                    ]
                  },
                  slides: [
                    { title: "What is Food Made Of?", bullets: ["Food contains vital components called nutrients.", "Nutrients help us grow, stay active, and fight diseases.", "Five main nutrients: Carbohydrates, Fats, Proteins, Vitamins, and Minerals."] },
                    { title: "Energy Givers: Carbs & Fats", bullets: ["Carbohydrates: Immediate energy (Rice, Wheat, Potatoes, Bananas).", "Fats: Stored energy (Butter, Oil, Ghee, Nuts).", "Fats give twice as much energy as carbohydrates!"] }
                  ],
                  activities: [
                    {
                      title: "Starch Detection in Potato",
                      objective: "To test the presence of starch (carbohydrates) in a food item.",
                      materials: ["A raw potato slice", "Dilute Iodine solution", "Dropper"],
                      steps: [
                        "Take a fresh slice of potato on a clean plate.",
                        "Using a dropper, put 2-3 drops of dilute Iodine solution on the cut potato surface.",
                        "Observe the change in color of the potato surface."
                      ],
                      observation: "The color of the potato turns blue-black. This confirms the presence of starch in potatoes."
                    }
                  ],
                  quiz: [
                    {
                      question: "Which of the following are energy-giving foods?",
                      options: ["Carbohydrates and Fats", "Proteins and Minerals", "Vitamins and Water", "Fibres and Proteins"],
                      answer: 0,
                      explanation: "Carbohydrates and Fats primarily provide energy. Proteins are for growth, while vitamins/minerals protect us from diseases."
                    }
                  ]
                }
              ]
            }
          ]
        },
        mathematics: { name: "Mathematics", icon: "📐", chapters: [] },
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
        mathematics: { name: "Mathematics", icon: "📐", chapters: [] }
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
                  lab: { type: "ph-litmus" },
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
                  lab: { type: "metal-reactivity" },
                  lab: { type: "metal-reactivity" },
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
                  lab: { type: "metal-reactivity" },
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
          intro: "Heredity is the transmission of traits from parents to offspring. The rules governing inheritance were discovered by Gregor Johann Mendel through experiments on garden peas.",
          sections: [
            {
              heading: "1. Mendel's Experiments",
              text: "Mendel chose garden peas for contrasting pairs of characters, short generation time, and self-pollination capability.\n\n**Key Terms:**\n• **Gene:** Unit of inheritance; segment of DNA.\n• **Alleles:** Different forms of same gene (e.g., T for tall, t for dwarf).\n• **Dominant:** Expresses in heterozygous state (T).\n• **Recessive:** Expresses only when homozygous (tt).\n• **Genotype:** Genetic makeup (TT, Tt, tt).\n• **Phenotype:** Observable trait (Tall or Dwarf)."
            },
            {
              heading: "2. Monohybrid Cross",
              text: "Cross: Pure Tall (TT) x Pure Dwarf (tt)\n\nF1: All Tall (Tt) — Tall is dominant.\n\nF2 (Tt x Tt):\n| | T | t |\n|---|---|---|\n| T | TT | Tt |\n| t | Tt | tt |\n\nGenotypic ratio: 1 TT : 2 Tt : 1 tt\nPhenotypic ratio: 3 Tall : 1 Dwarf\n\n**Law of Segregation:** Each organism has two alleles per trait. During gamete formation, alleles segregate so each gamete carries only one."
            },
            {
              heading: "3. Dihybrid Cross",
              text: "Cross: Round-Yellow (RRYY) x Wrinkled-Green (rryy)\nF1: All Round-Yellow (RrYy).\nF2 Phenotypic ratio: 9 Round-Yellow : 3 Round-Green : 3 Wrinkled-Yellow : 1 Wrinkled-Green.\n\n**Law of Independent Assortment:** Alleles of different genes segregate independently during gamete formation."
            },
            {
              heading: "4. Sex Determination",
              text: "Humans: 22 pairs autosomes + 1 pair sex chromosomes.\nFemales: XX. Males: XY.\n\n• X-bearing sperm + egg -> XX -> Female\n• Y-bearing sperm + egg -> XY -> Male\n\nSex is determined by the father's sperm, not the mother. 50:50 chance each pregnancy."
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
        lab: { type: "coordinate-geo" },
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
          }
        ]
      },
      {
        id: "10m-6-2",
        title: "2. Criteria for Similarity of Triangles",
        lab: { type: "coordinate-geo" },
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
            question: "Which of the following is NOT a criterion for similarity of triangles?",
            options: ["AA", "SAS", "SSS", "RHS"],
            answer: 3,
            explanation: "RHS (Right angle-Hypotenuse-Side) is a criterion for CONGRUENCE, not similarity."
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
            }
          ]
        },
        quiz: [
          {
            question: "An observer 1.5m tall is 28.5m away from a chimney. The angle of elevation of the top of the chimney from her eyes is 45°. What is the height of the chimney?",
            options: ["30 m", "28.5 m", "31.5 m", "15 m"],
            answer: 0,
            explanation: "tan 45° = height_above_eye / 28.5 -> 1 = height_above_eye / 28.5 -> height_above_eye = 28.5m. Total height = 28.5 + observer height(1.5) = 30m."
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
        lab: { type: "sector-segment" },
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
              heading: "3. Median of Grouped Data",
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
