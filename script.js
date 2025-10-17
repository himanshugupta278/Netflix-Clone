// Data: movies and tv shows (each tv show has episodes)
 const movies = [
      {id:1,title:'Lagaan',year:2001,lang:'Hindi',rating:'8.1',desc:'Villagers take on British officers in a cricket match.',img:'image/Lagaan.jpg'},
      {id:2,title:'3 Idiots',year:2009,lang:'Hindi',rating:'8.3',desc:'College friends on a journey to find their lost buddy.',img:'image/idiots.jpg'},
      {id:3,title:'Shershaah',year:2021,lang:'Hindi',rating:'7.8',desc:'Biopic of Captain Vikram Batra.',img:'image/Shershaah.jpg'},
      {id:4,title:'Dangal',year:2016,lang:'Hindi',rating:'8.4',desc:'Wrestling story of two brothers trained by their father.',img:'image/Dangal.jpg'},
      {id:5,title:'The Great Escape',year:1963,lang:'English',rating:'8.2',desc:'Allied prisoners plan a spectacular break from a WWII camp.',img:'image/Great.jpg'},
      {id:6,title:'Inception',year:2010,lang:'English',rating:'8.8',desc:'A thief who steals corporate secrets through dream-sharing.',img:'image/inception-2010.webp'},
      {id:7,title:'Interstellar',year:2014,lang:'English',rating:'8.6',desc:'Explorers travel through a wormhole in space.',img:'image/Interstellar.jpeg'},
      {id:8,title:'The Dark Knight',year:2008,lang:'English',rating:'9.0',desc:'Batman faces the Joker in Gotham City.',img:'image/Knight.jpg'},
      {id:9,title:'Bahubali: The Beginning',year:2015,lang:'Hindi',rating:'8.0',desc:'Epic tale of a mysterious hero and a kingdom.',img:'image/bahubali.jpg'},
      {id:10,title:'Bahubali 2',year:2017,lang:'Hindi',rating:'8.2',desc:'The conclusion of the Bahubali saga.',img:'image/Bahubali2.jpg'},
      {id:11,title:'The Shawshank Redemption',year:1994,lang:'English',rating:'9.3',desc:'Two imprisoned men bond over years, finding solace.',img:'image/Shawshank.jpg'},
      {id:12,title:'Piku',year:2015,lang:'Hindi',rating:'7.6',desc:'A daughter cares for her aging, eccentric father.',img:'image/Piku.jpg'},
      {id:13,title:'Zindagi Na Milegi Dobara',year:2011,lang:'Hindi',rating:'8.2',desc:'Three friends go on a life-changing road trip.',img:'image/zind.jpg'},
      {id:14,title:'Taare Zameen Par',year:2007,lang:'Hindi',rating:'8.4',desc:'A boy with dyslexia finds a supportive teacher.',img:'image/Taare.jpg'},
      {id:15,title:'Avengers: Endgame',year:2019,lang:'English',rating:'8.4',desc:'Superheroes assemble for a final battle.',img:'image/Avengers.jpeg'},
      {id:16,title:'The Matrix',year:1999,lang:'English',rating:'8.7',desc:'A hacker learns about the true nature of reality.',img:'image/Matrix.jpeg'},
      {id:17,title:'Spider-Man: No Way Home',year:2021,lang:'English',rating:'8.0',desc:'Spider-Man faces multiverse consequences.',img:'image/Spider-Man.jpg'},
      {id:18,title:'Kahaani',year:2012,lang:'Hindi',rating:'8.1',desc:'A pregnant woman searches for her missing husband in Kolkata.',img:'image/kahaani.jpg'},
      {id:19,title:'Andhadhun',year:2018,lang:'Hindi',rating:'8.3',desc:'A blind pianist gets entangled in a crime.',img:'image/Andhadhun.jpg'},
      {id:21,title:'Fight Club',year:1999,lang:'English',rating:'8.8',desc:'An insomniac forms an underground fight club.',img:'image/Fight-Club.jpg'},
      {id:22,title:'Gladiator',year:2000,lang:'English',rating:'8.5',desc:'A betrayed Roman general fights as a gladiator.',img:'image/Gladiator.jpeg'},
      {id:23,title:'Queen',year:2013,lang:'Hindi',rating:'8.2',desc:'A woman goes on her honeymoon alone and rediscovers herself.',img:'image/Queen.jpg'},
      {id:24,title:'Barfi!',year:2012,lang:'Hindi',rating:'8.1',desc:'A charming story about love and innocence.',img:'image/Barfi!.jpg'},
      {id:25,title:'The Godfather',year:1972,lang:'English',rating:'9.2',desc:'Crime family saga and the transformation of Michael Corleone.',img:'image/Godfather.jpeg'},
      {id:26,title:'Jai Bhim',year:2021,lang:'Hindi',rating:'8.9',desc:'A powerful courtroom drama about injustice.',img:'image/Jai-Bhim.jpeg'},
      {id:27,title:'Koi... Mil Gaya',year:2003,lang:'Hindi',rating:'6.4',desc:'A developmentally delayed young man meets an alien.',img:'image/koi-mil-gaya.jpg'},
      {id:28,title:'Titanic',year:1997,lang:'English',rating:'7.8',desc:'A tragic love story aboard the doomed Titanic.',img:'image/Titanic1.jpg'},
      {id:29,title:'Super 30',year:2019,lang:'Hindi',rating:'8.0',desc:'A teacher trains underprivileged students for IIT.',img:'image/Super-30.jpeg'},
      {id:30,title:'The Prestige',year:2006,lang:'English',rating:'8.5',desc:'Two rival magicians fight to create the ultimate illusion.',img:'image/Prestige.jpeg'},
      {id:31,title:'Chhichhore',year:2019,lang:'Hindi',rating:'8.3',desc:'College friends reunite to help a young man.',img:'image/Chhichhore.jpg'},
      {id:32,title:'Gully Boy',year:2019,lang:'Hindi',rating:'8.0',desc:'An aspiring street rapper rises from Mumbai slums.',img:'image/Gully-Boy.jpg'},
      {id:33,title:'Back to the Future',year:1985,lang:'English',rating:'8.5',desc:'A teen travels back in time in a DeLorean.',img:'image/Future.jpeg'},
      {id:34,title:'Mission: Impossible – Fallout',year:2018,lang:'English',rating:'7.7',desc:'Ethan Hunt races to avert global disaster.',img:'image/Mission.jpg'},
      {id:35,title:'PK',year:2014,lang:'Hindi',rating:'8.1',desc:'An alien questions human customs and religions.',img:'image/PK.jpg'},
      {id:36,title:'Drishyam',year:2015,lang:'Hindi',rating:'8.2',desc:'A thriller about a man protecting his family.',img:'image/Drishyam.jpeg'},
      {id:37,title:'Whiplash',year:2014,lang:'English',rating:'8.5',desc:'A young drummer endures a ruthless teacher.',img:'image/Whiplash.jpeg'},
      {id:38,title:'The Lion King',year:1994,lang:'English',rating:'8.5',desc:'A young lion prince flees after his father is killed.',img:'image/resize-lion-king.jpg'},
      {id:40,title:'Dil Chahta Hai',year:2001,lang:'Hindi',rating:'8.1',desc:'Three friends navigate love and life after college.',img:'image/Dil.jpg'}
    ];
    const hero = document.getElementById('hero');
