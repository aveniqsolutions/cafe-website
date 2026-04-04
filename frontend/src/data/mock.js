// Mock data for Café Landing Page

export const cafeData = {
  branding: {
    name: "The Artisan Brew",
    tagline: "Where Every Cup Tells a Story",
    description: "A cozy haven for coffee enthusiasts and food lovers, crafting memorable moments since 2015."
  },
  
  hero: {
    headline: "Crafted with Passion, Served with Love",
    subheadline: "Experience the perfect blend of artisanal coffee, homemade pastries, and warm hospitality",
    image: "https://images.unsplash.com/photo-1593536488177-1eb3c2d4e3d2"
  },

  about: {
    story: "Founded in 2015 by coffee enthusiasts Maria and James Chen, The Artisan Brew began as a small corner café with a big dream: to create a community space where quality meets comfort. What started with a single espresso machine and a handful of recipes has blossomed into a beloved neighborhood gathering spot.",
    timeline: [
      {
        year: "2015",
        title: "The Beginning",
        description: "Opened our doors in the heart of the city with a passion for exceptional coffee"
      },
      {
        year: "2017",
        title: "Award Winning",
        description: "Recognized as 'Best Local Café' by City Food Awards"
      },
      {
        year: "2019",
        title: "Expansion",
        description: "Introduced our artisan bakery and expanded outdoor seating"
      },
      {
        year: "2023",
        title: "Community Hub",
        description: "Launched weekly coffee workshops and live music evenings"
      }
    ],
    values: [
      {
        icon: "Coffee",
        title: "Quality First",
        description: "We source only the finest single-origin beans from sustainable farms"
      },
      {
        icon: "Users",
        title: "Community Focused",
        description: "Building connections one conversation at a time"
      },
      {
        icon: "Heart",
        title: "Made with Love",
        description: "Every dish and drink is crafted with genuine care and attention"
      }
    ]
  },

  whyFamous: [
    {
      number: "50K+",
      label: "Happy Customers",
      description: "Served with a smile"
    },
    {
      number: "15+",
      label: "Awards Won",
      description: "For excellence in coffee & service"
    },
    {
      number: "100%",
      label: "Organic Ingredients",
      description: "Sustainably sourced"
    },
    {
      number: "8",
      label: "Years of Expertise",
      description: "Perfecting our craft"
    }
  ],

  menu: {
    categories: ["All", "Coffee", "Tea", "Pastries", "Breakfast", "Lunch"],
    items: [
      {
        id: 1,
        name: "Signature Espresso",
        category: "Coffee",
        description: "Rich, bold Ethiopian blend with notes of dark chocolate and berries",
        price: "$4.50",
        image: "https://images.unsplash.com/photo-1771764753575-54dbd0ae8bf8",
        featured: true
      },
      {
        id: 2,
        name: "Vanilla Latte",
        category: "Coffee",
        description: "Smooth espresso with steamed milk and house-made vanilla syrup",
        price: "$5.50",
        image: "https://images.unsplash.com/photo-1761526443792-bddba5d480b0",
        featured: true
      },
      {
        id: 3,
        name: "Cold Brew Float",
        category: "Coffee",
        description: "Smooth cold brew topped with vanilla bean ice cream",
        price: "$6.50",
        image: "https://images.unsplash.com/photo-1774801935455-eed1a09fd1a1"
      },
      {
        id: 4,
        name: "Matcha Green Tea",
        category: "Tea",
        description: "Premium ceremonial grade matcha, whisked to perfection",
        price: "$5.00",
        image: "https://images.pexels.com/photos/34467097/pexels-photo-34467097.jpeg"
      },
      {
        id: 5,
        name: "English Breakfast",
        category: "Tea",
        description: "Classic full-bodied black tea blend",
        price: "$3.50",
        image: "https://images.pexels.com/photos/29841693/pexels-photo-29841693.jpeg"
      },
      {
        id: 6,
        name: "Butter Croissant",
        category: "Pastries",
        description: "Flaky, buttery layers baked fresh daily",
        price: "$4.00",
        image: "https://images.pexels.com/photos/8480694/pexels-photo-8480694.jpeg",
        featured: true
      },
      {
        id: 7,
        name: "Cinnamon Roll",
        category: "Pastries",
        description: "House-made with cream cheese frosting",
        price: "$5.50",
        image: "https://images.pexels.com/photos/32845421/pexels-photo-32845421.jpeg"
      },
      {
        id: 8,
        name: "Almond Croissant",
        category: "Pastries",
        description: "Filled with almond cream and topped with sliced almonds",
        price: "$5.00",
        image: "https://images.unsplash.com/photo-1706939242166-8024d51a34be"
      },
      {
        id: 9,
        name: "Avocado Toast",
        category: "Breakfast",
        description: "Smashed avocado on sourdough with cherry tomatoes and feta",
        price: "$9.50",
        image: "https://images.unsplash.com/photo-1567600175325-3573c56bee05"
      },
      {
        id: 10,
        name: "Breakfast Plate",
        category: "Breakfast",
        description: "Two eggs your way, toast, bacon, and seasonal fruit",
        price: "$12.00",
        image: "https://images.pexels.com/photos/8480694/pexels-photo-8480694.jpeg"
      },
      {
        id: 11,
        name: "Artisan Sandwich",
        category: "Lunch",
        description: "Grilled chicken, pesto, mozzarella on ciabatta",
        price: "$11.50",
        image: "https://images.unsplash.com/photo-1739723745132-97df9db49db2"
      },
      {
        id: 12,
        name: "Garden Salad",
        category: "Lunch",
        description: "Mixed greens, quinoa, roasted vegetables, citrus vinaigrette",
        price: "$10.50",
        image: "https://images.unsplash.com/photo-1750040970096-31907e42d6a5"
      }
    ]
  },

  specialties: [
    {
      id: 1,
      name: "The Artisan Special",
      description: "Our signature drink: double shot espresso with house-made caramel, steamed milk, and a touch of sea salt",
      image: "https://images.unsplash.com/photo-1771764753575-54dbd0ae8bf8",
      badge: "Most Popular"
    },
    {
      id: 2,
      name: "Chef's Breakfast Board",
      description: "A curated selection of artisan pastries, seasonal fruits, local cheese, and house-made preserves",
      image: "https://images.pexels.com/photos/8480694/pexels-photo-8480694.jpeg",
      badge: "Chef's Choice"
    },
    {
      id: 3,
      name: "Pour Over Experience",
      description: "Single-origin coffee prepared tableside with precision and care, includes tasting notes",
      image: "https://images.pexels.com/photos/29841693/pexels-photo-29841693.jpeg",
      badge: "Coffee Lovers"
    }
  ],

  gallery: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1593536488177-1eb3c2d4e3d2",
      caption: "Cozy interior atmosphere"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1750040970096-31907e42d6a5",
      caption: "Our reading corner"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1771764753575-54dbd0ae8bf8",
      caption: "Perfect latte art"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1761526443792-bddba5d480b0",
      caption: "Morning coffee selection"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1606486544554-164d98da4889",
      caption: "Fresh roasted beans"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/32845421/pexels-photo-32845421.jpeg",
      caption: "Fresh baked daily"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1774801935455-eed1a09fd1a1",
      caption: "Coffee brewing ritual"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1739723745132-97df9db49db2",
      caption: "Dining experience"
    }
  ],

  location: {
    address: "142 Heritage Lane, Downtown District",
    city: "Portland, OR 97214",
    phone: "(503) 555-0142",
    email: "hello@theartisanbrew.com",
    coordinates: {
      lat: 45.5152,
      lng: -122.6784
    },
    hours: [
      { day: "Monday - Friday", time: "7:00 AM - 8:00 PM" },
      { day: "Saturday", time: "8:00 AM - 9:00 PM" },
      { day: "Sunday", time: "8:00 AM - 7:00 PM" }
    ]
  },

  socialMedia: [
    { platform: "Instagram", handle: "@theartisanbrew", url: "#" },
    { platform: "Facebook", handle: "TheArtisanBrewCafe", url: "#" },
    { platform: "Twitter", handle: "@artisanbrew", url: "#" }
  ]
};
