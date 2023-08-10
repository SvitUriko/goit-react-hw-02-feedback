import { Btn, BtnList, ItemBtn } from "./FeedbackOptions.styled";


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <>
        <BtnList>
          {options.map(option => {
            return (
              <ItemBtn key={option}>
                <Btn
                  type="button"
                  
                  onClick={() => {
                    onLeaveFeedback(option);
                  }}
                >
                  {option}
                </Btn>
              </ItemBtn>
            );
          })}
        </BtnList>
      </>
    );
  };