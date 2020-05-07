const db = require("./models");

const moods = [
  {
    properties: {
      title: "Flaws and All",
      description:
        "If everything was perfect, you would never learn and you would never grow.",
      image: "../images/andall.jpg",
      posts: [],
    },
    postTitles: ["Pretty Hurts", "I woke up like this"],
  },
  {
    properties: {
      title: "Naughty Girl",
      description:
        "I don’t like to gamble, but if there’s one thing I’m willing to bet on, it’s myself.",
      image: "../images/naughty.jpg",
      posts: [],
    },
    postTitles: ["Crazy in Love", "Independent Woman"],
  },
  {
    properties: {
      title: "Diva",
      description:
        "A true diva is graceful, and talented, and strong, and fearless and brave and someone with humility.",
      image: "../images/diva.jpg",
      posts: [],
    },
    postTitles: ["Beautiful Liar", "Single Ladies"],
  },
  {
    properties: {
      title: "XO",
      description:
        "We have to teach our boys the rules of equality and respect, so that as they grow up gender equality becomes a natural way of life. And we have to teach our girls that they can reach as high as humanly possible. ",
      image: "../images/crown.jpg",
      posts: [],
    },
    postTitles: ["Suga Mama", "Love on Top"],
  },
  {
    properties: {
      title: "Flawless",
      description:
        "I felt like it was time to set up my future, so I set a goal. My goal was independence.",
      image: "../images/flawless.jpg",
      posts: [],
    },
    postTitles: ["Bootylicious", "Irreplaceable"],
  },
  {
    properties: {
      title: "Queen Bey",
      description: "The most alluring thing a woman can have is confidence.",
      image: "../images/queen.jpg",
      posts: [],
    },
    postTitles: ["Run the World", "Halo"],
  },
];

const userTest = [
  {
    properties: {
      _id: "5eb0ab4681bcbe1c20be881a",
      posts: [],
    },
    postTitles: [
      "Beautiful Liar",
      "Single Ladies",
      "Crazy in Love",
      "Independent Woman",
      "Pretty Hurts",
      "I woke up like this",
    ],
  },
  {
    properties: {
      _id: "5eb0ab3f81bcbe1c20be8819",
      posts: [],
    },
    postTitles: [
      "Bootylicious",
      "Run the World",
      "Halo",
      "Irreplaceable",
      "Suga Mama",
      "Love on Top",
    ],
  },
];

