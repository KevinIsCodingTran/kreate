const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
      <img src="img/kreate-logo.png" class="brand-logo" alt="">
      <div class="nav-items">
        <div class="search">
          <i class="fas fa-search"></i>
          <input type="text" class="search-box" placeholder="Search...">
        </div>
        <a href="#"><i class="fas fa-user-circle"></i></a>
        <a href="#"><i class="fas fa-shopping-cart"></i></a>
      </div>
    </div>
    <ul class="links-container">
      <li class="link-item"><a href="../kreate/index.html" class="link">Home</a></li>
      <li class="link-item"><a href="../kreate/paintings.html" class="link">Paintings</a></li>
      <li class="link-item"><a href="../kreate/figures.html" class="link">Figures</a></li>
      <li class="link-item"><a href="../kreate/tools.html" class="link">Tools</a></li>
      <li class="link-item"><a href="../kreate/index.html#about-section" class="link">About</a></li>
    </ul>
    `;
}

createNav();
