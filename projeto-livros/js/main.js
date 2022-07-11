jQuery(document).ready(
function($)
{
    //FIXED HEADER
    //verifica se a página está rolando. Se estiver, chama a função para adicionar ou remover a classe active, que fixa o menu
    window.onscroll = function(){
        if(window.pageYOffset > 140)
        {
            $('#header').addClass('active');
        }
        else
        {
            $('#header').removeClass('active');
        }
    };

    //ISOTOPE
    let btns = $('.button-group button'); //botões

    btns.click(function(e){
        $('.button-group button').removeClass('active'); //removendo a classe active ao clicar no botão
        e.target.classList.add('active'); //adicionando a classe active no botão especificado

        let selector = $(e.target).attr("data-filter"); //filtrando de acordo com a classe à qual os elementos pertencem
        $(".grid").isotope({
            filter: selector,
        });
    });

    $(window).on('load', function(){
        $(".grid").isotope({
            filter: '*',
        });
    });

    //MAGNIFY
    $(".grid .popup-link").magnificPopup({
        type: 'image',
        gallery:
        {
            enabled: true,
            tPrev: "anterior",
            tNext: "Prócima",
            tCounter: "%curr% de %total%"
        },
    });

    //OWL
    $(".owl-carousel").owlCarousel({
        loop: false,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 6000,
        dots: true,
        lazyLoad: true,
        nav: false,
        responsive:
        {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        },
    });
});