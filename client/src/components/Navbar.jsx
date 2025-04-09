import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-4 md:px-6 lg:px-8 border-b border-border/30">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-foreground font-bold text-xl">Wallet</div>
        <div className="flex space-x-2">
          <Button variant="ghost" className="text-foreground">Sign up</Button>
          <Button>Log in</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
