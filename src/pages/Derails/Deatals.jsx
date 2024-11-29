import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../App.css";

function Details() {
  const { id } = useParams();
  const [item, setItem] = useState(null); // Item details state
  const [loading, setLoading] = useState(true); // Loading state
  const [activeTab, setActiveTab] = useState("malumot"); // State for active tab

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://a510c4f98367eca1.mokky.dev/aniDub/${id}`)
      .then((res) => {
        setItem(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ma'lumotni olishda xato:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Yuklanmoqda...</div>;
  }

  function Comments(props) {
    return <div>{props.item.name}</div>;
  }

  return (
    <div className=" container mt-4">
      <div className="flex items-center gap-14 font-bold ms-10">
        <button
          className={`cursor-pointer ${
            activeTab === "malumot" ? "text-[#00F0FF]" : ""
          }`}
          onClick={() => setActiveTab("malumot")}
        >
          <span className="text-[#00F0FF]">M</span>alumot
        </button>
        <button
          className={`cursor-pointer ${
            activeTab === "izohlar" ? "text-[#00F0FF]" : ""
          }`}
          onClick={() => setActiveTab("izohlar")}
        >
          <span className="text-[#00F0FF]">I</span>zohlar
        </button>
        <button
          className={`cursor-pointer ${
            activeTab === "kadrlar" ? "text-[#00F0FF]" : ""
          }`}
          onClick={() => setActiveTab("kadrlar")}
        >
          <span className="text-[#00F0FF]">K</span>adrlar
        </button>
      </div>

      <hr />

      <div className="content mt-4">
        {/* Malumot */}
        {activeTab === "malumot" && (
          <div>
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        )}
        {/* Izohlar */}
        {activeTab === "izohlar" && (
          <div>
            <h3 className="text-lg font-bold">Izohlar:</h3>
            <Comments item={item} />
          </div>
        )}
        {/* Kadrlar */}
        {activeTab === "kadrlar" && (
          <div>
            <h3 className="text-lg font-bold">Kadrlar:</h3>
            <img src={item.img} className="mb-4" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Details;
