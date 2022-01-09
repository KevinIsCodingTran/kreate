const createFooter = () => {
  let footer = document.querySelector('footer');

  footer.innerHTML = `
  <div class="footer-content">
    <img src="img/kreate-logo.png" class="logo" alt="logo">
    <div class="contact-me">
      <a href="https://www.linkedin.com/in/kevin-tran-025530224/" class="contact fab fa-linkedin fa-3x"></a>
      <a href="https://www.facebook.com/profile.php?id=100004409498609" class="contact fab fa-facebook-square fa-3x"></a>
      <a href="https://www.instagram.com/ke_traa/?hl=en" class="contact fab fa-instagram-square fa-3x"></a>
    </div>
  </div>
  <div class="about-company">
    <h3 class="company">About the company</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices mi tempus imperdiet nulla. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Rhoncus urna neque viverra justo nec ultrices dui. Egestas fringilla phasellus faucibus scelerisque. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet.</p><br>
    <p>Platea dictumst quisque sagittis purus sit amet volutpat. Vel quam elementum pulvinar etiam non quam lacus. Turpis massa tincidunt dui ut ornare lectus sit amet. Sit amet nisl purus in mollis nunc sed id. Dolor sit amet consectetur adipiscing. Nascetur ridiculus mus mauris vitae ultricies. Netus et malesuada fames ac. Mauris sit amet massa vitae tortor. Orci nulla pellentesque dignissim enim sit. Donec ultrices tincidunt arcu non sodales neque sodales ut.
    </p><br>
    <p>Support Emails - help@kreate.com, custommersupport@kreate.com</p><br>
    <p>Telephone - (514) 123-4567</p><br>
    <p>terms & services privacy page</p><br>
  </div>
  <p class="copyright">© Copyright 2022 Kreate</p>
  `;
}

createFooter();
