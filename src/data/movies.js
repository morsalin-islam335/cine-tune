const data = [
  // new data start from  here

  {
    id: crypto.randomUUID(),
    cover: "the_message.jpg",
    title: "The Message",
    description:
      "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    genre: "Islam/Religion",
    rating: 5,
    price: 160,
  },
  {
    id: crypto.randomUUID(),
    cover: "muhammad.jpg",
    title: "Muhammand The Messenger of GOD",
    description:
      "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    genre: "Life/Religion",
    rating: 5,
    price: 200,
  },
  {
    id: crypto.randomUUID(),
    cover: "36Julay.jpg",
    title: "36 Julay 2024",
    description:
      "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    genre: "History/Revolution",
    rating: 5,
    price: 240,
  },
  {
    id: crypto.randomUUID(),
    cover: "bilal.jpg",
    title: "Bilal a new bread of Hero",
    description:
      "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    genre: "Religion/Dedicate",
    rating: 5,
    price: 140,
  },
  {
    id: crypto.randomUUID(),
    cover: "journeyToMakka.jpg",
    title: "Journey to Makka",
    description:
      "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    genre: "Comedy/Drama",
    rating: 5,
    price: 130,
  },
  {
    id: crypto.randomUUID(),
    cover: "roomNumber 2011.jpg",
    title: "Room Number 2011",
    description:
      "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    genre: "Patriotism/Torture",
    rating: 5,
    price: 400,
  },

  // new data end from here
  // {
  //   id: crypto.randomUUID(),
  //   cover: "marriage-strory.jpg",
  //   title: "Marriage Story",
  //   description:
  //     "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
  //   genre: "Comedy/Drama",
  //   rating: 3,
  //   price: 90,
  // },
  {
    id: crypto.randomUUID(),
    cover: "pain-and-gain.jpg",
    title: "Pain & Gain",
    description:
      "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
    genre: "Action/Comedy/Crime/Drama",
    rating: 4,
    price: 100,
  },
  {
    id: crypto.randomUUID(),
    cover: "parasite.jpg",
    title: "Parasite",
    description:
      "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.",
    genre: "Comedy, Drama, Thriller",
    rating: 4,
    price: 250,
  },
  {
    id: crypto.randomUUID(),
    cover: "iron-man.png",
    title: "Iron Man",
    description:
      "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
    genre: "Action/Adventure/Sci-fi",
    rating: 5,
    price: 100,
  },
];

export function getAllMovies() {
  return data;
}
