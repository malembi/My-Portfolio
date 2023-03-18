const cards = [
  // card 1
  {
    id: 1,
    title: 'Tonic',
    company: 'CANOPY',
    post: 'Back End Dev',
    year: 2019,
    image: 'Images./Portfolio.png',
    technologies: ['html', 'css', 'javascript'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    liveVersion: 'https://malembi.github.io/My-Portfolio/',
    githubLink: 'https://github.com/malembi/My-Portfolio',
  },

  // card 2
  {
    id: 2,
    title: 'Muti-Post-Stories',
    company: 'FACEBOOK',
    post: 'Full Stack Dev',
    year: 2020,
    image: 'Images./Snapshoot Portfolio.png',
    technologies: ['html', 'bootstrap', 'javascript'],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    liveVersion: 'https://malembi.github.io/My-Portfolio/',
    githubLink: 'https://github.com/malembi/My-Portfolio',
  },

  // card 3
  {
    id: 3,
    title: 'Facebook 360',
    company: 'FACEBOOK',
    post: 'Full Stack Dev',
    year: 2021,
    image: 'Images./Snapshoot Portfolio (1).png',
    technologies: ['html', 'Ruby', 'javascript'],
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    liveVersion: 'https://malembi.github.io/My-Portfolio/',
    githubLink: 'https://github.com/malembi/My-Portfolio',
  },

  // card 4
  {
    id: 4,
    title: 'Uber Navigation',
    company: 'UBER',
    post: 'Full Stack Dev',
    year: 2022,
    image: 'Images./Snapshoot Portfolio (2).png',
    technologies: ['html', 'bootstrap', 'javascript'],
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    liveVersion: 'https://malembi.github.io/My-Portfolio/',
    githubLink: 'https://github.com/malembi/My-Portfolio',
  },
];
cards.forEach((card) => {
  const main = document.querySelector('#main');

  const grid = document.createElement('div');
  grid.classList.add('card');
  main.append(grid);

  const image = document.createElement('img');
  image.classList.add('image');
  image.src = card.image;
  image.alt = 'img';
  grid.append(image);

  const details = document.createElement('div');
  details.classList.add('details');
  grid.append(details);

  const item = document.createElement('div');
  item.classList.add('item');
  details.append(item);

  const title = document.createElement('div');
  title.classList.add('title');
  title.textContent = card.title;
  item.append(title);

  const info = document.createElement('div');
  info.classList.add('info');
  title.append(info);

  const company = document.createElement('span');
  company.classList.add('info-active');
  company.textContent = card.company;
  info.append(company);

  const dot = document.createElement('img');
  dot.classList.add('dot');
  dot.src = 'Images./Counter (1).png';
  dot.alt = 'dot';
  info.append(dot);

  const role = document.createElement('span');
  role.textContent = card.post;
  info.append(role);

  const dot2 = document.createElement('img');
  dot2.classList.add('dot');
  dot2.src = 'Images./Counter (1).png';
  dot2.alt = 'dot';
  info.append(dot2);

  const year = document.createElement('span');
  year.textContent = card.year;
  info.append(year);

  const description = document.createElement('p');
  description.classList.add('descrip', 'item');
  description.textContent = card.description;
  details.append(description);

  const tags = document.createElement('ul');
  tags.classList.add('Tags', 'item');
  details.append(tags);

  // loop though the technologies
  for (let j = 0; j < card.technologies.length; j += 1) {
    const tag = document.createElement('li');
    tag.classList.add('tag');
    tag.textContent = card.technologies[j];
    tags.append(tag);
  }

  const action = document.createElement('div');
  action.classList.add('action');
  details.append(action);

  const Modal = document.createElement('div');
  Modal.classList.add('modal2');
  grid.append(Modal);

  const button = document.createElement('button');
  button.classList.add('btn');
  button.id = `card-${card.id}`;
  button.textContent = 'See Project';
  action.append(button);
  button.addEventListener('click', () => {
    Modal.style.display = 'block';
  });

  // ------card popup modal-----------//

  const modalCard = document.createElement('div');
  modalCard.classList.add('m-card');
  Modal.append(modalCard);

  const closeBtn = document.createElement('img');
  closeBtn.classList.add('cbtn');
  closeBtn.alt = 'close';
  closeBtn.src = 'Images./2.png';
  modalCard.append(closeBtn);
  closeBtn.addEventListener('click', () => {
    Modal.style.display = ' none';
  });

  const mTitle = document.createElement('h2');
  mTitle.classList.add('m-t');
  modalCard.append(mTitle);
  mTitle.innerText = card.title;

  const comp = document.createElement('p');
  comp.classList.add('canopy');
  modalCard.append(comp);
  comp.innerText = card.company;

  const sep = document.createElement('img');
  sep.classList.add('m-dot');
  sep.src = 'Images./Counter (1).png';
  sep.alt = 'dot';
  modalCard.append(sep);

  const Role = document.createElement('p');
  Role.classList = ('m-role');
  modalCard.append(Role);
  Role.innerText = card.post;

  const sep2 = document.createElement('img');
  sep2.classList.add('m-dot2');
  sep2.src = 'Images./Counter (1).png';
  sep2.alt = 'dot';
  modalCard.append(sep2);

  const Year = document.createElement('span');
  Year.classList.add('m-year');
  Year.textContent = card.year;
  modalCard.append(Year);

  const mImage = document.createElement('img');
  mImage.classList.add('m-image');
  mImage.src = card.image;
  mImage.alt = 'img';
  modalCard.append(mImage);

  const Details = document.createElement('p');
  Details.classList.add('lorem');
  modalCard.append(Details);
  Details.innerText = card.details;
  
  const techs = document.createElement('ul');
  techs.classList.add('m-Tags');
  modalCard.append(techs);

  for (let j = 0; j < card.technologies.length; j += 1) {
    const mTech = document.createElement('li');
    mTech.classList.add('m-tag');
    mTech.textContent = card.technologies[j];
    techs.append(mTech);
  }
  
  const mBtn = document.createElement('button');
  mBtn.classList.add('m-btn');
  modalCard.append(mBtn);
  mBtn.textContent = 'See live';

  const bImg = document.createElement('img');
  bImg.classList.add('bImg');
  bImg.src = 'Images./Icon.png';
  bImg.alt = 'img';
  mBtn.append(bImg);

  const mBtn2 = document.createElement('button');
  mBtn2.classList.add('m-btn2');
  modalCard.append(mBtn2);
  mBtn2.textContent = 'See source';

  const bImg2 = document.createElement('img');
  bImg2.classList.add('bImg');
  bImg2.src = 'Images./cat.png';
  bImg2.alt = 'img';
  mBtn2.append(bImg2);
});

// const popup = (id,title,description,image,technologies,liveVersion,githubLink) =>
// `<div class="overlay" id="popup-${id}">
// <div class="popup-cont">
// <div class="popupImgCont">
// <img class="popup-img" src="popup-${id}"/>
// </div>
// <div class="closeBtnContainer">
// <span class="closeBtn" id="closeBtn-${id}">
// <img src="Images./2.png"/>
// </span>
// <img class="desktopCloseBtn" src="" id="deskCloseBtn-${id}"/>
// </div>
// <div class="popDiv">
//         <div class="popDiv1">
//           <h1 class="popTitle">${title}</h1>
//           <div class="popDiv2">
//           <p class="popPara">${description}</p>
//         </div>
//           <ul class="techList">
//             <li class="techItem">${technologies[0]}</li>
//             <li class="techItem">${technologies[1]}</li>
//             <li class="techItem">${technologies[2]}</li>
//           </ul>
//         </div>

//         <div class="popDiv3 popupBtnContainer">
//           <button class="popupBtn">
//             <a href="${liveVersion}">See Live <img src="Images./Icon.png"/></a>

//           </button>
//           <button class="popupBtn">
//             <a href="${githubLink}">See Source <img src="Images./cat.png"/></a>

//           </button>
//         </div>
//       </div>
//     </div>
//   </div>`;

// cards.forEach((card) => {
// works.innerHTML += popup(
//   card.id,
//   card.title,
//   card.description,
//   card.image,
//   card.technologies,
//   card.liveVersion,
//   card.githubLink,
// );
// });

// cards.forEach((card) => {
//   const showBtn = document.getElementById(`card-${card.id}`);
//   showBtn.addEventListener('click',() => {
//     const showPop = document.getElementById(`popup-${card.description}`);
//     showPop.style.display = 'flex';
//   });
// });

// cards.forEach((card) => {
//   const closeBtn = document.getElementById(`closeBtn-${card.id}`);
//   closeBtn.addEventListener('click', () => {
//     const showpop2 = document.getElementById(`popup-${card.id}`);
//     showpop2.style.display = 'none';
//   });
// });
// cards.forEach((card) => {
//   const deskCloseBtn = document.getElementById(`deskCloseBtn-${card.id}`);
//   deskCloseBtn.addEventListener('click', () => {
//     const showpop3 = document.getElementById(`popup-${card.id}`);
//     showpop3.style.display = 'none';
//   });
// });
