var userName = prompt("Please enter your name:");
document.write("Hello, " + userName + "! Welcome to our website.");

var number = prompt("Enter a number for the multiplication table:", "5");
number = number ? parseInt(number) : 5;
document.write("<h2>Multiplication Table of " + number + "</h2>");
for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}


  // subect names
  var subject1 = prompt("Enter the name of the first subject:");
  var subject2 = prompt("Enter the name of the second subject:");
  var subject3 = prompt("Enter the name of the third subject:");

  // total marks
  var totalMarksEach = 100;


  var marks1 = parseInt(prompt("Enter the obtained marks for " + subject1 + ":"));


  var marks2 = parseInt(prompt("Enter the obtained marks for " + subject2 + ":"));
  var marks3 = parseInt(prompt("Enter the obtained marks for " + subject3 + ":"));

  var totalMarksObtained = marks1 + marks2 + marks3;
  var totalMarks = totalMarksEach * 3;
  var percentage = (totalMarksObtained / totalMarks) * 100;

//result
  document.write("<table border='1'>");
  document.write("<tr><th>Subject</th><th>Obtained Marks</th><th>Total Marks</th></tr>");
  document.write("<tr><td>" + subject1 + "</td><td>" + marks1 + "</td><td>" + totalMarksEach + "</td></tr>");
  document.write("<tr><td>" + subject2 + "</td><td>" + marks2 + "</td><td>" + totalMarksEach + "</td></tr>");
  document.write("<tr><td>" + subject3 + "</td><td>" + marks3 + "</td><td>" + totalMarksEach + "</td></tr>");
  document.write("<tr><td colspan='2'>Total Marks Obtained</td><td>" + totalMarksObtained + "</td></tr>");
  document.write("<tr><td colspan='2'>Percentage</td><td>" + percentage.toFixed(2) + "%</td></tr>");
  document.write("</table>");