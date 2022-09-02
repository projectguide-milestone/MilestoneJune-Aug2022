const price = (price) => {
  Number.prototype.format = function (n, x) {
    var re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, "g"), "$&,");
  };
  return price.format();
};
const agents = [
  {
    id: 1,
    name: "Kevin Caster",
    email: "kevn@gmail.com",
    phone: "9362574182",
    address: "P.O BOX 2456 Delhi",
    county: "India",
    town: "Delhi",
    photo: "agent2.jpg",

    about:
      "",
    social: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.facebook.com/",
      twitter: "https://www.facebook.com/",
      linkedin: "https://www.facebook.com/",
    },
    featured: true,
    listings: [
      {
        id: 1,
        title: "Apartment for rent",
        slug: "apartment-for-rent",
        price: price(35000),
        location: "Mombasa",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image2.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Elizabeth Keen",
          image: "agent1.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Nairobi Westlands",
          county: "India",
          city: "Mumbai",
          street: "Tengecha",
          area: "Nairobi",
        },

        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
      {
        id: 2,
        title: "House for Sell",
        slug: "house-for-sell",
        price: price(35000),
        location: "Nehru road",
        description:
          "There are many variations of passages of homes available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image8.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Kevin Caster",
          image: "agent3.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Nairobi Westlands",
          county: "India",
          city: "Mumbai",
          street: "Tengecha ",
          area: "Nehru road",
        },
        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Houses",
      },
    ],
  },
  {
    id: 2,
    name: "Priscilla Frankson",
    email: "prisa@gmail.com",
    phone: "8618574713",
    address: "P.O BOX 2456 Rajasthan",
    county: "India",
    town: "Rajasthan",
    about:
      "",
    social: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.facebook.com/",
      twitter: "https://www.facebook.com/",
      linkedin: "https://www.facebook.com/",
    },
    featured: true,
    photo: "agent4.jpg",
    listings: [
      {
        id: 1,
        title: "Apartment for rent",
        slug: "apartment-for-rent",
        price: price(35000),
        location: "Bombay",
        description:
          "There are many variations of passages of homes available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image2.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Elizabeth Keen",
          image: "agent1.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Nairobi Westlands",
          county: "India",
          city: "Mumbai",
          street: "Tengecha",
          area: "Nehru road",
        },

        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
      {
        id: 2,
        title: "House for Sell",
        slug: "house-for-sell",
        price: price(35000),
        location: "Nakuru",
        description:
          "There are many variations of passages of homes available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image8.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Kevin Caster",
          image: "agent3.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Nairobi Westlands",
          county: "India",
          city: "Mumbai",
          street: "Tengecha",
          area: "Nehru road",
        },
        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Houses",
      },
    ],
  },
  {
    id: 3,
    name: "Joram Davies",
    email: "jom@gmail.com",
    phone: "8632541799",
    address: "P.O BOX 2456 Nairobi",
    county: "India",
    town: "Delhi",
    about:"",
    social: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.facebook.com/",
      twitter: "https://www.facebook.com/",
      linkedin: "https://www.facebook.com/",
    },
    photo: "agent3.jpg",
    featured: true,
    listings: [
      {
        id: 1,
        title: "Apartment for rent",
        slug: "apartment-for-rent",
        price: price(35000),
        location: "Mombasa",
        description:
          "There are many variations of passages of homes available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image2.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Elizabeth Keen",
          image: "agent1.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Nairobi Westlands",
          county: "India",
          city: "Mumbai",
          street: "Tengecha",
          area: "Nehru road",
        },

        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
      {
        id: 2,
        title: "House for Sell",
        slug: "house-for-sell",
        price: price(35000),
        location: "Nakuru",
        description:
          "There are many variations of passages of homes available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image8.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Kevin Caster",
          image: "agent3.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Nairobi Westlands",
          county: "India",
          city: "Mumbai",
          street: "Tengecha ",
          area: "Nehru road",
        },
        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
    ],
  },
  {
    id: 4,
    name: "Joram Davies",
    email: "jom@gmail.com",
    phone: "9663224025",
    address: "P.O BOX 2456 Nairobi",
    county: "India",
    town: "Nairobi",
    about:
      "",
    social: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.facebook.com/",
      twitter: "https://www.facebook.com/",
      linkedin: "https://www.facebook.com/",
    },
    photo: "agent3.jpg",
    featured: true,
    listings: [
      {
        id: 1,
        title: "Apartment for rent",
        slug: "apartment-for-rent",
        price: price(35000),
        location: "Mombasa",
        description:
          "There are many variations of passages of homes available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image2.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Elizabeth Keen",
          image: "agent1.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Nairobi Westlands",
          county: "India",
          city: "Bangalore",
          street: "Tengecha St",
          area: "Vijaynagar",
        },

        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
      {
        id: 2,
        title: "House for Sell",
        slug: "house-for-sell",
        price: price(35000),
        location: "Nakuru",
        description:
          "There are many variations of passages of homes  available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image8.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Kevin Caster",
          image: "agent3.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Nairobi Westlands",
          county: "India",
          city: "Mumbai",
          street: "Tengecha St",
          area: "Nehru road",
        },
        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
    ],
  },
];

export default agents;