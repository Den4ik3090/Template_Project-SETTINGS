const app = document.querySelector('#app');
app.innerHTML = '';

app.innerHTML = `
<header class="header-container">
      <h2 class="header__title">Settings</h2>
      <div class="container setting-container">
        <div class="panel active">
          <div class="setting-title">
            <i class="fa-solid fa-user"></i>
            <h3>Account</h3>
          </div>
          <div class="setting-content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore similique officia
            minus iure blanditiis animi expedita impedit beatae voluptatum repellendus.
          </div>
        </div>
        <div class="panel">
          <div class="setting-title">
            <i class="fa-solid fa-user"></i>
            <h3>Notification</h3>
          </div>
          <div class="setting-content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ea illo quibusdam
            est, dolore dignissimos temporibus repudiandae iure doloribus qui.
          </div>
        </div>
        <div class="panel">
          <div class="setting-title">
            <i class="fa-solid fa-user"></i>
            <h3>Appearance</h3>
          </div>
          <div class="setting-content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ea illo quibusdam
            est, dolore dignissimos temporibus repudiandae iure doloribus qui.
          </div>
        </div>
        <div class="panel">
          <div class="setting-title">
            <i class="fa-solid fa-user"></i>
            <h3>Privacy & Security</h3>
          </div>
          <div class="setting-content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ea illo quibusdam
            est, dolore dignissimos temporibus repudiandae iure doloribus qui.
          </div>
        </div>
        <div class="panel">
          <div class="setting-title">
            <i class="fa-solid fa-user"></i>
            <h3>Language</h3>
          </div>
          <div class="setting-content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ea illo quibusdam
            est, dolore dignissimos temporibus repudiandae iure doloribus qui.
          </div>
        </div>
      </div>
    </header>
    <main><button class="btn btn-outline btn-info main_btn">Info</button></main>

`;

// LOGIC
export function setupMainBlock() {
  console.log('COMPLETE!');
}

const panels = document.querySelectorAll('.panel');

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    if (panel.classList.contains('active')) {
      removeActiveClasses();
    } else {
      removeActiveClasses();
      panel.classList.add('active');
    }
  });
});
