import Header from "@/app/components/header";
import CardGrid from "@/app/components/card-grid-three";
import Footer from "@/app/components/footer";
import VideoCarousel from "@/app/components/video-carrousel";
import Links from "../components/links";

export default function JAM() {
  const videoData = [
    {
      id: "GW62bwW1-kk",
      title: "JAM Tour - Hangzhou",
    },
    {
      id: "YZP3kJKfqSw",
      title: "JAM Toaster",
    },
    {
      id: "hJcw5FMSjQs",
      title: "Doom on JAM",
    },
  ];

  const readLinks = [
    {
      name: "Demystifying JAM",
      url: "https://www.parity.io/blog/JAM-demystified-explainer",
    },
    {
      name: "How JAM Changes The Future Of Web3",
      url: "https://hackmd.io/@shawntabrizi/BJCa_haWJx#/",
    },
    {
      name: "JAM And The JAM Grid",
      url: "https://permanencedao.medium.com/jam-and-the-jam-grid-the-subsequent-phases-of-the-polkadot-cloud-a79f416e5ec5",
    },
  ];

  const chatLinks = [
    {
      name: "Gray Paper Chat",
      url: "#",
    },
    {
      name: "JAM Chat",
      url: "#",
    },
  ];

  const cards = [
    {
      title: "JAM",
      description: "ONE LINER",
      imageUrl: "/temp.png",
      buttonLink: "/temp",
    },
    {
      title: "BUILD",
      description: "ONE LINER",
      imageUrl: "/temp.png",
      buttonLink: "/temp",
    },
    {
      title: "EARN",
      description: "ONE LINER",
      imageUrl: "/temp.png",
      buttonLink: "/temp",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow">
        <VideoCarousel videos={videoData} />
        <CardGrid cards={cards} />
        <Links header="READ" links={readLinks} />
        <Links header="CHAT" links={chatLinks} />
      </main>
      <Footer />
    </div>
  );
}
