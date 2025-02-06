let blogs = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;
  let image = document.getElementById("image");

  let imageFileName = URL.createObjectURL(image.files[0]);

  let blog = {
    title: title,
    content: content,
    image: imageFileName,
    author: "afdal rafi",
    postedAt: new Date(),
  };

  getRelatifTime();
  getRelatifTime(
    new Date("Sun Feb 02 2025 16:39:11 GMT+0700 (Western Indonesia Time)")
  );

  formatDateToWIB();

  blogs.push(blog);

  console.log(blogs);

  tampilData();
}
function tampilData() {
  let blogList = document.getElementById("BlogList");

  for (let i = 0; i < blogs.length; i++) {
    blogList.innerHTML += `<article class="blogItem">
        <div class="blogImage">
          <img src="${blogs[i].image}" alt="" />
        </div>

        <div class="blogTags">
          <div class="blogItem-button">
            <button class="blog-edit-button">Edit blog</button>
            <button class="blog-post-button">Post blog</button>
          </div>
          <a href="blog-detail.html" style="text-decoration: none">
            <h1 style="color: black">${blogs[i].title}</h1>
          </a>
          <p>${formatDateToWIB(blogs[i].postedAt)} | ${blogs[i].author}</p>
          <p>
          ${blogs[i].content}
          </p>
          <p class="blogItemTimes">${getRelatifTime(blogs[i].postedAt)}</p>
        </div>
      </article>
      `;
  }
}



function formatDateToWIB() {
  let date = new Date();
  let monthsList = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "May",
    "Juni",
    "Juli",
    "Agustus",
    "Sebtember",
    "Oktober",
    "November",
    "Desember",
  ];

  let day = date.getDate().toString().padStart(2, "0");
  let month = monthsList[date.getMonth()];
  let year = date.getFullYear();
  let hour = date.getHours().toString().padStart(2, "0");
  let minute = date.getMinutes().toString().padStart(2, "0");

  let formateDate = `${day} ${month} ${year} ${hour}:${minute} WIB`;

  console.log(formateDate);
  return formateDate;
}

function getRelatifTime(postTime) {
  let now = new Date();
  console.log("Waktu Sekarang", now);

  console.log("waktu user post :", postTime);

  let selisih = now - postTime;
  console.log(selisih);

  let SelisihDalamDetik = Math.floor((now - postTime) / 1000);
  let SelisihDalamMenit = Math.floor(SelisihDalamDetik / 60);
  let SelisihDalamJam = Math.floor(SelisihDalamMenit / 60);

  console.log(SelisihDalamDetik);

  if (SelisihDalamDetik < 60) {
    return `${SelisihDalamDetik} seconds ago`;
  } else if (SelisihDalamMenit < 60) {
    return `${SelisihDalamMenit} minutes ago`;
  } else if (SelisihDalamJam <= 24) {
    return `${SelisihDalamJam} hours ago`;
  }
}


