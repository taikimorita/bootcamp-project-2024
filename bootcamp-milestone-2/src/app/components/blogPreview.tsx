import React from "react";
import style from "./blogPreview.module.css";
import { Blog } from "../blogData";

export default function BlogPreview({ title, date, description, image, imageAlt, slug}: Blog) {
    return (
      <div>
        <h3> {title} </h3>
        <div>
            <img src={image} alt="img" />
            <p>{description}</p>
            <p>{date}</p>
        </div>
      </div>
    );
  }
