import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  width: 60%;
  background-color: #c77373;
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledImg = styled.img`
  width: 50%;
  height: auto;
`;

const Content = () => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [pic, setPic] = useState();
  const fetchFn = () => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=9FGwZtYJEEfM0psIfxCkFPhcyYNFUger4FSa0nqj')
      .then((res) => res.json())
      .then((json) => {
        // setData(json.date)
        setPic(json.url);
        setTitle(json.title);
        setDate(json.date);
      })
      .catch((err) => {
        alert(err);
      });
  };
  useEffect(() => {
    fetchFn();
  });

  return (
    <StyledContent>
      <StyledImg src={pic} />
      <h2>{title}</h2>
      <h4>{date}</h4>
    </StyledContent>
  );
};

export default Content;
