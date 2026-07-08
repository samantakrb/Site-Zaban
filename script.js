  // Mobile nav toggle
  const burger = document.getElementById('burgerBtn');
  const nav = document.getElementById('mainNav');
  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
  });

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  // Generate stars + floating letter sparks in hero sky
  function buildSky(container, includeLetters){
    if(!container) return;
    const letters = ['A','ب','C','د','E'];
    const starCount = 26;
    for(let i=0;i<starCount;i++){
      const s = document.createElement('div');
      s.className = 'star';
      s.style.top = Math.random()*90 + '%';
      s.style.left = Math.random()*96 + '%';
      s.style.animationDelay = (Math.random()*3.6) + 's';
      container.appendChild(s);
    }
    if(includeLetters){
      const positions = [
        {top:'12%', left:'6%'}, {top:'22%', left:'86%'},
        {top:'62%', left:'4%'}, {top:'70%', left:'90%'},
        {top:'40%', left:'46%'}
      ];
      letters.forEach((L,i)=>{
        const el = document.createElement('div');
        el.className = 'spark-letter';
        el.textContent = L;
        el.style.top = positions[i].top;
        el.style.left = positions[i].left;
        el.style.animationDelay = (i*0.6) + 's';
        container.appendChild(el);
      });
    }
  }
  buildSky(document.getElementById('skyLayer'), true);
  buildSky(document.getElementById('skyLayer2'), false);
