
import axios from "axios";


const ProjectTitle = ({
  title,
  id,
}: {
  title: string;
  id: string;
}) => {
   function handleClick() {
    // const {data} = await axios.get("", );
    console.log(id);
  }
  return <div onClick={handleClick}>{title}</div>;
};

export default ProjectTitle;