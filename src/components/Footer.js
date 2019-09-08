import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import backgroundImage from '../assets/background.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${backgroundImage}) no-repeat fixed bottom;
        
        color: #ccc;
        
        position: relative;
        z-index: -2;
    }

    .overlay {
        
        
        
        
        
    }
`;

export const Footer = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>

                <div>
                    <footer class="footer_area p_120">
                        <div class="container">
                            <div class="row footer_inner">
                                <div class="col-lg-5 col-sm-6">
                                    <aside class="f_widget ab_widget">
                                        <div class="f_title">
                                            <h3>Sobre mim</h3>
                                        </div>
                                        <p>Você quer saber mais sobre mim?</p>
                                        <p>
                                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Acesse meu LinkedIn <i class="fa fa-heart-o" aria-hidden="true"></i> em <a href="https://www.linkedin.com/in/henrique-pomatti-dos-santos-641bb9125/" target="_blank">LinkedIn!</a></p>
                                    </aside>
                                </div>
                                <div class="col-lg-5 col-sm-6">

                                </div>
                                <div class="col-lg-2">
                                    <aside class="f_widget social_widget">
                                        <div class="f_title">
                                            <h3>Procurando outro contato?</h3>
                                        </div>
                                        <p>Vamos conversar!</p>
                                        <ul class="list">
                                        <li><form action=" Seu link" method="get"> <input type="submit" value="Facebook"/></form></li>
                                        <li><form action=" Seu link " method="get"> <input type="submit" value="LinkedIn"/></form></li>
                                        </ul>
                                        <p>Skype: Saantos123</p>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </footer>

                </div>


            </Container>
        </Jumbo>
    </Styles>
)