import { getTourBySlug } from "@/Utils";
import Hero from "@/Components/Tour/Hero";
import { TourData } from "@/Components/Tour/models";
import FeaturesTour from "@/Components/Tour/FeaturesTour";

const Page = async ({ params }: { params: any }) => {
  const { slug } = params;
let data: TourData = {
  tour: {
    id: "",
    title: "",
    slug: "",
    translations: [],
    tours: {
      main: {
        mainImage: {
          node: {
            sourceUrl: ""
          }
        },
        title: "",
        tourprice: 0,
        tourDuration: ""
      },
      features: {
        difficulty: [],
        maxaltitude: 0
      },
      accomodationAndGroup: {
        accommodation: [],
        groupSize: 0
      }
    },
    language: {
      slug: ""
    }
  }
};  try {
    data = await getTourBySlug(slug);
    console.log(data.tour.tours.main);
  } catch (error) {
    console.error("Error obteniendo la gira por título:", error);
    // Maneja el error como prefieras aquí
  }

  return (
    <section className="mt-[8.5rem]">
      <Hero main={data.tour.tours.main} />
      <FeaturesTour featureTour = {data.tour.tours.features} accomodationAndGroup = {data.tour.tours.accomodationAndGroup}/>
    </section> 
  );
};

export default Page;
