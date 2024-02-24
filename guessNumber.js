"use strict";
let randomNumber = Math.floor(Math.random() * 10000) + 1;
let score = document.querySelector(".score span").textContent;
let initialScore = 12;
let highscore = Number(document.querySelector(".highscore span").innerHTML);

let gameLost = [
  "Oh no, it looks like the victory slipped away this time! But remember, in the game of life, it’s not about winning or losing, it’s about how you reset the game! 😄 So why not give it another shot? Just click the ‘Try Again’ button at the top of the page. Keep your spirits high and keep playing!",
  "Bummer, you didn’t win this time! But remember, the only time you lose is when you stop trying. 😄 Click the ‘Try Again’ button at the top of the page and let’s turn this game around!",
  "Oops, victory slipped away this time! But don’t worry, every champion was once a contender that refused to give up. 😄 Ready for a rematch? Just click the ‘Try Again’ button at the top of the page.",
  "So you didn’t win this time, no biggie! Remember, sometimes you win, sometimes you learn. 😄 Let’s go for another round! Click the ‘Try Again’ button at the top of the page.",
  "Looks like the win eluded you this time! But hey, it’s not about winning or losing, it’s about having fun! 😄 If you’re ready for more fun, click the ‘Try Again’ button at the top of the page.",
  "Didn’t clinch the win this time, huh? But remember, the only way to win is to try one more time. 😄 So, ready to try again? Just click the ‘Try Again’ button at the top of the page.",
  "Ah, victory was elusive this time! But remember, the fun is in the journey, not the destination. 😄 Ready for another adventure? Click the ‘Try Again’ button at the top of the page.",
  "Missed the win this time? No worries! Remember, every setback is a setup for a comeback. 😄 Let's make that comeback happen! Click the ‘Try Again’ button at the top of the page.",
  "Didn't win this round? That's okay! Remember, the real victory is in never giving up. 😄 Ready to jump back in? Click the ‘Try Again’ button at the top of the page.",
  "Victory slipped away this time, but that's alright! Remember, the game isn't over till it's over. 😄 Ready to get back in the game? Click the ‘Try Again’ button at the top of the page.",
  "Didn't grab the win this time? No problem! Remember, every game is a new opportunity. 😄 Ready to seize the next one? Click the ‘Try Again’ button at the top of the page.",
  "Missed the win this time? That's okay! Remember, the greatest glory in gaming lies not in never falling, but in rising every time we fall. 😄 Ready to rise again? Click the ‘Try Again’ button at the top of the page.",
  "So the win didn't come home this time? Don't sweat it! Remember, it's all about the thrill of the game. 😄 Ready for more thrills? Click the ‘Try Again’ button at the top of the page.",
  "Didn't catch the win this time? No worries! Remember, every loss is just a chance to shine even brighter next time. 😄 Ready to shine? Click the ‘Try Again’ button at the top of the page.",
  "Victory didn't choose you this time? That's alright! Remember, every game is a new chance to turn it all around. 😄 Ready to turn it around? Click the ‘Try Again’ button at the top of the page.",
  "Didn't secure the win this time? Don't fret! Remember, in the game of life, you're always winning as long as you're having fun. 😄 Ready for more fun? Click the ‘Try Again’ button at the top of the page.",
];
const gameLostArray = (msgArray) => {
  let gameLostGenerator = Math.floor(Math.random() * msgArray.length);
  return msgArray[gameLostGenerator];
};
// document.querySelector("body").innerHTML = gameLostArray(gameLost);
let monQuote = [
  "Congratulations on your win! It's Monday, the day of fresh starts. Remember, the secret to getting ahead is getting started. Ready for another round? Click 'Try Again' at the top of the page.",
  "Well done, champion! You've made this Monday magnificent with your win! Remember, why don't we play hide and seek with Monday? Because nobody likes to find a Monday! Feel free to click 'Try Again' at the top of the page if you want to play again.",
  "Bravo, you did it! This Monday is all about your triumph! Remember, why was the computer cold on Monday? It left its Windows open! Ready for another game? Just click 'Try Again' at the top of the page.",
  "Hats off to you, winner! You've brightened up this Monday with your victory! Remember, why did the scarecrow win an award on Monday? Because it was outstanding in its field! If you're ready for another challenge, click 'Try Again' at the top of the page.",
  "Kudos on your victory! This Monday is a testament to your triumph! Remember, why did the bicycle fall over on Monday? It was two-tired! To play again, simply click 'Try Again' at the top of the page.",
  "Congratulations, you're a star! You've won the game this Monday! Remember, why did the golfer bring two pairs of pants on Monday? In case he got a hole in one! If you wish to play again, click 'Try Again' at the top of the page.",
  "Well played, champ! You've aced the game this Monday! Remember, why don't some fish play piano on Monday? Because you can't tuna fish! Ready for another round? Click 'Try Again' at the top of the page.",
  "You nailed it, well done! This Monday belongs to you, winner! Remember, why was the math book sad on Monday? Because it had too many problems! If you're up for another game, click 'Try Again' at the top of the page.",
  "Hooray, you won! You've made this Monday marvelous with your win! Remember, why did the tomato turn red on Monday? Because it saw the salad dressing! To play again, just click 'Try Again' at the top of the page.",
  "Fantastic, you're the champion! This Monday is all about your victory! Remember, why did the belt get arrested on Monday? It was holding up a pair of pants! Ready for another challenge? Click 'Try Again' at the top of the page.",
];
let tueQuote = [
  "Congratulations on your win! It's Tuesday, the day when the week gets going. Remember, even a turtle only makes progress when it sticks its neck out. Ready for another round? Click 'Try Again' at the top of the page.",
  "Well done, champion! You've made this Tuesday terrific with your win! Remember, why don't we tell secrets on Tuesday? Because it might spill the beans! Feel free to click 'Try Again' at the top of the page if you want to play again.",
  "Bravo, you did it! This Tuesday is all about your triumph! Remember, why was the math book sad on Tuesday? Because it had too many problems! Ready for another game? Just click 'Try Again' at the top of the page.",
  "Hats off to you, winner! You've brightened up this Tuesday with your victory! Remember, why was the computer cold on Tuesday? It left its Windows open! If you're ready for another challenge, click 'Try Again' at the top of the page.",
  "Kudos on your victory! This Tuesday is a testament to your triumph! Remember, why did the scarecrow win an award on Tuesday? Because it was outstanding in its field! To play again, simply click 'Try Again' at the top of the page.",
  "Congratulations, you're a star! You've won the game this Tuesday! Remember, why don't some fish play piano on Tuesday? Because you can't tuna fish! If you wish to play again, click 'Try Again' at the top of the page.",
  "Well played, champ! You've aced the game this Tuesday! Remember, why was the belt arrested on Tuesday? It was holding up a pair of pants! Ready for another round? Click 'Try Again' at the top of the page.",
  "You nailed it, well done! This Tuesday belongs to you, winner! Remember, why don't we play hide and seek with mountains on Tuesday? Because you can't hide a hill! If you're up for another game, click 'Try Again' at the top of the page.",
  "Hooray, you won! You've made this Tuesday terrific with your win! Remember, why was the bicycle unable to stand up by itself on Tuesday? It was two-tired! To play again, just click 'Try Again' at the top of the page.",
  "Fantastic, you're the champion! This Tuesday is all about your victory! Remember, why did the golfer bring two pairs of pants on Tuesday? In case he got a hole in one! Ready for another challenge? Click 'Try Again' at the top of the page.",
];
let wedQuote = [
  "Congratulations on your win! This Wednesday just got better with your victory! Remember, the only way to do great work is to love what you do. Ready for another round? Click 'Try Again' at the top of the page.",
  "Well done, champion! You've made this Wednesday wonderful with your win! Remember, success is not the key to happiness. Happiness is the key to success. Feel like playing again? Click 'Try Again' at the top of the page.",
  "Bravo, you did it! This Wednesday is all about your win! Remember, don't be afraid to give up the good to go for the great. Ready for another game? Click 'Try Again' at the top of the page.",
  "Hats off to you, winner! You've brightened up this Wednesday with your victory! Remember, I find that the harder I work, the more luck I seem to have. If you're ready for another challenge, click 'Try Again' at the top of the page.",
  "Kudos on your victory! This Wednesday is a testament to your triumph! Remember, success is not in what you have, but who you are. To play again, simply click 'Try Again' at the top of the page.",
  "Congratulations, you're a star! You've won the game this Wednesday! Remember, success usually comes to those who are too busy to be looking for it. If you wish to play again, click 'Try Again' at the top of the page.",
  "Well played, champ! You've aced the game this Wednesday! Remember, opportunities don't happen. You create them. Ready for another round? Click 'Try Again' at the top of the page.",
  "You nailed it, well done! This Wednesday belongs to you, winner! Remember, success is where preparation and opportunity meet. If you're up for another game, click 'Try Again' at the top of the page.",
  "Hooray, you won! You've made this Wednesday wonderful with your win! Remember, there are no secrets to success. It is the result of preparation, hard work, and learning from failure. To play again, just click 'Try Again' at the top of the page.",
  "Fantastic, you're the champion! This Wednesday is all about your victory! Remember, the road to success and the road to failure are almost exactly the same. Ready for another challenge? Click 'Try Again' at the top of the page.",
];
let thurQuote = [
  "Hip, hip, hooray! You've won the game on this beautiful Thursday! Remember, the only limit is your imagination. Ready for another round? Click 'Try Again' at the top of the page.",
  "Winner alert! You've conquered the game this Thursday! Remember, success is the sum of small efforts repeated day in and day out. Feel like playing again? Click 'Try Again' at the top of the page.",
  "Brilliant job! You've triumphed this Thursday! Remember, the harder the battle, the sweeter the victory. Ready to battle again? Click 'Try Again' at the top of the page.",
  "You did it! Victory is yours this Thursday! Remember, every accomplishment starts with the decision to try. Want to accomplish more? Click 'Try Again' at the top of the page.",
  "Champion status: Achieved! You've won the game this Thursday! Remember, the future belongs to those who believe in the beauty of their dreams. Ready to dream big? Click 'Try Again' at the top of the page.",
  "You've nailed it! This Thursday belongs to you, winner! Remember, the secret of getting ahead is getting started. Ready to get started again? Click 'Try Again' at the top of the page.",
  "You've aced the game! This Thursday shines brighter with your win! Remember, the best way to predict the future is to create it. Ready to create your next win? Click 'Try Again' at the top of the page.",
  "Victory is sweet and it's yours this Thursday! Remember, don't wait for opportunity. Create it. Ready to seize another opportunity? Click 'Try Again' at the top of the page.",
  "You've won the game! This Thursday is all about your victory! Remember, success usually comes to those who are too busy to be looking for it. Ready for more success? Click 'Try Again' at the top of the page.",
  "You've triumphed! This Thursday is a testament to your victory! Remember, the road to success and the road to failure are almost exactly the same. Ready to hit the road again? Click 'Try Again' at the top of the page.",
];
let friQuote = [
  "Congratulations on your win! Today is Friday, the gateway to the weekend. Let's celebrate with a smile! 😄 Ready for another round? Click 'Try Again' at the top of the page.",
  "Well done, champion! It's Friday, the superhero that always arrives just in time to stop us from savagely beating one of our coworkers with a keyboard. 😄 Feel free to click 'Try Again' at the top of the page if you want to play again.",
  "Bravo, you did it! It's Friday... any plan of being a productive member of society is officially thrown out the window. 😄 Ready for another game? Just click 'Try Again' at the top of the page.",
  "Hats off to you, winner! It's Friday, time to go make stories for Monday. 😄 If you're ready for another challenge, click 'Try Again' at the top of the page.",
  "Kudos on your victory! It's Friday, let's roll baby roll! 😄 To play again, simply click 'Try Again' at the top of the page.",
  "Congratulations, you're a star! It's Friday, time to sparkle and shine! 😄 If you wish to play again, click 'Try Again' at the top of the page.",
  "Well played, champ! It's Friday, let the weekend therapy begin! 😄 Ready for another round? Click 'Try Again' at the top of the page.",
  "You nailed it, well done! It's Friday, be fierce! 😄 If you're up for another game, click 'Try Again' at the top of the page.",
  "Hooray, you won! It's Friday, time to be a hero and rescue some wine trapped in a bottle. 😄 To play again, just click 'Try Again' at the top of the page.",
  "Fantastic, you're the champion! It's Friday, let's rock, baby, rock! 😄 Ready for another challenge? Click 'Try Again' at the top of the page.",
];
let satQuote = [
  "Congratulations on your win! You know what's Saturday's favorite dance? The Satur-disco! 😄 Ready for another round? Click 'Try Again' at the top of the page.",
  "Well done, champion! Ever heard about Saturday's favorite fruit? It's Satur-date! 😄 Feel free to click 'Try Again' at the top of the page if you want to play again.",
  "Bravo, you did it! Guess what Saturday's favorite meal is? It's Satur-dinner! 😄 Ready for another game? Just click 'Try Again' at the top of the page.",
  "Hats off to you, winner! Do you know Saturday's favorite flower? It's Satur-daisy! 😄 If you're ready for another challenge, click 'Try Again' at the top of the page.",
  "Kudos on your victory! Ever wondered what's Saturday's favorite bird? It's Satur-daydream! 😄 To play again, simply click 'Try Again' at the top of the page.",
  "Congratulations, you're a star! Do you know what's Saturday's favorite song? It's Satur-daylight serenade! 😄 If you wish to play again, click 'Try Again' at the top of the page.",
  "Well played, champ! Guess what's Saturday's favorite dessert? It's Satur-donut! 😄 Ready for another round? Click 'Try Again' at the top of the page.",
  "You nailed it, well done! Do you know what's Saturday's favorite tree? It's Satur-daybreak! 😄 If you're up for another game, click 'Try Again' at the top of the page.",
  "Hooray, you won! Ever wondered what's Saturday's favorite animal? It's Satur-deer! 😄 To play again, just click 'Try Again' at the top of the page.",
  "Fantastic, you're the champion! Guess what's Saturday's favorite drink? It's Satur-dew! 😄 Ready for another challenge? Click 'Try Again' at the top of the page.",
];
let sunQuote = [
  "Congratulations on your victory! 🎉 As a reward for your triumph, here’s a little something to brighten up your Sunday: Why don’t we tell secrets on Sundays? Because even the walls have ears on Sundays… they’re called corn-ears! 🌽😄. If you wish to play again, please click on the ‘Try Again’ button at the top of the page. Enjoy your Sunday!",
  "🎉 Congratulations on your win! What’s a Sunday’s favorite plant? Sunflowers, because they’re always looking at the bright side! 😄 If you’re up for another round, don’t forget to click ‘Try Again’ at the top of the page.",
  "Well done, champion! Did you hear about the Sunday that went to a seafood disco? It pulled a mussel! 😄 Feel free to click ‘Try Again’ at the top of the page if you want to play again.",
  "Bravo, you did it! Why was the Sunday calendar feeling down? Because its days were numbered! 😄 Ready for another game? Just click ‘Try Again’ at the top of the page.",
  "Hats off to you, winner! Why don’t Sundays get stressed? They always go with the flow! 😄 If you’re ready for another challenge, click ‘Try Again’ at the top of the page.",
  "Kudos on your victory! Why did Sunday go to school? To get a little “weekend” education! 😄 To play again, simply click ‘Try Again’ at the top of the page.",
  "Congratulations, you’re a star! Why did Sunday brings a ladder to the bar? It heard the drinks were on the house! 😄 If you wish to play again, click ‘Try Again’ at the top of the page.",
  "Well played, champ! Why did Sunday stay behind the cloud? It didn’t want to be a “daylight” robber! 😄 Ready for another round? Click ‘Try Again’ at the top of the page.",
  "You nailed it, well done! Why did Sunday go to the bank? It wanted to save some “daylight”! 😄 If you’re up for another game, click ‘Try Again’ at the top of the page.",
  "Hooray, you won! Why was Sunday always calm? It knew how to “daylight” down! 😄 To play again, just click ‘Try Again’ at the top of the page.",
];
const dayGenerator = (dayOfWeek) => {
  let generator = Math.floor(Math.random() * dayOfWeek.length);
  return generator;
};
const messageFinder = (message) => {
  return message[dayGenerator(message)]; //Use the random index to find a quote
};

