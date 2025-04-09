import { Button } from "@/components/ui/button";
import CircularChart from "./charts/CircularChart";
import LineChart from "./charts/LineChart";
import AreaChart from "./charts/AreaChart";

const Hero = () => {
  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="animate-in slide-in-from-bottom duration-500">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">SaaS Landing Page Template</h1>
          <p className="text-muted-foreground mb-8">
            This is a template for your SaaS product landing page using Astros. Learn more at astrosapp.com
          </p>
          <Button className="bg-[#F3C677] hover:bg-[#F3C677]/90 text-[#121212] font-medium px-6 py-5 rounded-md shadow-lg hover:-translate-y-1 transition-all">
            Get Started
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 transition-all duration-300 hover:-translate-y-2">
          <div className="bg-card rounded-lg p-4">
            <p className="text-xs text-muted-foreground mb-2">Circular Progress</p>
            <div className="h-[140px] flex items-center justify-center">
              <CircularChart />
            </div>
          </div>
          <div className="bg-card rounded-lg p-4">
            <p className="text-xs text-muted-foreground mb-2">Monthly Engagement</p>
            <div className="h-[140px]">
              <LineChart />
            </div>
          </div>
          <div className="col-span-2 bg-card rounded-lg p-4">
            <p className="text-xs text-muted-foreground mb-2">Annual Growth</p>
            <div className="h-[140px]">
              <AreaChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
