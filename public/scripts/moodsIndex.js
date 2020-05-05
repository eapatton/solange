const API_BASE = "/api/v1";
const moods = document.getElementById("moods");

// get all moods
fetch(`${API_BASE}/moods`)
  .then((stream) => stream.json())
  .then((res) => render(res))
  .catch((err) => console.log(err));

function render(moodsArray) {
  const moodTemplate = moodsArray.map((mood) => getMoodTemplate(mood)).join("");
  moods.insertAdjacentHTML("beforeend", moodTemplate);
}

function getMoodTemplate(mood) {
  return `
        <div class="col-md-4 mb-4">
        <div id="${mood._id}" class="card  shadow-lg p-3 mb-5 bg-white rounded ">
          <img src="${mood.image}" class="card-img-top" alt="${mood.title}" />
          <div class="card-body">
            <h5 class="card-title">
              ${mood.title}
            </h5>
            <p class="card-text">${mood.description}</p>
            <a href="/moods/${mood._id}" class="btn btn-light float-right">Upgrade U</a>
          </div>
        </div>
      </div>
        `;
}
