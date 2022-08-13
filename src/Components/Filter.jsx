import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import {useState} from "react";

function Filter (props) {
   
    
    const [rating, setRating] = useState(0);
    const [title, setTitle] = useState("");
  return (
   
      <div className="form-outline" style={{display:"flex" }}>
        <input id="search-focus" type="search" className="form-control" placeholder="search.."
        value={title}
         onChange={(e) => {
            setTitle(e.target.value);
            props.Filter(title,rating)
          }} />
        <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                      props.Filter(title,rating)
                    }}
                  />{" "}
                  </Box>
       
      </div>
     
     
    
    
  );
};
export default Filter;
