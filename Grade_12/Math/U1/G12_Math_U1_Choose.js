module.exports = {
  Easy: [
    { id: 1, q: "What is 2 + 3?", a: "5" },
    { id: 2, q: "Solve for x: x + 1 = 3", a: "2" },
    { id: 3, q: "What is 10 ÷ 2?", a: "5" },
    { id: 4, q: "What is 7 - 2?", a: "5" },
    { id: 5, q: "Find the value: 4 × 2", a: "8" },
    { id: 6, q: "What is 9 + 1?", a: "10" },
    { id: 7, q: "Solve: 5 + 3", a: "8" },
    { id: 8, q: "What is 6 ÷ 3?", a: "2" },
    { id: 9, q: "What is 8 - 5?", a: "3" },
    { id: 10, q: "Find the value: 3 × 3", a: "9" },

    // multiple-choice additions (kept after original Easy items)
    { id: 31, q: "What is the value of x in 2x + 3 = 11?", choices: ["4", "5", "3", "6"], a: "4" },
    { id: 32, q: "Which of these numbers is a prime number?", choices: ["21", "17", "27", "12"], a: "17" },
    { id: 33, q: "Which property states that a + b = b + a?", choices: ["Distributive", "Commutative", "Associative", "Identity"], a: "Commutative" },
    { id: 34, q: "If 3x = 12, what is x?", choices: ["3", "4", "5", "6"], a: "4" },
    { id: 35, q: "The square root of 81 is?", choices: ["7", "8", "9", "10"], a: "9" },
    { id: 36, q: "What is 15 ÷ 3?", choices: ["3", "4", "5", "6"], a: "5" },
    { id: 37, q: "What is the sum of the angles in a triangle?", choices: ["180°", "90°", "360°", "270°"], a: "180°" }
  ],
  Medium: [
    { id: 11, q: "Simplify: 2x + 3x", a: "5x" },
    { id: 12, q: "Find the slope between (1,2) and (3,6)", a: "2" },
    { id: 13, q: "Solve: 2x - 3 = 7", a: "5" },
    { id: 14, q: "Simplify: 4y + 2y - y", a: "5y" },
    { id: 15, q: "Solve: 5x + 2 = 17", a: "3" },
    { id: 16, q: "Simplify: 3(a + 2) - 2a", a: "a + 6" },
    { id: 17, q: "Find x: 3x - 7 = 2", a: "3" },
    { id: 18, q: "Simplify: 5x + 2x - 3x", a: "4x" },
    { id: 19, q: "Solve: 2(x - 1) = 8", a: "5" },
    { id: 20, q: "Simplify: 4m + 5m - m", a: "8m" },

    // multiple-choice additions (kept after original Medium items)
    { id: 38, q: "Which of the following is an irrational number?", choices: ["√2", "4", "0.5", "1/2"], a: "√2" },
    { id: 39, q: "What is the next prime number after 7?", choices: ["9", "10", "11", "13"], a: "11" },
    { id: 40, q: "Which property states that (a + b) + c = a + (b + c)?", choices: ["Associative", "Commutative", "Distributive", "Identity"], a: "Associative" },
    { id: 41, q: "What is 12 × 3?", choices: ["36", "35", "32", "30"], a: "36" },
    { id: 42, q: "If 5x = 25, then x = ?", choices: ["4", "5", "6", "7"], a: "5" },
    { id: 43, q: "Which number is divisible by 2?", choices: ["15", "18", "21", "27"], a: "18" },
    { id: 44, q: "The perimeter of a square with side 4 is?", choices: ["8", "12", "16", "20"], a: "16" }
  ],
  Hard: [
    { id: 21, q: "If 2x + 3 = 9, find x.", a: "3" },
    { id: 22, q: "Solve: 5x − 2 = 8", a: "2" },
    { id: 23, q: "Solve: 3x + 7 = 16", a: "3" },
    { id: 24, q: "If 4x - 5 = 7, find x.", a: "3" },
    { id: 25, q: "Solve for x: 2(x+3)=14", a: "4" },
    { id: 26, q: "Simplify: 5x - 2x + 7 = 16, find x", a: "3" },
    { id: 27, q: "Solve: 3x - 4 = 11", a: "5" },
    { id: 28, q: "If 6x + 2 = 20, find x.", a: "3" },
    { id: 29, q: "Solve: 7x - 14 = 7", a: "3" },
    { id: 30, q: "If 5(x+2)-10=15, find x.", a: "5" },

    // multiple-choice additions (kept after original Hard items)
    { id: 45, q: "Which fraction is equivalent to 1/2?", choices: ["2/4", "3/5", "2/3", "3/4"], a: "2/4" },
    { id: 46, q: "What is 7 × 6?", choices: ["42", "36", "48", "40"], a: "42" },
    { id: 47, q: "Which property states a × 1 = a?", choices: ["Identity", "Inverse", "Associative", "Commutative"], a: "Identity" },
    { id: 48, q: "Which of the following is a composite number?", choices: ["7", "13", "15", "11"], a: "15" },
    { id: 49, q: "What is 9²?", choices: ["81", "72", "91", "99"], a: "81" },
    { id: 50, q: "Which of these is an even prime number?", choices: ["2", "3", "5", "7"], a: "2" }
  ]
};
