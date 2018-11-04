var ul = document.querySelector("ul");
var pullup = document.querySelector(".pullup");
var pullend = document.querySelector(".pullend");
var Scroll = new BScroll(".section", {
    probeType: 2
});


function pull() {
    for (var i = 1; i < 10; i++) {
        var li = document.createElement("li");
        li.innerHTML = "<li>" + i + "</li>";
        ul.appendChild(li);
    }

}
var page = 1;
Scroll.on("scroll", function() {
    if (this.y < this.maxScrollY - 50) {
        $(".pullup").html("上拉...").addClass("file");
    } else if (this.y < this.maxScrollY - 10) {
        $(".pullp").html("上拉加载").removeClass("file");
    }
    if (this.y > 50) {
        $(".pullend").html("下拉...").addClass("file");
    } else if (this.y > 10) {
        $(".pullend").html("下拉加载").removeClass("file");
    }
});
Scroll.on("scrollEnd", function() {
    if ($(".pullup").hasClass("file")) {
        if (page < 3) {
            page++;
            pull();
            $(".pullp").html("上拉加载").removeClass("file");
        }
        Scroll.refresh();
    } else if ($(".pullend").hasClass("file")) {
        $(".pullend").html("下拉加载").removeClass("file");
        page = 1;
    }
})