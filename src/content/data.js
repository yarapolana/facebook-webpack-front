const avatar1 = require("../assets/avatar1.png");
const avatar2 = require("../assets/avatar2.png");
const avatar3 = require("../assets/avatar3.png");
const avatar4 = require("../assets/avatar4.png");
const avatar5 = require("../assets/avatar5.png");

export const data = [
  {
    id: 1,
    postOwner: "Julius Alcantara",
    postAvatar: avatar1,
    postDate: "04 Jun 2019",
    postContent: "Yo guys, does anyone know if Rocketseat is hiring??",
    comments: [
      {
        id: 1,
        owner: "Yara Polana",
        avatar: avatar3,
        content:
          "They say they are always looking for new team members and they are checking out who stands out from their Bootcamp, in fact, almost 80% of their dev team is made of their students. Talk to Diego he is always checking out messages from content creators... for real."
      }
    ]
  },
  {
    id: 2,
    postOwner: "Gabriel Betrand",
    postAvatar: avatar2,
    postDate: "04 Jun 2019",
    postContent:
      "Hey guys, whassssaaap?" +
      "\n" +
      "I am working on the Bootcamp, amazing experience, and I am searching for classmates who are willing to move things forward or just chat about their experience.",
    comments: [
      {
        id: 1,
        owner: "Clara Lisbon",
        avatar: avatar4,
        content:
          "Hey I am doing the bootcamp! I am already in the third module about Node and managed to build all my API challenges wooo hoooo! 😄"
      },
      {
        id: 2,
        owner: "Cézar Toledo",
        avatar: avatar5,
        content:
          "Noo wayyy! I am thinking of joining in their next class to see what this is all about. I heard the students come out with this amazing super dev power, hahahah!"
      }
    ]
  }
];
