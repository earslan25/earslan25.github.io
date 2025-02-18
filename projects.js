
const titleElement = document.getElementById("title")
titleElement.addEventListener("click", () => {
    window.location.href = "/"
})

const elements = [
    { id: "gfx-main", text: "Rendering with my WebGPU graphics library" },
    { id: "turbogs-video", text: "Turbo-GS Gaussian splatting training" },
    { id: "path-tracer-output", text: "Monte Carlo Path Tracer rendering" },
    { id: "stable-nerf-output", text: "Stable NeRF checkpoint" }
];

let currentIndex = 0;

function updateDisplay() {
    elements.forEach((item, index) => {
        const el = document.getElementById(item.id);
        el.style.display = index === currentIndex ? "block" : "none";
        if (el.tagName === "VIDEO") {
            index === currentIndex ? el.play() : el.pause();
        }
    });
    document.getElementById("canvas-text").innerText = elements[currentIndex].text;
}

document.getElementById("prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + elements.length) % elements.length;
    updateDisplay();
});

document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % elements.length;
    updateDisplay();
});

updateDisplay();