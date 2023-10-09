import { useState } from "react";
import PlaceItemCard from "./PlaceItemCard";
import SideDrawer from "./SideDrawer";
import Skelton from "./Skeleton";

function PlaceList({ placeList }: any) {
  const [selectedPlace, setSelectedPlace] = useState<any>([]);

  return (
    <div className="px-2 md:px-28 mt-7 z-10">
      <h2 className="text-xl font-bold">Search Results</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {placeList.map((place: any, index: number) => (
          <div key={index} onClick={() => setSelectedPlace(place)}>
            <PlaceItemCard place={place} />
          </div>
        ))}
      </div>
      {selectedPlace?.name ? (
        <div className="fixed top-0 right-0">
          <SideDrawer
            place={selectedPlace}
            close={() => setSelectedPlace([])}
          />
        </div>
      ) : null}
      {placeList?.length == 0 ? (
        <div
          className="grid 
        grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4
        gap-5"
        >
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <Skelton key={index} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default PlaceList;
