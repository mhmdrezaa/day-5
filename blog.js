/*
let namaSiswa = ["reza", "udin", "ucok"];
console.log(namaSiswa);
namaSiswa.push("basuki", "jokowi");
console.log(namaSiswa);

let reverseData = namaSiswa.reverse();
console.log(reverseData);

let sortData = namaSiswa.sort();
console.log(sortData);

let dataReza = {
  nama: "Mohamad Reza",
  umur: 19,
  alamat: "tangerang",
};
console.log(dataReza.alamat);

let dataSiswa = [
  {
    nama: "Mohamad Reza",
    umur: 19,
    alamat: "tangerang",
  },
];

let number = [20, 20, 20];
function dataNumber(total, num) {
  return total + num;
}
let result = number.reduce(dataNumber);
console.log(result);
///
*/

/*
let dataTeman = [];

function tambahTeman() {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;

  let siswa = {
    title: title,
    description: description,
  };

  dataTeman.push(siswa);
  console.log(dataTeman);
}
*/

let blogs = [];

function addBlog(event) {
  event.preventDefault(); // mencegah terjadinya event bawaan

  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let image = document.getElementById("file-upload").files;

  let sDate = document.getElementById("sDate").value;
  let eDate = document.getElementById("eDate").value;

  let reactjs = document.getElementById("reactjs").checked;
  let javascript = document.getElementById("javascript").checked;
  let node = document.getElementById("node").checked;
  let vue = document.getElementById("vue").checked;

  if (reactjs) {
    document.getElementById("reactjs").value;
  } else {
    reactjs = "";
  }
  if (javascript) {
    document.getElementById("javascript").value;
  } else {
    javascript = "";
  }
  if (node) {
    document.getElementById("node").value;
  } else {
    node = "";
  }
  if (vue) {
    document.getElementById("vue").value;
  } else {
    vue = "";
  }

  image = URL.createObjectURL(image[0]); // Untuk menampilkan gambar

  let blog = {
    title: title,
    description: description,
    image: image,
    reactjs: reactjs,
    javascript: javascript,
    node: node,
    vue: vue,
    sDate: sDate,
    eDate: eDate,
  };

  blogs.push(blog);
  console.log(blogs);

  renderBlog();
}

// melakukan perulangan pada objek.
function renderBlog() {
  document.getElementById("contents").innerHTML = "";
  for (let dataBlog = 0; dataBlog < blogs.length; dataBlog++) {
    document.getElementById("contents").innerHTML += `
            <div class="project-card">
            <div class="card-image">
              <img
                src=${blogs[dataBlog].image}
                alt="salvador"
              />
            </div>
            <h4 class="project-name">
            ${blogs[dataBlog].title}
            </h4>
            <p class="durasi">Duration: ${getDate(
              blogs[dataBlog].sDate,
              blogs[dataBlog].eDate
            )}</p>
            <p class="description">
            ${blogs[dataBlog].description}
            </p>
            <div class="icon" >
            <i class='bx bxl-react${blogs[dataBlog].reactjs}' ></i>
            <i class='bx bxl-javascript${blogs[dataBlog].javascript}' ></i>
            <i class='bx bxl-nodejs ${blogs[dataBlog].node}' ></i>
            <i class='bx bxl-vuejs ${blogs[dataBlog].vue}' ></i>
            </div>
    
            <div class="div-button-project">
              <button class="btn-aksi">edit</button>
              <button class="btn-aksi">delete</button>
            </div>
         </div>
            `;
  }
}
function getDate(sDate, eDate) {
  let startdate = new Date(sDate);
  let enddate = new Date(eDate);
  let distance = enddate - startdate;
  let milisecond = 1000;
  let second = 3600;
  let hours = 24;
  let day = Math.floor(distance / (milisecond * second * hours));
  let week = Math.floor(day / 7);
  let Month = Math.floor(day / 30);
  if (day <= 6) {
    return `${day} Day`;
  } else if (day > 30) {
    return `${Month} Month`;
  } else if (day >= 6) {
    return `${week} Week`;
  }
}
