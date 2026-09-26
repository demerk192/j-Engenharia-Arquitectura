/* =========================================================
   JJ ENGENHARIA & ARQUITECTURA
   SCRIPT.JS COMPLETO
========================================================= */


/* =========================================================
   MENU MOBILE
========================================================= */

function abrirMenu(){

    const menu =
        document.getElementById("menu");

    const botao =
        document.querySelector(".menu-toggle");


    if(!menu){
        return;
    }


    const aberto =
        menu.classList.toggle("active");


    if(botao){

        botao.classList.toggle(
            "active",
            aberto
        );

    }


    document.body.classList.toggle(
        "menu-open",
        aberto
    );

}



/* =========================================================
   FECHAR MENU
========================================================= */

function fecharMenu(){

    const menu =
        document.getElementById("menu");

    const botao =
        document.querySelector(".menu-toggle");


    if(menu){

        menu.classList.remove("active");

    }


    if(botao){

        botao.classList.remove("active");

    }


    document.body.classList.remove(
        "menu-open"
    );

}



/* =========================================================
   MENU - EVENTOS
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function(){

        const menu =
            document.getElementById("menu");

        const botao =
            document.querySelector(".menu-toggle");


        /* FECHAR AO CLICAR NUM LINK */

        if(menu){

            const links =
                menu.querySelectorAll("a");


            links.forEach(
                function(link){

                    link.addEventListener(
                        "click",
                        function(){

                            fecharMenu();

                        }
                    );

                }
            );

        }



        /* FECHAR AO CLICAR FORA */

        document.addEventListener(
            "click",
            function(event){

                if(
                    !menu ||
                    !menu.classList.contains("active")
                ){

                    return;

                }


                const dentroMenu =
                    menu.contains(
                        event.target
                    );


                const dentroBotao =
                    botao
                    ? botao.contains(
                        event.target
                    )
                    : false;


                if(
                    !dentroMenu &&
                    !dentroBotao
                ){

                    fecharMenu();

                }

            }
        );



        /* FECHAR AO VOLTAR PARA DESKTOP */

        window.addEventListener(
            "resize",
            function(){

                if(
                    window.innerWidth > 800
                ){

                    fecharMenu();

                }

            }
        );

    }
);



/* =========================================================
   FORMULÁRIO WHATSAPP
========================================================= */

function enviarWhatsApp(){

    const nomeInput =
        document.getElementById("nome");

    const telefoneInput =
        document.getElementById("telefone");

    const emailInput =
        document.getElementById("email");

    const mensagemInput =
        document.getElementById("mensagem");


    /* =====================================================
       VERIFICAR SE OS CAMPOS EXISTEM
    ===================================================== */

    if(
        !nomeInput ||
        !telefoneInput ||
        !emailInput ||
        !mensagemInput
    ){

        console.error(
            "Os campos do formulário não foram encontrados."
        );

        return false;

    }



    const nome =
        nomeInput.value.trim();

    const telefone =
        telefoneInput.value.trim();

    const email =
        emailInput.value.trim();

    const mensagem =
        mensagemInput.value.trim();



    /* =====================================================
       VALIDAÇÃO
    ===================================================== */

    if(
        nome === "" ||
        telefone === "" ||
        email === "" ||
        mensagem === ""
    ){

        alert(
            "Por favor, preencha todos os campos antes de enviar."
        );

        return false;

    }



    /* =====================================================
       WHATSAPP OFICIAL JJ ENGENHARIA
       PORTUGAL
       +351 934 065 260
    ===================================================== */

    const numero =
        "351934065260";



    /* =====================================================
       MENSAGEM AUTOMÁTICA
    ===================================================== */

    const texto =
`Olá JJ Engenharia & Arquitectura,

Gostaria de solicitar um orçamento para o meu projecto.

Nome: ${nome}
Telefone: ${telefone}
Email: ${email}

Descrição do projecto:
${mensagem}

Aguardo o vosso contacto.
Obrigado.`;



    /* =====================================================
       CODIFICAR TEXTO
    ===================================================== */

    const mensagemCodificada =
        encodeURIComponent(texto);



    /* =====================================================
       LINK WHATSAPP
    ===================================================== */

    const urlWhatsApp =
        "https://wa.me/" +
        numero +
        "?text=" +
        mensagemCodificada;



    /* =====================================================
       ABRIR WHATSAPP
    ===================================================== */

    window.open(
        urlWhatsApp,
        "_blank",
        "noopener,noreferrer"
    );


    return false;

}



