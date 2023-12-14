document.getElementById("btn").addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  console.log(document.documentElement.className);
});
