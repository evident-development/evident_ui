import styled from 'styled-components';

export const DocsW = styled.div`
  grid-area: view;
  display: grid;
  grid-template-areas: '. leftbar docinfo rightbar .';
  grid-template-rows: 1fr;
  grid-template-columns: 0.1fr 0.2fr 1fr 0.2fr 0.1fr;
`;
