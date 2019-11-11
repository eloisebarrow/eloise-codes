import React from 'react';
import './ProgressBar.css';

export default function ProgressBar() {
  window.onscroll = function() {myFunction()};

  // need to fix for horizontal scroll
  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop; // how far down a user has scrolled
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight; 
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  return (
    <div className="progress-bar" id="myBar">
      
    </div>
  )
}