const featured = movies[0]; // first movie

hero.style.backgroundImage = `
  linear-gradient(90deg, rgba(6,6,6,0.85), rgba(6,6,6,0.2)),
  url(${featured.img})
`;
hero.style.backgroundSize = "cover";
hero.style.backgroundPosition = "center";
hero.style.backgroundRepeat = "no-repeat";

document.getElementById('hero-title').textContent = `Featured: ${featured.title}`;
document.getElementById('hero-meta').textContent = `${featured.year} • ${featured.lang} • ${featured.rating}`;

const tvShows = [
  {id:'t1', title:'Sacred Games', year:2018, lang:'Hindi', rating:'8.6', desc:'Crime-thriller set in Mumbai.', img:'image/Sacred-Games.jpg',
    episodes:[
      {ep:1, title:'Episode 1 - The Beginning', desc:'Intro to characters.'},
      {ep:2, title:'Episode 2 - Dark Paths', desc:'Story deepens.'},
      {ep:3, title:'Episode 3 - Choices', desc:'Tensions rise.'}
    ]
  },
  {id:'t2', title:'Mirzapur', year:2018, lang:'Hindi', rating:'8.4', desc:'Crime saga with power struggles.', img:'image/Mirzapur1.jpg',
    episodes:[
      {ep:1, title:'Episode 1 - Coal Mafia', desc:'Introduction to Mirzapur.'},
      {ep:2, title:'Episode 2 - Revenge', desc:'Conflict begins.'}
    ]
  },
  {id:'t3', title:'Stranger Things', year:2016, lang:'English', rating:'8.7', desc:'Kids face supernatural forces.', img:'image/Stranger-Things.jpg',
    episodes:[
      {ep:1, title:'Chapter One: The Vanishing', desc:'Mysterious disappearance.'},
      {ep:2, title:'Chapter Two: The Search', desc:'Search begins.'},
      {ep:3, title:'Chapter Three: New Friend', desc:'Unlikely alliances.'}
    ]
  },
  {id:'t4', title:'Money Heist', year:2017, lang:'English', rating:'8.3', desc:'High-stakes heist drama.', img:'image/money.jpg',
    episodes:[
      {ep:1, title:'Part 1: The Plan', desc:'Assembling the crew.'},
      {ep:2, title:'Part 2: The Heist', desc:'Execution begins.'}
    ]
  },
  {id:'t5', title:'The Crown', year:2016, lang:'English', rating:'8.6', desc:'Biography of the British royal family.', img:'image/Crown.jpg',
    episodes:[
      {ep:1, title:'Wolferton Splash', desc:'Royal introduction.'},
      {ep:2, title:'Hyde Park Corner', desc:'Early struggles.'}
    ]
  }
];

