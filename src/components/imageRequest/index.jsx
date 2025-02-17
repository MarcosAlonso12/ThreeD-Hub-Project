import P from 'prop-types';
import * as Styled from './styles';
import { Input } from '../input';
import { useEffect, useState } from 'react';
import { Button } from '../button';

export const ImageRequest = ({ children, images, setImage }) => {
  const handleImageFile = async (event) => {
    if (event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();
        const readFileAsync = async (file) => {
          return new Promise((resolve, reject) => {
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
            reader.readAsDataURL(file);
          });
        };
        try {
          const result = await readFileAsync(file);
          const newImages = [...images, result];
          setImage(newImages);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const removeImg = (index) => {
    images.splice(index, 1);
    setImage([...images]);
  };

  return (
    <Styled.Container>
      <Input>
        <input
          className="inputChange"
          type="file"
          accept="image/*"
          id="image"
          onChange={handleImageFile}
        />
        <label htmlFor="image">Clique aqui ou arraste e solte</label>
      </Input>
      {images.length != 0 &&
        images.map((img, index) => (
          <Styled.ImageConteiner key={index}>
            <img src={img} />
            <Button type="remove">
              <button onClick={() => removeImg(index)}>Remover Imagem</button>
            </Button>
          </Styled.ImageConteiner>
        ))}
    </Styled.Container>
  );
};

ImageRequest.propTypes = {
  children: P.node.isRequired,
  images: P.array.isRequired,
  setImage: P.func.isRequired,
};
