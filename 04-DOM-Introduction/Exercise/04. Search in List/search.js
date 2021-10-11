function search() {
   const elements = Array.from(document.querySelectorAll('ul li'));
   const search = document.getElementById('searchText').value;
   let matches = 0;

   elements.forEach((el) => {
      if (el.innerHTML.includes(search)) {
         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline';
         matches++;
      } else {
         el.style.fontWeight = 'normal';
         el.style.textDecoration = '';
      }
   })

   document.getElementById('result').textContent = `${matches} matches found`
}
