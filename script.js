const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
};


const options = {
  threshold: 1
};


const observer = new IntersectionObserver(onEntry, options);


const images = document.querySelectorAll(".container img.lazy");
console.log(images);
images.forEach(img => {
  observer.observe(img);
});