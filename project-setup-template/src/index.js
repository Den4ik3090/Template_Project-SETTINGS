import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Custom styles

// Main styles
import './styles/main.scss';
import { greeting } from './app/greeting';
import './styles/buttons.scss';
import './styles/main_section.scss';
console.log(greeting);

import { setupMainBlock } from './app/main-block';
setupMainBlock();
