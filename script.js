
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read
  
}

const book1 = new Book('LOTR','JRR TOLKIEN','400','Read')
const book2 = new Book('CRIME AND PUNISHMENT', 'DOSTOYEVSKI', '600', 'Read')
const book3 = new Book('A TALE OF TWO CITIES', 'CHARLES DICKENS', '500', 'Unread')
let myLibrary = [book1, book2, book3];


const Bookcontainer = document.querySelector('#bookGrid')

//show/hide form
function showHide() {
  const hideShowbtn = document.getElementById('form')
    if (hideShowbtn.style.visibility == 'visible' || hideShowbtn.style.visibility == '') {
    hideShowbtn.style.visibility = 'hidden'  
    hideShowbtn.style.height = '5px'
    }       
    else {
    hideShowbtn.style.visibility = 'visible'
    hideShowbtn.style.height = '205px'
}
}

// 
function submitForm() {


  let bookInfo = document.querySelectorAll('input')
  let title = bookInfo[1].value
  let author = bookInfo[2].value
  let pages = bookInfo[3].value
  console.log(bookInfo[4].checked)
  if (bookInfo[4].checked == false) {
    let read = 'Unread'
    const book = new Book(title, author, pages, read)
    addBookToLibrary(book)

  }
  if (bookInfo[4].checked == true) {
    let read = 'Read'
    const book = new Book(title, author, pages, read)
    addBookToLibrary(book)

  }
  //if fields are empty
  if (author == '' || pages == '' || title == '' ) {
    return

  }
  
  bookInfo[1].value = ''
  bookInfo[2].value = ''
  bookInfo[3].value = '' 
  bookInfo[4].value = 'false'
}


function addBookToLibrary(book) {
  myLibrary.push(book)

//Removes existing bookcards
  let bookCardList = document.querySelectorAll('.bookCard')
  for (let i = 0; i < bookCardList.length; i++) {
     bookCardList[i].remove();
   }

//recreates bookcard Grid
  createBookCards() 
  removeClick() 
  readClick()
}

function createBookCards() {
  console.log('creating book cards')
  myLibrary.forEach((myLibrary, index) => {
  const bookCard = document.createElement("div");
  bookCard.classList.add("bookCard")
  Bookcontainer.appendChild(bookCard)

  for (const key in myLibrary) {

    if (key == 'read') {
      const read = document.createElement('button')
      const readinfo = document.createTextNode(myLibrary[key])
      read.appendChild(readinfo)
      read.className = 'readbtn'
      bookCard.appendChild(read)  
    } 
    else {
    const div = document.createElement("div")
    const info = document.createTextNode(myLibrary[key])
    div.appendChild(info)
    bookCard.appendChild(div)


    }
  }
  const btn = document.createElement("button")
  const btntxt = document.createTextNode("Remove")
  btn.dataset.arraynum = index
  btn.className = 'Remove'
  btn.appendChild(btntxt)
  bookCard.appendChild(btn)
} 
)

}

function removeClick() {

const removebuttons = document.querySelectorAll('.Remove')
  for (let i = 0; i <  removebuttons.length; i++) {
    
removebuttons[i].addEventListener('click' , function(event) {
 //remove createbookcards and replace with removebook(0)
 console.log('You have clicked Remove on me')


  myLibrary.splice(i, 1)
  let bookCardList = document.querySelectorAll('.bookCard')
  for (let i = 0; i < bookCardList.length; i++) {
     bookCardList[i].remove();
   }
  createBookCards()
  removeClick()
  readClick()
  
} )
  }
}

function readClick() {

  const readbuttons = document.querySelectorAll('.readbtn')
  for (let i = 0; i <  readbuttons.length; i++) {
    
    readbuttons[i].addEventListener('click', function(event) {
      console.log(myLibrary[i].read)
      if(myLibrary[i].read == "Read") {
        console.log('This says Read')
        myLibrary[i].read = "Unread"
        readbuttons[i].textContent = "Unread"
        console.log(myLibrary[i])
      }
      else {
        myLibrary[i].read = "Read"
        readbuttons[i].textContent = "Read"
        console.log(myLibrary[i])

      }

    })
  }
}






createBookCards() 
removeClick() 
readClick()











