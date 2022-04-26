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

   /**
 * This function updates the slider value.
 */
  // this allows for console input in Node.js
  const prompt = require('prompt-sync')()

  // input
  function myButtonClicked() {
  const positive = prompt("Enter the number of students: ")
  const negative = prompt("Enter the number of students: ")

  // process
  if (numbervalue < 0) {
    document.getElementById("answer").innerHTML =
      "The number is " + Negative + "!"
  } else (sliderValue > 0) {
    document.getElementById("answer").innerHTML =
      "The number is " + Positive + "!"
  }
}
