let testimonials = [
    {
        author:"afdal",
        rating :5,
        caption:"bagu banet",
        Image:"my-iamge.jpg"
    },
    {
        author:"rAFI",
        rating :4,
        caption:"Aku Suka",
        Image:"my-iamge.jpg"
    },
    {
        author:"asoka",
        rating :3,
        caption:"Luamyan Bagus",
        Image:"my-iamge.jpg"
    },
];

const testimonialsContainer = document.getElementById("testimonialsList");
const testimonialsHTML = (daftarTestimoni) => {
    return daftarTestimoni
    .map(
        (testimonial) => `
        <article>
        <img src="aset/img/assets/img/coding.jpg" alt="">
        <p class="testimonial-caption-item">
          "keren buanget"
        </p>
        <p style="text-align: right;">- M Afdal</p>
        <p style="text-align: right;">5★</p>
      </article>
        `
    )
    .join("")
}
function showAllTestimonials(){
    testimonialsContainer.innerHTML = testimonialsHTML(testimonials);
}

showAllTestimonials()