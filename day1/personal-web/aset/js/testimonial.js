function fetchTestimonials() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
  
      xhr.open("GET", "https://api.npoint.io/37b03059009dda95802a", true);
  
      xhr.onload = function () {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          // console.log("Response :", response);
  
          resolve(response.testimonials);
        } else {
          // console.error("Error :", xhr.status);
          reject("Error :", xhr.status);
        }
      };
      xhr.onerror = () => reject("network error");
  
      xhr.send();
    });
  }
  
  const testimonialsContainer = document.getElementById("testimonialsList");
  
  const testimonialsHTML = (array) => {
    return array
      .map(
        (testimonial) => `
          <article>
          <div class="card">
          <img src="img/assets/img/coding.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${testimonial.caption}</h5>
            <p class="card-text" style="text-align: right;"> - ${testimonial.author}</p>
            <p class="card-text" style="text-align: right;"> ${testimonial.rating}★</p>
            
          </div>
        </div>
          </article>
          `
      )
      .join("");
  };
  
  async function showAllTestimonials() {
    const testimonials = await fetchTestimonials();
    console.log(testimonials);
    testimonialsContainer.innerHTML = testimonialsHTML(testimonials);
  }
  
  showAllTestimonials();
  
  async function filterTestimonialsByStar(rating) {
    const testimonials = await fetchTestimonials();
  
    const filteredTestimonials = testimonials.filter(
      (testimonial) => testimonial.rating === rating
    );
  
    console.log(filteredTestimonials);
  
    if (filteredTestimonials.length === 0) {
      return (testimonialsContainer.innerHTML = `<p>No testimonials.</p>`);
    }
  
    testimonialsContainer.innerHTML = testimonialsHTML(filteredTestimonials);
  }