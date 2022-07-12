import 'react-multi-carousel/lib/styles.css';

export const Experiance = () => {
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
    <section className="experiance" id="experiance">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="experiance-bx wow zoomIn">
                        <h2>Experiance</h2>
                        
                        <p>
                        Graphics and Web Design freelancing at Upwork<br></br>
                        March, 2018 - Present<br></br>
                        clickthroughs from DevOps to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
                        <br></br><br></br>
                        Frontend and Backend Developer at MAC ART<br></br>
                        May, 2020 - Present<br></br>
                        Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
                        <br></br><br></br>Graphic Designer at Millemico ltd
                        <br></br>June, 2018 - May, 2020<br></br>
                        Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
                        <br></br><br></br>Junior Web Developer at BKK Studio
                        <br></br>Jan, 2016 - May, 2018<br></br>
                        User generated content in real-time will have multiple touchpoints for offshoring. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
