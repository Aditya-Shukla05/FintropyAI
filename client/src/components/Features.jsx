import { CreditCard, DollarSign, FolderArchive } from "lucide-react";

const FeatureCard = ({ icon, title, description, color }) => {
  return (
    <div className="bg-card rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:bg-card/80">
      <div className={`w-16 h-16 mb-4 ${color} rounded-lg flex items-center justify-center`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <CreditCard className="w-8 h-8 text-blue-400" />,
      title: "Customizable card",
      description: "Control your own card or let the wallet do it for you - you're in charge.",
      color: "bg-blue-500/20",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-purple-400" />,
      title: "No payment fee",
      description: "Transfer your payment all over the world with no fee - save money.",
      color: "bg-purple-500/20",
    },
    {
      icon: <FolderArchive className="w-8 h-8 text-yellow-400" />,
      title: "All in one place",
      description: "The right place to keep your credit card, transit cards, boardings passes, tickets and more.",
      color: "bg-yellow-500/20",
    },
  ];

  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            color={feature.color}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
