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
        {/* Adjusted the width to give more space to the chatbox if the left card is not needed */}
        <div className="w-full max-w-xl mx-auto mb-4 md:mb-0 md:w-1/3 md:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
          {/* Add content here or remove this div if not needed */}
          <div className="card bg-white p-6 shadow-lg rounded-lg md:mb-0 md:mr-4 h-fit md:h-[85vh]">
            {/* Content goes here */}
          </div>
        </div>
        <div className="w-full max-w-xl mx-auto md:w-2/3 md:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
          <div className="card bg-white p-6 shadow-lg rounded-lg h-[85vh]" style={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}>
            <ChatContainer />
          </div>
        </div>
      </main>
    );
  }