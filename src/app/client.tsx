"use client";
import dynamic from "next/dynamic";
import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-expand";

const Client = () => (
      <arcgis-map class="arcgis-map" itemId="d5dda743788a4b0688fe48f43ae7beb9">
          <arcgis-expand close-on-esc position="bottom-left" mode="floating">
            <arcgis-placement>
              
            </arcgis-placement>
          </arcgis-expand>
      </arcgis-map>
  );

export default dynamic(() => Promise.resolve(Client), {ssr: false});