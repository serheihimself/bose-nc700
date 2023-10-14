new Swiper(".slider_rewievs",{
    pagination: {
        el: ".swiper-pagination",
        type: 'custom', // Используем пользовательскую пагинацию
        clickable: !0,
        renderBullet: function(e, n) {
            return '<span class="' + n + '">0' + (e + 1) + "</span>"
        }}
    }
);