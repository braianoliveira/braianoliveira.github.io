fetch('https://rafaelescalfoni.github.io/disciplinas/fund_web/lab/arrays/js/filmes.json')
    .then(response => response.json()
        .then(function(filmes){

            let content = document.querySelector('#content');

            let criaFilme = (filme) => {
                let filmeDiv = document.createElement("div")
                let classificacao = filme.classificacao != 0 ? filme.classificacao : "L"
                console.log(filme.elenco)

                filmeDiv.classList.add("filme")
                filmeDiv.classList.add("col-4")
                filmeDiv.classList.add("element-item")
                filmeDiv.innerHTML += `<figure>
                                            <img src="${filme.figura}" alt="${filme.titulo}">
                                            <figcaption>
                                                <h3>${filme.titulo}</h3>
                                                <p>${filme.resumo}</p>
                                                <small class=${verificaClassificacao(filme.classificacao)}>${classificacao}</small>
                                            </figcaption>
                                        </figure>`
                return filmeDiv
            }

            let verificaClassificacao = c => {
                let classificacao = "bg-success"
                c.innerHTML = "L"
                if(c == 18)
                    classificacao = "bg-dark"
                else if(c == 16)
                    classificacao = "bg-danger"
                else if(c == 14)
                    classificacao = "bg-warning"
                else if(c == 12)
                    classificacao = "bg-warning"
                else if(c == 10)
                    classificacao = "bg-info"
                
                return classificacao;
            }

            let addClasses = element => {
                let img = document.querySelector('img')
                let figure = document.querySelector('figure')
                let figcaption = document.querySelector('figcaption')
                let small = document.querySelector('small')
                img.classList.add("img-fluid")
                img.classList.add("figure-img")
                figure.classList.add("figure")
                figcaption.classList.add("figcaption")
                small.classList.add("text-right")
            }

            filmes.forEach(filme => {
                content.appendChild(criaFilme(filme))
                let f = document.querySelector(".filme")
                //verificaClassificacao(filme.classificacao)
                addClasses(f)
            })

        })

    )
    .catch(function(error){
        alert('Erro ao carregar página: '+ error.message)
    })
