// INPUT 
// 1: “the cat likes to play with string”,
// 2: “the dog likes to play with the ball”

// OUTPUT
// return index <= you decide what this looks like

testbook = {
    1: "the cat likes to play with string",
    2: "the dog likes to play with the ball"
}

function createIndex(book){
 
 let bookIndex = {}
 
 for(let key in book){
   let words = book[key].split(" ") // [ "the", "cat", "likes", "to", "play", "with", "string" ]
  
   for(let i = 0; i < words.length; i++){
     // bookIndex[words[i]]
     if(bookIndex.hasOwnProperty(words[i])) {
         if(bookIndex[words[i]].includes(key)){
            continue
         } else {
            bookIndex[words[i]].push(key)
         }
     } else {
         bookIndex[words[i]] = [key]
     }
 }
 
 }
return bookIndexto

}

console.log(createIndex(testbook))


// OUTPUT
// Index of what pages each word appears on (no specific order of words)
// the: [1, 2]
// cat: [1]
// dog: [2]
// likes: [1, 2]
// to: [1, 2]
// play: [1, 2]
// with: [1, 2]
// string: [1]
// ball: [2]

// printIndex ( book )


// OUTPUT
// Popularity index of words (no specific order within group)
// the: [1, 2]      (3 times)
// likes: [1, 2]    (2 times)
// play: [1, 2]    (2 times)
// with: [1, 2]    (2 times)
// to: [1, 2]        (2 times)
// cat: [1]          (1 time)
// dog: [2]         (1 time)
// string: [1]      (1 time)
// ball: [2]         (1 time)

// printInOrderOfPopularity ( book )