/* =========================================================
   HEADER FIXO AO FAZER SCROLL
========================================================= */

function actualizarHeader(){

    const header =
        document.querySelector(".header");


    if(!header){
        return;
    }


    if(
        window.scrollY > 80
    ){

        header.classList.add(
            "header-scrolled"
        );

    }else{

        header.classList.remove(
            "header-scrolled"
        );

    }

}


window.addEventListener(
    "scroll",
    actualizarHeader,
    {
        passive:true
    }
);


document.addEventListener(
    "DOMContentLoaded",
    actualizarHeader
);



/* =========================================================
   SCROLL SUAVE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function(){

        const links =
            document.querySelectorAll(
                'a[href^="#"]'
            );


        links.forEach(
            function(link){

                link.addEventListener(
                    "click",
                    function(event){

                        const destino =
                            this.getAttribute(
                                "href"
                            );


                        if(
                            !destino ||
                            destino === "#"
                        ){

                            return;

                        }


                        let elemento;


                        try{

                            elemento =
                                document.querySelector(
                                    destino
                                );

                        }catch(erro){

                            elemento = null;

                        }


                        if(!elemento){
                            return;
                        }


                        event.preventDefault();


                        elemento.scrollIntoView({

                            behavior:"smooth",

                            block:"start"

                        });

                    }
                );

            }
        );

    }
);



/* =========================================================
   GARANTIR VISIBILIDADE DAS SECÇÕES
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function(){

        const elementos =
            document.querySelectorAll(
                ".reveal"
            );


        elementos.forEach(
            function(elemento){

                elemento.classList.add(
                    "show"
                );

            }
        );

    }
);



/* =========================================================
   GALERIA DE PROJECTOS
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function(){


        /* =================================================
           ELEMENTOS
        ================================================= */

        const galleryItems =
            Array.from(
                document.querySelectorAll(
                    ".gallery-item"
                )
            );


        const galleryFilters =
            document.querySelectorAll(
                ".gallery-filter"
            );


        const lightbox =
            document.getElementById(
                "galleryLightbox"
            );


        const lightboxImage =
            document.getElementById(
                "lightboxImage"
            );


        const lightboxCategory =
            document.getElementById(
                "lightboxCategory"
            );


        const lightboxTitle =
            document.getElementById(
                "lightboxTitle"
            );


        const closeButton =
            document.querySelector(
                ".lightbox-close"
            );


        const prevButton =
            document.querySelector(
                ".lightbox-prev"
            );


        const nextButton =
            document.querySelector(
                ".lightbox-next"
            );


        const lightboxContent =
            document.querySelector(
                ".lightbox-content"
            );



        /* =================================================
           SE NÃO HOUVER GALERIA
        ================================================= */

        if(
            galleryItems.length === 0 ||
            !lightbox ||
            !lightboxImage
        ){

            return;

        }



        let visibleItems =
            [...galleryItems];


        let currentIndex =
            0;


        let touchStartX =
            0;


        let touchEndX =
            0;



        /* =================================================
           ACTUALIZAR ITENS VISÍVEIS
        ================================================= */

        function actualizarItensVisiveis(){

            visibleItems =
                galleryItems.filter(
                    function(item){

                        return !item
                            .classList
                            .contains(
                                "hidden"
                            );

                    }
                );

        }



        /* =================================================
           FILTROS
        ================================================= */

        galleryFilters.forEach(
            function(filterButton){

                filterButton.addEventListener(
                    "click",
                    function(){

                        const filtro =
                            this.getAttribute(
                                "data-filter"
                            );


                        galleryFilters.forEach(
                            function(botao){

                                botao.classList.remove(
                                    "active"
                                );

                            }
                        );


                        this.classList.add(
                            "active"
                        );



                        galleryItems.forEach(
                            function(item){

                                const categoria =
                                    item.getAttribute(
                                        "data-category"
                                    );


                                if(
                                    filtro === "all" ||
                                    categoria === filtro
                                ){

                                    item.classList.remove(
                                        "hidden"
                                    );

                                }else{

                                    item.classList.add(
                                        "hidden"
                                    );

                                }

                            }
                        );


                        actualizarItensVisiveis();

                    }
                );

            }
        );



        /* =================================================
           MOSTRAR IMAGEM
        ================================================= */

        function mostrarImagem(){

            if(
                visibleItems.length === 0
            ){

                return;

            }


            if(
                currentIndex < 0
            ){

                currentIndex =
                    visibleItems.length - 1;

            }


            if(
                currentIndex >=
                visibleItems.length
            ){

                currentIndex = 0;

            }


            const item =
                visibleItems[
                    currentIndex
                ];


            if(!item){
                return;
            }


            const imagem =
                item.querySelector(
                    "img"
                );


            const categoria =
                item.querySelector(
                    ".gallery-overlay span"
                );


            const titulo =
                item.querySelector(
                    ".gallery-overlay h3"
                );



            if(imagem){

                lightboxImage.src =
                    imagem.getAttribute(
                        "src"
                    );


                lightboxImage.alt =
                    imagem.getAttribute(
                        "alt"
                    ) || "";

            }



            if(lightboxCategory){

                lightboxCategory.textContent =
                    categoria
                    ? categoria.textContent.trim()
                    : "";

            }



            if(lightboxTitle){

                lightboxTitle.textContent =
                    titulo
                    ? titulo.textContent.trim()
                    : "";

            }

        }



        /* =================================================
           ABRIR LIGHTBOX
        ================================================= */

        function abrirLightbox(item){

            actualizarItensVisiveis();


            currentIndex =
                visibleItems.indexOf(
                    item
                );


            if(
                currentIndex < 0
            ){

                currentIndex = 0;

            }


            mostrarImagem();


            lightbox.classList.add(
                "active"
            );


            lightbox.setAttribute(
                "aria-hidden",
                "false"
            );


            document.body.style.overflow =
                "hidden";

        }



        /* =================================================
           FECHAR LIGHTBOX
        ================================================= */

        function fecharLightbox(){

            lightbox.classList.remove(
                "active"
            );


            lightbox.setAttribute(
                "aria-hidden",
                "true"
            );


            document.body.style.overflow =
                "";


            setTimeout(
                function(){

                    if(
                        !lightbox.classList
                            .contains(
                                "active"
                            )
                    ){

                        lightboxImage.removeAttribute(
                            "src"
                        );

                    }

                },
                300
            );

        }



        /* =================================================
           PRÓXIMA IMAGEM
        ================================================= */

        function proximaImagem(){

            if(
                visibleItems.length === 0
            ){

                return;

            }


            currentIndex++;


            if(
                currentIndex >=
                visibleItems.length
            ){

                currentIndex = 0;

            }


            mostrarImagem();

        }



        /* =================================================
           IMAGEM ANTERIOR
        ================================================= */

        function imagemAnterior(){

            if(
                visibleItems.length === 0
            ){

                return;

            }


            currentIndex--;


            if(
                currentIndex < 0
            ){

                currentIndex =
                    visibleItems.length - 1;

            }


            mostrarImagem();

        }



        /* =================================================
           CLIQUE NAS FOTOS
        ================================================= */

        galleryItems.forEach(
            function(item){

                item.addEventListener(
                    "click",
                    function(){

                        abrirLightbox(
                            item
                        );

                    }
                );

            }
        );



        /* =================================================
           BOTÃO PRÓXIMO
        ================================================= */

        if(nextButton){

            nextButton.addEventListener(
                "click",
                function(event){

                    event.stopPropagation();

                    proximaImagem();

                }
            );

        }



        /* =================================================
           BOTÃO ANTERIOR
        ================================================= */

        if(prevButton){

            prevButton.addEventListener(
                "click",
                function(event){

                    event.stopPropagation();

                    imagemAnterior();

                }
            );

        }



        /* =================================================
           BOTÃO FECHAR
        ================================================= */

        if(closeButton){

            closeButton.addEventListener(
                "click",
                function(event){

                    event.stopPropagation();

                    fecharLightbox();

                }
            );

        }



        /* =================================================
           NÃO FECHAR AO CLICAR NA FOTO
        ================================================= */

        if(lightboxContent){

            lightboxContent.addEventListener(
                "click",
                function(event){

                    event.stopPropagation();

                }
            );

        }



        /* =================================================
           CLICAR NO FUNDO
        ================================================= */

        lightbox.addEventListener(
            "click",
            function(event){

                if(
                    event.target ===
                    lightbox
                ){

                    fecharLightbox();

                }

            }
        );



        /* =================================================
           TECLADO
        ================================================= */

        document.addEventListener(
            "keydown",
            function(event){

                const aberto =
                    lightbox.classList.contains(
                        "active"
                    );


                if(!aberto){
                    return;
                }


                if(
                    event.key ===
                    "Escape"
                ){

                    fecharLightbox();

                }


                if(
                    event.key ===
                    "ArrowRight"
                ){

                    proximaImagem();

                }


                if(
                    event.key ===
                    "ArrowLeft"
                ){

                    imagemAnterior();

                }

            }
        );



        /* =================================================
           SWIPE MOBILE
        ================================================= */

        lightbox.addEventListener(
            "touchstart",
            function(event){

                if(
                    event.changedTouches.length === 0
                ){

                    return;

                }


                touchStartX =
                    event
                        .changedTouches[0]
                        .screenX;

            },
            {
                passive:true
            }
        );



        lightbox.addEventListener(
            "touchend",
            function(event){

                if(
                    event.changedTouches.length === 0
                ){

                    return;

                }


                touchEndX =
                    event
                        .changedTouches[0]
                        .screenX;


                const diferenca =
                    touchStartX -
                    touchEndX;


                if(
                    diferenca > 50
                ){

                    proximaImagem();

                }


                if(
                    diferenca < -50
                ){

                    imagemAnterior();

                }

            },
            {
                passive:true
            }
        );


    }
);



