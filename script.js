document.addEventListener("DOMContentLoaded", () => {

  const source = document.getElementById("type-source").innerText.trim();
  const typedText = document.getElementById("typed-text");
  const skipBtn = document.getElementById("skip-button");
  const extraButtons = document.getElementById("extra-buttons");
  const cursor = document.querySelector(".cursor");

  let i = 0;
  let typingStopped = false;
  let skipClicked = false;

  function typeWriter() {
    if (i < source.length && !typingStopped) {
      const char = source.charAt(i);
      typedText.innerHTML += char === '\n' ? '<br>' : char;
      i++;
      setTimeout(typeWriter, 90);
    } else if (!typingStopped && !skipClicked) {
      // Hide cursor and redirect
      if (cursor) cursor.style.display = "none";
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    }
  }

  skipBtn.addEventListener("click", () => {
    typingStopped = true;
    skipClicked = true;

     // Hide the skip button itself
    skipBtn.style.display = "none";

    // Show full text immediately
    typedText.innerHTML = source.replace(/\n/g, "<br>");

    // Hide blinking cursor
    if (cursor) cursor.style.display = "none";

    // Reveal extra buttons
    extraButtons.classList.remove("hidden");
    extraButtons.classList.add("show");

  });

  const mainPage = document.getElementById("main-page");
if (mainPage) {
  mainPage.addEventListener("click", () => {
    window.location.href = "indexmain.html";
  });
}

const mainExit = document.getElementById("exit-page");

if (mainExit) {
  mainExit.addEventListener("click", () => {
    // Either do nothing...
    // or show a message
    alert("You have been denied access.");
    
    // Optionally disable the button afterward
    mainPage.disabled = true;
     mainExit.disabled = true;
    mainPage.innerText = "Not Over 18";
    mainExit.innerText = "Access Denied";
    alert("You have been denied access.");
    mainExit.innerText = "Access Denied";
  });
}



  typeWriter();
});
