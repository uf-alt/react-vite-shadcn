import profileImage from "@/assets/image.png";

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <img
              src={profileImage}
              alt="Profile"
              className="w-48 h-48 object-cover shadow-lg"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              About Me
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              As per popular belief, Lucas is a human. However, the one
              responsible for the menial coding of this website (and the
              other one, which is assumed to be shown to you later) is 
              Claude. 
              <br></br><br></br>
              Despite it possessing the historical real, fr*nch name "Claude",
              it is not a human, but a collection of miles upon miles of
              wires in which electrons perform complex dances to synthesize
              tasteful and not-so-tasteful content and media, housed in a database based at an undisclosed
              location.
              <br></br><br></br>
              Not to disparage the feat of engineering so enormous that it
              has well exceeded the grasp of a single human mind, but the website was designed solely by Lucas. 
              That is to say, Claude put Lucas' ideas onto the digital canvas.
              Had Lucas not been present, this website would never have
              come to fruition.
              <br></br><br></br>
              On the left is a self-portrait of Lucas. Please 
              bask in its childish beauty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