/* =========================================================
   ESC PARA FECHAR MENU
========================================================= */

document.addEventListener(
    "keydown",
    function(event){

        if(
            event.key !== "Escape"
        ){

            return;

        }


        const lightbox =
            document.getElementById(
                "galleryLightbox"
            );


        if(
            lightbox &&
            lightbox.classList.contains(
                "active"
            )
        ){

            return;

        }


        fecharMenu();

    }
);



/* =========================================================
   VÍDEO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function(){

        const videos =
            document.querySelectorAll(
                ".project-video video"
            );


        videos.forEach(
            function(video){

                video.autoplay =
                    false;


                video.setAttribute(
                    "playsinline",
                    ""
                );


                document.addEventListener(
                    "visibilitychange",
                    function(){

                        if(
                            document.hidden &&
                            !video.paused
                        ){

                            video.pause();

                        }

                    }
                );

            }
        );

    }
);



/* =========================================================
   DETECTAR IMAGENS COM CAMINHO ERRADO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function(){

        const imagens =
            document.querySelectorAll(
                "img"
            );


        imagens.forEach(
            function(imagem){

                imagem.addEventListener(
                    "error",
                    function(){

                        console.warn(
                            "Imagem não encontrada:",
                            imagem.getAttribute(
                                "src"
                            )
                        );

                    }
                );

            }
        );

    }
);