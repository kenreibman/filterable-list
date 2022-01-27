// Get input element
const filterInput = document.querySelector('#filterInput');

// Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    // Get value of input, UPPERCASE to match what is being typed in.
    const filterValue = document.querySelector('#filterInput').value.toUpperCase();
    console.log(filterValue);

    // Get names from ul
    const ul = document.querySelector('#names');
    // Get li from ul
    const li = ul.querySelectorAll('li.collection-item');

    // Loop through collection-item li
    for(let i = 0; i < li.length; i++){
        let a = li[i].getElementsByTagName('a')[0]; // Get the names wrapped (a tag) by using getElementsbyTagName. [0] is current link
        // Check to see if filterInput matches
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) { // innerHTML grabs whatever is inside the 'a' tag. filterValue is whatever is being passed in the form. ( > -1 ) matches the letters.
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}