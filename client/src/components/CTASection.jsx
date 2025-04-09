import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CTASection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Questions? Let's talk</h2>
          <p className="text-muted-foreground mb-6">Contact us through our 24/7 live chat. We're always happy to help!</p>
          <Button className="bg-[#F3C677] hover:bg-[#F3C677]/90 text-[#121212] font-medium px-6 py-5 rounded-md shadow-lg hover:-translate-y-1 transition-all">
            Get Started
          </Button>
        </div>
        <Card className="bg-card p-6 rounded-xl border-0">
          <div className="w-full rounded-lg overflow-hidden bg-card flex items-center justify-center h-[200px]">
            <div className="grid grid-cols-2 gap-4 p-4">
              <div className="w-16 h-16 rounded-full bg-red-400 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <div className="w-16 h-16 rounded-full bg-purple-400 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <div className="w-16 h-16 bg-blue-400 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <div className="w-16 h-16 flex items-center justify-center">
                <div className="w-12 h-12 bg-yellow-400 transform rotate-45"></div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
