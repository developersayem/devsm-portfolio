import ProfileCardCom from "@/components/Main/ProfileCardCom";
import ContactCardCom from "../components/Home/ContactCardCom";
import ExpertAreaCom from "../components/Home/ExpertAreaCom";
import RecentProjectCom from "@/components/Home/RecentProjectCom";
import ServicesCom from "@/components/Home/ServicesCom";
import DevCard from "@/components/Home/DevCard";

export default function Home() {
  return (
    <main className="w-full h-full bg-[#F3F3F3] bg-[linear-gradient(0deg,_transparent_24%,_var(--color)_25%,_var(--color)_26%,_transparent_27%,transparent_74%,_var(--color)_75%,_var(--color)_76%,_transparent_77%,transparent),_linear-gradient(90deg,_transparent_24%,_var(--color)_25%,_var(--color)_26%,_transparent_27%,transparent_74%,_var(--color)_75%,_var(--color)_76%,_transparent_77%,transparent)] [background-size:55px_55px]">
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="w-full">
          <ProfileCardCom />
        </div>
        {/*  */}
        <div className="grid lg:grid-cols-1 gap-5">
          <ExpertAreaCom />
          <DevCard />
        </div>
        {/*  */}
        <div className="">
          <RecentProjectCom />
        </div>
        {/*  */}
        <div className="col-span-2">
          <ServicesCom />
        </div>
        {/*  */}
        <div className="">
          <ContactCardCom />
        </div>
      </div>
    </main>
  );
}
