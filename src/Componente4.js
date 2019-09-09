import React from 'react'
import comp4 from './assets/comp4.png';
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

export const Componente4 = () => (
    <Styles>
        <Container>
            <div>
                <center><h2 class="h1-responsive font-weight-bold my-5">Quarto componente - Table</h2></center>

                <center><p class="grey-text w-responsive mx-auto mb-5">Este é um componente de tabelas, basicamente</p></center>
                <center><p>Segue abaixo um exemplo do componente!</p></center>


                <div class="row d-flex justify-content-center">



                    <div class="col-md-6 col-xl-5 mb-4">

                        <div class="view overlay rounded z-depth-2">
                            <Image
                                src={comp4}
                                width={600}
                                height={600}
                                Styles={Styles.image}
                            />

                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>
                        <div class="card-body">
                            <a href="" class="green-text">
                                <h5 class="font-weight-bold mt-2 mb-3"><i class="fas fa-chart-line pr-2"></i>Exemplo de código:</h5>
                            </a>
                            <h4 class="font-weight-bold mb-3">Segue abaixo um exemplo de utilização em seu HTML</h4>
                            
                                <code>&lt;Table striped bordered hover&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;#&lt;/th&gt;
&lt;th&gt;First Name&lt;/th&gt;
&lt;th&gt;Last Name&lt;/th&gt;
&lt;th&gt;Username&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
&lt;tr&gt;
&lt;td&gt;1&lt;/td&gt;
&lt;td&gt;Mark&lt;/td&gt;
&lt;td&gt;Otto&lt;/td&gt;
&lt;td&gt;@mdo&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;2&lt;/td&gt;
&lt;td&gt;Jacob&lt;/td&gt;
&lt;td&gt;Thornton&lt;/td&gt;
&lt;td&gt;@fat&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;3&lt;/td&gt;
&lt;td colSpan=&quot;2&quot;&gt;Larry the Bird&lt;/td&gt;
&lt;td&gt;@twitter&lt;/td&gt;
&lt;/tr&gt;
&lt;/tbody&gt;
&lt;/Table&gt;
</code>

                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </Styles>


)
