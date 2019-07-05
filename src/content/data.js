const avatar1 = require("../assets/avatar1.png");
const avatar2 = require("../assets/avatar2.png");
const avatar3 = require("../assets/avatar3.png");
const avatar4 = require("../assets/avatar4.png");
const avatar5 = require("../assets/avatar5.png");

export const data = [
  {
    id: 1,
    postOwner: "Júlio Alcantara",
    postAvatar: avatar1,
    postDate: "04 Jun 2019",
    postContent: "Pessoal, alguém sabe se a Rocketseat está contratando?",
    comments: [
      {
        id: 1,
        owner: "Diego Fernandes",
        avatar: avatar3,
        content:
          "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
      }
    ]
  },
  {
    id: 2,
    postOwner: "Gabriel Lisboa",
    postAvatar: avatar2,
    postDate: "04 Jun 2019",
    postContent:
      "Fala galera, beleza?" +
      "\n" +
      "Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.",
    comments: [
      {
        id: 1,
        owner: "Clara Lisboa",
        avatar: avatar4,
        content:
          "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
      },
      {
        id: 2,
        owner: "Cézar Toledo",
        avatar: avatar5,
        content:
          "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
      }
    ]
  }
];
