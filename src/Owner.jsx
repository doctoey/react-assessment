import React from "react";
import Layout from "./Layout";

const Owner = () => {
  return (
    <Layout>
    <div
      style={{
        height: "100vh",
        minHeight: "100vh",
        backgroundColor: "#ADC5B7",
        display: "flex", // Use flexbox
        alignItems: "center", // Center content vertically
        justifyContent: "center", // Center content horizontally
      }}
    >
      <div className="text-center">
        <h1>Lee Ji-Eun (IU)</h1>
        <img
          src="https://pbs.twimg.com/media/Ft9F7Y4XwAEVj5R?format=jpg&name=medium"
          alt="MinamiJung"
          width="300"
        />
        <p className="mt-3">
          Lee Ji-eun (Korean: 이지은; born May 16, 1993), also known by her
          stage name IU (Korean: 아이유),
          <br /> is a South Korean singer-songwriter, record producer, and
          actress.
        </p>
      </div>
    </div>
    </Layout>
  );
};

export default Owner;
