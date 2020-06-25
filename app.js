const button = document.querySelector(".button");
const ball = document.querySelector(".button-ball");

var i = 0;

button.addEventListener("click", () => {
  i++;
  if (i % 2 == 0) {
    ball.style.marginLeft = "0.3rem";
    button.style.backgroundColor = "none";
    ball.style.backgroundColor = "var(--BG)";
    button.style.backgroundImage =
      "linear-gradient(to right,hsl(210, 78%, 56%),hsl(146, 68%, 55%))";

    document.documentElement.style.setProperty("--BG", "hsl(230, 17%, 14%)");
    document.documentElement.style.setProperty(
      "--Top-BG-Pattern",
      "hsl(232, 19%, 15%)"
    );
    document.documentElement.style.setProperty(
      "--Card-BG",
      "hsl(228, 28%, 20%)"
    );
    document.documentElement.style.setProperty(
      "--Text-small",
      "hsl(228, 34%, 66%)"
    );
    document.documentElement.style.setProperty(
      "--Text-big",
      "hsl(0, 0%, 100%)"
    );
    document.documentElement.style.setProperty(
      "--Card-BG-hover",
      "hsl(228, 28%, 25%)"
    );
  } else {
    ball.style.marginLeft = "3.5rem";
    button.style.backgroundColor = "hsl(230, 22%, 74%)";
    button.style.backgroundImage = "none";
    ball.style.backgroundColor = "white";

    document.documentElement.style.setProperty("--BG", "hsl(0, 0%, 100%)");
    document.documentElement.style.setProperty(
      "--Top-BG-Pattern",
      "hsl(225, 100%, 98%)"
    );
    document.documentElement.style.setProperty(
      "--Card-BG",
      "hsl(227, 47%, 96%)"
    );
    document.documentElement.style.setProperty(
      "--Text-small",
      "hsl(228, 12%, 44%)"
    );
    document.documentElement.style.setProperty(
      "--Text-big",
      "hsl(230, 17%, 14%)"
    );
    document.documentElement.style.setProperty(
      "--Card-BG-hover",
      "hsl(227, 47%, 91%)"
    );
  }
});
