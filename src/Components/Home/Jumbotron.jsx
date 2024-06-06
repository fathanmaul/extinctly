import fotoMataIstri from "../../assets/Home/fuxuan_icon.jpg";

function Jumbotron() {
  return (
    <div className="w-full flex flex-col md:items-center items-start justify-center px-5 md:px-0">
      <div>
        <img
          src={fotoMataIstri}
          alt=""
          className="rounded-full w-[200px] h-auto"
        />
      </div>
      <div className="mt-9">
        <h2 className="font-display text-slate-600 text-xl md:text-2xl font-bold">
          Hi, I'm Fathan✌️
        </h2>
      </div>
      <div>
        <h1 className="font-title font-bold text-4xl md:text-5xl mt-3 md:text-center text-start text-[#BC8ECE]">
          Web & Mobile Developer
        </h1>
      </div>
      <div className="mt-4 max-w-2xl">
        <h2 className="font-display text-slate-600 text-lg md:text-xl font-bold md:text-center whitespace-pre-line">
          Undergraduate Student and <br />
          Mobile Development Cohort at Bangkit Academy 2024
        </h2>
      </div>
      <div className="mt-4 flex flex-row md:justify-center gap-4">
        <button
          onClick={() => {
            window.location.href =
              "https://cdn.discordapp.com/attachments/891712323717333008/1248184092466348082/Curriculum_Vitae_Fathan_Maulana.pdf?ex=6662bd85&is=66616c05&hm=74bcd0e4f4f4b7aea39db87d52428b9588a3549bd51bb9081019641e5c82f9a5&";
          }}
          className="w-[150px] font-display text-primary px-4 py-2 rounded-lg transition ease-in-out duration-150 bg-[#bc8ece23] hover:bg-[#bc8ece3a]"
        >
          Download CV
        </button>
        <button className="w-[150px] font-display text-primary px-4 py-2 bg-[#BC8ECE] text-white rounded-lg transition ease-in-out duration-150 hover:bg-[#a67eb6] hover:text-white">
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default Jumbotron;
