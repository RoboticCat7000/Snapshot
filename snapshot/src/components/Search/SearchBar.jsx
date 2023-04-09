import React, { useState } from "react";

export default function SearchBar(props) {
  const search = (key) => {
    if (key == "") {
      return 18;
    }
    return props.images.filter((i) =>
      i.keyword.includes(key.toLowerCase().trim())
    );
  };

  return <input onChange={(i) => props.update(search(i.target.value))}></input>;
}
