import { getTourBySlug } from "@/Utils";
import Hero from "@/Components/Tour/Hero";
import { TourData, TourInfo } from "@/Components/Tour/models";
import FeaturesTour from "@/Components/Tour/FeaturesTour";
import Introduction from "@/Components/Tour/IntroductionTour";
import InfoTour from "@/Components/Tour/InfoTour";

const Page = async ({ params }: { params: any }) => {
  const { slug } = params;
  let tourInfo: TourInfo = {
    overview: "",
    itineraryContent: {
      day1: {
        titulo: "",
        theBestOfTheDay: "",
        content: "",
        image1: null,
      },
    },
  
  };
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
              sourceUrl: "",
            },
          },
          title: "",
          tourprice: 0,
          tourDuration: "",
        },
        features: {
          difficulty: [],
          maxaltitude: 0,
        },
        accomodationAndGroup: {
          accommodation: [],
          groupSize: 0,
        },
        introduction: {
          introductionContent: {
            secondaryTitle: "",
            content: null,
          },
          map: {
            node: {
              sourceUrl: "",
            },
          },
        },
        tourInfo: {
          overview: "",
          itineraryContent: {
            day1: {
              titulo: "",
              theBestOfTheDay: "",
              content: "",
              image1: null,
            },
          },
        },
      },
      language: {
        slug: "",
      },
    },
  };
  try {
    data = await getTourBySlug(slug);
    tourInfo = data.tour.tours.tourInfo;
    // console.log(data.tour.tours.introduction);
    
  } catch (error) {
    console.error("Error obteniendo la gira por título:", error);
    // Maneja el error como prefieras aquí
  }

  return (
    <section className="mt-[8.5rem]">
      <Hero main={data.tour.tours.main} />
      <FeaturesTour
        featureTour={data.tour.tours.features}
        accomodationAndGroup={data.tour.tours.accomodationAndGroup}
      />
      <Introduction introduction={data.tour.tours.introduction} />
              
      <InfoTour tourInfo = {tourInfo} />
      
    </section>
  );
};

export default Page;
