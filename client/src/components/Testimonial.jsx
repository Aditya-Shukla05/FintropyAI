import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonial = () => {
  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-primary/20 rounded-xl p-8 md:p-10">
          <div className="flex flex-col">
            <p className="text-lg md:text-xl text-foreground italic mb-6">
              "Wallet is a great product! All of my most important information is there - credit cards, transit cards, boarding passes, tickets, and more. And I don't need to worry because it's all in one place! Thanks!"
            </p>
            <div className="flex items-center">
              <Avatar className="h-12 w-12 mr-4">
                <AvatarImage src="https://api.dicebear.com/7.x/personas/svg?seed=John" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
