"use client";
import dynamic from "next/dynamic";
import "@arcgis/map-components/dist/components/arcgis-map";

const Client = () => (
      <arcgis-map class="arcgis-map" itemId="d5dda743788a4b0688fe48f43ae7beb9"></arcgis-map>
  );

export default dynamic(() => Promise.resolve(Client), {ssr: false});