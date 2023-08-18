import { styled } from 'styled-components'

const DiceFace = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: lightgrey;
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  span {
    font-size: 2rem;
  }
`

export const D4Face = styled(DiceFace)`
  clip-path: polygon(50% 5%, 5% 95%, 95% 95%);
`

export const D6Face = styled(DiceFace)`
  clip-path: polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%);
`

export const D8Face = styled(DiceFace)`
  clip-path: polygon(50% 5%, 5% 50%, 50% 95%, 95% 50%);
`

export const D10Face = styled(DiceFace)`
  clip-path: polygon(
    50% 0%,
    80% 10%,
    100% 35%,
    100% 70%,
    80% 90%,
    50% 100%,
    20% 90%,
    0% 70%,
    0% 35%,
    20% 10%
  );
`

export const D12Face = styled(DiceFace)`
  clip-path: polygon(50% 5%, 5% 25%, 5% 75%, 50% 95%, 95% 75%, 95% 25%);
`

export const D20Face = styled(DiceFace)`
  clip-path: polygon(
    50% 5%,
    20% 20%,
    5% 50%,
    20% 80%,
    50% 95%,
    80% 80%,
    95% 50%,
    80% 20%
  );
`