import React from "react";

class ContentIndex extends React.Component {
  render() {
    return (
      <>
        <section className="center section-index">
          <div
            className="imagem-index"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="90"
          >
            <img
              src="./img/img-profile-.png"
              alt="Foto perfil do Renan"
              title="Foto perfil do Renan"
            />
          </div>
        </section>

        <main>
          <div className="center">
            <div>
              <h1
                className="text-title colortext"
                data-aos="fade-down"
                data-aos-duration="3000"
                data-aos-delay="90"
              >
                Renan Gatti
              </h1>
              <div>
                <h2 className="sub-title typing-animation letra-piscando colortext">
                  Front-end Developer
                </h2>
              </div>
            </div>

            <div
              className="center"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay="90"
            >
              <div>
                <h3 className="title-h3">Quem eu sou</h3>
              </div>
              <div class="bg-conteudo conteudo">
                <p>
                  Meu nome é Renan, tenho 27 anos, sou um cidadão brasileiro e
                  italiano e tenho muito orgulho em dizer que carrego os dois
                  países no coração.
                </p>
                <p>
                  Já sou formado em Ciências Contábeis, mas tecnologia sempre
                  foi minha paixão e agora finalmente estou entrando na área que
                  amo e por isso no momento estou cursando Análise e
                  Desenvolvimento de Sistemas.
                </p>

                <p>
                  Estou seguindo os estudos na área de front-end a qual me
                  identifiquei, e me apaixonei.
                </p>
                <p>
                  Atualmente, também estou fazendo o curso de Programador Full
                  Stack JavaScript da OneBitCode e já quero poder colocar em
                  prática meus conhecimentos adquiridos na faculdade e no curso
                  de forma útil para contribuir na criação de páginas web e
                  assim aprender muito mais do mercado de T.I. e adquirir novas
                  experiências.
                </p>
                <p>
                  Sou apaixonado por idiomas, tenho o português como língua
                  nativa, aprendi o italiano sozinho e no momento estou
                  estudando inglês e além desses pretendo aprender o espanhol
                  também.
                </p>
                <p>
                  Sempre estou em busca de novos conhecimentos e de
                  compartilhá-los, o conhecimento tem o poder de mudar o mundo,
                  e hoje em dia, através da tecnologia podemos fazer isso de
                  formas antes inimagináveis e assim inovar ainda mais, trazendo
                  para a sociedade novas experiências, novas melhorias, novos
                  estilos de vida, mais leves e que prezem pelo bem viver.
                </p>
                <p>
                  No tempo livre, fora do trabalho e dos estudos, você poderá me
                  encontrar sempre com os amigos e a família, assim como poderá
                  me ver também descansando ao sol com uma xícara de café na
                  mão, ou simplesmente estudando algum idioma que pretendo
                  aprender.
                </p>
              </div>
              <div className="bg-conteudo conteudo">
                <p>Este é o meu site!</p>
                <p>
                  Aqui você encontrará infomações sobre mim além de poder
                  consultar meus projetos e os meios de entrar em contato comigo
                </p>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="center">
              <h3 className="title-h3">SKILLS</h3>
            </div>
            <div
              className="cards-vento"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-delay="40"
            >
              <div className="efeito-card-vento item-card1">
                <img src="./img/logo-tech/html-5.png" />
                <p>HTML 5</p>
              </div>
              <div className="efeito-card-vento item-card2">
                <img src="./img/logo-tech/css-3.png" />
                <p>CSS 3</p>
              </div>
              <div className="efeito-card-vento item-card3">
                <img src="./img/logo-tech/sass.png" />
                <p>Sass</p>
              </div>
              <div className="efeito-card-vento item-card4">
                <img src="./img/logo-tech/javascript.png" />
                <p>JavaScript</p>
              </div>
              <div className="efeito-card-vento item-card5">
                <img src="./img/logo-tech/bootstrap.png" />
                <p>Bootstrap</p>
              </div>
              <div className="efeito-card-vento item-card6">
                <img src="./img/logo-tech/git.png" />
                <p>Git</p>
              </div>
            </div>
            <div
              className="card-vento-2"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-delay="40"
            >
              <img src="./img/logo-tech/html-5.png" />
              <img src="./img/logo-tech/css-3.png" />
              <img src="./img/logo-tech/sass.png" />
              <img src="./img/logo-tech/javascript.png" />
              <img src="./img/logo-tech/bootstrap.png" />
              <img src="./img/logo-tech/git.png" />
            </div>
          </div>

          <section id="section-2" className="center">
            <div className="bg-conteudo conteudo-redes-sociais item-1">
              <div>
                <h3 className="text-socialMedia">Redes sociais</h3>
              </div>
              <div>
                <div className="social-media">
                  <a
                    className="link-social-media-index"
                    href="https://www.linkedin.com/in/renan-gatti-88aa63113"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-icone-black bi bi-linkedin"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                    Linkedin
                  </a>
                </div>
                <div className="social-media">
                  <a
                    className="link-social-media-index"
                    href="https://github.com/gatti96"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-icone-black bi bi-github"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    GitHub
                  </a>
                </div>
                <div className="social-media">
                  <a
                    href="https://www.facebook.com/renan.francisco.315"
                    className="link-social-media-index"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-icone-black bi bi-facebook"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                    Facebook
                  </a>
                </div>
                <div className="social-media">
                  <a
                    href="https://www.instagram.com/renangatti.it/"
                    className="link-social-media-index"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-icone-black bi bi-black"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                    Instagram
                  </a>
                </div>
                <div className="social-media">
                  <a
                    href="https://wa.me/5544998256078"
                    target="_blank"
                    className="link-social-media-index"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-icone-black bi bi-whatsapp"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="card__giratorio item-2">
              <div className="card__giratorio-conteudo">
                <div class="card__giratorio-conteudo--frente">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-code logo"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" />
                  </svg>
                  <p>Deseja contratar!</p>
                  <p>
                    Veja o currículo{" "}
                    <span className="mobile">clicando aqui</span>
                  </p>
                </div>
                <div className="card__giratorio-conteudo--traseira">
                  <img
                    src="./img/logo.png"
                    alt="Logo Renan Gatti"
                    className="logo"
                  />
                  <h1>Renan Gatti</h1>
                  <p>Front-end Developer</p>
                  <p>
                    <a
                      className="link-card"
                      target="_blank"
                      href="./dowload/Profile.pdf"
                    >
                      Currículo aqui
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default ContentIndex;
