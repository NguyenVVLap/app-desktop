import styled from "styled-components";

function Menu() {
  return (
    <Container>
      <button className="btn">Add</button>
      <button className="btn">Add 1</button>
      <button className="btn">Add 2</button>
      <button className="btn">Add 3</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  .btn {
    background-color: red;
    border-radius: 5px;
    padding: 1rem;
    width: 80%;
  }
`;

export default Menu;
