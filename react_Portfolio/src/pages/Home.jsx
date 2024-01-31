import Headshot from "/assets/img/Adam-riley_headshot.png";


function Home() {
    // Body
    return <div>
{/* Hero header  */}
 <section className="jumbotron heroHeader">
        <div className="container">
            <div className="row">
                <h1 className="col-md-4 col-sm-9 col-lg-5 mt-4">Front-end Software Developer</h1>
            </div>
            <div className="row">
                <p className="lead mt-4 col-md-5 col-lg-5 col-sm-8">
                    I'm Adam Riley. A Junior Front-end Software
                    Developer. This site showcases some of my projects and skills. Inclduding html / css/ javascipt/ react 
                </p>
                <hr className="my-4" />
            </div>
        </div>
    </section>

{/* about me section   */}
<section className="container pb-3" id="about-me">
        <h2 className="mb-5 pt-5">About Me</h2>
        <div className="row">

            <div className="col-lg-9 col-sm-8 col-xs-10">
                <div className="mx-auto mb-5 mb-lg-0">
                    <p>A highly motivated small business owner. Built and maintained a successful photography career
                        over the past 13 years. Proactive in problem-solving with a strong customer focus. Excels under
                        pressure, with a logical and methodical approach to achieving tasks and objectives.

                        A proven track record of providing exceptional content under pressure. Working as part of a
                        team, I am able to provide unique ideas and content and pride myself on the content I have
                        delivered to my clients over the years. I’m always willing to push myself, to learn new skills
                        and commit 100% to any project I am part of.

                        An experienced and adaptable digital forensic investigator with a history of leadership and
                        excellent interpersonal skills - motivates and encourages, developing strong relationships with
                        clients and colleagues at all levels.</p>

                        <button className ="button-style mt-4" onClick={() => window.open("https://docs.google.com/document/d/1VDPjt68y1Pw7hg7hG1ZhRyGwjjxE1VeWIQTScLIAcss/edit?usp=sharing", "_blank")} download="myFile">Download CV</button>


                        
                </div>
            </div>


            <div className="col-lg-3 col-m-3 col-xs-2">
                <div className="mb-5 mx-4 mb-lg-0">
                <img className="img-fluid rounded-circle" src={Headshot} alt="Adam Riley Photo" />

                
                </div>
            </div>
        </div>
    </section>

    </div>

}

       

export default Home;

// className='img-fluid rounded-circle mb-3'