const example = document.getElementById("thought");

document.addEventListener("mousemove", (event) => {
    console.log(event.clientX, event.screenX);
    const { clientX } = event;
    example.style.width = `${ clientX }px`;
})

// clientX works wrt px

// document.addEventListener("mousemove", (event) => {
//     console.log(event.screenX, event.screenX);
//     const { screenX } = event;
//     example.style.width = `${ screenX }px`;
// })

// screenX works wrt viewport