  var num;
  function loadXMLDoc() {
    var gallery = new XMLHttpRequest();
    gallery.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var x = JSON.parse(this.responseText);
        num = x.length;
        document.getElementById("count").innerHTML = `${num} Pictures`; 
        x.forEach((obj) => {
          document.getElementById(
            "demo"
          ).innerHTML += `<div id=${obj.id} class="gallery" onclick="fadeOut(${obj.id})">
                    <img
                    src=${obj.url}
                    width="600"
                    height="400"
                    />
                <div class="desc">${obj.title}</div>
                </div>`;
        });
      }
    };

    gallery.open(
      "GET",
      "https://jsonplaceholder.typicode.com/albums/2/photos",
      true
    );
    gallery.send();
  }
  function fadeOut(id) {
    var element = document.getElementById(id);
    var op = 1; 
    var timer = setInterval(function () {
      if (op <= 0.1) {
        clearInterval(timer);
        element.remove(); 
        num--; 
        document.getElementById(
          "count"
        ).innerHTML = `<div>${num} Pictures</div>`; 
      }
      element.style.opacity = op;
      op -= 0.1;
    }, 50);
  }