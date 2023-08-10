import {Box, Title } from "./Section.styled";


export const Section = ({title, children}) => {
    return (
        <Box>
          {title && <Title title={title}>{title}</Title>}
          {children}
        </Box>
      );
}
