import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled(motion.section)`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: absolute;
  top: 150px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 150px);
  grid-auto-rows: 200px;
  gap: 30px;
  padding: 0 10px;
  justify-content: center;
  margin: 0 auto;
  @media screen and (min-width: 560px) {
    grid-template-columns: repeat(3, 150px);
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 150px);
  }
`;
const List = styled(Link)`
  all: unset;
  cursor: pointer;
  width: 100%;
  text-align: center;
`;
const Img = styled.img`
  width: 100%;
  height: 80%;
`;
const Name = styled.h2`
  color: gray;
  font-size: 20px;
  font-weight: 600;
`;

const AlcolList = ({ data, back, listVariants }) => {
  return (
    <Section custom={back} variants={listVariants} initial="entry" animate="center" exit="exit">
      <Grid>
        {data.map((be, idx) => (
          <List key={idx} to={`${idx}`} data-id={idx} data-type="soju">
            <Img src={be.img} alt={be.name} />
            <Name>{be.name}</Name>
          </List>
        ))}
      </Grid>
    </Section>
  );
};
export default AlcolList;
