import { Card } from "@/components/ui/card";

const DashboardPreview = () => {
  return (
    <section className="w-full py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Card className="bg-card p-4 md:p-8 rounded-xl overflow-hidden border-0">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <div className="bg-black p-4 flex items-center gap-2 border-b border-border/20">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center text-xs text-muted-foreground">Wallet</div>
            </div>
            
            <div className="bg-black p-4">
              <div className="p-4 rounded-lg bg-[#1E1E1E]">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-gray-400 text-sm">Hello Johnny 👋</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                    <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                    <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-[#252525] p-4 rounded-lg">
                    <div className="text-xs text-gray-400 mb-1">Current balance</div>
                    <div className="text-xl font-bold">123,000€</div>
                    <div className="flex items-center mt-2">
                      <div className="h-1 w-16 bg-green-500 rounded-full"></div>
                      <div className="text-xs text-green-500 ml-2">+8%</div>
                    </div>
                  </div>
                  <div className="bg-[#252525] p-4 rounded-lg">
                    <div className="text-xs text-gray-400 mb-1">Spending forecast</div>
                    <div className="text-xl font-bold">34,200€</div>
                    <div className="flex items-center mt-2">
                      <div className="h-1 w-16 bg-red-500 rounded-full"></div>
                      <div className="text-xs text-red-500 ml-2">-12%</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#252525] p-4 rounded-lg">
                    <div className="text-xs text-gray-400 mb-2">Monthly budget</div>
                    <div className="h-[120px] flex items-center justify-center">
                      <div className="relative w-24 h-24">
                        <div className="absolute inset-0 rounded-full border-8 border-[#444]"></div>
                        <div className="absolute inset-0 rounded-full border-8 border-t-blue-500 border-r-purple-500 border-b-red-500 border-l-yellow-500 transform rotate-45"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">78%</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#252525] p-4 rounded-lg">
                    <div className="text-xs text-gray-400 mb-2">Spending frequency</div>
                    <div className="h-[120px] flex items-center justify-center">
                      <div className="w-full h-16 flex items-end justify-between">
                        <div className="w-2 h-4 bg-purple-500 rounded-t"></div>
                        <div className="w-2 h-8 bg-purple-500 rounded-t"></div>
                        <div className="w-2 h-12 bg-purple-500 rounded-t"></div>
                        <div className="w-2 h-6 bg-purple-500 rounded-t"></div>
                        <div className="w-2 h-10 bg-purple-500 rounded-t"></div>
                        <div className="w-2 h-14 bg-purple-500 rounded-t"></div>
                        <div className="w-2 h-7 bg-purple-500 rounded-t"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DashboardPreview;
