function create(words) {
   const content = document.getElementById('content');
   //configure eventListener
   content.addEventListener('click', reveal);


   for (let word of words) {
      // create <div>
      // create <p>
      const div = document.createElement('div');
      const para = document.createElement('p');

      // set <p> content
      para.textContent = word;

      // configure <p> to be hidden (display: none)
      para.style.display = 'none';

      // add <p> to <div>
      div.appendChild(para);

      // add <div> to page
      content.appendChild(div);
   }

   function reveal(ev) {
      if (ev.target.tagName == 'DIV' && ev.target != content) {
         ev.target.children[0].style.display = '';
      }
   }
}