const express = require("express");
const app = express();
const bodyP = require("body-parser");
const compiler = require("compilex");
const options = { stats: true };

compiler.init(options);

app.use(bodyP.json());

app.use(
  "/codemirror-5.65.16",
  express.static("C:/Noman/code/github/CodeEditor/codemirror-5.65.16")
);

app.get("/", function (req, res) {
  // compiler.flush(function () {
  //   console.log("deleted");
  // });
  res.sendFile("C:/Noman/code/github/CodeEditor/index.html");
});

// app.get("/get-count", function (req, res) {
//   var fs = require("fs");
//   var questions = JSON.parse(fs.readFileSync("./questions.json"));
//   res.send(questions.length);
// });

app.get("/get-all-questions", function (req, res) {
  var fs = require("fs");

  // reads the questions.json file and send back
  res.send(JSON.parse(fs.readFileSync("./questions.json")));
});

app.get("/get-one-random-question", function (req, res) {
  var fs = require("fs");

  // reads the questions.json file
  var questions = JSON.parse(fs.readFileSync("./questions.json"));

  // returns one question randomly
  res.send(questions[Math.floor(Math.random() * questions.length)]);

  // let questions = [
  //   {
  //     question: "Inside which HTML element do we put the JavaScript??",
  //     choice1: "<script>",
  //     choice2: "<javascript>",
  //     choice3: "<js>",
  //     choice4: "<scripting>",
  //     answer: 1,
  //   },
  //   {
  //     question:
  //       "What is the correct syntax for referring to an external script called 'xxx.js'?",
  //     choice1: "<script href='xxx.js'>",
  //     choice2: "<script name='xxx.js'>",
  //     choice3: "<script src='xxx.js'>",
  //     choice4: "<script file='xxx.js'>",
  //     answer: 3,
  //   },
  //   {
  //     question: " How do you write 'Hello World' in an alert box?",
  //     choice1: "msgBox('Hello World');",
  //     choice2: "alertBox('Hello World');",
  //     choice3: "msg('Hello World');",
  //     choice4: "alert('Hello World');",
  //     answer: 4,
  //   },
  // ];
});

app.post("/compile", function (req, res) {
  var code = req.body.code;
  var input = req.body.input;
  var lang = req.body.lang;
  try {
    if (lang == "Cpp") {
      if (!input) {
        var envData = {
          OS: "windows",
          cmd: "g++",
          options: { timeout: 10000 },
        }; // (uses g++ command to compile )
        compiler.compileCPP(envData, code, function (data) {
          if (data.output) {
            res.send(data);
          } else {
            res.send({ output: "error" });
          }
        });
      } else {
        var envData = {
          OS: "windows",
          cmd: "g++",
          options: { timeout: 10000 },
        }; // (uses g++ command to compile )
        compiler.compileCPPWithInput(envData, code, input, function (data) {
          if (data.output) {
            res.send(data);
          } else {
            res.send({ output: "error" });
          }
        });
      }
    } else if (lang == "Java") {
      if (!input) {
        var envData = { OS: "windows" };
        compiler.compileJava(envData, code, function (data) {
          if (data.output) {
            res.send(data);
          } else {
            res.send({
              output:
                "Error - Please check your code or temp class file for errors.",
            });
          }
        });
      } else {
        //if windows
        var envData = { OS: "windows" };
        //else
        compiler.compileJavaWithInput(envData, code, input, function (data) {
          if (data.output) {
            res.send(data);
          } else {
            res.send({
              output:
                "Error - Please check your code or temp class file for errors.",
            });
          }
        });
      }
    } else if (lang == "Python") {
      if (!input) {
        var envData = { OS: "windows" };
        compiler.compilePython(envData, code, function (data) {
          if (data.output) {
            res.send(data);
          } else {
            res.send({ output: "error" });
          }
        });
      } else {
        var envData = { OS: "windows" };
        compiler.compilePythonWithInput(envData, code, input, function (data) {
          if (data.output) {
            res.send(data);
          } else {
            res.send({ output: "error" });
          }
        });
      }
    }
  } catch (e) {
    console.log("error");
  }
});

app.listen(8000);
