(()=>{'use strict';
const search=document.getElementById('picture-search'),category=document.getElementById('picture-category'),cards=[...document.querySelectorAll('.atlas-card')],count=document.getElementById('picture-count');
function filter(){const q=search.value.trim().toLocaleLowerCase(),c=category.value;let n=0;for(const card of cards){const show=(!q||card.dataset.search.includes(q))&&(!c||card.dataset.category===c);card.hidden=!show;if(show)n++;}count.textContent=n+' of '+cards.length+' picture sheets shown';}
search.addEventListener('input',filter);category.addEventListener('change',filter);filter();
})();
