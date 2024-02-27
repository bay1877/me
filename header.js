// Create a new paragraph element
const header_div      = document.createElement('d');
const home_header     = document.createElement('h1');
const anchor          = document.createElement('a');
const linkedin_header = document.createElement('h1');
const github_header   = document.createElement('h1');
const linkedin_link   = document.createElement('a');
const github_link     = document.createElement('a');

const linkedin_icon = document.createElement('i');
const github_icon   = document.createElement('i');


anchor.href = "/";
anchor.textContent = '🏠 Bradley Yoder';

// Append the anchor element to the home_header
home_header.appendChild(anchor);
home_header.style.textAlign = 'left';
home_header.style.paddingLeft = '2vw';

linkedin_link.href = "https://www.linkedin.com/in/bradleyyoder";
linkedin_header.appendChild(linkedin_icon);
linkedin_link.appendChild(linkedin_header);

github_link.href = "https://github.com/bay1877";
github_header.appendChild(github_icon);
github_link.appendChild(github_header);

linkedin_icon.classList.add('fa-brands', 'fa-linkedin');
github_icon.classList.add('fa-brands', 'fa-github');

header_div.classList.add('header');
header_div.appendChild(home_header);
header_div.appendChild(linkedin_link);
header_div.appendChild(github_link);

// Append the paragraph to a container element
const body = document.getElementsByTagName('body')[0];
body.appendChild(header_div);
