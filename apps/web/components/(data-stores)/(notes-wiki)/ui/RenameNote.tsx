import axios from 'axios';

const RenameNote = () => {
 async function handleUpdate() {
   await axios.patch(
     "http://localhost:8080/v1/notes"
   );
 }
 return (
   <div className="text-red-500" onClick={handleUpdate}>
     Delete
   </div>
 );
}

export default RenameNote