// State
let currentTab = 'home'; // home, movies, tvshows, mylist
let myList = JSON.parse(localStorage.getItem('myList') || '[]'); // array of {id,type}
const sectionsEl = document.getElementById('sections');
const searchInput = document.getElementById('search');
const mylistCountEl = document.getElementById('mylist-count');

// Utils
function saveMyList(){ localStorage.setItem('myList', JSON.stringify(myList)); updateMyListCount(); }
function updateMyListCount(){ mylistCountEl.textContent = myList.length; }

// Rendering
function createCard(item, type){
  const c = document.createElement('div'); c.className='card';
  c.innerHTML = `<img src="${item.img}" alt="${item.title}"><div class="card-title">${item.title}<div class="muted">${item.year} • ${item.lang}</div></div>`;
  c.addEventListener('click', ()=> openModal(item, type));
  return c;
}

document.getElementById('play-hero').addEventListener('click', ()=>{
  openModal(featured, 'movie');

  const overlay = document.createElement('div');
  overlay.style.position = 'absolute';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.background = 'rgba(0,0,0,0.7)';
  overlay.style.color = '#fff';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.fontSize = 'clamp(16px, 4vw, 28px)'; // font responsive
  overlay.style.zIndex = '10';
  overlay.style.textAlign = 'center';
  overlay.textContent = `Playing ${featured.title}... (Demo)`;
  
  hero.appendChild(overlay);
  setTimeout(()=> overlay.remove(), 2000);
});



document.getElementById('info-hero').addEventListener('click', ()=>{
  openModal(featured, 'movie');
});


function renderSections(){
  sectionsEl.innerHTML = '';
  if(currentTab === 'home'){
    // Home: mix a few rows (Trending: top rated, Movies, TV Shows)
    const topRated = [...movies, ...tvShows].sort((a,b)=>parseFloat(b.rating)-parseFloat(a.rating)).slice(0,12);
    appendRow('Trending Now', topRated);
    appendRow('Movies Picks', movies.slice(0,20), 'movie');
    appendRow('TV Shows', tvShows.slice(0,20), 'show');
  } else if(currentTab === 'movies'){
    appendRow('All Movies', movies, 'movie');
  } else if(currentTab === 'tvshows'){
    appendRow('All TV Shows', tvShows, 'show');
  } else if(currentTab === 'mylist'){
    const items = myList.map(x => {
      return x.type==='movie' ? movies.find(m=>m.id===x.id) : tvShows.find(t=>t.id===x.id);
    }).filter(Boolean);
    appendRow('My List', items);
  }
}

