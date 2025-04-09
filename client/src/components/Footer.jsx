import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 md:px-6 lg:px-8 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-foreground font-bold text-xl">Wallet</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
            <div className="text-sm text-muted-foreground">© Astros 2023</div>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">Privacy policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">Cookies policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">Terms of use</a>
          </div>
          <div className="mt-6 md:mt-0 flex items-center">
            <span className="text-sm text-muted-foreground mr-3 hidden md:block">Updates right to your inbox</span>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Email address" 
                className="bg-card border border-border rounded-l-md rounded-r-none focus:ring-primary" 
              />
              <Button className="rounded-l-none">Send</Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
