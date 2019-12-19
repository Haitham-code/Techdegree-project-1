/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

var quotes = [

  {quote: 'Be not simply good - be good for something.',
   source: 'Henry David Thoreau',
   citation: 'google',
   year: '1987'
  },

  {quote: 'Doing well is the result of doing good. That is what capitalism is all about.',
   source: 'Ralph Waldo Emerson',
   citation: 'google',
   year: '1990'
  },

  {quote: 'If people are good only because they fear punishment, and hope for reward, then we are a sorry lot indeed.',
   source: 'Albert Einstein',
  },

  {quote: 'Few things are harder to put up with than the annoyance of a good example.',
   source: 'Mark Twain',
  },

  {quote: 'Every man is guilty of all the good he did not do.',
   source: 'Voltaire',
  },

  {quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall',
   source: 'Nelson Mandela',
   year: '1991'
  },

  {quote: 'The way to get started is to quit talking and begin doing.',
   source: 'Walt Disney',
   year: '2000'
  }

]





/***
 * `getRandomQuote` function
***/
var randomNum;
var randomQuote;
var colorNum;
var ranColor1;
var ranColor2;
var ranColor3;


function getRandomQuote (){

  randomNum = Math.floor(Math.random()*quotes.length) 

  var singleQuote = quotes[randomNum];

  return(singleQuote);

}

/** Random color function */

function color (){

  colorNum1 = Math.floor(Math.random()*100);
  colorNum2 = Math.floor(Math.random()*100);
  colorNum3 = Math.floor(Math.random()*100);
  ranColor = 'rgb(' + colorNum1 +','+ colorNum2 + ',' + colorNum3 + ')'; 

  return (ranColor);
}

/***
 * `printQuote` function
***/



function printQuote (){

   randomQuote = getRandomQuote();

  var html = '';
  html+= '<p class="quote"> '+ randomQuote.quote + ' </p>';
  html+= '<p class="source"> ' + randomQuote.source ;

  
    if (randomQuote.citation ) {
      html+= '<span class="citation"> '+ randomQuote.citation + ' </span> ';}

    if (randomQuote.year)  {
      html+= '<span class="year"> ' +randomQuote.year +' </span> ';}

    html+= '</p>';
     

    document.getElementById("quote-box").innerHTML = html;
    document.getElementById("fullContainer").style.backgroundColor = color ();

}

/** Random color function */

function color (){

  colorNum1 = Math.floor(Math.random()*100);
  colorNum2 = Math.floor(Math.random()*100);
  colorNum3 = Math.floor(Math.random()*100);
  ranColor = 'rgb(' + colorNum1 +','+ colorNum2 + ',' + colorNum3 + ')'; 

  return (ranColor);
}

var interval = setInterval(printQuote,20000);







/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);