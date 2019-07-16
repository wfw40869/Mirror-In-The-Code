const textInput = document.querySelector("#message"),
    blueMirrorBox = document.querySelector("#article__mirrorBox--blue"),
    orangeMirrorBox = document.querySelector("#article__mirrorBox--orange")

textInput.addEventListener("keyup", (event) => {
    blueMirrorBox.textContent = event.srcElement.value
    orangeMirrorBox.textContent = event.srcElement.value
})