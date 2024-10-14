"use client";
import Image from "next/image";
import StarIcon from "@/public/Star.svg";
import YellowStarIcon from "@/public/YellowStar.svg";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
const Favourite = ({ id, favourite }: { id: string; favourite: boolean }) => {
  function selectTypeIcon(value: boolean) {
    switch (value) {
      case true:
        return <Image src={YellowStarIcon} alt="favourite icon" />;
      case false:
        return <Image src={StarIcon} alt="non-favourite icon" />;
    }
  }
  const {getToken} = useAuth();
  async function handleClick() {
    const res = await axios.patch(
      `http://localhost:8080/v1/project${id}`,
      { favourite: !favourite },
      {
        headers: { Authorization: `Bearer ${await getToken()}` },
      }
    );
    if(res.status) {
        setActive((value)=>{return !value});
    }
  }
  const [active, setActive] = useState(favourite);
  return <div onClick={handleClick}>{selectTypeIcon(active)}</div>;
};

export default Favourite;
