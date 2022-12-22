// Selecting button and list
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");

// function to create element
const createEl = () => {
    const liEl = document.createElement("li");
    return liEl;
};

// post function to fetch data and display data
const post = () => {
    const data = fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
            const lessData = data.slice(50, 60);
            lessData.forEach((element, index) => {
                let listItem = createEl();
                listItem.textContent = `${index + 1}. ${element.title}`;
                list.appendChild(listItem);
            });
        });
};

// button event
btn.addEventListener("click", post);
