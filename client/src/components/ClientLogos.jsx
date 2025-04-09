import { SiAccenture, SiApple, SiGoogle } from "react-icons/si";
import { BsMicrosoft } from "react-icons/bs";

const ClientLogos = () => {
  return (
    <section className="w-full py-12 px-4 md:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="opacity-60 hover:opacity-100 transition-opacity">
            <SiAccenture className="h-7 w-auto text-muted-foreground" />
          </div>
          <div className="opacity-60 hover:opacity-100 transition-opacity">
            <SiApple className="h-8 w-auto text-muted-foreground" />
          </div>
          <div className="opacity-60 hover:opacity-100 transition-opacity">
            <BsMicrosoft className="h-7 w-auto text-muted-foreground" />
          </div>
          <div className="opacity-60 hover:opacity-100 transition-opacity">
            <SiGoogle className="h-7 w-auto text-muted-foreground" />
          </div>
          <div className="opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-muted-foreground text-xl">BearingPoint</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
