// src/data/products.ts
import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Dried Managu',
    localName: 'African Nightshade',
    image: '/images/Managu-600x400.png',
    price50: 200,
    price100: 400,
    description: 'A traditional Kenyan leafy green vegetable packed with essential nutrients. Managu has been a staple in Kenyan households for generations, known for its unique flavor and impressive health benefits.',
    healthBenefits: [
      'Rich in iron, helping prevent anemia',
      'High in vitamin A for improved vision',
      'Contains antioxidants that boost immune system',
      'Supports bone health with calcium and magnesium',
      'Aids digestion with high fiber content'
    ],
    nutritionalInfo: {
      'protein': '25g',
      'fiber': '15g',
      'vitaminA': '200%',
      'iron': '50%',
      'calcium': '30%',
      'vitaminC': '120%'
    },
    origin: 'Central Kenya',
    inStock: 15,
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: 'Dried Saaga',
    localName: 'Spider Plant',
    image: '/images/Spider-Plant.png',
    price50: 200,
    price100: 400,
    description: 'A nutritious leafy vegetable with a slightly bitter taste that becomes milder when cooked. Saaga is highly valued in traditional Kenyan cuisine for its medicinal properties and distinct flavor.',
    healthBenefits: [
      'Natural anti-inflammatory properties',
      'Supports cardiovascular health',
      'Rich in folate for cell growth and development',
      'Helps regulate blood sugar levels',
      'Contains compounds that may prevent certain cancers'
    ],
    nutritionalInfo: {
      'protein': '22g',
      'fiber': '18g',
      'folate': '75%',
      'magnesium': '40%',
      'vitaminK': '150%',
      'potassium': '35%'
    },
    origin: 'Western Kenya',
    inStock: 8,
    rating: 4.7,
    reviews: 98
  },
  {
    id: 3,
    name: 'Dried Amaranth',
    localName: 'Terere',
    image: '/images/Terere-600x400.png',
    price50: 200,
    price100: 400,
    description: 'A highly nutritious grain and leafy vegetable that has been cultivated for thousands of years. Amaranth is a complete protein source, making it especially valuable for vegetarian and vegan diets.',
    healthBenefits: [
      'Complete protein with all essential amino acids',
      'Gluten-free alternative to grains',
      'Supports brain function with high lysine content',
      'Strengthens bones with calcium and magnesium',
      'May help lower cholesterol levels'
    ],
    nutritionalInfo: {
      'protein': '30g',
      'fiber': '20g',
      'lysine': '15%',
      'magnesium': '65%',
      'iron': '45%',
      'phosphorus': '55%'
    },
    origin: 'Rift Valley',
    inStock: 22,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 4,
    name: 'Dried Mushrooms',
    localName: 'Nyakazi',
    image: '/images/nyakazi-mushroom.jpeg',
    price50: 200,
    price100: 400,
    description: 'Wild-harvested mushrooms with a rich, earthy flavor and meaty texture. These traditional mushrooms are sustainably foraged from Kenyan forests and carefully dried to preserve their nutritional value.',
    healthBenefits: [
      'Natural source of vitamin D when exposed to sunlight',
      'Supports immune system with beta-glucans',
      'May help reduce inflammation',
      'Rich in B vitamins for energy production',
      'Contains antioxidants that fight cellular damage'
    ],
    nutritionalInfo: {
      'protein': '18g',
      'fiber': '8g',
      'vitaminD': '100%',
      'selenium': '45%',
      'niacin': '60%',
      'pantothenicAcid': '40%'
    },
    origin: 'Mount Kenya Forest',
    inStock: 5,
    rating: 4.6,
    reviews: 87
  },
  {
    id: 5,
    name: 'Powdered Pumpkin',
    localName: 'Ulenje',
    image: '/images/Managu Powder.jpeg',
    price50: 200,
    price100: 400,
    description: 'A versatile nutrient-dense powder made from locally grown pumpkins. This convenient powder can be added to smoothies, soups, or baked goods for an instant nutritional boost.',
    healthBenefits: [
      'Rich in beta-carotene for eye health',
      'Supports skin health and anti-aging',
      'High in antioxidants that fight free radicals',
      'May help regulate blood pressure',
      'Supports weight management with high fiber'
    ],
    nutritionalInfo: {
      'protein': '12g',
      'fiber': '25g',
      'betaCarotene': '300%',
      'potassium': '40%',
      'vitaminE': '35%',
      'magnesium': '30%'
    },
    origin: 'Eastern Kenya',
    inStock: 18,
    rating: 4.7,
    reviews: 102
  }
];