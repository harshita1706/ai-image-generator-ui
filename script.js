async function generateImage() {

    const prompt = document.querySelector("textarea").value;

    const btn = document.querySelector(".generate-btn");

    if (!prompt.trim()) {
        alert("Please enter a prompt");
        return;
    }

    btn.innerText = "Generating...";
    btn.disabled = true;

    try {

        const imageUrl =
        `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;

        const previewImg =
        document.getElementById("previewImg");

        previewImg.src = imageUrl;

        previewImg.onload = () => {
            btn.innerText = "Generate Image";
            btn.disabled = false;
        };

        document.getElementById("previewBox")
        .style.display = "block";

    } catch (error) {

        console.error(error);

        alert("Failed to generate image");

        btn.innerText = "Generate Image";
        btn.disabled = false;
    }
}