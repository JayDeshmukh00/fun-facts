const url = "https://catfact.ninja/fact";
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    getfact();
});

async function getfact() {
    try {
        const response = await axios.get(url);
        document.getElementById("content").innerText = response.data.fact;
    } catch (error) {
        document.getElementById("content").innerText = "Oops! Couldn't fetch a cat fact 😿";
    }
}
