import React from 'react'
import foto from './assets/Foto.png';
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

export const Sobre = () => (
    <Styles>
        <Container>
            <div>
                <center><h2 class="h1-responsive font-weight-bold my-5">Sobre o Desenvolvedor</h2></center>

                <center><h3>Henrique Pomatti dos Santos</h3></center>
                


                <div class="row d-flex justify-content-center">



                    <div class="col-md-6 col-xl-5 mb-4">

                        <div class="view overlay rounded z-depth-2">
                            <Image
                                src={foto}
                                width={500}
                                height={500}
                                Styles={Styles.image}
                            />

                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>
                        <div class="card-body">
                            <a href="" class="green-text">
                                <h5 class="font-weight-bold mt-2 mb-3"><i class="fas fa-chart-line pr-2"></i>Mas quem sou eu?</h5>
                            </a>
                            <p class="font-weight-bold mb-3">Aspirante a desenvolvedor, atualmente atuando como Analista de Sistemas,
                            em busca de experiência na área de Desenvolvimento de Software.
                            </p>
                            
                                

                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </Styles>


)
