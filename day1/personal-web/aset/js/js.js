function submitForm() {
  // even.preventDefault();
  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let subjek = document.getElementById("subjek").value;
  let skill = document.getElementById("skill").value;
  let pesan = document.getElementById("message").value;

  let emailTujuan = "afdalrafi990@gmail.com";

  let a = document.createElement("a");

  a.href = `mailto:${emailTujuan}?subject=${subjek}&body=${`nama saya ${nama} Skill saya ${skill} tujuan saya meng-email : ${pesan}`}`;
  a.click();
}
