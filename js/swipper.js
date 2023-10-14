new Swiper(".slider_rewievs",{
    pagination: {
        el: ".swiper-pagination",
        clickable: !0,
        renderBullet: function(e, n) {
            return '<span class="' + n + '">0' + (e + 1) + "</span>"
        }}
    }
);