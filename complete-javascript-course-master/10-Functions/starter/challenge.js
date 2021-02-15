'use strict';

/*
//#1 Challenge

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnser() {
    //Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);
    //Register answer
    //Good way to use short circuiting
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    // console.log(this.answers);
    this.displayResults();
    this.displayResults('string');
  },
  //Displaying Results
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

poll.registerNewAnser();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnser.bind(poll));

//Bonus

poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [5, 2, 3] });

// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]

*/

/////////////////////////////////////////////////
//Challenge #2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
