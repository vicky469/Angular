import {User} from "../dto/user";


export const users: User[] = [
  {
    "id": 1,
    "username": "Vicky",
    "actors": [
      {
        "id": 1,
        "name": "Combustion",
        "description": "Fire is one of the main things you need to survive in the wilderness.",
        "info": "Fire can be used to cook food, sterilize drinking water and tools, keep you warm, keep your clothes and gear dry (or dry them after the rain), ward off predators, keep insects away, signal for rescue, provide light, and make tools. It's also a great way to boost your mood.",
        "items": [
          {
            "name": "Stormproof/Wind Resistant Matches",
            "description": "Use these to be able to start fire in poor conditions."
          },
          {
            "name": "Fire Steel",
            "description": "A good ferro rod can throw sparks up to 3000F. They often come with metal scrapers."
          }
        ]
      },
      {
        "id": 2,
        "name": "Container",
        "description": "Containers can mean anything from a water jug to a soup bowl.",
        "info": "Containers are a lot more useful than you might realize. They can be used for organization, carrying your stuff around, cooking in, and more. One of the most important containers is one for boiling and sterilizing water.",
        "items": [
          {
            "name": "Metal Canteen",
            "description": "For carrying and boiling drinking water."
          },
          {
            "name": "Metal Pot",
            "description": "For boiling drinking water and cooking food, but not great for storage."
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "username": "Vassili",
    "actors": [
      {
        "id": 3,
        "name": "Cordage",
        "description": "Rope of various sizes come in handy much more often than you think.",
        "info": "Cordage includes rope, lashing, strings, and more. It can be used as a clothes line, for building shelter, hanging up an animal to clean it, hanging food over a fire, and much more.",
        "items": [
          {
            "name": "550 Paracord",
            "description": "Strong, durable, and lightweight. This is great for a wide range of uses."
          },
          {
            "name": "Jute Twine",
            "description": "This is a natural substance turned into fiber, so it can also double as tinder when frayed with a knife and even dipped in wax."
          }
        ]
      },
      {
        "id": 4,
        "name": "Cover",
        "description": "Cover is another name for shelter, but can also mean clothes. You need cover to stay warm and dry.",
        "info": "One of the biggest dangers outdoors is hypothermia. Good cover includes shelter building materials as well as clothing. Clothes also protect you from bug bites or poisonous plants.",
        "items": [
          {
            "name": "Tarp",
            "description": "Tarps are super versatile. You can use them to create many kinds of shelter or as a clean spot for processing food or storing supplies."
          },
          {
            "name": "Tent",
            "description": "Tents aren't as versatile as tarps, but it's possible to get very sophisticated lightweight, waterproof tents, which is usually well worth it."
          }
        ]
      }
    ]
  }
];

