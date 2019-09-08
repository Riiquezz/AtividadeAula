import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import backgroundImage from './assets/background.jpg';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import Image from 'react-image-resizer';


const Styles = styled.div`{
    .homepage {
        width:760px;
        height:200px;
        overflow:hidden;
        
        padding-top: 27px;
        padding-left: 24px;
        background-color: black;
    }

    .image: {
        flex: 1,
        width: 50,
        height: 50,
        
        
        
        
        
    
    }
`;

export const Home = () => (
    
    <Styles>

        <div className="#">


        
            <Container>


                
                <h2 class="h1-responsive font-weight-bold my-5">Bem vindo ao tutorial de React-Bootstrap!</h2>

                <p class="grey-text w-responsive mx-auto mb-5">Este tutorial é indicado para pessoas que nunca tiveram contato com React.</p>
                <p>Segue abaixo os passos para iniciar seu primeiro projeto!</p>


                <div class="row d-flex justify-content-center">



                    <div class="col-md-6 col-xl-5 mb-4">

                        <div class="view overlay rounded z-depth-2">
                            <Image
                                src={image1}
                                width={400}
                                height={400}
                                Styles={Styles.image}
                            />

                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>

                        <div class="card-body">
                            <a href="" class="green-text">
                                <h5 class="font-weight-bold mt-2 mb-3"><i class="fas fa-chart-line pr-2"></i>1º passo</h5>
                            </a>
                            <h4 class="font-weight-bold mb-3">Criando o ambiente</h4>
                            <p>Deve ser executado o comando "npx create-react-app atividade"</p>

                        </div>
                    </div>



                    <div class="col-md-6 col-xl-5 mb-4">

                        <div class="view overlay rounded z-depth-2">
                            <Image
                                src={image2}
                                width={400}
                                height={400}
                                Styles={Styles.image}
                            />
                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>

                        <div class="card-body">
                            <a href="" class="blue-text">
                                <h5 class="font-weight-bold mt-2 mb-3"><i class="fas fa-eye pr-2"></i>2º passo</h5>
                            </a>
                            <h4 class="font-weight-bold mb-3">Acessando a pasta</h4>
                            <p>Deve ser acessada a pasta do projeto a qual foi criada. Nesse caso é "atividade", após isso pode ser rodado o comando "npm install react-bootstrap bootstrap. Esse comando instala a biblioteca do React-Bootstrap.</p>

                        </div>
                    </div>


                </div>



                <div class="row d-flex justify-content-center">


                    <div class="col-md-6 col-xl-5 mb-md-0 mb-4">

                        <div class="view overlay rounded z-depth-2">
                            <Image
                                src={image3}
                                width={400}
                                height={400}
                                Styles={Styles.image}
                            />
                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>

                        <div class="card-body pb-md-0">
                            <a href="" class="brown-text">
                                <h5 class="font-weight-bold mt-2 mb-3"><i class="fas fa-camera pr-2"></i>3º passo</h5>
                            </a>
                            <h4 class="font-weight-bold mb-3">Iniciando o ambiente</h4>
                            <p>Pode então ser rodado o comando "npm start" para iniciar o ambiente e conseguimos trabalhar.
        </p>

                        </div>
                    </div>



                    <div class="col-md-6 col-xl-5">

                        <div class="view overlay rounded z-depth-2">
                            <Image
                                src={image4}
                                width={400}
                                height={400}
                                Styles={Styles.image}
                            />

                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>

                        <div class="card-body pb-0">
                            <a href="" class="cyan-text">
                                <h5 class="font-weight-bold mt-2 mb-3"><i class="fas fa-phone pr-2"></i>4º passo</h5>
                            </a>
                            <h4 class="font-weight-bold mb-3">Acessando o ambiente</h4>
                            <p>Então por fim, irá abrir em nosso navegador um link para o ambiente, aonde enquanto é feita as alterações no código, irá sendo atualizado em tempo real para verificação.</p>

                        </div>
                    </div>


                </div>
            </Container>
        </div>

    </Styles>
    



)
