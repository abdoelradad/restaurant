"use client";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

import "leaflet/dist/leaflet.css";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const markers = [
  {
    position: [34.052235, -118.243683],
    title: "Location 1",
    subtitle: "Ipsum elitr accusam takimata voluptua sit sanctus nonumy et.",
    image: "/assets/map/1.png",
  },
  {
    position: [33.9747, -118.3365],
    title: "Location 1",
    subtitle: "Ipsum elitr accusam takimata voluptua sit sanctus nonumy et.",
    image: "/assets/map/2.png",
  },
  {
    position: [34.052235, -118.3876],
    title: "Location 1",
    subtitle: "Ipsum elitr accusam takimata voluptua sit sanctus nonumy et.",
    image: "/assets/map/3.png",
  },
];

const customIcon = new Icon({
  iconUrl: "/assets/pin-solid.svg",
  iconSize: [40, 40],
});

const Map = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <section
      className=" relative xl:after:w-full xl:after:h-[240px] xl:after:bg-gradient-to-b xl:after:from-white xl:after:via-white/80 xl:after:to-white/20 xl:after:absolute xl:after:top-0 xl:after:z-20"
      id="contact"
    >
      <MapContainer
        center={[34.052235, -118.243683]}
        zoom={isMobile ? 10 : 12}
        className={`${isMobile ? "h-[300px]" : "h-[900px]"} z-10`}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {markers.map((marker, index) => {
          return (
            <Marker key={index} position={marker.position} icon={customIcon}>
              <Popup>
                <div className="flex gap-x-[30px]">
                  <div className="flex-1">
                    <h3>{marker.title}</h3>
                    <p className="leading-snug ">{marker.subtitle}</p>
                  </div>
                  <div className="flex-1">
                    <Image src={marker.image} width={130} height={160} alt="" />
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </section>
  );
};

export default Map;