db.Mood.create(moods, (err, newmoods) => {
  if (err) {
    console.log(err);
    //process.exit();
  }
  console.log(`${newmoods.length} moods added`);

  db.User.create(userTest, (err, newUsers) => {
    if (err) {
      console.log("this is the error");
      //process.exit();
    }
    console.log(newUsers);

    const posts = [
      {
        title: "Pretty Hurts",
        content:
          "What is your aspiration in life? Oh, well my aspiration in life would be to be happy",
        image: "../images/img/post1.jpg",
        link: "https://www.youtube.com/watch?v=LXXQLa-5n5w",
        // user: newUser1._id,
      },
      {
        title: "I woke up like this",
        content: "My sister told me I should speak my mind",
        image: "../images/img/post2.jpg",
        link: "https://www.youtube.com/watch?v=IyuUWOnS9BY",
        // user: newUser1._id,
      },
      {
        title: "Crazy in Love",
        content: "Just how your love can do what no one else can",
        image: "../images/img/post3.jpg",
        link: "https://www.youtube.com/watch?v=ViwtNLUqkMY",
        // user: newUser1._id,
      },
      {
        title: "Independent Woman",
        content: "I worked hard and sacrificed to get what I get",
        image: "../images/img/post4.jpg",
        link: "https://www.youtube.com/watch?v=0lPQZni7I18",
        // user: newUser1._id,
      },
      {
        title: "Beautiful Liar",
        content: "Let's not kill the karma... We can live without him",
        image: "../images/img/post5.jpg",
        link: "https://www.youtube.com/watch?v=QrOe2h9RtWI",
        // user: newUser1._id,
      },
      {
        title: "Single Ladies",
        content:
          "I'm doing my own little thing... If you like it, then you shoulda put a ring on it",
        image: "../images/img/post6.jpg",
        link: "https://www.youtube.com/watch?v=4m1EFMoRFvY",
        // user: newUser1._id,
      },
      {
        title: "Suga Mama",
        content: "And I've always been the type to take care of mine",
        image: "../images/img/post7.jpeg",
        link: "https://www.youtube.com/watch?v=nmP5CBiFigo",
        // user: newUser1._id,
      },
      {
        title: "Love on Top",
        content: "Now everybody ask me why I'm smiling out from ear to ear",
        image: "../images/img/post8.jpg",
        link: "https://www.youtube.com/watch?v=Ob7vObnFUJc",
        // user: newUser1._id,
      },
      {
        title: "Bootylicious",
        content:
          "Better move 'cause we've arrived lookin' sexy, lookin' fly, We're the baddest chicks, the chicks inside",
        image: "../images/img/post9.jpg",
        link: "https://www.youtube.com/watch?v=IyYnnUcgeMc",
        // user: newUser1._id,
      },
      {
        title: "Irreplaceable",
        content:
          "Tellin' me, how I'm such a fool. Talkin' 'bout, how I'll never ever find a man like you. You got me twisted. You must not know about me, you must not know about me. I could have another you in a minute. Matter of fact, he'll be here in a minute, baby",
        image: "../images/img/post10.jpg",
        link: "https://www.youtube.com/watch?v=2EwViQxSJJQ",
        // user: newUser1._id,
      },
      {
        title: "Run the World",
        content:
          "My persuasion can build a nation. Endless power, with our love we can devour. You'll do anything for me",
        image: "../images/img/post11.jpg",
        link: "https://www.youtube.com/watch?v=VBmMU_iwe6U",
        // user: newUser1._id,
      },
      {
        title: "Halo",
        content: "Standing in the light of your halo. I got my angel now",
        image: "../images/img/post12.jpg",
        link: "https://www.youtube.com/watch?v=bnVUHWCynig",
        // user: newUser1._id,
      },
    ];

    db.Mood.deleteMany({})
      .then((_result) => db.Post.deleteMany())
      .then(() => db.Post.create(posts))
      .then(() =>
        // return a Promise.all
        Promise.all(
          // takes an array of promises
          // callback of map returns a promise
          moods.map((mood) =>
            db.Post.find({ title: mood.postTitles }).then((results) => {
              mood.properties.posts = results;
              return db.Mood.create(mood.properties);
            })
          )
        )
      )
      .then((createdMoods) => {
        console.log(createdMoods);
        process.exit();
      });
  });
});

// db.User.deleteMany({})
//   .then((_result) => db.Post.deleteMany())
//   .then(() => db.Post.create(posts))
//   .then(() =>
//     // return a Promise.all
//     Promise.all(
//       // takes an array of promises
//       // callback of map returns a promise
//       userTest.map((user) =>
//         db.Post.find({ title: userTest.postTitles }).then((results) => {
//           userTest.properties.posts = results;
//           return db.User.create(user.properties);
//         })
//       )
//     )
//   )
//   .then((createdUsers) => {
//     console.log(createdUsers);
//     process.exit();
//   });

// .then((_result) => db.User.deleteMany())
// .then(() => db.User.create(userTest))
// .then(() =>
//   Promise.all(
//     userTest.map((user) =>
//       db.Post.find({ title: userTest.postTitles }).then((results) => {
//         userTest.properties.posts = results;
//         return db.User.create(user.properties);
//       })
//     )
//   )
// )
// .then((createdUsers) => {
//   console.log(createdUsers);
//   process.exit();
// })
