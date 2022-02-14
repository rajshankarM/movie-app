import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";


export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  const incrementLike = () => setLike(like + 1);

  
  return (
    <div className="counter-container">
      <IconButton
        className="likes-dislikes"
        onClick={incrementLike}
        aria-label="like movie"
        color="primary"
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton
        className="likes-dislikes"
        onClick={() => setDisLike(disLike + 1)}
        aria-label="dislike movie"
        color="error"
      >
        <Badge badgeContent={disLike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}
