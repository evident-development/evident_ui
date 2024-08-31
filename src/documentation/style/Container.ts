import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "topbar"
    "view";
  grid-template-rows: 64px auto;
  grid-template-columns: 1fr;
  min-height: 100vh;
`;
