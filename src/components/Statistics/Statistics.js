import { StatItem, StatList } from "./Statistics.styled";


export const Statistics = props => {
    return (
      <>
        <StatList>
          {Object.keys(props).map(el => {
            return (
              <StatItem key={el}>
                {el}: {props[el]}
              </StatItem>
            );
          })}
        </StatList>
      </>
    );
  };