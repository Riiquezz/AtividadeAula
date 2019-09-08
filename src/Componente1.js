import React from 'react'
import image1 from './assets/image1.png';
import Image from 'react-image-resizer';
import styled from 'styled-components';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';

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

export const Componente1 = () => (
    <Styles>
        <Container>
            <div>
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
                </div>
            </div>
        </Container>
    </Styles>


)