function appendRow(title, items, forceType){
  const sec = document.createElement('div'); sec.className='section';
  const h = document.createElement('h3'); h.textContent = title; sec.appendChild(h);

  const row = document.createElement('div'); row.className='row';
  const left = document.createElement('div'); left.className='arrow left'; left.innerHTML='&#9664;';
  const right = document.createElement('div'); right.className='arrow right'; right.innerHTML='&#9654;';

  const inner = document.createElement('div'); inner.className='row-inner';
  items.forEach(it=>{
    const type = forceType==='movie' ? 'movie' : (forceType==='show' ? 'show' : (movies.find(m=>m.id===it.id)?'movie':'show'));
    inner.appendChild(createCard(it, type));
  });

  left.addEventListener('click', ()=> inner.scrollBy({left:-320,behavior:'smooth'}));
  right.addEventListener('click', ()=> inner.scrollBy({left:320,behavior:'smooth'}));

  row.appendChild(left); row.appendChild(inner); row.appendChild(right);
  sec.appendChild(row);
  sectionsEl.appendChild(sec);
}

// Modal
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalYear = document.getElementById('modal-year');
const modalMeta = document.getElementById('modal-meta');
const modalDesc = document.getElementById('modal-desc');
const modalRating = document.getElementById('modal-rating');
const extraArea = document.getElementById('extra-area');
const addToListBtn = document.getElementById('add-to-list');

let lastOpened = null;
function openModal(item, type){
  lastOpened = {item,type};
  modal.classList.add('open');
  modalImg.src = item.img;
  modalTitle.textContent = item.title;
  modalYear.textContent = item.year;
  modalMeta.textContent = item.lang + (item.seasons?(' • Seasons: '+item.seasons):'');
  modalDesc.textContent = item.desc;
  modalRating.textContent = item.rating;
  // extra area: if show -> list episodes; if movie -> show simple info
  extraArea.innerHTML = '';
  if(type==='show' && item.episodes && item.episodes.length){
    const epList = document.createElement('div');
    epList.innerHTML = '<strong>Episodes:</strong>';
    item.episodes.forEach(ep=>{
      const b = document.createElement('button');
      b.className = 'btn secondary';
      b.style.margin = '6px 6px 0 0';
      b.textContent = ep.title;
      b.addEventListener('click', ()=> {
        // When episode clicked, show episode details inside modal (as requested)
        modalTitle.textContent = item.title + ' — ' + ep.title;
        modalDesc.textContent = ep.desc;
        // optionally mark that we are viewing episode
      });
      epList.appendChild(b);
    });
    extraArea.appendChild(epList);
  } else {
    extraArea.innerHTML = '<em>Click play to watch (demo)</em>';
  }
  // update add-to-list button text based on presence
  const exists = myList.find(x=>x.id===item.id);
  addToListBtn.textContent = exists ? 'Remove from My List' : '+ My List';
  addToListBtn.onclick = ()=> toggleMyList(item, type);
}

document.getElementById('modal-close').addEventListener('click', ()=> modal.classList.remove('open'));
modal.addEventListener('click', (e)=> { if(e.target===modal) modal.classList.remove('open'); });
document.addEventListener('keydown', e=> { if(e.key==='Escape') modal.classList.remove('open'); });

// My List toggling
function toggleMyList(item, type){
  const idx = myList.findIndex(x=>x.id===item.id);
  if(idx !== -1){
    myList.splice(idx,1);
  } else {
    myList.push({id:item.id, type: type==='movie' ? 'movie' : 'show'});
  }
  saveMyList();
  // update button text
  addToListBtn.textContent = myList.find(x=>x.id===item.id) ? 'Remove from My List' : '+ My List';
  renderSections();
}

// Navigation
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelectorAll('.nav-links a').forEach(x=>x.classList.remove('active'));
    a.classList.add('active');
    currentTab = a.dataset.tab;
    if(!currentTab) currentTab = a.textContent.trim().toLowerCase();
    renderSections();
  });
});

// Search (filters visible cards)
searchInput.addEventListener('input', ()=>{
  const q = searchInput.value.trim().toLowerCase();
  document.querySelectorAll('.card').forEach(card=>{
    const title = card.querySelector('.card-title').textContent.toLowerCase();
    card.style.display = title.includes(q) ? '' : 'none';
  });
});

// initial
updateMyListCount();
renderSections();
