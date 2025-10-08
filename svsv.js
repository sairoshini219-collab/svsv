// Small interactive behaviors for SVSV
(function(){
  const demoBtn = document.getElementById('demoAction');
  const previewBox = document.getElementById('previewBox');
  const toast = document.getElementById('toast');
  const toggle = document.getElementById('toggleTheme');
  const yearEl = document.getElementById('year');
  const form = document.querySelector('#contact');
  const clear = document.getElementById('clearBtn');

  // Set current year in footer
  yearEl.textContent = new Date().getFullYear();

  // Show toast notification
  function showToast(msg){
    toast.textContent = msg || 'Done';
    toast.classList.add('show');
    setTimeout(()=>toast.classList.remove('show'),2200);
  }

  // Demo button click
  demoBtn.addEventListener('click', ()=>{
    previewBox.innerHTML = '';
    const el = document.createElement('div');
    el.textContent = '✨ SVSV demo activated';
    el.style.fontWeight = 700;
    previewBox.appendChild(el);
    previewBox.animate(
      [{transform:'translateY(6px)',opacity:0},{transform:'translateY(0)',opacity:1}],
      {duration:420,easing:'cubic-bezier(.2,.9,.2,1)'}
    );
    showToast('Demo activated');
  });

  // Theme toggle
  toggle.addEventListener('click', ()=>{
    const isLight = document.documentElement.style.getPropertyValue('--bg') === '#f7fafc';
    if(!isLight){
      // switch to light
      document.documentElement.style.setProperty('--bg','#f7fafc');
      document.documentElement.style.setProperty('--card','#ffffff');
      document.documentElement.style.setProperty('--accent','#0ea5e9');
      document.documentElement.style.setProperty('--muted','#475569');
      toggle.textContent = 'Toggle Dark';
      showToast('Light theme');
    } else {
      // switch back to dark
      document.documentElement.style.setProperty('--bg','#0f1724');
      document.documentElement.style.setProperty('--card','#0b1220');
      document.documentElement.style.setProperty('--accent','#ffb703');
      document.documentElement.style.setProperty('--muted','#94a3b8');
      toggle.textContent = 'Toggle Light';
      showToast('Dark theme');
    }
  });

  // Form submit
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    if(!name || !email){
      showToast('Please fill name & email');
      return;
    }
    // fake send
    showToast('Message sent. Thank you!');
    form.reset();
  });

  // Clear form
  clear.addEventListener('click', ()=>{
    form.reset();
    showToast('Cleared');
  });

  // Keyboard shortcut: press L to trigger demo
  window.addEventListener('keydown', (ev)=>{
    if(ev.key.toLowerCase() === 'l' && !ev.metaKey && !ev.ctrlKey){
      demoBtn.click();
    }
  });

})();
