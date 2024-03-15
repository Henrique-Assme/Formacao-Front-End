console.log(axios);

// primeiro request
const getData = async () => {
  try {
    const response = await postFetch.get(
      "/users",
      // headers
      {
        headers: {
          "Content-Type": "application/json",
          custom: "header",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// exibindo dados
const container = document.querySelector("#user-container");

const printData = async () => {
  const data = await getData();
  data.forEach((user) => {
    const div = document.createElement("div");
    const nameElement = document.createElement("h2");
    nameElement.textContent = user.name;
    div.appendChild(nameElement);

    const emailElement = document.createElement("p");
    emailElement.textContent = user.email;
    div.appendChild(emailElement);
    container.appendChild(div);
  });
};

printData();

// post
const form = document.querySelector("#post-form");
const title = document.querySelector("#title");
const body = document.querySelector("#body");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  postFetch.post("/posts", {
    title: title.value,
    body: body.value,
    userId: 1,
  });
});
