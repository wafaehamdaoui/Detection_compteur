import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

function ListPhotos() {
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    // Replace 'your-api-endpoint' with the actual API endpoint to fetch item data.
    fetch('http://127.0.0.1:8000/api/images')
      .then((response) => response.json())
      .then((data) => setItemData(data));
  }, []); 
  
  return (
    <>
      <div className="grande-div-listePhotos">
        <ImageList sx={{ width: 500, height: 450 }}>
          {itemData.map((item) => (
            <ImageListItem key={item.url}>
              <img
                src={`${item.url}?w=248&fit=crop&auto=format`}
                srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.id}
                loading="lazy"
              />
              <ImageListItemBar
                color='white'
                title={item.id}
                subtitle={<span>by: {item.creator.username}</span>}//author
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
  )
}

export default ListPhotos;
