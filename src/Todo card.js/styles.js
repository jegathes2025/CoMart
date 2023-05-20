import styled from "styled-components";

export const TodoListTable = styled.div`
  border: 1px solid black;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify};
`;

export const ContainerTodo = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-around;
`;
export const Pendingbox = styled.div`
  border: 2px solid black;
  width: 500px;
`;
