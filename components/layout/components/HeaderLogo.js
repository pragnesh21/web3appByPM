import styled from 'styled-components';

const HeaderLogo = () => {
  return (
    <Logo>🖇️</Logo>
  )
}

const Logo = styled.h1`
font-weight: bold;
font-size: 22px;
margin-left: 9px;
font-family: 'Roboto';
-webkit-letter-spacing: 3px;
-moz-letter-spacing: 3px;
-ms-letter-spacing: 3px;
letter-spacing: 3px;
cursor: pointer
background-color:blue;


/* Media query for mobile devices */
@media (max-width: 768px) {
  font-size: 18px;
  margin-left: 5px;
  // font-weight: normal;
  // font-size: 40px;
  // margin-left: 11px;
  // font-family: 'Roboto';
  // letter-spacing: 3px;
  // cursor: pointer;
`

export default HeaderLogo