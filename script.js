 const movies = [
      {id:1,title:'Dangal',year:2016,lang:'Hindi',rating:'8.4',desc:'Wrestling story of two brothers trained by their father.',img:'image/Dangal.png'},
      {id:2,title:'3 Idiots',year:2009,lang:'Hindi',rating:'8.3',desc:'College friends on a journey to find their lost buddy.',img:'https://picsum.photos/seed/3idiots/500/750'},
      {id:3,title:'Shershaah',year:2021,lang:'Hindi',rating:'7.8',desc:'Biopic of Captain Vikram Batra.',img:'https://picsum.photos/seed/shershaah/500/750'},
      {id:4,title:'Lagaan',year:2001,lang:'Hindi',rating:'8.1',desc:'Villagers take on British officers in a cricket match.',img:'https://picsum.photos/seed/lagaan/500/750'},
      {id:5,title:'The Great Escape',year:1963,lang:'English',rating:'8.2',desc:'Allied prisoners plan a spectacular break from a WWII camp.',img:'https://picsum.photos/seed/greatescape/500/750'},
      {id:6,title:'Inception',year:2010,lang:'English',rating:'8.8',desc:'A thief who steals corporate secrets through dream-sharing.',img:'https://picsum.photos/seed/inception/500/750'},
      {id:7,title:'Interstellar',year:2014,lang:'English',rating:'8.6',desc:'Explorers travel through a wormhole in space.',img:'https://picsum.photos/seed/interstellar/500/750'},
      {id:8,title:'The Dark Knight',year:2008,lang:'English',rating:'9.0',desc:'Batman faces the Joker in Gotham City.',img:'https://picsum.photos/seed/darkknight/500/750'},
      {id:9,title:'Bahubali: The Beginning',year:2015,lang:'Hindi',rating:'8.0',desc:'Epic tale of a mysterious hero and a kingdom.',img:'https://picsum.photos/seed/bahubali1/500/750'},
      {id:10,title:'Bahubali 2',year:2017,lang:'Hindi',rating:'8.2',desc:'The conclusion of the Bahubali saga.',img:'https://picsum.photos/seed/bahubali2/500/750'},
      {id:11,title:'The Shawshank Redemption',year:1994,lang:'English',rating:'9.3',desc:'Two imprisoned men bond over years, finding solace.',img:'https://picsum.photos/seed/shawshank/500/750'},
      {id:12,title:'Piku',year:2015,lang:'Hindi',rating:'7.6',desc:'A daughter cares for her aging, eccentric father.',img:'https://picsum.photos/seed/piku/500/750'},
      {id:13,title:'Zindagi Na Milegi Dobara',year:2011,lang:'Hindi',rating:'8.2',desc:'Three friends go on a life-changing road trip.',img:'https://picsum.photos/seed/znmd/500/750'},
      {id:14,title:'Taare Zameen Par',year:2007,lang:'Hindi',rating:'8.4',desc:'A boy with dyslexia finds a supportive teacher.',img:'https://picsum.photos/seed/taare/500/750'},
      {id:15,title:'Avengers: Endgame',year:2019,lang:'English',rating:'8.4',desc:'Superheroes assemble for a final battle.',img:'https://picsum.photos/seed/endgame/500/750'},
      {id:16,title:'The Matrix',year:1999,lang:'English',rating:'8.7',desc:'A hacker learns about the true nature of reality.',img:'https://picsum.photos/seed/matrix/500/750'},
      {id:17,title:'Spider-Man: No Way Home',year:2021,lang:'English',rating:'8.0',desc:'Spider-Man faces multiverse consequences.',img:'https://picsum.photos/seed/spiderman/500/750'},
      {id:18,title:'Kahaani',year:2012,lang:'Hindi',rating:'8.1',desc:'A pregnant woman searches for her missing husband in Kolkata.',img:'https://picsum.photos/seed/kahaani/500/750'},
      {id:19,title:'Andhadhun',year:2018,lang:'Hindi',rating:'8.3',desc:'A blind pianist gets entangled in a crime.',img:'https://picsum.photos/seed/andhadhun/500/750'},
      {id:21,title:'Fight Club',year:1999,lang:'English',rating:'8.8',desc:'An insomniac forms an underground fight club.',img:'https://picsum.photos/seed/fightclub/500/750'},
      {id:22,title:'Gladiator',year:2000,lang:'English',rating:'8.5',desc:'A betrayed Roman general fights as a gladiator.',img:'https://picsum.photos/seed/gladiator/500/750'},
      {id:23,title:'Queen',year:2013,lang:'Hindi',rating:'8.2',desc:'A woman goes on her honeymoon alone and rediscovers herself.',img:'https://picsum.photos/seed/queen/500/750'},
      {id:24,title:'Barfi!',year:2012,lang:'Hindi',rating:'8.1',desc:'A charming story about love and innocence.',img:'https://picsum.photos/seed/barfi/500/750'},
      {id:25,title:'The Godfather',year:1972,lang:'English',rating:'9.2',desc:'Crime family saga and the transformation of Michael Corleone.',img:'https://picsum.photos/seed/godfather/500/750'},
      {id:26,title:'Jai Bhim',year:2021,lang:'Hindi',rating:'8.9',desc:'A powerful courtroom drama about injustice.',img:'https://picsum.photos/seed/jaibhim/500/750'},
      {id:27,title:'Koi... Mil Gaya',year:2003,lang:'Hindi',rating:'6.4',desc:'A developmentally delayed young man meets an alien.',img:'https://picsum.photos/seed/koi/500/750'},
      {id:28,title:'Titanic',year:1997,lang:'English',rating:'7.8',desc:'A tragic love story aboard the doomed Titanic.',img:'https://picsum.photos/seed/titanic/500/750'},
      {id:29,title:'Super 30',year:2019,lang:'Hindi',rating:'8.0',desc:'A teacher trains underprivileged students for IIT.',img:'https://picsum.photos/seed/super30/500/750'},
      {id:30,title:'The Prestige',year:2006,lang:'English',rating:'8.5',desc:'Two rival magicians fight to create the ultimate illusion.',img:'https://picsum.photos/seed/prestige/500/750'},
      {id:31,title:'Chhichhore',year:2019,lang:'Hindi',rating:'8.3',desc:'College friends reunite to help a young man.',img:'https://picsum.photos/seed/chhichhore/500/750'},
      {id:32,title:'Gully Boy',year:2019,lang:'Hindi',rating:'8.0',desc:'An aspiring street rapper rises from Mumbai slums.',img:'https://picsum.photos/seed/gullyboy/500/750'},
      {id:33,title:'Back to the Future',year:1985,lang:'English',rating:'8.5',desc:'A teen travels back in time in a DeLorean.',img:'https://picsum.photos/seed/bttf/500/750'},
      {id:34,title:'Mission: Impossible – Fallout',year:2018,lang:'English',rating:'7.7',desc:'Ethan Hunt races to avert global disaster.',img:'https://picsum.photos/seed/mi6/500/750'},
      {id:35,title:'PK',year:2014,lang:'Hindi',rating:'8.1',desc:'An alien questions human customs and religions.',img:'https://picsum.photos/seed/pk/500/750'},
      {id:36,title:'Drishyam',year:2015,lang:'Hindi',rating:'8.2',desc:'A thriller about a man protecting his family.',img:'https://picsum.photos/seed/drishyam/500/750'},
      {id:37,title:'Whiplash',year:2014,lang:'English',rating:'8.5',desc:'A young drummer endures a ruthless teacher.',img:'https://picsum.photos/seed/whiplash/500/750'},
      {id:38,title:'The Lion King',year:1994,lang:'English',rating:'8.5',desc:'A young lion prince flees after his father is killed.',img:'https://picsum.photos/seed/lionking/500/750'},
      {id:40,title:'Dil Chahta Hai',year:2001,lang:'Hindi',rating:'8.1',desc:'Three friends navigate love and life after college.',img:'https://picsum.photos/seed/dilchahtahai/500/750'}
    ];

    const sectionsConfig = [
      {key:'trending',title:'Trending Now',filter: m=>true},
      {key:'top',title:'Top Picks',filter: m=>parseFloat(m.rating)>=8.3},
      {key:'bollywood',title:'Bollywood Hits',filter: m=>m.lang==='Hindi'},
      {key:'hollywood',title:'Hollywood Blockbusters',filter: m=>m.lang==='English'}
    ];

    const sectionsEl = document.getElementById('sections');

    function createSection(section){
      const sec = document.createElement('div'); sec.className='section';
      const h = document.createElement('h3'); h.textContent = section.title; sec.appendChild(h);

      const row = document.createElement('div'); row.className='row';
      const rowInner = document.createElement('div'); rowInner.className='row-inner';

      const left = document.createElement('div'); 
      left.className='arrow left'; 
      left.innerHTML='&#9664;'; 
      left.addEventListener('click', ()=>scrollRow(rowInner,-320));

      const right = document.createElement('div'); 
      right.className='arrow right'; 
      right.innerHTML='&#9654;'; 
      right.addEventListener('click', ()=>scrollRow(rowInner,320));

      const items = movies.filter(section.filter).slice(0,20); // limit per row
      items.forEach(m=>{
        const c = document.createElement('div'); c.className='card';
        c.innerHTML = `<img loading="lazy" src="${m.img}" alt="${m.title}"/><div class="card-title">${m.title} <div class='muted' style='font-size:12px'>${m.year} • ${m.lang}</div></div>`;
        c.addEventListener('click', ()=>openModal(m));
        rowInner.appendChild(c);
      });

      row.appendChild(left); row.appendChild(rowInner); row.appendChild(right);
      sec.appendChild(row);
      return sec;
    }

    function renderSections(){
      sectionsEl.innerHTML='';
      sectionsConfig.forEach(s=>{
        sectionsEl.appendChild(createSection(s));
      });
    }

    function scrollRow(rowInner, delta){
      rowInner.scrollBy({left: delta, behavior: 'smooth'});
    }

    // initial render
    renderSections();

    const heroTitle = document.getElementById('hero-title');
    const heroMeta = document.getElementById('hero-meta');
    const hero = document.getElementById('hero');
    const featured = movies[0];
    heroTitle.textContent = `Featured: ${featured.title}`;
    heroMeta.textContent = `${featured.year} • ${featured.lang}`;
    hero.style.backgroundImage = `linear-gradient(90deg, rgba(6,6,6,0.85), rgba(6,6,6,0.2)), url('${featured.img}')`;

    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalYear = document.getElementById('modal-year');
    const modalMeta = document.getElementById('modal-meta');
    const modalDesc = document.getElementById('modal-desc');
    const modalRating = document.getElementById('modal-rating');
    const modalClose = document.getElementById('modal-close');

    function openModal(m){
      modalImg.src = m.img; modalTitle.textContent = m.title; modalYear.textContent = m.year; modalMeta.textContent = `${m.lang}`; modalDesc.textContent = m.desc; modalRating.textContent = m.rating;
      modal.classList.add('open');
    }
    modalClose.addEventListener('click', ()=>modal.classList.remove('open'));
    modal.addEventListener('click', (e)=>{ if(e.target===modal) modal.classList.remove('open') });

    const search = document.getElementById('search');
    search.addEventListener('input', ()=>{
      const q = search.value.trim().toLowerCase();
      if(!q){ renderSections(); return }
      const filtered = movies.filter(m=>m.title.toLowerCase().includes(q));
      sectionsEl.innerHTML = '';
      const sec = document.createElement('div'); sec.className='section';
      const h = document.createElement('h3'); h.textContent = `Search results for "${q}"`; sec.appendChild(h);
      const row = document.createElement('div'); row.className='row';
      const rowInner = document.createElement('div'); rowInner.className='row-inner';
      filtered.forEach(m=>{
        const c = document.createElement('div'); c.className='card';
        c.innerHTML = `<img loading="lazy" src="${m.img}" alt="${m.title}"/><div class="card-title">${m.title} <div class='muted' style='font-size:12px'>${m.year} • ${m.lang}</div></div>`;
        c.addEventListener('click', ()=>openModal(m));
        rowInner.appendChild(c);
      });
      row.appendChild(rowInner); sec.appendChild(row); sectionsEl.appendChild(sec);
    });

    document.addEventListener('keydown', e=>{ if(e.key==='Escape') modal.classList.remove('open') });