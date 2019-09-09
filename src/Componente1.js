import React from 'react'
import comp1 from './assets/comp1.png';
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
                <center><h2 class="h1-responsive font-weight-bold my-5">Primeiro componente - Carousel</h2></center>

                <center><p class="grey-text w-responsive mx-auto mb-5">Este é um componente de slides, basicamente</p></center>
                <center><p>Segue abaixo um exemplo do componente!</p></center>


                <div class="row d-flex justify-content-center">



                    <div class="col-md-6 col-xl-5 mb-4">

                        <div class="view overlay rounded z-depth-2">
                            <Image
                                src={comp1}
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
                            
                                <code>&lt;Carousel&gt;
&lt;Carousel.Item&gt;
&lt;img
className=&quot;d-block w-100&quot;
src=&quot;holder.js/800x400?text=First slide&amp;bg=373940&quot;
alt=&quot;First slide&quot;
/&gt;
&lt;Carousel.Caption&gt;
&lt;h3&gt;First slide label&lt;/h3&gt;
&lt;p&gt;Nulla vitae elit libero, a pharetra augue mollis interdum.&lt;/p&gt;
&lt;/Carousel.Caption&gt;
&lt;/Carousel.Item&gt;
&lt;Carousel.Item&gt;
&lt;img
className=&quot;d-block w-100&quot;
src=&quot;holder.js/800x400?text=Second slide&amp;bg=282c34&quot;
alt=&quot;Third slide&quot;
/&gt;

&lt;Carousel.Caption&gt;
&lt;h3&gt;Second slide label&lt;/h3&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/p&gt;
&lt;/Carousel.Caption&gt;
&lt;/Carousel.Item&gt;
&lt;Carousel.Item&gt;
&lt;img
className=&quot;d-block w-100&quot;
src=&quot;holder.js/800x400?text=Third slide&amp;bg=20232a&quot;
alt=&quot;Third slide&quot;
/&gt;

&lt;Carousel.Caption&gt;
&lt;h3&gt;Third slide label&lt;/h3&gt;
&lt;p&gt;Praesent commodo cursus magna, vel scelerisque nisl consectetur.&lt;/p&gt;
&lt;/Carousel.Caption&gt;
&lt;/Carousel.Item&gt;
&lt;/Carousel&gt;
</code>

                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </Styles>


)
