let sessionList = JSON.parse(localStorage.getItem("sessionList")) || [];
sessionList.push(new Date());
localStorage.setItem("sessionList", JSON.stringify(sessionList));

