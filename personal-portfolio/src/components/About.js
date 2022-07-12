import 'react-multi-carousel/lib/styles.css';

export const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="about" id="about">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="about-bx wow zoomIn">
                        <h2>About</h2>
                        <p>Hello! I’m MUKIZA Alain Christian from Rwanda, North, Musanze.<br></br> I am passionate about Graphic design and Web Design. I am a skilled front-end and back-end developer and master of graphic design tools such as Photoshop and Illustrator. I am a quick learner and a team worker that gets the job done.

                        <br></br>I can easily capitalize on low hanging fruits and quickly maximize timely deliverables for real-time schemas.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
