// Animation js 
const ratio = 0.1;
var options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }
  const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
            // console.log('visible');
        }else{

            // console.log('invisible');
        }
    })
  }
  const observer = new IntersectionObserver(handleIntersect, options);
 document.querySelectorAll('.leftReveal').forEach(function (r) {
    observer.observe(r);
 });


// Animation js opacity

  const opacity = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('opacity-visible');
            observer.unobserve(entry.target);
            console.log('visible');
        }else{

            console.log('invisible');
        }
    })
  }
  const observateur = new IntersectionObserver(opacity, options);
  console.log(observateur);
 document.querySelectorAll('.opacity').forEach(function (r) {
    observateur.observe(r);
 })

