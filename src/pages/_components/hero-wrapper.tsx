interface HeroProps {
    title: string;
    url?: string;
  }
  const HeroWrapper: React.FC<HeroProps> = ({ title, url }) => {
    return (
      <div className="hero h-80 w-screen bg-secondary">
        <div className="hero-content h-full w-full p-0 text-center">
          {url ? (
            <div
              className="hero-content h-full w-full text-center"
              style={{
                backgroundImage: `url(${url})`,
              }}
            >
              <div className="rounded-2xl bg-white p-5">
                <h1 className="text-5xl font-bold uppercase text-primary">
                  {title}
                </h1>
              </div>
            </div>
          ) : (
            <>
              {" "}
              <div className="max-w-md">
                <h1 className="text-6xl font-bold uppercase text-primary-content">
                  {title}
                </h1>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };
  export default HeroWrapper;
  