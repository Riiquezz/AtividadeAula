import React from 'react'
import comp5 from './assets/comp5.png';
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

export const Componente5 = () => (
    <Styles>
        <Container>
            <div>
                <center><h2 class="h1-responsive font-weight-bold my-5">Primeiro componente - Button Group</h2></center>

                <center><p class="grey-text w-responsive mx-auto mb-5">Este é um componente de grupo de botões, basicamente</p></center>
                <center><p>Segue abaixo um exemplo do componente!</p></center>


                <div class="row d-flex justify-content-center">



                    <div class="col-md-6 col-xl-5 mb-4">

                        <div class="view overlay rounded z-depth-2">
                            <Image
                                src={comp5}
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
                                <h5 class="font-weight-bold mt-2 mb-3"><i class="fas fa-chart-line pr-2"></i>Exemplo de código:</h5>
                            </a>
                            <h4 class="font-weight-bold mb-3">Segue abaixo um exemplo de utilização em seu HTML</h4>
                            
                                <code>&lt;ButtonGroup vertical&gt;
&lt;Button&gt;Button&lt;/Button&gt;
&lt;Button&gt;Button&lt;/Button&gt;
&lt;DropdownButton as={"#"} title=&quot;Dropdown&quot; id=&quot;bg-vertical-dropdown-1&quot;&gt;
&lt;Dropdown.Item eventKey=&quot;1&quot;&gt;Dropdown link&lt;/Dropdown.Item&gt;
&lt;Dropdown.Item eventKey=&quot;2&quot;&gt;Dropdown link&lt;/Dropdown.Item&gt;
&lt;/DropdownButton&gt;
&lt;Button&gt;Button&lt;/Button&gt;
&lt;Button&gt;Button&lt;/Button&gt;
&lt;DropdownButton as={"#"} title=&quot;Dropdown&quot; id=&quot;bg-vertical-dropdown-2&quot;&gt;
&lt;Dropdown.Item eventKey=&quot;1&quot;&gt;Dropdown link&lt;/Dropdown.Item&gt;
&lt;Dropdown.Item eventKey=&quot;2&quot;&gt;Dropdown link&lt;/Dropdown.Item&gt;
&lt;/DropdownButton&gt;
&lt;DropdownButton as={"#"} title=&quot;Dropdown&quot; id=&quot;bg-vertical-dropdown-3&quot;&gt;
&lt;Dropdown.Item eventKey=&quot;1&quot;&gt;Dropdown link&lt;/Dropdown.Item&gt;
&lt;Dropdown.Item eventKey=&quot;2&quot;&gt;Dropdown link&lt;/Dropdown.Item&gt;
&lt;/DropdownButton&gt;
&lt;/ButtonGroup&gt;
</code>

                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </Styles>


)
