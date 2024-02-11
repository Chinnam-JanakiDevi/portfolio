function display(k) {
    if (k == "skills") {
      document.getElementById("experience").style.display = "none";
      document.getElementById("education").style.display = "none";
      document.getElementById("skills").style.display = "block";
    } else if (k == "experience") {
      document.getElementById("skills").style.display = "none";
      document.getElementById("education").style.display = "none";
      document.getElementById("experience").style.display = "block";
    } else if (k == "education") {
      document.getElementById("experience").style.display = "none";
      document.getElementById("skills").style.display = "none";
      document.getElementById("education").style.display = "block";
    }
  }