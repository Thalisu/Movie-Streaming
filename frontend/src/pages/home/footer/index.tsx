import tmdbLogo from "../../../assets/img/tmdbLogo.svg";
import { Container, Span, TmdbLogo } from "./style";

const Footer = () => (
  <Container>
    <Span>API provided by tmdb</Span>
    <TmdbLogo src={tmdbLogo} alt="" />
  </Container>
);

export default Footer;
