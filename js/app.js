console.log('does this work')



/*Part 1
The cafe’s title is a bit too long.
 Select the #main-title id element
  and change the text to “Welcome to the Cozy Cafe”.
   Let’s also improve our page’s appearance 
   by changing the text-align to center on the title as well */


   const mainTitle = document.querySelector('#main-title')
   mainTitle.textContent = 'Welcome to the Cozy Cafe Yemmi'
   mainTitle.style.textAlign = 'center'

   //part 2
   /*Select the body element and change the background color
    to a soothing pastel shade of your choice.
     (If you can’t think of a color, bisque, lightsteelblue, 
     and pink are good choices.)*/

  document.body.style.backgroundColor = 'bisque'


//part 3

/*Select the <p> element which is meant to hold the quote of the day.
 Update it’s content so that it displays a quote of your choice
  (or use this classic: “Life happens, coffee helps.”).*/


const quote = document.querySelector('#quote-of-the-day')
quote.textContent = "Ahmeds Here, To Help you There"


//part 4

/*Select all elements with the class highlight-title and
 change their font-style to italic. Remember, 
 you might need to iterate through a 
 collection of elements*/

 const highlightTitles = document.querySelectorAll('.highlight-title')
 highlightTitles.forEach(title => {
    title.style.fontStyle = 'italic'
 })

 //part 5

 /*Let’s add a new item to the Past Menu Items list.
  Create a new <li> element, set the text to “Rose Cake”, 
  and append it to the list.*/

  const pastMenu = document.querySelector('#past-menu-items')
  const newPastItem = document.createElement('li')
  const newPastItem2 = document.createElement('li')

 newPastItem2.textContent = "Anwaar And Zainb Cake"
 newPastItem.textContent = 'Rose Cake'

 pastMenu.appendChild(newPastItem)
 pastMenu.appendChild(newPastItem2)


 //part 6
 /*Select the list of Cafe Specialties and add a list item.
  Be sure to add content to your newly created <li></li> tags
   (maybe Karak Tea is on offer now?).*/

const cafeSpecialties = document.querySelector('#cafe-specialties')
const newSpecialtyItem = document.createElement('li')
const newSpecialtyItem2 = document.createElement('li')

newSpecialtyItem2.textContent = "Napila speacel Tea"
newSpecialtyItem.textContent = "Yemani Tea"

cafeSpecialties.appendChild(newSpecialtyItem)
cafeSpecialties.appendChild(newSpecialtyItem2)


//part 7

/*Create a new blog post for a recent cafe event.
 You will need to create a new <div> element with the class 
 .blog-post, a new <h3> with a relevant event title 
 (e.g., “Karak Tea Tasting Event”), and a new <p> 
 with some text describing the event. 
 Make sure the new post matches the style and structure of the other blog 
 posts. Think carefully about the order of element creation and appending.*/