let quotes = [
  sunQuote,
  monQuote,
  tueQuote,
  wedQuote,
  thurQuote,
  friQuote,
  satQuote,
];
let date = new Date();
let dayOfWeek = date.getDay();

// document.querySelector("body").innerHTML = messageFinder(quotes[dayOfWeek]);

document.querySelector(".check-button").addEventListener("click", function () {
  const numberGuess = Number(
    document.querySelector(".input-value input").value
  );
  // When no number is inputted
  if (!numberGuess) {
    document.querySelector(".game-msg p").textContent =
      "You have not entered any number!🙀";
    document.querySelector(".coin-img2").style.display = "none";
    // when guess number is same as random number
  } else if (numberGuess === randomNumber) {
    document.querySelector(".guess-number").innerHTML = randomNumber;
    document.querySelector(".game-msg p").textContent = messageFinder(
      quotes[dayOfWeek]
    );
    document.querySelector(".game-msg-container").style.width = "80%";
    document.querySelector(".game-msg p").style.fontSize = "1.8rem";
    document.querySelector(".game-msg-container").style.margin = "0 auto";
    // document.querySelector(".highscore span").textContent = score;
    if (score > highscore) {
      document.querySelector(".highscore span").textContent = score;
      highscore = score;
    }

    document.querySelector(".game-container").style.backgroundImage =
      "url('youwin.jpeg')";
    document.querySelector(".game-container").style.backgroundSize = "cover";
    document.querySelector(".game-container").style.backgroundRepeat =
      "no-repeat";
    let elements = document.querySelectorAll(
      ".game-msg p, .score p, .score span, .highscore p, .highscore span"
    );
    elements.forEach(function (element) {
      element.style.color = "blue";
      element.style.fontWeight = "bold";
    });
    let containers = document.querySelectorAll(
      ".input-value input, .check-button input"
    );
    containers.forEach(function (container) {
      container.style.opacity = "0";
      if (container.tagName === "INPUT") {
        container.disabled = true;
      }
    });
    let coinImg = document.querySelectorAll(".coin-img2, .coin-img1");
    coinImg.forEach(function (coin) {
      coin.style.display = "none";
    });
    // When guess number is higher than random number
  } else if (numberGuess > randomNumber) {
    document.querySelector(".game-msg p").textContent =
      "Guessed number is too high!!🔼";
    score--;
    document.querySelector(".score span").textContent = score;
    document.querySelector(".coin-img2").style.display = "none";
    // when guess number is lower than random number
  } else if (numberGuess < randomNumber) {
    document.querySelector(".game-msg p").textContent =
      "Guessed number is too low!!⏬";
    score--;
    document.querySelector(".score span").textContent = score;
    document.querySelector(".coin-img2").style.display = "none";
  }
  // when score is less than zero
  if (score <= 0) {
    document.querySelector(".game-msg p").innerHTML = gameLostArray(gameLost);
    document.querySelector(".game-msg-container").style.width = "80%";
    document.querySelector(".game-msg p").style.fontSize = "1.8rem";
    document.querySelector(".game-msg-container").style.margin = "0 auto";
    document.querySelector(".score span").textContent = 0;
    document.querySelector(".game-container").style.backgroundImage =
      "url('youlost.png')";
    document.querySelector(".game-container").style.backgroundSize =
      "100% 100%";
    document.querySelector(".game-container").style.backgroundRepeat =
      "no-repeat";
    let containers = document.querySelectorAll(
      ".guess-number input, .input-value input, .check-button input"
    );
    containers.forEach(function (container) {
      container.style.opacity = "0";
      if (container.tagName === "INPUT") {
        container.disabled = true;
      }
    });
    let coinImg = document.querySelectorAll(".coin-img2, .coin-img1");
    coinImg.forEach(function (coin) {
      coin.style.display = "none";
    });
    let elements = document.querySelectorAll(
      ".game-msg p, .score p, .score span, .highscore p, .highscore span"
    );
    elements.forEach(function (element) {
      element.style.color = "blue";
      element.style.fontWeight = "bold";
    });
  }
});
// reset game
document.querySelector(".try-again img").addEventListener("click", function () {
  document.querySelector(".game-msg p").textContent = "Start guessing.....";

  document.querySelector(".game-container").style.backgroundImage =
    "url('BG.jpg')";
  document.querySelector(".game-container").style.backgroundSize = "contain";
  document.querySelector(".game-container").style.backgroundRepeat = "repeat";
  let elements = document.querySelectorAll(
    ".game-msg p, .score p, .score span, .highscore p, .highscore span"
  );
  elements.forEach(function (element) {
    element.style.color = "#000";
  });
  let containers = document.querySelectorAll(
    ".guess-number, .input-value input, .check-button input"
  );
  containers.forEach(function (container) {
    container.style.opacity = "1";
    if (container.tagName === "INPUT") {
      container.disabled = false;
    }
  });
  let coinImg = document.querySelectorAll(".coin-img2, .coin-img1");
  coinImg.forEach(function (coin) {
    coin.style.display = "block";
  });

  document.querySelector(".input-value input").value = "";
  score = initialScore;
  document.querySelector(".score span").textContent = score;
  document.querySelector(".guess-number").innerHTML = "?";
  randomNumber = Math.floor(Math.random() * 100) + 1;
});
