import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined"
import ShareIcon from "@mui/icons-material/Share"
import React, { useEffect, useState } from "react"
import axios from "axios"
import matrixImage from "../../images/profile.png"

const Posts = ({ data, index, handleLikeChange, handleUnlikeChange }) => {
  console.log("liked", data._id, data.liked)

  const handleChange = (e) => {
    if (data.liked) {
      handleUnlikeChange(e)
      // alert("unliked");
    } else {
      handleLikeChange(e)
      // alert("liked");
    }
  }

  return (
    <Card key={index} sx={{ width: "100%", height: "auto", marginBottom: "20px", boxShadow: "10px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {data.username[0]}
          </Avatar>
        }
        title={data.username}
        subheader={data.createdAt.substring(0, 10)}
      />
      <CardMedia
        component="img"
        height="20%"
        width="70%"
        image={process.env.REACT_APP_SERVER_URL + "/media/" + data.filename}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary" fontWeight="bold">
          {data.caption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Checkbox
          icon={<FavoriteBorderOutlinedIcon sx={{ color: "red" }} />}
          checkedIcon={<FavoriteOutlinedIcon sx={{ color: "red" }} />}
          checked={data.liked}
          onClick={handleChange}
          value={data._id}
        />{" "}
        <span style={{ fontWeight: "bold", color: "red" }}>{data.totalLikes}</span>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Posts
