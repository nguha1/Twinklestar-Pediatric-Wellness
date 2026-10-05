const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#navigation');
const dropdown=document.querySelector('.nav-dropdown'),toggle=document.querySelector('.dropdown-toggle'),links=document.querySelector('.dropdown-links');
function setDropdown(open){toggle.setAttribute('aria-expanded',String(open));links.hidden=!open;}
function setMenu(open){menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');nav.classList.toggle('open',open);if(!open)setDropdown(false);}
menu.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));
toggle.addEventListener('click',()=>setDropdown(toggle.getAttribute('aria-expanded')!=='true'));
toggle.addEventListener('keydown',e=>{if(e.key==='ArrowDown'){e.preventDefault();setDropdown(true);links.querySelector('a').focus();}});
document.addEventListener('keydown',e=>{if(e.key!=='Escape')return;if(!links.hidden){setDropdown(false);toggle.focus();}else if(nav.classList.contains('open')){setMenu(false);menu.focus();}});
document.addEventListener('click',e=>{if(!dropdown.contains(e.target))setDropdown(false);if(!nav.contains(e.target)&&!menu.contains(e.target))setMenu(false);});
dropdown.addEventListener('focusout',e=>{if(!dropdown.contains(e.relatedTarget))setDropdown(false);});
nav.addEventListener('click',e=>{if(e.target.closest('a'))setMenu(false);});
matchMedia('(max-width:860px)').addEventListener('change',()=>setMenu(false));
document.querySelectorAll('form').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const status=form.querySelector('[role="status"]');status.textContent='This preview does not send or save information. A secure form provider must be connected before requests can be submitted.';status.focus()}));
