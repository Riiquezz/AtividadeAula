import React from 'react'
import comp2 from './assets/comp2.png';
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

export const Componente2 = () => (
    <Styles>
        <Container>
            <div>
                <center><h2 class="h1-responsive font-weight-bold my-5">Segundo componente - Form</h2></center>

                <center><p class="grey-text w-responsive mx-auto mb-5">Este é um componente de formulário, basicamente</p></center>
                <center><p>Segue abaixo um exemplo do componente!</p></center>


                <div class="row d-flex justify-content-center">



                    <div class="col-md-6 col-xl-5 mb-4">

                        <center><div class="view overlay rounded z-depth-2">
                            <Image
                                src={comp2}
                                width={700}
                                height={700}
                                Styles={Styles.image}
                            />

                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div></center>
                        <div class="card-body">
                            <a href="" class="green-text">
                                <h5 class="font-weight-bold mt-2 mb-3"><i class="fas fa-chart-line pr-2"></i>Exemplo de código:</h5>
                            </a>
                            <h4 class="font-weight-bold mb-3">Segue abaixo um exemplo de utilização em seu HTML</h4>
                            
                                <code>&lt;Form&gt;
&lt;Form.Group controlId=&quot;formBasicEmail&quot;&gt;
&lt;Form.Label&gt;Email address&lt;/Form.Label&gt;
&lt;Form.Control type=&quot;email&quot; placeholder=&quot;Enter email&quot; /&gt;
&lt;Form.Text className=&quot;text-muted&quot;&gt;
We'll never share your email with anyone else.
&lt;/Form.Text&gt;
&lt;/Form.Group&gt;

&lt;Form.Group controlId=&quot;formBasicPassword&quot;&gt;
&lt;Form.Label&gt;Password&lt;/Form.Label&gt;
&lt;Form.Control type=&quot;password&quot; placeholder=&quot;Password&quot; /&gt;
&lt;/Form.Group&gt;
&lt;Form.Group controlId=&quot;formBasicChecbox&quot;&gt;
&lt;Form.Check type=&quot;checkbox&quot; label=&quot;Check me out&quot; /&gt;
&lt;/Form.Group&gt;
&lt;Button variant=&quot;primary&quot; type=&quot;submit&quot;&gt;
Submit
&lt;/Button&gt;
&lt;/Form&gt;
</code>

                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </Styles>


)
