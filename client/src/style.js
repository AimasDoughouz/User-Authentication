import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 4em;
  background: beige;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: -webkit-fill-available;
`;

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 1;
  width: 100%;
  background-color: navy;
  padding: 5px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: aqua;
  padding: 5px;
  margin: 50px;
  border: solid 1px;
  border-radius: 5px;
  box-shadow: 10px 10px 5px grey;
  width: min-content;
`;

export const Form = styled.form`
 
`;

export const Input = styled.input`
 padding: 5px;
 border: solid 1px gray;
 border-radius: 3px;
 margin: 6px;
`;

export const Label = styled.label`
  margin: 6px;
  font-size: 14px;
`;

export const Warning = styled.p`
  color: red;
`;

export const Button = styled.button`
  margin: 6px 6px 15px 6px;
  padding: 5px;
  border: solid 1px gray;
  border-radius: 3px;
  font-size: 14px;
  background-color: gold;
  font-size: large;
  width: -webkit-fill-available;
`;

