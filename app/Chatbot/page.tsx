import ChatContainer from "@/component/ChatContainer";

export default function Home() {
    return (
      <main
        className="flex flex-col items-center justify-center w-full min-h-screen p-4 gap-4 md:flex-row md:p-8"
        style={{
          backgroundImage: `url('/img/dog-food-prep.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        
        <div className="w-full max-w-xl mx-auto md:w-2/3 md:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
          <div className="card bg-white p-6 shadow-lg rounded-lg h-[85vh]" style={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}>
            <ChatContainer />
          </div>
        </div>
      </main>
    );
  }