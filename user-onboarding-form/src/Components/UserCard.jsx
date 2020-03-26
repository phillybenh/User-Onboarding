import React from "react";
import styled from "styled-components";

//Styles
const Card = styled.section`
  background: black;
  color: yellow;
  width: 225px;
  max-height: 300px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // align-items: flex-start;
  text-align: left;
  padding: 10px;
  margin: 10px;
`;
const List = styled.ul`
  padding: 10px;
  margin: 0 20px;
`;
const Para = styled.p`
  margin-bottom: 0px;
`;

//Function
export default function UserCard(props) {
  // console.log(props.item)
  const data = props.item;
  return (
    <Card>
      <Para>User Data:</Para>
      <List>
        <li>Name: {data.name}</li>
        <li>ID: {data.id}</li>
        <li>Email: {data.email}</li>
        <li>Password: {data.pwd}</li>
        <li>Created at: {data.createdAt}cm</li>
        <li>Terms Accepted?: {data.terms}cm</li>
      </List>
    </Card>
  );
}
