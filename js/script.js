// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-5-02-JS/sw.js", {
    scope: "/ICS20-Unit-5-02-JS/",
  })
}

  // this allows for console input in Node.js
  const prompt = require('prompt-sync')()

  // input
  function myButtonClicked() {
  const numbervalue = prompt("Input negative or positive number") 
  
  // process
  if (numbervalue < 0) {
    document.getElementById("answer").innerHTML =
    "The number is negative!"
  } else {
    console.log(The number is positive!);
  }
    console.log("/nDone.")
  }
}
