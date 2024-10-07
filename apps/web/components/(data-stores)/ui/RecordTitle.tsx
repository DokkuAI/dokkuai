"use client";

import axios from "axios";


const RecordTitle = ({name, id, url}: {name: string, id: string, url: string}) => {

async function handleClick() {
    // const {data} = await axios.get("", );
    console.log(id);
}
  return <div onClick={handleClick}>{name}</div>;
}

export default RecordTitle