import {Component} from 'react';
import './portfolio.css';

class portfolio extends Component{
    render(){
        const imageUrl = process.env.PUBLIC_URL + '/My Image.jpg';
        return(
            <div class="container">
                <center><h1 class="bg-dark text-light m-1 mb-0">My Portfolio</h1></center>
                <div class="row mt-0">
                    <div class="col-md-4">
                        <img src={imageUrl} alt="Me" class="img-fluid rounded border border-info p-2 w-80 mt-5 slide-in "/>
                    </div>
                    <div class="col-md-8">
                        <div class="jumbotron jumbotron-fluid mt-5 bg-secondary border rounded">
                            <div class="container1 border border-secondary rounded">
                                <h3 class="p-2">About Me</h3>
                                <p class="p-2 one">
                                I am Jujjavarapu Krishna Chaitanya. Computer Science Student at VIT-AP uinversity, passionate to work in a competitive environment where I can showcase my
                                technical skills. </p>
                            </div>
                        </div>

                        <div class="jumbotron jumbotron-fluid mt-1 bg-secondary border rounded">
                            <div class="container1 border border-secondary rounded">
                                <h3 class="p-2">Skills</h3>
                                <p class="p-1 one">
                                    <ul>
                                        <li>Programming: Python, Java</li>
                                        <li>Web-Development: HTML, CSS, JavaScript, React, Node, Express</li>
                                        <li>Database: MySQL, MongoDB</li>
                                    </ul>
                                </p>
                            </div>
                        </div>

                        <div class="jumbotron jumbotron-fluid mt-1 bg-secondary border rounded">
                            <div class="container1 border border-secondary rounded">
                                <h3 class="p-2">Hobbies</h3>
                                <p class="p-1 one">
                                    <ul>
                                        <li>Playing Cricket</li>
                                        <li>Watching Movies, Webseries, Anime</li>
                                        <li>Programming</li>
                                    </ul>
                                </p>
                            </div>
                        </div>

                        <div class="jumbotron jumbotron-fluid mt-1 bg-secondary border rounded">
                            <div class="container1 border border-secondary rounded">
                                <h3 class="p-2">Contact Me: <a href="mailto:jujjavarapchaitanya14@gmail.com">Email</a> <a href="https://www.linkedin.com/in/krishna-chaitanya-jujjavarapu-035a3a253/">LinkedIn</a> +91 9154522356</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default portfolio;