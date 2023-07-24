import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { userRows } from "../../datatablesource";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { userInputs } from "../../formsource";
const New = () => {
  const [file, setFile] = useState("");
  let param = useParams();
  let persons = userRows.filter((item) => item.id == param.id);
  console.log(persons);
  console.log(file);

  return (
    <div className="new_container">
      <div className="top">
        <div className="title">
          {persons.length ? <h1>Edit User</h1> : <h1>Add New User</h1>}
        </div>
      </div>
      <div className="new_form">
        {/* {persons.map((person) => ( */}
          {/* // <> */}
            <div className="left">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt="imge"
              ></img>
            </div>
            <div className="right">
              <form>
                <div className="form_input">
                  <label htmlFor="file">
                    <span>image:</span>
                    <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    id="file"
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>

                {userInputs.map((input) => (
                  <div className="form_input" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                ))}
                <button>send</button>
              </form>
            </div>
          {/* </> */}
        {/* ))} */}
      </div>
    </div>
  );
};

export default New;

// {/* {persons &&
//   persons.map((Person) => (
//     <>
//       <h1>{Person.username}</h1>
//     </>
//   ))}
//   {persons.length ? null :<h1>hello</h1> } */}
