let myQuery = document.querySelector("#querySelector");
myQuery[`style`][`backgroundColor`] = `red`;

let myClass = document.getElementsByClassName("classtest");

let myIDSelector = document.getElementById("idtest");

let counter = 0;
while(counter < myClass.length)
{
    myClass[counter]['innerHTML'] = "hacked";
    counter ++;
}
function insertPTagintoDocument (){

    let p_tags = document.querySelectorAll("p");
    let last_p_tag = p_tags[p_tags.length - 1]
    console.log(last_p_tag)
    last_p_tag.insertAdjacentHTML('afterend', `<p>TRYING THIS</p>`)
}

myIDSelector.insertAdjacentHTML(`afterBegin`, `<p>I AM BEFORE</p>`);

// myQueryAll.insertAdjacentHTML(`afterend`, insertPTagintoDocument());

function replaceShortInnerHTML(selector) {
    // Select all elements that match the provided CSS selector
    const elements = document.querySelectorAll(selector);
  
    // Loop through the selected elements
    elements.forEach(element => {
      // Check if the length of innerHTML is less than 30
      if (element.innerHTML.length < 30) {
        // Replace the innerHTML with 'NOT ENOUGH'
        element.innerHTML = 'NOT ENOUGH';
      }
    });
  }
  
  // Example usage:
  // Replace the innerHTML of all <p> elements with 'NOT ENOUGH' if length < 30
  replaceShortInnerHTML('p');
  function insertPAfterHappyElements(selectorsArray) {
    // Loop through the array of CSS selectors
    selectorsArray.forEach(selector => {
      // Select all elements that match the current selector
      const elements = document.querySelectorAll(selector);
  
      // Loop through the selected elements
      elements.forEach(element => {
        // Check if the innerHTML contains 'happy'
        if (element.innerHTML.includes('happy')) {
          // Create a new <p> element
          const newP = document.createElement('p');
          newP.textContent = 'happy tag above';
  
          // Insert the new <p> element after the current element
          element.parentNode.insertBefore(newP, element.nextSibling);
        }
      });
    });
  }
  
  // Example usage:
  // Provide an array of CSS selectors
  const selectors = ['.class1', '#id2', 'p'];
  insertPAfterHappyElements(selectors);
  
 // Define an array of user objects
const users = [
    {
      username: 'user1',
      bio: 'Hello there! Frick this and darn that.',
      profile_image_url: 'profile1.jpg',
    },
    {
      username: 'user2',
      bio: 'Golly, I love programming.',
      profile_image_url: 'profile2.jpg',
    },
    {
      username: 'user3',
      bio: 'No frickin\' way!',
      profile_image_url: 'profile3.jpg',
    },
  ];
  
  // Function to replace specified words with asterisks in a given text
  function replaceWordsWithAsterisks(text) {
    const forbiddenWords = ['frick', 'darn', 'golly'];
    return text.replace(new RegExp(forbiddenWords.join('|'), 'gi'), '****');
  }
  
  // Function to inject user data onto the page
  function injectUserData(users) {
    const container = document.getElementById('user-container');
    
    users.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user-card');
  
      userDiv.innerHTML = `
        <img src="${user.profile_image_url}" alt="Profile Image">
        <h3>${user.username}</h3>
        <p>${replaceWordsWithAsterisks(user.bio)}</p>
      `;
  
      container.appendChild(userDiv);
    });
  }
  
  // Call the function to inject user data
  injectUserData(users);
   