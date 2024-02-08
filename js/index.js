
/*
document.addEventListener("partialsLoaded", () => {
    import("../header.js");
  });
  */

document.addEventListener('partialsLoaded', () => {
    import('./main-collections.js');
    import('./new-arrivals.js')
    import('./get-your-discount.js')
    import('./brands.js');
    import('./blog.js');
    import('./coundown.js');
});

